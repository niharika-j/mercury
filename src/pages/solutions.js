import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import headerImg from '../assets/images/solutions/solutions-header.png';
import consumerApp from '../assets/images/solutions/consumer-app.png';
import consumerDeal from '../assets/images/solutions/consumer-deal.png';
import consumerFeed from '../assets/images/solutions/consumer-feed.png';
import consumerMap from '../assets/images/solutions/consumer-map.png';
import consumerReview from '../assets/images/solutions/consumer-review.png';
import consumerToplist from '../assets/images/solutions/consumer-toplist.png';
import merchantApp from '../assets/images/solutions/merchant-app.png';
import merchantMessage from '../assets/images/solutions/merchant-message.png';
import merchantMetric from '../assets/images/solutions/merchant-metric.png';
import merchantNewDeal from '../assets/images/solutions/merchant-new-deal.png';
import merchantProfile from '../assets/images/solutions/merchant-profile.png';
import metric from '../assets/images/solutions/metric.png';
import posMetric from '../assets/images/solutions/pos-metric.png';
import posOnboarding from '../assets/images/solutions/pos-onboarding.png';
import posSaving from '../assets/images/solutions/pos-saving.png';


function SolutionsPage() {

    let spaceHolder = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"];

    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                text="Less Transactional, More Relationship Building"
            />

            <TextSectionComponent
              title="title"
              bg=""
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <TextSectionComponent
              title="title"
              bg=""
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />

            <SubsectionComponent
                title=""
                textType="paragraph"
                content= {spaceHolder}
                imgSrc={merchantMetric}
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title=""
                textType="paragraph"
                content= {spaceHolder}
                imgSrc={merchantProfile}
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title=""
                textType="paragraph"
                content= {spaceHolder}
                imgSrc={merchantNewDeal}
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <SubsectionComponent
                title=""
                textType="paragraph"
                content= {spaceHolder}
                imgSrc={merchantMessage}
                bg="grey"
                isButton={false}
                url=""
                alignImg="right"
            />



        </div>
    );
}

export default SolutionsPage;
