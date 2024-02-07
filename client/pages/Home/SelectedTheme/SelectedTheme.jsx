import React from 'react';
import "./SelectedTheme.css";
import { HiQrCode } from "react-icons/hi2";

const SelectedTheme = (props) => {

    const theTheme = props?.selectedTheme;
    console.log("thetheme: ", theTheme);

    return (
        <div className='theme-main-div'>

            <div className='left-main-card-div'>
                <div className='theme-name-main-div'>

                    <div className='live-text-main-div'>
                        <div className='the-live-dot'></div>
                        <div>Live</div>
                    </div>

                    <div className='them-name-text'><span>{theTheme.themeName}</span></div>
                    {/* <div><p>Last saved: {props.themeUpdatedAt}</p></div> */}
                    <div className='update-date'><span>Last saved: Feb 5, 2024 at 3:31 pm</span></div>

                </div>

                <div className='buttons-main-div'>

                    <button className='customize-button-div'>Customize</button>
                    <button className='preview-button-div'><HiQrCode /> Preview on mobile</button>

                </div>

            </div>



            <div className='side-image-div'>
                <div className='images-grid-div'>
                    <div className='images-row'>
                        <div>
                            <img src={theTheme.image} className='images' />
                        </div>
                        {/* <div>
                            <img src="https://styletribute.com/cdn/shop/products/7d90c442cde121a07a9f4e6356adcd36.jpg?v=1695377771&width=600" className='images' />
                        </div> */}
                    </div>

                    {/* <div className='images-row'>
                        <div>
                            <img src="https://styletribute.com/cdn/shop/products/7d90c442cde121a07a9f4e6356adcd36.jpg?v=1695377771&width=600" className='images' />
                        </div>
                        <div>
                            <img src="https://styletribute.com/cdn/shop/products/7d90c442cde121a07a9f4e6356adcd36.jpg?v=1695377771&width=600" className='images' />
                        </div>
                    </div> */}


                </div>

            </div>

        </div>
    )
}

export default SelectedTheme