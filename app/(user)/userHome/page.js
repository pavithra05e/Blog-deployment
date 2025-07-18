import Blog from "../blog/page";

const UserHome = () =>{
    return(
        <>
        <header>
            <div className="head">
                <a href="/blog">Blog</a>
                <a href="/userLogin">User Login</a>
                <a href="/userAbout">User About</a>
            </div>
        </header>
        <h1><center>Welcome to user Home</center></h1>
        <Blog></Blog>
        </>
    )
}
export default UserHome;