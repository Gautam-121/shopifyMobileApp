import React, { useEffect } from 'react';
import "./Home.css";
import "./SelectedTheme/SelectedTheme.css"
import { FaWandMagicSparkles } from "react-icons/fa6";
import SelectedTheme from './SelectedTheme/SelectedTheme';
// import "./Home.scss";
import appImage from "../../assets/images/ascend.jpg"
import useFetch from "../../hooks/useFetch";



const Home = () => {

    const fetch = useFetch();

    useEffect(async ()=>{

        const res = await fetch("/api/getAllTheme"); //fetch instance of useFetch()
        const data = await res.json();
        console.log("themes: ", data);
    })

   

    const cards = [{ image: { appImage }, themeName: 'Ascend', category: 'General', desc: 'A sense of growth and advancement, elevating businesses in various industries.' },
    { image: { appImage }, themeName: 'Ascend', category: 'General', desc: 'A sense of growth and advancement, elevating businesses in various industries.' },
    { image: { appImage }, themeName: 'Butterfly', category: 'General', desc: 'A sense of growth and advancement, elevating businesses in various industries.' },
    { image: { appImage }, themeName: 'RiseUp', category: 'General', desc: 'A sense of growth and advancement, elevating businesses in various industries.' },
    { image: { appImage }, themeName: 'Growth', category: 'General', desc: 'A sense of growth and advancement, elevating businesses in various industries.' },
    { image: { appImage }, themeName: 'Home', category: 'free', desc: 'A sense of growth and advancement, elevating businesses in various industries.' }]

    return (
        <div className='main-div'>

            <div className='header-main-div'>

                <div className='heading-div'>
                    <div className='solid-heading'><span>App Design</span></div>
                    <div><p>Customize layouts, colors and navigation to create a seamless shopping expereince.</p></div>
                </div>


                <button className='submission-btn'>
                    <FaWandMagicSparkles /> App Submission
                </button>

            </div>


            <div className='selected-theme-main-div'>

                <SelectedTheme />

            </div>


            <div className='themes-main-container-div'>

                <div className='the-texts-main-div'>

                    <div className='theme-text'>
                        <span>Themes</span>
                    </div>

                    <div className='theme-text-sub-heading'>
                        <span>Explore our popular themes. Choose a suitable one for your business and kickstart your ecommerce journey on the apps.</span>
                    </div>

                </div>


                <div className='theme-card-container'>
                    {
                        cards?.map((res, index) => {

                            return (
                                <>
                                    <div className='theme-card'>
                                        <div className='the-card-image-div'>
                                            <img src={appImage} alt="apps-images" className='card-images' />
                                        </div>
                                        <div className='name-category-div'>
                                            <div className='name-and-desc'>
                                                <span className='theme-name'>{res?.themeName}</span>
                                                <span className='category-name'>{res?.category}</span>
                                            </div>


                                            <span>{res?.desc}</span>
                                        </div>

                                        {res?.category === 'free' ? <div className='buttons-div'><button className='card-buttons'>Publish</button> <button className='card-buttons'>Customize</button></div> : <div className='buttons-div'>
                                            <button className='card-buttons'>Upgrade</button> <button className='card-buttons'>Try for free</button>
                                        </div>}
                                    </div>

                                </>
                            )
                        })
                    }

                </div>

            </div>


        </div>
    )
}

export default Home