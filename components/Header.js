"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloudSun, Menu, X } from "lucide-react";
import { useState } from "react";
const links = [{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}];
export default function Header(){
 const pathname=usePathname(); const [menuOpen,setMenuOpen]=useState(false);
 return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="SkyCast home" onClick={()=>setMenuOpen(false)}><span className="brand-mark"><CloudSun size={23}/></span><span>SkyCast<span style={{color:"#2675e8"}}>.</span></span></Link><button className="menu-button" type="button" aria-label={menuOpen?"Close navigation menu":"Open navigation menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={21}/>:<Menu size={21}/>}</button><nav className={`nav-links ${menuOpen?"nav-open":""}`} aria-label="Main navigation">{links.map(link=><Link key={link.href} href={link.href} className={`nav-link ${pathname===link.href?"active":""}`} aria-current={pathname===link.href?"page":undefined} onClick={()=>setMenuOpen(false)}>{link.label}</Link>)}</nav></div></header>;
}
