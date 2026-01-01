import { siteConfig } from "../data/siteConfig";

export default function Services() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold">Services</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {siteConfig.services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 shadow-lg rounded-lg w-60 text-center"
          >
            <h3 className="text-2xl font-medium">{s.title}</h3>
            {/* image */}
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-40 object-cover mt-4 rounded"
            />

            <p className="mt-2 text-lg">{s.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
