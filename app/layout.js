import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "SkyCast | Simple Weather",
  description: "A responsive weather dashboard powered by Open-Meteo.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><div className="site-shell"><Header /><main className="main-content">{children}</main><Footer /></div></body></html>;
}
