import "../../styles/Home.scss";
import Newsletter from "./Newsletter";

function Home() {
    return (
        <>
            <div>
                <nav className="navbar">
                    <p className="nav__logo">LOGO</p>
                    <ul className="navlinks">
                        <li>
                            <a className="navlinks__shop" href="#">Shop</a>
                        </li>
                        <li>
                            <a className="navlinks__about" href="#">About</a>
                        </li>
                        <li>
                            <a className="navlinks__pods" href="#">Pods</a>
                        </li>
                        <li>
                            <a className="navlinks__news" href="#">News</a>
                        </li>
                        <li>
                            <a className="navlinks__contact" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <hr className="nav__bottomLine"></hr>
            </div>
            
            
                <div className="hero__background"></div>
                
            {/* Main Hero Heading */}
            <div>
                <span className="hero_headingWords">Providing the suitable
                environment for plants to grow faster and fresher.</span>
            </div>
            <button className="hero__cta">Shop Now </button>
            
        </>
    )
}

export default Home;