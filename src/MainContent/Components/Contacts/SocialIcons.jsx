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
                    <a href='https://t.me/jesuisdetesteparlemondeentierrr'>@jesuisdetesteparlemondeentierrr</a>
                </div>
                <div className='socialIcons-info'>
                    <img src={vkIcon} alt='vkIcon' />
                    <a href='https://vk.com/jesuisdetesteparlemondeentierrr'>@jesuisdetesteparlemondeentierrr</a>
                </div>
                <div className='socialIcons-info'>
                    <img src={googleIcon} alt='googleIcon' />
                    <a href="mailto:fleurfeel7@gmail.com">fleurfeel7@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
