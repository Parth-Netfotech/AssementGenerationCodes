import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Search,
  Handshake,
  Calendar,
  BarChart3,
  Mail,
  Phone,
  MessageSquare,
  Twitter,
  Instagram,
  Linkedin,
  UserCheck,
  PieChart,
  CalendarClock,
  FileSearch,
  Mic,
  Brain,
  Monitor,
  Check,
  Rocket,
  Menu,
  X,
  FileText,
  Target,
  Users,
  MessageCircle,
  Clock,
  Shield,
  Zap,
  MapPin
} from 'lucide-react';
import heroimg from '../../img/callbot.png'
import flicker from '../../img/Flicker Free.png'
import look from '../../img/Look For.png'
import tech from '../../img/Technology.png'
import power from '../../img/Turn On.png'
import contact from '../../img/contact.png'
import ownsite from '../../img/Group 507.png'
import philips from '../../img/philips.png'
import nestle from '../../img/nestle.png'
import honda from '../../img/honda.png'
import comp from '../../img/comp.png'
import toyota from '../../img/toyota.png'
import suzuki from '../../img/suzuki.png'
import deloitte from '../../img/deloitte.png'
import toyo from '../../img/toyo.png'
import quote from '../../img/quote.png'

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'AI Resume Screening',
      description: 'Automatically analyze and rank candidates based on job requirements.'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Smart Matching',
      description: 'Our algorithm finds the perfect candidate-job fit with 95% accuracy.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Candidate Insights',
      description: 'Understand candidate behavior, engagement, and readiness with AI-driven insights.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Get actionable insights into your hiring pipeline and candidate quality.'
    }
  ];

  const testimonials = [
    {
      quote: "We reduced our hiring cycle by half and found incredible candidates we would have missed.",
      author: "Sarah Kumar",
      role: "HR Director",
      rating: 5.0,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "It's like having a full-time recruiter on our team — but faster and more consistent.",
      author: "David",
      role: "COO",
      rating: 5.0,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "The AI-powered matching system helped us find perfect candidates in just days instead of weeks.",
      author: "Emily Chen",
      role: "Talent Manager",
      rating: 5.0,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const companies = [
    { name: "Nestle", logo: nestle },
    { name: "HONDA", logo: honda },
    { name: "TOYOTA", logo: toyota },
    { name: "SUZUKI", logo: suzuki },
    { name: "Deloitte", logo: deloitte },
    { name: "Philips", logo: philips },
    { name: "Toyo", logo: toyo },
    { name: "Comp", logo: comp }
  ];

  const benefits = [
    {
      icon: flicker,
      title: 'Hiring Time',
      description: 'Significantly reduce hiring cycle by pre-qualified candidates',
      color: 'bg-blue-500'
    },
    {
      icon: power,
      title: 'Industry Recruiting',
      description: 'Industry-ready with pre-qualified candidates',
      color: 'bg-green-500'
    },
    {
      icon: tech,
      title: 'Bias-Free Screening',
      description: 'Industry-ready with pre-qualified candidates',
      color: 'bg-purple-500'
    },
    {
      icon: look,
      title: 'Seamless Integration',
      description: 'Industry-ready with pre-qualified candidates',
      color: 'bg-orange-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Post Your Role',
      description: 'Submit your job role along with specific skill requirements',
      icon: <FileText className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      number: '02',
      title: 'AI Talent Match',
      description: 'Our system uses intelligent algorithms to find perfect matches',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      number: '03',
      title: 'Smart Screening',
      description: 'AI technology automatically screens and scores your candidates',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      number: '04',
      title: 'Interview Ready Shortlist',
      description: 'Get pre-qualified candidates ready for final round of recruiting',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-orange-500'
    }
  ];

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Resources', href: '#resources' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#6D28D9]">
                AiRecruit
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#6D28D9] transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              <button className="border border-[#6D28D9] bg-[#6D28D9] text-white px-6 py-1 rounded-2xl font-medium">
                Get Started
              </button>
              <button className="border border-[#6D28D9] text-[#6D28D9] px-6 py-1 rounded-2xl font-medium">
                Register
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="border border-[#6D28D9] bg-[#6D28D9] text-white px-6 py-1 rounded-2xl font-medium">
                    Get Started
                  </button>
                  <button className="border border-[#6D28D9] text-[#6D28D9] px-6 py-1 rounded-2xl font-medium">
                    Register
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#7C3AED] font-bold leading-tight mb-6">
                Hire Smarter, Faster, and Without the Hassle
              </h1>
              <p className='my-10 text-xl'>
                Our AI recruiter finds, screens, and engages top talent 24/7—so you can focus on growing your business, not chasing resumes
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="border border-[#6D28D9] bg-[#6D28D9] transition duration-300 text-white px-8 py-3 rounded-3xl font-semibold shadow-xl hover:scale-105 transform">
                  Get Started
                </button>
                <button className="border-2 border-[#6D28D9] text-[#6D28D9] transition duration-300 px-8 py-2 rounded-3xl font-semibold shadow-sm hover:scale-105 transform">
                  Book a Demo
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="">
                <img
                  src={heroimg}
                  alt="AI Recruitment Platform"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-3xl font-medium mb-8">
            Trusted by leading companies
          </p>

          <div className="max-w-4xl mx-auto overflow-hidden relative flex items-center bg-purple-100 shadow-[0px_0px_11px_-2px_#7C3AED] rounded-4xl h-16">
            <div className="flex animate-marquee h-full whitespace-nowrap gap-8 items-center">
              {companies.map((company, index) => (
                <div key={index} className="flex h-full items-center justify-center cursor-default">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-15 w-22 object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tailwind animation */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7C3AED] mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-[0px_0px_11px_-2px_#7C3AED] text-center rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-15 h-15 object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-[#7C3AED]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7C3AED] mb-4">
                Features
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our platform leverages cutting-edge AI intelligence to streamline your hiring process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 max-w-5xl">
            <div className="bg-white rounded-2xl p-8 shadow-[0px_0px_11px_-2px_#7C3AED] transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-xl mr-4">
                  <FileSearch className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Smart</h3>
                  <p className="text-gray-600">Resume Screening</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Automatically filter and shortlist candidates with AI that reads between the lines and understands real talent.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Contextual keyword analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Skill and experience scoring</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Auto-rejection of irrelevant resumes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0px_0px_11px_-2px_#7C3AED] transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-xl mr-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Interview</h3>
                  <p className="text-gray-600">Automation</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our intelligent AI system conducts automated interviews to make the hiring process faster, unbiased, and more efficient.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Real-time video and voice analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Instant scoring and feedback</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Pre-set questions for consistent evaluation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0px_0px_11px_-2px_#7C3AED] transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Real-time</h3>
                  <p className="text-gray-600">Analytics</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Make data-backed hiring decisions using deep insights on candidates, job roles, and funnel efficiency.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Hiring funnel drop-off tracking</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Candidate quality score</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Role-based performance dashboards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all  shadow-[0px_0px_11px_-2px_#7C3AED] rounded-2xl duration-300"
              >
                <div className="bg-purple-50 rounded-2xl p-6 mb-4">
                  <p className="text-6xl font-bold text-transparent mb-2" style={{ WebkitTextStroke: "2px #6D28D9" }}>
                    {step.number}
                  </p>
                  <h3 className="font-semibold text-[#7C3AED] mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customize Own Website Section */}
      <section className='py-20 max-w-6xl mx-auto text-center'>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Customize your own website
        </h2>
        <div className='flex justify-center'>
          <img
            src={ownsite}
            alt="Customize your website"
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by HR professionals and hiring managers across industries
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl p-8 md:p-12 mx-auto max-w-2xl relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-1 left-6 text-purple-200 font-bold">
                        <img src={quote} alt="" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-6 text-yellow-400 text-2xl">
                        {'★'.repeat(Math.floor(testimonial.rating))}
                        <span className="ml-2 text-lg font-bold text-gray-700">
                          {testimonial.rating}
                        </span>
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 text-center mb-8 text-lg md:text-xl leading-relaxed font-medium">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-purple-100"
                        />
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-purple-600 text-sm font-medium">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-purple-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#360188] to-[#164DA6] py-10 rounded-3xl text-center px-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hire Better. Faster. Smarter.
              </h2>
            </div>

            <p className="text-white text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover a smarter way to recruit. Let UserPitch streamline your hiring process with <br /> intelligent matching, data-driven insights, and seamless automation.
            </p>

            <button className="bg-white hover:bg-gray-50 text-gray-700 px-12 py-2 rounded-2xl font-semibold text-lg border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side Image */}
                <div className="w-full h-64 lg:h-auto">
                  <img
                    src={contact}
                    alt="Contact"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side Form */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-8 text-center lg:text-left">
                    <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-[#6D28D9] mb-2">
                      Take the First Step
                      <span className="flex-1 ml-4 border-t-2 border-[#6D28D9]"></span>
                    </h2>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                      See It in Action
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Experience the difference for yourself. Schedule a live demo
                      with our team and watch AI Recruit transform your hiring
                      process.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Message Box */}
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105"
                    >
                      Book your Demo Now!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#250C4C] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl font-bold">AiRecruit</span>
              </div>
              <p className="mb-6 leading-relaxed">
                Smarter hiring with AI-powered interviews
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span className="">airecruit@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div className="">
                    <p>123 Newtown</p>
                    <p>Kolkata-700156</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-700 mt-12 pt-6 text-center">
            <p className="">
              © 2025 RecruitAI. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;