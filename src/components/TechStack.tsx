import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Server, Layout, Cloud, Database, Shield, MessageSquare, Terminal, Cpu, PenTool } from 'lucide-react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { GlassCard } from '@/components/layout/GlassCard';

interface TechStackProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    skills: PortfolioData['skills'];
}

const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('backend') || lower.includes('programming')) return <Server className="h-7 w-7 text-orange-400" aria-hidden="true" />;
    if (lower.includes('frontend') || lower.includes('frameworks')) return <Layout className="h-7 w-7 text-blue-400" aria-hidden="true" />;
    if (lower.includes('cloud') || lower.includes('devops')) return <Cloud className="h-7 w-7 text-violet-400" aria-hidden="true" />;
    if (lower.includes('database')) return <Database className="h-7 w-7 text-emerald-400" aria-hidden="true" />;
    if (lower.includes('security')) return <Shield className="h-7 w-7 text-amber-400" aria-hidden="true" />;
    if (lower.includes('messaging') || lower.includes('data')) return <MessageSquare className="h-7 w-7 text-yellow-400" aria-hidden="true" />;
    if (lower.includes('ai') || lower.includes('ml') || lower.includes('methodology')) return <Cpu className="h-7 w-7 text-pink-400" aria-hidden="true" />;
    if (lower.includes('architecture')) return <PenTool className="h-7 w-7 text-indigo-400" aria-hidden="true" />;
    return <Terminal className="h-7 w-7 text-slate-400" aria-hidden="true" />;
};

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';

const getTechIconUrl = (tech: string) => {
    const cleanName = tech.split('(')[0].trim().toLowerCase();
    const mappings: Record<string, string> = {
        java: 'openjdk',
        python: 'python',
        typescript: 'typescript',
        javascript: 'javascript',
        'html/css/javascript': 'html5',
        'rest apis': 'openapiinitiative',
        websocket: 'socketdotio',
        'spring boot': 'springboot',
        angular: 'angular',
        react: 'react',
        hibernate: 'hibernate',
        flask: 'flask',
        'express.js': 'express',
        expressjs: 'express',
        'next.js': 'nextdotjs',
        nextjs: 'nextdotjs',
        aws: 'amazonwebservices',
        kubernetes: 'kubernetes',
        docker: 'docker',
        git: 'git',
        'github actions': 'githubactions',
        jenkins: 'jenkins',
        terraform: 'terraform',
        cloudformation: 'amazonaws',
        gcp: 'googlecloud',
        mysql: 'mysql',
        postgresql: 'postgresql',
        'oracle': 'oracle',
        dynamodb: 'amazondynamodb',
        mongodb: 'mongodb',
        redis: 'redis',
        kafka: 'apachekafka',
        elasticsearch: 'elasticsearch',
        rabbitmq: 'rabbitmq',
        keycloak: 'keycloak',
        oauth2: 'openid',
        jwt: 'jsonwebtokens',
        'openid connect': 'openid',
        'aws iam': 'amazonwebservices',
        'vpc security': 'amazonaws',
        postman: 'postman',
        'swagger/openapi': 'swagger',
        junit: 'junit5',
        linux: 'linux',
        agile: 'jirasoftware',
        'reinforcement learning': 'pytorch',
        'deep learning': 'tensorflow',
        nlp: 'huggingface',
        'ai-augmented development': 'openai',
        'multi-agent orchestration': 'openai',
        mcp: 'anthropic',
        'agent-to-agent': 'googlegemini',
        'prompt/context engineering': 'openai',
        'ci/cd': 'githubactions',
        microservices: 'istio',
        monolithic: 'dotnet',
        serverless: 'awslambda',
        'event-driven': 'apachekafka',
        oop: 'java',
        'design patterns': 'uml',
        'solid principles': 'refactoring',
    };

    const slug = mappings[cleanName] || cleanName.replace(/[\s/.]/g, '');
    return `${SIMPLE_ICONS_CDN}/${slug}`;
};

export function TechStack({ darkMode, language, skills }: TechStackProps) {
    return (
        <section id="stack" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionHeader
                    darkMode={darkMode}
                    badge={language === 'en' ? 'Technical Expertise' : 'Expertise Technique'}
                    title={language === 'en' ? 'Technology Stack' : 'Stack Technologique'}
                    subtitle={language === 'en'
                        ? 'Building enterprise-grade applications with cloud, agents, and reliable delivery.'
                        : 'Applications d’entreprise avec le cloud, les agents et une livraison fiable.'}
                />
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skills?.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: Math.min(index * 0.06, 0.3) }}
                        >
                            <GlassCard darkMode={darkMode} className="h-full p-6">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className={`rounded-2xl p-3 ${darkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                                        {getCategoryIcon(category.category)}
                                    </div>
                                    <h3 className="font-display text-lg font-bold">{category.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3">
                                            <img
                                                src={getTechIconUrl(skill)}
                                                alt=""
                                                className={`h-5 w-5 object-contain ${darkMode ? 'brightness-125' : ''}`}
                                                onError={(e) => {
                                                    e.currentTarget.style.visibility = 'hidden';
                                                }}
                                            />
                                            <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
