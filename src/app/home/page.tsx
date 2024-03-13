'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {

    return (
        <React.Fragment>
            <div className={styles.home_wrapper}>
                <div className={styles.parent_cont_left}>
                    <div className={styles.main_content_container}>
                        <h1 className={styles.h3}>GigChain</h1>
                        <div>
                            <h4 className={styles.welcome_text}>The first peer-to-peer freelance marketplace</h4>
                            <h2 className={styles.h4}>Welcome to GigChain</h2>
                        </div>
                        <div className={styles.input_container}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Search for a gig"
                            />
                        </div>
                        <div>
                            <button className={styles.button_primary}>Search</button>
                        </div>
                    </div>
                </div>
                <div className={styles.parent_cont_right}>
                    <div>
                        <h1 className={styles.h1}>GigChain</h1>
                        <p className={styles.p}>
                            The first peer-to-peer freelance marketplace
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
