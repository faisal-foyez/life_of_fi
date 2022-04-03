/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cssStyles from '../../../styles/BookPageFour.module.scss'

const BookPageFour = () =>{
    return(
        <div className={cssStyles.container}>
            <span className={cssStyles.timespan}>In 2016,</span>
            <span className={cssStyles.details}>I started to worked in <a rel="noreferrer" target='_blank' className={cssStyles.softavion} href='https://www.softavion.com/main/'>Softavion Ltd</a>, a start up software firm.</span>
            <img  className={cssStyles.detailsImage} src="/softavion.jpg" alt="Graduation Picture"/>
            <span className={cssStyles.subDetails}> My first job, still emotionally connected.</span>
        </div>
    )
}

export default BookPageFour;