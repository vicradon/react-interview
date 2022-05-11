import React from "react";
import Link from "next/link";
import styles from "../../styles/MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <div className={styles.root}>
      <h1>
        <Link href={"/"}>
          <a>Mini Blog</a>
        </Link>
      </h1>

      {children}
    </div>
  );
}

export default MainLayout;
