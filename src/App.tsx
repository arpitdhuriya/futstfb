import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  Zap, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Award,
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import LandingPageAdmin from "./pages/LandingPageAdmin";
import LandingPageUser from "./pages/LandingPageUser";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('weekly');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    const heroElements = document.querySelectorAll('.fade-in.hero');
    heroElements.forEach(element => {
      element.classList.add('active');
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Cutting-Edge Technologies",
      description: "Access to latest frameworks, tools, and industry-standard practices your institute doesn't offer"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Expert Mentorship",
      description: "One-on-one guidance from industry professionals with real-world experience"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Agile Environment",
      description: "Learn modern development methodologies used in top tech companies"
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Real Projects",
      description: "Work on actual software solutions that solve real-world problems"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      title: "Real world Interaction",
      description: "Lead the way with other contributors"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      title: "Industry Recognition",
      description: "Build a portfolio that stands out to top employers"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Apply & Assessment",
      description: "Submit your application and complete our skills assessment to match you with the right program level."
    },
    {
      step: "02",
      title: "Team Formation",
      description: "Get paired with 4-6 fellow students and assigned an expert tech mentor for your group."
    },
    {
      step: "03",
      title: "Project Selection",
      description: "Choose from real-world projects or propose your own innovative software solution."
    },
    {
      step: "04",
      title: "Agile Development",
      description: "Work in 2-week sprints with daily standups, code reviews, and continuous mentorship."
    },
    {
      step: "05",
      title: "Portfolio & Payment",
      description: "Complete your project, build your portfolio."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: { weekly: 300, monthly: 1200 },
      features: [
        "Basic mentorship (2 hours/week)",
        "Access to learning resources",
        "Community forum access",
        "Basic project assignments",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: { weekly: 500, monthly: 2000 },
      features: [
        "Intensive mentorship (5 hours/week)",
        "Real project development",
        "Agile methodology training",
        "Code review sessions",
        "1-on-1 career guidance",
        "Priority support",
        "Paid project opportunities"
      ],
      popular: true
    },
    {
      name: "College",
      price: { weekly: "Contact", monthly: "Contact" },
      features: [
        "Bulk enrollment discounts",
        "Custom curriculum design",
        "Dedicated program manager",
        "Institution-wide mentorship",
        "Faculty training programs",
        "Progress tracking dashboard",
        "Flexible payment terms",
        "Volume-based pricing"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Final Year CS Student",
      university: "IIT Delhi",
      content: "This program transformed my understanding of software development. I went from basic coding to building production-ready applications.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Patel",
      role: "3rd Year IT Student",
      university: "VIT Vellore",
      content: "The mentorship and real project experience gave me confidence to apply for top tech companies. I landed a job at Google!",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Arjun Kumar",
      role: "4th Year ECE Student",
      university: "NIT Trichy",
      content: "Being guided while learning cutting-edge technologies was amazing. The agile environment prepared me for the industry.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-gray-900">FutureStack</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">Features</a>
              <a href="#process" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Apply Now
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-700">Features</a>
              <a href="#process" className="block py-2 text-gray-700">How It Works</a>
              <a href="#pricing" className="block py-2 text-gray-700">Pricing</a>
              <a href="#testimonials" className="block py-2 text-gray-700">Testimonials</a>
              <button 
                onClick={() => navigate('/login')}
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg mt-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in hero">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Bridge the Gap Between
                <span className="text-blue-400"> Academic Learning</span> and
                <span className="text-purple-400"> Industry Reality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our paid mentorship program where 3rd-4th year IT students work on cutting-edge projects 
                under expert guidance, gaining real-world experience in an agile development environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/login')}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-400">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-gray-400">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">+++</div>
                  <div className="text-gray-400">Cutting Edge deployment</div>
                </div>
              </div>
            </div>
            
            <div className="fade-in hero relative">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">terminal</span>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-blue-400">$ git clone advanced-project</div>
                    <div className="text-green-400">$ npm install latest-tech</div>
                    <div className="text-purple-400">$ npm run start-career</div>
                    <div className="text-yellow-400">✨ Building your future...</div>
                    <div className="text-gray-500"># FutureStack mentorship active</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Expert Code Review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Agile Methodology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Real-World Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Paid Learning Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Problem Most IT Students Face
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Despite studying for years, most students graduate without real industry experience, 
              making them unprepared for actual software development roles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg fade-in transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Outdated Curriculum</h3>
              <p className="text-gray-400">
                Most institutes teach technologies that are 5-10 years behind industry standards, 
                leaving students unprepared for modern development practices.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg fade-in transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lack of Mentorship</h3>
              <p className="text-gray-400">
                Students learn in isolation without guidance from industry experts, 
                missing out on best practices and real-world problem-solving approaches.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg fade-in transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No Real Experience</h3>
              <p className="text-gray-400">
                Academic projects don't reflect real-world complexity, team collaboration, 
                or the agile methodologies used in professional environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Solution: Complete Development Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything missing from traditional education - cutting-edge technology, 
              expert mentorship, and real-world project experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 fade-in">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              How Our Program Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured 5-step process that takes you from application to industry-ready developer
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''} fade-in`}>
                <div className="flex-1">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Flexible pricing plans designed for different commitment levels and career goals
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${activeTab === 'weekly' ? 'text-white' : 'text-gray-400'}`}>Weekly</span>
              <button
                onClick={() => setActiveTab(activeTab === 'weekly' ? 'monthly' : 'weekly')}
                className="relative w-14 h-8 bg-blue-500 rounded-full transition-colors"
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  activeTab === 'monthly' ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`ml-3 ${activeTab === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly <span className="text-green-400 text-sm">(4 weeks)</span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl fade-in ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    {plan.price[activeTab] === "Contact" ? (
                      <div>
                        <span className="text-3xl font-bold text-blue-400">Contact for Deal</span>
                        <div className="text-gray-400 text-sm mt-2">Custom pricing available</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-white">
                          ₹{plan.price[activeTab]}
                        </span>
                        <span className="text-gray-400">/{activeTab === 'weekly' ? 'week' : 'month'}</span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => navigate('/login')}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.name === 'College' ? 'Contact Us' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Stories from Our Students
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our program has transformed careers and opened doors to top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg fade-in">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.university}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of students who have successfully bridged the gap between 
            academic learning and industry readiness. Start your learning journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Apply Now - Free Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-500 transition-all">
              Schedule a Call
            </button>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm">
            * Limited seats available for each cohort. Early application recommended.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">FutureStack</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bridging the gap between academic learning and industry readiness 
                through expert mentorship and real-world project experience.
              </p>
              <div className="flex space-x-4 mt-6">
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Programs</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Starter Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Professional Track</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Level</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tech Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Email: hello@devmentor.com</li>
                <li>Phone: +91 7077424945</li>
                <li>Address: Indore, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevMentor. All rights reserved. Empowering the next generation of developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginWithRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<LandingPageAdmin />} />
        <Route path="/user" element={<LandingPageUser />} />
      </Routes>
    </Router>
  );
}

// Helper component to handle login and redirect
function LoginWithRedirect() {
  const navigate = useNavigate();

  // This function will be called from LoginPage after successful login
  const handleLogin = (role: string) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return <LoginPage onLogin={handleLogin} />;
}

export default App;