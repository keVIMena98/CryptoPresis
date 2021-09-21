const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://REPLACE_WITH_IPFS_CID";

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skin" },
      { name: "Hats" },
      { name: "Eyes" },
    ],
  },
];

const format = {
  width: 24,
  height: 24,
};

const background = {
  generate: false,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
