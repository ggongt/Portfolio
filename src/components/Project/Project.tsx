import React from 'react';
import './Project.css';
import { projects } from '../../portfolio';
import AchievementCard from '../AhievementCard/AchievementCard'

function Project() {
    return (
        <section className="section--project" id="project">
            <div className="inner">

                <div className="project-title">
                    <p>{projects.title}</p>
                </div>

                <div className="project-cards">
                    {projects.lists.map((list, i) => {
                        return <AchievementCard achieves={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Project;