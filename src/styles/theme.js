export const theme = {
    colors: {
        background: 'var(--color-background)',

        surface: 'var(--color-surface)',
        surfaceAlt: 'var(--color-surface-alt)',
        surfaceSoft: 'var(--color-surface-soft)',
        surfaceHover: 'var(--color-surface-hover)',

        border: 'var(--color-border)',
        borderStrong: 'var(--color-border-strong)',
        borderSubtle: 'var(--color-border-subtle)',

        text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            muted: 'var(--color-text-muted)',
            subtle: 'var(--color-text-subtle)',
            inverse: 'var(--color-text-inverse)',
        },

        accent: {
            primary: 'var(--color-accent)',
            soft: 'var(--color-accent-soft)',
            focusRing: 'var(--color-focus-ring)',
        },

        dark: {
            primary: 'var(--color-dark)',
            soft: 'var(--color-dark-soft)',
            overlay: 'var(--color-overlay)',
        },
    },

    typography: {
        fontFamily: {
            body: 'var(--font-body)',
            heading: 'var(--font-heading)',
            mono: 'var(--font-mono)',
        },

        fontSize: {
            xs: 'var(--font-size-xs)',
            label: 'var(--font-size-label)',
            sm: 'var(--font-size-sm)',
            body: 'var(--font-size-body)',
            base: 'var(--font-size-base)',
            lg: 'var(--font-size-lg)',
            xl: 'var(--font-size-xl)',
            sectionTitle: 'var(--font-size-section-title)',
            ctaTitle: 'var(--font-size-cta-title)',
            heroTitle: 'var(--font-size-hero-title)',
        },

        fontWeight: {
            normal: 'var(--font-weight-normal)',
            medium: 'var(--font-weight-medium)',
            semibold: 'var(--font-weight-semibold)',
            bold: 'var(--font-weight-bold)',
        },

        lineHeight: {
            tight: 'var(--line-height-tight)',
            heading: 'var(--line-height-heading)',
            normal: 'var(--line-height-normal)',
            body: 'var(--line-height-body)',
            relaxed: 'var(--line-height-relaxed)',
        },
    },

    spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        14: 'var(--space-14)',
        16: 'var(--space-16)',
        18: 'var(--space-18)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
    },

    borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        modal: 'var(--radius-modal)',
        full: 'var(--radius-full)',
    },

    shadows: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        modal: 'var(--shadow-modal)',
    },

    transitions: {
        fast: 'var(--motion-fast)',
        normal: 'var(--motion-normal)',
    },

    layout: {
        wideWidth: 'var(--layout-wide)',
        contentWidth: 'var(--layout-content)',
        readingWidth: 'var(--layout-reading)',

        pageGutter: 'var(--page-gutter)',
        mobilePageGutter: 'var(--page-gutter-mobile)',

        sectionPaddingY: 'var(--section-padding-y)',
        mobileSectionPaddingY: 'var(--section-padding-y-mobile)',

        headerHeight: 'var(--header-height)',
        mobileHeaderHeight: 'var(--header-height-mobile)',

        controlHeightSmall: 'var(--control-height-sm)',
        controlHeight: 'var(--control-height)',
        controlHeightLarge: 'var(--control-height-lg)',
    },

    zIndex: {
        header: 'var(--z-header)',
        modal: 'var(--z-modal)',
    },

    /*
     * CSS değişkenleri @media koşullarında kullanılamadığı için
     * breakpoint değerleri burada normal string olarak kalıyor.
     */
    breakpoints: {
        sm: '640px',
        md: '760px',
        lg: '900px',
        xl: '1280px',
    },
};
