// src/app/projects/[slug]/page.tsx
import { Metadata } from 'next'
import { getProject } from '@/lib/projects'
import ProjectDetailComponent from '@/components/projects/ProjectDetail'

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const project = await getProject(params.slug)
    if (!project) return {}

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.images[0]]
        }
    }
}

export async function generateStaticParams() {
    const projects = await getProjects()
    return projects.map((project) => ({
        slug: project.slug
    }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug)

    if (!project) {
        return <div>Project not found</div>
    }

    return <ProjectDetailComponent project={project} />
}