import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGRlc3RpbmF0aW9ufGVufDF8fHx8MTc2MDM4ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel destination"
          className="w-full h-full object-cover animate-[scale-in_0.6s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center space-y-6 animate-[fade-in_0.8s_ease-out]">
          <h1 className="text-white font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
            Your Travel Partner for<br />
            <span className="text-primary">Visas, Flights, and Tours</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the world with confidence. Book flights, process visas, and discover amazing destinations.
          </p>
        </div>
      </div>
    </div>
  );
}
