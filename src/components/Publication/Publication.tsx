import React from 'react';
import './Publication.css';
import { publications } from '../../portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

function Publication() {
    return (
        <section className="section--project" id="publication">
            <div className="inner">

                <div className="project-title">
                    <p>{publications.title}</p>
                </div>

                <div className="project-cards">
                    {publications.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Publication;