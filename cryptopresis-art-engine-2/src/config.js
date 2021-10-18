"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const description =
  "CryptoPresis is a collection of 1821 algorithmically generated art pieces inspired by the President of El Salvador, Nayib Bukele. The first NFT project made with love from El Salvador to the world.";
const baseUri = "ipfs://Qmdxo123SeNPV1zybP8WSfvLHgy8EpH8f9KTFt6SV44CJW";

const layerConfigurations = [
  {
    growEditionSizeTo: 182,
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

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
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
  generate: true,
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
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
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
};
