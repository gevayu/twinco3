export type UseCase = {
  slug: string;
  useCase: string;
  title1: string;
  title2: string;
  idealFor: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
};

/** The 10 "Get Inspired" use-case card variants (Figma nodes 123:924–123:1419), sidebar order. */
export const useCases: UseCase[] = [
  {
    slug: "customer-service",
    useCase: "Customer Service",
    title1: "Customer",
    title2: "Service",
    idealFor: "Customer service centers and enterprise support departments.",
    challenge:
      "Support representatives waste valuable time repeating identical workflows, such as opening tickets, searching the CRM, and retrieving basic information, dozens of times each day.",
    solution:
      'Operating as a "shadow agent," a digital twin learns your exact service protocols and autonomously resolves up to 80% of routine inquiries using your brand\'s unique voice and processes.',
    impact:
      "Frees up 80% of your representatives' time, allowing them to focus on complex, high-value customer interactions that require human empathy and judgment.",
    image: "/images/inspiration/usecases/customer-service.png",
  },
  {
    slug: "data-entry",
    useCase: "Data Entry & Processing",
    title1: "Data Entry &",
    title2: "Processing",
    idealFor:
      "Finance departments, bookkeeping, and organizations processing high volumes of invoices.",
    challenge:
      "Employees receive invoices via email, manually open them, and type the data into the ERP system: a slow, repetitive, and highly error-prone process.",
    solution:
      "The system learns the workflow, automatically identifies the relevant fields across various documents, and seamlessly inputs the data directly into your target systems.",
    impact:
      "Delivers a 10x increase in processing speed with zero human error. Highly trained employees stop acting as typists and transition to managers who focus solely on reviewing anomalies and approving actions.",
    image: "/images/inspiration/usecases/data-entry.png",
  },
  {
    slug: "quality-assurance",
    useCase: "Quality Assurance (QA)",
    title1: "Quality",
    title2: "Assurance (QA)",
    idealFor: "Software development teams and technology companies.",
    challenge:
      "QA testers manually run fixed sequences of actions (clicks, form fills) to verify system stability, limiting testing capacity to standard working hours and human speed.",
    solution:
      'We build a "live script" that accurately mirrors human testing behavior, autonomously executing complex system checks and stress tests 24/7.',
    impact:
      "Achieves full, round-the-clock test coverage, catching bugs before they reach the end user. Human testers are freed to focus on complex, exploratory QA testing.",
    image: "/images/inspiration/usecases/quality-assurance.png",
  },
  {
    slug: "procurement",
    useCase: "Procurement Management",
    title1: "Procurement",
    title2: "Management",
    idealFor: "Procurement departments in medium to large organizations.",
    challenge:
      "Buyers spend days manually comparing prices across multiple supplier websites and consolidating offers into spreadsheets for managerial approval.",
    solution:
      "The system autonomously navigates target sites, extracts real-time pricing, and instantly generates a finalized comparison table ready for approval.",
    impact:
      "Condenses the procurement cycle from days to minutes, delivering significant cost savings while enabling managers to approve optimized deals with a single click.",
    image: "/images/inspiration/usecases/procurement.png",
  },
  {
    slug: "financial-reporting",
    useCase: "Financial Reporting & Analysis",
    title1: "Financial Reporting",
    title2: "& Analysis",
    idealFor:
      "Finance departments, analysts, and executives who rely on periodic reporting.",
    challenge:
      "Analysts spend dozens of hours each month manually collecting, cross-referencing, and compiling data from disparate systems such as BI, SAP, and Salesforce to build monthly reports.",
    solution:
      "The system replicates the human methodology for data collection and cross-referencing, autonomously generating complex reports just as your team does.",
    impact:
      "Reports are ready on the first day of the month without anyone touching them. This frees up dozens of hours for analysis and eliminates manual cross-referencing errors entirely.",
    image: "/images/inspiration/usecases/financial-reporting.png",
  },
  {
    slug: "employee-wellbeing",
    useCase: "Employee Wellbeing & Burnout Prevention",
    title1: "Employee Wellbeing",
    title2: "& Burnout Prevention",
    idealFor:
      "HR leaders, team managers, and organizations invested in employee well-being and retention.",
    challenge:
      "Identifying employee burnout, such as continuous work without breaks or late-night intensive typing, is notoriously difficult before performance drops or the employee leaves the company.",
    solution:
      "The system builds a baseline model of a healthy workday, detects abnormal behavioral patterns, and proactively alerts management when an employee needs a break.",
    impact:
      "Managers receive smart alerts before burnout causes operational damage, helping maintain high productivity over time while significantly reducing employee turnover.",
    image: "/images/inspiration/usecases/employee-wellbeing.png",
  },
  {
    slug: "internal-it",
    useCase: "Internal IT & Helpdesk",
    title1: "Internal IT",
    title2: "& Helpdesk",
    idealFor: "IT departments and internal technical support teams.",
    challenge:
      "IT professionals waste valuable time repeatedly resolving common issues, such as password resets, printer setups, and basic software installations, while AI-based threats are emerging.",
    solution:
      "When an employee encounters a technical issue, the system provides immediate, direct remediation on their computer, simulating a remote takeover by an IT technician. With Twin-Co's help, IT experts can focus on new threats.",
    impact:
      "Delivers instant resolution for routine tech issues, freeing the IT team to focus on strategic infrastructure and complex problem-solving.",
    image: "/images/inspiration/usecases/internal-it.png",
  },
  {
    slug: "info-security",
    useCase: "Information Security & Compliance",
    title1: "Information Security",
    title2: "& Compliance",
    idealFor:
      "Chief Information Security Officers (CISOs) and organizations operating under strict regulatory frameworks.",
    challenge:
      "Security leaders drown in endless regulatory updates (ISO, NIST, DORA) and complex compliance logs, leaving little time to focus on defense strategy.",
    solution:
      "An intelligent system automatically ingests regulatory documents, conducts instant gap analysis against your current posture, and generates a simple, actionable weekly work plan.",
    impact:
      "Transforms compliance from a manual burden into a continuous, automated safeguard, ensuring full regulatory immunity while saving dozens of management hours each month.",
    image: "/images/inspiration/usecases/info-security.png",
  },
  {
    slug: "financial-reconciliation",
    useCase: "Financial Transaction Reconciliation",
    title1: "Financial Transaction",
    title2: "Reconciliation",
    idealFor:
      "Finance companies, digital wallets, and enterprises managing high volumes of daily transactions.",
    challenge:
      "Discrepancies cause money to fall through the cracks. Because human analysts only review data samples, structural loopholes remain open for financial losses and fraud.",
    solution:
      "A smart engine simultaneously ingests data from banks, payment gateways, and accounting systems, successfully matching transactions even across mismatched processing fees and currency fluctuations.",
    impact:
      "Automatically verifies 99.5% of valid transactions, flagging only the 0.5% that genuinely require human review. Saves 80% of processing time while achieving 100% transaction coverage with no lost revenue.",
    image: "/images/inspiration/usecases/financial-reconciliation.png",
  },
  {
    slug: "digital-retail",
    useCase: "Digital Retail & Beauty Industry",
    title1: "Digital Retail",
    title2: "& Beauty Industry",
    idealFor: "E-commerce platforms, retail chains, and cosmetics brands.",
    challenge:
      'Standard e-commerce websites feel "cold." Customers browse hundreds of products, become overwhelmed by choice, and leave without making a purchase due to a lack of personalized, professional guidance.',
    solution:
      'The customer uploads a selfie; the system analyzes specific physical traits (like skin condition and tone), combines the data with a preference questionnaire, and generates a highly personalized product "prescription".',
    impact:
      "Transforms a generic digital storefront into a trusted, personalized consultation. Dramatically increases conversion rates and boosts average order value by eliminating purchase hesitation.",
    image: "/images/inspiration/usecases/digital-retail.png",
  },
];
