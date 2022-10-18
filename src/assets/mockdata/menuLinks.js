import homepageIcon from 'assets/img/homepage.png';
import nftFarmIcon from 'assets/img/nft-farm.png';
import viewMinerIcon from 'assets/img/view-miner.png';
import nftMintsIcon from 'assets/img/nft-mint.png';
import preSaleIcon from 'assets/img/pre-sale.png';
import marketIcon from 'assets/img/marketplace.png';
import lightMarketIcon from 'assets/img/marketplace-light.png';
import inventoryIcon from 'assets/img/inventory.png';
import dashboardIcon from 'assets/img/dashboard.png';
import lightDashboardIcon from 'assets/img/dashboard-light.png';
import miningFarmIcon from 'assets/img/mining-farm.png';
import lightMiningFarmIcon from 'assets/img/mining-farm-light.png';
import stakingIcon from 'assets/img/staking.png';
import sweepstakesIcon from 'assets/img/sweepstakes.png';
import lightSweepstakesIcon from 'assets/img/sweepstakes-light.png';
import daoVotingIcon from 'assets/img/dao-voting.png';
import supportIcon from 'assets/img/support.png';

const menuLinks = [
  [
    {
      title: 'Home Page',
      url: '/home',
      icon: homepageIcon
    },
    {
      title: 'NFT Farm',
      url: '/nft-farm',
      icon: nftFarmIcon
    },
    {
      title: 'View Miner',
      url: '/miner',
      icon: viewMinerIcon
    }
  ],
  [
    {
      title: 'NFTs Mint',
      url: '/minting',
      icon: nftMintsIcon
    },
    {
      title: 'Pre-Sale',
      url: '/',
      icon: preSaleIcon
    },
    {
      title: 'Marketplace',
      url: '/marketplace',
      icon: marketIcon,
      lightIcon: lightMarketIcon
    },
    {
      title: 'My Inventory',
      url: '/inventory',
      icon: inventoryIcon
    }
  ],
  [
    {
      title: 'Mining dashboard',
      url: '/dashboard',
      icon: dashboardIcon,
      lightIcon: lightDashboardIcon
    },
    {
      title: 'Mining Farm',
      url: '/mining-farm',
      icon: miningFarmIcon,
      lightIcon: lightMiningFarmIcon
    },
    {
      title: 'Staking',
      url: '/staking',
      icon: stakingIcon
    },
    {
      title: 'Sweepstakes',
      url: '/sweepstakes',
      icon: sweepstakesIcon,
      lightIcon: lightSweepstakesIcon
    },
    {
      title: 'DAO Voting',
      url: '/dao-voting',
      icon: daoVotingIcon
    }
  ],
  [
    {
      title: 'Support',
      url: '/support',
      icon: supportIcon
    }
  ]
];

export default menuLinks;
