"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterationPage() {

  const router = useRouter();
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      password: password,
    };

    console.log(name);

    const response = await fetch("/register/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log("User registered successfully");
      router.push('/signIn'); 
     
    } else if (response.status === 409) {
      console.error("User already exists");
    } else {
      console.error("Failed to register user");
    }
  };

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
          <form
            onSubmit={handleRegistration}
            className={styles.main_content_container}
          >
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
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className={styles.button_primary}>
                Sign Up
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

            <div className={styles.signIn_link_container}>
              <Link href="/signIn" className={styles.signIn_link}>
                Already a GigChain user? Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
