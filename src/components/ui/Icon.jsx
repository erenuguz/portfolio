import {
    SiArduino,
    SiCplusplus,
    SiFigma,
    SiFirebase,
    SiGit,
    SiJavascript,
    SiMysql,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiVite,
} from 'react-icons/si';

import {FaAndroid, FaGithub, FaJava, FaLinkedin} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {
    FiArrowUpRight,
    FiChevronRight,
    FiDatabase,
    FiDownload,
    FiMail,
    FiMapPin,
    FiMenu,
    FiX,
} from 'react-icons/fi';

const ICONS = {
    android: FaAndroid,
    arduino: SiArduino,
    arrowUpRight: FiArrowUpRight,
    chevronRight: FiChevronRight,
    close: FiX,
    cpp: SiCplusplus,
    database: FiDatabase,
    download: FiDownload,
    figma: SiFigma,
    firebase: SiFirebase,
    git: SiGit,
    github: FaGithub,
    java: FaJava,
    javascript: SiJavascript,
    linkedin: FaLinkedin,
    location: FiMapPin,
    mail: FiMail,
    menu: FiMenu,
    mysql: SiMysql,
    node: SiNodedotjs,
    python: SiPython,
    react: SiReact,
    vite: SiVite,
    x: FaXTwitter,
};

export default function Icon({
    name,
    size = 20,
    title,
    className = '',
    ...rest
}) {
    const IconComponent = ICONS[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent
            size={size}
            className={className}
            aria-hidden={title ? undefined : true}
            aria-label={title}
            focusable="false"
            {...rest}
        />
    );
}
