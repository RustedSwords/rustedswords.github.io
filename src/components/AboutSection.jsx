import profileImg from "@/assets/profile.png";
import { Bot, Astroid, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Centered Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-500 blur opacity-40 animate-pulse-subtle"></div>

            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Manav Makwana"
              className="
                relative
                w-36 h-36 md:w-44 md:h-44
                rounded-full
                object-cover
                border border-primary/30
                animate-float
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(167,139,250,0.35)]
              "
            />
          </div>
        </div>

        {/* Two-column layout (UNCHANGED alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Engineer focused on LLM Systems, RAG, and Applied AI
            </h3>

              <p className="text-muted-foreground">
              I’m an AI Engineer focused on building end-to-end intelligent systems using large language models, 
              retrieval-augmented generation (RAG), and modern backend architectures. I design and develop applications 
              that integrate LLMs into real-world workflows, with a focus on usability, performance, and reliability.
              </p>

              <p className="text-muted-foreground">
              My work includes building RAG pipelines, AI agents, and real-time AI systems, covering everything from data 
              ingestion and embedding generation to API development and deployment. I am particularly interested in creating 
              scalable AI products that combine strong engineering practices with practical machine learning to deliver 
              measurable impact.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://www.overleaf.com/read/jmbvfmzzctdk#b40456"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right column (cards – unchanged) */}
          <div className="grid grid-cols-1 gap-6">
            {/* AI Systems */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Astroid className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Systems</h4>
                  <p className="text-muted-foreground">
                    Designing and building end-to-end AI applications using LLMs, 
                    APIs, and modern backend architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* RAG & Retrieval */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">RAG & Retrieval</h4>
                  <p className="text-muted-foreground">
                    Building retrieval-augmented systems with document processing, embeddings, 
                    and vector databases for accurate and scalable AI solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Agents */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Agents</h4>
                  <p className="text-muted-foreground">
                    Developing agent-based systems that automate workflows, handle structured tasks, 
                    and integrate with external tools and services.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
