require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZvufWZuuviSnL46j4ulZ6DF6Ib_QRB5b',
      accounts: ['4321c068509fa17d5990016bdbfaab288eb3a5dfccf383c65f1063a19b87c2fb'],
    },
  },
};
