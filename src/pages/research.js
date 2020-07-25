import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import headerImg from '../assets/images/research/research-header.png';
import stakeholder from '../assets/images/research/stakeholder-map.png';
import consumerPersona1 from '../assets/images/research/consumer-persona-1.jpg';
import consumerPersona2 from '../assets/images/research/consumer-persona-2.jpg';
import consumerPersona3 from '../assets/images/research/consumer-persona-3.jpg';
import consumerPersona4 from '../assets/images/research/consumer-persona-4.jpg';
import cloSectionHeader from '../assets/images/research/clo-section-header.png';
import marketSize from '../assets/images/research/marketsize.png';

function ResearchPage() {
    let consumerInsights = ["Deals can be viewed as a way to manipulate consumer spending rather than saving money", "Immediate and significant value must be shown to users in order to utilize CLO apps", "Offers need to be personalized in order for people to take advantage of them People want cashback offers that fit their lifestyles more", "However, security and privacy are important concerns for users when adopting new tech", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];
    let marketSizeClo = ["Card-linked offers are the second most popular advertising channel after social media marketing: $1B - $10B retail sales tied to CLOs. "];
    let bankApp = ["must be activated before they can be applied to the user’s purchase", "limited deals, with an expiration date of about 2 weeks from activation.", "save money in the form of cash back which averages around 5% of the total purchase.", "B2B(business-to-business) publishers like Cardlytics, act as a middle man between banks and merchants."];
    let consumerApp = ["offer cashback deals for credit and/or debit cards.", "average cash back offered on Dosh is 2-3%. Some merchants put a cap on how much cumulative cashback a customer can get.", "some apply CLOs automatically on purchases.", " have direct connections to merchants or access them through partnerships with rewards programs like Rewards Network."];
    let merhcantInsights = ["Merchants need a way to calculate value of marketing using CLOs. They do not trust the existing reports by rewards programs and believe that they take credit of their returning customers.", "POS systems can potentially help merchants gain trust in rewards programs.", "Local merchants are struggling to compete with online retail giants like Amazon.", "Merchants want more control over where their business is advertised.", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];

    let consumerResearch = [
        {
            text: "Guerilla Research",
            imgSrc: marketSize,                       //fix image
            alt: "Mia conducting guerilla research",
            link: false
        },
        {
            text: "Booth Interviews",
            imgSrc: marketSize,                      //fix image
            alt: "Kyle conducting a booth interview",
            link: false
        },
        {
            text: "Superuser Interviews",
            imgSrc: marketSize,                      //fix image
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: false
        },
        {
            text: "Surveys post on Social Media",
            imgSrc: marketSize,                      //fix image
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: false
        }
    ];

    let merchantResearch = [
        {
            text: "Semi-Structure Interviews with Small Business Owners",
            imgSrc: marketSize,                       //fix image
            alt: "Owner of restaurant being interviewed",
            link: false
        },
        {
            text: "Power Merchant Interview",
            imgSrc: marketSize,                      //fix image
            alt: "Kyle conducting a booth interview", //fix alt
            link: false
        }
    ];

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

            <SubsectionComponent
                title="Market Size of CLO"
                textType="paragraph"
                content={marketSizeClo}
                imgSrc={marketSize}
                bg="grey"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title="Bank App"
                textType="list"
                content={bankApp}
                imgSrc={marketSize}    //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Consumer App"
                textType="list"
                content={consumerApp}
                imgSrc={marketSize}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SingleImageComponent
                bg="grey"
                imgSrc={stakeholder}
                alt="Stakeholder map"
                title="Stakeholder Map"
            />

            <SectionHeaderComponent
                title="Primary Research: Consumer"
                imgSrc={cloSectionHeader}       //fix image
                alt="card-linked offers on phone and PoS"
                bg="white"
            />

            <ListComponent
                title="Our Approach"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                list={consumerResearch}
                forSection="research-page-consumerresearch"
                bg="grey"
            />

            <InsightsComponent
                title="Insights"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                forSection="consumerResearchInsights"
                insights={consumerInsights}
            />

            <CarouselComponent
                title="Personas"
                subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into the following personas."
                forSection="consumerPersonaCarousel"
                images={consumerPersonaCarousel}
                bg="white"
            />

            <SectionHeaderComponent
                title="Primary Research: Merchants"
                imgSrc={cloSectionHeader}       //fix image
                alt="Mia conducts and interview with a restaurant owner."
                bg="white"
            />

            <ListComponent
                title="Our Approach"
                subtitle="To better understand merchants we we conducted rounds of interviews:"
                list={merchantResearch}
                forSection="research-page-merchantresearch"
                bg="grey"
            />

            <InsightsComponent
                title="Insights"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                forSection="merchantResearchInsights"
                insights={consumerInsights}
            />

            <CarouselComponent
                title="Personas"
                subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into the following personas."
                forSection="consumerPersonaCarousel"
                images={consumerPersonaCarousel} // change these
                bg="white"
            />
        </div>
    );
}

export default ResearchPage;
