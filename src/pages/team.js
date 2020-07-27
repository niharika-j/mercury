import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';

import headerImg from '../assets/images/team/team-header.png';
import teamImage from '../assets/images/team/team.png';
import numoLogo from '../assets/images/team/numo-logo.png';

function TeamPage() {
    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                text="Team"
            />

            <SectionHeaderComponent
                title="Our Multi-Disciplinary Team"
                content="Our 5-person team spans multiple expertises, including research, design, engineering, consulting, and product management. We were able to collaborate and use each person’s strengths to make sure we were framing the problem space in a way that made sense to all of us."
                imgSrc={teamImage}
                alt="Teams members looking like snaccs on zoom."
                bg="white"
            />

            <SingleImageComponent
                imgSrc={null}
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
