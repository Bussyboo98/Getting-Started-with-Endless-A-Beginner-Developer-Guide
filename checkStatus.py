import requests

address = "YOUR_ENDLESS _WALLET"

urls = {
    "tokens": f"https://idx.endless.link/api/v1/accounts/{address}/tokens",
    "nfts": f"https://idx.endless.link/api/v1/accounts/{address}/collections",
    "transactions": f"https://idx.endless.link/api/v1/accounts/{address}/transactions"
}

def fetch_safe(url):
    try:
        res = requests.get(url)
        text = res.text
        if text.startswith("{") or text.startswith("["):
            return res.json()
        return []
    except:
        return []

# Display placeholder balance for beginner guide
balance = "0 EDS"
print("Balance (EDS):", balance)

tokens = fetch_safe(urls["tokens"])
print("Tokens:", tokens if tokens else "No tokens found")

nfts = fetch_safe(urls["nfts"])
print("NFT Collections:", nfts if nfts else "No NFTs found")

txs = fetch_safe(urls["transactions"])
print("Transactions:", txs if txs else "No transactions found")

print("\n⚠️ Note: Native EDS balance requires advanced Fullnode API calls.")
