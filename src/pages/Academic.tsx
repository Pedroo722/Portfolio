import React from 'react';
import PublicationSummary from '../components/PublicationSummary'; 
import { publications } from '../util/constants';

const Academic: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Formação Acadêmica</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
          <h3 className="text-gray-400 text-sm mt-1 italic">Março de 2023 - Atualmente</h3>
          <p className="text-gray-700 mt-2"><strong>Instituição:</strong> Instituto Federal da Paraíba - Campus Esperança</p> 
          <p className="text-gray-700"><strong>Período Atual</strong>: 4º Período</p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Publicações</h1>
        <div className="flex flex-col items-center">
          {publications.map((pub, index) => (
            <div className="w-3/4 mb-4" key={index}>
              <PublicationSummary
                title={pub.title}
                authors={pub.authors}
                coordinators={pub.coordinators}
                summary={pub.summary}
                references={pub.references}
                link={pub.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
