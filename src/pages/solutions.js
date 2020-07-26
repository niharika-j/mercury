import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import SingleImageComponent from '../components/SingleImage/SingleImageComponent';
import InsightsComponent from '../components/Insights/InsightsComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';

import headerImg from '../assets/images/solutions/solutions-header.png';
import marketSize from '../assets/images/research/marketsize.png';

function SolutionsPage() {

    let text1 = [""];


    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                text="Less Transactional, More Relationship Building"
            />

            <SectionHeaderComponent
                title="Final Products"
                content="We are proud to introduce our final product Mercury named after the roman god of merchants and messaging.  Mercury is a two part product with a merchant side focused on the creation and control of CLO’s and the metrics specific to these CLO’s and a consumer side focused on sending and receiving deals "
                imgSrc={marketSize}
                alt="card-linked offers on phone and PoS"
                bg="white"
            />

            <SingleImageComponent
                imgSrc={marketSize}
            />

        </div>
    );
}

export default SolutionsPage;
