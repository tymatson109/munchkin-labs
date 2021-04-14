import React from 'react';
import { useState } from 'react';
import { auth, db } from '../firebase';
import './Jobs.css';

const Jobs = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [frontEndDeveloper, setFrontEndDeveloper] = useState(false)

    const onSubmitClick = () => {
        db.collection("applicant").add({
            name: name,
            email: email,
            phone: phone,
            frontEndDeveloper: frontEndDeveloper
        })

        setName('')
        setEmail('')
        setPhone('')
        setFrontEndDeveloper(false)
    }

    return (
        <div className="jobs">
            <div className="jobs__form">
                <div className="jobs__formDesc">
                    <h4>Be a Munchkin!</h4>
                    <p>Want to be part of the founding team? Reach out to us if<br />
                     you're interested in the following remote position at<br />
                      Munchkin Labs:
                    </p>
                    <p className="jobs__spacing">Munchkin Labs</p>
                    <ul className="jobs__list">
                        <li className="jobs__listItem">Front End Mobile Application Developer<br />(posted 2/15/2021)</li>
                        <li className="jobs__listItem">Introductory Algorithms Engineer<br />(posted 2/21/2021)</li>
                    </ul>
                </div>
                <div className="jobs__formInput">
                    <input value={name} onChange={e => setName(e.currentTarget.value)} placeholder="Name" required/>
                    <input value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" required/>
                    <input value={phone} onChange={e => setPhone(e.currentTarget.value)} placeholder="Phone" required/>
                    <div className="jobs__formInputRadio">
                        <div className="jobs__position">Position *</div>
                        <div className="jobs__radio">
                            <input onClick={() => setFrontEndDeveloper(true)} name="job" type="radio" />
                            <div>Front End Developer</div>
                        </div>
                        <div className="jobs__radio">
                            <input onClick={() => setFrontEndDeveloper(false)} name="job" type="radio" />
                            <div>Introductory Algorithms Engineer</div>
                        </div>
                    </div>
                    <button onClick={() => onSubmitClick()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Jobs
