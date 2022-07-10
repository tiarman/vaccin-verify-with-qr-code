import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { baseUrl, imagesUrl } from '../../../config';
import Spinner from '../../../Shared/Spinner/Spinner';

const ManageInputForm = () => {
    const [loading, setLoading] = useState([true])
    const [viewTeams, setTeams] = useState([])


    useEffect(() => {

        axios.get(`${baseUrl}/view-pdf`).then(res=>{
            if(res.data.status === 200)
            {
                setTeams(res.data.allpdf)
                setLoading(false);
                // console.log("Datas", res.data.servicess);
            }
        });
        

    }, []);


    const deleteTeams = (e, id) => {
            e.preventDefault();

            const thisClicked = e.currentTarget;
            thisClicked.innerText = "Deleteing";

            axios.delete(`${baseUrl}/delete-team/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success", res.data.message, "success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404){
                swal("Success", res.data.message, "success");
                thisClicked.innerText ="Delete";
            }
        });
    }
    
        if(loading)
        {
            return <Spinner />
        }
        else
        
            {
                var display_team = "";
               
                display_team = viewTeams.map( (item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.certificateno}</td>
                            <td>{item.nidnumber}</td>
                            <td>{item.passportno}</td>
                            <td><img src={`${imagesUrl}/${item.image}`} width='50px' alt="Images"/></td>
                            {/* <td>
                                <Link to={`edit-services/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td> */}
                            <td><button type='button' className='btn btn-success btn-sm'>Download</button></td>
                            <td><button type='button' onClick={(e) => deleteTeams(e, item.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    );
                });
            

        }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    <Link to={'/dashboard/inputform'} className="btn btn-primary btn-sm float-end"> Add Team</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className='table-responsive'>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Certificateno</th>
                                            <th>NID Number</th>
                                            <th>Passport No</th>
                                            <th>Images</th>
                                            <th>Download</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {display_team}
                                    </tbody>
                                </table>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInputForm;