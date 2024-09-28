import React from 'react';
import { Button } from 'antd';

interface PublicationSummaryProps {
  title: string;
  authors: string[];
  coordinators: string[];
  summary: string;
  references: string[];
  link: string;
}

const PublicationSummary: React.FC<PublicationSummaryProps> = ({
  title,
  authors,
  coordinators,
  summary,
  references,
  link
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2"><strong>Autores:</strong> {authors.join(', ')}</p>
      <p className="text-gray-700 mt-2"><strong>Coordenadores:</strong> {coordinators.join(', ')}</p>
      <p className="text-gray-700 mt-2"><strong>Resumo:</strong> {summary}</p>
      <p className="text-gray-700 mt-2"><strong>Referências:</strong></p>
      <ul className="list-disc pl-5 mt-2">
        {references.map((ref, index) => (
          <li key={index} className="text-gray-600">{ref}</li>
        ))}
      </ul>
      <Button
        type="default"
        href={link}
        target="_blank"
        className="mt-2 no-underline"
        style={{ textDecoration: 'none' }}
      >
        Link para o artigo
      </Button>
    </div>
  );
};

export default PublicationSummary;
