import { motion } from 'framer-motion';
import { DollarSign, Headphones, Briefcase, Zap } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Best Prices',
    description: 'Competitive rates and exclusive deals on all services',
    color: 'bg-blue-100 text-[#007CFF]'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance whenever you need',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Briefcase,
    title: 'Easy Booking',
    description: 'Simple and hassle-free booking process in minutes',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Zap,
    title: 'Fast Visa Process',
    description: 'Quick turnaround time for all visa applications',
    color: 'bg-orange-100 text-orange-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export function Features() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <h3 className="mb-2 text-[#0B1220]">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
