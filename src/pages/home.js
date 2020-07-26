import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import TextOnImageComponent from '../components/TextOnImage/TextOnImageComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import solution from '../assets/images/home/solution-header.png';
import probStatementBg from '../assets/images/home/prob-statement-bg.png';
import sectionHeaderSolution from '../assets/images/home/section-header-solution.png';
import consumerAppSubsection from '../assets/images/home/consumer-app-subsection.png';
import merchantAppSubsection from '../assets/images/home/merchant-app-subsection.png';
import projectApproachResearch from '../assets/images/home/project-research.png';
import projectApproachIdeatingPrototyping from '../assets/images/home/project-ideating-prototyping.png';
import projectFinalProduct from '../assets/images/home/project-final-product.png';

function HomePage() {
    let subsectionParagraphs = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"];
    let consumerAppList = ["Dedicated to local merhcants so they don't have to compete with chains", "Offers unique metrics through the combination of CLO and POS data", "Enables merchants to market themselves in a more targeted manner", "Merchants have full control over deals being offered"];
    let merchantAppList = ["Simpler onboarding through the PoS", "Deals are money saved on purchase as opposed to cashback", "Allows users to send and receive deals from friends", "Enables a closer connection with merchants"];

    let approachList = [
        {
            text: "Research",
            imgSrc: projectApproachResearch,
            alt: "Kyle and Lauren conducting Think Aloud Protocol session at the mall",
            link: true,
            url: "",
            linkText: "Learn more"
        },
        {
            text: "Ideating and Prototyping",
            imgSrc: projectApproachIdeatingPrototyping,
            alt: "Papers with initial prototype sketches",
            link: true,
            url: "",
            linkText: "Learn more"
        },
        {
            text: "Final Products",
            imgSrc: projectFinalProduct,
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: true,
            url: "",
            linkText: "Learn more"
        }
    ];



    return (
        <div className="page">
            <HeaderComponent
                bg="green"
                imgSrc={solution}
                color="white"
                text="Less Transactional, More Relationship Building"
            />

            <TextOnImageComponent
                title="Problem Statement"
                content="Card-linked offers(CLO) on debit cards were introduced by PNC. However, these offers did not gain traction amongst bank customers. Our team was asked to explore the CLO space to discover unmet needs of the customers and come up with better metrics to measure the value of a CLO for banks, merchants and customers."
                imgUrl={probStatementBg}
            />

            <SectionHeaderComponent
                title="Solution"
                content="We developed products for our two main stakeholders: local merchants and consumers.  The merchant side is focused on the creation and control of CLO’s and the metrics specific to these CLO’s while the consumer side is focused on sending and receiving deals."
                imgSrc={sectionHeaderSolution}
                bg="grey"
                alt="Final solution app on a laptop"
            />

            <SubsectionComponent
                title="Consumer App"
                textType="list"
                content={consumerAppList}
                imgSrc={consumerAppSubsection}
                bg="white"
                isButton={true}
                buttonText="Learn More"
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Merchant App"
                textType="list"
                content={merchantAppList}
                imgSrc={merchantAppSubsection}
                bg="grey"
                isButton={true}
                buttonText="Learn More"
                url=""
                alignImg="left"
            />
            <ListComponent
                title="Our Approach"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                list={approachList}
                forSection="home-page-approach"
                bg="white"
            />
        </div>
    );
}

export default HomePage;
