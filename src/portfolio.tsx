import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Mr.Kong',
	title: 'Hello, I\'m Sungeon Kong',
	subTitle: "I'm a developer and engineer who always strives for data acquisition, processing, and automation, constantly seeking new ideas.",
	role: "Backend Developer & Data Engineer",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/ggongt',
	linkedin: 'https://www.linkedin.com/in/sungeon-kong-4998a51a7/',
	email: '2ndggong@gmail.com',
	facebook: "",
	twitter: "",
	instagram: "",
	medium: "",
	stackoverflow: ""
};

export const skills = {
	title: "I Can Do 💻",
// 	subTitle: "subtitle for skill",
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-python", text: "Python", proficiency: 90},
		{fontAwesome: "fab fa-docker", text: "Docker", proficiency: 80},
		{fontAwesome: "fas fa-database", text: "MySQL", proficiency: 80},
		{fontAwesome: "fas fa-file", text: "NoSQL", proficiency: 50},
		{fontAwesome: "fab fa-linux", text: "Linux", proficiency: 60},
		{fontAwesome: "fab fa-java", text: "Java", proficiency: 40},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 30},
	],
	view: true
};

export const experience = {
	title: "Experience 🧑‍💻",
	lists: [
		{
			date: "2009.03~2014.02",
			company: "Hanyang University (Seoul)",
			role: "Undergraduate",
			summary: "Bachelor's degree, Dept. of Computer Science",
		},
		{
			date: "2014.03~2019.02",
			company: "Graduate School of Hanyang University (Seoul)",
			role: "Graduate Student",
		    summary: "Master's and Doctor's Integrated Course Completion, Dept. of Computer and Software",
		},
		{
			date: "2019.01~",
			company: "Wonderful Platform",
			role: "AI Developer and Data Engineer",
		    summary: "AI Conversation Generation Model Developer and Data Analysis Team Leader",
		}
	],
	view: true
}


export const projects = {
	title: "Projects 📑",
    // subTitle: "subtitle for achievement",
	lists: [
		{
// 			img: require("./assets/HRED.jpg"),
// 			alt: "I'm sad..",
			title: "대화데이터 학습 및 대화생성모델 개발",
			date: "2019.01~2019.07",
			desc: "인공지능 돌봄 로봇 탑재 어르신 전용 대화 데이터 학습 및 대화 생성 모델 설계 및 개발"
		},
		{
// 			img: require("./assets/godofinfantcare.jpg"),
// 			alt: "I'm sad..",
			title: "육아의신 개발 및 프로젝트 리딩",
			date: "2019.06~2022.01",
			desc: "연세대학교 세브란스 정신의학과 교수 신의진 교수 저서(지식베이스) 기반 AI 인공지능 육아 상담 플랫폼 '육아의신' 서비스 기획, 서버 개발 및 프로젝트 리딩'"
		},
		{
// 			img: require("./assets/sad-icon.png"),
// 			alt: "I'm sad..",
			title: "비대면 원격근무 어플리케이션 아바딘웍스 개발 및 프로젝트 리딩",
			date: "2021.03~2022.02",
			desc: "크래들 기반 비대면 원격근무 '아바딘웍스' 서버 개발 및 프로젝트 리딩'"
		},
		{
// 			img: require("./assets/sad-icon.png"),
// 			alt: "I'm sad..",
			title: "시니어 라이프로그 및 헬스케어 데이터 분석 모델 및 대시보드 API 개발",
			date: "2020.03~2024.03",
// 			desc: "인공지능 돌봄 로봇 기반 라이프로그 데이터 분석 및 시각화 모델 기획 및 대시보드 Fastapi 서버 개발"
			desc: "인공지능 돌봄 로봇 기반 라이프로그 및 헬스케어 데이터 파이프라인 구축 및 대시보드 Fastapi 서버 개발"
		},
		{
// 			img: require("./assets/sad-icon.png"),
// 			alt: "I'm sad..",
			title: "주파수응답센서 기반 화재/침입 감지 모델 개발",
			date: "2021.04~2024.08",
			desc: "공간 주파수 반향 센서 기반의 댁내 화재/침입 감지 모델 개발 진행 중"
		},
		{
// 			img: require("./assets/sad-icon.png"),
// 			alt: "I'm sad..",
			title: "정부과제(70억원 규모) 다수 수주 및 프로젝트 리딩 경험 보유",
			date: "2019.01~",
			desc: "인공지능 돌봄 로봇 기반 시니어케어 서비스 및 영유아 발달지원 사업 등 70억원 규모 정부과제 연구 설계 및 프로젝트 리딩 경험 보유"
		},
	],
	view: true
}

export const publications = {
	title: "Publications",

	lists: [
		{
			title: "Improving Recurrent Neural Network based Recommendation by Utilizing Embedding Matrix.",
			desc: "Myungha Kwon, Sung-eon Kong, Yong-suk Choi, July 2018, KCC",
			url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07485268"
		},
		{
			title: "Word2Vec based Collaborative Filtering for Movie Rating Prediction.",
			desc: "Geun-sik Jeon, Sung-eon Kong, Yong-suk Choi, Dec 2017, KCC",
			url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07322318"
		},
	],
	view: true
}

export const patents = {
	title: "Patents",

	lists: [
		{
			title: "Method and System for Classifying Natural Language Sentence/Paragraph Readability in Educational Environment for HRI",
			desc: "Registered July 20, 2018",
			url: "https://doi.org/10.8080/1020160159834"
		},
		{
			title: "System for Processing Integrated Interface",
			desc: "Registered August 5, 2021",
			url: "https://doi.org/10.8080/1020190156740"
		},
		{
			title: "System for Helper using Rotation Pattern of Cradle",
			desc: "Registered September 10, 2021",
			url: "https://doi.org/10.8080/1020200007197"
		},
		{
			title: "Inspection Condition Optimization System",
			desc: "Registered March 30, 2021",
			url: "https://doi.org/10.8080/1020190156737"
		},
		{
			title: "Dangerous Situation Monitoring Device in Space Based on Frequency Response Pattern and Method for Monitoring Dangerous Situation in Space using the Same",
			desc: "Registered May 9, 2022",
			url: "https://doi.org/10.8080/1020220003796"
		}

	],
	view: true
}

export const certificates = {
	title: "Certificates",

	lists: [
		{
			title: "Engineer Information Processing",
			desc: "May 2013, Human Resources Development Service of Korea",
			url: "#"
		},
		{
			title: "Industrial Engineer Information Processing",
			desc: "Sept. 2011, Human Resources Development Service of Korea",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: "Achievements And Certifications 🏆",
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			date: "2014.03~2019.02",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			date: "2014.03~2019.02",
			desc: "I'll try harder!"
		},
	],
	view: true
};


export const contactInfo = {
	title: "Contact To Me! 📞",
// 	subTitle: "subtitle for contact",
// 	introduce: "I'm a developer and engineer who always strives for data acquisition, processing, and automation, constantly seeking new ideas.",
	view: true
}