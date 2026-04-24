const experiences = [
  {
    period: "2026",
    role: "Concepteur developpeur d'Applications",
    company: "AFPA Bègles",
    description: " Formation en conception d’applications couvrant l’analyse des besoins, la modélisation des systèmes, le développement back-end structuré et la création d’API, avec une attention particulière portée à la performance, à la sécurité et à la maintenabilité.",
    technologies: ["PHP", "Symfony","React", "React Native", "TypeScript","JavaScript", "Supabase"],
    current: true,
  },
  {
    period: "2025",
    role: "Developpeur web et web mobile fullstack",
    company: "Group Afec Pau",
    description:
    "Formation en développement web fullstack axée sur le développement back-end structuré (architecture MVC), la gestion de bases de données et la création d’API REST, ainsi que le maquettage d’interfaces avec Figma et l’intégration front-end avec React.",
    technologies: ["Figma","Git", "GitHub","Version Control","React", "JavaScript", "Vanilla JS", "MariaDB", "MongoDB"],
    current: true,
  },
  {
    period: "2023 - 2024",
    role: "Data Scientist",
    company: "Openclassroom",
    description:
      "Analyse et visualisation de données, ainsi que développement de modèles de machine learning avec des bibliothèques telles que Scikit-learn.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "Seaborn",  "SQL", "Machine Learning", "Deep Learning",  "Data Visualization", "Jupyter Notebook"],
    current: true,
  },
];


 const Experience = () => {
    return (
      <section id="experience" className="py-32 relative overflow-Hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full 
                            blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm font-medium tracking-wider 
                                        uppercase animate-fade-in"
            >
              Parcours professionnel
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
                                     text-secondary-foreground"
            >
              Expérience/Formation{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                pertinentes
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              sfghggshsfghfg
            </p>
          </div>
          {/*Timeline */}
          <div className="relative">
            <div
              className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 
                            w-[2px] bg-gradient-to-b from-primary/70 via primary/30 to-transparent
                            md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
            />
            {/*Experience items*/}
            <div className="space-y-12">
              {experiences.map((exp, id) => (
                <div 
                  key={id}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{animationDelay: `${(id + 1) * 150}ms`}}
                >
                  {/*Point de la timeline*/}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary
                                  rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                  </div>

                  {/*Contenu*/}
                  <div className={`pl-8 md:pl-0 ${
                    id % 2 === 0 
                      ? "md:pr-16 md:text-right" 
                      : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className={`glass p-6 rounded-2xl border border-primary/30 
                                   hover:border-primary/50 transition-all duration-500`}>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${
                        id % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.technologies.map((tech, id) => (
                          <span 
                            key={id}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Experience
