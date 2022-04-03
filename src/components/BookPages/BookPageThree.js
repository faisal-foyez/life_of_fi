/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cssStyles from '../../../styles/BookPageThree.module.scss'
const BookPageThree = () =>{
    return(
        <div className={cssStyles.container}>
            <span className={cssStyles.timespan}>In 2016,</span>
            <span className={cssStyles.details}>I completed engineering in ICT from <a className={cssStyles.university} rel="noreferrer" target="_blank" href='https://www.cou.ac.bd/'>Comilla University</a>, Bangladesh.</span>
            <img className={cssStyles.detailsImage} src="/graduation.jpg" alt="Graduation Picture"/>
        </div> 
    )
}

export default BookPageThree;