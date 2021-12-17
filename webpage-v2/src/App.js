import React, { useEffect, useState } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions.js";
import { fetchData } from "./redux/data/dataActions.js";
import * as s from "./styles/globalStyles";
import { homeObjOne } from './components/Welcome/data';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Roadmap from './components/Roadmap';
import Team from "./components/Team";
import FAQ from './components/Faq';
import Footer from './components/Footer';


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Rarible.com to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  // eslint-disable-next-line
  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> 
        <Welcome {...homeObjOne} />
        <s.Container id="Mint" flex={1}
        ai={"center"}
        style={{ padding: 48, backgroundColor: "#000000" }}
        >
        <s.Heading>
        BUY A PRESI
        </s.Heading>
          <s.ResponsiveWrapper flex={1} >
            {/* <s.SpacerLarge /> */}
            <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "#000000",
                padding: 24,
                borderRadius: 24,
                border: "4px dashed #00FFFF",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              }}
            >
              <s.TextTitle
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                <s.TextTitle 
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                >
                LIMITED COLLECTION
                </s.TextTitle>
                <s.SpacerXSmall />
                {CONFIG.MAX_SUPPLY - data.totalSupply} REMAINING
                {/*{data.totalSupply} / {CONFIG.MAX_SUPPLY}*/}
              </s.TextTitle>
              <s.TextDescription
                  style={{ textAlign: "center", color: "#FFFFFF" }}
                >
                  connect wallet to view remaining supply.
              </s.TextDescription>
              <s.SpacerXSmall />
              <s.TextDescription
                style={{
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                <s.StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {/*{truncate(CONFIG.CONTRACT_ADDRESS, 15)}*/}
                  {(CONFIG.CONTRACT_ADDRESS, "Etherscan")}
                </s.StyledLink>
              </s.TextDescription>
              <s.SpacerSmall />
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    The sale has ended.
                  </s.TextTitle>
                  <s.TextDescription
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    You can still find {CONFIG.NFT_NAME} on
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <s.StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </s.StyledLink>
                </>
              ) : (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    1 {CONFIG.NFT_NAME} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </s.TextTitle>
                  <s.SpacerXSmall />
                  <s.TextDescription
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    Excluding gas fees.
                  </s.TextDescription>
                  <s.SpacerSmall />
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "#FFFFFF",
                        }}
                      >
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <s.StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </s.StyledButton>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "#FFFFFF",
                            }}
                          >
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  ) : (
                    <>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "#FFFFFF",
                        }}
                      >
                        {feedback}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <s.StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </s.StyledRoundButton>
                        <s.SpacerMedium />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "#FFFFFF",
                            fontSize: "18px",
                          }}
                        >
                          {mintAmount}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <s.StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </s.StyledRoundButton>
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <s.StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "BUSY" : "BUY"}
                        </s.StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
            </s.Container>
          </s.ResponsiveWrapper>
        </s.Container>
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
      </>
    </Router>
  );
}

export default App;
