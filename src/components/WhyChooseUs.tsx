import { ThumbsUp, FileText, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: ThumbsUp,
      title: "Trusted Experts",
      titleUrdu: "قابل تصدیق ماہرین",
    },
    {
      icon: FileText,
      title: "Experience",
      titleUrdu: "تجربہ",
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      titleUrdu: "شرح کامیابی",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-large">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-4 flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-secondary font-arabic text-lg">
                    {feature.titleUrdu}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
