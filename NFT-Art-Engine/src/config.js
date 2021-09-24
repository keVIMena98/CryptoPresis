const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://QmbUWfjfBkghsS9vLtp3Hs2WQPDAxk6h8xL659DY33ueYQ";

const layerConfigurations = [
  {
    growEditionSizeTo: 182,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Base" },
      { name: "Skin" },
      { name: "Hats" },
      { name: "Eyes" },
      { name: "Hair & Beard"}
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: false,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 140,
  thumbWidth: 140,
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
