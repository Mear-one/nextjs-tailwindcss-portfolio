import { projectsData } from '../../data/projectsData';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const { category } = context.params;
    const decodedCategory = decodeURIComponent(category);
    const projects = projectsData.filter(item => item.category === decodedCategory);
    return {
        props: { projects, category: decodedCategory },
    };
}

export default function CategoryPage({ projects, category }) {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">{category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {projects.map(project => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <a>
                            <img src={project.img} alt={project.title} className="rounded-lg mb-2" />
                            <div className="text-center">{project.title}</div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}