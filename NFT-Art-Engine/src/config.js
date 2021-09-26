"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "CryptoPresis is a collection of 1821 algorithmically generated art pieces inspired by the President of El Salvador, Nayib Bukele. The first NFT project made with love from El Salvador to the world.";
const baseUri = "ipfs://Qmdxo123SeNPV1zybP8WSfvLHgy8EpH8f9KTFt6SV44CJW";

const layerConfigurations = [
  {
    growEditionSizeTo: 1756,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Base" },
      { name: "Skin" },
      { name: "Haircolor"},
      { name: "Hats" },
      { name: "Eyes" }
    ],
  },

  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Base" },
      { name: "Skin" },
      { name: "Haircolor"},
      { name: "Hats" },
      { name: "Eyes" }
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = {
  creators: "ackermann.eth (twitter: @ackermann_eth), Capitan Capibara (twitter: @capitancapibara)",
  artist: "Pxl Plnktn (twitter: @PxlPlnktn)"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 150,
  thumbWidth: 150,
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
};
