# CryptoPresis

> The first NFT collection from Latin America to the world, commemorating El Salvador's Bitcoin adoption.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet-blue)](https://etherscan.io/address/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621)

## Overview

CryptoPresis is a collection of 1,821 unique algorithmically-generated NFTs inspired by Nayib Bukele and El Salvador's historic decision to adopt Bitcoin as legal tender. The project donates 10% of proceeds to charitable organizations promoting cryptocurrency education throughout Latin America.

- **Contract Address:** `0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621`
- **Network:** Ethereum Mainnet (Chain ID: 1)
- **Total Supply:** 1,821 NFTs (10 Legendary + 1,811 Standard)
- **Metadata:** IPFS (`ipfs://QmZcw3u5FVkEdUMKezvtWYZTnFHR1GQxebnAeQUtU3qbKE`)
- **Marketplace:** [OpenSea](https://opensea.io/collection/cryptopresisofficial)

## Quick Start

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

```bash
# Clone repository
git clone https://github.com/keVIMena98/CryptoPresis.git
cd CryptoPresis

# Install frontend dependencies
cd webpage
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local if needed (optional for development)

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application.

## Project Structure

```
CryptoPresis/
├── art-engine/          # NFT artwork generation engine
│   ├── layers/          # Source artwork by trait
│   ├── src/             # Generation scripts
│   └── README.md        # Art engine documentation
│
├── smart-contracts/     # Ethereum smart contracts
│   ├── contracts/       # Solidity contracts
│   │   └── NFT_FULL_COMMISSION_FLAT.sol
│   └── whitelist/       # Whitelist management scripts
│
├── webpage/             # React + TypeScript dApp
│   ├── src/             # Application source code
│   ├── public/          # Static assets
│   └── package.json     # Dependencies
│
├── docs/                # Documentation (coming soon)
└── claude.md            # Comprehensive codebase analysis
```

## Technology Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **State Management:** Redux Toolkit + Redux Thunk
- **Blockchain:** Web3.js 4.x
- **Routing:** React Router 6

### Smart Contracts
- **Language:** Solidity ^0.8.0
- **Standard:** ERC721Enumerable (OpenZeppelin)
- **Network:** Ethereum Mainnet

### Art Generation
- **Engine:** HashLips Art Engine
- **Runtime:** Node.js
- **Storage:** IPFS (Pinata)

## Development

### Available Scripts

**Frontend (webpage/):**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

**Art Engine (art-engine/):**
```bash
npm run generate # Generate NFT artwork
npm run rarity   # Calculate rarity scores
npm run preview  # Preview generated collection
```

### Building for Production

```bash
cd webpage
npm run build
# Output will be in dist/
```

## Smart Contract Details

**Contract Name:** CryptoPresis
**Symbol:** CRPR
**Standard:** ERC721Enumerable

### Key Features
- 1,821 maximum supply
- Whitelist support for presale
- Per-wallet minting limits (30 max)
- 6% commission to designated address
- Pausable minting
- Metadata reveal mechanism

### Contract Functions
- `mint(uint256 amount)` - Mint NFTs
- `walletOfOwner(address)` - Get all tokens owned by address
- `tokenURI(uint256)` - Get metadata URI for token
- `totalSupply()` - Get total minted count

View contract on [Etherscan](https://etherscan.io/address/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621)

## Contributing

Contributions are welcome! Please read our contributing guidelines (coming soon) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Documentation

- [Codebase Analysis & Revamp Plan](./claude.md) - Comprehensive technical review
- [Art Engine Documentation](./art-engine/README.md) - NFT generation guide
- Architecture Documentation (coming soon)
- Deployment Guide (coming soon)

## Team

- **Creators:** ackermann.eth, Capitan Capibara
- **Artist:** Pxl Plnktn
- **Built with:** HashLips Art Engine

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Website:** [CryptoPresis Official](https://cryptopresis.com) (if applicable)
- **OpenSea:** [View Collection](https://opensea.io/collection/cryptopresisofficial)
- **Twitter:** (add if available)
- **Discord:** (add if available)

## Acknowledgments

- HashLips for the amazing art engine
- OpenZeppelin for secure smart contract libraries
- The El Salvador Bitcoin community
- All CryptoPresis holders and supporters

---

**Note:** This project commemorates a historic moment in cryptocurrency adoption. 10% of proceeds support cryptocurrency education in Latin America through organizations like Bitcoin Beach.
