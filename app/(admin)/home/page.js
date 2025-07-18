import Blog from "@/app/(user)/blog/page";

const AdminHome = () =>{
    return(
        <>
        <header>
            <div className="head">
                <a href="/crud">CRUD</a>
                {/* <a href="/about">Admin About</a> */}
            </div>
        </header>
        <h2><center>Welcome to Homepage of Admin</center></h2>
        <Blog></Blog>
        </>
    )
}
export default AdminHome;