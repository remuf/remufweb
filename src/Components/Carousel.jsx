import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrPrevious, GrNext} from 'react-icons/gr';
import React from "react";
import Slider from "react-slick";

export default function Carousel({data}) {

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow : <GrPrevious size={32} /> ,
  nextArrow : <GrNext size={32} />,
  initialSlide: 0,
// centerMode: true,
  className: "carousel",
  responsive: [{
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }},
  {
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2
}},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }}
]};
return (
<div className="container-fluid py-3" style={{backgroundColor:"#fbf8f9"}}>
  <div className="text-center py-3">
    <h2 className="fs-1 ">Our Blogs</h2>
    <p className="fw-light fs-3">Some of our blogs from youtube</p>
  </div>
  <Slider {...settings} style={{margin:" auto", padding:"10vh, 0"}}>
    {
    data.map((value, index) =>{
    const {url} = value;
    return <div className="text-center mx-2" key={index}>
      <div className="context text-center" style={{ width:"100%", minHeight: "300px", margin:"auto"}}>
        <iframe className="rounded-8" title="main title" style={{width:"100%", height:"300px", borderRadius:"18px"}}
          src={url }>
        </iframe>
      </div>
    </div>


    })
    }
  </Slider>
</div>
);
}