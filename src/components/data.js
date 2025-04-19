import { Database, Globe, RefreshCw, Cpu } from "lucide-react";

const experiences = [
    {
      "company": "Software Developer, Goldman Sachs",
      "link": "https://www.goldmansachs.com",
      "location": "Dallas, TX, USA",
      "period": "June 2024 - Present",
      "description": ["Creating efficient finance reporting solutions, leveraging modern technologies."],
      "skills": ["Java", "Springboot", "React.js", "Hazlecast"],
    },
    {
      "company": "Web Developer, ArtSciLab",
      "link": "https://artscilab.utdallas.edu/",
      "location": "Dallas, TX, USA",
      "period": "Apr 2023 - May 2024",
      "description": [
        "Managed and enhanced web projects using WordPress CMS, Next.js frontend, and DigitalOcean infrastructure, achieving a 30% increase in user engagement backed by Google Analytics insights.",
        "Contributed as a NLP lead to the project ASLIOSA, an AI initiative blending arts and humanities, exploring  ethical AI interactions and creativity in human-AI collaboration.",
        "Worked on developing NLP and programming solutions to enable voice-command interactions for retrieving custom lab-related information and dynamically updating its knowledge base.",
      ],
      "skills": [
        "Next.js",
        "Python",
        "RAG",
        "Chatbot",
        "NLP",
        "Digital Ocean",
        "Wordpress",
      ],
    },
    {
      "company": "Business Technology Solutions Associate Intern, ZS",
      "link": "https://www.zs.com/",
      "location": "Pune, India",
      "period": "Jan 2022 - July 2022",
      "description": [
        "Worked on data integration and Knowledge Graphs for creating Search Application using Neptune DB and SPARQL Queries.",
        "Performed customized ranking of Documents by utilizing NLP extracted keywords along with their frequencies.",
        "Developed end-to-end REST APIs in Flask for creating personalized Search engine-based software product.",
      ],
      "skills": [
        "Python",
        "Knowledge Graph",
        "Graph Databases",
        "SPARQL",
        "Amazon Neptune",
        "Kibana",
        "REST API",
      ],
    },
    {
      "company": "Software Engineer Intern, FinIQ Consulting",
      "link": "https://www.finiq.com/",
      "location": "Pune, India",
      "period": "Jun 2021 - Feb 2021",
      "description": [
        "Designed Single Sign-On (SSO) System with streamlined user experience using ASP.NET web framework.",
        "Developed full-stack website UI using Angular JS framework for a seamless experience to enterprise customers.",
      ],
      "skills": ["Angular.js", "ASP.NET", "Web Develpoment"],
    },
    {
      "company": "Web Developer Intern, Study4U Software Services",
      "link": "http://localhost:3000/",
      "location": "Delhi, India",
      "period": "Nov 2020 - Jan 2021",
      "description": [
        "Developed a Full stack Quiz Platform using MERN (MongoDB, Express, React, Node) with both Admin and User Interface.",
        "Admins can add, monitor and update the questions as well as users. Users can create account, solve available quizzes and see level-wise progress.",
        "Timer functionality was also implemented in addition to the quiz generation by selection random questions form the created pool.",
      ],
      "skills": ["React.js", "Node.js", "MongoDB", "Full Stack Development"],
    },
  ];
const educations = [
  {
    degree: "Master of Science in Computer Science",
    college: "University of Texas at Dallas",
    grades: "3.758/4.0",
    duration: "Aug 2022 - May 2024",
    courses: [
      "Database Design",
      "Design and Analysis of Algorithms",
      "Object Oriented Analysis and Design",
      "Machine Learning",
      "Artificial Intelligence",
      "Statistical Methods for Data Science",
      "Big Data Management and Analytics",
      "Natural Language Processing",
      "Web Programming Languages",
      "Human Computer Interactions",
      "Information Retrieval",
    ]
  },
  {
    degree: "Bachelor of Technology, Computer Science",
    college: "Indian Institute of Information Tehcnology, Pune",
    grades: "9.38/10.0",
    duration: "Aug 2018 - June 2022",
    courses: [
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Data Structures and Algorithms",
      "Operation Research",
      "Cloud Computing",
      "Compiler Design",
      "Business Operation and Analytics",
      "Data Mining and Warehousing",
      "High-Performance Computing",
      "Computer Organization and Architecture",
    ],
  }
]

