import React from 'react';
import './Certificate.css';
import { certificates } from '../../portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

function Certificate() {
    return (
        <section className="section--project" id="certificate">
            <div className="inner">

                <div className="project-title">
                    <p>{certificates.title}</p>
                </div>

                <div className="project-cards">
                    {certificates.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Certificate;