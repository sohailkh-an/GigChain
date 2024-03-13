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
                        <Link href="/findWork" className={styles.navbar_link}>
                            Find Work
                        </Link>
                        <Link href="/myJobs" className={styles.navbar_link}>
                            My Jobs
                        </Link>
                    </div>
                    <div className={styles.searchBar_container}>
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Search for jobs"
                        />
                        <button className={styles.searchButton}>Search</button>

                    </div>

                    <div className={styles.icons_container}>
                        
                      
                        <Link href="/inbox" className={styles.inbox_icon}>
                            Inbox
                        </Link>
                        
                        <Link href="/notifications" className={styles.notification_icon}>
                            Notifications
                        </Link>

                        <Link href="/help" className={styles.help_icon}>
                            Help
                        </Link>

                        <Link href="/profile" className={styles.profile_icon}>
                            Profile
                        </Link>

                    </div>


                    <div className={styles.navbar_right}>
                        <Link href="/register" className={styles.navbar_link}>
                            Register
                        </Link>
                        <Link href="/signIn" className={styles.navbar_link}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}