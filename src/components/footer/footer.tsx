import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className={styles.main_footer}>
        <div className={styles.footer_content_container}>
          <div className={styles.main_footer_primary}>
            <div className={styles.about_company_container}>
              <h1>GigChain</h1>
              <div className={styles.socials_container}>
                <a
                  href="https://www.facebook.com/gigchain"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src="/images/facebook.svg" alt="facebook" /> */}
                </a>
                <a
                  href="https://www.instagram.com/gigchain"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src="/images/instagram.svg" alt="instagram" /> */}
                </a>
                <a
                  href="https://www.twitter.com/gigchain"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src="/images/twitter.svg" alt="twitter" /> */}
                </a>
                <a
                  href="https://www.linkedin.com/gigchain"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src="/images/linkedin.svg" alt="linkedin" /> */}
                </a>
              </div>
            </div>
            <div className={styles.footer_links_container}>
              <div className={styles.footer_links_wrapper}>
                <h3>For Clients</h3>
                <Link href="/how-it-works">How to Hire</Link>
                <Link href="/how-it-works">Talent Marketplace</Link>
                <Link href="/how-it-works">Project Catalog</Link>
                <Link href="/how-it-works">Hire an Agency</Link>
                <Link href="/how-it-works">Enterprise</Link>
              </div>
              <div className={styles.footer_links_wrapper}>
                <h3>For Talent</h3>
                <Link href="/how-it-works">How to Find Work</Link>
                <Link href="/how-it-works">Direct Contracts</Link>
                <Link href="/how-it-works">Find Freelance Jobs</Link>
                <Link href="/how-it-works">Free Business Tools</Link>
              </div>
              <div className={styles.footer_links_wrapper}>
                <h3>Resources</h3>
                <Link href="/how-it-works">Help & Support </Link>
                <Link href="/how-it-works">Success Stories </Link>
                <Link href="/how-it-works">Reviews </Link>
                <Link href="/how-it-works">Resources </Link>
                <Link href="/how-it-works">Blog </Link>
              </div>
            </div>
          </div>
          <div className={styles.main_footer_secondary}>
            <h3>2023 GigChain Global Inc.</h3>
            <div className={styles.footer_secondary_links}>
              <Link href="/how-it-works">Terms of Service</Link>
              <Link href="/how-it-works">Privacy Policy</Link>
              <Link href="/how-it-works">Cookie Policy</Link>
              <Link href="/how-it-works">
                Do Not Sell My Personal Information
              </Link>
              <Link href="/how-it-works">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
