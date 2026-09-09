export const technologyCatalog = {
    react: {
        name: 'React',
        icon: 'react',
    },
    android: {
        name: 'Android SDK',
        icon: 'android',
    },
    git: {
        name: 'Git',
        icon: 'git',
    },
    sql: {
        name: 'SQL',
        icon: 'database',
    },
    javascript: {
        name: 'JavaScript',
        icon: 'javascript',
    },
    firebase: {
        name: 'Firebase',
        icon: 'firebase',
    },
    figma: {
        name: 'Figma',
        icon: 'figma',
    },
    python: {
        name: 'Python',
        icon: 'python',
    },
    node: {
        name: 'Node.js',
        icon: 'node',
    },
    java: {
        name: 'Java',
        icon: 'java',
    },
    cpp: {
        name: 'C++',
        icon: 'cpp',
    },
    vite: {
        name: 'Vite',
        icon: 'vite',
    },
    mysql: {
        name: 'MySQL',
        icon: 'mysql',
    },
    arduino: {
        name: 'Arduino',
        icon: 'arduino',
    },
};

export const heroTechnologies = [
    {technologyId: 'react', position: 'react', iconSize: 48},
    {technologyId: 'android', position: 'android', iconSize: 58},
    {technologyId: 'git', position: 'git', iconSize: 30},
    {technologyId: 'sql', position: 'sql', iconSize: 30},
    {technologyId: 'javascript', position: 'javascript', iconSize: 42},
    {technologyId: 'firebase', position: 'firebase', iconSize: 38},
    {technologyId: 'figma', position: 'figma', iconSize: 28},
    {technologyId: 'python', position: 'python', iconSize: 44},
    {technologyId: 'node', position: 'node', iconSize: 36},
    {technologyId: 'java', position: 'java', iconSize: 34},
];

export const techStripTechnologyIds = [
    'react',
    'java',
    'python',
    'mysql',
    'firebase',
    'arduino',
];

export function getTechnology(technologyId) {
    return technologyCatalog[technologyId];
}
