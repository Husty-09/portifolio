export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  badge?: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    figma?: string;
  };
  year: string;
  status: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    slug: 'sreidi',
    title: 'SREIDI',
    subtitle: 'Protótipo UX para Ministério de Minas e Energias',
    description:
      'Protótipo em alta fidelidade de sistema interno para Ministério de Minas e Energias, aplicando GOV.BR Design System oficial.',
    longDescription:
      'Liderei o levantamento de requisitos, análise de dados e prototipagem visual em alta fidelidade para uma aplicação interna do Ministério de Minas e Energias, aplicando o GOV.BR Design System oficial. O projeto foi reconhecido como destaque entre pares pela excelência técnica e qualidade de design, entregue através de parceria de extensão universitária com o Centro Universitário de Brasília (CEUB). Apresentei o protótipo final presencialmente para a equipe de engenharia completa do cliente e liderança sênior, coletando feedback e iterando em sessões colaborativas.',
    badge: '⭐ Premiado',
    technologies: ['Figma', 'GOV.BR Design System', 'UX/UI', 'Análise de Dados'],
    links: {
      figma: 'https://www.figma.com/proto/r2MvwpRUMS8drNF87gQzXQ/SREIDI',
    },
    year: '2025',
    status: 'completed',
  },
  {
    slug: 'hustycore',
    title: 'HustyCore',
    subtitle: 'Framework Visual CSS/HTML',
    description:
      'Framework visual com 20+ componentes reutilizáveis, reduzindo boilerplate CSS em ~40% em projetos.',
    longDescription:
      'Construí uma biblioteca de componentes e framework visual completo com 20+ componentes reutilizáveis, reduzindo significativamente boilerplate CSS em aproximadamente 40% em projetos que adotaram. Configurei um pipeline CI/CD robusto com Husky, Commitlint, lint-staged e standard-version, automatizando versionamento semântico e aplicando Conventional Commits em 100% dos commits. Implementei suites de testes abrangentes com Vitest e Testing Library, alcançando >85% cobertura de componentes e eliminando regressões UI críticas. Implantei em Vercel com análise em tempo real, monitorando Core Web Vitals (LCP, FID, CLS) para manter performance dentro dos padrões "Bom" do Google.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vitest',
      'Vercel',
    ],
    links: {
      demo: 'https://hustycore.vercel.app/pt',
      github: 'https://github.com/Husty-09/HustyCore',
    },
    year: '2026',
    status: 'in-progress',
  },
  {
    slug: 'hustysudoku',
    title: 'HustySudoku',
    subtitle: 'Jogo PWA Sudoku Otimizado para iOS',
    description:
      'Aplicação PWA com menos de 100KB de bundle, offline-first com service workers e instalação nativa em iOS/Android.',
    longDescription:
      'Projetei um jogo Sudoku completo com foco em performance, entregando uma experiência nativa em iOS com bundle inicial inferior a 100KB, sem necessidade de distribuição via App Store. Construí uma PWA offline-first robusta com service workers, permitindo gameplay completo sem conexão de rede e instalação direta na tela inicial de iOS e Android. Implementei um layout completamente responsivo com Tailwind CSS, validando em 5+ breakpoints (320px–1440px) para garantir UX consistente em qualquer dispositivo.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PWA',
      'Service Workers',
      'Vercel',
    ],
    links: {
      demo: 'https://sudoku-husty.vercel.app',
      github: 'https://github.com/Husty-09/HustySudoku',
    },
    year: '2026',
    status: 'completed',
  },
  {
    slug: 'govdata-br',
    title: 'GovData-BR',
    subtitle: 'Dashboard de Dados Governamentais',
    description:
      'Dashboard interativo correlacionando indicadores IBGE em 27 estados com mandatos políticos 2002–2024.',
    longDescription:
      'Dashboard interativo que correlaciona indicadores econômicos do IBGE em 27 estados brasileiros com mandatos políticos de 2002–2024, descobrindo padrões invisíveis em dados brutos através de visualizações dinâmicas. Construído com TypeScript e Next.js, consumindo 3+ APIs governamentais públicas (IBGE, TSE) para renderizar gráficos dinâmicos com filtros multidimensionais avançados. Atualmente integrando dados eleitorais da TSE para habilitar análise cross-domain; primeira versão estável planejada para Q3 2026.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Chart.js',
      'APIs Governamentais',
      'Vercel',
    ],
    links: {
      demo: 'https://govdata-br.vercel.app',
      github: 'https://github.com/Husty-09/GovData-BR',
    },
    year: '2026',
    status: 'in-progress',
  },
];
