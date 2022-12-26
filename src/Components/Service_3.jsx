import {React} from 'react';
import first from '../Images/One.JPG';
import second from '../Images/Two.JPG';



export default function Service() {

const url = [
{image : first,
title: "Social Campaigns",
text: "Social campaigns are the besy way to provide awareness to a group of communities and people."
},
{image: second,
title: "Build Society",
text: "Together let us create a better society for Rautey's. Together we can."},
{image: second,
title: "Save Child",
text: "Your simple act of kindness will make a major impact on someones life. Please think."}
]
return (
<div className="container-fluid py-3 my-3 mx-auto" style={{minHeight:"70vh", height:"auto"}} >
    <div className="text-center w-75 mx-auto pb-3" id="work" >
        <h1 className='text-dark fs-1 fw-bold pb-1'>Act of kindness</h1>
        <p className='text-dark fw-light fs-3'>Be a source of hope and inspiration in someone's life</p>
    </div>
    <div className="container-fluid">
        <div className="row mx-auto justify-content-evenly py-3" style={{minHeight:"70vh", height:"auto"}}>
            {
            url.map((result, index)=>{
            const {title, text} = result;
            return (
            <div className="col-xs-12 col-sm-12 col-md-4 py-2" id="p1" key={index}>
                <div className="d-flex shadow justify-content-center align-items-center flex-column h-100">
                    <div className="text-center mb-4">
                        <div className="wrap">
                            {index === 0 && <div className="pic cam"></div> }
                            {index === 1 && <div className="pic soc"></div> }
                            {index === 2 && <div className="pic chi"></div> }
                        </div>
                    </div>
                    <div className="text-center py-2 w-75">
                        <h1 className='fs-3 fw-noraml lh-sm py-2'>{title}</h1>
                        <p className='fs-5 fw-light'>{text} </p>
                    </div>
                </div>
            </div>
            )
            })
            }
        </div>
    </div>
    {/* next page */}
    <div className="container-fluid w-100 changebg" style={{minHeight:"70vh", height:"auto", width:"100vw"}}>
        <div className="row ">
            <div className="col"></div>
            <div className="col rounded" style={{minHeight:"70vh",height:"auto", }}>
                <div className="text-center d-flex flex-column justify-content-center align-items-center  rounded shadow"
                    style={{maxWidth:"400px", minHeight:"400px", backgroundColor:"#f4f4f4" }}>
                    <h1 className='text-dark pt-2'>Start today change today</h1>
                    <p className='text-dark py-2'>Change does not happens overnight. Have patience</p>
                    {/* <button className='donation p-2 rounded-pill text-white'>Donate</button> */}
                </div>
            </div>
        </div>
    </div>
</div>
)
}