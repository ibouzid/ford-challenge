import React, { useEffect, useState } from 'react';
import icon from './icon.svg'
import './AuthorCard.scss';

const AuthorCard = (props) => {
    const {image, firstName, lastName, email, company, jobDescription, jobTitle} = props.author;
    const [showInfo, setShowInfo] = useState(false);


    const handleAdditionalInfoClick = () =>{
        setShowInfo(!showInfo)
    }
    
    return (
        <div className='author-card'>
            <img src={`${image}&anything=${email}`}/>
            <div className='name'>
                <h3>{`${firstName} ${lastName}`}</h3>
            </div>
            <div>{company}</div>
            <div>{jobTitle}</div>
            <div>
                <button className='job-info-btn' onClick={handleAdditionalInfoClick}>
                <div>
                    Additional Info
                </div>
                <img src='/icon.svg'/>
                </button>
                
            </div>
          {showInfo &&  <div className='email-jobD'>
                <div>{email}</div>
                <div>{jobDescription}</div>
            </div>}
           


        </div>
    )
}

export default AuthorCard