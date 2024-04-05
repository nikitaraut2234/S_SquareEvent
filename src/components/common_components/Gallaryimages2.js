import './Gallaryimages2.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faCircleXmark,
    faCircleChevronLeft,
    faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons' 
 const Galleryimages2 =({galleryImages2})=>{
    const [slideNumber,  setSlideNumber]= useState(0)
    const [openModel, setOpenModel]= useState(false)
    const handalOpenModel =(index)=>{
        setSlideNumber(index)
        setOpenModel(true)
    }
    const handalCloseModel=()=>{
          setOpenModel(false)
    }
    const prevSlide = ()=>{
             slideNumber === 0 ? setSlideNumber( galleryImages2.length-1): setSlideNumber(slideNumber-1)
    }
    const nextSlide = ()=>{
        slideNumber === 0 ? setSlideNumber( galleryImages2.length-1): setSlideNumber(slideNumber-1)    
    }
    return(
        <div className='mt-5'>
            
            
            {
                openModel && 
                <div className='sliderwrap'> 
                  <FontAwesomeIcon icon={ faCircleXmark }   className='btnclose' onClick={handalCloseModel}/>
                  <FontAwesomeIcon icon={ faCircleChevronLeft } className='btnprev' onClick={prevSlide}/>
                  <FontAwesomeIcon icon={ faCircleChevronRight }  className='btnnext' onClick={nextSlide}/>
                <div className='fullscreenImage'>
                    <img src={ galleryImages2[slideNumber].img }  alt=''/>
                </div>
                 
                </div>
            }

            <div className='gallarywrap'>
                {
                    galleryImages2 && galleryImages2.map((slide, index)=>{
                        return(
                            <div className='single'  key={index}
                            onClick={()=>handalOpenModel(index)}>
                              <img  src={slide.img} alt='' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
 }
export default Galleryimages2