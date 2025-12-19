import React from "react";
import { Button } from "../components/ui/button";
import { Heart, ArrowRight, BookOpen, Shield, Home, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

/* WORKFLOW STEPS */
const steps = [
  {
    id: "01",
    title: "Our Mission",
    text: "Anand Seva Trust is dedicated to supporting families and individuals facing difficult or vulnerable circumstances.",
  },
 
  {
    id: "02",
    title: "Education & Learning",
    text: "We provide quality education, academic guidance, skill development, and value-based learning to build a strong foundation.",
  },
  {
    id: "03",
    title: "Care & Protection",
    text: "We ensure emotional healing, counselling, moral guidance, and a safe environment for growth and rebuilding confidence.",
  },
  {
    id: "04",
    title: "Path to Better Future",
    text: "Through structured programs and compassionate care, we help restore dignity and offer new opportunities for stability and hope.",
  },
];

// What We Do Section Data - 4 CARDS
const whatWeDo = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "We provide free education, books, and school supplies to underprivileged children, ensuring they have access to quality learning opportunities.",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Care & Protection",
    description: "We offer a safe haven for children in need, providing shelter, nutrition, and emotional support in a nurturing environment.",
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Home,
    title: "Family Support",
    description: "We assist struggling families with essential needs, counselling services, and rehabilitation programs to help them become self-sufficient.",
    color: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "We organize health camps, skill development workshops, and awareness programs to uplift entire communities.",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const events = [
  {
    day: "29",
    month: "July",
    title: "Manager Disapproved of the Most Recent Work.",
    text: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut",
    venue: "350 5th Ave New York, NY 118 United States",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
  {
    day: "15",
    month: "Aug",
    title: "Annual Charity Gala Dinner 2024",
    text: "Join us for an evening of fine dining and fundraising to support children's education",
    venue: "Grand Ballroom, Manhattan, NY 10001",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=250&fit=crop",
  },
  {
    day: "22",
    month: "Sep",
    title: "Volunteer Training Workshop",
    text: "Learn essential skills and techniques to become an effective volunteer in our community",
    venue: "Community Center, Brooklyn, NY 11201",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
  },
  {
    day: "05",
    month: "Oct",
    title: "Winter Clothing Drive Launch",
    text: "Help us collect warm clothing for families in need during the upcoming winter season",
    venue: "Central Park, New York, NY 10022",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop",
  },
];

const counters = [
  { count: "260+", label: "Total Happy Children" },
  { count: "110+", label: "Total Our Volunteer" },
  { count: "190+", label: "Our Products & Gifts" },
  { count: "560+", label: "Family Support" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [donationAmount, setDonationAmount] = useState("500");
  
  // Donation progress state
  const [raised, setRaised] = useState(25000);
  const [goal, setGoal] = useState(30000);
  const progress = (raised / goal) * 100;

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of supported child",
      content:
        "Anand Seva Trust gave my daughter the education and support she needed when we had nowhere else to turn.",
      avatar: "PS",
    },
    {
      name: "Rahul Mehta",
      role: "Volunteer",
      content:
        "Working with the trust has been life-changing. Seeing the transformation is the most rewarding experience.",
      avatar: "RM",
    },
    {
      name: "Dr. Anjali Patel",
      role: "Education Partner",
      content:
        "The systematic approach and genuine care shown by Anand Seva Trust sets them apart.",
      avatar: "AP",
    },
    {
      name: "Sanjay Kumar",
      role: "Donor",
      content:
        "Transparent operations and visible impact make Anand Seva Trust my preferred charity for donations.",
      avatar: "SK",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
        {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 flex items-center justify-center bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-800/90 text-white overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2070&am…`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
        </div>
 
        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>
 
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 rounded-full text-sm border border-white/30">
                <Heart className="h-4 w-4" />
                Transforming Lives Since 2010
              </div>
 
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Anand Seva Trust
              </h1>
 
              <p className="text-xl sm:text-2xl font-light mb-8 text-blue-100">
                Extending Care. Restoring Lives. Empowering Futures.
              </p>
 
              <p className="text-base sm:text-lg text-blue-100 mb-8">
                A compassionate initiative dedicated to supporting individuals
                and families facing difficulties.
              </p>
 
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg flex items-center justify-center"
                >
                  Get More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
     

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-orange-100 rounded-full text-sm">
              <Heart className="h-4 w-4 text-orange-600" />
              Our Services
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              At Anand Seva Trust,is a compassionate initiative dedicated to supporting individuals and families
who are facing difficult or vulnerable circumstances. Our mission is to guide, uplift, and
empower those who may feel abandoned, unsupported, or at risk of falling into unhealthy
environments.
            </p>
          </div>

          {/* Services Grid - 4 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whatWeDo.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`w-full h-full rounded-full ${service.color.replace('bg-', 'bg-').replace('-100', '-500')}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Education Focus Section - SIMPLIFIED */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-100 rounded-full text-sm border border-blue-200">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Education Initiative
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  Transforming Lives Through Education
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  At Anand Seva Trust, we believe education is the most powerful tool for breaking 
                  the cycle of poverty and social stigma. We provide comprehensive educational support 
                  to ensure every child gets the opportunity to learn and grow, regardless of their circumstances.
                </p>
                
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r">
                  <h4 className="font-bold text-red-700 mb-2">Special Focus: Children of Incarcerated Parents</h4>
                  <p className="text-gray-700 text-sm">
                    We recognize that children with incarcerated parents face unique challenges. 
                    Our specialized program provides education, counseling, and emotional support 
                    to help them build a better future.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Free quality education for underprivileged children",
                    "Special support for children of incarcerated parents",
               
                    "Computer literacy and digital skills training",
                    "Scholarships for higher education",
                    "Vocational training for youth and adults"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition flex items-center gap-2 group"
                >
                  Support Education Initiative
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Right Image - SIMPLE */}
              <div className="relative">
                <img 
                  src="https://t4.ftcdn.net/jpg/07/10/65/15/360_F_710651583_jIC23hTf56SeKm1CO45J3sYRleYeZa7q.jpg" 
                  alt="Children learning at Anand Seva Trust"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Image Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                  <div className="grid grid-cols-3 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold">85+</div>
                      <div className="text-xs sm:text-sm">Children of Incarcerated Parents Supported</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold">260+</div>
                      <div className="text-xs sm:text-sm">Total Children Educated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold">120+</div>
                      <div className="text-xs sm:text-sm">Scholarships Provided</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

     {/* ================= HEART IMAGE SECTION ================= */}
      <section className="w-full flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-20">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 items-center">
          {/* IMAGE */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute -top-16 -left-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl opacity-40"></div>
 
            {/* Heart image container (use class .heart-image for CSS switching) */}
            <div className="heart-image overflow-hidden">
              <img
                src="https://themeshub.net/themes/freeweb/free/charitics/assets/img/about-img.png"
                alt="heart"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
          {/* TEXT */}
          <div>
            <h4 className="text-orange-600 font-semibold mb-3 text-sm sm:text-base">
              About Us
            </h4>
 
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-snug sm:leading-tight">
              Helping Each Other Can Make <br /> World Better
            </h1>
 
            <p className="text-gray-600 text-base sm:text-lg mb-8">
              We help families and children facing difficulties with care,
              education and support.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-orange-600 text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-700 transition flex items-center gap-2"
            >
              Explore More →
            </button>
          </div>
        </div>
      </section>
    
      {/* ================= COUNTERS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-blue-50 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {counters.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center mb-4 sm:mb-6 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors">
                    {item.count}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">



          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            What People Say About <span className="text-orange-500">Anand Seva Trust</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">

            {/* Left rating card */}
            <div className="bg-orange-50 rounded-2xl shadow p-6 sm:p-10 w-full md:w-[380px] mb-8 md:mb-0">
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">4.9</h3>
              <div className="flex justify-center mt-2 sm:mt-3">
                {[1,2,3,4,5].map((i) => (
                  <FaStar key={i} className="text-orange-500 text-lg sm:text-xl" />
                ))}
              </div>
              <p className="text-center text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">5 Star Rating</p>
              <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 text-center">
                Join thousands of satisfied donors and volunteers who have experienced 
                the transformative work of Anand Seva Trust.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 1" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 2" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 3" />
                <img src="https://i.pravatar.cc/40?img=4" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 4" />
              </div>
            </div>

            {/* Right side - Testimonials Carousel */}
            <div className="flex-1 relative w-full">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <p className="text-orange-500 text-3xl sm:text-5xl mb-2 sm:mb-4">❝</p>
                      <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-8">
                        <img
                          src={`https://i.pravatar.cc/60?img=${index+12}`}
                          className="w-10 sm:w-14 h-10 sm:h-14 rounded-full"
                          alt={testimonial.name}
                        />
                        <div>
                          <h4 className="text-sm sm:text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-8">
                <button 
                  onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="w-8 sm:w-10 h-8 sm:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-8 sm:w-10 h-8 sm:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-orange-500 w-6 h-3 sm:w-8 sm:h-3' : 'bg-orange-300 w-3 h-3 sm:w-3 sm:h-3'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;