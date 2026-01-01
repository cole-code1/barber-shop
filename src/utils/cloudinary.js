// src/utils/cloudinary.js
export const getCloudinaryImage = (cloudName, publicId) => {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}`;
};
