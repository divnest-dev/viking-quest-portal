
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Viking Battle Axe Replica",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Hand-forged authentic Viking axe replica",
    },
    {
      id: 2,
      name: "Norse Compass Pendant",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      description: "Traditional Viking navigation compass pendant",
    },
    {
      id: 3,
      name: "Handcrafted Mead Horn",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      description: "Authentic drinking horn with stand",
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
            Viking Artifacts
          </h1>
          <p className="text-stone-600 text-lg">
            Authentic replicas and Nordic-inspired merchandise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`${product.image}?auto=format&fit=crop&w=800`}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-stone-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-stone-900">
                    ${product.price}
                  </span>
                  <button className="bg-stone-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-stone-800 transition-colors duration-200">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
