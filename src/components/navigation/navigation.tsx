import React from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';
// import InboxIcon from '../../public/chat message.svg';
// import NotificationIcon from '../../public/notification.svg';
// import HelpIcon from '../../public/help.svg';


export default function Navigation() {
    return (
        <React.Fragment>
            <div className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <h1 className={styles.h1}>GigChain</h1>
                    <div className={styles.navbar_links_container}>
                        <Link href="#" className={styles.navbar_link}>
                            Find Work
                        </Link>
                        <Link href="#" className={styles.navbar_link}>
                            My Jobs
                        </Link>
                    </div>
                    <div className={styles.searchBar_container}>
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Search for jobs"
                        />
                        {/* <button className={styles.searchButton}>Search</button> */}

                    </div>


                    <div className={styles.navbar_right}>
                        <Link href="/register" className={styles.navbar_link}>
                            Inbox
                        </Link>
                        <Link href="/signIn" className={styles.navbar_link}>
                            Notifications
                        </Link>
                        <Link href="/signIn" className={styles.navbar_link}>
                            Help
                        </Link>
                        <Link href="/signIn" className={styles.navbar_link}>
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}