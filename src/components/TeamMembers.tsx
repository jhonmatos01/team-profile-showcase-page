
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
  github?: string;
  linkedin?: string;
}

interface TeamMembersProps {
  members: Member[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({ members }) => {
  return (
    <section id="integrantes" className="py-16 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Integrantes da Equipe</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img 
              src={member.image} 
              alt={`Foto de ${member.name}`} 
              className="profile-img mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.description}</p>
            
            <div className="flex gap-4">
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-primary"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <Github size={24} />
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
