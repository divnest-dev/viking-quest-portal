
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100 mb-6">
          Welcome to Norse Haven
        </h1>
        <p className="text-lg sm:text-xl text-stone-200 mb-8">
          Discover the spirit of the Vikings through our authentic experiences,
          curated gallery, and handcrafted products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/booking"
            className="group bg-stone-100 text-stone-900 px-6 py-3 rounded-lg font-medium hover:bg-stone-200 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Book Experience
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/gallery"
            className="group border border-stone-100 text-stone-100 px-6 py-3 rounded-lg font-medium hover:bg-stone-100/10 transition-colors duration-200"
          >
            View Gallery
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
