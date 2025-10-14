import { Zap, Headphones, DollarSign, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Processing',
    description: 'Quick turnaround time for all services'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance'
  },
  {
    icon: DollarSign,
    title: 'Best Prices',
    description: 'Competitive rates guaranteed'
  },
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Safe and protected transactions'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
