import { BrainCircuit, BookOpenText, Gamepad2, ChartNoAxesCombined, Sparkles, HeartHandshake, Lightbulb } from 'lucide-react';

export const experiences = [
  {
    title: 'Palace Games',
    tag: 'RETOS INTERACTIVOS',
    description: 'Desafía tu lógica y descubre cómo funcionan el azar, los patrones y las decisiones.',
    icon: Gamepad2,
    link: '/games',
    accent: 'gold'
  },
  {
    title: 'Palace Academy',
    tag: 'APRENDIZAJE',
    description: 'Aprende probabilidad, finanzas personales y pensamiento crítico a tu ritmo.',
    icon: BookOpenText,
    link: '/academy',
    accent: 'violet'
  },
  {
    title: 'Palace AI',
    tag: 'MENTOR INTELIGENTE',
    description: 'Recibe explicaciones educativas y orientación sobre el contenido de la plataforma.',
    icon: BrainCircuit,
    link: '/ai',
    accent: 'violet'
  },
  {
    title: 'Palace Progress',
    tag: 'TU EVOLUCIÓN',
    description: 'Conoce tus fortalezas, revisa tus resultados y encuentra qué aprender después.',
    icon: ChartNoAxesCombined,
    link: '/progress',
    accent: 'gold'
  },
];

export const pillars = [
  { title: 'Aprender', text: 'Comprende la probabilidad y las finanzas mediante ejemplos cercanos.', icon: BookOpenText },
  { title: 'Reflexionar', text: 'Cuestiona los mitos sobre el azar y reconoce los riesgos.', icon: Lightbulb },
  { title: 'Decidir mejor', text: 'Fortalece tu pensamiento crítico con desafíos y orientación.', icon: HeartHandshake },
];

export const steps = [
  { number: '01', title: 'Explora', description: 'Elige una experiencia o un curso.' },
  { number: '02', title: 'Aprende', description: 'Resuelve retos y estudia conceptos.' },
  { number: '03', title: 'Comprende', description: 'Recibe explicaciones con Palace AI.' },
  { number: '04', title: 'Evoluciona', description: 'Conoce tu progreso de aprendizaje.' },
];

export const highlights = [
  { number: '01', category: 'PROBABILIDAD', title: 'La ilusión del patrón', detail: '¿Puede tu intuición predecir lo aleatorio?', icon: Sparkles },
  { number: '02', category: 'FINANZAS', title: 'Presupuesto inteligente', detail: 'Decide cómo distribuir tus recursos.', icon: BookOpenText },
  { number: '03', category: 'LÓGICA', title: 'El código del palacio', detail: 'Descifra pistas y piensa de forma estratégica.', icon: Lightbulb },
];
