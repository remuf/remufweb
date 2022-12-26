import React from 'react';
import About from './About_2';
import Works from './Works_5';
import Service from '../Components/Service_3';
//import Carousel from '../Components/Carousel';
import Youtube from './Youtube';

export default function Home() {
return (
<div className='container-fluid'>
    <div className="body">
        <div className="body__about">
            <About />
        </div>
        <div className="body__service">
            <Service />
        </div>
        <div className="body__work">
            <Works />
        </div>
        <div className="body__carousel">
            <Youtube />
        </div>
    </div>
</div>
)
}