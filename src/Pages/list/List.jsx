import "./list.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import { format } from "date-fns"
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem"



const List = () => {

    const location = useLocation();

    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="left-search">
                        <div className="form">
                            <h2 className="ls-title">Search</h2>
                            <label>Destination</label>
                            <input type="text" placeholder="destination" />
                        </div>
                        <div className="form">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to 
                            ${format(date[0].endDate, "dd/MM/yyyy")}
                            `}</span>
                            {openDate && (<DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <div className="listsItem">
                            <label>Option</label>
                            <div className="list-option">
                                <div className="list-option-item">
                                    <span>Min Price <small>per night</small></span>
                                    <input type="text" className="list-option-input" />
                                </div>
                                <div className="list-option-item">
                                    <span>Max Price <small>per night</small></span>
                                    <input type="text" className="list-option-input" />
                                </div>
                                <div className="list-option-item">
                                    <span>Adult</span>
                                    <input min={1} type="number" className="list-option-input" placeholder={options.adult} />
                                </div>
                                <div className="list-option-item">
                                    <span>Children</span>
                                    <input min={0} type="number" className="list-option-input" placeholder={options.children} />
                                </div>
                                <div className="list-option-item">
                                    <span>Room</span>
                                    <input min={1} type="number" className="list-option-input" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button className="search-btn">Search</button>
                    </div>
                    <div className="list-result">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List