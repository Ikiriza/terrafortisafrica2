/**
 * Central content for the TerraFortis Africa website.
 * Edit text, contacts, team and imagery here — every page reads from this file.
 */

// ---------------------------------------------------------------------------
// Company & contact details
// ---------------------------------------------------------------------------
export const site = {
  name: "TerraFortis Africa",
  short: "TFA",
  tagline: "For Food, Agriculture and Environment",
  description:
    "TerraFortis Africa is an agricultural consultancy and development firm promoting Conservation Agriculture, Sustainable Agricultural Mechanization and green solutions for improved livelihoods and wealth creation in rural Africa.",
  email: "terrafortisafrica@terrafortisafrica.org",
  phone: "+256 752 400 721",
  phoneHref: "tel:+256752400721",
  whatsapp: "https://wa.me/256752400721",
  location: "Kampala, Uganda",
  mapsUrl: "https://maps.google.com/?q=Kampala,Uganda",
  mapEmbed: "https://maps.google.com/maps?q=Kampala,%20Uganda&z=12&output=embed",
}

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

// ---------------------------------------------------------------------------
// Imagery (free-to-use Unsplash photography). Swap any URL for your own
// project photos — e.g. "/images/field-day.jpg" placed in /public/images.
// ---------------------------------------------------------------------------
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  heroHome: u("1761069346828-2ca360f8fa3f", 2400), // dirt road through green fields, Uganda
  heroAbout: u("1696963609168-5c3d93857ea4", 2400), // lush green hillside, Uganda
  heroServices: u("1717702576954-c07131c54169", 2400), // tractor ploughing at sunset
  heroWork: u("1508175688576-0c076b47b5b5", 2400), // aerial view of fields
  heroContact: u("1509110646989-7ca4308edb3e", 2400), // aerial green farmland
  sunsetFields: u("1637686358292-c53b988641f5", 2400), // sunset over fields & mountains
  goldenField: u("1500382017468-9049fed747ef", 2400), // golden field at sunrise
  womanFarmer: u("1530507629858-e4977d30e9e0", 1200), // woman harvesting
  farmerField: u("1741874299706-2b8e16839aaa", 1200), // farmer tending crops
  grainHands: u("1710149484964-d966b771c204", 1200), // handful of grain
  farmersPlanting: u("1509099342178-e323b1717dba", 1200), // farmers planting together
  fieldWorkers: u("1761634373241-5abcfcaa0c39", 1200), // farm workers planting
  dataInField: u("1761839257144-297ce252742e", 1200), // woman using a laptop in a field
  oxenPlough: u("1768775517205-7f4bc1b3f771", 1400), // ploughing with oxen
  oxenCart: u("1764933493162-3696c7ccb508", 1200), // oxen cart on a farm road
  tractor: u("1606739211185-2c846d734a6d", 1400), // tractor on a field
  tractorRice: u("1574943320219-553eb213f72d", 1200), // farmer on machinery
  sprayerAerial: u("1656407410275-e63e689bcd90", 1200), // aerial tractor in field
  handsSeedling: u("1590682680695-43b964a3ae17", 1200), // planting a seedling
  soilHands: u("1642952273588-ed6fa28870ac", 1200), // handful of soil
  seedling: u("1723740683543-d394ba1d4366", 1200), // young plant sprouting
  mulch: u("1598644451141-a412412a9a69", 1200), // dry residue / soil cover
  coffee: u("1741012253421-365cf4c78083", 1200), // coffee cherries, Uganda
  bananas: u("1770562325770-be5f666f41c2", 1200), // banana trees
  maize: u("1723645013435-c3c8948faf59", 1400), // green maize field
  maizePath: u("1693672843238-737e13d6b86f", 1200), // path through maize
  aerialPlots: u("1516822277566-bb38424a2b77", 1400), // aerial plots
  hillside: u("1696963609168-5c3d93857ea4", 1400),
}

// ---------------------------------------------------------------------------
// About — vision, mission, core values, leadership
// ---------------------------------------------------------------------------
export const vision =
  "To be a premier consultancy and development firm of excellence in promoting innovative, sustainable, and green solutions for improved livelihoods and wealth creation in rural Africa."

export const mission =
  "To enhance agricultural productivity, sustainable land management, and environmental conservation through promotion of Conservation Agriculture (CA) principles and practices and Sustainable Agricultural Mechanization (SAM) technologies in Africa."

export const coreValuesIntro =
  "The decisions and actions in TFA are consistently based on a set of clear principles outlined here as our core values. These are:"

