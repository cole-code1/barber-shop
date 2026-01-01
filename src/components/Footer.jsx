import { siteConfig } from "../data/siteConfig";
export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>Follow us on Instagram:</p>
      <a
        href={`https://instagram.com/${siteConfig.instagram}`}
        className="text-blue-400"
      >
        @{siteConfig.instagram}
      </a>
    </footer>
  );
}
