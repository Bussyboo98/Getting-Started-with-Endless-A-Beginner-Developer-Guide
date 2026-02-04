const fetch = require("node-fetch");

// Replace with your Endless account address
const address = "YOUR_ENDLESS_ACCOUNT_ADDRESS";

// Replace with the EDS metadata address from Endless docs
const edsMetadataAddress = "0x1::eds::EDS";

// API URLs
const indexerUrls = {
    tokens: `https://idx.endless.link/api/v1/accounts/${address}/tokens`,
    nfts: `https://idx.endless.link/api/v1/accounts/${address}/collections`,
    transactions: `https://idx.endless.link/api/v1/accounts/${address}/transactions`
};

const fullnodeViewUrl = "https://rpc.endless.link/v1/view";

// Fetch safe function for indexer APIs
async function fetchSafe(url) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        return text && (text.startsWith("{") || text.startsWith("[")) ? JSON.parse(text) : [];
    } catch {
        return [];
    }
}

// Fetch real EDS balance via Fullnode
async function getEDSBalance(accountAddr, metadataAddr) {
    try {
        const payload = {
            function: "0x1::primary_fungible_store::balance",
            type_arguments: ["0x1::fungible_asset::Metadata"],
            arguments: [accountAddr, metadataAddr]
        };

        const res = await fetch(fullnodeViewUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        return data?.Result?.[0] || "0"; // fallback to 0 if empty
    } catch (err) {
        console.error("Error fetching EDS balance:", err.message);
        return "0";
    }
}

async function main() {
    // Fetch and display balance
    const balance = await getEDSBalance(address, edsMetadataAddress);
    console.log("Balance (EDS):", balance);

    // Fetch tokens
    const tokens = await fetchSafe(indexerUrls.tokens);
    console.log("Tokens owned by account:", tokens.length ? tokens : "No tokens found");

    // Fetch NFTs
    const nfts = await fetchSafe(indexerUrls.nfts);
    console.log("NFT Collections owned by account:", nfts.length ? nfts : "No NFTs found");

    // Fetch transactions
    const txs = await fetchSafe(indexerUrls.transactions);
    console.log("Transactions:", txs.length ? txs : "No transactions found");

    console.log("\n⚠️ Note: Balance fetched from Fullnode, tokens/NFTs/transactions via Indexer API.");
}

main();