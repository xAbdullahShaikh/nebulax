export type ProjectType = "Chatbot" | "Web App" | "UI/UX Design" | "Graphic Design";

export const company = {
  address: "88 Warringa Crescent, Hoppers Crossing VIC 3029, Australia",
  phone: "+61 481 353 242",
  phoneHref: "tel:+61481353242",
  whatsappHref: "https://wa.me/61481353242",
  email: "info@stackpointerlabs.com.au",
  ceo: "Sarmad Ali",
  cto: "Abdullah Shaikh"
};

export const services = [
  {
    icon: "AI",
    title: "AI Chatbots",
    image: "/services_thumbnail/chatbots.png",
    description: "Intelligent conversational agents trained on your data. Automate support, sales, and operations.",
    tags: ["NLP", "GPT-4", "WhatsApp", "Web Widget"],
    longDescription: "We design AI assistants that understand your business, answer with context, and hand off gracefully when a human touch is needed.",
    features: ["Custom knowledge-base training", "Lead qualification and sales flows", "Website and WhatsApp deployment", "CRM and helpdesk handoffs", "Analytics and conversation insights", "Guardrails for safe responses"]
  },
  {
    icon: "FX",
    title: "Full Web Applications",
    image: "/projects_images/web_app.png",
    description: "End-to-end web platforms with modern UI, robust backends, and seamless deployment.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    longDescription: "From dashboards to SaaS platforms, we build fast, secure products with interfaces people enjoy using and systems that can scale.",
    features: ["Product strategy and UX architecture", "Responsive frontend engineering", "Authentication and billing", "Database design and APIs", "Admin dashboards and analytics", "Vercel-ready deployment pipelines"]
  },
  {
    icon: "SEO",
    title: "Search Engine Optimization (SEO)",
    image: "/services_thumbnail/seo.jpeg",
    description: "Optimize your web presence to rank higher on search engines and drive high-intent organic traffic.",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    longDescription: "We optimize your website's architecture, speed, content, and metadata so Google ranks you higher and customers can easily discover you.",
    features: ["Technical SEO audits & site speed optimization", "Strategic keyword research & content maps", "High-quality backlink generation", "Schema markup and structured data", "Local SEO and Google Business setup", "Rank tracking and monthly traffic reports"]
  },
  {
    icon: "ADS",
    title: "Digital Marketing",
    image: "/services_thumbnail/seo.jpeg",
    description: "Performance campaigns across Facebook, Instagram, and Google Ads to bring qualified leads into your funnel.",
    tags: ["Facebook Ads", "Instagram Ads", "Google Ads", "Analytics"],
    longDescription: "We plan, launch, and optimize paid campaigns that connect your offer with the right audience, then track what is working with clear reporting.",
    features: ["Facebook and Instagram ad campaigns", "Google Search and Display ads", "Conversion tracking setup", "Landing page and funnel strategy", "Audience targeting and retargeting", "Weekly campaign performance reporting"]
  }
];

export const projects = [
  {
    title: "FlowerAura E-Commerce",
    type: "Web App" as ProjectType,
    meta: "Next.js · E-commerce · Conversion Optimized",
    image: "/projects_images/webapp_floweraura.png",
    theme: "blue"
  },
  {
    title: "MNC Corporate Portal",
    type: "Web App" as ProjectType,
    meta: "Next.js · Dashboard · Analytics",
    image: "/projects_images/webapp_mnc.png",
    theme: "cyan"
  },
  {
    title: "Nordic Ware Storefront",
    type: "Web App" as ProjectType,
    meta: "React · Custom Catalog · High Performance",
    image: "/projects_images/webapp_nordicware.png",
    theme: "amber"
  },
  {
    title: "E-Commerce Support Bot",
    type: "Chatbot" as ProjectType,
    meta: "Chatbot · Order Tracking · 24/7 Automation",
    image: "/services_thumbnail/chatbots.png",
    theme: "purple"
  },
  {
    title: "UI/UX Design System",
    type: "UI/UX Design" as ProjectType,
    meta: "Figma · Design Tokens · Component Library",
    image: "/projects_images/UI_UX.png",
    theme: "pink"
  },
  {
    title: "Graphic Design & Branding",
    type: "Graphic Design" as ProjectType,
    meta: "Vector · Branding · Identity",
    image: "/projects_images/graphic_design.png",
    theme: "indigo"
  }
];
