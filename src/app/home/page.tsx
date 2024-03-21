"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles/page.module.scss";
import FeaturedServicesSection from "@/components/featuredServicesSection/featuredServicesSection";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className={styles.home_wrapper}>
        <div className={styles.hero_container}>
          <div className={styles.headings_container}>
            <h5>Good Evening, Sohail</h5>
            <h1>
              Pick top talent at <br />
              your fingertips
            </h1>
          </div>

          <div className={styles.searchBar_container}>
            <input
              placeholder={"Start typing to search services..."}
              className={styles.hero_searchBar}
            />
            <button className={styles.hero_searchButton}>Search</button>
          </div>
        </div>

        <div className={styles.featuredServicesContainer}>
          <FeaturedServicesSection serviceType={"Graphic Design"} />
          <FeaturedServicesSection serviceType={"Web Design"} />
          <FeaturedServicesSection serviceType={"App Development"} />
        </div>
      </div>
    </React.Fragment>
  );
}
