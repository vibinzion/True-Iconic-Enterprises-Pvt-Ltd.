import { StaffCategory } from '../types';

export const STAFFING_CATEGORIES: StaffCategory[] = [
  {
    id: 'corporate',
    name: 'Corporate & Office Support',
    iconName: 'Briefcase',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Polished administrative and front-desk personnel for modern corporate headquarters and businesses.',
    roles: [
      {
        title: 'Administrative Staff',
        description: 'Organized office management, documentation, coordination, and executive assistance.',
        tags: ['Admin', 'Coordination', 'Corporate Desk']
      },
      {
        title: 'Clerks & Data Operators',
        description: 'Detail-oriented filing, data entry, record reconciliation, and digital logging.',
        tags: ['Record Keeping', 'Fast Typing', 'Documentation']
      },
      {
        title: 'Receptionists',
        description: 'Welcoming front-office ambassadors with exceptional telephone and guest etiquette.',
        tags: ['Client Greeting', 'PBX Handling', 'Front Desk']
      },
      {
        title: 'Customer Service Representatives',
        description: 'Trained reps to address client queries, phone calls, and omnichannel support.',
        tags: ['Client Care', 'Communication', 'Resolutions']
      }
    ]
  },
  {
    id: 'janitorial',
    name: 'Janitorial & Hygiene Staff',
    iconName: 'Sparkles',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Trained housekeeping and sanitation crews dedicated to continuous cleanliness and disinfection.',
    roles: [
      {
        title: 'Office & Commercial Sweepers',
        description: 'Regular and deep floor sweeping, waste segregation, and workspace maintenance.',
        tags: ['Floor Care', 'Disinfection', 'Commercial Grade']
      },
      {
        title: 'Professional Cleaners',
        description: 'Glass cleaning, restroom sanitization, surface polishing, and spotless upkeep.',
        tags: ['Sanitization', 'Eco Cleaners', 'Hygienic Care']
      },
      {
        title: 'Housekeeping Attendants',
        description: 'Dedicated room stewards, pantry assistants, and high-frequency hospitality cleaners.',
        tags: ['Hospitality Standard', 'Attendants', 'Spotless']
      },
      {
        title: 'Domestic Sweepers & Cleaners',
        description: 'Reliable, verified cleaning personnel for residential communities and private estates.',
        tags: ['Residential', 'Thorough', 'Vetted']
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical & Skilled Workers',
    iconName: 'Wrench',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Certified tradesmen and technicians for safe, uninterrupted utilities and building operation.',
    roles: [
      {
        title: 'Certified Electricians',
        description: 'Distribution boards, circuit troubleshooting, rewiring, and appliance installations.',
        tags: ['Licensed', 'Circuit Safety', 'Industrial & Home']
      },
      {
        title: 'Expert Plumbers',
        description: 'Water pipelines, drainage maintenance, fixture installations, and leak repair.',
        tags: ['Sanitary Fitting', 'Leak Diagnosis', 'Water Lines']
      },
      {
        title: 'HVAC Technicians',
        description: 'Air conditioner servicing, chilling unit inspection, duct maintenance, and repair.',
        tags: ['Cooling Systems', 'Seasonal Service', 'Gas Recharging']
      },
      {
        title: 'Maintenance Technicians',
        description: 'All-around mechanical and physical maintenance for machinery and buildings.',
        tags: ['Preventative', 'Rapid Response', 'Equipment Upkeep']
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'Retail, Events & Hospitality',
    iconName: 'Utensils',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Dynamic floor personnel, culinary professionals, and high-energy event deployment teams.',
    roles: [
      {
        title: 'Retail Sales Staff',
        description: 'Customer-facing store personnel, shelf merchandisers, and cashier assistants.',
        tags: ['Store Floor', 'Inventory Display', 'POS Friendly']
      },
      {
        title: 'Event Management Teams',
        description: 'Event coordination, guest ushering, stage setup, and logistical operations.',
        tags: ['Conferences', 'Exhibitions', 'Live Ushering']
      },
      {
        title: 'Expert Cooks & Chefs',
        description: 'Hygienic corporate cafeteria cooks, event caterers, and private culinary staff.',
        tags: ['Culinary Arts', 'Hygienic Kitchen', 'Meal Prep']
      },
      {
        title: 'Pantry & Food Runners',
        description: 'Courteous refreshment servers for meetings, executive lounges, and banquets.',
        tags: ['Pantry Service', 'Beverage Service', 'Polite Etiquette']
      }
    ]
  },
  {
    id: 'general',
    name: 'General & Domestic Support',
    iconName: 'Home',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Trustworthy everyday personnel ensuring seamless operations for enterprises and homes.',
    roles: [
      {
        title: 'Professional Drivers',
        description: 'Licensed, courteous drivers for executive cars, delivery vans, and fleet transport.',
        tags: ['Licensed', 'Safe Driving', 'Route Mastery']
      },
      {
        title: 'Landscape Gardeners',
        description: 'Lawn grooming, plant cultivation, landscaping aesthetics, and seasonal pruning.',
        tags: ['Horticulture', 'Lawn Care', 'Green Beautification']
      },
      {
        title: 'Office Peons & Runners',
        description: 'Inter-office document dispatch, refreshment serving, and daily errand execution.',
        tags: ['Reliable', 'Prompt Dispatch', 'Daily Tasks']
      },
      {
        title: 'Domestic Workers',
        description: 'Vetted, respectful helpers for full-time or part-time home assistance.',
        tags: ['Background Checked', 'Honest', 'Domestic Comfort']
      }
    ]
  },
  {
    id: 'specialized',
    name: 'Specialized Professionals (Education & Healthcare)',
    iconName: 'GraduationCap',
    icon3dUrl: '',
    avatarEmoji: '',
    description: 'Credentialed educators, laboratory personnel, and compassionate medical care assistants.',
    roles: [
      {
        title: 'Qualified Teachers',
        description: 'Subject-matter instructors, primary school tutors, and substitute faculty.',
        tags: ['Curriculum Ready', 'Qualified', 'Inspiring Mentors']
      },
      {
        title: 'Laboratory Attendants',
        description: 'Equipment calibration, specimen handling assistance, and lab sanitization.',
        tags: ['Lab Safety', 'Protocol Adherence', 'Equipment Prep']
      },
      {
        title: 'Trained Nurses',
        description: 'Certified nursing staff for clinics, institutional health rooms, and eldercare.',
        tags: ['Patient Care', 'First Aid', 'Vitals Monitoring']
      },
      {
        title: 'Compassionate Caregivers',
        description: 'Attentive, gentle care assistants for elderly support and home health assistance.',
        tags: ['Dedicated', 'Assisted Living', 'Empathy First']
      }
    ]
  }
];
