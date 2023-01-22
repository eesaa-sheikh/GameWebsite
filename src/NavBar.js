export default function NavBar(){
    return < nav className="nav">
        <a href="/" className="siteTitle"><h2>Cherry Blossom</h2></a>

    <ul>

        <li className="active">
                <a href="/Home"><h3>Home</h3></a>
        </li>    

        <li>
                <a href="/Products"><h3>Products</h3></a>
        </li>

        <li>
                <a href="/ContactUs"><h3>Contact Us</h3></a>
        </li>
    
    <div className="oval">
        <li className="signUP">
            <a href="/Signup"><h3>Sign Up</h3></a>
        </li>

    </div>

        </ul>
    </nav>
}