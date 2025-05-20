
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-primary text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <nav className="flex flex-wrap gap-6">
          <a href="#integrantes" className="hover:underline font-semibold">Integrantes</a>
          <a href="#tarefas" className="hover:underline font-semibold">Tarefas</a>
          <a href="#sobre" className="hover:underline font-semibold">Sobre o Projeto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
