import React from 'react';
import './custom.css';
import about from '../Images/about-1.JPG';
export default function About() {
  return (
    <div className='contain container-fluid pt-4'>
      <div className="container-md d-flex gap-5">
        <div className="row d-flex align-items-center justify-content-center vw-100 gap-5 flex-sm-column flex-md-column flex-lg-row" style={{ minHeight:"700px", height:"auto"}}>
          <div className="col d-flex justify-content-center align-items-center align-items-sm-start">
              <img className="custom rounded mx-auto d-block" src={about} alt="about description" width={"500px"} height={"450px"}/>
          </div>
          <div className="col d-flex justify-content-center align-items-start flex-column">
            <h1 className='text-white'>01. About Remuf</h1>
            <p className='text-white'>Raute Upliftment Foundation (RUF) Nepal is a non-profit making social and humanitarian national
            organization established for uplifting the Raute tribes of Nepal. Its main objectives are to serve, uplift
            and preserve centuries old unique racial, ethnic and cultural identity of the nomadic Rautes of Nepal. It
            further aims at helping and providing them with their racial and ethnic rights and dignity. </p>
            <p className='text-white'>The foundation has been serving the Raute people who have been isolated and ignored from the main
            stream of Nepalese society for centuries. The Raute people have been leading a nomadic life. They roam
            in the dense forested areas in the Mid-western and Far-western regions of Nepal.</p>
            <p className='text-white'>Raute Upliftment Foundation (RUF) Nepal has been working to uplift and preserve the Raute nomadic
            tribes for their human and racial rights and identity. The foundation has established its regional offices
            in several districts to serve and help the Raute population on education, health, sanitation and hygiene
            for them supporting with their unique and amazing racial culture, tradition, livelihood, history and
            ethnicity in true sense.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
