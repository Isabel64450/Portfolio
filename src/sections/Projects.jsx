import React from 'react'
import { FaGithub } from "react-icons/fa";

import { ArrowUpRight} from "lucide-react";
import  AnimatedBorderButton from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Portfolio",
    description:
      "Un portfolio personnel pour présenter mes projets et compétences.",
    image: "/projectImg/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    FaGithub: "https://github.com/Isabel64450/Portfolio",
  },
  {
    title: "Izaberu Creations",
    description:
      "Site de vente online pour une artiste de ventes des acuarelles sur papier, avec gestion des stocks et paiements sécurisés, ainsi qu'une grosse partie admin et gestion des commerciaux",
    image: "/projectImg/chamborelle.png",
    tags: ["JavaScript", "React ,Tailwind","Sql"],
    link: "https://izaberu-créations.fr/",
    FaGithub: "Private Repository",
  },
  {
    title: "Email Analyzer",
    description:
      "Projet développé lors de mon stage de fin d’études en développement web, basé sur une architecture hexagonale. Mise en place d’un webhook pour analyser des emails et détecter les tentatives de phishing grâce à un système de scoring basé sur plusieurs critères. Les emails jugés suspects sont automatiquement stockés en base de données afin de faciliter leur suivi et leur analyse.",
    image: "/projectImg/chassGame.png",
    tags: ["Html", "TypeScript,CSS, architecture hexagonale "],
    link: "#",
    FaGithub: "https://github.com/Isabel64450/EmailAnalyzer",
  },
  {
    title: "Implémentez une modele de scoring",
    description:
      "Projet de data science centré sur l’analyse de données bancaires anonymisées afin de construire un modèle de scoring de crédit. L’objectif était de prédire le risque client et d’aider à la décision d’octroi de prêt grâce à des techniques de machine learning. Ce projet met en avant mes compétences en traitement de données, modélisation et interprétation des résultats.",
    image: "/projectImg/creasLynca.png",
    tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Imbalanced Data"],
    link: "#",
    FaGithub: "https://github.com/Isabel64450/Project7",
  },
  {
    title: "Gestion d’événements",
    description:
      "Projet réalisé dans le cadre de ma formation de développeuse web, consistant à récupérer des événements via une API. L’application permet ensuite de sélectionner et gérer ces événements afin de les ajouter à un agenda personnel. Ce projet met en œuvre la gestion des données, les appels API et l’interaction utilisateur.",
    image: "/projectImg/pacMan.png",
    tags: ["Html", "Javascript ,CSS"],
    link: "#",
    FaGithub: "https://github.com/Isabel64450/Project-ccp1",
  },
  {
    title: "Gestion des missions et des candidatures bénévoles",
    description:
      "Application permettant aux associations de publier des missions et aux bénévoles de candidater en ligne. Le système intègre une gestion des rôles ainsi que des mécanismes de validation des candidatures. Ce projet met en œuvre la gestion des utilisateurs, des permissions et des flux de validation.",
    image: "/projectImg/washandwork.png",
    tags: ["HTML", "Javascript ,CSS"],
    link: "#",
    FaGithub: "https://github.com/Isabel64450/Gestion-des-missions-et-des-candidatures",
  },
];

const Projects = () => {
    return (
      <section id="projects" className="py-32 relative overflow-hidden">
     
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
         
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm font-medium tracking-wider uppercase 
                                    animation-fade-in"
            >
              Travaux vedettes
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
                                text-secondary-foreground"
            >
              Projets
              <span className="font-serif italic font-normal text-[#EDAFB8]">
                {" "}
                qui font la différence
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Une petite selection de travaux récents, de la plus silple a un
              peu plus complexe pour des clients ou apprenants.
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, id) => (
              <div
                key={id}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${id + 1 * 100}ms` }}
              >
               
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-card via-card/50
                               to-transparent opacity-60"
                  />
                 
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground 
                      transition-all "
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.FaGithub}
                      className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground 
                      transition-all "
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 ">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                 group-hover:translate-x-1 group-hover:translate-y-1 transition-all" 
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagId) => (
                      <span 
                        key={tagId}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                                      border-border/50 text-muted-foreground hover:border-primary/50
                                      hover:text-primary transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              Voir tous les projets
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </div>
      </section>
    );
}

export default Projects
