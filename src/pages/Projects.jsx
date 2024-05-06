import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import './Projects.css'
import projectsData from './projects.json';

const Projects = () => {
    return (<>
        <div>
            <Navbar/>
            <div className="contents">
                {projectsData.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    </>);
}

export default Projects; 
