import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import './custom.css';
export default function About() {

let navigate = useNavigate();

return (
<div className='contain container-fluid py-4'>
  <div className="container-fluid gap-5">
    <div className="row gap-5" style={{ minHeight:"700px", height:"auto"}}>
      <div className="col-xs-12 col-sm-12 col-md-6 align-self-center">
        <div className="wrap wrap__ab">
          <div className="pic pic__profile">
          </div>
        </div>
        {/* <img className="custom rounded mx-auto d-block shadow" src={about} alt="about description" /> */}
      </div>
      <div className="col-xs-12 col-sm-12 col-md-5   align-self-center">
        <h1 className='text-dark pb-3'>About Remuf</h1>
        <p className='text-dark fs-5 fw-light'>Raute Upliftment Foundation (RUF) Nepal is a non-profit making social and
          humanitarian national
          organization established for uplifting the Raute tribes of Nepal. Its main objectives are to serve, uplift
          and preserve centuries old unique racial, ethnic and cultural identity of the nomadic Rautes of Nepal. It
          further aims at helping and providing them with their racial and ethnic rights and dignity. </p>
        <p className='text-dark fs-5 fw-light'>The foundation has been serving the Raute people who have been isolated
          and ignored from the main
          stream of Nepalese society for centuries.</p>
        <button className='donation p-2 rounded-pill text-white' onClick={()=>navigate('/about')}
          >Learn More</button>

      </div>
    </div>
  </div>
</div>
)
}