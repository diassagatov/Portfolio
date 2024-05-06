import React from 'react';

const ProjectCard = ({project}) => {
    return<>
        <div className="card">
            <h1 className="title">{project.name}</h1>
            <img src={"./" + project.name + "/" + project.image
            } alt={project.name + " Image"
            } className="project-image" />
            <p>{project.short.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                {line}<br />
                </React.Fragment>
            ))}</p>
        </div>    
    </>

}

export default ProjectCard;