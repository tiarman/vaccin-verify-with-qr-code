import React from 'react';
import NavPdfForm from '../AllPdfFormPage/NavPdfForm/NavPdfForm';
import certi from '../../../Images/certi.png'
import bdlogo from '../../../Images/bdlogo.png'
import mojib from '../../../Images/mojib.png'
import img1 from '../../../Images/img1.png'
import './PdfForm.css'
import Footer from '../AllPdfFormPage/Footer/Footer';

const PdfForm = () => {
    return (
        <div className='pdf-align1'>
           <div>
            <NavPdfForm />
           </div>
           <div className='container'>
           <div className='pdf2nd-section'>
            <div className="row">
                <div className="col-md-6">
                <p style={{fontSize: "25px"}}>টিকা সনদ যাচাই</p>
                </div>
                <div className="col-md-6">
                    <img style={{width:"160px"}} src={certi} alt="" />
                </div>
            </div>
           </div>
           </div>



           {/* Table */}

            <br />
            <br />
            <br />
            <br />
            <br />
           <div className='container'>
            <div style={{border: "1px solid gray", padding: "20px"}} className="row text-center">
                <div className="col-md-4">
                <img style={{width: "70px"}} src={bdlogo} alt="" />

                </div>
                <div className="col-md-4">
                    <p>Government of the People's Republic of Bangladesh Ministry of Health and Family Welfare</p>
                    
                </div>
                <div className="col-md-4">
                <img style={{width: "70px"}} src={mojib} alt="" />
                </div>

                <div style={{color: "green"}} className='col-md-12'>
                    <h2>Verification Successful !</h2>
                    <p>This Vaccination Certificate is Valid.</p>

                </div>
            </div>
           </div>




{/* Table */}





<div class='container'>

<table class="table table-bordered table-align-pdfform">
  <thead>
    <tr>
    <th colspan="2">Beneficiary Details (টিকা গ্রহণকারীর বিবরণ)</th>
      <th colspan="2">Vaccination Details (টিকা প্রদানের বিবরণ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><p>Certificate No: <br/> সার্টিফিকেট নং:</p></th>
      <td>Mark</td>
      <td><p>Date of Vaccination (Dose 1): <br/> টিকা প্রদানের তারিখ (ডোজ ১):</p></td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row"><p>NID Number: <br/> জাতীয় পরিচয়পত্র নং:</p></th>
      <td>Jacob</td>
      <td><p>Name of Vaccine (Dose 1): <br/> টিকার নাম (ডোজ ১):</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Passport No: <br/> পাসপোর্ট নং:</p></th>
      <td></td>
      <td><p>Date of Vaccination (Dose 2): <br/> টিকা প্রদানের তারিখ (ডোজ ২):</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Country/Nationality: <br/> দেশ/জাতীয়তা:</p></th>
      <td></td>
      <td><p>Name of Vaccine (Dose 2): <br/> টিকার নাম (ডোজ ২):</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Name: <br/> নাম::</p></th>
      <td></td>
      <td><p>Name of Vaccine (Dose 2): <br/> টিকার নাম (ডোজ ২):</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Date of Birth: <br/> জন্ম তারিখ:</p></th>
      <td></td>
      <td><p>Vaccination Center: <br/> টিকা প্রদানের কেন্দ্র:</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Date of Birth: <br/> জন্ম তারিখ:</p></th>
      <td></td>
      <td><p>Vaccinated By: <br/> টিকা প্রদানকারী::</p></td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row"><p>Gender: <br/> লিঙ্গ:</p></th>
      <td>Jacob</td>
      <td><p> Total Doses Given: <br /> মোট ডোজ সংখ্যা:</p></td>
      <td>@fat</td>
    </tr>

    
  </tbody>
</table>
<div>
  <div style={{textAlign:"center", border: "1px solid rgb(222, 226, 230)", padding: "20px", marginTop: "-17px"}}>For any further assistance, please visit www.dghs.gov.bd or e-mail: info@dghs.gov.bd <br />
(প্রয়োজনে www.dghs.gov.bd ওয়েব সাইটে ভিজিট করুন অথবা ইমেইল করুনঃ info@dghs.gov.bd)</div>
<p style={{backgroundColor: "rgb(238, 238, 238)", border: "1px solid rgb(222, 226, 230)", fontSize:"14px", fontweight: "bold", textAlign: "center", padding: "10px"}}>In Cooperation With</p>
</div>
<div style={{border: "1px solid rgb(222, 226, 230)", padding:"20px", marginTop: "-17px", marginBottom: "40px"}} className='text-center'>
<img style={{width:"450px"}} src={img1} alt="" />
</div>



</div>





{/* Footer */}


<div>
    <Footer />
</div>



        </div>
    );
};

export default PdfForm;