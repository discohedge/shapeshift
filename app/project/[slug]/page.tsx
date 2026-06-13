import { Project, projects } from "@/app/data/projects";
import ProjectClient from "./ProjectClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen p-10 font-mono">
        Project not found
      </main>
    );
  }

  return <ProjectClient project={project as Project} />;
}
