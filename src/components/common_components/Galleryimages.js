import './Galleryimages.css'
import { useState } from 'react'
import FontAwesome from 'react-fontawesome'
 const Galleryimages =({galleryImages})=>{
    const [slideNumber,  setSlideNumber]= useState(0)
    const [openModel, setOpenModel]= useState(false)
    const handalOpenModel =(index)=>{
        setSlideNumber(index)
        setOpenModel(true)
    }
    return(
        <div className='mt-5'>
            {
                openModel && 
                <div className='sliderwrap'> 
                
                </div>
            }

            <div className='gallarywrap'>
                {
                    galleryImages && galleryImages.map((slide, index)=>{
                        return(
                            <div className='single'  key={index}
                            onClick={()=>handalOpenModel(index)}>
                              <img src={slide.img} alt='' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
 }
export default Galleryimages