import React from 'react';


export default function Works() {
return (
<div className="container-fluid py-3 my-3" style={{minHeight:"60vh", height:"auto"}}>
    <div className="text-center w-75 mx-auto pt-3">
        <h1 className='fs-1 fw-noraml fw-bold lh-sm' style={{fontSize: "5rem",}}>We Serve People In Need</h1>
        <p className='fs-3  fw-light'>Even on the darkest day, there is still hope light will come. </p>
    </div>
    <div className="row gap-2 mx-auto justify-content-evenly " style={{ width:"100%", minHeight:"60vh", height:"auto"}}>
        <div className="col-xs-12 col-sm-6 col-md-3 " id="p1">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <div className="text-center mb-4">
                    <div className="wrap">
                        <div className="pic pic__food"></div>
                    </div>
                    {/* <img className='rounded-circle' src={Food} alt="food" width="100px" height={"100px"}
                        style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
                </div>
                <div className="text-center py-2 w-75">
                    <h1 className='fs-3 fw-noraml lh-sm py-2'>Food & Water</h1>
                    <p className='fs-5 fw-light'>Providing constant support for food and drinking water to local tribes,
                    different backwarded communities. Also, providing nutritional diets and social awareness campaigns.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3" id="p2">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <div className="text-center mb-4">
                    <div className="wrap">
                        <div className="pic pic__health"></div>
                    </div>
                    {/* <img className='rounded-circle' src={Food} alt="food" width="100px" height={"100px"}
                        style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
                </div>
                <div className="text-center py-2 w-75">
                    <h1 className='fs-3 fw-noraml lh-sm py-2'>Health</h1>
                    <p className='fs-5 fw-light'>REMUF Nepal provide all the neccessary support for health, by
                    launching series of health related campaigns and provide medical aids to all victims suffering from
                    various diseases. 
                    </p>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3" id="p3">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <div className="text-center mb-4">
                    <div className="wrap">
                        <div className="pic pic__education"></div>
                    </div>
                    {/* <img className='rounded-circle' src={Education} alt="food" width="100px" height={"100px"}
                        style={{backgroundImage:"none", backgroundColor:"#f4f4f4"}} /> */}
                </div>
                <div className="text-center py-2 w-75">
                    <h1 className='fs-3 fw-noraml lh-sm py-2'>Education</h1>
                    <p className='fs-5 fw-light'>Providing support in education by launching series of campaigns, seminars and hands on 
                    training. Such as providing support for tailoring, literacy, diseases and drugs.
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
)
}