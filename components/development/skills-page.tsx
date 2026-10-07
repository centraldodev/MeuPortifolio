"use client";
import PageContainer from "../PageContainer";
import SkillsSection from "./skills-section";
import "./skills-section.css";

export default function SkillsPage() {
    return (
        <PageContainer title="Habilidades">
            <p className="intro-text">
                Stack que uso no dia a dia para construir meus projetos web e mobile.
            </p>

            <SkillsSection />
        </PageContainer>
    );
}
