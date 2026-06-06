export type ProjectType = "Chatbot" | "Web App";

export const company = {
  address: "88 Warringa Crescent, Hoppers Crossing VIC 3029, Australia",
  phone: "+61 481 353 242",
  phoneHref: "tel:+61481353242",
  whatsappHref: "https://wa.me/61481353242",
  email: "hello@nebulax.solutions",
  ceo: "Sarmad Ali",
  cto: "Abdullah Shaikh"
};

export const services = [
  {
    icon: "AI",
    title: "AI Chatbots",
    description: "Intelligent conversational agents trained on your data. Automate support, sales, and operations.",
    tags: ["NLP", "GPT-4", "WhatsApp", "Web Widget"],
    longDescription: "We design AI assistants that understand your business, answer with context, and hand off gracefully when a human touch is needed.",
    features: ["Custom knowledge-base training", "Lead qualification and sales flows", "Website and WhatsApp deployment", "CRM and helpdesk handoffs", "Analytics and conversation insights", "Guardrails for safe responses"]
  },
  {
    icon: "FX",
    title: "Full Web Applications",
    description: "End-to-end web platforms with modern UI, robust backends, and seamless deployment.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    longDescription: "From dashboards to SaaS platforms, we build fast, secure products with interfaces people enjoy using and systems that can scale.",
    features: ["Product strategy and UX architecture", "Responsive frontend engineering", "Authentication and billing", "Database design and APIs", "Admin dashboards and analytics", "Vercel-ready deployment pipelines"]
  },
  {
    icon: "API",
    title: "API & Integrations",
    description: "Connect your tools. Custom APIs and third-party integrations so your stack works as one system.",
    tags: ["REST API", "Webhooks", "Payments", "CRM"],
    longDescription: "We connect the services your team already uses, automate repetitive steps, and make fragmented systems feel like one workflow.",
    features: ["Custom REST API development", "Webhook automation", "Payment provider integrations", "CRM and ERP connections", "Data sync and migration", "Monitoring and error recovery"]
  },
  {
    icon: "ADS",
    title: "Digital Marketing",
    description: "Performance campaigns across Facebook, Instagram, and Google Ads to bring qualified leads into your funnel.",
    tags: ["Facebook Ads", "Instagram Ads", "Google Ads", "Analytics"],
    longDescription: "We plan, launch, and optimize paid campaigns that connect your offer with the right audience, then track what is working with clear reporting.",
    features: ["Facebook and Instagram ad campaigns", "Google Search and Display ads", "Conversion tracking setup", "Landing page and funnel strategy", "Audience targeting and retargeting", "Weekly campaign performance reporting"]
  }
];

export const projects = [
  { title: "E-Commerce Support Bot", type: "Chatbot" as ProjectType, meta: "Chatbot · Order Tracking · 24/7 Automation", theme: "blue" },
  { title: "SaaS Dashboard Platform", type: "Web App" as ProjectType, meta: "Next.js · Analytics · Multi-tenant", theme: "cyan" },
  { title: "EdTech AI Tutor", type: "Chatbot" as ProjectType, meta: "LLM · Education · Personalized Learning", theme: "purple" },
  { title: "Real Estate Listings Portal", type: "Web App" as ProjectType, meta: "React · Maps API · Search & Filter", theme: "amber" },
  { title: "Healthcare Appointment Bot", type: "Chatbot" as ProjectType, meta: "AI · Scheduling · SMS Reminders", theme: "green" }
];