import React from 'react';
import { Brain, Users, TrendingUp, Shield, ArrowRight, BarChart3, Target, Award, Check, ChevronRight, MessageSquare, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion'; // For animations
import Particles from 'react-tsparticles'; // For particle effects

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#3b82f6', '#1d4ed8', '#60a5fa'],
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#3b82f6',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SBI Life AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-20" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 mb-6"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Insurance Revolution</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Insurance with
              <span className="text-blue-600 block">Intelligent Personalization</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Experience the future of insurance with our AI platform that delivers hyper-personalized recommendations for every customer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 w-full sm:w-auto"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 border border-gray-200 w-full sm:w-auto"
              >
                Watch Demo <MessageSquare className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionize Your Insurance Strategy</h2>
            <p className="text-xl text-gray-600">
              Our AI platform transforms traditional insurance processes into intelligent, data-driven experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "AI-Driven Insights",
                description: "Advanced algorithms analyze individual needs for precise recommendations",
                features: ["Behavioral Analysis", "Risk Assessment", "Pattern Recognition"]
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Personalized Experience",
                description: "Tailored insurance solutions based on unique customer profiles",
                features: ["Custom Recommendations", "Dynamic Pricing", "Adaptive Coverage"]
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Enhanced Conversion",
                description: "Improved customer engagement leading to higher conversion rates",
                features: ["Smart Targeting", "Automated Follow-ups", "Engagement Analytics"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-50/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Results with AI</h2>
            <p className="text-xl text-gray-600">
              Our platform delivers measurable improvements across key performance indicators
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 />, stat: "40%", label: "Increase in Conversion", sublabel: "Year over Year Growth" },
              { icon: <Target />, stat: "95%", label: "Customer Satisfaction", sublabel: "Based on 10k+ Reviews" },
              { icon: <Award />, stat: "60%", label: "Faster Processing", sublabel: "Average Time Saved" },
              { icon: <Shield />, stat: "99.9%", label: "Platform Reliability", sublabel: "Uptime Guarantee" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl" />
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>
                <div className="text-sm text-gray-500">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              See what our enterprise customers have to say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI-driven insights have transformed how we approach customer engagement. Our conversion rates have never been better.",
                author: "Sarah Chen",
                role: "Chief Digital Officer",
                company: "Global Insurance Co."
              },
              {
                quote: "Implementation was seamless, and the results were immediate. The personalization capabilities are truly next-level.",
                author: "Michael Rodriguez",
                role: "Head of Innovation",
                company: "InsureTech Solutions"
              },
              {
                quote: "The platform's ability to analyze and predict customer needs has given us a significant competitive advantage.",
                author: "Emily Thompson",
                role: "Customer Success Director",
                company: "Premier Insurance"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Insurance Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the future of insurance with our AI-powered platform. Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">SBI Life AI</span>
              </div>
              <p className="text-gray-400">
                Transforming insurance with intelligent, AI-powered solutions.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Solutions", "Pricing", "Updates"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "News"]
              },
              {
                title: "Resources",
                links: ["Blog", "Documentation", "Support", "Contact"]
              }
            ].map((column