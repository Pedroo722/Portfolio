import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiPostgresql, SiStrapi, SiAntdesign, SiAxios, SiD3Dotjs } from 'react-icons/si';

export const techIcons: { [key: string]: JSX.Element } = {
  Javascript: <SiJavascript />,  
  React: <FaReact />,
  Redux: <SiRedux />,
  Axios: <SiAxios />,
  'Ant Design': <SiAntdesign />,
  'D3.js': <SiD3Dotjs />,
  'Strapi.io': <SiStrapi />,
  PostgresSQL: <SiPostgresql />,
  Python: <FaPython />,
};

export {};
