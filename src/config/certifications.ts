export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  color: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Google / Coursera',
    date: 'March 17, 2026',
    id: 'GZKU52JCEHF8',
    color: 'from-orange-500/20',
    link: 'https://coursera.org/share/5bdfb40f5ee09645d2becf709b3a08b0'
  },
  {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'JAN 2026',
    id: 'ID: GCP-PE-4452',
    color: 'from-blue-500/20',
    link: ''
  },
  {
    title: 'Meta React Specialization',
    issuer: 'Meta / Coursera',
    date: 'NOV 2025',
    id: 'ID: META-FE-8812',
    color: 'from-cyan-500/20',
    link: ''
  }
];
