import Link from "next/link";
import { projetos } from "../../data/projects";
import ProjectCard from "../development/ProjectCard";
import "../development/projects.css";

export default function FeaturedProjects() {
    return (
        <section className="featured-section">
            <div className="featured-header">
                <h2 className="section-title">
                    <i className="bi bi-folder-fill"></i>
                    Projetos em destaque
                </h2>
                <Link href="/projetos" className="featured-ver-todos">
                    Ver todos os {projetos.length} projetos <i className="bi bi-arrow-right"></i>
                </Link>
            </div>

            <div className="projetos-grid">
                {projetos.slice(0, 3).map((projeto) => (
                    <ProjectCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}
