"use client";
import PageContainer from "../PageContainer";
import CareerTimeline from "./CareerTimeline";
import InfraDifferentials from "./InfraDifferentials";
import InfrastructureTechnologies from "./InfrastructureTechnologies";
import AcademicEducation from "./AcademicEducation";
import CoursesCertifications from "./CoursesCertifications";
import { experience } from "../../config/site.config";
import "./trajetoria.css";

export default function TrajetoriaPage() {
    return (
        <PageContainer title="Trajetória">
            <p className="intro-text">
                Comecei na infraestrutura de TI e hoje sou desenvolvedor. Os{" "}
                <strong>{experience.infraYears} anos em redes e servidores</strong> me dão uma visão completa
                de como uma aplicação funciona em produção, não só no código.
            </p>

            <CareerTimeline />
            <InfraDifferentials />
            <InfrastructureTechnologies />
            <AcademicEducation />
            <CoursesCertifications />
        </PageContainer>
    );
}
