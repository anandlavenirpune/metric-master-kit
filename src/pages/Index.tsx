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

const Index = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Analytics Setup & Audits",
      items: [
        "Google Analytics 4 (GA4) migration & audits",
        "Event & conversion tracking setup", 
        "Ecommerce tracking (Shopify, WooCommerce, Magento)",
        "Cross-domain & multi-site tracking"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Tag Management",
      items: [
        "Google Tag Manager (GTM) setup & debugging",
        "Server-Side GTM (sGTM) implementation on GCP/AWS",
        "Meta Conversions API & Google Ads Enhanced Conversions",
        "Cookie lifespan & cookieless tracking solutions"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Reporting & Dashboarding",
      items: [
        "Looker Studio dashboards (quota-proof, automated)",
        "Power BI & Tableau reporting",
        "BigQuery pipelines & advanced SQL models",
        "Automated email/slack/pdf reports"
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Attribution & ROI Analytics",
      items: [
        "Multi-touch attribution modeling",
        "Cost vs revenue tracking",
        "Customer Lifetime Value (LTV) dashboards",
        "Offline conversions integration"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: "Privacy & Compliance",
      items: [
        "Consent Mode v2 setup",
        "CMP integrations (Cookiebot, OneTrust, Didomi, Quantcast)",
        "GDPR, PIPEDA, APP, PDPL-compliant data tracking",
        "IP anonymization & privacy-first setups"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Data Quality & Validation",
      items: [
        "Identify and fix data mismatches (GA4 vs Ads vs CRM)",
        "Deduplicate and clean ecommerce & lead data",
        "Bot traffic filtering",
        "Channel grouping setup"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Predictive Analytics & Forecasting",
      items: [
        "Anomaly detection in GA4 & BigQuery",
        "Sales and revenue forecasting",
        "Customer churn prediction",
        "Marketing performance trend analysis"
      ]
    },
    {
      icon: <Workflow className="h-8 w-8 text-accent" />,
      title: "CRM & Marketing Automation",
      items: [
        "HubSpot & Salesforce GA4 integrations",
        "Zapier / Make / n8n workflows",
        "Segment & Rudderstack event pipelines",
        "Slack & Sheets reporting automations"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: "Training & Workshops",
      items: [
        "GA4 & GTM hands-on training for teams",
        "Looker Studio dashboard workshops",
        "Privacy & consent compliance training",
        "Custom strategy sessions for marketing teams"
      ]
    }
  ];

  const toolCategories = [
    {
      category: "Analytics & Tracking",
      tools: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Server-Side GTM (sGTM)", "Google Tag (gtag.js)"]
    },
    {
      category: "Visualization & Reporting", 
      tools: ["Looker Studio", "BigQuery", "Power BI", "Tableau", "Google Sheets (Supermetrics, Databox, Funnel.io connectors)"]
    },
    {
      category: "Advertising & Marketing Platforms",
      tools: ["Google Ads", "Meta Ads (Facebook/Instagram)", "TikTok Ads", "LinkedIn Ads", "Microsoft Ads"]
    },
    {
      category: "Consent & Privacy",
      tools: ["Google Consent Mode v2", "Cookiebot, OneTrust, Didomi, Quantcast"]
    },
    {
      category: "CRM & Automation",
      tools: ["HubSpot", "Salesforce", "Zapier / Make / n8n", "Segment / Rudderstack", "Slack integrations"]
    },
    {
      category: "Ecommerce Platforms",
      tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      category: "Cloud & Infrastructure",
      tools: ["Google Cloud Platform (GCP)", "AWS", "Cloudflare Zaraz"]
    }
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Advanced purchase & refund tracking"
    },
    {
      title: "B2B & SaaS", 
      description: "Lead tracking + CRM integration"
    },
    {
      title: "Agencies",
      description: "White-label analytics & reporting services"
    },
    {
      title: "Finance & Professional Services",
      description: "Privacy-compliant analytics"
    },
    {
      title: "Education & Non-profits",
      description: "Full-funnel marketing & lead tracking"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Global focus",
      description: "Serving clients in Canada, Australia, UAE, UK & US"
    },
    {
      icon: <Settings className="h-6 w-6 text-accent" />,
      title: "Full-stack expertise",
      description: "GA4, GTM, Looker Studio, BigQuery, Ads, CRM, CMPs"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Compliance-ready",
      description: "GDPR, PIPEDA, APP, PDPL"
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Automation-first",
      description: "Real-time dashboards & workflows"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
      title: "Data you can trust",
      description: "Validation, cleaning, predictive analytics"
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Services */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Analytics Setup & Audits */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Analytics Setup & Audits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Google Analytics 4 (GA4) migration & audits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Event & conversion tracking setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Ecommerce tracking (Shopify, WooCommerce, Magento)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cross-domain & multi-site tracking</span>
                  </li>
                </ul>
              </Card>

              {/* Tag Management */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Tag Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Google Tag Manager (GTM) setup & debugging</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Server-Side GTM (sGTM) implementation on GCP/AWS</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Meta Conversions API & Google Ads Enhanced Conversions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cookie lifespan & cookieless tracking solutions</span>
                  </li>
                </ul>
              </Card>

              {/* Reporting & Dashboarding */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Reporting & Dashboarding</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Looker Studio dashboards (quota-proof, automated)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Power BI & Tableau reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">BigQuery pipelines & advanced SQL models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Automated email/slack/pdf reports</span>
                  </li>
                </ul>
              </Card>

              {/* Attribution & ROI Analytics */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Attribution & ROI Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Multi-touch attribution modeling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cost vs revenue tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Customer Lifetime Value (LTV) dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Offline conversions integration</span>
                  </li>
                </ul>
              </Card>

              {/* Privacy & Compliance */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Privacy & Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Consent Mode v2 setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">CMP integrations (Cookiebot, OneTrust, Didomi, Quantcast)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">GDPR, PIPEDA, APP, PDPL-compliant data tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">IP anonymization & privacy-first setups</span>
                  </li>
                </ul>
              </Card>

              {/* Data Quality & Validation */}
              <Card className="service-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Data Quality & Validation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Identify and fix data mismatches (GA4 vs Ads vs CRM)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Deduplicate and clean ecommerce & lead data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Bot traffic filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Channel grouping setup</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Right Column - Dashboard Images */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={heroImage} 
                  alt="Analytics dashboard interface showing data visualization" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teamImage} 
                  alt="Marketing analytics workspace with multiple screens" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
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

          <div className="space-y-12">
            {toolCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} className="tool-badge">
                      {tool}
                    </Badge>
                  ))}
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
              Tailored analytics solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="service-card text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The expertise and reliability you need to transform your marketing data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
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