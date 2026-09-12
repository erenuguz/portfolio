import Button from '@/components/ui/Button';
import {ctaData} from '../data/ctaData';
import './CTAGroup.css';

export default function CTAGroup({onContactOpen}) {
    return (
        <div className="cta-group">
            {ctaData.map((cta) => {
                const isContact = cta.action === 'contact';

                return (
                    <Button
                        key={cta.id}
                        href={cta.href}
                        variant={cta.variant}
                        size={cta.size}
                        icon={cta.icon}
                        onClick={isContact ? onContactOpen : undefined}
                        className={
                            isContact ? 'cta-group__contact-btn' : undefined
                        }
                    >
                        {cta.label}
                    </Button>
                );
            })}
        </div>
    );
}
