
import { NewsItem, Publication, Project, Education, SkillCategory, Hobby } from './types';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Zhilin Fan",
  title: "M.Phil. Candidate in Educational Technology",
  university: "Beijing Normal University",
  location: "Beijing, China",
  email: "fanzhilin@mail.bnu.edu.cn",
  scholarUrl: "https://scholar.google.com/citations?user=rHRk76cAAAAJ&hl=en", // Add your Google Scholar Link
  
  // PLACE YOUR FILE IN 'public/cv.pdf'
  cvUrl: "/cv.pdf", 
  
  // PLACE YOUR FILE IN 'public/profile.jpg'
  photoUrl: "/profile.jpg", 
  
  bio: `I am currently a Master's student at the School of Educational Technology, Beijing Normal University, advised by Prof. Yu Lu* and Dr. Penghe Chen†. Before that, I received my B.S. in Computer Science from Nanjing University of Information Science and Technology (Rank 1/47).
  
  My research interests lie at the intersection of Artificial Intelligence and Education. Specifically, I focus on Dialogue Systems in Education, developing chatbots using rule-based policies or LLMs to scaffold complex learning tasks. I also specialize in Explainable AI (XAI) in Education, designing trustworthy AI interfaces that provide transparent explanations to enhance user trust.`,
  seeking: "I am actively seeking Ph.D. opportunities for Fall 2026 in Educational Technology, HCI, or Computer Science, focusing on Human-AI Interaction in learning contexts."
};

export const NEWS: NewsItem[] = [
  {
    date: "July 2025",
    content: "Attending and presenting a Full Paper at AIED '25 in Palermo, Italy! 🇮🇹",
    type: "conference"
  },
  {
    date: "2025",
    content: "Received the AIED 2025 Conference Scholarship.",
    type: "award"
  },
  {
    date: "2024-2025",
    content: "Awarded the Second Class Postgraduate Scholarship at BNU.",
    type: "award"
  },
  {
    date: "July 2024",
    content: "Presented 'PBChat' as a Full Paper at AIED '24 in Recife, Brazil. 🇧🇷",
    type: "conference"
  },
  {
    date: "Sept 2023",
    content: "Started M.Phil. journey at Beijing Normal University.",
    type: "general"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "KnowSTU: Diagnosing Students’ Problem Behavior Using Fine-Tuned LLM and RAG",
    authors: "Penghe Chen†, Zhilin Fan, Yu Lu*",
    venue: "IEEE Transactions on Learning Technologies (TLT)",
    year: "2025",
    links: [{ name: "Paper", url: "#" }],
    tags: ["SCI/SSCI", "JCR Q1", "IF 4.9"],
    // Please put 'pub1.png' in your public folder
    image: "/knowstu.png", 
    abstract: "This paper introduces KnowSTU, a system leveraging Retrieval-Augmented Generation (RAG) and fine-tuned Large Language Models to  diagnose student behavioral problems in educational settings."
  },
  {
    title: "Why Did the AI Suggest That? Designing an Explainable Educational Counseling System",
    authors: "Zhilin Fan, Penghe Chen†, Yu Lu*",
    venue: "International Conference on Artificial Intelligence in Education (AIED)",
    year: "2025",
    status: "Full Paper",
    links: [{ name: "Paper", url: "#" }],
    // Please put 'pub2.png' in your public folder
    image: "/pub2.png",
    abstract: "We present an explainable AI system designed for educational counseling. The study investigates how different explanation styles impact user trust and acceptance of AI-driven advice."
  },
  {
    title: "PBChat: Enhance student’s problem behavior diagnosis with large language model",
    authors: "Penghe Chen†, Zhilin Fan, Yu Lu*, Qi Xu",
    venue: "International Conference on Artificial Intelligence in Education (AIED)",
    year: "2024",
    status: "Full Paper",
    links: [{ name: "Paper", url: "#" }],
    // Please put 'pub3.png' in your public folder
    image: "/pub3.png",
    abstract: "PBChat utilizes Large Language Models to simulate student interactions, helping teachers practice and improve their diagnostic skills regarding student problem behaviors."
  },
  {
    title: "Exploring the Impact of Interdisciplinary Learning Communities on Learners’ Collaborative Problem-Solving Abilities",
    authors: "Wenyu Yan, Chunlin Fan, Zhilin Fan, Ning Ma*",
    venue: "ICIET",
    year: "2025",
    links: [{ name: "Paper", url: "#" }],
    image: "/pub4.png",
    abstract: "An empirical study exploring how structured interdisciplinary learning communities foster better collaborative problem-solving skills among learners in online environments."
  },
  {
    title: "Why should I trust this AI? The Effect of explainable AI on teachers using LLM-based educational question answering systems",
    authors: "Zhilin Fan, Deliang Wang, Penghe Chen†, Yu Lu*",
    venue: "British Journal of Educational Technology (BJET)",
    year: "In Prep",
    links: [],
    status: "Working Paper",
    image: "/pub5.png",
    abstract: "This working paper examines the psychological effects of XAI on teachers' trust levels when using LLM-based tools for grading and question answering."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Moral Teacher (NSFC)",
    role: "Participant",
    duration: "2023 – 2024",
    description: "Maintaining a task-oriented dialogue system based on knowledge graphs and case-based reasoning to diagnose students’ problem behavior. Engineered the architecture using Java SSM and managed containerized deployment.",
    techStack: ["Java SSM", "JavaScript", "Docker", "Neo4j"]
  },
  {
    title: "LLM-based Pedagogical Agent",
    role: "Participant",
    duration: "2023 – 2024",
    description: "Developed a conversational AI agent powered by GPT-3.5-turbo using Plugins to scaffold students in generating high-quality mathematical questions. Evaluated effectiveness on problem-posing fluency.",
    techStack: ["Python", "OpenAI API", "Flask", "Prompt Engineering"]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Beijing Normal University",
    degree: "M.Phil. in Educational Technology",
    duration: "Sept 2023 – June 2026 (Expected)",
    details: ["GPA: 3.7/4.0", "Supervisors: Prof. Yu Lu, Dr. Penghe Chen"]
  },
  {
    school: "Nanjing University of Information Science and Technology",
    degree: "B.S. in Computer Science and Technology",
    duration: "Sept 2019 – June 2023",
    details: ["GPA: 4.072/5.0", "Rank: 1/47", "National Scholarship (Top 2%)"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    items: "Python (PyTorch, Transformers, PEFT), C++, Java, C"
  },
  {
    category: "Web Development",
    items: "Java SSM, Flask, Django, Docker, Neo4j, Git, SQL"
  },
  {
    category: "Data Analysis",
    items: "SPSS, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn"
  },
  {
    category: "Languages",
    items: "Chinese (Native), English (IELTS 6.5)"
  }
];

export const HOBBIES: Hobby[] = [
  {
    title: "Fitness & Bodybuilding",
    description: "Passionate about staying fit and pushing limits.",
    // PLACE YOUR FILE IN 'public/gym.jpg'
    image: "/gym.jpg", 
    size: "large"
  },
  {
    title: "Sprinting",
    description: "Sprinting is my way to push my limits.",
    image: "/sprinting.JPG",
    size: "small"
  }
];
