import { Header } from "@/components/Header";
import { DonationCard } from "@/components/DonationCard";
import { SocialButtons } from "@/components/SocialButtons";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchBNBBalance, fetchBNBPrice } from "@/services/blockchainService";

const Index = () => {
  const [bnbBalance, setBnbBalance] = useState<number>(0);
  const [bnbPrice, setBnbPrice] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const bnbAddress = "0xbCaa128b29217c5ae701D11A32FF0923Fb2e273a";
  const usdValue = bnbBalance * bnbPrice;

  const donations = [
    {
      network: "BNB Chain",
      address: bnbAddress,
      totalDonations: loading ? "Loading..." : `${bnbBalance.toFixed(4)} BNB`,
      totalDonationsUSD: loading ? "" : `≈ $${usdValue.toFixed(2)} USD`,
      icon: "🔶",
      explorerUrl: `https://bscscan.com/address/${bnbAddress}`,
    },
  ];

  useEffect(() => {
    const fetchBalances = async () => {
      setLoading(true);
      const [bnbBal, price] = await Promise.all([
        fetchBNBBalance(bnbAddress),
        fetchBNBPrice()
      ]);
      setBnbBalance(bnbBal);
      setBnbPrice(price);
      setLoading(false);
    };

    fetchBalances();
    // Refresh balances every 30 seconds
    const interval = setInterval(fetchBalances, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto px-4 pb-20"
        >
          <div className="max-w-2xl mx-auto">
            {donations.map((donation, index) => (
              <DonationCard
                key={donation.network}
                {...donation}
                delay={0.7 + index * 0.2}
              />
            ))}
          </div>
        </motion.main>
      </div>
      
      <SocialButtons />
    </div>
  );
};

export default Index;
