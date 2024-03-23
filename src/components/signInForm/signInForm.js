"use client";
import React from "react";
import styles from "./styles/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: "/home",
      });

      if (response && response.error) {
        console.error("Failed to login user");
        return;
      }
      router.replace("/home");
    } catch (error) {
      console.error("Failed to login user");
    }
  };

  return (
    <React.Fragment>
      <div className={styles.signIn_wrapper}>
        <div className={styles.parent_cont_left}>
          <form
            onSubmit={handleSignIn}
            className={styles.main_content_container}
          >
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
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className={styles.misc_fields}>
              <label className={styles.custom_checkbox} htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" />
                <span className={styles.checkbox_label}>Remember Me</span>
              </label>

              <a className={styles.forgetPassLink} href="/forgetPassword">
                Forgot password?
              </a>
            </div>

            <div>
              <button type="submit" className={styles.button_primary}>
                Login
              </button>
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
          </form>
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
