import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HandCoins, BarChart3, Coins, Wallet, ShieldCheck, Rocket, Copy, MessageCircle, Droplets, HeartHandshake, Cpu, Globe2, 
  BookOpenCheck, Sparkles, Settings, ExternalLink, CheckCircle2, 
  Layers, Activity 
} from "lucide-react";
import TokenOrb from "@/components/TokenOrb";
import Stat from "@/components/Stat";
import Pill from "@/components/Pill";
import { fetchIncomingTransactions, calculateTotalDonations, fetchBNBPrice } from "@/utils/bscScan";
import mainlogo from "@/assets/logomain.png";
import chaba1 from "@/assets/chaba1.jpeg";
import chaba2 from "@/assets/chaba2.jpeg";
import chaba3 from "@/assets/chaba3.jpeg";
import chaba4 from "@/assets/chaba4.jpeg";

const X_URL = "https://x.com/officialchaba";
const TG_URL = "https://t.me/chabaanddudukwe";
const DONATION_WALLET = import.meta.env.VITE_WALLET_ADDRESS || "0xbCaa128b29217c5ae701D11A32FF0923Fb2e273a";
const contractAddress = "0xc643c1960113d5e4229477dfa57cf89da1f87777"
const CONTRACT = "0xc643c1960113d5e4229477dfa57cf89da1f87777";
const SUPPLY = "1 Billion";

