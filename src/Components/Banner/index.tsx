import "./Banner.css";  

import banner from "../../assets/banner.png";


const Banner = () => {

    const informeBanner: string = "O banner principal da página";

    return (
        <header className="banner">
            <img  src={banner} alt={informeBanner}/>
        </header>
    )
}

export default Banner;