const skills = {
  "Programming Languages": {
    icon: <Globe className="w-6 h-6" />,
    skills: ["Python", "Javascript", "TypeScript", "Java", "HTML", "CSS", "C", "SPARQL"],
    connections: [
      [50, 50],
      [70, 30],
      [30, 70],
      [60, 80],
      [40, 20],
    ],
  },
  "Web Frameworks": {
    icon: <Database className="w-6 h-6" />,
    skills: ["React", "Next.js", "Springboot", "Node", "Express", "Django", "Flask"],
    connections: [
      [40, 60],
      [60, 40],
      [50, 70],
      [30, 50],
    ],
  },
  "Databases": {
    icon: <RefreshCw className="w-6 h-6" />,
    skills: ["MongoDB", "Ontotext GraphDB", "Snowflake", "Amazon Neptune", "SQL", "Neo4j"],
    connections: [
      [45, 55],
      [65, 35],
      [35, 65],
      [55, 45],
    ],
  },
  "DevOps and Other": {
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Git", "CI/CD", "Shell Scripting", "Hazlecast", "GraphQL", "REST APIs"],
    connections: [
      [55, 45],
      [35, 65],
      [65, 35],
      [45, 55],
    ],
  },
  "Key Domains": {
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Backend Development", "Knowledge Graphs", "Frontend Development", "Machine Learning"],
    connections: [
      [55, 45],
      [35, 65],
      [65, 35],
      [45, 55],
    ],
  },
}

const projects = [
  {
    title: "Custom Search Engine Development",
    description:
      "Built a custom search engine optimized for scientific content using HITS, PageRank, and Vector Space Model; enhanced search accuracy through clustering techniques and query expansion.",
    technologies: ["Information Retrieval", "Apache Nutch & Solr"]
  },
  {
    title: "Accessibility for Visually Impaired Individuals",
    description:
      "Conducted a research on system integrating facial detection and emotion analysis to improve accessibility for visually impaired individuals in conversational scenarios.",
    technologies: ["Human Computer Interaction", "Data Analysis"]
  },
  {
    title: "E-Grocery Web Application",
    description:
      "Created an online grocery store application that features dynamic product categorization, real-time inventory tracking, and a responsive design built with JavaScript and jQuery.",
    technologies: ["JavaScript", "jQuery", "PHP", "HTML", "CSS"]
  },
  {
    title: "Multi-Class Image Classification using SPARK",
    description:
      "Developed a multi-class image classification system using neural networks and Apache Spark for parallelized training, achieving 84% accuracy on Fashion MNIST with a single hidden layer. Leveraged Apache SPARK's capabilities for efficient hyperparameter optimization and distributed processing.",
    technologies: ["Big Data", "Apach Spark", "Machine Learning"]
  },
  {
    title: "Hepatitis Stage Prediction",
    description:
      "Conducted a comparative analysis of classifiers (Logistic Regression, Decision Trees, KNN, SVM with bagging) to achieve an F1-score of 0.93 and analyzed model performance under varying data conditions using correlation analysis and comprehensive ML metrics.",
    technologies: ["Machine Learning", "Data Analysis", "Python"]
  },
  {
    title: "Domain-Specific Question-Answering System",
    description:
      "Developed a question-answering system using knowledge representation and logical inference with Prover9, enabling domain-specific answers through structured question-answering approach for AI applications.",
    technologies: ["Artificial Intelligence", "Logical Inference"]
  },
  {
    title: "NFT Transaction System",
    description:
      "Developed a full-stack web application with flask backend & SQL database to manage NFT trading data. Optimized database performance through query optimization and indexing techniques, ensuring efficient handling of NFT transactions and related data.",
    technologies: ["Database Management", "Full Stack Development"]
  },
  {
    title: "Automatic Web-based Proctoring System",
    description:
      "Developed an automated proctoring system capable of monitoring and managing web-based remote exams. Integrated advanced features including eye gaze tracking, face detection and recognition, and head movement detection to ensure academic integrity.",
    technologies: ["Computer Vision", "Machine Learning", "Python"]
  },
  {
    title: "Amazon Product Review Analysis",
    description:
      "Extracted user ratings and comments for Amazon products via web scraping. Conducted Sentiment Analysis using NLP techniques with Python to analyze product reviews. Utilized skills in Data Science, Computer Science, Python programming, Data Analysis, and Communication.",
    technologies: ["NLP", "Data Analysis", "Python"]
  },
];

export {experiences, educations, skills, projects};