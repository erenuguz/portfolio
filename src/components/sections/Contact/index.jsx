import {useState, useEffect, useRef} from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import Icon from '@/components/ui/Icon';
import ContactForm from './ContactForm';

export default function ContactModal({isOpen, onClose}) {
    const closeButtonRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isCloseHovered, setIsCloseHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <div
            onMouseDown={handleBackdropClick}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                display: 'grid',
                padding: isMobile ? '12px' : '24px',
                overflowY: 'auto',
                backgroundColor: 'rgba(10, 10, 10, 0.65)',
                placeItems: isMobile ? 'end center' : 'center',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                boxSizing: 'border-box',
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '24px' : '32px',
                    width: isMobile ? '100%' : 'min(680px, 100%)',
                    maxHeight: isMobile
                        ? 'calc(100vh - 24px)'
                        : 'calc(100vh - 48px)',
                    padding: isMobile ? '32px 20px 24px' : '40px',
                    overflowY: 'auto',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e2da',
                    borderRadius: isMobile ? '18px 18px 10px 10px' : '18px',
                    boxShadow: '0 24px 70px rgba(0, 0, 0, 0.24)',
                    boxSizing: 'border-box',
                }}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="İletişim penceresini kapat"
                    onClick={onClose}
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                    style={{
                        position: 'absolute',
                        top: isMobile ? '12px' : '18px',
                        right: isMobile ? '12px' : '18px',
                        zIndex: 1,
                        display: 'inline-flex',
                        width: '40px',
                        height: '40px',
                        padding: 0,
                        color: '#1a1a1a',
                        backgroundColor: isCloseHovered ? '#f3f2ee' : '#ffffff',
                        border: '1px solid #e5e2da',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isCloseHovered ? 'rotate(4deg)' : 'none',
                        transition:
                            'background-color 160ms ease, transform 160ms ease',
                        boxSizing: 'border-box',
                    }}
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
