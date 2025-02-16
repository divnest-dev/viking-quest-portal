
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Nordic Landscape",
    },
    {
      url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      title: "Mountain Vista",
    },
    {
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      title: "Ancient Paths",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Viking Gallery
          </h1>
          <p className="text-stone-600 text-lg">
            Explore our collection of Nordic imagery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={`${image.url}?auto=format&fit=crop&w=800`}
                  alt={image.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-stone-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={`${selectedImage}?auto=format&fit=crop&w=1200`}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
