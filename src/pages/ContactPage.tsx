import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Fly Zone</title>
        <meta name="description" content="Get in touch with Fly Zone. We're here to help with your travel plans 24/7." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help you plan your perfect journey
              </p>
            </div>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
