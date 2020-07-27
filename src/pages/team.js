import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import PhotoGalleryComponent from '../components/PhotoGallery/PhotoGalleryComponent';

import headerImg from '../assets/images/team/team-header.png';
import teamImage from '../assets/images/team/team.png';
import numoLogo from '../assets/images/team/numo-logo.png';
import mia from '../assets/images/team/mia.png';
import miaGrey from '../assets/images/team/mia-grey.png';
import kyle from '../assets/images/team/kyle.png';
import kyleGrey from '../assets/images/team/kyle-grey.png';
import lauren from '../assets/images/team/lauren.png';
import laurenGrey from '../assets/images/team/lauren-grey.png';
import bin from '../assets/images/team/bin.png';
import binGrey from '../assets/images/team/bin-grey.png';
import niharika from '../assets/images/team/niharika.png';
import niharikaGrey from '../assets/images/team/niharika-grey.png';

function TeamPage() {
    let members = [
        {
            name: "Mia Manavalan",
            key: "mia",
            description: "Mia graduated from Northwestern University with a Bachelors's in Cognitive Science and Economics. After, she worked at IBM as a technology consultant in the Cognitive Business Decision sector. She worked with clients to implement Watson solutions, such as- conversation agents and predictive technologies for the retail and healthcare industries. As an MHCI student, she is taking courses in Mobile & IoT Technologies, Persuasive Design, and is doing an independent research project on improving machine learning and data visualization dashboards for physicians.",
            title: "Project Manager",
            imgSrcGreyscale: miaGrey,
            imgSrcColor: mia,
            linkedin: "https://www.linkedin.com/in/miamanavalan/",
            email: "mailto:mmanaval@andrew.cmu.edu"
        },
        {
            name: "Kyle Barron",
            key: "kyle",
            description: "Kyle graduated from the University of Wisconsin — Madison in 2018 with a B.S. in psychology, as well as a minor in computer science. He is interested in user research, particularly in the field of live streaming and how audiences interact with one another. As a student in the MHCI program at CMU, he is taking courses related to user-centered research, as well as working on an independent study project looking into information availability on the popular live streaming platform Twitch.",
            title: "Research Lead",
            imgSrcGreyscale: kyleGrey,
            imgSrcColor: kyle,
            linkedin: "https://www.linkedin.com/in/kyledbarron/",
            email: "mailto:kdbarron@andrew.cmu.edu"
        },
        {
            name: "Lauren Whittingham",
            key: "lauren",
            description: "Lauren Whittingham worked for four years in a medical device and imaging company, after graduating from UC Berkeley with a BS in Mechanical Engineering. Inspired by her work managing new software projects, she decided to pursue UX. She worked for several startups in the Bay Area as a UX Research and Design Consultant before joining CMU’s MHCI program. She has taken courses in Persuasive Design and Machine Learning and is currently studying Lean Entrepreneurship, Document Design, and Service Design.",
            title: "Product Manager",
            imgSrcGreyscale: laurenGrey,
            imgSrcColor: lauren,
            linkedin: "https://www.linkedin.com/in/laurenwhittingham/",
            email: "mailto:lwhittin@andrew.cmu.edu"
        },
        {
            name: "Xiaobin(Bin) Li",
            key: "bin",
            description: "Bin graduated from ArtCenter College of Design in Product Design. In 2016.6–2018.8, he worked as a user experience designer at BloomSky Inc., Burlingame. BloomSky was a startup that was dedicated to the development of IoT weather stations and weather data services to both consumers and enterprise clients. At BloomSky, he led the design of a new toB product line, SPOT. As an MHCI student, he is taking Corporate Startup Lab, and working on the CubeRover project, which aims at creating low-cost, mobile robotic lunar access for companies, governments, universities and non-profits across the world.",
            title: "Design Lead",
            imgSrcGreyscale: binGrey,
            imgSrcColor: bin,
            linkedin: "https://www.linkedin.com/in/xiaobinli/",
            email: "mailto:xiaobin2@andrew.cmu.edu"
        },
        {
            name: "Niharika Jayanthi",
            key: "niharika",
            description: "Niharika received a Bachelor’s degree in Computer Engineering in 2016 from University of Mumbai. She has three years of industry work experience as a front-end developer at Tata Consultancy Services. As part of a horizontal unit ‘Digital Enterprise System Solutions’, she has worked in multiple domains such as banking, insurance, aerospace and racing. She is currently a part of the Master’s in Human-Computer Interaction program at CMU, learning courses such as User-Centered Research, Interactive Data Science and Human-AI Interaction.",
            title: "UX Engineer",
            imgSrcGreyscale: niharikaGrey,
            imgSrcColor: niharika,
            linkedin: "https://www.linkedin.com/in/niharika-j/",
            email: "mailto:njayanth@andrew.cmu.edu"
        }
    ];

    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                title="Team"
            />

            <SectionHeaderComponent
                title="Our Multi-Disciplinary Team"
                content="Our 5-person team spans multiple expertises, including research, design, engineering, consulting, and product management. We were able to collaborate and use each person’s strengths to make sure we were framing the problem space in a way that made sense to all of us."
                imgSrc={teamImage}
                alt="Teams members looking like snaccs on zoom."
                bg="white"
            />

            <PhotoGalleryComponent 
                members={members}
            />

            <SectionHeaderComponent
                title="About numo"
                content="numo is part startup, part corporate innovation lab and part tech incubator. They are an independent subsidiary of a Fortune 500 financial institution. They look for unsolved problems in the financial industry and built innovative solutions for them using emerging technologies."
                imgSrc={numoLogo}         //change image
                alt="numo logo v exciting"
                bg="white"
            />
        </div>
    );
}

export default TeamPage;
