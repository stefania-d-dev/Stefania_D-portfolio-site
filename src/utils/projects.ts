// utils/projects.ts
import { codeProjects } from '../data/codeProjects';
import { projects as designProjects } from '../data/designProjects';

export interface UnifiedProject {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: 'code' | 'design' | 'marketing';
  tags: string[];
  link?: string;
  slug: string;
  challenge?: string;
  solution?: string;
  designPhilosophy?: string;
  gallery?: string[];
  metrics?: { label: string; value: string }[];
}

export const getAllProjects = (): UnifiedProject[] => {
  // Mappatura progetti di codice
  const formattedCode = codeProjects.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    category: 'code' as const,
    tags: p.tech || p.tags || [],
    link: p.liveUrl || p.repoUrl,
    slug: `code-${p.id}`,
  }));

  // Mappatura progetti di design/marketing
  const formattedDesign = designProjects.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description || '',
    image: p.image,
    category: (p.category === 'marketing' ? 'marketing' : 'design') as 'marketing' | 'design',
    tags: p.tools || p.software || p.tags || [],
    link: p.liveUrl || p.link,
    slug: `design-${p.id}`,
    challenge: p.challenge,
    solution: p.solution,
    designPhilosophy: p.designPhilosophy,
    gallery: p.gallery || [],
    metrics: p.metrics || [],
  }));

  return [...formattedCode, ...formattedDesign];
};