import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {trackPromise} from 'react-promise-tracker'
import Loader from '../Loader';

const AddApp = (props) => {
    const [formData, setFormData] = useState({
        name:'',
        url:'',
        description:'',
        category:''
    })

    const {name, url, description, category } = formData
    
    const [categoryData, setCategories] = useState({
        allCategories:[],
    });

    useEffect(() => {
        const getCategoryData = async () => {
            // console.log('getting category data')
            const allCategories = await (await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/categories/all`)).data
            // console.log('call result',allCategories)
            setCategories({allCategories}) 
        }
        getCategoryData()
    },[]);

    const [messageData, setMessage] = useState({
        message:'',
    })

    const { message } = messageData

    //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    //submit data to backend
    const handleSubmit = event =>{
        event.preventDefault()
        if(name && url && description){
            const userId = JSON.parse(localStorage.getItem('user'));
            trackPromise(
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/apps/new`,{
                    name, url, description, category, userId
                })
                .then(res =>{
                    // console.log(res)
                    setFormData({
                        ...formData,
                        name:'',
                        url:'',
                        description:'',
                        category:''
                    });
                    window.location.reload()
                    // this.props.fetchData()
                    // console.log('added app:',res)
                })
                .catch(err =>{
                    setMessage({
                        message: 'server error, try again'
                    })
                })
            )
                
        } else {
            setMessage({
                message:'Please fill in all the fields'
            })
        }
    }

    return (
        <div>
            <MDBContainer onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <Loader>
                                <MDBCardBody>
                                    <form>
                                        <p>{message}</p>
                                        <div className="grey-text">
                                        <MDBInput 
                                            label="Name of App" 
                                            group 
                                            type="text" 
                                            validate 
                                            error="Please fill in the app's name."
                                            success="right" 
                                            onChange={handleChange('name')}
                                            value={name}
                                        />
                                        <MDBInput 
                                            label="App Website" 
                                            group 
                                            type="url" 
                                            validate 
                                            onChange={handleChange('url')}
                                            value={url}
                                        />
                                        <MDBInput 
                                            label="App Description" 
                                            group 
                                            type="text" 
                                            validate 
                                            onChange={handleChange('description')}
                                            value={description}
                                        />
                                        <label htmlFor="">Category</label>
                                        <select className="browser-default custom-select" value={category} onChange={handleChange('category')}>
                                            <option>Category of App</option>
                                            {categoryData.allCategories.map(categoryItem => {
                                                return <option value={categoryItem._id} key={categoryItem._id}>{categoryItem.name}</option>
                                            })}
                                        </select>
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn color="red" type="submit">Submit</MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </Loader>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>  
        </div>
    )
}

export default AddApp
