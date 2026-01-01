import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
    >
      <h1 className="text-5xl font-bold">{siteConfig.tagline}</h1>
      <p className="mt-4 text-xl">{siteConfig.businessName}</p>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="mt-6 px-6 py-3 bg-green-500 rounded"
      >
        Book via WhatsApp
      </a>
    </section>
  );
}
