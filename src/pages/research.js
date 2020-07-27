import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import headerImg from '../assets/images/research/research-header.png';
import consumerPersona1 from '../assets/images/research/consumer-persona-1.jpg';
import consumerPersona2 from '../assets/images/research/consumer-persona-2.jpg';
import consumerPersona3 from '../assets/images/research/consumer-persona-3.jpg';
import consumerPersona4 from '../assets/images/research/consumer-persona-4.jpg';
import cloSectionHeader from '../assets/images/research/clo-section-header.png';
import marketSize from '../assets/images/research/marketsize.png';
import cloBank from '../assets/images/research/clo-bank-app.png';
import cloPulisher from '../assets/images/research/clo-publisher-app.png';
import stakeholderMap from '../assets/images/research/stakeholder-map.png';
import primaryConsumer from '../assets/images/research/primary-consumer.png';
import primaryMerchant from '../assets/images/research/primary-merchant.png';
import guerillaResearch from '../assets/images/research/guerilla-research.png';
import boothInterview from '../assets/images/research/booth-interview.png';
import superuserConsumer from '../assets/images/research/superuser-consumer.png';
import surveys from '../assets/images/research/surveys.png';
import semiStructure from '../assets/images/research/semi-structure-interview.png';
import superuserMerchant from '../assets/images/research/superuser-merchant.png';



function ResearchPage() {
    let consumerInsights = ["Deals can be viewed as a way to manipulate consumer spending rather than saving money", "Immediate and significant value must be shown to users in order to utilize CLO apps", "Offers need to be personalized in order for people to take advantage of them People want cashback offers that fit their lifestyles more", "However, security and privacy are important concerns for users when adopting new tech", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];
    let marketSizeClo = ["Card-linked offers are the second most popular advertising channel after social media marketing: $1B - $10B retail sales tied to CLOs. "];
    let bankApp = ["must be activated before they can be applied to the user’s purchase", "limited deals, with an expiration date of about 2 weeks from activation.", "save money in the form of cash back which averages around 5% of the total purchase.", "B2B(business-to-business) publishers like Cardlytics, act as a middle man between banks and merchants."];
    let consumerApp = ["offer cashback deals for credit and/or debit cards.", "average cash back offered on Dosh is 2-3%. Some merchants put a cap on how much cumulative cashback a customer can get.", "some apply CLOs automatically on purchases.", " have direct connections to merchants or access them through partnerships with rewards programs like Rewards Network."];
    let merhcantInsights = ["Merchants need a way to calculate value of marketing using CLOs. They do not trust the existing reports by rewards programs and believe that they take credit of their returning customers.", "POS systems can potentially help merchants gain trust in rewards programs.", "Local merchants are struggling to compete with online retail giants like Amazon.", "Merchants want more control over where their business is advertised.", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];

    let consumerResearch = [
        {
            text: "Guerilla Research",
            imgSrc: guerillaResearch,
            alt: "Mia conducting guerilla research",
            link: false
        },
        {
            text: "Booth Interviews",
            imgSrc: boothInterview,                      //fix image
            alt: "Kyle conducting a booth interview",
            link: false
        },
        {
            text: "Superuser Interviews",
            imgSrc: superuserConsumer,                      //fix image
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: false
        },
        {
            text: "Surveys post on Social Media",
            imgSrc: surveys,                      //fix image
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: false
        }
    ];

    let merchantResearch = [
        {
            text: "Semi-Structure Interviews with Small Business Owners",
            imgSrc: semiStructure,                       //fix image
            alt: "Owner of restaurant being interviewed",
            link: false
        },
        {
            text: "Power Merchant Interview",
            imgSrc: superuserMerchant,                      //fix image
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
                text="Research"
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

            <TextSectionComponent
                title="Bank CLO's vs Publisher CLO's"
                content="CLO’s are offered through two mediums: banking (such as PNC) and what are known as publisher apps (Dosh, Rakuten, Pei, etc.)."
                bg="white"
            />

            <SubsectionComponent
                title="Bank App"
                textType="list"
                content={bankApp}
                imgSrc={cloBank}
                bg="white"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Consumer App"
                textType="list"
                content={consumerApp}
                imgSrc={cloPulisher}
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SingleImageComponent
                bg="grey"
                imgSrc={stakeholderMap}
                alt="Stakeholder map"
                title="Stakeholder Map"
            />

            <SectionHeaderComponent
                title="Primary Research: Consumer"
                imgSrc={primaryConsumer}
                alt="card-linked offers on phone and PoS"
                bg="white"
            />

            <ListComponent
                title="Our Approach"
                subtitle="To better understand our users we carried out an intensive set of research involving a wide array of research methodologies:"
                list={consumerResearch}
                forSection="research-page-consumerresearch"
                bg="grey"
            />

            <InsightsComponent
                title="Insights"
                subtitle="To synthesize all of our research into findings, we performed several round of affinity diagraming.  Our most important insights were:"
                forSection="consumerResearchInsights"
                insights={consumerInsights}
            />

            <CarouselComponent
                title="Personas"
                subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into the following personas:"
                forSection="consumerPersonaCarousel"
                images={consumerPersonaCarousel}    //update images!!
                bg="grey"
            />

            <SectionHeaderComponent
                title="Primary Research: Merchants"
                imgSrc={primaryMerchant}
                alt="Mia conducts and interview with a restaurant owner."
                bg="white"
            />

            <ListComponent
                title="Our Approach"
                subtitle="To better understand merchants we conducted rounds several of interviews including a super-merchant interview:"
                list={merchantResearch}
                forSection="research-page-merchantresearch"
                bg="grey"
            />

            <InsightsComponent
                title="Insights"
                subtitle="After the interviews we once again used affinity diagram to find these major insights:"
                forSection="storyboards"
                insights={consumerInsights}
            />

            <CarouselComponent
                title="Personas"
                subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into these two personas:"
                forSection="consumerPersonaCarousel"
                images={consumerPersonaCarousel} // change these
                bg="grey"
            />
        </div>
    );
}

export default ResearchPage;
