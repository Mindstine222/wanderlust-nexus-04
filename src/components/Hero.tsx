import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGRlc3RpbmF0aW9ufGVufDF8fHx8MTc2MDM4ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl md:text-6xl mb-4">
            Your Journey Begins Here
          </h1>
          <p className="text-white/90 text-xl">
            Visas, Flights, Tours & Car Rentals - All in One Place
          </p>
        </div>
      </div>
    </div>
  );
}
