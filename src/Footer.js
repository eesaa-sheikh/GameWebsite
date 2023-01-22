export default function Footer(){

    return <div className="hello">
        <div className="contactText">
        <div className="newThing">
        <h2>Sign up for our store updates</h2>
                <p>Please insert your Email and Password</p>
        </div>
        <div className="ContactFrom">
            <form>
                <input className="nameTab" type={"text"} name = "name" id = "name" required = "Please entre your email"></input>
                <input className="emailTab" type={"email"} name = "name" id = "name" required = "Please entre your email"></input>
                <input className="submit" type={"submit"} value = "Submit">

                


                </input>

            </form>
            </div>

        </div>
            
    </div>
}