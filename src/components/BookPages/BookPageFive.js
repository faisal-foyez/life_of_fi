/* eslint-disable @next/next/no-img-element */
import React, {useState,useEffect,useMemo} from 'react';
import cssStyles from '../../../styles/BookPageFive.module.scss'

const BookPageFive = () =>{
  const imageLinks =  [
    '/sharp_interface1.jpg',
    '/sharp_interface2.jpg'
  ]
  const [selectedImage,setSelectedImage] = useState(imageLinks[0]);
  useEffect(()=>{
    let i = 1;
    setInterval(()=>{
      setSelectedImage(imageLinks[i])
      i++;
      i = i % imageLinks.length;
    },3000)
  },[])
  return(
      <div className={cssStyles.container}>
        <span style={{margin:'1em'}} className={cssStyles.timespan}>In 2018,</span>
        <span className={cssStyles.details}>I started my own company with my university juniors, whom I used to teach programming.</span>
        <img  className={cssStyles.detailsImage} src={selectedImage} alt="Graduation Picture"/>
        {/* <span className={cssStyles.subDetails}> My first job, still emotionally connected with them.</span> */}
      </div>
  )
}

export default BookPageFive;