export const features = [
  {
    id: "0",
    caption: "PREMIER MARTIAL ARTS",
    title: "LEWISBURG BJJ & STRIKING",
    text: "Home of Lewisburg’s premier Brazilian Jiu-Jitsu! Whether you are looking for top-notch BJJ training, dynamic boxing and striking classes, practical self-defense, or a fun way to get in shape, Lewisburg Brazilian Jiu-Jitsu is the place for you!",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80", // AI/Stock image of modern training mat action
    button: {
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    caption: "OUR ACADEMY VALUES",
    title: "A FAMILY ENVIRONMENT FOR ALL",
    text: "Here at Lewisburg Brazilian Jiu-Jitsu, you’ll find a family environment with an emphasis on the traditional values of the martial arts: honor, respect, and the mutual welfare of all. From mastering the ground game to sharpening your stand-up skills, we offer well-rounded training for all levels",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80", // AI/Stock image of high-end gym mats and facility
    button: {
      title: "Read the docs",
    },
  },
];

// ... rest of your details, faq, plans arrays remain exactly the same

export const details = [
  {
    id: "0",
    title: "PRO EQUIPMENT & SANITIZED MATS",
  },
  {
    id: "1",
    title: "EXPERT BLACK BELT INSTRUCTION",
  },
  {
    id: "2",
    title: "FLEXIBLE RECURRING PLANS",
  },
  {
    id: "3",
    title: "REAL WORLD SELF-DEFENSE",
  },
];

export const faq = [
  {
    id: "0",
    question: "Do I need to be in shape to start training",
    answer:
      "Absolutely not. Training Jiu-Jitsu is what gets you into shape. Our classes allow you to pace yourself, and our community is entirely supportive. You’ll build functional strength, flexibility, and cardiovascular endurance naturally as you learn",
  },
  {
    id: "1",
    question: "I have zero martial arts experience. Will I fit in?",
    answer:
      "Yes! The vast majority of our members started exactly where you are today. Our fundamental classes are specifically structured to introduce beginners to the basics of Jiu-Jitsu in a safe, ego-free, and welcoming environment",
  },
  {
    id: "2",
    question: "What is the community culture like? Do I have to want to compete to fit in?",
    answer:
      "Not at all. While we have world-class competitors on our mats, the vast majority of our members are everyday professionals, students, and parents. Our community culture is built entirely around mutual growth, safety, and support. There is no room for ego here; senior students actively help beginners, and everyone works together to help each other improve",
  },
  {
    id: "3",
    question: "Is Brazilian Jiu-Jitsu safe? Will I get injured?",
    answer:
      "Student safety is our absolute highest priority. Unlike striking arts, Jiu-Jitsu relies on controlled grappling and submission holds. We emphasize mutual respect, controlled drilling, and tapping out early. You are always in complete control of your training intensity",
  },
  {
    id: "4",
    question: "Do you offer a free trial plan, or do I have to pay for my first class?",
    answer:
"Your very first class at Lewisburg BJJ is completely free. We want you to step on the mats, meet our coaches, experience our community, and make sure it’s a perfect fit for you before spending a single dollar."
 },
  {
    id: "5",
    question: "Where is the gym located",
    answer:
"We are located in our brand-new, completely renovated facility at 1722 W Market St, Lewisburg, PA 17837. Our facility features premium, sanitized mats, changing areas, and a spacious layout dedicated to world-class training"  },
  {
    id: "6",
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "7",
    question: "How do your memberships work?",
    answer:
"We offer flexible membership plans handled securely through our integrated digital student portal (Gymdesk). We believe in transparent billing with no hidden fees, giving you full access to manage your schedule, attendance, and account details seamlesssly"  },
  {
    id: "8",
    question: "Do you offer training for individuals and teams?",
    answer:
"Whether you are an individual looking to kickstart your personal fitness journey, learn real-world self-defense, or compete at the highest levels, our classes are structured to help you crush your personal goals at your own pace."  },
  {
    id: "9",
    question: "I’m a bit older or have old sports injuries. Can I still train?",
    answer:
"Frequently! Jiu-Jitsu is often called the gentle art because it emphasizes leverage over raw athleticism. Many of our members start in their 30s, 40s, or 50s. Just let our coaches know about any pre-existing conditions or limitations before class so we can help you modify techniques safely."  },
];

// constants/plans.js

export const plans = [
  // ==========================================
  // 1. ADULT BJJ & GRAPPLING
  // ==========================================
  {
    id: "adult-base",
    category: "adult",
    title: "Adult Base Rate",
    priceMonthly: 140,
    priceYearly: 110,
    caption: "BJJ + Fitness + Recovery Access",
    badge: "A",
    gymdeskSlug: "adult-base-rate", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Unlimited Jiu-Jitsu & Grappling",
      "Functional Fitness / Conditioning",
      "Sauna & Cold Plunge Recovery",
      "Alternate Commitments: 3M ($130) | 6M ($120)",
      "Dependents receive 50% Off base rate",
    ],
    footnote: "*Alternate durations available: 18-Month Commitment cuts rate down to $100/mo."
  },
  {
    id: "adult-all-in",
    category: "adult",
    title: "Adult All-In Access",
    priceMonthly: 175,
    priceYearly: 145,
    caption: "Complete Academy Access Pack",
    badge: "★",
    isHighlighted: true,
    gymdeskSlug: "adult-all-in-access", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Everything in Adult Base Tier",
      "Full Striking & Muay Thai Classes",
      "Premium Yoga & Mobility Sessions",
      "Priority Special Seminar Access",
      "2 Guest passes included monthly",
    ],
    footnote: ""
  },
  {
    id: "adult-18m",
    category: "adult",
    title: "Executive Term Track",
    priceMonthly: 100,
    priceYearly: 100,
    caption: "18-Month Maximum Value Track",
    badge: "E",
    gymdeskSlug: "executive-term-track", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Lowest available locked-in rate",
      "Unlimited Jiu-Jitsu & Grappling",
      "Functional Fitness & Locker Access",
      "Sauna & Cold Plunge Recovery",
      "No price increases over lock term",
    ],
    footnote: "*Requires fixed 18-month agreement layout structure."
  },

  // ==========================================
  // 2. KIDS PROGRAMS
  // ==========================================
  {
    id: "kids-base",
    category: "kids",
    title: "Youth Foundations",
    priceMonthly: 120,
    priceYearly: 90,
    caption: "Discipline, Fitness & Self-Defense",
    badge: "K",
    isHighlighted: true,
    gymdeskSlug: "youth-foundations", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Unlimited Youth BJJ Classes",
      "Coordination & Athletic Drilling",
      "Ego-Free Safe Team Environment",
      "Built-in $20 Family Savings",
      "50% Off for added siblings",
    ],
    footnote: ""
  },
  {
    id: "kids-sibling",
    category: "kids",
    title: "Sibling Add-On Rate",
    priceMonthly: 60,
    priceYearly: 45,
    caption: "Exactly 50% Base Tier Discount",
    badge: "S",
    gymdeskSlug: "sibling-add-on", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Matches primary youth plan access",
      "Unlimited Youth BJJ Classes",
      "Coordination & Athletic Drilling",
      "Valid for second child or more",
      "Maintains family billing file layout",
    ],
    footnote: ""
  },

  // ==========================================
  // 3. SPECIALTY PROGRAMS
  // ==========================================
  {
    id: "spec-yoga",
    category: "specialty",
    title: "Yoga Standalone",
    priceMonthly: 50,
    priceYearly: 50,
    caption: "Mobility & Breath Control Access",
    badge: "Y",
    gymdeskSlug: "yoga-standalone", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "All structured Yoga sessions",
      "Flexibility & Recovery focus",
      "Great for active recovery days",
      "No combat arts access included",
      "Can bundle later for discount",
    ],
    footnote: ""
  },
  {
    id: "spec-two-pack",
    category: "specialty",
    title: "Dual Standalone Pack",
    priceMonthly: 85,
    priceYearly: 85,
    caption: "Pick Any Two Standalone Tiers",
    badge: "D",
    isHighlighted: true,
    gymdeskSlug: "dual-standalone-pack", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Combine Yoga + Striking together",
      "Or pair with customized gym loops",
      "Saves $15/mo over individual tracks",
      "Perfect for cross-training setup",
      "Includes functional fitness space",
    ],
    footnote: ""
  },
  {
    id: "spec-striking",
    category: "specialty",
    title: "Striking Standalone",
    priceMonthly: 50,
    priceYearly: 50,
    caption: "Stand-Up & Boxing Mechanics",
    badge: "ST",
    gymdeskSlug: "striking-standalone", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "All Boxing/Striking curriculum",
      "Heavy bag & padwork drills",
      "High cardio conditioning focus",
      "No grappling or mat space access",
      "Month-to-month flexibility setup",
    ],
    footnote: ""
  },
  {
    id: "spec-three-pack",
    category: "specialty",
    title: "Triple Standalone Pack",
    priceMonthly: 120,
    priceYearly: 120,
    caption: "All Non-BJJ Specialty Services",
    badge: "T",
    gymdeskSlug: "triple-standalone-pack", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Full Access: Striking + Yoga + Fitness",
      "Complete functional gym floor access",
      "Saves $30/mo over base pricing",
      "Sauna & Recovery space included",
      "BJJ training is excluded",
    ],
    footnote: ""
  },

  // ==========================================
  // 4. PASSES & TRIAL PACKAGES
  // ==========================================
  {
    id: "pass-dropin",
    category: "passes",
    title: "Mat Drop-In Pass",
    priceMonthly: 20,
    priceYearly: 20,
    caption: "Single Session Access",
    badge: "1P",
    gymdeskSlug: "mat-drop-in-pass", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "Valid for any single scheduled class",
      "Perfect for traveling practitioners",
      "Open mat or guided class entry",
      "Requires signed safety waiver",
      "Rental gis available at front desk",
    ],
    footnote: ""
  },
  {
    id: "pass-trial",
    category: "passes",
    title: "2-Week All-Access Trial",
    priceMonthly: 59,
    priceYearly: 59,
    caption: "Test Drive the Entire Academy",
    badge: "TR",
    isHighlighted: true,
    gymdeskSlug: "two-week-trial", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "14 consecutive days of access",
      "Try BJJ, Striking, & Yoga tiers",
      "Free uniform rental included",
      "No signup fee if upgraded during trial",
      "Available for local residents only",
    ],
    footnote: ""
  },
  {
    id: "pass-punch-5",
    category: "passes",
    title: "5-Class Punch Card",
    priceMonthly: 90,
    priceYearly: 90,
    caption: "Flexible Casual Punch Pass",
    badge: "5P",
    gymdeskSlug: "5-class-punch-card", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "5 class credits loaded to profile",
      "Credits expire after 90 days",
      "Shareable with immediate family",
      "Valid for all academy programs",
      "No monthly recurring charges",
    ],
    footnote: ""
  },
  {
    id: "pass-punch-10",
    category: "passes",
    title: "10-Class Punch Card",
    priceMonthly: 170,
    priceYearly: 170,
    caption: "Bulk Session Savings Pack",
    badge: "10",
    gymdeskSlug: "10-class-punch-card", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "10 class credits loaded to profile",
      "Saves $30 over raw drop-in rates",
      "Credits expire after 180 days",
      "Valid for all academy programs",
      "Ideal for irregular work schedules",
    ],
    footnote: ""
  },
  {
    id: "pass-punch-20",
    category: "passes",
    title: "20-Class Punch Card",
    priceMonthly: 320,
    priceYearly: 320,
    caption: "Ultimate Schedule Flexibility",
    badge: "20",
    gymdeskSlug: "20-class-punch-card", // ← Swap with actual Gymdesk plan ID/slug tomorrow
    features: [
      "20 class credits loaded to profile",
      "Saves $80 over individual pass rates",
      "Credits expire 1 full year from buy",
      "Fully trackable on member mobile app",
      "No contracts or commitments",
    ],
    footnote: ""
  }
];


