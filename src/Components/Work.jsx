import React from 'react';
import './custom.css';
import data from '../data.js';

export default function Work() {
  //console.log(data);
  return (
    <div className='container py-5'>
      <div className="row gap-3">
        <div className="container">
        <iframe className="w-100" width="90vw" height="543" src="https://www.youtube.com/embed/sqo1w5hF0XA" title="राउटेको दैनिक जिबन गुजारा गर्ने तरिका | Raute People's Daily Life Activities | REMUF Nepal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="container">
          <div className="row gap-2">
        {
          data.map((value, index) =>{
            const {url} = value;
            return <div className="col col-md col-lg col-sm-10"  style={{minwidth:"18rem"}} key={index}>
              <div className="card">
              <iframe 
              src={url }>
              </iframe>
              </div>
            </div>
            
          })
        }
        </div>
        </div>
       
        </div>
    </div>
  )
}
