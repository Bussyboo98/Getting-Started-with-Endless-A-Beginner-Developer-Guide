const fetch = require("node-fetch");

const address = "YOUR_ENDLESS _WALLET";

// Indexer API URLs
const urls = {
    tokens: `https://idx.endless.link/api/v1/accounts/${address}/tokens`,
    nfts: `https://idx.endless.link/api/v1/accounts/${address}/collections`,
    transactions: `https://idx.endless.link/api/v1/accounts/${address}/transactions`
};

// Beginner-friendly fetch
async function fetchSafe(url) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        return text && (text.startsWith("{") || text.startsWith("[")) ? JSON.parse(text) : [];
    } catch {
        return [];
    }
}

async function main() {
    // Display placeholder balance (0 EDS) for beginner guide
    const balance = "0 EDS"; 
    console.log("Balance (EDS):", balance);

    const tokens = await fetchSafe(urls.tokens);
    console.log("Tokens owned by account:", tokens.length ? tokens : "No tokens found");

    const nfts = await fetchSafe(urls.nfts);
    console.log("NFT Collections owned by account:", nfts.length ? nfts : "No NFTs found");

    const txs = await fetchSafe(urls.transactions);
    console.log("Transactions:", txs.length ? txs : "No transactions found");

    console.log("\n⚠️ Note: Native EDS balance requires advanced Fullnode API calls.");
}

main();



