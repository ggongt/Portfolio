import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
// import Achievement from './Achievement/Achievement';
import Publication from './Publication/Publication'
import Patent from './Patent/Patent'
import Certificate from './Certificate/Certificate'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import { greeting, skills, experience, projects, publications, patents, certificates, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{projects.view && <Project />}
            {publications.view && <Publication />}
            {patents.view && <Patent />}
            {certificates.view && <Certificate />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;

// 			{publications.view && <Publications />}
// 			{patents.view && <Patents />}
// 			{certificates.view && <Certificates />}