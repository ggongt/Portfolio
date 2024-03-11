import React from 'react';
import './Patent.css';
import { patents } from '../../portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

function Patent() {
    return (
        <section className="section--project" id="patent">
            <div className="inner">

                <div className="project-title">
                    <p>{patents.title}</p>
                </div>

                <div className="project-cards">
                    {patents.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Patent;