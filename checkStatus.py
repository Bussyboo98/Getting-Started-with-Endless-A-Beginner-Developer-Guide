import requests

address = "YOUR_ENDLESS_ACCOUNT_ADDRESS"
eds_metadata_address = "0x1::eds::EDS"

indexer_urls = {
    "tokens": f"https://idx.endless.link/api/v1/accounts/{address}/tokens",
    "nfts": f"https://idx.endless.link/api/v1/accounts/{address}/collections",
    "transactions": f"https://idx.endless.link/api/v1/accounts/{address}/transactions"
}

fullnode_view_url = "https://rpc.endless.link/v1/view"

def fetch_safe(url):
    try:
        res = requests.get(url)
        text = res.text
        if text.startswith("{") or text.startswith("["):
            return res.json()
        return []
    except:
        return []

def get_eds_balance(account_addr, metadata_addr):
    payload = {
        "function": "0x1::primary_fungible_store::balance",
        "type_arguments": ["0x1::fungible_asset::Metadata"],
        "arguments": [account_addr, metadata_addr]
    }
    try:
        res = requests.post(fullnode_view_url, json=payload)
        data = res.json()
        return data.get("Result", ["0"])[0]
    except Exception as e:
        print("Error fetching EDS balance:", e)
        return "0"

# Fetch and display balance
balance = get_eds_balance(address, eds_metadata_address)
print("Balance (EDS):", balance)

# Fetch tokens
tokens = fetch_safe(indexer_urls["tokens"])
print("Tokens:", tokens if tokens else "No tokens found")

# Fetch NFTs
nfts = fetch_safe(indexer_urls["nfts"])
print("NFT Collections:", nfts if nfts else "No NFTs found")

# Fetch transactions
txs = fetch_safe(indexer_urls["transactions"])
print("Transactions:", txs if txs else "No transactions found")

print("\n⚠️ Note: Balance fetched from Fullnode, tokens/NFTs/transactions via Indexer API.")
