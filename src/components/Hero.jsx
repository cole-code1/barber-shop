import { siteConfig } from "../data/siteConfig";
import { getCloudinaryImage } from "../utils/cloudinary";

export default function Home() {
  const { cloudName, images } = siteConfig.cloudinary;

  const heroImage = getCloudinaryImage(cloudName, images.hero);
console.log(heroImage);
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-white">
          {siteConfig.tagline}
        </h1>
        <p className="mt-4 text-xl text-gray-200">
          {siteConfig.businessName}
        </p>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
  
  
}
