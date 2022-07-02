import "./home.css"
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Featured from '../../component/featured/Featured'
import { FeaturedList } from "../../component/featuredList/FeaturedList"
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties"
import MailList from "../../component/mailList/MailList"
import Footer from "../../component/footer/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1>Browse by property type</h1>
                <FeaturedList />
                <h1>Homes Guests Love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home;