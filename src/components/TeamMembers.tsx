
import React from 'react';

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
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
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
