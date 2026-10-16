import Link from "next/link";
import { CloudSun } from "lucide-react";
export default function Footer(){return <footer className="footer"><div className="container footer-inner"><Link href="/" className="brand" aria-label="SkyCast home"><span className="brand-mark"><CloudSun size={22}/></span><span>SkyCast</span></Link><span>Weather data provided by <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>.</span><span>Made for everyday forecasts Â· Â© {new Date().getFullYear()} SkyCast</span></div></footer>;}
