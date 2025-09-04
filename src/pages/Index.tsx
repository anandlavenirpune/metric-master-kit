import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Target, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Settings,
  Lock,
  Database,
  Brain,
  Workflow,
  GraduationCap
} from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";
import teamImage from "@/assets/team-analytics.jpg";
import analyticsImage from "@/assets/analytics-tracking.jpg";
import visualizationImage from "@/assets/visualization-reporting.jpg";
import advertisingImage from "@/assets/advertising-platforms.jpg";
import crmImage from "@/assets/crm-automation.jpg";

const Index = () => {
  const services = [
    {
      title: "Analytics Setup & Audits",
      items: [
        {
          icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
          title: "Google Analytics 4 (GA4) migration & audits",
          description: "Complete migration from Universal Analytics to GA4 with data validation and custom event setup"
        },
        {
          icon: <Target className="h-5 w-5 text-blue-500" />,
          title: "Event & conversion tracking setup",
          description: "Configure custom events, goals, and conversion tracking for accurate performance measurement"
        },
        {
          icon: <Globe className="h-5 w-5 text-blue-500" />,
          title: "Ecommerce tracking (Shopify, WooCommerce, Magento)",
          description: "Set up comprehensive ecommerce tracking with purchase events and revenue attribution"
        },
        {
          icon: <Settings className="h-5 w-5 text-blue-500" />,
          title: "Cross-domain & multi-site tracking",
          description: "Implement unified tracking across multiple domains and subdomains"
        }
      ]
    },
    {
      title: "Tag Management",
      items: [
        {
          icon: <Zap className="h-5 w-5 text-purple-500" />,
          title: "Google Tag Manager (GTM) setup & debugging",
          description: "Professional GTM container setup with proper tag firing and debugging protocols"
        },
        {
          icon: <Database className="h-5 w-5 text-purple-500" />,
          title: "Server-Side GTM (sGTM) implementation on GCP/AWS",
          description: "Deploy server-side tracking for improved data quality and privacy compliance"
        },
        {
          icon: <Brain className="h-5 w-5 text-purple-500" />,
          title: "Meta Conversions API & Google Ads Enhanced Conversions",
          description: "Implement first-party data tracking for better ad performance and attribution"
        },
        {
          icon: <Lock className="h-5 w-5 text-purple-500" />,
          title: "Cookie lifespan & cookieless tracking solutions",
          description: "Future-proof tracking strategies that work with evolving privacy regulations"
        }
      ]
    },
    {
      title: "Reporting & Dashboarding",
      items: [
        {
          icon: <BarChart3 className="h-5 w-5 text-green-500" />,
          title: "Looker Studio dashboards (quota-proof, automated)",
          description: "Custom dashboards with automated data refresh and quota optimization"
        },
        {
          icon: <Database className="h-5 w-5 text-green-500" />,
          title: "Power BI & Tableau reporting",
          description: "Enterprise-grade reporting solutions with advanced visualizations"
        },
        {
          icon: <Workflow className="h-5 w-5 text-green-500" />,
          title: "BigQuery pipelines & advanced SQL models",
          description: "Scalable data pipelines with custom SQL transformations and modeling"
        },
        {
          icon: <Globe className="h-5 w-5 text-green-500" />,
          title: "Automated email/slack/pdf reports",
          description: "Scheduled report delivery with customizable formats and stakeholder distribution"
        }
      ]
    },
    {
      title: "Attribution & ROI Analytics",
      items: [
        {
          icon: <TrendingUp className="h-5 w-5 text-orange-500" />,
          title: "Multi-touch attribution modeling",
          description: "Advanced attribution models to understand the full customer journey"
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-orange-500" />,
          title: "Cost vs revenue tracking",
          description: "Comprehensive ROI analysis across all marketing channels and campaigns"
        },
        {
          icon: <Users className="h-5 w-5 text-orange-500" />,
          title: "Customer Lifetime Value (LTV) dashboards",
          description: "Track and predict customer value over time with cohort analysis"
        },
        {
          icon: <Globe className="h-5 w-5 text-orange-500" />,
          title: "Offline conversions integration",
          description: "Connect offline sales data with online marketing attribution"
        }
      ]
    },
    {
      title: "Privacy & Compliance",
      items: [
        {
          icon: <Shield className="h-5 w-5 text-red-500" />,
          title: "Consent Mode v2 setup",
          description: "Implement Google's latest consent management for privacy-compliant tracking"
        },
        {
          icon: <Settings className="h-5 w-5 text-red-500" />,
          title: "CMP integrations (Cookiebot, OneTrust, Didomi, Quantcast)",
          description: "Seamless integration with major consent management platforms"
        },
        {
          icon: <Lock className="h-5 w-5 text-red-500" />,
          title: "GDPR, PIPEDA, APP, PDPL-compliant data tracking",
          description: "Ensure compliance with global privacy regulations and data protection laws"
        },
        {
          icon: <CheckCircle2 className="h-5 w-5 text-red-500" />,
          title: "IP anonymization & privacy-first setups",
          description: "Implement privacy-by-design tracking configurations"
        }
      ]
    },
    {
      title: "Data Quality & Validation",
      items: [
        {
          icon: <Settings className="h-5 w-5 text-teal-500" />,
          title: "Identify and fix data mismatches (GA4 vs Ads vs CRM)",
          description: "Audit and reconcile data discrepancies across platforms"
        },
        {
          icon: <CheckCircle2 className="h-5 w-5 text-teal-500" />,
          title: "Deduplicate and clean ecommerce & lead data",
          description: "Clean and standardize data for accurate reporting and analysis"
        },
        {
          icon: <Shield className="h-5 w-5 text-teal-500" />,
          title: "Bot traffic filtering",
          description: "Implement filters to exclude bot traffic and ensure data accuracy"
        },
        {
          icon: <Target className="h-5 w-5 text-teal-500" />,
          title: "Channel grouping setup",
          description: "Organize traffic sources into meaningful channel groups for better analysis"
        }
      ]
    },
    {
      title: "Predictive Analytics & Forecasting",
      items: [
        {
          icon: <TrendingUp className="h-5 w-5 text-indigo-500" />,
          title: "Anomaly detection in GA4 & BigQuery",
          description: "Automated alerts for unusual patterns and data anomalies"
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-indigo-500" />,
          title: "Sales and revenue forecasting",
          description: "Predictive models for revenue planning and business forecasting"
        },
        {
          icon: <Users className="h-5 w-5 text-indigo-500" />,
          title: "Customer churn prediction",
          description: "Machine learning models to identify at-risk customers"
        },
        {
          icon: <Globe className="h-5 w-5 text-indigo-500" />,
          title: "Marketing performance trend analysis",
          description: "Advanced analytics to predict marketing performance trends"
        }
      ]
    },
    {
      title: "CRM & Marketing Automation",
      items: [
        {
          icon: <Database className="h-5 w-5 text-pink-500" />,
          title: "HubSpot & Salesforce GA4 integrations",
          description: "Connect analytics data with CRM systems for unified customer insights"
        },
        {
          icon: <Workflow className="h-5 w-5 text-pink-500" />,
          title: "Zapier / Make / n8n workflows",
          description: "Automate data flows between marketing tools and analytics platforms"
        },
        {
          icon: <Globe className="h-5 w-5 text-pink-500" />,
          title: "Segment & Rudderstack event pipelines",
          description: "Implement customer data platforms for unified event tracking"
        },
        {
          icon: <Settings className="h-5 w-5 text-pink-500" />,
          title: "Slack & Sheets reporting automations",
          description: "Automated reporting workflows for team collaboration and data sharing"
        }
      ]
    },
    {
      title: "Training & Workshops",
      items: [
        {
          icon: <Users className="h-5 w-5 text-yellow-500" />,
          title: "GA4 & GTM hands-on training for teams",
          description: "Comprehensive training programs for marketing teams and analysts"
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-yellow-500" />,
          title: "Looker Studio dashboard workshops",
          description: "Learn to build and customize professional analytics dashboards"
        },
        {
          icon: <Lock className="h-5 w-5 text-yellow-500" />,
          title: "Privacy & consent compliance training",
          description: "Stay updated on privacy regulations and compliant tracking practices"
        },
        {
          icon: <Target className="h-5 w-5 text-yellow-500" />,
          title: "Custom strategy sessions for marketing teams",
          description: "Tailored consulting sessions for marketing strategy and analytics optimization"
        }
      ]
    }
  ];

  const toolCategories = [
    {
      category: "Analytics & Tracking",
      image: analyticsImage,
      tools: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Server-Side GTM (sGTM)", "Google Tag (gtag.js)"]
    },
    {
      category: "Visualization & Reporting", 
      image: visualizationImage,
      tools: ["Looker Studio", "BigQuery", "Power BI", "Tableau", "Google Sheets connectors"]
    },
    {
      category: "Advertising & Marketing Platforms",
      image: advertisingImage,
      tools: ["Google Ads", "Meta Ads (Facebook/Instagram)", "TikTok Ads", "LinkedIn Ads", "Microsoft Ads"]
    },
    {
      category: "CRM & Automation",
      image: crmImage,
      tools: ["HubSpot", "Salesforce", "Zapier / Make / n8n", "Segment / Rudderstack", "Slack integrations"]
    },
    {
      category: "Consent & Privacy",
      image: analyticsImage,
      tools: ["Google Consent Mode v2", "Cookiebot, OneTrust, Didomi, Quantcast"]
    },
    {
      category: "Ecommerce Platforms",
      image: visualizationImage,
      tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      category: "Cloud & Infrastructure",
      image: advertisingImage,
      tools: ["Google Cloud Platform (GCP)", "AWS", "Cloudflare Zaraz"]
    }
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Advanced purchase tracking, refund analytics, and customer journey optimization",
      image: teamImage
    },
    {
      title: "B2B & SaaS", 
      description: "Lead tracking, CRM integration, and pipeline analytics for subscription businesses",
      image: analyticsImage
    },
    {
      title: "Agencies",
      description: "White-label analytics services and scalable reporting solutions for client management",
      image: visualizationImage
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Global Focus",
      description: "Serving clients across Canada, Australia, UAE, UK & US with localized expertise and 24/7 support",
      image: teamImage
    },
    {
      icon: <Settings className="h-6 w-6 text-gray-500" />,
      title: "Full-Stack Expertise",
      description: "Complete mastery of GA4, GTM, Looker Studio, BigQuery, Ads, CRM and CMPs for end-to-end solutions",
      image: analyticsImage
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Compliance-Ready",
      description: "GDPR, PIPEDA, APP, PDPL compliant tracking with privacy-first approaches and consent management",
      image: visualizationImage
    },
    {
      icon: <Zap className="h-6 w-6 text-green-500" />,
      title: "Automation-First",
      description: "Real-time dashboards and automated workflows that save time and deliver insights 24/7",
      image: advertisingImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-hero relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Marketing Data.
              <br />
              <span className="text-accent">Clean, Connected, and Actionable.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              We help businesses worldwide capture accurate data, automate reports, and uncover insights across GA4, GTM, Looker Studio, BigQuery, and more. From setup to strategy, we make your data work.
            </p>
            <Button className="btn-hero text-lg">
              👉 Book Your Free GA4 & GTM Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing analytics services to transform your data into actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{
                          backgroundColor: index === 0 ? '#dbeafe' : 
                                         index === 1 ? '#e9d5ff' : 
                                         index === 2 ? '#dcfce7' : 
                                         index === 3 ? '#fed7aa' : 
                                         index === 4 ? '#fecaca' : 
                                         index === 5 ? '#a7f3d0' : 
                                         index === 6 ? '#c7d2fe' : 
                                         index === 7 ? '#fbcfe8' : 
                                         '#fef3c7'
                        }}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tools We Specialize In</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert-level proficiency across the entire marketing technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={`${category.category} tools interface`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored analytics solutions for every business vertical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={`${industry.title} industry`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{industry.title}</h3>
                  <p className="text-white/80">{industry.description}</p>
                </div>
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
              Global expertise with local precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={`${benefit.title} illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {benefit.icon}
                    <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img 
              src={teamImage} 
              alt="Professional marketing analytics team" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop guessing. <span className="text-accent">Start knowing.</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Your data deserves better. Let's set up, clean, and automate your marketing analytics stack today.
          </p>
          <Button className="btn-hero text-lg">
            👉 Book Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg opacity-90">
            Ready to transform your marketing data? Let's get started.
          </p>
          <p className="mt-4 opacity-75">
            © 2024 Marketing Analytics Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;