import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <span className="logo">Khaled Booking</span>
                <div className="register">
                    <button>REGISTER</button>
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar