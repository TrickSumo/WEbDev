import React from 'react'

import styleFooter from './style.module.css'
import fb from '../../images/fb-Icon.png';
import insta from '../../images/insta-Icon.svg';
import twitter from '../../images/twitter-Icon.svg';
import git from '../../images/git-Icon.svg';

const Footer = () => {
    return (
        <>
            <div className={styleFooter.mainCont}>
                <div className={styleFooter.container}>
                    <a href="https://instagram.com">
                        <img className={styleFooter.img} src={insta} alt="Instagram" />
                    </a>
                    <a href="https://facebook.com">
                        <img className={styleFooter.img} src={fb} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com">
                        <img className={styleFooter.img} src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://github.com">
                        <img className={styleFooter.img} src={git} alt="Github" />
                    </a>
                </div>
                <p className={styleFooter.para}>&copy;2023 workflow, inc. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer