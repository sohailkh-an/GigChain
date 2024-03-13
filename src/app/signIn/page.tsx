"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function SignInPage() {
  return (
    <React.Fragment>
      <div className={styles.signIn_wrapper}>
        <div className={styles.parent_cont_left}>
          <div className={styles.main_content_container}>
            <h1 className={styles.h3}>GigChain</h1>

            <div>
              <h4 className={styles.welcome_text}>Hi, Welcome back 👋</h4>

              <h2 className={styles.h4}>Login Now</h2>
            </div>

            <div className={styles.input_container}>
              <input
                className={styles.input}
                type="text"
                placeholder="Email or Username"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
            </div>

            <div className={styles.misc_fields}>
              <label className={styles.custom_checkbox} htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" />
                <span className={styles.checkbox_label}>Remember Me</span>
              </label>

              <a className={styles.forgetPassLink} href="/forgetPassword">Forgot password?</a>
            </div>

            <div>
              <Link href="/home">
                <button className={styles.button_primary}>Login</button>
              </Link>
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

            <div className={styles.register_link_container}>
              <Link href="/register" className={styles.register_link}>
                Dont have a GigChain profile? Register
              </Link>
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
  );
}
