import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions.js";
import { fetchData } from "../../redux/data/dataActions.js";
import styled from "styled-components";

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  // max-width: 1100px;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h1`
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #FFFFFF;

    @media screen and (max-wdith: 480px) {
        font-size: 12px;
    }
`;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #00FFFF;
  padding: 10px;
  font-weight: bold;
  color: #000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: #000000;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: #00FFFFFF;
  text-decoration: none;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

export const TextTitle = styled.p`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: #FFFFFF;
  font-size: 12px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: #FFFFFF;
  font-size: 10px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

function Dapp() {
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

  return (
    <Container id="Mint" flex={1}
    ai={"center"}
    style={{ padding: 48, backgroundColor: "#000000" }}
    >
      <Heading>
      BUY A PRESI
      </Heading>
      <ResponsiveWrapper flex={1} >
        {/* <SpacerLarge /> */}
        <Container
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
          <TextTitle
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            <TextTitle 
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
            LIMITED COLLECTION
            </TextTitle>
            <SpacerXSmall />
            {CONFIG.MAX_SUPPLY - data.totalSupply} REMAINING
            {/*{data.totalSupply} / {CONFIG.MAX_SUPPLY}*/}
          </TextTitle>
          <TextDescription
              style={{ textAlign: "center", color: "#FFFFFF" }}
            >
              connect wallet to view remaining supply.
          </TextDescription>
          <SpacerXSmall />
          <TextDescription
            style={{
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
              {/*{truncate(CONFIG.CONTRACT_ADDRESS, 15)}*/}
              {(CONFIG.CONTRACT_ADDRESS, "Etherscan")}
            </StyledLink>
          </TextDescription>
          <SpacerSmall />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <TextTitle
                style={{ textAlign: "center", color: "#FFFFFF" }}
              >
                The sale has ended.
              </TextTitle>
              <TextDescription
                style={{ textAlign: "center", color: "#FFFFFF" }}
              >
                You can still find {CONFIG.NFT_NAME} on
              </TextDescription>
              <SpacerSmall />
              <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </StyledLink>
            </>
          ) : (
            <>
              <TextTitle
                style={{ textAlign: "center", color: "#FFFFFF" }}
              >
                1 {CONFIG.NFT_NAME} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}.
              </TextTitle>
              <SpacerXSmall />
              <TextDescription
                style={{ textAlign: "center", color: "#FFFFFF" }}
              >
                Excluding gas fees.
              </TextDescription>
              <SpacerSmall />
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <Container ai={"center"} jc={"center"}>
                  <TextDescription
                    style={{
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network to buy CryptoPresis
                  </TextDescription>
                  <SpacerSmall />
                  <StyledButton
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    BUY
                  </StyledButton>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <SpacerSmall />
                      <TextDescription
                        style={{
                          textAlign: "center",
                          color: "#FFFFFF",
                        }}
                      >
                        {blockchain.errorMsg}
                      </TextDescription>
                    </>
                  ) : null}
                </Container>
              ) : (
                <>
                  <TextDescription
                    style={{
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    {feedback}
                  </TextDescription>
                  <SpacerMedium />
                  <Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledRoundButton
                      style={{ lineHeight: 0.4 }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </StyledRoundButton>
                    <SpacerMedium />
                    <TextDescription
                      style={{
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: "18px",
                      }}
                    >
                      {mintAmount}
                    </TextDescription>
                    <SpacerMedium />
                    <StyledRoundButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </StyledRoundButton>
                  </Container>
                  <SpacerSmall />
                  <Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY"}
                    </StyledButton>
                  </Container>
                </>
              )}
            </>
          )}
          <SpacerMedium />
        </Container>
      </ResponsiveWrapper>
    </Container>
  )
}

export default Dapp;