export const coreValues = [
  {
    title: "Performance and service orientation",
    icon: "target",
    text: "TFA believes that the stakes in improving productivity, sustainable land management and environmental conservation are extremely high and will, therefore, remain focused on quality service delivery, innovativeness and adherent to ethics and standards so as to meet and exceed client’s expectation.",
  },
  {
    title: "Partnership, networking and collaboration",
    icon: "handshake",
    text: "TFA will pursue productive and beneficial partnerships and strategic alliances with clearly defined roles, responsibilities, governance and supportive mechanisms so as to ensure effective collaboration and synergies that have a direct bearing to the Network’s mission.",
  },
  {
    title: "Knowledge and information management",
    icon: "book",
    text: "TFA is committed to nurturing a strong culture in the generation, sharing and application of development knowledge and information for promoting improved productivity, sustainable natural resource management, environmental conservation and adaptation and mitigation to climate change challenges in Africa and beyond.",
  },
  {
    title: "Regionality and environmental concern",
    icon: "earth",
    text: "TFA is an African organization committed to the achievement of economies of scale and scope while ensuring optimal availability of Regenerative agriculture technologies, products and services while maintaining the quality of environment and responding to the challenges of climate change.",
  },
  {
    title: "Integrity, transparency and accountability",
    icon: "shield",
    text: "TFA upholds virtues of integrity through honesty, fairness and professionalism in all its operations while remaining committed to effective and efficient utilization of all resources entrusted to it in the most transparent, accountable and cost-effective manner.",
  },
] as const

