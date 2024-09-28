export interface Experience {
    name: string;
    description: string[];
    technologies: string[];
    startDate: string;
    endDate: string;
    repository: string;
}

export interface Project {
    name: string;
    description: string;
    repository: string;
    technologies: string[];
    information: string[];
    images: { src: string; caption: string }[];
}

export interface Activity {
    title: string;
    description: string;
    date: string;
}

export interface Course {
    name: string,
    description: string,
    certificate: string,
    issuer: string,
    date: string,
}