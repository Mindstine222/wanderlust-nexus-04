import { Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  title: string;
  description: string;
  price: string | number;
  duration: string;
  groupSize?: string;
  rating: string | number;
  reviews?: number;
  location?: string;
  image: string;
  badge?: string;
  variant?: "default" | "luxury";
}

const PackageCard = ({
  title,
  description,
  price,
  duration,
  groupSize,
  rating,
  reviews,
  image,
  badge,
  variant = "default",
}: PackageCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-large transition-spring hover:scale-105 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {badge && (
          <Badge
            className={`absolute top-4 right-4 ${
              variant === "luxury" ? "gradient-luxury" : "gradient-sunset"
            } text-white border-0 shadow-medium`}
          >
            {badge}
          </Badge>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">{title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-white font-medium">{rating}</span>
              {reviews && <span className="text-white/80 text-sm ml-1">({reviews})</span>}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/80">From</div>
            <div className="text-3xl font-bold text-white">${price}</div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          {groupSize && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{groupSize}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          variant={variant === "luxury" ? "luxury" : "default"}
          size="lg"
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