export const stats = [
  { value: 150, suffix: "+", label: "Team Members" },
  { value: 25, suffix: "+", label: "Industry Awards" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Success Rate" },
]

/**
 * Leadership team. Add a portrait by placing a square photo in /public/team/
 * and setting `image: "/team/robert-gensi.jpg"`. Without an image an elegant
 * monogram card is shown instead.
 */
export const team: { name: string; role: string; image?: string }[] = [
  { name: "Mr. Robert Gensi", role: "Chief of Party" },
  { name: "Ms. Victoria Akello", role: "Director of Programmes" },
  { name: "Mr. Neftali Mugizi", role: "Programmes Officer" },
  { name: "David Kim", role: "Director of Operations" },
]

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export type Service = {
  id: string
  icon: string
  title: string
  short: string
  description: string
  deliverables: string[]
  image: string
}

export const services: Service[] = [
  {
    id: "conservation-agriculture",
    icon: "sprout",
    title: "Conservation Agriculture",
    short: "Helping farmers and programmes move from plough-based systems to CA — applying all three principles together.",
    description:
      "Conservation Agriculture is at the heart of what we do. We design and deliver CA promotion and extension programmes that move farmers from conventional ploughing to minimum soil disturbance, permanent soil cover and crop diversification — building healthier soils, steadier yields and lower production costs.",
    deliverables: [
      "CA training of trainers (ToT) for extension staff and lead farmers",
      "Demonstration plots and farmer field schools",
      "CA manuals, extension materials and training curricula",
      "Adoption follow-up, coaching and technical backstopping",
    ],
    image: images.handsSeedling,
  },
  {
    id: "mechanization",
    icon: "tractor",
    title: "Sustainable Agricultural Mechanization",
    short: "Matching right-scale machinery and hire-service businesses to smallholder realities.",
    description:
      "Mechanization is a system, not only a technology. We help partners identify the right-scale equipment — from jab planters and animal-drawn rippers to two-wheel tractors — and build the hire-service enterprises, operator skills and supply networks that bring them to smallholder farmers.",
    deliverables: [
      "Mechanization needs and market assessments",
      "Hire-service business models and operator training",
      "Equipment selection and CA-compatible technology advice",
      "Linkages between service providers, mechanics and spare-parts dealers",
    ],
    image: images.tractor,
  },
  {
    id: "climate-smart",
    icon: "trees",
    title: "Climate-Smart Agriculture & Land Management",
    short: "Restoring degraded land and building farm resilience to a changing climate.",
    description:
      "We integrate sustainable land management, soil and water conservation, agroforestry and cover crops into farming systems — helping communities adapt to climate variability while protecting the natural resources their livelihoods depend on.",
    deliverables: [
      "Soil and water conservation planning",
      "Cover crop and agroforestry integration",
      "Degraded land restoration strategies",
      "Climate risk and vulnerability assessments",
    ],
    image: images.bananas,
  },
  {
    id: "value-chains",
    icon: "coins",
    title: "Value Chains & Agribusiness",
    short: "Connecting farmers to markets and turning farming into profitable enterprise.",
    description:
      "Productivity gains only translate into wealth when farmers can reach markets. We analyse value chains, identify bottlenecks and opportunities, and support agribusinesses and farmer enterprises to grow, attract investment and trade on better terms.",
    deliverables: [
      "Value chain analysis and mapping",
      "Feasibility studies and business plans",
      "Market linkage facilitation",
      "Investment-readiness support for agri-enterprises",
    ],
    image: images.coffee,
  },
  {
    id: "capacity-building",
    icon: "graduation",
    title: "Capacity Building & Farmer Organisations",
    short: "Strengthening the people and institutions that drive lasting change.",
    description:
      "Lasting change is built by people. We strengthen extension systems, cooperatives, youth and women's groups through practical, hands-on training, governance support and learning platforms that keep innovation going long after a programme ends.",
    deliverables: [
      "Training needs assessments",
      "Cooperative governance and business skills training",
      "Extension staff development programmes",
      "Innovation and learning platforms",
    ],
    image: images.fieldWorkers,
  },
  {
    id: "research-mel",
    icon: "chart",
    title: "Research, Surveys & MEL",
    short: "Rigorous evidence that shows what works — and why.",
    description:
      "We generate credible evidence for decision-making. From baseline surveys to impact studies, our monitoring, evaluation and learning (MEL) services give partners clear, disaggregated data and practical lessons to improve programmes and report results with confidence.",
    deliverables: [
      "Baseline, midline and endline surveys (gender- and age-disaggregated)",
      "MEL frameworks, indicators and data systems",
      "Adoption and impact studies",
      "Case studies and learning briefs",
    ],
    image: images.dataInField,
  },
  {
    id: "policy-programmes",
    icon: "landmark",
    title: "Policy, Strategy & Programme Support",
    short: "Technical assistance for governments and donor-funded programmes.",
    description:
      "We support governments and development partners to design and deliver strategies and programmes for CA and mechanization — aligned with continental frameworks such as the FAO/African Union Sustainable Agricultural Mechanization Framework for Africa (F-SAMA).",
    deliverables: [
      "Policy briefs and strategy development",
      "CA and mechanization strategy support",
      "Programme and proposal design",
      "Technical assistance and field implementation",
    ],
    image: images.aerialPlots,
  },
]

// ---------------------------------------------------------------------------
// Conservation Agriculture & SAM (source: FAO)
// ---------------------------------------------------------------------------
export const caPrinciples = [
  {
    title: "Minimum soil disturbance",
    text: "No-till or minimum tillage: seed and fertiliser are placed directly into the soil, protecting its structure, moisture and life.",
    image: images.handsSeedling,
  },
  {
    title: "Permanent soil cover",
    text: "Crop residues and cover crops keep at least 30% of the soil covered — shielding it from erosion, heat and moisture loss.",
    image: images.mulch,
  },
  {
    title: "Crop diversification",
    text: "Rotations and associations of at least three different crops break pest cycles, feed the soil and spread farmers’ risk.",
    image: images.maize,
  },
]

export const caBenefits = [
  "Higher water and nutrient use efficiency",
  "Lower fuel, machinery and labour costs",
  "Richer soil organic matter and structure",
  "Less erosion, more biodiversity and carbon storage",
]

export const samTechnologies = [
  "Hand jab planters",
  "Animal-drawn rippers",
  "Direct seeders",
  "Two-wheel tractors",
  "Knapsack sprayers",
  "Shellers & threshers",
  "Mechanized hire services",
]

// ---------------------------------------------------------------------------
// Process, audiences, focus areas
// ---------------------------------------------------------------------------
export const processSteps = [
  { title: "Listen & scope", text: "We review your brief or terms of reference and agree objectives, context and success measures." },
  { title: "Co-design", text: "A clear technical approach, team, workplan and budget — designed with you and local stakeholders." },
  { title: "Inception", text: "Tools, baselines and work plans refined on the ground before full delivery begins." },
  { title: "Deliver & build capacity", text: "Field implementation, training and technical assistance with regular progress reporting." },
  { title: "Learn & scale", text: "Results, lessons and handover so impact continues — and grows — beyond the engagement." },
]

export const audiences = [
  { icon: "landmark", title: "Governments & public agencies", text: "Ministries of agriculture and local governments" },
  { icon: "globe", title: "Development partners", text: "Bilateral and multilateral donors and implementing partners" },
  { icon: "users", title: "NGOs & farmer organisations", text: "Cooperatives, youth and women's groups" },
  { icon: "store", title: "Agribusiness & private sector", text: "Agro-dealers, equipment suppliers and processors" },
  { icon: "microscope", title: "Research & academia", text: "Research centres and universities" },
]

export const focusAreas = [
  "Conservation Agriculture",
  "Sustainable Mechanization",
  "Climate-Smart Agriculture",
  "Sustainable Land Management",
  "Agroforestry",
  "Value Chains & Markets",
  "Capacity Building",
  "Research & MEL",
]

// ---------------------------------------------------------------------------
// Our Work — programme areas
// ---------------------------------------------------------------------------
export const workCategories = [
  "All",
  "Conservation Agriculture",
  "Mechanization",
  "Climate & Environment",
  "Markets & Enterprise",
  "Learning & Evidence",
] as const

export const workAreas = [
  {
    title: "Scaling Conservation Agriculture for smallholders",
    category: "Conservation Agriculture",
    image: images.farmersPlanting,
    text: "Farmer field schools, lead-farmer networks and demonstration plots that take CA from trial to everyday practice.",
    tags: ["Training of trainers", "Demo plots", "Extension"],
  },
  {
    title: "Mechanization hire-service enterprises",
    category: "Mechanization",
    image: images.tractor,
    text: "Supporting young entrepreneurs to own CA-compatible equipment and sell ripping, planting and threshing services to neighbours.",
    tags: ["Business models", "Operator skills", "Youth"],
  },
  {
    title: "Animal traction & right-scale tools",
    category: "Mechanization",
    image: images.oxenPlough,
    text: "Introducing rippers, direct seeders and jab planters that cut labour and fit the realities of small farms.",
    tags: ["Rippers", "Jab planters", "Labour saving"],
  },
  {
    title: "Restoring degraded landscapes",
    category: "Climate & Environment",
    image: images.hillside,
    text: "Soil and water conservation, agroforestry and cover crops that rebuild soil health and protect watersheds.",
    tags: ["SLM", "Agroforestry", "Watersheds"],
  },
  {
    title: "Climate-resilient farming systems",
    category: "Climate & Environment",
    image: images.maize,
    text: "Climate-smart practices and risk assessments that help farming households withstand drought and erratic rains.",
    tags: ["Adaptation", "Risk assessment", "CSA"],
  },
  {
    title: "Value chains that pay farmers",
    category: "Markets & Enterprise",
    image: images.coffee,
    text: "Value chain analysis, business planning and market linkages for crops such as coffee, maize and legumes.",
    tags: ["Market linkages", "Business plans", "Investment"],
  },
  {
    title: "Stronger cooperatives & farmer groups",
    category: "Markets & Enterprise",
    image: images.womanFarmer,
    text: "Governance, business skills and collective marketing for cooperatives, women's and youth groups.",
    tags: ["Governance", "Women & youth", "Collective action"],
  },
  {
    title: "Evidence for better programmes",
    category: "Learning & Evidence",
    image: images.dataInField,
    text: "Baseline and endline surveys, adoption studies and MEL systems that turn field data into decisions.",
    tags: ["Surveys", "MEL", "Learning briefs"],
  },
  {
    title: "Soil health & CA research partnerships",
    category: "Conservation Agriculture",
    image: images.soilHands,
    text: "Working alongside research institutions to test, adapt and document CA practices for local conditions.",
    tags: ["On-farm trials", "Soil health", "Documentation"],
  },
]

export const impactPathway = [
  { title: "Knowledge & skills", text: "Farmers, extension staff and entrepreneurs trained in CA and SAM." },
  { title: "Adoption", text: "CA practices and right-scale machinery taken up on the farm." },
  { title: "Productivity", text: "Higher, more stable yields at lower cost and labour." },
  { title: "Livelihoods", text: "Better incomes, food security and rural enterprise." },
  { title: "Environment", text: "Healthier soils, restored land and climate resilience." },
]

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: "What is Conservation Agriculture?",
    a: "Conservation Agriculture (CA) is a farming system built on three linked principles defined by FAO: minimum mechanical soil disturbance, permanent soil organic cover, and species diversification. Applied together, they improve soil health, conserve water and reduce production costs.",
  },
  {
    q: "Is Conservation Agriculture only for large, mechanised farms?",
    a: "No. CA can be practised with hand jab planters, animal-drawn rippers and direct seeders, or tractor-mounted equipment — depending on farm size and resources. Our work focuses strongly on smallholder farmers.",
  },
  {
    q: "What is a mechanization hire service?",
    a: "A business — often run by a farmer or young entrepreneur — that owns equipment and sells operations such as ripping, planting, spraying or threshing to neighbouring farmers for a fee. It makes mechanization affordable without every farmer buying a machine.",
  },
  {
    q: "Who do you work with?",
    a: "We work with governments, development partners and donor-funded programmes, NGOs, research institutions, agribusinesses and farmer organisations across Africa.",
  },
  {
    q: "How does an engagement start?",
    a: "Send us your terms of reference or a short brief. We'll arrange a scoping discussion, then prepare a technical and financial proposal tailored to your objectives.",
  },
]
