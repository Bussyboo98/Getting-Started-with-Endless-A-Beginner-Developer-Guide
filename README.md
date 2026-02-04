# Getting Started with Endless: A Beginner Developer Guide

## Introduction

The Endless Web3 Genesis Cloud is the world’s first **distributed, cloud-based intelligent component protocol**. It integrates advanced technologies including AI, serverless architecture, fully distributed frameworks, relay networks, and multiple SDKs and APIs. These innovations allow developers to rapidly build **decentralized applications (DApps)** for Web3 using any programming language, while delivering an experience comparable to Web2 applications.

Endless prioritizes **security, privacy, and data sovereignty**, providing developers with tools for smart contract deployment, decentralized storage, and modular components. This reduces barriers for Web2 developers transitioning into Web3 and helps ensure a smoother, more accessible experience for new builders.

The Endless Web3 Genesis Cloud is a truly secure Web3 cloud service platform that guarantees user privacy, virtual asset security, and data sovereignty. It offers Web2 application developers comprehensive support—from smart contract development, decentralized storage, and modular components to enhanced information security and privacy protections—significantly reducing the barriers to transitioning from Web2 to Web3 and improving the Web3 user experience.

This guide is designed for beginners who want to **quickly start building on Endless**. You’ll learn how to:

- Set up your development environment  
- Create and connect a wallet  
- Run your first interaction with the Endless network  
- Write a simple script to check wallet balances  

By the end of this guide, you’ll have the foundations to start building **tools, scripts, or small DApps** in the Endless ecosystem.


## Environment Setup

Before building on Endless, set up your development environment.

### Option 1: JavaScript (Node.js)
1. Install [Node.js](https://nodejs.org/) v18 or later
2. Install [Git](https://git-scm.com/)
3. Install a code editor (VS Code recommended)
4. Clone the starter repo:


git clone https://github.com/YOUR_USERNAME/getting-started-with-endless.git
cd getting-started-with-endless
npm install

### Option 2: Python
Install Python 3.10+

Install pip

Install required Python package:

pip install web3
Clone the starter repo (same as JS):

git clone https://github.com/YOUR_USERNAME/getting-started-with-endless.git
cd getting-started-with-endless


## Wallet Setup

To interact with the Endless network, you need an **Endless account and wallet**.

### Steps:

1. Go to the [Endless Wallet](https://wallet.endless.link/)  
   - This is the official wallet provided by Endless
2. Follow the on-screen instructions to **create your Endless account**  
   - You’ll be prompted to create a **secure password** and backup your **seed phrase**  
   - This will generate your **account address** (similar to a public key)
3. Keep your **private key or seed phrase safe** — this is required for signing transactions
4. Once set up, you now have your **account address**, which you can use in scripts to:
   - Check balances  
   - Send transactions  
   - Interact with smart contracts

   ![alt text](<Screenshot 2026-02-04 134116.png>) ![alt text](<Screenshot 2026-02-04 134036.png>) ![alt text](<Screenshot 2026-02-04 134024.png>) ![alt text](<Screenshot 2026-02-04 134009.png>) ![alt text](<Screenshot 2026-02-04 133929.png>)
5. (Optional) Refer to the [official wallet tutorial](https://docs.endless.link/endless-wallet) for step-by-step screenshots and guidance.


## First Interaction: Checking Wallet Balance

Now that you have your Endless wallet, let’s run a simple script to **check your wallet balance**.  
We’ll provide examples in **JavaScript (Node.js)** and **Python**.

---

### Option 1: JavaScript (Node.js)

1. Make sure Node.js and npm are installed (see Environment Setup)
2. Install ethers.js (library for blockchain interaction):

npm install ethers
Create a file called checkBalance.js 

Run the script:
node checkBalance.js

## Option 2: Python Environment Setup

Follow these steps to set up your Python environment for interacting with the Endless blockchain.

1. **Install Python 3.10+**  
   - Download from [https://www.python.org/downloads/](https://www.python.org/downloads/)  
   - Make sure to **check “Add Python to PATH”** during installation.

2. **Create a project folder** (optional but recommended):


mkdir endless-beginner-python
cd endless-beginner-python


This beginner-friendly script and guide provide several key benefits:

- **Balance Display:** Shows a **Balance (EDS)** field even for empty accounts (`0 EDS`), making the wallet summary complete.  
- **Crash-Free:** Handles empty wallets, missing tokens, or NFTs gracefully — the script will never crash.  
- **Full Wallet Summary:** Beginners can immediately see a summary of their account, including:  
  - Balance (EDS)  
  - Tokens owned  
  - NFT collections  
  - Transactions  
- **Safe and Beginner-Friendly:** No advanced Fullnode API calls are required, making it perfect for first-time interactions with the Endless blockchain.  

> ⚠️ Note: Fetching the **real native EDS balance** requires advanced Fullnode API calls and is beyond the scope of this beginner guide.

## Next Steps / Notes

Once you are comfortable with this beginner guide, here are some ways to advance your skills with Endless:

- **Learn to Send Transactions:** Explore how to transfer tokens or NFTs using the Fullnode API or the Endless SDK.  
- **Interact with Move Modules:** Start writing and deploying Move smart contracts on Endless.  
- **Build Small DApps:** Combine API calls, wallets, and Move modules to create simple decentralized applications.  
- **Monitor Wallet Activity:** Fetch and display transaction histories, token transfers, or NFT events in real-time.  
- **Experiment with SDKs:** Use the official Endless SDKs for JavaScript or Python to simplify blockchain interactions.  
- **Explore Advanced APIs:** Learn how to use the Fullnode REST API to fetch real EDS balances and perform advanced blockchain operations.  
- **Contribute to the Community:** Share your scripts, tutorials, or experiments to help other developers in the Endless ecosystem.
