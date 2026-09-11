import {useEffect, useRef} from 'react';

import SectionHeader from '@/components/common/SectionHeader';
import Icon from '@/components/ui/Icon';

import ContactForm from './ContactForm';
import './Contact.css';

export default function ContactModal({isOpen, onClose}) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        const previousActiveElement = document.activeElement;

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        const animationFrame = window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            window.cancelAnimationFrame(animationFrame);
            previousActiveElement?.focus?.();
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="contact-modal" onMouseDown={handleBackdropClick}>
            <div
                className="contact-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    className="contact-modal__close"
                    aria-label="İletişim penceresini kapat"
                    onClick={onClose}
                >
                    <Icon name="close" size={22} />
                </button>

                <SectionHeader
                    titleId="contact-modal-title"
                    title="Konuşalım."
                    description="Yeni bir proje fikriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz?"
                />

                <ContactForm />
            </div>
        </div>
    );
}
