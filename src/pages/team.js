import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';

import headerImg from '../assets/images/team/team-header.png';
import marketSize from '../assets/images/research/marketsize.png';

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
                imgSrc={marketSize}         //change image
                alt="Teams members looking like snaccs on zoom."
                bg="white"
            />

            <SingleImageComponent
                imgSrc={marketSize}         //this whole component needs to be updated
            />

            <SectionHeaderComponent
                title="About numo"
                content="numo is part startup, part corporate innovation lab and part tech incubator. They are an independent subsidiary of a Fortune 500 financial institution. They look for unsolved problems in the financial industry and built innovative solutions for them using emerging technologies."
                imgSrc={marketSize}         //change image
                alt="numo logo v exciting"
                bg="white"
            />
        </div>
    );
}

export default TeamPage;
