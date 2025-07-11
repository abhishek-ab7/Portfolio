import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & MERN Stack Developer
            </h3>

            <p className="text-muted-foreground text-justify">
              Aspiring Software Development Engineer with a strong foundation in full-stack web development, scalable backend systems, and real-time application design using the MERN stack. Delivered multiple production-ready projects featuring secure authentication, cloud integrations, and optimized system performance. Consistently improving problem-solving skills with 300+ Data Structures & Algorithms problems solved on LeetCode and Codeforces.
            </p>

           

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1hTTcmmGLjkuceNt_JeIukByASSn04fLq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto max-w-5xl mt-32 pt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {/* Bluestock Fintech */}
          <div className="bg-card p-6 rounded-lg shadow-xs">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold">Software Development Engineer (SDE) Intern</h3>
                <span className="text-muted-foreground">Bluestock Fintech</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                Mar 2025 – Apr 2025 | Remote
              </div>
            </div>
            
          </div>
          {/* Microdot Tech Aspire Solutions */}
          <div className="bg-card p-6 rounded-lg shadow-xs">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold">Full-Stack Web Development Intern</h3>
                <span className="text-muted-foreground">Microdot Tech Aspire Solutions (P) Ltd.</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                Jun 2023 – Aug 2023 | Noida, UP
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <style jsx>{`
        #about, #experience, #skills, #projects, #contact {
          scroll-margin-top: 100px;
        }
      `}</style>
    </section>
  );
};
