import { motion } from "framer-motion";
// import { Twitter, MessageCircle, MessageSquare } from "lucide-react";

import { FaXTwitter, FaTelegram,FaYoutube } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const SocialButtons = () => {
  const socials = [
    { 
      icon: FaXTwitter, 
      label: "X", 
      url: "https://x.com/officialchaba",
      color: "hover:bg-[#1DA1F2]/20"
    },
    { 
      icon: FaTelegram, 
      label: "Telegram", 
      url: "https://t.me",
      color: "hover:bg-[#0088cc]/20"
    },
    { 
      icon: FaYoutube, 
      label: "Discord", 
      url: "https://www.youtube.com/",
      color: "hover:bg-[#5865F2]/20"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="fixed bottom-8 right-8 flex flex-col gap-3 z-50"
    >
      {socials.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="icon"
            className={`h-14 w-14 rounded-full bg-card/90 backdrop-blur-sm border-2 border-accent/30 ${social.color} transition-all shadow-lg hover:shadow-xl`}
            asChild
          >
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6 text-primary" />
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
