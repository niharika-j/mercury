import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import headerImg from '../assets/images/solutions/solutions-header.png'
import consumerDeal from '../assets/images/solutions/consumer-deal.png';
import consumerFeed from '../assets/images/solutions/consumer-feed.png';
import consumerMap from '../assets/images/solutions/consumer-map.png';
import consumerReview from '../assets/images/solutions/consumer-review.png';
import consumerToplist from '../assets/images/solutions/consumer-toplist.png';
import merchantMessage from '../assets/images/solutions/merchant-message.png';
import merchantMetric from '../assets/images/solutions/merchant-metric.png';
import merchantNewDeal from '../assets/images/solutions/merchant-new-deal.png';
import merchantProfile from '../assets/images/solutions/merchant-profile.png';
import posMetric from '../assets/images/solutions/pos-metric.png';
import posOnboarding from '../assets/images/solutions/pos-onboarding.png';
import posSaving from '../assets/images/solutions/pos-saving.png';


function SolutionsPage() {

    let cloTechList = [
        {
            text: "Metrics",
            imgSrc: posMetric,
            alt: "Mia conducting guerilla research",
            link: false
        },
        {
            text: "Onboarding",
            imgSrc: posOnboarding,                      //fix image
            alt: "Kyle conducting a booth interview",
            link: false
        },
        {
            text: "Money saved directly on purchase",
            imgSrc: posSaving,                      //fix image
            alt: "Laptop with merchant application open and mobile screen with consumer app open",
            link: false
        },
    ];

    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                text="Less Transactional, More Relationship Building"
            />

            <TextSectionComponent
                title="Final Products"
                content="We are proud to introduce our final product Mercury named after the Roman god of merchants and messaging.  Mercury is a two part product with a merchant side focused on the creation and control of CLO’s and the metrics specific to these CLO’s and a consumer side focused on sending and receiving deals "
                bg="white"
            />

            <TextSectionComponent
                title="Merchant App"
                content="Mercury is a tool for small local merchants that allows them to use CLO’s to market themselves more efficiently to their preferred market segments.  They can see actionable metrics and insights allowing them to adjust their marketing techniques."
                bg="white"
            />

            <SubsectionComponent
                title="Showing unique metrics possible through CLO’s: traffic, top list data, items vs return customers, and demographic info."
                textType="paragraph"
                imgSrc={merchantMetric}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title="Setting up the information for the business page on the consumer app."
                textType="paragraph"
                imgSrc={merchantProfile}     //fix image
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Sending deals to users directly (with the ability to narrow down audience based on interests and other factors) and creating deals for users of the consumer app to send to their friends."
                textType="paragraph"
                imgSrc={merchantNewDeal}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title="Sending messages to users about promotions, new items, updates, etc."
                textType="paragraph"
                imgSrc={merchantMessage}     //fix image
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />

            <TextSectionComponent
                title="Consumer App"
                content="As result of more targeted CLO’s, consumers receive deals that are more targeted to them directly- and fit their natural shopping behavior.  The consumer app not only allows for users to send and receive these deals but discover new businesses and form a community supporting local businesses."
                bg="white"
            />

            <SubsectionComponent
                title="Finding businesses to patronise through the map and list (with the ability to filter and search)."
                textType="paragraph"
                imgSrc={consumerMap}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title="Receiving targeted deals from friends and businesses, and sending deals to friends."
                textType="paragraph"
                imgSrc={consumerDeal}     //fix image
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Creating top lists based on business type (restaurant, service, store), location, and business type (salon, brunch, market)."
                textType="paragraph"
                imgSrc={consumerToplist}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title="Adding friends, following businesses, writing reviews, viewing past restaurants visited."
                textType="paragraph"
                imgSrc={consumerReview}     //fix image
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Viewing updates and posts from businesses as well as new."
                textType="paragraph"
                imgSrc={consumerFeed}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <ListComponent
                title="CLO Technology"
                subtitle="One of our unique value propositions is integrating the merchant’s PoS with CLO’s."
                list={cloTechList}
                forSection="solutions-page-clotech"
                bg="grey"
            />

        </div>
    );
}

export default SolutionsPage;
