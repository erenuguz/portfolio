import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';
import './FooterCV.css';

export default function FooterCV() {
    if (!footerData.cvUrl) return null;

    return (
        <a
            href={footerData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cv"
        >
            <Icon name="download" size={17} />
            <span>CV İndir</span>
        </a>
    );
}
