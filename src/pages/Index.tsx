
import React from 'react';
import Header from '../components/Header';
import TeamMembers from '../components/TeamMembers';
import TasksTable from '../components/TasksTable';
import AboutProject from '../components/AboutProject';
import Footer from '../components/Footer';

const Index = () => {
  // Mock data for team members
  const teamMembers = [
    {
      name: "Jonathas Almeida de Matos",
      role: "Desenvolvedor Full-Stack",
      description: "Especialista em desenvolvimento web com interesse em novas tecnologias e solução de problemas complexos.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150",
      github: "https://github.com/jonathas",
      linkedin: "https://linkedin.com/in/jonathas"
    },
    {
      name: "Ana Silva",
      role: "Designer UI/UX",
      description: "Apaixonada por criação de interfaces intuitivas e experiências de usuário agradáveis.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=150&h=150", 
      github: "https://github.com/anasilva",
      linkedin: "https://linkedin.com/in/anasilva"
    },
    {
      name: "Carlos Santos",
      role: "Desenvolvedor Back-End",
      description: "Especialista em implementação de APIs e bancos de dados eficientes e seguros.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=150&h=150",
      github: "https://github.com/carlossantos",
      linkedin: "https://linkedin.com/in/carlossantos"
    }
  ];

  // Mock data for tasks table
  const taskData = [
    {
      name: "Jonathas Almeida de Matos",
      ru: "4928884",
      tasks: [
        "Desenvolveu a estrutura HTML da página",
        "Implementou o sistema de navegação"
      ]
    },
    {
      name: "Ana Silva",
      ru: "3456789",
      tasks: [
        "Criou o design visual da página",
        "Implementou os estilos CSS responsivos"
      ]
    },
    {
      name: "Carlos Santos",
      ru: "2345678",
      tasks: [
        "Desenvolveu a seção de tarefas",
        "Implementou a tabela de contribuições",
        "Realizou testes de usabilidade"
      ]
    }
  ];

  // Mock data for about section
  const projectDescription = "Este projeto foi desenvolvido como parte da avaliação da disciplina de Desenvolvimento Web. O objetivo principal é criar uma página web que apresente a equipe envolvida no projeto, suas contribuições e detalhes sobre o projeto em si, utilizando os conceitos de HTML e CSS aprendidos durante o curso.";
  
  const technologies = [
    "HTML5",
    "CSS3",
    "React",
    "TypeScript",
    "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Projeto da Equipe Web" />
      
      <main className="flex-grow">
        <TeamMembers members={teamMembers} />
        <TasksTable tasks={taskData} />
        <AboutProject 
          description={projectDescription} 
          technologies={technologies}
        />
      </main>
      
      <Footer 
        contactEmail="equipe@projetoweb.com"
        year={2025}
        teamName="Equipe Web"
      />
    </div>
  );
};

export default Index;
