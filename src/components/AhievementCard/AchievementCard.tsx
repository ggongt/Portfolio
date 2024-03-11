import React from 'react';
import './AchievementCard.css';

function AchievementCard({ achieves }: Props) {
    const Fade: any = require('react-reveal/Fade');
    return(
        <Fade bottom duration={800}>
        <div className="achieve-card">
            <div className="achieve-card-title">
                <p>{achieves.title}</p>
            </div>
            <div className="achieve-card-date">
                <p>{achieves.date}</p>
            </div>
            <div className="achieve-card-desc">
                <p>{achieves.desc}</p>
            </div>
        </div>
        </Fade>
    );
}

//             <div className="achieve-card-img">
//                 <img src={achieves.img} alt={achieves.alt}/>
//             </div>



interface Props {
    achieves: {
//         img: string,
//         alt: string,
        title: string,
        date: string,
        desc: string
    }
}
export default AchievementCard;
