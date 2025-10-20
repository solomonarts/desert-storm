import axios from 'axios';

const BSCSCAN_API_KEY = import.meta.env.VITE_BSCSCAN_API_KEY || 'YourApiKeyToken';
const WALLET_ADDRESS = import.meta.env.VITE_WALLET_ADDRESS || '0x0000000000000000000000000000000000000000';
const BSCSCAN_API_URL = 'https://api.bscscan.com/api';

export interface Transaction {
  from: string;
  to: string;
  value: string;
  timeStamp: string;
  hash: string;
}

export const fetchIncomingTransactions = async (): Promise<Transaction[]> => {
  try {
    const response = await axios.get(BSCSCAN_API_URL, {
      params: {
        module: 'account',
        action: 'txlist',
        address: WALLET_ADDRESS,
        startblock: 0,
        endblock: 99999999,
        sort: 'asc',
        apikey: BSCSCAN_API_KEY,
      },
    });

    if (response.data.status === '1' && Array.isArray(response.data.result)) {
      // Filter only incoming transactions
      return response.data.result.filter(
        (tx: Transaction) => tx.to.toLowerCase() === WALLET_ADDRESS.toLowerCase()
      );
    }
    return [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

export const calculateTotalDonations = (transactions: Transaction[]): number => {
  return transactions.reduce((total, tx) => {
    const valueInBNB = parseFloat(tx.value) / 1e18; // Convert from Wei to BNB
    return total + valueInBNB;
  }, 0);
};

export const fetchBNBPrice = async (): Promise<number> => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd'
    );
    return response.data.binancecoin.usd;
  } catch (error) {
    console.error('Error fetching BNB price:', error);
    return 0;
  }
};