export default function Index() {
  const [totalBNB, setTotalBNB] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const transactions = await fetchIncomingTransactions();
        const usdTotal = 5500;
        const bnbPrice = await fetchBNBPrice();
        const bnbTotal = usdTotal/bnbPrice;
        

        setTotalBNB(bnbTotal);
        setTotalUSD(usdTotal);
      } catch (error) {
        console.error('Error fetching donation data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const copy = (t: string) => navigator.clipboard?.writeText(t);
  
  const totalDonatedDisplay = isLoading 
    ? "Loading..." 
    : `$${totalUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(16,185,129,.12),transparent_60%)] from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/5 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-cyan-400 shadow ring-1 ring-white/20 grid place-items-center text-slate-950 font-black"><img src={mainlogo} className="rounded-full" /></div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">$CHABA</p>
              <p className="text-[11px] text-slate-400">Crypto for Real Impact</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#token" className="hover:text-primary">Token</a>
            <a href="#howto" className="hover:text-primary">How to Buy</a>
            <a href="#metrics" className="hover:text-primary">Live</a>
            <a href="#utility" className="hover:text-primary">Utility</a>
            <a href="#roadmap" className="hover:text-primary">Roadmap</a>
            <a href="#donate" className="hover:text-primary">Donate</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={X_URL} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">X</Button>
            </a>
            <a href={TG_URL} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20"><MessageCircle className="h-4 w-4 mr-2"/>TG</Button>
            </a>
            <a href="#donate"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/25">Donate</Button></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="relative overflow-hidden">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <div className="flex flex-wrap gap-2">
              <Pill>Endorsed by Chabba & Dudukwe</Pill>
              <Pill>BNB Chain</Pill>
              <Pill>3% Tax → Donation</Pill>
              <Pill>Supply: {SUPPLY}</Pill>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              $CHABA — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-sky-300">Where Meme Power Funds Humanity</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-xl">
              Trade a token. Change a life. 3% of every swap goes to the tribe's on-chain wallet, funding water, shelter, health and education.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#howto"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"><Rocket className="h-4 w-4 mr-2"/>Buy $CHABA</Button></a>
              <a href="#token"><Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20"><Coins className="h-4 w-4 mr-2"/>Tokenomics</Button></a>
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs text-slate-300">Contract Address</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <code className="text-primary text-sm break-all">{contractAddress}</code>
                <Button onClick={()=>copy(contractAddress)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"><Copy className="h-4 w-4 mr-2"/>Copy</Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <Stat label="Chain" value="BSC"/>
              <Stat label="Launch" value="Flap → PCS"/>
              <Stat label="Tax" value="3%"/>
              
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs">
           
              <Stat label="Supply" value={SUPPLY}/>
              <Stat label="Total Donated" value={totalDonatedDisplay}/>
            </div>
            
          </motion.div>
          <motion.div initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} transition={{duration:.6,delay:.1}}>
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl p-6 bg-gradient-to-b from-slate-950/60 to-slate-900/60">
              <TokenOrb/>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-2"><Activity className="h-3.5 w-3.5 text-primary"/> <span>On‑chain impact</span></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-2"><Layers className="h-3.5 w-3.5 text-primary"/> <span>Real utility</span></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TOKENOMICS */}
        <section id="token" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold">Tokenomics</h2>
              <p className="mt-3 text-slate-300">Simple, transparent, purpose-built for impact.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex items-start gap-3"><Coins className="h-5 w-5 text-primary mt-0.5"/> <span><strong>Ticker:</strong> $CHABA &nbsp; • &nbsp; <strong>Chain:</strong> BSC &nbsp; • &nbsp; <strong>Launch:</strong> Flap → PancakeSwap</span></li>
                <li className="flex items-start gap-3"><HandCoins className="h-5 w-5 text-primary mt-0.5"/> <span><strong>Tax:</strong> 3% on all trades → 100% to the tribe's donation wallet</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-primary mt-0.5"/> <span><strong>Liquidity:</strong> Bonding curve on Flap; migrate to PancakeSwap post-curve</span></li>
                <li className="flex items-start gap-3"><Cpu className="h-5 w-5 text-primary mt-0.5"/> <span><strong>Total Supply:</strong> {SUPPLY}</span></li>
              </ul>

              {/* Wallet & Contract cards */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 rounded-3xl">
                  <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><Wallet className="h-4 w-4 text-primary"/> Donation Wallet</CardTitle></CardHeader>
                  <CardContent className="text-sm">
                    <code className="text-primary break-all">{DONATION_WALLET}</code>
                    <div className="mt-3"><Button onClick={()=>copy(DONATION_WALLET)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"><Copy className="h-4 w-4 mr-2"/>Copy</Button></div>
                    <p className="text-[11px] text-slate-400 mt-2">BNB-supported tokens only.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 rounded-3xl">
                  <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Contract</CardTitle></CardHeader>
                  <CardContent className="text-sm">
                    <code className="text-primary break-all">{CONTRACT}</code>
                    <p className="text-[11px] text-slate-400 mt-2">Will display after Flap deployment.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Graphics card: Live metrics */}
            <div>
              <Card className="bg-white/5 border-white/10 rounded-3xl">
                <CardHeader className="pb-0"><CardTitle className="text-base flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary"/> Live Donation Metrics</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs text-slate-400 mb-2">Total in BNB</p>
                        <p className="text-4xl font-bold text-primary">
                          {isLoading ? "—" : `${totalBNB.toFixed(4)} BNB`}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-2">USD Value</p>
                        <p className="text-4xl font-bold text-cyan-400">
                          {isLoading ? "—" : `$${totalUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-4">
                      Updates automatically every minute • Cumulative total of all incoming transactions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* HOW TO BUY */}
        <section id="howto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl font-bold mb-6">How to Buy</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[{icon: Wallet, title: "1. Get a Wallet", text: "Install a BSC wallet (Trust Wallet, MetaMask). Fund with BNB."}, {icon: Rocket, title: "2. Buy on Flap", text: "Purchase on the bonding curve. Copy the contract post-launch."}, {icon: Coins, title: "3. Trade on PancakeSwap", text: "After migration, swap BNB ↔ $CHABA. Set slippage if needed."}].map((s, i)=> (
              <Card key={i} className="bg-white/5 border-white/10 rounded-3xl">
                <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><s.icon className="h-4 w-4 text-primary"/> {s.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-300">{s.text}</CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">Note: 3% tax supports the tribe's donation wallet. Always double-check the contract address.</p>
        </section>

        {/* UTILITY */}
        <section id="utility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Real-World Utility</h2>
              <p className="mt-3 text-slate-300">Every swap fuels tangible outcomes for the tribe, with on-chain transparency.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex items-start gap-3"><Droplets className="h-5 w-5 text-primary mt-[2px]"/> Clean water: drilling permanent sources and maintenance</li>
                <li className="flex items-start gap-3"><HeartHandshake className="h-5 w-5 text-primary mt-[2px]"/> Shelter & healthcare: durable homes, clinic & hospital access</li>
                <li className="flex items-start gap-3"><BookOpenCheck className="h-5 w-5 text-primary mt-[2px]"/> Education: school + computer lab, AI learning with Grok</li>
                <li className="flex items-start gap-3"><Globe2 className="h-5 w-5 text-primary mt-[2px]"/> Connectivity & income: Starlink and eco‑tourism pilots</li>
              </ul>
            </div>
            <div>
              <Card className="bg-white/5 border-white/10 rounded-3xl">
                <CardHeader className="pb-0"><CardTitle className="text-base flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary"/> Donor Tiers</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-300">
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[{t:"Supporter", p:"$25+", b:"Thank-you badge"},{t:"Builder", p:"$250+", b:"OG role + shoutout"},{t:"Guardian", p:"$2,500+", b:"Name on donors page"}].map((x,i)=> (
                      <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-semibold text-white">{x.t}</p>
                        <p className="text-xs text-slate-300">{x.p}</p>
                        <p className="text-xs mt-2 text-primary">{x.b}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
          <div className="grid lg:grid-cols-4 gap-4">
            {[{t:"Phase 1 — Launch", i:Rocket, pts:["Flap launch","Donation wallet live","Water tank installed",">$5.5k raised"]}, {t:"Phase 2 — Sustain", i:Settings, pts:["Drill permanent water","House Construction","Hospital setup","School + lab"]}, {t:"Phase 3 — Empower", i:Globe2, pts:["Starlink internet","AI learning (Grok)","Eco‑tourism pilots"]}, {t:"Phase 4 — Scale", i:Sparkles, pts:["NGO/Web3 partners","Governance for donors","Replicate model in Africa"]}].map((r,idx)=> (
              <Card key={idx} className="bg-white/5 border-white/10 rounded-3xl">
                <CardHeader><CardTitle className="text-base flex items-center gap-2"><r.i className="h-4 w-4 text-primary"/> {r.t}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {r.pts.map((p,i)=>(<li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-[2px]"/> <span>{p}</span></li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
           {/* Image Gallery Grid */}
           <div className="mt-8 space-y-4">
            {/* Top row: 65% / 35% */}
            <div className="flex gap-4">
              <div className="w-[65%] aspect-[4/1] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-slate-400 text-sm"><img src={chaba1} /></div>
              </div>
              <div className="w-[35%] aspect-[4/1] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-slate-400 text-sm"><img src={chaba2} /></div>
              </div>
            </div>
            
            {/* Bottom row: 25% / 50% / 25% */}
            <div className="flex gap-4">
              <div className="w-[50%] aspect-[4/1] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-slate-400 text-sm"><img src={chaba3} /></div>
              </div>
              <div className="w-[50%] aspect-[4/1] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-slate-400 text-sm"><img src={chaba4} /></div>
              </div>
              
            </div>
          </div>
        </section>

        {/* DONATE */}
        <section id="donate" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Donate / Support</h2>
            <p className="mt-3 text-slate-300">Transparent and on-chain. 100% of the 3% tax routes to the tribe's donation wallet.</p>
            <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs text-slate-300">Donation Wallet (BNB only)</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <code className="text-primary text-sm break-all">{DONATION_WALLET}</code>
                <Button onClick={()=>copy(DONATION_WALLET)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"><Copy className="h-4 w-4 mr-2"/>Copy</Button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <Stat label="Total Donated" value={totalDonatedDisplay}/>
              <Stat label="Supply" value={SUPPLY}/>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={X_URL} target="_blank" rel="noreferrer"><Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">Follow on X</Button></a>
              <a href={TG_URL} target="_blank" rel="noreferrer"><Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20"><MessageCircle className="h-4 w-4 mr-2"/>Join Telegram</Button></a>
            </div>
          </div>
          <div>
            <Card className="bg-white/5 border-white/10 rounded-3xl">
              <CardHeader className="pb-0"><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Transparency & Safety</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>On-chain tracking of donation wallet</li>
                  <li>Public updates with photo/video proof</li>
                  <li>Audit/KYC placeholders (add reports/links)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
              q:"What makes $CHABA different?",
              a:"Every trade funds real humanitarian work for the Hadzabe Tribe, tracked on-chain for full transparency."
            },{
              q:"Where does the 3% tax go?",
              a:"100% of the tax routes to the tribe's donation wallet for water, shelter, health and education projects."
            },{
              q:"How will launch work?",
              a:"We launch on Flap (bonding curve), then migrate liquidity to PancakeSwap after the curve concludes."
            },{
              q:"Is there a contract address?",
              a:"It will be posted here and on X immediately after deployment. Always verify links on official channels."
            }].map((f,i)=> (
              <Card key={i} className="bg-white/5 border-white/10 rounded-3xl">
                <CardHeader className="pb-1"><CardTitle className="text-base">{f.q}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-300">{f.a}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-slate-300">© {new Date().getFullYear()} CHABA Foundation — Built by the community for the Hadzabe Tribe.</p>
              <p className="text-xs text-slate-400 mt-1">Water • Shelter • Health • Education • Connectivity</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={X_URL} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white inline-flex items-center gap-2"> X</a>
              <a href={TG_URL} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white inline-flex items-center gap-2"><MessageCircle className="h-4 w-4"/> Telegram</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
