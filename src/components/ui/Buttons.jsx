import BaseButton from '@/components/ui/BaseButton';
import { theme } from '@/styles/theme';

// Hero butonları (Projelerim / İletişime geç)
const heroBase = {
    padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    borderRadius: theme.borderRadius.md,
    transition: theme.transitions.fast,
};

// Kart butonları (GitHub / Canlı)
const cardBase = {
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    borderRadius: theme.borderRadius.md,
    transition: theme.transitions.fast,
};

export function ProjectsButton() {
    return (
        <BaseButton
            href="#projects"
            as="a"
            customStyle={{
                ...heroBase,
                backgroundColor: theme.colors.action.primary,
                color: theme.colors.surface,
            }}
            hoverStyle={{
                backgroundColor: theme.colors.action.primaryHover,
            }}
        >
            Projelerim
        </BaseButton>
    );
}

export function ContactButton() {
    return (
        <BaseButton
            href="#contact"
            as="a"
            customStyle={{
                ...heroBase,
                backgroundColor: 'transparent',
                color: theme.colors.text.secondary,
            }}
            hoverStyle={{
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.surfaceHover,
            }}
        >
            İletişime geç
        </BaseButton>
    );
}

export function GithubButton({ href }) {
    return (
        <BaseButton
            href={href}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            customStyle={{
                ...cardBase,
                backgroundColor: 'transparent',
                color: theme.colors.text.secondary,
            }}
            hoverStyle={{
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.surfaceHover,
            }}
        >
            GitHub
        </BaseButton>
    );
}

export function LiveButton({ href }) {
    return (
        <BaseButton
            href={href}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            customStyle={{
                ...cardBase,
                backgroundColor: theme.colors.action.primary,
                color: theme.colors.surface,
            }}
            hoverStyle={{
                backgroundColor: theme.colors.action.primaryHover,
            }}
        >
            Canlı
        </BaseButton>
    );
}