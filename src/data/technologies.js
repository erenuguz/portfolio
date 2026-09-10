export const technologyCatalog = {
    react: {
        name: 'React',
        icon: 'react',
        devicon: 'react/react-original',
    },
    android: {
        name: 'Android SDK',
        icon: 'android',
        devicon: 'android/android-original',
    },
    git: {
        name: 'Git',
        icon: 'git',
        devicon: 'git/git-original',
    },
    sql: {
        name: 'SQL',
        icon: 'database',
        devicon: 'mysql/mysql-original', // SQL için MySQL logosunu temsili koyduk
    },
    javascript: {
        name: 'JavaScript',
        icon: 'javascript',
        devicon: 'javascript/javascript-original',
    },
    firebase: {
        name: 'Firebase',
        icon: 'firebase',
        devicon: 'firebase/firebase-plain', // Firebase devicon'da plain olarak geçiyor
    },
    figma: {
        name: 'Figma',
        icon: 'figma',
        devicon: 'figma/figma-original',
    },
    python: {
        name: 'Python',
        icon: 'python',
        devicon: 'python/python-original',
    },
    node: {
        name: 'Node.js',
        icon: 'node',
        devicon: 'nodejs/nodejs-original', // nodejs olarak güncellendi
    },
    java: {
        name: 'Java',
        icon: 'java',
        devicon: 'java/java-original',
    },
    cpp: {
        name: 'C++',
        icon: 'cpp',
        devicon: 'cplusplus/cplusplus-original', // cplusplus olarak güncellendi
    },
    vite: {
        name: 'Vite',
        icon: 'vite',
        devicon: 'vitejs/vitejs-original', // vitejs olarak güncellendi
    },
    mysql: {
        name: 'MySQL',
        icon: 'mysql',
        devicon: 'mysql/mysql-original',
    },
    arduino: {
        name: 'Arduino',
        icon: 'arduino',
        devicon: 'arduino/arduino-original',
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
