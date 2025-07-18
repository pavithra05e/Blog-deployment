const UserLogin = () =>{
    return(
        <>
        <div>
        <h1><center>Welcome to login page of User</center></h1>
        </div>
        <div className="admin-login-form">
        <form>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"></input><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"></input><br/>
                <label for="email">Email:</label><br/>
                <input type="email" id="fname" name="lname"></input><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="fname" name="lname"></input><br/>
                <label for="email">ConfirmPassword:</label><br/>
                <input type="password" id="fname" name="lname"></input><br/><br/>
                <button type="Submit">Submit</button>
        </form>
        </div>
        </>
    )
}
export default UserLogin;