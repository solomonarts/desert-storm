import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DonationCardProps {
  network: string;
  address: string;
  totalDonations: string;
  totalDonationsUSD: string;
  icon: string;
  explorerUrl: string;
  delay?: number;
}

export const DonationCard = ({ network, address, totalDonations, totalDonationsUSD, icon, explorerUrl, delay = 0 }: DonationCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary">{network}</h3>
            <p className="text-sm text-muted-foreground">Network</p>
          </div>
          <a 
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 hover:bg-accent/20 rounded-lg transition-colors"
            aria-label="View on block explorer"
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-accent" />
          </a>
        </div>
        
        <div className="mb-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1 font-semibold">Donation Address</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-mono text-foreground/90 break-all flex-1">
              {address}
            </p>
            <Button
              onClick={copyAddress}
              variant="ghost"
              size="sm"
              className="shrink-0 hover:bg-accent/20"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-accent/20">
          <p className="text-sm text-muted-foreground mb-1">Total Donations</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            {totalDonations}
          </p>
          <p className="text-lg text-muted-foreground mt-1">
            {totalDonationsUSD}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-accent/20">
          <p className="text-xs text-accent font-medium leading-relaxed">
            All donations go directly to supporting the Hadzabe community with essential resources 
            including food, clean water, medical supplies, and educational materials for their children.
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
