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
  Clock,
  X
} from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";
import teamImage from "@/assets/team-analytics.jpg";
import analyticsImage from "@/assets/analytics-tracking.jpg";
import visualizationImage from "@/assets/visualization-reporting.jpg";
import customWorkspaceBg from "@/assets/custom-workspace-bg.jpg";
import wastedTimeImage from "@/assets/wasted-time-image.jpg";
import complianceRiskImage from "@/assets/compliance-risk-image.jpg";
import trackingFrustrationBg from "@/assets/tracking-frustration-bg.jpg";
import workspaceSetupBg from "@/assets/workspace-setup-bg.jpg";
import consultationSetupBg from "@/assets/consultation-setup-bg.jpg";
import customPackageBg from "@/assets/custom-package-bg.jpg";
import processAuditBg from "@/assets/process-audit-bg.jpg";
import processImplementationBg from "@/assets/process-implementation-bg.jpg";
import processTestingBg from "@/assets/process-testing-bg.jpg";
import processDocumentationBg from "@/assets/process-documentation-bg.jpg";
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

      {/* Pain Points Section - Is Bad Tracking Costing You Money? */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6 text-gray-900">Is Bad Tracking Costing You Money?</h2>
            <p className="text-description text-xl max-w-4xl mx-auto text-gray-600">
              Most businesses lose 30% of their marketing insights due to broken GTM setups. Here are the common symptoms:
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Problems List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-xl text-gray-900">Inconsistent or Missing Data</h3>
                  <p className="text-description text-gray-600">Your GA4 shows "(not set)" or events fire randomly, making decisions based on unreliable data.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-xl text-gray-900">Site Speed Issues</h3>
                  <p className="text-description text-gray-600">Multiple tracking pixels load synchronously, slowing your site and hurting SEO rankings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-xl text-gray-900">Pixel Chaos</h3>
                  <p className="text-description text-gray-600">Managing tags for Google Ads, Facebook, LinkedIn, TikTok becomes a nightmare without proper organization.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-xl text-gray-900">Privacy Compliance Gaps</h3>
                  <p className="text-description text-gray-600">GDPR, CCPA, and Consent Mode v2 requirements leave you vulnerable to fines and blocked tracking.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-xl text-gray-900">No Documentation</h3>
                  <p className="text-description text-gray-600">Your team has no control or understanding of what's actually firing on your site and why.</p>
                </div>
              </div>
            </div>
            
            {/* Right side image with testimonial overlay */}
            <div className="relative">
              <img 
                src={trackingFrustrationBg} 
                alt="Frustrated person with analytics problems"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-medium">"We lost $50k in ad spend due to broken tracking"</p>
                <p className="text-xs opacity-90">- E-commerce client before GTM fix</p>
              </div>
            </div>
          </div>
          
          {/* Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lost Revenue Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/d03b1167-1e66-4265-a353-06b24147817c.png" 
                  alt="Lost Revenue concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-gray-900">Lost Revenue</h3>
                <p className="text-description text-gray-600">Inaccurate tracking means you're optimizing for the wrong metrics, bleeding ad budget daily.</p>
              </div>
            </div>
            
            {/* Wasted Time Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src={wastedTimeImage} 
                  alt="Wasted Time concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-gray-900">Wasted Time</h3>
                <p className="text-description text-gray-600">Your team spends hours debugging tracking issues instead of growing the business.</p>
              </div>
            </div>
            
            {/* Compliance Risk Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src={complianceRiskImage} 
                  alt="Compliance Risk concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-gray-900">Compliance Risk</h3>
                <p className="text-description text-gray-600">Privacy violations can result in massive fines and complete loss of tracking capabilities.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-hero text-lg">
              See How We Fix These Issues
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our GTM Services - New Layout matching screenshot */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Our GTM Services</h2>
            <p className="text-description text-xl max-w-3xl mx-auto">
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
                  <h3 className="heading-card">GTM Setup & Container Organization</h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Clean container structure with proper naming conventions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Professional data layer implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Migration from hard-coded tags to GTM</span>
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
                  <h3 className="heading-card">GTM Audits & Optimizations</h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Complete audit of tags, triggers, and variables</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Fix redundant and duplicate tags</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-description text-gray-700">Improve site speed and performance</span>
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
              <h3 className="heading-card text-gray-900">Server-Side GTM</h3>
              <p className="text-description mb-6">Advanced privacy-first tracking with server-side implementations on GCP/AWS.</p>
              <ul className="space-y-2 text-description-small">
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
              <h3 className="heading-card text-gray-900">Custom Event Tracking</h3>
              <p className="text-description mb-6">Track every user interaction that matters to your business.</p>
              <ul className="space-y-2 text-description-small">
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
              <h3 className="heading-card text-gray-900">Privacy & Compliance</h3>
              <p className="text-description mb-6">Stay compliant with global privacy regulations.</p>
              <ul className="space-y-2 text-description-small">
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
            <div className="bg-gray-900 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src={customWorkspaceBg} 
                  alt="Custom workspace background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="relative px-8 py-20 md:px-16 md:py-24 text-center text-white z-10">
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect GTM solution for your business needs and budget.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="heading-card text-gray-900">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">$2,500</span>
                </div>
                <p className="text-description mb-6">Perfect for small businesses starting with GTM</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Basic GTM container setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">10 custom events tracked</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Basic GA4 integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">2-week support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Advanced Package - Most Popular */}
            <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-8">
                <h3 className="heading-card text-gray-900">Advanced</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">$5,500</span>
                </div>
                <p className="text-description mb-6">Complete solution for growing businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Full GTM audit & optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced ecommerce tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Privacy compliance setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">1-month support & training</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Choose Advanced
              </Button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="heading-card text-gray-900">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">Custom</span>
                </div>
                <p className="text-description mb-6">For large-scale, complex implementations</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Multi-domain server-side GTM</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom training workshops</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing optimization</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* What's Included in Every Package */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left side - What's Included */}
            <div>
              <h3 className="heading-section text-gray-900 mb-8">What's Included in Every Package</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Detailed Documentation</h4>
                    <p className="text-gray-600">Complete setup guides and best practices documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous testing across staging and production environments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h4>
                    <p className="text-gray-600">Direct access to certified GTM specialists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <img 
                src={workspaceSetupBg} 
                alt="Professional workspace setup"
                className="w-full h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Need a Custom Package? */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <img 
                    src={customPackageBg} 
                    alt="Custom package workspace"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Package?</h3>
                <p className="text-gray-600 mb-6">We can mix and match services to fit your exact requirements.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Build Your Package →
                </a>
              </div>
            </div>

            {/* Questions About Pricing? */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <img 
                    src={consultationSetupBg} 
                    alt="Consultation workspace"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Pricing?</h3>
                <p className="text-gray-600 mb-6">Schedule a free consultation to discuss your specific needs.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Book Free Consultation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5-Step Process */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our 5-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial audit to ongoing optimization, we ensure your tracking is flawless.
            </p>
          </div>
          
          {/* Process Steps Grid */}
          <div className="space-y-12">
            {/* Step 1 - Audit & Consultation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <img 
                  src={processAuditBg} 
                  alt="WORK decorative text"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Audit & Consultation</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We thoroughly review your current tracking setup and identify all issues affecting data quality and site performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Implementation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Implementation</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Configure your containers, triggers, and tags with best practices for optimal performance and data accuracy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={processImplementationBg} 
                  alt="Implementation flowchart"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Step 3 - Testing & QA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <img 
                  src={processTestingBg} 
                  alt="Testing interface"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Testing & QA</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Rigorous validation across staging and production environments to ensure everything works perfectly before going live.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Documentation & Training */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Documentation & Training</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Complete handover with full implementation documentation and team training sessions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-12 shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Documentation</h4>
                  <p className="text-gray-600">Complete handover with implementation guides and best practices</p>
                </div>
              </div>
            </div>

            {/* Step 5 - Ongoing Optimization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-600 rounded-2xl p-12 shadow-lg text-white order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Ongoing Optimization</h4>
                  <p className="text-blue-100">Continuous audits and updates to keep your tracking perfect</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Optimization</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Continuous monitoring and optimization to ensure your tracking stays accurate as your business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Why Choose Us</h2>
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
                    <h3 className="heading-card text-xl text-gray-900">{reason.title}</h3>
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
            <h2 className="heading-section mb-6">Industries We Support</h2>
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
          <h2 className="heading-section text-2xl md:text-3xl mb-4">Need a Custom Integration?</h2>
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
            <h2 className="heading-section mb-6">FAQs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answers to common questions about GTM implementation
            </p>
          </div>

          {/* Two Column Layout - Problem-Solution FAQs and General FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Common Tracking Problems We Solve */}
            <div>
              <h3 className="heading-card mb-8">Common Tracking Problems We Solve</h3>
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
              <h3 className="heading-card mb-8">Your Questions Answered</h3>
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
            <h3 className="heading-card mb-8 text-center">The 3 Fixes That Make the Biggest Impact</h3>
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