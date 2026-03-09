"use client";
import React from "react";
import {
  FaBrain,
  FaRobot,
  FaDatabase,
  FaCode,
  FaChartLine,
  FaSearch,
  FaCog,
  FaEye,
  FaComments,
  FaNetworkWired,
} from "react-icons/fa";
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface } from "react-icons/si";
import ServicePage from "@/components/ServicePage";

export default function AiIntelligentSystems() {
  const subServices = [
    {
      title: "AI Strategy & Implementation",
      description:
        "We help businesses identify the best opportunities to implement AI. Our team designs an AI roadmap including data strategy, automation opportunities, and scalable implementation plans aligned with business goals.",
    },
    {
      title: "Large Language Model (LLM) Integration",
      description:
        "Integrate advanced LLM capabilities into your applications. We develop AI chatbots, AI copilots, and intelligent assistants using models like GPT, open-source LLMs, and custom fine-tuned models.",
    },
    {
      title: "Custom AI Model Development",
      description:
        "We build machine learning models tailored to your specific business needs such as recommendation engines, predictive models, fraud detection systems, and classification algorithms.",
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description:
        "Develop intelligent conversational agents for customer support, internal automation, knowledge management, and lead generation across websites, apps, and messaging platforms.",
    },
    {
      title: "Model Training & Fine-Tuning",
      description:
        "We train and fine-tune AI models using your business data to improve accuracy, domain knowledge, and performance for specialized tasks.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Build AI systems that understand and process human language including sentiment analysis, document summarization, entity extraction, translation, and content generation.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Use AI to analyze images and videos for applications like product recognition, document scanning, quality inspection, facial recognition, and surveillance analytics.",
    },
    {
      title: "AI Automation & Workflow Optimization",
      description:
        "Automate repetitive tasks using AI-powered workflows such as data processing, document analysis, report generation, and business operations automation.",
    },
    {
      title: "Recommendation Systems",
      description:
        "Build intelligent recommendation engines for e-commerce, media platforms, SaaS products, and marketplaces to personalize user experiences.",
    },
    {
      title: "AI-Powered Analytics & Forecasting",
      description:
        "Use predictive analytics and machine learning models to forecast demand, customer behavior, marketing performance, and business growth.",
    },
    {
      title: "Data Engineering for AI",
      description:
        "Prepare, clean, and structure large datasets to enable effective AI model training and deployment.",
    },
    {
      title: "AI API Development",
      description:
        "Develop scalable APIs that allow your applications to interact with AI models for real-time inference, automation, and data analysis.",
    },
    {
      title: "Generative AI Applications",
      description:
        "Create AI tools capable of generating text, images, marketing content, product descriptions, UI designs, and creative assets.",
    },
    {
      title: "AI Search & Knowledge Systems",
      description:
        "Build AI-powered knowledge bases and semantic search systems using embeddings, vector databases, and retrieval-augmented generation (RAG).",
    },
    {
      title: "AI for Product Development",
      description:
        "Embed AI capabilities into SaaS products, mobile apps, and enterprise platforms to create intelligent and competitive digital products.",
    },
  ];

  const useCases = [
    {
      title: "E-Commerce Personalization",
      description: "Recommend products, predict churn, and automate customer support.",
    },
    {
      title: "Healthcare & Diagnostics",
      description: "Analyze medical images, predict patient outcomes, and automate records.",
    },
    {
      title: "Finance & Banking",
      description: "Detect fraud, automate compliance, and forecast market trends.",
    },
    {
      title: "Legal Tech",
      description: "Summarize contracts, extract clauses, and automate document review.",
    },
    {
      title: "Customer Support Automation",
      description: "Deploy AI agents that resolve tickets, answer FAQs, and escalate intelligently.",
    },
    {
      title: "HR & Recruitment",
      description: "Screen resumes, rank candidates, and automate onboarding workflows.",
    },
    {
      title: "Manufacturing & Quality Control",
      description: "Use computer vision to detect defects and optimize production lines.",
    },
    {
      title: "Real Estate",
      description: "Predict property prices, automate listings, and generate property reports.",
    },
    {
      title: "Education & E-Learning",
      description: "Create adaptive learning systems, AI tutors, and automated grading.",
    },
    {
      title: "Media & Content Creation",
      description: "Generate articles, social posts, video scripts, and creative assets at scale.",
    },
    {
      title: "Logistics & Supply Chain",
      description: "Forecast demand, optimize routes, and automate inventory management.",
    },
    {
      title: "SaaS Products",
      description: "Embed AI features like smart search, auto-complete, and usage analytics.",
    },
    {
      title: "Marketing & Advertising",
      description: "Predict campaign performance, segment audiences, and generate ad copy.",
    },
    {
      title: "Retail & FMCG",
      description: "Analyze shelf data, track trends, and forecast seasonal demand.",
    },
    {
      title: "Government & Public Sector",
      description: "Automate citizen services, analyze public data, and detect anomalies.",
    },
    {
      title: "Cybersecurity",
      description: "Detect threats in real-time using anomaly detection and behavioral AI.",
    },
    {
      title: "Telecom",
      description: "Predict network failures, reduce churn, and personalize offers.",
    },
    {
      title: "Agriculture",
      description: "Monitor crops with computer vision, predict yield, and optimize irrigation.",
    },
    {
      title: "Energy & Utilities",
      description: "Forecast energy usage, detect faults, and automate grid management.",
    },
    {
      title: "Hospitality & Travel",
      description: "Personalize travel packages, automate bookings, and analyze guest feedback.",
    },
  ];

  const technologies = [
    { name: "OpenAI GPT", icon: <SiOpenai size={22} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={22} /> },
    { name: "PyTorch", icon: <SiPytorch size={22} /> },
    { name: "Hugging Face", icon: <SiHuggingface size={22} /> },
    { name: "LangChain", icon: <FaNetworkWired size={22} /> },
    { name: "Vector DBs", icon: <FaDatabase size={22} /> },
    { name: "Python", icon: <FaCode size={22} /> },
    { name: "Computer Vision", icon: <FaEye size={22} /> },
    { name: "NLP", icon: <FaComments size={22} /> },
    { name: "ML Pipelines", icon: <FaCog size={22} /> },
    { name: "Predictive Analytics", icon: <FaChartLine size={22} /> },
    { name: "RAG Systems", icon: <FaSearch size={22} /> },
  ];

  return (
    <ServicePage
      title="AI & Intelligent Systems"
      description="We help businesses unlock the power of Artificial Intelligence through intelligent automation, machine learning models, and large language models. From AI assistants to predictive analytics and custom-trained models, our solutions help organizations work smarter, automate processes, and discover new insights from data."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}