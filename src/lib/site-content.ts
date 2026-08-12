export const BASE_URL = "https://marvexagency.lovable.app";

export const CONTACT = {
  whatsapp: "https://wa.me/2348165010990",
  whatsappLabel: "0816 501 0990",
  email: "marvexagency@gmail.com",
  phone: "+1 315 277 2465",
};

export type ServiceKey =
  | "website-design"
  | "google-business-profile-management"
  | "reputation-management"
  | "ai-lead-automation";

export const SERVICES: {
  key: ServiceKey;
  path: string;
  name: string;
  short: string;
  cta: string;
  blurb: string;
}[] = [
  {
    key: "website-design",
    path: "/website-design",
    name: "Website Design",
    short: "Website Design",
    cta: "Explore Website Design",
    blurb:
      "Turn your website into a 24/7 salesperson that explains your offer, builds trust and makes contacting you easy.",
  },
  {
    key: "google-business-profile-management",
    path: "/google-business-profile-management",
    name: "Google Business Profile & Maps",
    short: "Google Business Profile",
    cta: "Explore Google Maps Management",
    blurb:
      "Improve the information, structure and customer-facing presence of your Google Business Profile.",
  },
  {
    key: "reputation-management",
    path: "/reputation-management",
    name: "Reputation Management",
    short: "Reputation Management",
    cta: "Explore Reputation Management",
    blurb:
      "Build a better process for collecting genuine customer feedback and responding to reviews professionally.",
  },
  {
    key: "ai-lead-automation",
    path: "/ai-lead-automation",
    name: "AI Lead Follow-Up",
    short: "AI Lead Automation",
    cta: "Explore AI Automation",
    blurb:
      "Respond to enquiries faster, qualify prospects and automate follow-up so fewer opportunities are forgotten.",
  },
];

