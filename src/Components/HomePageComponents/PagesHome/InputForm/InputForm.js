/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ContentLoader from 'react-content-loader';
import { baseUrl } from '../../../../config';
import QRCode from 'react-qr-code';
import ShowQrCodePage from '../../ShowQrCodePage/ShowQrCodePage';
// import { baseUrl } from '../../../../config';



const InputForm = () => {
    const history = useHistory();
    const [headerInput, setheaderInput] = useState({
        certificateno: '',
        nidnumber: '',
        passportno: '',
        nationality: '',
        name: '',
        dateofbirth: '',
        gender: '',
        datedose1: '',
        namedose1: '',
        dateofdose2: '',
        namedose2: '',
        vaccincenter: '',
        vaccinatedby: '',
        totaldose: '',
    });

    // qr code
    const [qrCodeValue,setQrCodeValue]=useState('');
    const [showQrCode,setShowQrCode]=useState(false);

    const handleShowQr=()=>{
        setShowQrCode(false)
    }

    

    const [picture, setPicture] = useState([]);
    const [errorList, setError] = useState([]);

    const handleInput = (e) =>{
        e.persist();
        setheaderInput({...headerInput, [e.target.name]:e.target.value});
        if(e?.target?.name == 'passportno'){
            setQrCodeValue(e?.target?.value);
            // console.log('test:',e?.target?.name,value)
        }

    }

    const handleImage = (e) => {
        setPicture({image: e.target.files[0]});

    }

    const submitHeader =(e) => {
        e.preventDefault();

        setShowQrCode(true);

        const formData = new FormData();
        
        formData.append('certificateno', headerInput.certificateno);
        formData.append('nidnumber', headerInput.nidnumber);
        formData.append('passportno', headerInput.passportno);
        formData.append('nationality', headerInput.nationality);
        formData.append('name', headerInput.name);
        formData.append('dateofbirth', headerInput.dateofbirth);
        formData.append('gender', headerInput.gender);
        formData.append('datedose1', headerInput.datedose1);
        formData.append('namedose1', headerInput.namedose1);
        formData.append('dateofdose2', headerInput.dateofdose2);
        formData.append('namedose2', headerInput.namedose2);
        formData.append('vaccincenter', headerInput.vaccincenter);
        formData.append('vaccinatedby', headerInput.vaccinatedby);
        formData.append('totaldose', headerInput.totaldose);
        formData.append('image', picture.image);
        // console.log(formData.get('image'));
        // console.log(formData.get('tittle'));
        // console.log(formData.get('description'));


        axios.post(`${baseUrl}/store-pdf`, formData).then(res=>{
            // console.log("Datas",res.formData);

            if(res.data.status === 200)
            {
            
                swal("Success", res.data.message, "success");
                e.target.reset(" ");
                setError([]);
                
            }
            else if(res.data.status === 422)
            {
                swal("All Failed are mendatory","errors");
                setError(res.data.errors);
               
            }
           
            
        });
        
    }
    return (<>
    {
        !showQrCode? <div className="container-fluid px-4">
                      <div className="card mt-4">
                                  <div className="card-header">
                                      <h4>
                                          <Link to={'/dashboard/manageinputform'} className="btn btn-danger btn-sm float-end"> Manage Input Form</Link>
                                      </h4>
                                  </div>
                                  <div className="card-body">
      
      
                                    <div className='tab-content' id='myTab' role='tablist'>
                                        <div className='tab-pane card-body border fade show active' id='home' role='tabpanel' aria-label='home-tab'>

                                       

                                   
                                      
                                      <form onSubmit={submitHeader} encType='multipart/form-data'>
                                      <div className="form-group mb-3">
                                              <label>Certificate No:</label>
                                              <input type="text" name="certificateno" onChange={handleInput} value={headerInput.certificateno} className="form-control" />
                                              <small className="text-danger">{errorList.certificateno}</small>
                                          </div>



                                          <div className="form-group mb-3">
                                              <label>NID Number:</label>
                                              <input type="text" name="nidnumber" onChange={handleInput} value={headerInput.nidnumber} className="form-control" />
                                              <small className="text-danger">{errorList.nidnumber}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Passport No:</label>
                                              <input type="text" name="passportno" onChange={handleInput} value={headerInput.passportno} className="form-control" />
                                              <small className="text-danger">{errorList.passportno}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Country/Nationality::</label>
                                              <input type="text" name="nationality" onChange={handleInput} value={headerInput.nationality} className="form-control" />
                                              <small className="text-danger">{errorList.nationality}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Name:</label>
                                              <input type="text" name="name" onChange={handleInput} value={headerInput.name} className="form-control" />
                                              <small className="text-danger">{errorList.name}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Date of Birth:</label>
                                              <input type="text" name="dateofbirth" onChange={handleInput} value={headerInput.dateofbirth} className="form-control" />
                                              <small className="text-danger">{errorList.dateofbirth}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Gender:</label>
                                              <input type="text" name="gender" onChange={handleInput} value={headerInput.gender} className="form-control" />
                                              <small className="text-danger">{errorList.gender}</small>
                                          </div>









                                          <div className="form-group mb-3">
                                              <label>Date of Vaccination (Dose 1):</label>
                                              <input type="text" name="datedose1" onChange={handleInput} value={headerInput.datedose1} className="form-control" />
                                              <small className="text-danger">{errorList.datedose1}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Name of Vaccine (Dose 1):</label>
                                              <input type="text" name="namedose1" onChange={handleInput} value={headerInput.namedose1} className="form-control" />
                                              <small className="text-danger">{errorList.namedose1}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Date of Vaccination (Dose 2):</label>
                                              <input type="text" name="dateofdose2" onChange={handleInput} value={headerInput.dateofdose2} className="form-control" />
                                              <small className="text-danger">{errorList.dateofdose2}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Name of Vaccine (Dose 2):</label>
                                              <input type="text" name="namedose2" onChange={handleInput} value={headerInput.namedose2} className="form-control" />
                                              <small className="text-danger">{errorList.namedose2}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Vaccination Center:</label>
                                              <input type="text" name="vaccincenter" onChange={handleInput} value={headerInput.vaccincenter} className="form-control" />
                                              <small className="text-danger">{errorList.vaccincenter}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Vaccinated By:</label>
                                              <input type="text" name="vaccinatedby" onChange={handleInput} value={headerInput.vaccinatedby} className="form-control" />
                                              <small className="text-danger">{errorList.vaccinatedby}</small>
                                          </div>


                                          <div className="form-group mb-3">
                                              <label>Total Doses Given:</label>
                                              <input type="text" name="totaldose" onChange={handleInput} value={headerInput.totaldose} className="form-control" />
                                              <small className="text-danger">{errorList.totaldose}</small>
                                          </div>



      
      
                                          <div className="form-group mb-3">
                                              <label>Image</label>
                                              <input type="file" name="image" onChange={handleImage}  className="form-control" />
                                              <small className="text-danger">{errorList.image}</small>
                                          </div>
                                         
      
                                          <div className="form-group mb-3">
                                              <button type="submit" className="btn btn-primary">Submit</button>
                                          </div>

                                      </form>
                                      </div>
                                      </div>
                                  </div>
                
                      </div>

{/* <ShowQrCodePage  qrCodeValue={qrCodeValue} showQrCode = {showQrCode}></ShowQrCodePage> */}

                  </div>

:<div >
 <button className='btn btn-dark' onClick={handleShowQr}>Back</button>    
<div className='text-center'>
<h5 className='text-success'>Successfully Added and generated QR Code !!!</h5>
<h4 className='text-dark'>You can verify your vaccination by scanning QR Code</h4>
<p>Scan the QR code , click the URL.</p>
     <QRCode
    className='mt-5'
    title='Testing QR code'
    bgColor='white'
    fgColor='black'
    value={`http://localhost:3000/dashboard/${qrCodeValue}`}
    >
    </QRCode>
</div>
</div>
}
    </>
    );
};

export default InputForm;
