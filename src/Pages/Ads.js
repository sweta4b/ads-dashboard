import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { mediaImage, textImage } from '../Images';

function Ads() {
    const navigate = useNavigate()
    const [textAdChecked, setTextAdChecked] = useState(false);
    const [mediaAdChecked, setMediaAdChecked] = useState(false);

    const handleMediaAd = () => {
        setMediaAdChecked(!mediaAdChecked)
    }

    const handleTextAd = () => {
        setTextAdChecked(!textAdChecked)
    }

    const redirectToFillData = () => {
        if (textAdChecked && mediaAdChecked) {
            navigate('/mediaAdForm')
        } else if (mediaAdChecked) {
            navigate('/mediaAdForm')
        } else if (textAdChecked) {
            navigate('/textAdForm')
        }
        else {
            alert("Please Select atleast one form")
        }
    }

    return (
        <div className='md:max-w-[1480px] max-w-[600px] px-8 py-4 mx-4 mt-4 bg-white md:h-fit border-2 rounded-md'>
            <h1 className='text-left font-semibold text-xl pb-8 md:pb-0'>
                Create Ads
            </h1>
            <div className="flex items-center md:h-[500px] h-full justify-center">
                <div className='grid md:grid-cols-2 md:gap-4 gap-10 '>
                    <div onClick={handleTextAd} className='border-2 rounded-md'>
                        <div className="relative">
                            <input type="checkbox" id="checkbox" checked={textAdChecked} onChange={handleTextAd} className="absolute top-2 left-2 md:z-10" />
                            <div className="overflow-hidden rounded-lg shadow-md">
                                <img src={textImage} alt="Card Background" className="w-full md:h-[300px] h-[200px] object-cover" />
                                <div className="p-2 bg-gray-200 bg-opacity-50">
                                    <p className='text-gray-600'>Create</p>
                                    <h3 className='font-bold'>Text Ad</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleMediaAd} className='border-2 rounded-md'>
                        <div className="relative">
                            <input type="checkbox" id="checkbox" checked={mediaAdChecked} onChange={handleMediaAd} className="absolute top-2 left-2 md:z-10" />
                            <div className="overflow-hidden rounded-lg shadow-md">
                                <img src={mediaImage} alt="Card Background" className="w-full md:h-[300px] h-[200px] object-cover" />
                                <div className="p-2 bg-gray-200 bg-opacity-50">
                                    <p className='text-gray-600'>Create</p>
                                    <h3 className='font-bold'>Media Ad</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:justify-end justify-center'>
                <button className='bg-blue-500 text-white hover:border-slate-800 md:px-12 md:py-3 md:mt-0 px-12 py-2  mt-4  rounded  font-semibold ' onClick={redirectToFillData}>Next</button>
            </div>
        </div>
    )

}

export default Ads