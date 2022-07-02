import "./header.css"
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";


const Header = ({ type }) => {


    const navigate = useNavigate()


    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const [openOptions, setOpenOptions] = useState(false);

    function handleOption(name, action) {
        setOptions(prev => {
            return { ...prev, [name]: action === "i" ? options[name] + 1 : options[name] - 1 }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "header-container listed" : "header-container"}>
                <ul className="headerList">
                    <li className="active">
                        <i className="fa-solid fa-bed"></i>
                        <span>Stay</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-plane"></i>
                        <span>Flights</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-car"></i>
                        <span>Car rentals</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-bed"></i>
                        <span>Attraction</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-taxi"></i>
                        <span>Airport Taxi</span>
                    </li>
                </ul>

                {type !== "list" && (
                    <>
                        <div className="content">
                            <h1> A lifetime of discounts? It's Genius.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto sint libero perferendis, minima at.</p>
                            <button className="sign-register">Sign In/Register</button>
                        </div>
                        <div className="header-search">

                            <div className="header-search-item">
                                <i class="fa-solid fa-bed"></i>
                                <input
                                    type="text"
                                    placeholder="where are you going"
                                    onChange={e => setDestination(e.target.value)}
                                    className="destination-input"
                                />
                            </div>
                            <div className="header-search-item">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                />}
                            </div>
                            <div className="header-search-item">
                                <i className="fa-solid fa-person"></i>
                                <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room `}</span>

                                {openOptions && (
                                    <div className="options">
                                        <div className="option-item">
                                            <span>Adult</span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    onClick={() => handleOption("adult", "d")}>-</button>
                                                <span className="optionCounterNum">{options.adult}</span>
                                                <button onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <span>Children</span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={options.children <= 1}
                                                    onClick={() => handleOption("children", "d")}>-</button>
                                                <span className="optionCounterNum">{options.children}</span>
                                                <button onClick={() => handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <span>Room</span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    onClick={() => handleOption("room", "d")}>-</button>
                                                <span className="optionCounterNum">{options.room}</span>
                                                <button onClick={() => handleOption("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                            <div className="header-search-item">
                                <button className="search-btn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div >
    )

}

export default Header;