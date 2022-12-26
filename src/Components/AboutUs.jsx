import React from 'react';
import './custom.css';
import about from '../Images/about-2.JPG';
import CEO from '../Images/sdk.jpeg';

export default function AboutUs() {
return (
<div className='contain container-fluid py-4'>
  <div className="container-fluid pt-3 gap-5">
    <div className="row gap-5 mt-2" style={{ minHeight:"100vh", height:"auto"}}>
      <div className="col-xs-12 col-sm-6 col-md-6 align-self-center">
        {/* <div className="wrap wrap__ab">
          <div className="pic pic__profile">
          </div>
        </div> */}
        <img className="custom mx-auto d-block shadow" src={about} alt="about description"
          style={{width:"90%", maxHeight:"500px", height:"auto", borderRadius:"6%"}} />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-5  align-self-center">
        <div className="d-flex flex-column ">
          <h1 className='text-dark pb-3 ps-3'>About Remuf</h1>
          <p className='text-dark fs-5 ps-3 fw-light'>
            Raute Upliftment Foundation (RUF) Nepal is a non-profit making social and humanitarian national
            organization established for uplifting the Raute tribes of Nepal. It is one of the first organisation to
            provide
            food, health, Education, social awareness, and basic facilities to
            Ratue tribe. Its main objectives are to serve, uplift
            and preserve centuries old unique racial, ethnic and cultural identity of the nomadic Rautes of Nepal. It
            further aims at helping and providing them with their racial and ethnic rights and dignity. </p>
          <p className='text-dark ps-3 fs-5 fw-light'>The foundation has been serving the Raute people who have been
            isolated and ignored from the main
            stream of Nepalese society for centuries.</p>
        </div>

      </div>
    </div>
  </div>
  <div className="container-fluid py-3 my-3" style={{minHeight:"60vh", height:"auto"}}>
    <div className="text-center w-75 mx-auto py-3">
      <h1 className='fs-1 fw-noraml fw-bold lh-sm' style={{fontSize: "5rem",}}>Our Support</h1>
      <p className='fs-3  fw-light'>Supporting local communities since 2012 for their basic needs. </p>
    </div>
    <div className="row gap-2 mx-auto justify-content-evenly pt-3"
      style={{ width:"100%", minHeight:"60vh", height:"auto"}}>
      <div className="col-xs-12 col-sm-12 col-md-3 " id="p1">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <div className="text-center mb-4">
            <div className="wrap">
              <div className="pic kab"></div>
            </div>
            {/* <img className='rounded-circle' src={Food} alt="food" width="100px" height={"100px"}
              style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
          </div>
          <div className="text-center py-2">
            <h1 className='fs-3 fw-noraml lh-sm py-2'>Kabadiya</h1>
            <p className='fs-5 fw-light'>We provide support in their career development including
              fooding, housing, health, clothes, and education to Kabadiya communities.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-3" id="p2">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <div className="text-center mb-4">
            <div className="wrap">
              <div className="pic majhi"></div>
            </div>
            {/* <img className='rounded-circle' src={Food} alt="food" width="100px" height={"100px"}
              style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
          </div>
          <div className="text-center py-2 w-100">
            <h1 className='fs-3 fw-noraml lh-sm py-2'>Majhi</h1>
            <p className='fs-5 fw-light'>
              We provide support in their career development including
              fooding, housing, health, clothes, and education to Kabadiya communities.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-3" id="p3">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <div className="text-center mb-4">
            <div className="wrap">
              <div className="pic kus"></div>
            </div>
            {/* <img className='rounded-circle' src={Education} alt="food" width="100px" height={"100px"}
              style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
          </div>
          <div className="text-center py-2 w-100">
            <h1 className='fs-3 fw-noraml lh-sm py-2'>Kusbadiya</h1>
            <p className='fs-5 fw-light'>We provide support in their career development including
              fooding, housing, health, clothes, and education to Kabadiya communities.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="container-fluid gap-5" style={{backgroundColor:"#f4f4f4"}}>
    <div className="row gap-5" style={{ minHeight:"700px", height:"auto"}}>
      <div className="col-xs-12 col-sm-12 col-md-6 align-self-center">
        {/* <div className="wrap wrap__ab">
          <div className="pic pic__profile">
          </div>
        </div> */}
        <img className="custom rounded mx-auto " src={CEO} alt="about description"
          style={{width:"100%", height:"100%", padding:"10%"}} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-5  align-self-center">
        <div className="d-flex flex-column ">
          <h1 className='text-dark pb-3 ps-3'>Satya Devi Khadka</h1>
          <p className='text-dark fs-5 ps-3 fw-light'>People actually like you all who just so very unconditionally turn up and also do volunteer for all the very social causes
           and work only in the very direction for the welfare of our very society
           Personally what I have actually always observed is that usually everyone just wants to enjoy their very own lives even without giving even a little attention to others who are actually so very underprivileged as well as who are so very needy.
          Hats off to all you social workers who are just actually doing this very outstanding job.  </p>
          <p className='text-dark ps-3 fs-5 fw-light'>We have been serving the Raute, kabadiya, kusbadiya, majhi and other community who have been
            isolated and ignored from the main
            stream of Nepalese society. We are here for people and will continue support and service. </p>
          
        </div>

      </div>
    </div>
  </div>
</div>
)
}