import {
    SiReact,
    SiPython,
    SiCplusplus,
    SiFirebase,
    SiVite,
} from 'react-icons/si';
import {FaJava, FaAndroid} from 'react-icons/fa';

export const skillsData = [
    {
        title: 'Yazılım Dilleri',
        items: [
            {name: 'Java', icon: <FaJava />},
            {name: 'Python', icon: <SiPython />},
            {name: 'C++', icon: <SiCplusplus />},
        ],
    },
    {
        title: 'Framework & Kütüphaneler',
        items: [
            {name: 'React', icon: <SiReact />},
            {name: 'Vite', icon: <SiVite />},
            {name: 'Android SDK', icon: <FaAndroid />},
        ],
    },
    {
        title: 'Veritabanı & Araçlar',
        items: [
            {name: 'Firebase', icon: <SiFirebase />},
            // İhtiyacına göre diğer teknolojiler (MySQL, OpenCV, vb.) eklenebilir
        ],
    },
];
export default skillsData;
