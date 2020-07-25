import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';

import headerImg from '../assets/images/research/research-header.png';
import stakeholder from '../assets/images/research/stakeholder-map.png';
import consumerPersona1 from '../assets/images/research/consumer-persona-1.jpg';
import consumerPersona2 from '../assets/images/research/consumer-persona-2.jpg';
import consumerPersona3 from '../assets/images/research/consumer-persona-3.jpg';
import consumerPersona4 from '../assets/images/research/consumer-persona-4.jpg';
import cloSectionHeader from '../assets/images/research/clo-section-header.png';

function ResearchPage() {
    let consumerInsights = ["Deals can be viewed as a way to manipulate consumer spending rather than saving money", "Immediate and significant value must be shown to users in order to utilize CLO apps", "Offers need to be personalized in order for people to take advantage of them People want cashback offers that fit their lifestyles more", "However, security and privacy are important concerns for users when adopting new tech", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];

    let consumerPersonaCarousel = [
        {
            imgSrc: consumerPersona1,
            alt: "consumer persona 1"
        },
        {
            imgSrc: consumerPersona2,
            alt: "consumer persona 2"
        },
        {
            imgSrc: consumerPersona3,
            alt: "consumer persona 3"
        },
        {
            imgSrc: consumerPersona4,
            alt: "consumer persona 4"
        }
    ];

    return (
        <div className="page">
            <HeaderComponent 
                bg="grey" 
                imgSrc={headerImg} 
                color="black" 
                text="Less Transactional, More Relationship Building" 
            />

            <SectionHeaderComponent
                title="What are card-linked offers" 
                content="Card-linked offers (CLO’s) are a form of deal that is attached to one’s card. This deal is received automatically with the use of that card, usually in the form of cash back." 
                imgSrc={cloSectionHeader} 
                alt="card-linked offers on phone and PoS" 
                bg="white"
            />

            <InsightsComponent 
                title="Insights" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                forSection="consumerResearchInsights" 
                insights={consumerInsights} 
            /> 
            
            <SingleImageComponent 
                bg="grey" 
                imgSrc={stakeholder} 
                alt="Stakeholder map" 
                title="Stakeholder Map" 
            />
            
            <CarouselComponent 
                title="Personas" 
                subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into the following personas." 
                forSection="consumerPersonaCarousel" 
                images={consumerPersonaCarousel} 
                bg="white" 
            />

            <TextSectionComponent
                title="Bank CLO's vs Publisher CLO's" 
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
                bg="white"
            />
        </div>
    );
}

export default ResearchPage;