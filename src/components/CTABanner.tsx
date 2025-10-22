import { motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#007CFF] via-[#0066CC] to-[#00BFFF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Plane className="h-32 w-32 text-white transform rotate-45" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Plane className="h-40 w-40 text-white transform -rotate-12" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-6 px-4">
            Ready to Explore? Book Your Next Trip Now!
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto px-4">
            Join thousands of happy travelers who trust Fly Zone for their journey. 
            Get exclusive deals and offers on flights, visas, and tours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/flights">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-[#007CFF] hover:bg-gray-100 h-14 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Booking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/offers">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#007CFF] h-14 px-8 text-lg transition-all duration-300"
                >
                  View Special Offers
                </Button>
              </motion.div>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-white">
              <div className="text-3xl md:text-4xl mb-2">10K+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl mb-2">50+</div>
              <div className="text-white/80 text-sm">Destinations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
