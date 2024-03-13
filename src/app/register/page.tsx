"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function RegisterationPage() {
  return (
    <React.Fragment>
      <div className={styles.signUp_wrapper}>
        <div className={styles.parent_cont_right}>
          <div>
            <h1 className={styles.h1}>GigChain</h1>
            <p className={styles.p}>
              The first peer-to-peer freelance marketplace
            </p>
          </div>
        </div>

        <div className={styles.parent_cont_left}>
          <div className={styles.main_content_container}>
            <h1 className={styles.h3}>GigChain</h1>

            <div>
            <h4 className={styles.welcome_text}>
              Hi, Start your GigChain Journey Now
            </h4>

            <h2 className={styles.h4}>Register</h2>

            </div>
            <div className={styles.input_container}>
              <input
                className={styles.input}
                type="text"
                placeholder="Your Full Name"
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button className={styles.button_primary}>Sign Up</button>
            </div>

            <div className={styles.or_container}>
              <div className={styles.line}></div>
              <div className={styles.or_text}>or</div>
              <div className={styles.line}></div>
            </div>


            <div>
              <button className={styles.button_secondary}>
                Login with MetaMask
              </button>
            </div>

            <div className={styles.signIn_link_container}>
              <Link href="/signIn" className={styles.signIn_link}>
                Already a GigChain user? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
