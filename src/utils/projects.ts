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
  const formattedCode = codeProjects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image, // Usa la proprietà corretta del tuo tipo ProjectCode
    category: 'code' as const,
    tags: p.tech || [], // Usa 'tech' come definito solitamente nel codice
    link: p.liveUrl || p.repoUrl, // Sostituisci con le proprietà reali del tuo tipo (es. repoUrl o liveUrl)
    slug: `code-${p.id}`,
  }));

  // Mappatura progetti di design/marketing
  const formattedDesign = designProjects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description || '',
    image: p.image, // Usa la proprietà corretta (es. image)
    category: (p.category === 'marketing' ? 'marketing' : 'design') as 'marketing' | 'design',
    tags: p.tools || p.software || [], // Adatta in base a come gestisci i tag nel design (es. tools o simili)
    link: p.liveUrl, // Sostituisci con la proprietà reale del link di design
    slug: `design-${p.id}`,
    challenge: p.challenge,
    solution: p.solution,
    designPhilosophy: p.designPhilosophy,
    gallery: p.gallery || [],
    metrics: p.metrics || [],
  }));

  return [...formattedCode, ...formattedDesign];
};