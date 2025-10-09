import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gerrystravel.com", "support@gerrystravel.com"],
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Travel Street", "New York, NY 10001"],
      color: "text-secondary",
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in Touch
            <span className="block gradient-hero bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you plan your perfect journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-2 ${info.color}`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}

            <Card className="gradient-hero text-white border-0 shadow-large">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="mb-4 text-white/90">
                  Get instant replies to your questions
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="+1 (234) 567-890" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In</label>
                    <Input placeholder="e.g., Visa, Hajj Package" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us about your travel plans..."
                    rows={6}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
