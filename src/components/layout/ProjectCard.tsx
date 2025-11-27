import React from "react";

interface ProjectCardProps {
    projectName: string;
    projectTechno: [];
    projectImage: string;
    projecTitle: string;
    gitHubUrl?: string;
    projectUrlDemo?: string
}
const ProjectCard: React.FC<ProjectCardProps> =  ({projectImage, projectName, projectTechno, projectUrlDemo, projecTitle}) => {
    return(
        <div >
            En cours...
        </div>
    )
}

export default ProjectCard