export const INDUSTRIES: {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  challenges: string[];
  focus: string[];
}[] = [
  {
    slug: "car-dealers",
    name: "Car Dealers",
    title: "Car Dealership Website Design & Digital Marketing | Marvex",
    description:
      "Website design, Google Business Profile management, reputation and lead follow-up systems built around how car buyers actually research and enquire.",
    h1: "Digital Growth Systems for Car Dealerships",
    intro:
      "Vehicle buyers compare stock, price and dealership reputation long before they visit a forecourt. The dealership that is easy to find, easy to trust and quick to reply usually gets the test drive.",
    challenges: [
      "Stock listings that are hard to browse on a phone",
      "Enquiries arriving outside opening hours with no reply until morning",
      "Reviews that focus on aftersales rather than the buying experience",
      "No structured process for part-exchange or finance enquiries",
    ],
    focus: [
      "Stock and listing pages structured for search and comparison",
      "Finance and part-exchange enquiry forms with instant acknowledgement",
      "Google Business Profile photos, opening hours and vehicle-related Q&A",
      "Automated follow-up for test-drive and valuation requests",
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    title: "Restaurant Website Design & Google Maps Marketing | Marvex",
    description:
      "Help hungry local customers find your restaurant, read an accurate menu, trust your reviews and book a table without friction.",
    h1: "Digital Growth Systems for Restaurants",
    intro:
      "Most restaurant decisions happen on a phone within a few minutes: search, look at photos, scan reviews, check the menu, book. Every one of those steps should work.",
    challenges: [
      "Menus buried in PDFs or images that phones struggle with",
      "Opening hours that are wrong on Google during holidays",
      "Photos on the Business Profile uploaded by customers, not the venue",
      "Booking requests through social media that go unanswered",
    ],
    focus: [
      "Fast mobile menu pages with real dish descriptions",
      "Google Business Profile photos, hours, attributes and posts",
      "Review requests after service and professional review responses",
      "Booking and enquiry follow-up through WhatsApp",
    ],
  },
  {
    slug: "barbers",
    name: "Barbers & Salons",
    title: "Barbershop Website Design & Google Business Profile | Marvex",
    description:
      "Websites, Google Maps presence, reviews and booking follow-up for barbershops and salons that rely on local walk-ins and repeat clients.",
    h1: "Digital Growth Systems for Barbers & Salons",
    intro:
      "Barbers and salons live and die by local discovery and repeat visits. Your Google presence, your gallery and your booking flow do most of the selling.",
    challenges: [
      "No easy way to book outside of DMs",
      "Great work with no gallery to show it",
      "Reviews collected inconsistently, only after complaints",
      "Quiet mid-week slots with no reactivation of past clients",
    ],
    focus: [
      "Booking-first mobile pages with pricing clarity",
      "Gallery and stylist profiles that build confidence",
      "A steady, genuine review-request routine after appointments",
      "Automated reminders and rebooking nudges",
    ],
  },
  {
    slug: "dentists",
    name: "Dentists",
    title: "Dental Website Design & Google Business Profile Management | Marvex",
    description:
      "Practical, compliant digital systems for dental practices: clear treatment pages, accurate Google presence, genuine reviews and prompt enquiry follow-up.",
    h1: "Digital Growth Systems for Dental Practices",
    intro:
      "Patients choosing a dentist look for reassurance: clear treatment information, a calm tone and evidence that other people had a good experience.",
    challenges: [
      "Treatment pages that read like a price list rather than an explanation",
      "Enquiries handled only during reception hours",
      "Review requests that feel pushy or are never made at all",
      "Profile information that doesn't match the practice website",
    ],
    focus: [
      "Treatment pages written to answer real patient questions",
      "Consistent practice information across site and Google",
      "A compliant, genuine feedback and review-response process",
      "Enquiry acknowledgement and consultation booking workflows",
    ],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    title: "Plumber Website Design & Google Maps Management | Marvex",
    description:
      "Emergency-ready websites, strong local Google presence and instant enquiry follow-up for plumbing businesses.",
    h1: "Digital Growth Systems for Plumbers",
    intro:
      "Plumbing enquiries are urgent. The business that answers first, with clear service areas and visible reviews, usually wins the job.",
    challenges: [
      "Call-outs lost because nobody could answer while on a job",
      "Service areas not clear on the website or Google",
      "No reviews collected after completed work",
      "Quote requests that never get a second follow-up",
    ],
    focus: [
      "Emergency-first layouts with tap-to-call and WhatsApp",
      "Service area and job-type pages structured for local search",
      "Review requests once a job is signed off",
      "Automated replies and quote follow-up when you're on site",
    ],
  },
  {
    slug: "electricians",
    name: "Electricians",
    title: "Electrician Website Design & Local SEO | Marvex Agency",
    description:
      "Websites and local growth systems for electricians: clear certifications, service areas, reviews and fast enquiry follow-up.",
    h1: "Digital Growth Systems for Electricians",
    intro:
      "Electrical work is a trust purchase. Certifications, clear service scope and recent reviews do more for you than clever slogans.",
    challenges: [
      "Certifications and accreditations hidden or missing",
      "Domestic and commercial work mixed into one confusing page",
      "Enquiries arriving while you're mid-job",
      "No record of which quotes were followed up",
    ],
    focus: [
      "Separate domestic and commercial service pages",
      "Accreditation and safety credentials shown clearly",
      "Google Business Profile services and area coverage",
      "Automated quote acknowledgement and follow-up",
    ],
  },
  {
    slug: "roofers",
    name: "Roofers",
    title: "Roofing Company Website Design & Google Maps | Marvex",
    description:
      "Roofing websites with real project galleries, clear service areas, review systems and structured quote follow-up.",
    h1: "Digital Growth Systems for Roofing Companies",
    intro:
      "Roofing is a high-value, high-hesitation purchase. Photographic proof of finished work and a professional quote process carry most of the weight.",
    challenges: [
      "No before-and-after evidence of completed jobs",
      "Quotes sent once and never chased",
      "Storm-season enquiry spikes handled manually",
      "Thin Google presence outside the main town",
    ],
    focus: [
      "Project galleries organised by roof type and area",
      "Quote request forms with instant acknowledgement",
      "Follow-up sequences for pending estimates",
      "Google Business Profile coverage across service towns",
    ],
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    title: "Cleaning Company Website Design & Lead Follow-Up | Marvex",
    description:
      "Websites, Google presence and automated follow-up for domestic and commercial cleaning businesses.",
    h1: "Digital Growth Systems for Cleaning Companies",
    intro:
      "Cleaning is a recurring-revenue business, so the value is in converting the first enquiry and keeping the relationship organised.",
    challenges: [
      "Pricing questions that stall the enquiry",
      "One-off enquiries never converted into contracts",
      "Domestic and commercial offers competing on one page",
      "No structured request for reviews from happy regulars",
    ],
    focus: [
      "Clear scope and pricing guidance to filter enquiries",
      "Separate domestic and commercial journeys",
      "Automated quote follow-up and recurring-plan offers",
      "A simple review routine with long-term clients",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Businesses",
    title: "Real Estate Website Design & Local Marketing | Marvex",
    description:
      "Property listing websites, Google Business Profile management and enquiry automation for estate agencies and property businesses.",
    h1: "Digital Growth Systems for Real Estate Businesses",
    intro:
      "Property buyers and vendors both shop around. Speed of reply and credibility decide who gets the viewing and who gets the valuation.",
    challenges: [
      "Listing pages that are slow and hard to filter",
      "Viewing requests answered hours later",
      "Valuation enquiries with no nurture sequence",
      "Reviews from buyers but none from vendors",
    ],
    focus: [
      "Fast listing and area pages with clear enquiry paths",
      "Instant acknowledgement for viewing and valuation requests",
      "Nurture sequences for vendors who aren't ready yet",
      "Google presence for each office location",
    ],
  },
  {
    slug: "home-services",
    name: "Home-Service Businesses",
    title: "Home Service Business Website & Google Maps Management | Marvex",
    description:
      "Growth systems for home-service businesses: local visibility, trust signals, easy contact and automated follow-up.",
    h1: "Digital Growth Systems for Home-Service Businesses",
    intro:
      "Whatever the trade, the local customer journey is the same: search, compare, contact, wait for a reply. We shorten that last step.",
    challenges: [
      "Enquiries spread across calls, forms, WhatsApp and social",
      "No single place to see which leads were answered",
      "Inconsistent business information across the web",
      "Reviews collected only by accident",
    ],
    focus: [
      "One clear contact path across every channel",
      "Consistent business information everywhere it appears",
      "Automated first response and follow-up",
      "A repeatable review-request routine",
    ],
  },
];

export const FAQS = [
  {
    q: "Do you only work with local businesses?",
    a: "Our core positioning is local businesses, particularly businesses that depend on enquiries, calls, bookings or physical visits.",
  },
  {
    q: "Do I need a website?",
    a: "Not necessarily. We first look at your current customer journey and recommend what is actually needed.",
  },
  {
    q: "Can you manage my Google Business Profile?",
    a: "Yes, depending on the access and scope required.",
  },
  {
    q: "Can you guarantee Google Maps rankings?",
    a: "No. No legitimate agency can guarantee a specific Google Maps position. We improve the factors that can strengthen your local search presence.",
  },
  {
    q: "Do you create fake reviews?",
    a: "No. We only recommend genuine customer feedback processes.",
  },
  {
    q: "Do I need paid advertising?",
    a: "Not necessarily. We can assess your existing organic visibility, website and follow-up process first.",
  },
  {
    q: "Does AI replace my employees?",
    a: "No. Automation should reduce repetitive work while allowing your team to handle important customer conversations.",
  },
];

export const BLOG_CLUSTERS = [
  {
    title: "Google Business Profile",
    posts: [
      "How to optimize a Google Business Profile",
      "Why your business isn't showing on Google Maps",
      "How Google reviews affect customer trust",
      "How to respond to negative Google reviews",
      "Google Business Profile mistakes local businesses make",
      "Google Business Profile photos: what businesses should know",
    ],
  },
  {
    title: "Website Design",
    posts: [
      "What should a local business website include?",
      "How much does a small business website cost?",
      "Why visitors aren't contacting your business",
      "Website vs Facebook page for a local business",
      "How to create a website that generates enquiries",
    ],
  },
  {
    title: "Reputation",
    posts: [
      "How to ask customers for genuine reviews",
      "How to respond to negative reviews",
      "Why businesses should monitor online reviews",
      "Review management for local businesses",
    ],
  },
  {
    title: "AI Automation",
    posts: [
      "How local businesses can automate lead follow-up",
      "WhatsApp lead follow-up for small businesses",
      "How automated appointment booking works",
      "How businesses lose leads through slow responses",
    ],
  },
];
