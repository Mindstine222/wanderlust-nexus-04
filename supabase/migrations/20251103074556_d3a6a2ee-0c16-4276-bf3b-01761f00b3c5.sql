-- Create visa_packages table
CREATE TABLE public.visa_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  country TEXT NOT NULL,
  visa_type TEXT NOT NULL,
  processing_time TEXT,
  validity TEXT,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  features JSONB,
  requirements JSONB,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create umrah_packages table
CREATE TABLE public.umrah_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  features JSONB,
  inclusions JSONB,
  exclusions JSONB,
  hotel_details JSONB,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  departure_dates JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tour_packages table
CREATE TABLE public.tour_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  destination TEXT NOT NULL,
  duration TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  features JSONB,
  inclusions JSONB,
  exclusions JSONB,
  itinerary JSONB,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  departure_dates JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.visa_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.umrah_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_packages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Anyone can view active visa packages"
  ON public.visa_packages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view active umrah packages"
  ON public.umrah_packages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view active tour packages"
  ON public.tour_packages
  FOR SELECT
  USING (is_active = true);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_visa_packages_updated_at
  BEFORE UPDATE ON public.visa_packages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_umrah_packages_updated_at
  BEFORE UPDATE ON public.umrah_packages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tour_packages_updated_at
  BEFORE UPDATE ON public.tour_packages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();