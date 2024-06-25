import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../assets/css/styles.module.css";
import Navbar from "../../components/navbar";
import Header from '../../components/header';

export default function Account() {
    return(
        <div>
            <Navbar />
            <section className='mt-5'>
                <div className="container" style={{width: '936px', height: 'auto'}}>
                    <div className="row justify-content-center">
                        <Header />
                        <div className="font col-xl-12 mt-5">
                            <div className="container" style={{ width: 672, height: "auto", paddingLeft: "26.85px" }}>
                                <h3 className="font-weight-medium color-primary">Detail Form</h3>
                                <div className="alert alert-danger mt-3" role="alert" id="validationAlert" style={{ display: "none" }}>
                                    Please correct the errors in the form before submitting.
                                </div>
                                <form action="#" method="post" className="needs-validation" noValidate="">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="font-weight-normal text-form color-primary mt-2 mb-2">First Name</label>
                                                <input type="text" className="form-control" id="firstName" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="lastName" className="font-weight-normal text-form color-primary mt-2 mb-2">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" required=""/>
                                            </div>      
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="username" className="font-weight-normal text-form color-primary mt-2 mb-2">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1" style={{width: "42.25px",height: 38,padding: "6.5px 13.52px 7.5px 13.73px",borderRadius: "4px 0px 0px 4px",border: "1px solid #CED4DA"}}>@</span>
                                                </div>
                                                <input type="text" className="form-control" id="username" placeholder="Enter your username" required="" />
                                            </div> 
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="email" className="font-weight-normal text-form color-primary mt-2 mb-2">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="you@example.com" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="gender" className="font-weight-normal text-form color-primary mt-2 mb-2">Gender</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderMale" defaultValue="male" required=""/>
                                                <label className="form-check-label" htmlFor="genderMale">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" defaultValue="female" required=""/>
                                                <label className="form-check-label" htmlFor="genderFemale">
                                                    Female
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderOther" defaultValue="other"required=""/> 
                                                <label className="form-check-label" htmlFor="genderOther">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                        <div className="form-group">
                                            <label
                                            htmlFor="address"
                                            className="font-weight-normal text-form color-primary mt-2 mb-2"
                                            >
                                            Address
                                            </label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label
                                        htmlFor="address2"
                                        className="font-weight-normal text-form color-primary mt-2 mb-2"
                                        >
                                        Address 2 <span style={{ color: "#6C757D" }}>(Optional)</span>
                                        </label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        placeholder="Apartment or suite"
                                        />
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                        htmlFor="nationality"
                                        className="font-weight-normal text-form color-primary mt-2 mb-2"
                                        >
                                        Nationality
                                        </label>
                                        <select
                                        className="form-select mb-3"
                                        id="nationality"
                                        style={{ width: 244, height: 38 }}
                                        >
                                        <option selected="" disabled="">
                                            Choose...
                                        </option>
                                        <option>Indonesia</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        </select>
                                    </div>
                                    </div>
                                    <hr
                                    style={{
                                        background: "#21252940",
                                        width: 635,
                                        height: 1,
                                        top: 646,
                                        left: "-3px"
                                    }}
                                    />
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                        htmlFor="language"
                                        className="font-weight-normal text-form color-primary mb-2"
                                        >
                                        Language Spoken:
                                        </label>
                                        <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="Bahasa"
                                            id="Bahasa"
                                        />
                                        <label className="form-check-label" htmlFor="Bahasa">
                                            Bahasa
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="English"
                                            id="English"
                                        />
                                        <label className="form-check-label" htmlFor="English">
                                            English
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="Other"
                                            id="Other"
                                        />
                                        <label className="form-check-label" htmlFor="Other">
                                            Other
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-create mt-5 font-weight-normal"
                                        style={{ width: 557, height: 48 }}
                                    >
                                        Create Account
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>

                    </div>
                </div>
            </section>
        </div>
    )
}