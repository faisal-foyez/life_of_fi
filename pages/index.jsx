/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react';
import cssStyles from '../styles/Home.module.scss';
import BookPageOne from '../src/components/BookPages/BookPageOne';
import BookPageTwo from '../src/components/BookPages/BookPageTwo';
import BookPageThree from '../src/components/BookPages/BookPageThree';
import BookPageFour from '../src/components/BookPages/BookPageFour';
import BookPageFive from '../src/components/BookPages/BookPageFive';
import BookPageSix from '../src/components/BookPages/BookPageSix';
import BookPageSeven from '../src/components/BookPages/BookPageSeven';
import BookPageEight from '../src/components/BookPages/BookPageEight';
import BookPageNine from '../src/components/BookPages/BookPageSeven';
import BookPageTen from '../src/components/BookPages/BookPageEight';
import Image from 'next/image';
const Home = () =>{
    const [rightPages, setRightPages] = useState([2,3,4]);
    const [windowWidth, setWindowWidth] = useState(0);
    const onClickBackPage = (pageNo) =>{
        setRightPages([...rightPages,pageNo])
    }

    const onClickNextPage = (pageNo) =>{
        setRightPages(rightPages.filter(page=>page!==pageNo));
    }
    const pages = [<BookPageOne key={0}/>,<BookPageTwo key={1}/>,<BookPageThree key={2}/>,<BookPageFour key={3}/>,<BookPageFive key={4}/>,<BookPageSix key={5}/>,<BookPageSeven key={6}/>,<BookPageEight key={7}/>];
    
    /** Two pages make one leaf.
     * Duita page mile ekta pata hobe.
    */
    const bookLeaf = pages.length/2;
    const updateDimensions = () =>{
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        updateDimensions();
        window.addEventListener('resize',updateDimensions);

        return () =>{
            window.removeEventListener('resize',updateDimensions);
        }
    },[])
    return(
        <div className={cssStyles.container}>
            <div className={cssStyles.book}>
                <div className={cssStyles.pages}>
                    {
                        Array.from(Array(bookLeaf)).map((_,i)=>{
                            return(
                                <div
                                key={i}
                                style={{
                                    transform:`rotateY(${rightPages.includes(i+1)?`${168+i}deg`:'7deg'}) translateX(-5px)`,
                                    transition:'transform 1.2s linear'
                                }} 
                                className={[cssStyles.page].join(' ')}>
                                    <div className={cssStyles.pageOne}>
                                        <span className={cssStyles.pageNo}>{i*2}</span>
                                        {
                                          (i!==bookLeaf - 1 ) && 
                                            <button onClick={()=>onClickNextPage(i+1)} className={[cssStyles.pageBtn, cssStyles.nextPageBtn].join(' ')}>
                                                <img onClick={()=>onClickNextPage(i+1)} className={cssStyles.btnIcon} src="/arrow_right.svg" alt="next page" />
                                            </button>
                                        }
                                        
                                            {pages[i*2]}
                                        
                                    </div>
                                    <div className={cssStyles.pageTwo}>
                                        <span className={cssStyles.pageNo}>{i*2 + 1}</span>
                                        { 
                                            i !== 0  && 
                                            <>
                                                <button onClick={()=>onClickBackPage(i+1)} className={[cssStyles.pageBtn, cssStyles.backPageBtn].join(' ')}>
                                                    <img className={cssStyles.btnIcon} src="/arrow_left.svg" alt="next page" />
                                                </button>
                                            </>
                                        }
                                        
                                            {pages[i*2 + 1]}
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* page one */}
                    {/* <div
                    style={{
                        transform:`rotateY(${rightPages.includes(1)?'167deg':'7deg'}) translateX(-5px)`,
                        transition:'transform 1.5s linear'
                    }} 
                    className={[styles.page].join(' ')}>
                        <div className={styles.pageOne}>
                            <button onClick={()=>onClickNextPage(1)} className={styles.nextPage}>next</button>
                        </div>
                        <div className={styles.pageTwo}>
                            <button onClick={()=>onClickBackPage(1)} className={styles.backPage}>back</button>
                        </div>
                    </div> */}
                    {/* //////////////// */}

                    {/* page two */}
                    {/* <div
                    style={{
                        transform:`rotateY(${rightPages.includes(2)?'168deg':'8deg'}) translateX(-5px)`,
                        transition:'transform 1.5s linear'
                    }}  
                    className={[styles.page].join(' ')}>
                        <div className={styles.pageOne}>
                            <button onClick={()=>onClickNextPage(2)} className={styles.nextPage}>next</button>
                        </div>
                        <div className={styles.pageTwo}>
                            <button onClick={()=>onClickBackPage(2)} className={styles.backPage}>back</button>
                        </div>
                    </div> */}
                    {/* ///////////////////// */}

                    {/* page three */}
                    {/* <div 
                    style={{
                        transform:`rotateY(${rightPages.includes(3)?'169deg':'9deg'}) translateX(-5px)`,
                        transition:'transform 1.5s linear'
                    }} 
                    className={[styles.page].join(' ')}>
                        <div className={styles.pageOne}>
                            <button onClick={()=>onClickNextPage(3)} className={styles.nextPage}>next</button>
                        </div>
                        <div className={styles.pageTwo}>
                            <button onClick={()=>onClickBackPage(3)} className={styles.backPage}>back</button>
                        </div>
                    </div> */}
                    {/* ////////////////////////// */}

                    {/* page four */}
                    {/* <div
                    style={{
                        transform:`rotateY(${rightPages.includes(4)?'170deg':'10deg'}) translateX(-5px)`,
                        transition:'transform 1.5s linear'
                    }}  
                    className={[styles.page].join(' ')}>
                        <div className={styles.pageOne}>
                            <button onClick={()=>onClickNextPage(4)} className={styles.nextPage}>next</button>
                        </div>
                        <div className={styles.pageTwo}>
                            <button onClick={()=>onClickBackPage(4)} className={styles.backPage}>back</button>
                        </div>
                    </div> */}
                    {/* //////////////////////// */}
                </div>
            </div>
        </div>
    )
}
 
export default Home;