export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

export const Ios = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
        fill="#EAEDFF"
      />
      <path
        d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
        fill="#EAEDFF"
      />
      <path
        d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
        fill="#EAEDFF"
      />
      <path
        d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
        fill="#EAEDFF"
      />
      <path
        d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L20.3338 15.9996L25.0844 11.3955Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Windows = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.674 2.64859L29.4077 0.0307338C30.3171 -0.165605 31.1678 0.603406 31.1678 1.63418V12.7273C31.1678 13.6272 30.5078 14.3635 29.7011 14.3635H17.9674C17.1607 14.3635 16.5006 13.6272 16.5006 12.7273V4.25204C16.5006 3.46669 16.9846 2.79585 17.674 2.64859Z"
        fill="#EAEDFF"
      />
      <path
        d="M17.674 29.3507L29.4077 31.9686C30.3171 32.1649 31.1678 31.3959 31.1678 30.3651V19.272C31.1678 18.3721 30.5078 17.6358 29.7011 17.6358H17.9674C17.1607 17.6358 16.5006 18.3721 16.5006 19.272V27.7473C16.5006 28.5326 16.9846 29.2035 17.674 29.3507Z"
        fill="#EAEDFF"
      />
      <path
        d="M11.7925 3.82676L2.99217 5.90466C2.31748 6.06827 1.8335 6.73912 1.8335 7.50811V12.7275C1.8335 13.6273 2.49352 14.3636 3.30021 14.3636H12.1005C12.9072 14.3636 13.5672 13.6273 13.5672 12.7275V5.41383C13.5672 4.38305 12.7018 3.5977 11.7925 3.82676Z"
        fill="#EAEDFF"
      />
      <path
        d="M2.99217 26.0948L11.7925 28.1727C12.7018 28.4018 13.5672 27.6164 13.5672 26.5856V19.272C13.5672 18.3721 12.9072 17.6358 12.1005 17.6358H3.30021C2.49352 17.6358 1.8335 18.3721 1.8335 19.272V24.4913C1.8335 25.2603 2.31748 25.9312 2.99217 26.0948Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Web = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5484 0.847986C11.8284 2.95995 11.3164 5.15192 10.9164 7.34388C14.6285 6.92789 18.3727 6.92789 22.0848 7.34388C21.6848 5.15192 21.1728 2.97595 20.4528 0.847986C20.4307 0.759613 20.4238 0.686493 20.4164 0.607564C20.4131 0.572174 20.4097 0.535616 20.4048 0.495992C19.1567 0.191997 17.8447 0 16.5006 0C15.1405 0 13.8445 0.191997 12.5804 0.495992C12.5741 0.546895 12.5728 0.592737 12.5715 0.637543C12.5696 0.7054 12.5677 0.770896 12.5484 0.847986Z"
        fill="#EAEDFF"
      />
      <path
        d="M24.8211 7.67982C26.8852 8.03181 28.9172 8.52781 30.9333 9.1358C29.3493 5.82385 26.6771 3.15189 23.365 1.56792C23.989 3.56789 24.485 5.61585 24.8211 7.67982Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54034 30.2556C9.51633 30.2556 9.48833 30.2636 9.46033 30.2716C9.43233 30.2796 9.40433 30.2876 9.38033 30.2876C6.27619 28.7517 3.74809 26.2077 2.19602 23.1037C2.19602 23.0797 2.20402 23.0517 2.21202 23.0237C2.22002 22.9957 2.22802 22.9677 2.22802 22.9437C4.1801 23.5197 6.19619 23.9517 8.19628 24.2877C8.54829 26.3037 8.96431 28.3037 9.54034 30.2556Z"
        fill="#EAEDFF"
      />
      <path
        d="M30.8053 23.1197C29.2213 26.3037 26.5811 28.8797 23.365 30.4316C23.973 28.3997 24.485 26.3517 24.8211 24.2877C26.8372 23.9517 28.8212 23.5197 30.7733 22.9437C30.7637 22.9823 30.7772 23.0208 30.7896 23.0558C30.7977 23.079 30.8053 23.1006 30.8053 23.1197Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54041 1.74401C8.96438 3.69598 8.54836 5.67994 8.21235 7.69591C6.14826 8.01591 4.10017 8.5279 2.06808 9.13589C3.62015 5.91994 6.19626 3.27998 9.3804 1.69601C9.4044 1.69601 9.4324 1.70801 9.4604 1.72001C9.4884 1.73201 9.51641 1.74401 9.54041 1.74401Z"
        fill="#EAEDFF"
      />
      <path
        d="M7.84432 21.5836C5.63622 21.1836 3.46013 20.6716 1.34804 19.9516C1.27094 19.9324 1.20545 19.9305 1.13759 19.9286C1.09278 19.9273 1.04693 19.926 0.996021 19.9196C0.692008 18.6557 0.5 17.3597 0.5 15.9997C0.5 14.6557 0.692008 13.3437 0.996021 12.0958C1.03565 12.0908 1.07221 12.0874 1.1076 12.0841C1.18653 12.0767 1.25966 12.0699 1.34804 12.0478C3.47613 11.3438 5.63622 10.8158 7.84432 10.4158C7.4443 14.1277 7.4443 17.8717 7.84432 21.5836Z"
        fill="#EAEDFF"
      />
      <path
        d="M32.005 19.9196C32.309 18.6557 32.501 17.3597 32.501 15.9997C32.501 14.6557 32.309 13.3597 32.005 12.0958C31.877 12.0958 31.781 12.0798 31.653 12.0478C29.5409 11.3278 27.3488 10.8158 25.1567 10.4158C25.5727 14.1277 25.5727 17.8717 25.1567 21.5836C27.3488 21.1836 29.5249 20.6556 31.653 19.9516C31.7301 19.9324 31.7956 19.9305 31.8635 19.9286C31.9083 19.9273 31.9541 19.926 32.005 19.9196Z"
        fill="#EAEDFF"
      />
      <path
        d="M22.0848 24.6554C21.6848 26.8633 21.1728 29.0393 20.4528 31.1513C20.4307 31.2396 20.4238 31.3128 20.4164 31.3917C20.4131 31.4271 20.4097 31.4636 20.4048 31.5033C19.1567 31.8073 17.8447 31.9993 16.5006 31.9993C15.1405 31.9993 13.8445 31.8073 12.5804 31.5033C12.5741 31.4524 12.5728 31.4065 12.5715 31.3617C12.5696 31.2939 12.5677 31.2284 12.5484 31.1513C11.8444 29.0233 11.3164 26.8633 10.9164 24.6554C12.7724 24.8634 14.6285 25.0074 16.5006 25.0074C18.3727 25.0074 20.2448 24.8634 22.0848 24.6554Z"
        fill="#EAEDFF"
      />
      <path
        d="M10.4793 22.0209C14.4812 22.5258 18.5205 22.5258 22.5224 22.0209C23.0274 18.0192 23.0274 13.9802 22.5224 9.97847C18.5205 9.47358 14.4812 9.47358 10.4793 9.97847C9.97434 13.9802 9.97434 18.0192 10.4793 22.0209Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    icon: "/images/socials/instagram.svg", // Reuses your existing local file!
    url: "https://www.instagram.com/lewisburg_bjj/", 
  },
  {
    id: "1",
    title: "Facebook",
    icon: "/images/socials/facebook.svg", // Links to your new file
    url: "https://www.facebook.com/p/Lewisburg-Brazilian-Jiu-Jitsu-61556906276291/", 
  },
  {
    id: "2",
    title: "Gmail",
    icon: "/images/socials/gmail.svg", // Links to your new file
    url: "mailto:ben@one-healthwellness.com", // Linked directly to the contact email from your policy!
  },
];