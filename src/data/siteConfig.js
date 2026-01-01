// src/data/siteConfig.js
export const siteConfig = {
  businessName: "Hairport Barbershop",
  tagline: "Fresh Cuts. Clean Style.",
  phone: "+254712345678",
  whatsapp: "254712345678",
  address: "THE BAZAA PLAZA 1 FLOOR ROOM A5, Nairobi",
  instagram: "hairport_barbershop__254",

  cloudinary: {
    cloudName: "daqtttdb0", // Replace with your Cloudinary cloud name
    images: {
      hero: "hero",
      mens: "mens-haircut",
      beard: "beard-trim",
      lineup: "line-up",
    },
  },

  services: [
    { title: "Men's Haircut", imageKey: "mens", price: "KES 800" },
    { title: "Beard Trim", imageKey: "beard", price: "KES 400" },
    { title: "Line-Up", imageKey: "lineup", price: "KES 500" },
  ],

  hours: [
    "Mon–Fri: 9am – 7pm",
    "Sat: 9am – 5pm",
    "Sun: Closed",
  ],
};
