
import React from 'react';

interface AboutProjectProps {
  description: string;
  technologies: string[];
}

const AboutProject: React.FC<AboutProjectProps> = ({ description, technologies }) => {
  return (
    <section id="sobre" className="py-16 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Sobre o Projeto</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Objetivo</h3>
          <p className="text-gray-700 mb-6" style={{lineHeight: '1.6'}}>{description}</p>
          
          <h3 className="text-xl font-semibold mb-4">Tecnologias Utilizadas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1" style={{marginLeft: '20px'}}>
            {technologies.map((tech, index) => (
              <li key={index} style={{marginBottom: '5px'}}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
