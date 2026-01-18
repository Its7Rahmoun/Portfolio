import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export interface PortfolioData {
    profile: {
        name: string;
        title: string;
        bio: string;
        location: string;
        email: string;
        social: {
            github: string;
            linkedin: string;
            twitter: string;
        };
    };
    skills: Array<{
        category: string;
        items: string[];
    }>;
    projects: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
        link?: string;
        tags: string[];
        year?: string;
        highlights?: Array<{ label: string }>;
        github?: string;
        coverName?: string;
    }>;
    personalProjects: Array<{
        title: string;
        description: string;
        github: string;
        tags: string[];
    }>;
    experience: Array<{
        year: string;
        title: string;
        titleFr?: string; // Made optional as user provided mixed data
        company: string;
        description?: string;
        details?: string[]; // For bullet points
        metrics?: Array<{ label: string; value: string }>;
        technologies?: string[];
    }>;
    aboutHighlights: Array<{
        icon: string;
        text: string;
        textFr: string;
    }>;
    certifications: Array<{
        name: string;
        year: string;
        issuer?: string;
    }>;
    education: Array<{
        degree: string;
        school: string;
        year: string;
        description?: string;
    }>;
    languages: Array<{
        language: string;
        level: string;
        code: string; // ISO country code for flag
        percentage: number;
    }>;
    contact: {
        message: string;
    };
}

export const usePortfolioData = () => {
    const { data, error, isLoading } = useSWR<PortfolioData>('/data/portfolio.json', fetcher, {
        revalidateOnFocus: false, // Low latency: don't constantly revalidate
        dedupingInterval: 60000, // Cache for 1 minute
    });

    return {
        data,
        isLoading,
        isError: error,
    };
};
