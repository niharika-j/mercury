import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import SectionHeaderComponent from '../components/SectionHeader/SectionHeaderComponent';
import SubsectionComponent from '../components/Subsection/SubsectionComponent';
import ListComponent from '../components/List/ListComponent';
import TextSectionComponent from '../components/TextSection/TextSectionComponent';

import headerImg from '../assets/images/prototypes/prototypes-header.png';
import marketSize from '../assets/images/prototypes/consumer-prototypes.png';
import crazy8 from '../assets/images/prototypes/crazy8.png';
import dataFlow from '../assets/images/prototypes/dataFlow.png';
import ideationHeader from '../assets/images/prototypes/ideation-header.png';
import mashup from '../assets/images/prototypes/mashup.png';
import merchantPrototypeImage from '../assets/images/prototypes/merchant-prototype.png';
import storyboards from '../assets/images/prototypes/storyboards.png';
import merchantInterview from '../assets/images/prototypes/merchant-interview.png';

function PrototypesPage() {

  let scenariosAndStoryboards = ["To test our many ideas for both of our stakeholders we wrote scenarios and from those we drew storyboards. We then tested these with merchants and consumers to see which of these ideas resonated or evoked a response.  One of our major findings for merchants was they believed offering cashback/discounts was a good way to bring in first time customers. Consumers were interested in ideas involving: using spending data to create tailored offers,using recommendations from friends to decide where to go, and wanting to support small local businesses."];
  let merchantInterviews = ["Additionally, we conducted interview with merchants to determine what power they wanted to have over CLO’s and what type of deals they preferred as well as what type of metrics they wanted to see.  We found merchants wanted to have full control over the deals they offered , and each merchant had unique wants for the deals they offered.  Merchants wanted to see unique data they can only obtain through CLO’s including: traffic, top list information, items and return customers, and demographic info."];
  let consumerPrototype = ["For our consumer prototype we wanted one of our unique value propositions to be the ability to send and receive deals from friends, especially as this idea was well liked by both consumers and merchants.  We started with testing low fidelity sketches to refine the features of the app,  before moving up to mid fidelity, and finally high fidelity.  Between each version we iterated on our design and layout, improving not only the visual design, but making the app more intuitive and less cluttered."];
  let merchantPrototype = ["Based off of the unique data we found merchants were interested in and the unique value proposition of allowing users to send and receive deals from friends, we began developing our merchant facing product."]


  let ideatingList = [
      {
          text: "Crazy 8's",
          imgSrc: crazy8,                       //fix image
          alt: "Images of the crazy 8's we generated",
          link: false
      },
      {
          text: "Data Flows",
          imgSrc: dataFlow,                      //fix image
          alt: "A sample of a data flow map we created",
          link: false
      },
      {
          text: "Mashup Activity",
          imgSrc: mashup,                      //fix image
          alt: "The notes of the mashup activity we performed",
          link: false
      }
  ];

//   let storyboardCarousel = [
//       {
//           imgSrc: marketSize,                      //fix image
//           alt: "storyboard 1"
//       },
//       {
//           imgSrc: marketSize,                      //fix image
//           alt: "storyboard 2"
//       },
//       {
//           imgSrc: marketSize,                      //fix image
//           alt: "storyboard 3"
//       },
//       {
//           imgSrc: marketSize,                      //fix image
//           alt: "storyboard 4"
//       }
//   ];


    return (
        <div className="page">
            <HeaderComponent
                bg="grey"
                imgSrc={headerImg}
                color="black"
                title="Prototypes"
            />

            <SectionHeaderComponent
                title="Ideation and Testing"
                content="Throughout the past few months, we have been focused on creating our prototypes.  To determine how we would use our research insights to inform our solution we performed several types of ideating, created scenarios and tested storyboards, before finally beginning prototyping."
                imgSrc={ideationHeader}
                alt="card-linked offers on phone and PoS"
                bg="white"
            />

            <ListComponent
                title="Ideating"
                subtitle="We did several rounds of ideating to take our findings and turn them into potential ideas and features."
                list={ideatingList}
                forSection="prototypes-page-ideating"
                bg="grey"
            />

            <SubsectionComponent
                title="Scenarios and Storyboards"
                textType="paragraph"
                content={scenariosAndStoryboards}
                imgSrc={storyboards}
                bg="white"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Merchant Interviews"
                textType="paragraph"
                content={merchantInterviews}
                imgSrc={merchantInterview}
                bg="white"
                isButton={false}
                url=""
                alignImg="left"
            />

            <CarouselComponent
                title="Storyboards"
                // subtitle="From the research conducted we were able to find find commonalities in our interviewees and synthesized these into the following personas."
                forSection="consumerPersonaCarousel"
                images={null} // change these
                bg="grey"
            />

            <TextSectionComponent
                title="Prototypes"
                content="Once we established the ideas we wanted to incorporate in our product we began development.  The development of our products followed the cycle of design, test, and iterate."
                bg="white"
            />

            <SubsectionComponent
                title="Consumer Prototypes"
                textType="paragraph"
                content={consumerPrototype}
                imgSrc={marketSize}     //fix image
                bg="white"
                isButton={false}
                url=""
                alignImg="right"
            />

            <SubsectionComponent
                title="Merchant Prototypes"
                textType="paragraph"
                content={merchantPrototype}
                imgSrc={merchantPrototypeImage}
                bg="grey"
                isButton={false}
                url=""
                alignImg="left"
            />

        </div>

    );
}

export default PrototypesPage;
