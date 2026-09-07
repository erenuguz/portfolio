// devicon slug'ları (devicons/devicon reposundaki gerçek dosya adları).
// Not: bazı logoların yalnızca "plain" versiyonu var (ör. GraphQL), bazılarının
// resmi rengi zaten siyah/beyaz (ör. Next.js, GitHub, Express) — bu bizim
// seçimimiz değil, kendi marka kimlikleri.
const DEVICON_SLUGS = {
    react: 'react/react-original',
    'node.js': 'nodejs/nodejs-original',
    nodejs: 'nodejs/nodejs-original',
    'next.js': 'nextjs/nextjs-original',
    nextjs: 'nextjs/nextjs-original',
    typescript: 'typescript/typescript-original',
    javascript: 'javascript/javascript-original',
    postgresql: 'postgresql/postgresql-original',
    mongodb: 'mongodb/mongodb-original',
    mysql: 'mysql/mysql-original',
    redis: 'redis/redis-original',
    graphql: 'graphql/graphql-plain',
    docker: 'docker/docker-original',
    kubernetes: 'kubernetes/kubernetes-original',
    git: 'git/git-original',
    github: 'github/github-original',
    java: 'java/java-original',
    python: 'python/python-original',
    express: 'express/express-original',
    'express.js': 'express/express-original',
    'vue.js': 'vuejs/vuejs-original',
    vuejs: 'vuejs/vuejs-original',
    angular: 'angularjs/angularjs-original',
    redux: 'redux/redux-original',
    sass: 'sass/sass-original',
    tailwind: 'tailwindcss/tailwindcss-original',
    tailwindcss: 'tailwindcss/tailwindcss-original',
    figma: 'figma/figma-original',
    linux: 'linux/linux-original',
    nginx: 'nginx/nginx-original',
    html: 'html5/html5-original',
    html5: 'html5/html5-original',
    css: 'css3/css3-original',
    css3: 'css3/css3-original',
    aws: 'amazonwebservices/amazonwebservices-original-wordmark',
};

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function SkillCard({name, iconUrl}) {
    const slug = DEVICON_SLUGS[name?.toLowerCase()];
    const src = iconUrl || (slug ? `${CDN_BASE}/${slug}.svg` : null);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    flexShrink: 0,
                }}
            >
                {src ? (
                    <img
                        src={src}
                        alt={name}
                        width={20}
                        height={20}
                        loading="lazy"
                        style={{
                            display: 'block',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                ) : (
                    // Eşleşme bulunamazsa küçük bir nötr işaretçi
                    <span
                        aria-hidden="true"
                        style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#D9D5CB',
                        }}
                    />
                )}
            </span>
            <span
                style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#3A3A3A',
                }}
            >
                {name}
            </span>
        </div>
    );
}
