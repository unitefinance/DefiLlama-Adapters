const { sumTokens2, nullAddress, } = require('../helper/unwrapLPs')

async function FantomTvl(_time, _ethBlock, { fantom: block }) {
  const contracts = {
    "trading": "0xD296169A91C8eD59C08eb2f7D831bd646a8AF2C8",
    "ftmPool": "0xBec7d4561037e657830F78b87e780AeE1d09Fc7B",
    "usdcPool": "0x7A494C755911Ce06444C47248108439a06Ac028C",
  };
  const usdc = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
  const chain = 'fantom'
  const tokens = [usdc, nullAddress]
  const owners = Object.values(contracts)
  return sumTokens2({ chain, block, tokens, owners, })
};

async function BobaTvl(_time, _ethBlock, { boba: block }) {
  const contracts = {
    "trading": "0x9Ba3db52BC401F4EF8ba23e56268C3AdE0290837",
    "ethpool": "0x9673B0E0F07e4a6da712F6847aE93C3F157DD509",
  };
  const chain = 'boba'
  const tokens = [nullAddress]
  const owners = Object.values(contracts)
  return sumTokens2({ chain, block, tokens, owners, })
};

async function MetisTvl(_time, _ethBlock, { metis: block }) {
  const contracts = {
    "trading": "0x1AA263d79E1f70409CE9159bb1A51F7844010a01",
    "metisPool": "0x9Ba3db52BC401F4EF8ba23e56268C3AdE0290837",
    "wethPool": "0xb3D7D548dA38Dac2876Da57842a3cbaaf9a3bD96",
  };
  const weth = "0x420000000000000000000000000000000000000a";
  const chain = 'metis'
  const tokens = [weth, nullAddress]
  const owners = Object.values(contracts)
  return sumTokens2({ chain, block, tokens, owners, })
};

module.exports = {
  methodology: "Assets staked in the pool and trading contracts",
  fantom: {
    tvl: FantomTvl
  },
  boba: {
    tvl: BobaTvl
  },
  metis: {
    tvl: MetisTvl
  },
};
