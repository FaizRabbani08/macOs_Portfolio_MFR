// Transitional compatibility module. New code should import from focused modules.
export * from "./apps";
export * from "./projects";
export * from "./skills";
export * from "./socials";
export * from "./gallery";

export const RESUME_DATA = {
  profile: {
    name: "Mohammad Faiz Rabbani",
    role: "Full Stack & Cloud Engineer | 4+ Years Experience",
    summary: "I am an experienced Full Stack Developer with over 4 years of hands-on expertise in building scalable, high-performance web applications and distributed systems. Holding a B.Tech in Computer Science & Engineering from IIIT Agartala, I bridge the gap between complex backend architectures, modern frontend interfaces, and cloud infrastructure.",
    specialties: [
      { title: "Backend Architectures & Microservices", description: "Specialized in Java, Spring Boot, Spring WebFlux, and building high-throughput REST APIs handling tens of millions of daily requests with sub-second latency." },
      { title: "Modern Frontend Systems", description: "Experienced in building responsive, user-friendly client interfaces with React." },
      { title: "Cloud & DevOps Engineering", description: "Proficient in containerized deployments using Docker and Kubernetes (AWS EKS), alongside event-driven streaming with Apache Kafka and caching solutions using Redis." },
      { title: "Data & Machine Learning", description: "Strong foundation in PostgreSQL, MySQL, MongoDB, and machine learning pipelines using Python, Scikit-Learn, and XGBoost." },
    ],
    careerHighlights: [
      "PropertyHub: Built a scalable real estate platform supporting 10,000+ concurrent users with 99.9% uptime and improved search latency by 40% using Elasticsearch.",
      "RateGain Travel Technologies: Developed backend services for high-throughput travel systems processing 30M+ daily requests using non-blocking microservices architectures.",
      "Daisyon Technologies: Engineered full-stack web applications and optimized database and API queries to cut average response times by 30%.",
    ],
    beyondCoding: [
      "Leadership: Served as President of the Ek Bharat Shreshtha Bharat Club and as Training & Placement Coordinator at NIT/IIIT Agartala.",
      "Academic Excellence: Selected for Rahmani Super 30 (top 30 out of 100,000 applicants) and ranked in the top 2.33% nationwide in JEE Main.",
    ],
  },
  experience: [
    {
      company: "DAISYON TECHNOLOGIES",
      role: "Software Engineer",
      period: "August 2025 - June 2026",
      location: "Patna",
      points: [
        "Developed full-stack applications using Java, Spring Boot, React, and PostgreSQL.",
        "Reduced average response time by approximately 30% through API optimization.",
        "Configured production servers and optimized deployment pipelines.",
      ],
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    },
    {
      company: "PROPERTYHUB",
      role: "Full Stack Developer",
      period: "December 2023 - June 2025",
      points: [
        "Achieved 99.9% uptime for a real estate platform supporting 10k+ concurrent users.",
        "Integrated Elasticsearch, reducing query response time by 40%.",
        "Implemented RabbitMQ for notifications and Redis for caching.",
      ],
      tech: ["Spring Boot", "React", "PostgreSQL", "Elasticsearch", "RabbitMQ", "Kubernetes"],
    },
    {
      company: "RATEGAIN TRAVEL TECHNOLOGIES",
      role: "Software Development Engineer",
      period: "July 2022 - November 2023",
      points: [
        "Handled 30M+ daily requests using Spring WebFlux with asynchronous processing.",
        "Built Change Data Capture workflows using Kafka for real-time sync.",
        "Deployed microservices on AWS EKS with Kubernetes.",
      ],
      tech: ["Spring WebFlux", "Kafka", "AWS EKS", "Redis", "Bucket4j"],
    },
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology, Agartala (IIIT Agartala)",
      qualification: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      location: "Agartala, India",
      overview: "Specialized in Software Engineering, Distributed Systems, Microservices Architecture, and Applied Machine Learning. Developed core competencies in Data Structures & Algorithms (DSA), System Design (HLD/LLD), and Cloud-Native Application Development.",
      strengths: [
        "Computer Science Foundations: Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, and System Architecture.",
        "Advanced Electives & Practical Focus: Artificial Intelligence, Machine Learning, Feature Engineering, and Cybersecurity (Static Malware Analysis).",
      ],
      capstone: {
        title: "Machine Learning-Based Malware Detection System",
        period: "January 2022 - May 2022",
        tech: ["Python", "Flask", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Joblib", "PEfile"],
        description: "Designed and implemented an end-to-end malware detection platform that classifies Windows PE binaries using static analysis techniques.",
        highlights: [
          "Processed over 138,000 executable samples and engineered 54 PE-header and entropy-based features.",
          "Applied feature selection to narrow down the top 14 discriminative features, improving computational efficiency without sacrificing accuracy.",
          "Developed a real-time Flask inference REST API connected to serialized Random Forest, XGBoost, and AdaBoost models.",
        ],
      },
      achievements: [
        "Training & Placement Coordinator (NIT Agartala / IIIT Agartala): Coordinated placement drives, recruiter interactions, and onboarding sessions.",
        "President - Ek Bharat Shreshtha Bharat Club (EBSB): Led operations and organized student engagement events across departments.",
        "JEE Main Top Achiever: Ranked in the top 2.33% out of 1.13 million candidates nationwide.",
        "Rahmani Super 30 Scholar: Selected in the top 30 out of 100,000+ applicants through a competitive four-stage selection process.",
      ],
    },
  ],
  certifications: [
    {
      title: "Cloud-native application development",
      issuer: "Professional development",
      period: "Current focus",
    },
  ],
};

