import { siteConfig } from "../data/siteConfig";
export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="text-xl font-bold">{siteConfig.businessName}</div>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="bg-green-500 px-3 py-1 rounded"
      >
        WhatsApp
      </a>
    </nav>
  );
}
