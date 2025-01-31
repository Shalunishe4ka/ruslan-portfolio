import React from 'react'
import tgIcon from "./assets/tg icon.svg"
import vkIcon from "./assets/vk icon.svg"
import googleIcon from "./assets/google icon.svg"


export const SocialIcons = () => {
    return (
        <div className='socialIcons-container'>
            <div className='socialIcons-items'>
            <div className='socialIcons-info'>
                <img src={tgIcon} alt='tgIcon' />
                <p>@jesuisdetesteparlemondeentierrr</p>
            </div>
            <div className='socialIcons-info'>
                <img src={vkIcon} alt='vkIcon' />
                <p>@jesuisdetesteparlemondeentierrr</p>
            </div>
            <div className='socialIcons-info'>
                <img src={googleIcon} alt='googleIcon' />
                <p>fleurfeel7@gmail.com</p>
            </div>
            </div>
        </div>
    )
}
