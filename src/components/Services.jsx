import { siteConfig } from "../data/siteConfig";
import { getCloudinaryImage } from "../utils/cloudinary";

export default function Services() {
  const { cloudName, images } = siteConfig.cloudinary;

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Services</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
        {siteConfig.services.map((service, i) => {
          const imageUrl = getCloudinaryImage(
            cloudName,
            images[service.imageKey]
          );

          return (
            <div key={i} className="bg-white rounded shadow">
              <img
                src={imageUrl}
                alt={service.title}
                className="h-40 w-full object-cover rounded-t"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm">{service.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