export const FINDER_NAVIGATION = [
  { id: "about", label: "About Me", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "education", label: "Education", icon: "graduation" },
  { id: "certifications", label: "Certifications", icon: "award" },
];

export const FINDER_GROUP_LABEL = "Favorites";

export const TERMINAL_DATA = {
  prompt: "faiz@macbook ~ %",
  welcome: [
    "Welcome to Mohammad-OS Terminal v1.0.0",
    'Type "help" to see available commands.',
  ],
  commands: {
    help: "Available: about, skills, experience, education, clear, neofetch, contact",
    about: "Mohammad Faiz Rabbani: Full Stack & Cloud Engineer with 4+ years of experience in Java, Spring Boot, React, and cloud-native systems.",
    skills: "Java, Spring Boot, React, PostgreSQL, Docker, Kubernetes, AWS, Kafka...",
    experience: "4+ years building scalable full-stack and cloud-native systems.",
    education: "B.Tech in Computer Science & Engineering from IIIT Agartala. Open Finder > Education for the full academic profile.",
    contact: "Open the Contact app to connect with Mohammad Faiz Rabbani.",
    neofetch: "OS: Faiz-macOS-v1\nRole: Full Stack Developer\nExp: 4+ Years\nLoc: Saudi Arabia",
  },
};

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "vscode.webp",
    canOpen: true,
  },
  {
    id: "settings",
    name: "Settings",
    iconPath: "/icons/mode.svg",
    canOpen: true,
  },
  {
    id: "faizai",
    name: "FaizAI",
    iconPath: "/images/faizai.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "July 2022 - November 2023",
    title: "Building High-Throughput Travel Systems at RateGain",
    summary: "Developed non-blocking Spring WebFlux services handling 30M+ daily requests, with Kafka-driven data synchronization and AWS EKS deployments.",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    date: "December 2023 - June 2025",
    title: "Scaling PropertyHub for 10,000+ Concurrent Users",
    summary: "Helped deliver a 99.9% uptime real-estate platform, improving search response time by 40% with Elasticsearch and adding Redis and RabbitMQ.",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    date: "August 2025 - June 2026",
    title: "Full-Stack Performance Engineering at Daisyon Technologies",
    summary: "Built Java, Spring Boot, React, and PostgreSQL applications while reducing average API response time by approximately 30%.",
    image: "/images/blog3.png",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/FaizRabbani08",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/iammdfaizrabbani/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/FazRabbani",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/mohammadfaizrabbani0786/",
  },
];

export const CONTACT_NUMBERS = [
  {
    label: "Saudi Arabia",
    display: "+966 535259714",
    tel: "+966535259714",
    whatsapp: "https://wa.me/966535259714",
  },
  {
    label: "India",
    display: "+91 9504586885",
    tel: "+919504586885",
    whatsapp: "https://wa.me/919504586885",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gall1.jpeg",
  },
  {
    id: 2,
    img: "/images/gall2.jpeg",
  },
  {
    id: 3,
    img: "/images/gall3.mp4",
  },
  {
    id: 4,
    img: "/images/gall4.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "faiz.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/faiz.jpg",
    },
    {
      id: 2,
      name: "faiz-2.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/faiz-2.jpeg",
    },
    {
      id: 3,
      name: "faiz-3.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/faiz-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/faiz.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
