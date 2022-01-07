"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "CryptoPresi";
const description = "CryptoPresis is a collection of 1821 algorithmically generated art pieces inspired by the President of El Salvador, Nayib Bukele. The first NFT project made with love from El Salvador to the world.";
const baseUri = "ipfs://QmZcw3u5FVkEdUMKezvtWYZTnFHR1GQxebnAeQUtU3qbKE";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://replace",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Legendary" },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Base" },
      { name: "Skin" },
      { name: "Haircolor" },
      { name: "Eyes" },
      { name: "Hats" },
      { name: "Mouth" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1048,
  height: 1048,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 250,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creators: "ackermann.eth (twitter: @ackermann_eth), Capitan Capibara (twitter: @capitancapibara)",
  artist: "Pxl Plnktn (twitter: @PxlPlnktn)"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 25,
  thumbWidth: 150,
  imageRatio: format.width / format.height,
  imageName: "collage.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
};
