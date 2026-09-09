import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import {aboutData} from '@/data/about';

import StatusCard from './StatusCard';
import './About.css';

export default function About() {
    return (
        <Section
            id="about"
            width="content"
            containerClassName="about__container"
        >
            <SectionHeader title="Biraz kendimden." />

            <div className="about__bio">
                {aboutData.bio.map((paragraph) => (
                    <p key={paragraph} className="about__paragraph">
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="about__statuses">
                {aboutData.statuses.map((status) => (
                    <StatusCard key={status.id} status={status} />
                ))}
            </div>
        </Section>
    );
}
