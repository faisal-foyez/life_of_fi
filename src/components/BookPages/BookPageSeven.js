/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import cssStyles from '../../../styles/BookPageTwo.module.scss';
const BookPageSeven = () =>{
    return(
        <div className={cssStyles.container}>
            <img className={cssStyles.profilePic}  src='/profile2.jpg' alt='Profile Picture' />
            <span className={cssStyles.introduceText}>I strongly believe,</span>
            <span className={cssStyles.mindsetText}>Patience is the ultimate solution to every single problem of the world.</span>
        </div>
    )
}

export default BookPageSeven;