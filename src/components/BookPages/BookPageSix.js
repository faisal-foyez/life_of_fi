/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cssStyles from '../../../styles/BookPageSix.module.scss'
const styles = {
  chotuAppLink:{
    fontSize:'calc(.7rem + .5vw)',
    fontWeight:700,
    color:'#d73f3f',
    textDecoration:'underline'
  },
  chotuText:{
    fontSize:'calc(.7rem + .5vw)',
    fontWeight:700,
    color:'#d73f3f'
  }
}
const BookPageSix = () =>{
    return(
        <div className={cssStyles.container}>
            {/* <span className={cssStyles.timespan}>From 2016-2018,</span> */}
            <span className={cssStyles.details}>I developed 
              <span style={styles.chotuText}> Sharp Chotu</span>
              , an online shopping assistant in
              <a rel="noreferrer" target='_blank' style={{...styles.chotuAppLink,color:'#0c0bda'}} href='https://play.google.com/store/apps/details?id=com.sharpshoppingassistantmobile'> android </a>
              <span> and </span>
              <a rel="noreferrer" target='_blank' style={{...styles.chotuAppLink,color:'#0c0bda'}} href='https://chrome.google.com/webstore/detail/sharp-chotu/kcnbkfomndobfaoocdfaiplmgekbhdap'>chrome extension</a>
            </span>
            <img  className={cssStyles.detailsImage} src="/chotu_img.png" alt="Graduation Picture"/>
            {/* <span className={cssStyles.subDetails}>From frontend to backend to deployment, Everything I did myself.</span> */}
        </div>
    )
}

export default BookPageSix;