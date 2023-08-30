import React from 'react'
import styles from './Style.module.css'
const Navbar = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <h1 className={styles.Title}>TECH DEV</h1>
                <div className={styles.NavOptions}>
                    <h3 className={styles.NavOption}>About</h3>
                    <h3 className={styles.NavOption}>Contact</h3>
                    <h3 className={styles.NavOption}>Register Now</h3>
                </div>

            </div>

        </>
    )
}

export default Navbar