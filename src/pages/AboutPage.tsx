import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Award, Users, Globe, HeartHandshake } from "lucide-react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality travel services"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and comfort are our top priorities"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to 150+ destinations worldwide"
    },
    {
      icon: HeartHandshake,
      title: "Trust & Integrity",
      description: "Transparent pricing and reliable service you can count on"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Fly Zone</title>
        <meta name="description" content="Learn about Fly Zone - your trusted partner for visa services, flight tickets, and unforgettable travel packages." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fly Zone</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner in creating unforgettable travel experiences
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  With over a decade of experience in the travel industry, Fly Zone has been helping thousands of travelers explore the world with confidence and ease. We specialize in visa services, flight bookings, and customized travel packages that cater to every budget and preference.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team of travel experts is dedicated to making your journey seamless from start to finish. Whether you're planning a spiritual pilgrimage, a romantic honeymoon, or an adventurous tour, we handle all the details so you can focus on creating memories.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <Testimonials />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
