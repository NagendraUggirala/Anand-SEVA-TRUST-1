import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  BookOpen,
  Heart,
  ArrowUpRight,
  Users,
  Star,
  Smile,
  Globe,
  School,
  HandHeart,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Education & Learning Support",
      description:
        "Quality education, academic guidance, skill development, and moral learning for children and young adults.",
      subPoints: [
        "Quality education",
        "Academic guidance",
        "Skill development",
        "Moral and value-based learning"
      ],
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-200/20 to-blue-100/5",
      borderColor: "border-blue-200/20",
      hoverGradient: "hover:from-blue-300/30 hover:to-blue-200/10",
    },
    {
      icon: Heart,
      title: "Care, Protection & Guidance",
      description:
        "Providing safe and supportive environments where individuals can heal emotionally and rebuild confidence.",
      subPoints: [
        "Heal emotionally",
        "Gain proper counselling",
        "Receive moral guidance",
        "Rebuild their lives with confidence"
      ],
      color: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-200/20 to-red-100/5",
      borderColor: "border-red-200/20",
      hoverGradient: "hover:from-red-300/30 hover:to-red-200/10",
    },
    {
      icon: Smile,
      title: "Emotional Guidance",
      description:
        "Counselling, moral guidance, and support to help children and families navigate difficult circumstances.",
      subPoints: [
        "Professional counselling",
        "Moral guidance sessions",
        "Emotional support",
        "Family mediation"
      ],
      color: "text-pink-600",
      bgColor: "bg-gradient-to-br from-pink-200/20 to-pink-100/5",
      borderColor: "border-pink-200/20",
      hoverGradient: "hover:from-pink-300/30 hover:to-pink-200/10",
    },
    {
      icon: ArrowUpRight,
      title: "Pathway Toward a Better Tomorrow",
      description:
        "Structured programs to restore dignity, rebuild lives, and provide new opportunities for growth and stability.",
      subPoints: [
        "Restore dignity",
        "Rebuild lives",
        "New opportunities",
        "Growth and stability programs"
      ],
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-200/20 to-green-100/5",
      borderColor: "border-green-200/20",
      hoverGradient: "hover:from-green-300/30 hover:to-green-200/10",
    },
    {
      icon: Users,
      title: "Family Support",
      description:
        "Supporting community initiatives and social programs to empower individuals, raise awareness, and create a positive impact.",
      subPoints: [
        "Community initiatives",
        "Social programs",
        "Family empowerment",
        "Awareness campaigns"
      ],
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-200/20 to-purple-100/5",
      borderColor: "border-purple-200/20",
      hoverGradient: "hover:from-purple-300/30 hover:to-purple-200/10",
    },
    {
      icon: HandHeart,
      title: "Individual Care",
      description:
        "Providing personalized support for individuals at risk, helping them avoid unsafe paths, build resilience, and make positive life choices for a brighter future.",
      subPoints: [
        "Personalized support",
        "Risk prevention",
        "Resilience building",
        "Positive life choices guidance"
      ],
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-200/20 to-orange-100/5",
      borderColor: "border-orange-200/20",
      hoverGradient: "hover:from-orange-300/30 hover:to-orange-200/10",
    },
    {
      icon: School,
      title: "Skill Development",
      description:
        "Equipping children and youth with practical skills, hands-on training, and confidence to succeed academically and socially, building a strong foundation for a better future.",
      subPoints: [
        "Practical skills training",
        "Hands-on workshops",
        "Academic success support",
        "Social skill development"
      ],
      color: "text-teal-600",
      bgColor: "bg-gradient-to-br from-teal-200/20 to-teal-100/5",
      borderColor: "border-teal-200/20",
      hoverGradient: "hover:from-teal-300/30 hover:to-teal-200/10",
    },
    {
      icon: Star,
      title: "Moral & Value-based Learning",
      description:
        "Fostering character development, ethics, and value-based education to guide life choices positively.",
      subPoints: [
        "Character development",
        "Ethics education",
        "Value-based learning",
        "Positive life guidance"
      ],
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-200/20 to-yellow-100/5",
      borderColor: "border-yellow-200/20",
      hoverGradient: "hover:from-yellow-300/30 hover:to-yellow-200/10",
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description:
        "Extending support and awareness to wider communities to empower more lives with care and guidance.",
      subPoints: [
        "Wider community support",
        "Awareness programs",
        "Empowerment initiatives",
        "Guidance outreach"
      ],
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-200/20 to-indigo-100/5",
      borderColor: "border-indigo-200/20",
      hoverGradient: "hover:from-indigo-300/30 hover:to-indigo-200/10",
    },
  ];

  return (
    <section
      id="services"
      className="mt-[-60px] bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden pt-6 pb-10"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10 overflow-hidden">
        <div className="text-center mb-14 animate-fade-in">

          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Our Programs
            </span>
          </div>

          <h4 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            What We Provide
          </h4>

          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Extending care, protection, guidance, and skill-building support to families, children, and individuals
            to regain confidence and hope for a brighter future. Families who have been left without care or stability
Children coming from challenging or troubled backgrounds
Individuals who may be drifting toward negative influences or unsafe paths.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm group hover:border-opacity-100 overflow-hidden relative w-full max-w-sm mx-auto`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div
                className={`absolute inset-0 ${service.bgColor} ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}
                >
                  <service.icon
                    className={`h-7 w-7 ${service.color} transition-transform duration-300`}
                  />
                </div>

                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {service.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <div className="space-y-2">
                  {service.subPoints.map((point, pointIndex) => (
                    <div 
                      key={pointIndex} 
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;