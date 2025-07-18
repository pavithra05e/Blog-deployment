import styles from "./page.module.css";
import Blog from "./(user)/blog/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
            <div className="head">
                <a href="/blog">Blog</a>
                <a href="/userHome">User Home</a>
                <a href="/userLogin">User Login</a>
                <a href="/userAbout">User About</a>
            </div>
        </header>
      <p>Get started with us!</p>
      <Blog></Blog>
    </div>
  );
}
