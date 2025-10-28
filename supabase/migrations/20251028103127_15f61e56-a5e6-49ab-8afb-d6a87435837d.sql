-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create service_prices table to manage prices for all services
CREATE TABLE public.service_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL CHECK (service_type IN ('visa', 'ticket', 'umrah', 'tour')),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  duration TEXT,
  features JSONB,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.service_prices ENABLE ROW LEVEL SECURITY;

-- Allow public read access for active services
CREATE POLICY "Anyone can view active services"
ON public.service_prices
FOR SELECT
USING (is_active = true);

-- Create index for better performance
CREATE INDEX idx_service_prices_type ON public.service_prices(service_type);
CREATE INDEX idx_service_prices_active ON public.service_prices(is_active);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_service_prices_updated_at
BEFORE UPDATE ON public.service_prices
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();