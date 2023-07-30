require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepoila: {
      url: "",
      accounts: ["78712e759a9f794161cd7a79685129f7ac03c46302d3fc46a51d54a47f73c5bd"]

    }
  }
};
