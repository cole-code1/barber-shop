import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold">Contact & Hours</h2>
      <p className="mt-2">{siteConfig.address}</p>
      <p className="mt-2">
        WhatsApp:{" "}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="text-blue-500"
        >
          {siteConfig.phone}
        </a>
      </p>
      <div className="mt-4">
        {siteConfig.hours.map((h, i) => (
          <p key={i}>{h}</p>
        ))}
      </div>
      <div className="mt-6">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="bg-green-500 px-5 py-2 text-white rounded"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
