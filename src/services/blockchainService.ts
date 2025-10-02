// Service to fetch live blockchain balances and prices

export const fetchSolanaBalance = async (address: string): Promise<number> => {
  try {
    const response = await fetch('https://api.mainnet-beta.solana.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getBalance',
        params: [address]
      })
    });
    const data = await response.json();
    // Convert lamports to SOL (1 SOL = 1,000,000,000 lamports)
    return data.result.value / 1000000000;
  } catch (error) {
    console.error('Error fetching Solana balance:', error);
    return 0;
  }
};


export const fetchBNBPrice = async (): Promise<number> => {
  try {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
    const data = await response.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error('Error fetching BNB price:', error);
    return 0;
  }
};

export const fetchBNBBalance = async (address: string): Promise<number> => {
  try {
    // Using BSC public RPC endpoint
    const response = await fetch('https://bsc-dataseed.binance.org/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBalance',
        params: [address, 'latest']
      })
    });
    const data = await response.json();
    
    if (data.result) {
      // Convert hex wei to BNB (1 BNB = 1e18 wei)
      const weiBalance = parseInt(data.result, 16);
      return weiBalance / 1e18;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching BNB balance:', error);
    return 0;
  }
};
