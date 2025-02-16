
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-100 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Book Your Viking Experience
          </h1>
          <p className="text-stone-600 text-lg">
            Choose your preferred date and experience type
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">Select Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">Experience Type</h2>
            <div className="space-y-4">
              {[
                "Viking Feast Experience",
                "Axe Throwing Session",
                "Nordic Crafts Workshop",
                "Runic Writing Class",
              ].map((experience) => (
                <label
                  key={experience}
                  className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-stone-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="experience"
                    className="h-4 w-4 text-stone-600 focus:ring-stone-500"
                  />
                  <span className="text-stone-700">{experience}</span>
                </label>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <button className="bg-stone-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-stone-800 transition-colors duration-200">
            Proceed to Booking
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Booking;
