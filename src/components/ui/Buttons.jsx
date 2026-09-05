import BaseButton from '@/components/ui/BaseButton';
import {theme} from '@/styles/theme';

const heroBase = {
    padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    borderRadius: theme.borderRadius.md,
};

const cardBase = {
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    borderRadius: theme.borderRadius.md,
};

export function ProjectsButton() {
    return (
        <BaseButton
            href="#projects"
            as="a"
            style={{
                ...heroBase,
                backgroundColor: theme.colors.action.primary,
                color: theme.colors.surface,
            }}
            hoverBackground={theme.colors.action.primaryHover}
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
            style={{
                ...heroBase,
                backgroundColor: 'transparent',
                color: theme.colors.text.secondary,
            }}
            hoverColor={theme.colors.text.primary}
            hoverBackground={theme.colors.surfaceHover}
        >
            İletişime geç
        </BaseButton>
    );
}

export function GithubButton({href}) {
    return (
        <BaseButton
            href={href}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...cardBase,
                backgroundColor: 'transparent',
                color: theme.colors.text.secondary,
            }}
            hoverColor={theme.colors.text.primary}
            hoverBackground={theme.colors.surfaceHover}
        >
            GitHub
        </BaseButton>
    );
}

export function LiveButton({href}) {
    return (
        <BaseButton
            href={href}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...cardBase,
                backgroundColor: theme.colors.action.primary,
                color: theme.colors.surface,
            }}
            hoverBackground={theme.colors.action.primaryHover}
        >
            Canlı
        </BaseButton>
    );
}
