import Blog from "../blog/page";
import Link from "next/link";

const UserHome = () => {
  return (
    <>
      <header>
        <div className="head">
          <Link href="/blog">Blog</Link>
          <Link href="/userLogin">User Login</Link>
          <Link href="/userAbout">User About</Link>
        </div>
      </header>
      <h1>
        <center>Welcome to user Home</center>
      </h1>
      <Blog />
    </>
  );
};

export default UserHome;
