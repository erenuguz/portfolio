import BaseButton from '@/components/ui/BaseButton';
import {theme} from '@/styles/theme';

const sharedButtonStyle = {
    fontFamily: theme.typography.fontFamily.body,
    fontWeight: theme.typography.fontWeight.semibold,
    lineHeight: theme.typography.lineHeight.normal,
    borderRadius: theme.borderRadius.md,
    whiteSpace: 'nowrap',
};

const heroButtonStyle = {
    ...sharedButtonStyle,
    minHeight: theme.layout.heroControlHeight,
    padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
    fontSize: theme.typography.fontSize.base,
};

const cardButtonStyle = {
    ...sharedButtonStyle,
    minHeight: theme.layout.controlHeight,
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    fontSize: theme.typography.fontSize.sm,
};

export function ProjectsButton() {
    return (
        <BaseButton
            as="a"
            href="#projects"
            style={{
                ...heroButtonStyle,
                color: theme.colors.surface,
                backgroundColor: theme.colors.action.primary,
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
            as="a"
            href="#contact"
            style={{
                ...heroButtonStyle,
                color: theme.colors.text.secondary,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.colors.border}`,
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
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...cardButtonStyle,
                color: theme.colors.text.secondary,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.colors.border}`,
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
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...cardButtonStyle,
                color: theme.colors.surface,
                backgroundColor: theme.colors.action.primary,
                border: `1px solid ${theme.colors.action.primary}`,
            }}
            hoverBackground={theme.colors.action.primaryHover}
        >
            Canlı
        </BaseButton>
    );
}
