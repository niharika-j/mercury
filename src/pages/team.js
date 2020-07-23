import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';

import headerImg from '../assets/images/team/team-header.png';

function TeamPage() {
    return (
        <div className="page">
            <HeaderComponent bg="grey" imgSrc={headerImg} color="black" text="Less Transactional, More Relationship Building" />
        </div>
    );
}

export default TeamPage;