
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Server, Layout, Cloud, Database, Shield, MessageSquare, Terminal, Cpu, PenTool } from 'lucide-react';

interface TechStackProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    skills: PortfolioData['skills'];
}

// Map categories to Lucide icons
const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('backend') || lower.includes('programming')) return <Server className="w-8 h-8 text-orange-500" />;
    if (lower.includes('frontend') || lower.includes('frameworks')) return <Layout className="w-8 h-8 text-blue-400" />;
    if (lower.includes('cloud') || lower.includes('devops')) return <Cloud className="w-8 h-8 text-purple-400" />;
    if (lower.includes('database')) return <Database className="w-8 h-8 text-green-400" />;
    if (lower.includes('security')) return <Shield className="w-8 h-8 text-yellow-400" />;
    if (lower.includes('messaging') || lower.includes('data')) return <MessageSquare className="w-8 h-8 text-amber-500" />;
    if (lower.includes('ai') || lower.includes('ml') || lower.includes('methodology')) return <Cpu className="w-8 h-8 text-pink-500" />;
    if (lower.includes('architecture')) return <PenTool className="w-8 h-8 text-indigo-400" />;
    return <Terminal className="w-8 h-8 text-gray-400" />;
};

// Start of the simple-icons base URL
const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

// Helper to get icon URL for specific technologies
const getTechIconUrl = (tech: string) => {
    // 1. Remove parenthetical info e.g. "Java (Proficient)" -> "Java"
    const cleanName = tech.split('(')[0].trim().toLowerCase();

    // 2. Map common names to simple-icons slugs
    const mappings: Record<string, string> = {
        "java": "java",
        "python": "python",
        "typescript": "typescript",
        "javascript": "javascript",
        "html/css/javascript": "html5", // Just pick one primary
        "rest apis": "openapi",
        "websocket": "socketdotio",
        "spring boot": "springboot",
        "angular": "angular",
        "react": "react",
        "hibernate": "hibernate",
        "flask": "flask",
        "expressjs": "express",
        "nextjs": "nextdotjs",
        "aws": "amazonwebservices",
        "kubernetes": "kubernetes",
        "docker": "docker",
        "git": "git",
        "github actions": "githubactions",
        "jenkins": "jenkins",
        "terraform": "terraform",
        "cloudformation": "amazonaws",
        "gcp": "googlecloud",
        "mysql": "mysql",
        "postgresql": "postgresql",
        "oracle (pl/sql)": "oracle",
        "dynamodb": "amazondynamodb",
        "mongodb": "mongodb",
        "redis": "redis",
        "kafka": "apachekafka",
        "elasticsearch": "elasticsearch",
        "rabbitmq": "rabbitmq",
        "keycloak": "keycloak",
        "oauth2": "oauth",
        "jwt": "jsonwebtokens",
        "postman": "postman",
        "swagger/openapi": "swagger",
        "junit": "junit5",
        "linux": "linux",
        "agile": "jirasoftware",
        "cursor": "cursor",
        "chatgpt": "openai",
    };

    const slug = mappings[cleanName] || cleanName.replace(/[\s\/\.]/g, '');
    return `${SIMPLE_ICONS_CDN}/${slug}`;
};

export function TechStack({ darkMode, language, skills }: TechStackProps) {
    return (
        <section id="stack" className={`py-32 ${darkMode ? 'bg-[#0B1120] text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-6 inline-block">
                            {language === 'en' ? 'Technical Expertise' : 'Expertise Technique'}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        {language === 'en' ? 'Technology Stack' : 'Stack Technologique'}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        {language === 'en'
                            ? 'Building enterprise-grade applications with cutting-edge technologies'
                            : 'Construction d\'applications d\'entreprise avec des technologies de pointe'}
                    </motion.p>
                </div>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills && skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl h-full ${darkMode
                                    ? 'bg-[#151B2E] border border-white/5 hover:border-blue-500/30'
                                    : 'bg-white border border-gray-100 hover:border-blue-500/30'
                                } transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group`}
                        >
                            {/* Category Header */}
                            <div className="flex flex-col items-start mb-6">
                                <div className={`p-3 rounded-2xl mb-4 ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                                    {getCategoryIcon(category.category)}
                                </div>
                                <h3 className="text-xl font-bold">{category.category}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.items.map((skill) => {
                                    const cleanName = skill.split('(')[0].trim();
                                    return (
                                        <div key={skill} className="flex items-center gap-3">
                                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                                <img
                                                    src={getTechIconUrl(skill)}
                                                    alt=""
                                                    className={`w-full h-full object-contain ${darkMode ? 'invert' : ''}`}
                                                    onError={(e) => {
                                                        // Fallback if icon fails to load
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-800'} transition-colors`}>
                                                {cleanName}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
