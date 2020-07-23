import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';

import headerImg from '../assets/images/prototypes/prototypes-header.png';

function PrototypesPage() {
    return (
        <div className="page">
            <HeaderComponent 
                bg="grey" 
                imgSrc={headerImg} 
                color="black" 
                text="Less Transactional, More Relationship Building" 
            />
        </div>
    );
}

export default PrototypesPage;