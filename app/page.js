import styles from "./page.module.css";
import Blog from "./(user)/blog/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <div className="head">
          <Link href="/blog">Blog</Link>
          <Link href="/userHome">User Home</Link>
          <Link href="/userLogin">User Login</Link>
          <Link href="/userAbout">User About</Link>
        </div>
      </header>
      <p>Get started with us!</p>
      <Blog />
    </div>
  );
}
