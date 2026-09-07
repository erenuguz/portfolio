import {
    SiReact,
    SiPython,
    SiCplusplus,
    SiFirebase,
    SiVite,
    SiArduino,
    SiPandas,
    SiOpencv,
    SiJavascript,
} from 'react-icons/si';
import {FaJava, FaAndroid, FaGithub, FaDocker} from 'react-icons/fa';
import './hero-logos.css';

export default function HeroLogos({variant = 'default'}) {
    const row1 = [
        <SiReact key="react" color="#61DAFB" />,
        <FaJava key="java" color="#007396" />,
        <SiPython key="python" color="#3776AB" />,
        <FaAndroid key="android" color="#3DDC84" />,
        <SiFirebase key="firebase" color="#FFCA28" />,
    ];

    const row2 = [
        <SiCplusplus key="cpp" color="#00599C" />,
        <SiArduino key="arduino" color="#00979D" />,
        <FaGithub key="github" color="#181717" />,
        <SiVite key="vite" color="#646CFF" />,
        <FaDocker key="docker" color="#2496ED" />,
    ];

    const row3 = [
        <SiOpencv key="opencv" color="#5C3EE8" />,
        <SiPandas key="pandas" color="#150458" />,
        <SiJavascript key="js" color="#F7DF1E" />,
        <SiReact key="react2" color="#61DAFB" />,
        <FaJava key="java2" color="#007396" />,
    ];

    const renderTrack = (items) => {
        const doubledItems = [...items, ...items];
        return doubledItems.map((icon, index) => (
            <div key={index} className="logo-item">
                {icon}
            </div>
        ));
    };

    const containerClass = `hero-logos-container${
        variant === 'background' ? ' variant-background' : ''
    }`;

    return (
        <div className={containerClass}>
            <div className="hero-logos-track track-left">
                {renderTrack(row1)}
            </div>
            <div className="hero-logos-track track-right">
                {renderTrack(row2)}
            </div>
            <div className="hero-logos-track track-left">
                {renderTrack(row3)}
            </div>
        </div>
    );
}
