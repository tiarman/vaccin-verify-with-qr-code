import React from 'react';
import surokkha from '../../../../Images/surokkha.svg';
import colm3 from '../../../../Images/colm3.png';
import colm4 from '../../../../Images/colm4.png';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{backgroundColor: "#f26d3e", color:"white", fontSize: "14px", fontWeight: "600"}}>
    <div style={{padding: "50px"}} className="row">
        <div className="col-md-3">
            <img style={{width: "140px"}} src={surokkha} alt="" />

        </div>
        <div className="col-md-3">
        <a>জিজ্ঞাসা </a><br/><br/>
        <a>সহায়িকা</a><br/><br/>
        <a>প্রাইভেসি পলিসি</a><br/><br/>
        <a>টার্মস অফ সার্ভিসেস</a> <br/> <br/>
        <a>অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ</a><br/>
        </div>
        <div className="col-md-3">
            <p>কারিগরি সহায়তায় - তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর </p>
            <img style={{width:"100%"}} src={colm3} alt="" />

        </div>
        <div className="col-md-3">
            <p>সহযোগী সংস্থাসমূহ - </p>
            <img style={{width:"100%"}} src={colm4} alt="" />
            
        </div>
    </div>
</div>
    );
};

export default Footer;