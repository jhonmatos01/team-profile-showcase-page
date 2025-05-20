
import React from 'react';

interface FooterProps {
  contactEmail: string;
  year: number;
  teamName: string;
}

const Footer: React.FC<FooterProps> = ({ contactEmail, year, teamName }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <p>{contactEmail}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; {year} {teamName}</p>
            <p className="text-gray-400 text-sm mt-1">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
