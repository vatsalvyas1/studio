import type { Metadata } from 'next';
import ProjectsClientPage from '@/components/projects-client-page';

export const metadata: Metadata = {
  title: 'Our Work',
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
