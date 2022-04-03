/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import cssStyles from '../../../styles/BookPageTwo.module.scss';
const BookPageTwo = () =>{
    return(
        <div className={cssStyles.container}>
            <img className={cssStyles.profilePic}  src='/profile.jpg' alt='Profile Picture' />
            <span className={cssStyles.mindsetText}>Coding is my passion and so is being human.</span>
            <span className={cssStyles.introduceText}>Hi, Myself <b>Faisal Islam</b>.</span>
            <span className={cssStyles.introduceText}>Software Engineer in Dhaka, Bangladesh.</span>

        </div>
    )
}

export default BookPageTwo;