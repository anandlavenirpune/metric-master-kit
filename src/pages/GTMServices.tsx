import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Target,
  Globe,
  TrendingUp,
  Users,
  Database,
  Brain,
  Workflow,
  Lock,
  GraduationCap,
  BarChart3,
  AlertTriangle,
  Search,
  FileText,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";
import teamImage from "@/assets/team-analytics.jpg";
import analyticsImage from "@/assets/analytics-tracking.jpg";
import visualizationImage from "@/assets/visualization-reporting.jpg";
const GTMServices = () => {
  const painPoints = [
    "Is your tracking data inconsistent or missing?",
    "Are your tags slowing down your site?", 
    "Struggling to manage multiple marketing pixels?",
    "Unsure about compliance with consent/privacy laws?",
    "No clear documentation or control of your GTM setup?"
  ];

  const services = [
    {
      title: "GTM Setup & Container Organization",
      description: "Clean container structure, proper naming conventions, data layers. Migration from hard-coded tags to GTM.",
      icon: <Settings className="h-6 w-6 text-blue-500" />
    },
    {
      title: "GTM Audits & Optimizations", 
      description: "Full audit of tags, triggers, and variables. Fix redundant/duplicate tags, improve speed.",
      icon: <Search className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Server-Side GTM (sGTM) & Advanced Tagging",
      description: "Setup on GCP/AWS. Meta CAPI, Google Ads Enhanced Conversions. Cookieless and privacy-ready tracking.",
      icon: <Database className="h-6 w-6 text-green-500" />
    },
    {
      title: "Custom Event & Ecommerce Tracking",
      description: "Track forms, clicks, videos, and custom events. Enhanced Ecommerce tracking (Shopify, Woo, Magento).",
      icon: <Target className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Privacy & Compliance Solutions",
      description: "Consent Mode v2 setup. CMP integration (Cookiebot, OneTrust, Didomi, Quantcast). Region-specific compliance.",
      icon: <Shield className="h-6 w-6 text-red-500" />
    },
    {
      title: "Training & Documentation",
      description: "Workshops for internal teams. Full implementation documentation & handover.",
      icon: <GraduationCap className="h-6 w-6 text-indigo-500" />
    }
  ];

  const packages = [
    {
      name: "Starter",
      description: "Basic GTM setup + 10 events tracked",
      features: ["GTM container setup", "10 custom events", "Basic documentation", "Email support"],
      price: "Starting at $2,500"
    },
    {
      name: "Advanced", 
      description: "Full audit, ecommerce, + compliance setup",
      features: ["Complete GTM audit", "Ecommerce tracking", "Consent Mode v2", "Training session", "30-day support"],
      price: "Starting at $5,000",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Multi-domain sGTM + custom training",
      features: ["Server-side GTM", "Multi-domain setup", "Custom training", "Ongoing optimization", "Priority support"],
      price: "Custom pricing"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Audit & Consultation",
      description: "Review current setup and identify opportunities"
    },
    {
      step: "2", 
      title: "Implementation",
      description: "Configure containers, triggers, and tags"
    },
    {
      step: "3",
      title: "Testing & QA", 
      description: "Validate across staging/production"
    },
    {
      step: "4",
      title: "Documentation & Training",
      description: "Full handover + best practices"
    },
    {
      step: "5",
      title: "Ongoing Optimization",
      description: "Continuous audits + updates"
    }
  ];

  const whyChooseUs = [
    {
      title: "Certified GTM/GA4 specialists",
      description: "Deep expertise in Google's analytics ecosystem",
      icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Performance-first approach",
      description: "Optimized tags with zero site slowdown",
      icon: <Zap className="h-6 w-6 text-green-500" />
    },
    {
      title: "Privacy-ready tracking",
      description: "Compliant with global privacy regulations",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Full documentation included",
      description: "Complete governance and best practices",
      icon: <FileText className="h-6 w-6 text-purple-500" />
    }
  ];

  const useCases = [
    {
      title: "E-commerce brands",
      description: "Shopify, WooCommerce, Magento tracking",
      image: analyticsImage
    },
    {
      title: "B2B & SaaS",
      description: "Lead form tracking, LinkedIn Ads integration",
      image: visualizationImage
    },
    {
      title: "Agencies",
      description: "White-label GTM management services",
      image: teamImage
    },
    {
      title: "Finance & Education",
      description: "High-compliance tracking setups",
      image: analyticsImage
    }
  ];

  const problemSolutionFAQs = [
    {
      question: "Why is GA4 showing '(not set)'?",
      solution: "We fix this by adjusting firing order in GTM and validating data layers to ensure proper parameter collection."
    },
    {
      question: "Ecommerce tracking is inaccurate",
      solution: "Our audit identifies duplicate transactions and implements proper data layer structure for 70% error reduction."
    },
    {
      question: "Consent Mode v2 without conversion loss",
      solution: "We implement advanced conversion modeling to maintain performance while ensuring full privacy compliance."
    }
  ];

  const effectiveFixes = [
    {
      title: "GA4 '(not set)' errors solved",
      description: "Fixed through proper tag sequencing and data layer validation",
      icon: <Target className="h-8 w-8 text-green-500" />
    },
    {
      title: "Ecommerce tracking accuracy restored", 
      description: "Case example: 70% error reduction through audit and cleanup",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Consent Mode v2 implemented",
      description: "Zero conversion loss with proper implementation workflow",
      icon: <Shield className="h-8 w-8 text-purple-500" />
    }
  ];

  const generalFAQs = [
    {
      question: "How long does GTM setup take?",
      answer: "Typically 2-4 weeks depending on complexity and requirements."
    },
    {
      question: "Do I need server-side GTM?",
      answer: "Recommended for high-traffic sites and enhanced privacy compliance."
    },
    {
      question: "Will GTM slow down my website?",
      answer: "No, we optimize all implementations for zero performance impact."
    },
    {
      question: "What's included in a GTM audit?",
      answer: "Complete review of tags, triggers, variables, and performance optimization."
    },
    {
      question: "Can you work with TikTok, LinkedIn, and other third-party tags?",
      answer: "Yes, we support all major advertising and analytics platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">Marketing Analytics</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/gtm-services" className="text-gray-900 font-medium border-b-2 border-primary">GTM Services</a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section - Dark Background with Image on Right */}
      <section className="section-hero relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Google Tag Manager Services
                <br />
                <span className="text-accent">for Accurate, Scalable Tracking</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                We help businesses set up, audit, and optimize GTM so you capture the right data, improve marketing ROI, and stay privacy-compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg">
                  Get a Free GTM Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  Talk to a GTM Specialist
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="GTM Analytics Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section with Icons on Left, Text on Right, Image on Far Right */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Is Your Tracking Causing You Headaches?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common tracking challenges that impact your data quality and business decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-orange-500" />
                    </div>
                    <p className="text-lg text-gray-900 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Team working on analytics"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our GTM Services - New Layout matching screenshot */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our GTM Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete Google Tag Manager solutions from setup to advanced server-side implementations.
            </p>
          </div>
          
          {/* Top Row - 2 Main Services with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* GTM Setup & Container Organization */}
            <div>
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">GTM Setup & Container Organization</h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clean container structure with proper naming conventions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional data layer implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Migration from hard-coded tags to GTM</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={analyticsImage} 
                  alt="GTM Container Setup"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* GTM Audits & Optimizations */}
            <div>
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">GTM Audits & Optimizations</h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete audit of tags, triggers, and variables</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fix redundant and duplicate tags</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Improve site speed and performance</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={visualizationImage} 
                  alt="GTM Optimization Dashboard"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Server-Side GTM */}
            <div className="bg-slate-100 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Server-Side GTM</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Advanced privacy-first tracking with server-side implementations on GCP/AWS.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Meta CAPI setup</li>
                <li>• Google Ads Enhanced Conversions</li>
                <li>• Cookieless tracking ready</li>
              </ul>
            </div>

            {/* Custom Event Tracking */}
            <div className="bg-purple-100 rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Event Tracking</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Track every user interaction that matters to your business.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Forms, clicks, video views</li>
                <li>• Enhanced Ecommerce tracking</li>
                <li>• Shopify, WooCommerce, Magento</li>
              </ul>
            </div>

            {/* Privacy & Compliance */}
            <div className="bg-green-100 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy & Compliance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Stay compliant with global privacy regulations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Consent Mode v2 setup</li>
                <li>• CMP integration</li>
                <li>• GDPR, CCPA compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Need Something Custom Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl overflow-hidden relative min-h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/a39c6e16-9eb7-4b79-b0c5-d1816ad185de.png" 
                  alt="Custom workspace background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-900/60"></div>
              </div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-center text-white z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Something Custom?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  We offer training workshops and complete documentation handovers for your internal teams.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Discuss Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right GTM package for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 5-step approach to GTM success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert GTM specialists with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: index === 0 ? '#e0e7ff' : 
                                   index === 1 ? '#ecfdf5' : 
                                   index === 2 ? '#fed7aa' : 
                                   '#f3e8ff'
                  }}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized GTM solutions for every industry vertical
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
                <img 
                  src={useCase.image} 
                  alt={`${useCase.title} industry`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-white/90 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need a Custom Integration CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Integration?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our development team can build custom connectors for any platform or tool you use.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request Custom Integration
          </Button>
        </div>
      </section>

      {/* FAQs Section - Exact Layout from Design */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">FAQs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answers to common questions about GTM implementation
            </p>
          </div>

          {/* Two Column Layout - Problem-Solution FAQs and General FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Common Tracking Problems We Solve */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Common Tracking Problems We Solve</h3>
              <div className="space-y-6">
                {problemSolutionFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600">{faq.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Your Questions Answered */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Your Questions Answered</h3>
              <div className="space-y-6">
                {generalFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The 3 Fixes That Make the Biggest Impact - Below FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">The 3 Fixes That Make the Biggest Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {effectiveFixes.map((fix, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm text-center">
                  <div className="mb-4 flex justify-center">{fix.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-3">{fix.title}</h4>
                  <p className="text-gray-600">{fix.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Images for "3 Fixes" - Layout from Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={analyticsImage} 
                alt="Support team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={visualizationImage} 
                alt="Analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={teamImage} 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Guessing. <span className="text-accent">Start Tracking with GTM.</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Transform your marketing data with professional GTM setup and optimization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg">
              👉 Book Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              👉 Request a Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg opacity-90">
            Ready to transform your GTM setup? Let's get started.
          </p>
          <p className="mt-4 opacity-75">
            © 2024 Marketing Analytics Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GTMServices;