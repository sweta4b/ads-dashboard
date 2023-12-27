import React from 'react'
import { useNavigate } from 'react-router-dom'

function MediaAdForm() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/adsSubmitted')
        setTimeout(() => {
            navigate('/ads')
        }, 600)
    }

    return (
        <div className='p-4'>
            <div className="md:max-w-[1480px] max-w-[600px] text-left m-auto w-full h-full border  md:px-0 px-8  p-6 bg-white rounded-md shadow-md">
                <h1 className='text-left px-8 py-2 font-normal text-xl'>Create Text & Media </h1>
                <form className='grid md:grid-cols-3 gap-4 w-full px-8'>
                    <div className="mb-4">
                        <label htmlFor="heading1" className="block text-sm font-medium text-gray-600">
                            Heading 1
                        </label>
                        <input
                            type="text"
                            id="heading1"
                            name="heading1"
                            placeholder='Add a heading that would make users interested'
                            className="mt-1 p-2 text-xs w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4 row-span-2 md:col-span-2">

                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder='Add primary text to help users understands more about your products, services or offers'
                            rows="4"
                            className="mt-1 p-2 w-full text-xs border rows-4 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="heading2" className="block text-sm font-medium text-gray-600">
                            Heading 2
                        </label>
                        <input
                            type="text"
                            id="heading2"
                            name="heading2"
                            placeholder='Add a heading that would make users interested'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>

                    <div className="mb-4">

                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
                            Landscape Marketing Image
                        </label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            placeholder='Add the URL of the image you want to use for the ad'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="portraitimage" className="block text-sm font-medium text-gray-600">
                            Portrait Marketing Image
                        </label>
                        <input
                            type="text"
                            id="portraitimage"
                            name="portraitimage"
                            placeholder='Add the URL of the image you want to use for the ad'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="squareimage" className="block text-sm font-medium text-gray-600">
                            Sqaure Marketing Image
                        </label>
                        <input
                            type="text"
                            id="squareimage"
                            name="squareimage"
                            placeholder='Add the URL of the image you want to use for the ad'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>

                    <div className="mb-4 col-span-full">

                        <label htmlFor="videourl" className="block text-sm font-medium text-gray-600">
                            Video URL
                        </label>
                        <input
                            type="text"
                            id="videourl"
                            name="videourl"
                            placeholder='Add the URL of the video you want to use for the ad'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
                            Business Name
                        </label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            placeholder='Add your business name'
                            className="mt-1 p-2 w-full text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="buttonLabel" className="block text-sm font-medium text-gray-600">
                            Button Label
                        </label>
                        <select
                            id="buttonLabel"
                            name="buttonLabel"
                            className="mt-1 p-2 text-xs  w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        >
                            <option value="">
                                Select a label that best suits your ad
                            </option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>

                    <div className="mb-4 col-span-full">
                        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-600">
                            Website URL
                        </label>
                        <input
                            type="url"
                            id="websiteUrl"
                            name="websiteUrl"
                            placeholder='Add the URL of the landing page you want to redirect users to'
                            className="mt-1 text-xs p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className=" col-span-full flex justify-end gap-2">
                        <button className='border  border-slate-400 hover:border-slate-800 px-8 py-3 rounded-md font-semibold text-gray-600' onClick={() => navigate('/ads')}>Back</button>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="px-8 py-3 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default MediaAdForm