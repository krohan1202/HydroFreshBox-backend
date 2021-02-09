import "../../styles/Home.scss";
import Newsletter from "./Newsletter";

//Hero assets
import HeroPic from "../../assets/Home/1-Hero Section/Hero Pic.png";
//How we make an impact / About Us Section
import LeftPic from "../../assets/Home/2-How we make an impact/Left side Pic.png";
import RightPic from "../../assets/Home/2-How we make an impact/Right side Pic.png";
import Arrow from "../../assets/Home/2-How we make an impact/Arrow.png";

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
                <span className="hero__headingWords">Providing the suitable
                environment for plants to grow faster and fresher.</span>
            </div>
            
                <a className="hero__cta" href="/shop">
                Shop Now
                <svg id="hero__arrow" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M11.2648 25.554L11.233 25.5741L22.4127 14.5154L22.3823 21.514C22.3803 21.8562 22.5164 22.1826 22.7582 22.4271C23.0001 22.6716 23.3233 22.8095 23.6659 22.8116L24.7539 22.8178C25.096 22.8197 25.4192 22.6881 25.6636 22.4464C25.9081 22.2045 26.044 21.8833 26.0458 21.5413L26.1115 9.55802C26.1134 9.21461 25.9803 8.89127 25.7377 8.64731C25.495 8.40065 25.173 8.26393 24.8299 8.26233L12.8461 8.19714C12.5042 8.19541 12.1815 8.32754 11.9369 8.56952C11.6925 8.81124 11.557 9.13258 11.5549 9.47437L11.5492 10.5624C11.547 10.9044 11.6794 11.227 11.9212 11.4715C12.1629 11.7159 12.4722 11.8397 12.8142 11.8413L19.872 11.8675L8.66621 22.952C8.16269 23.4501 8.16886 24.3026 8.66667 24.8058L9.43212 25.5797C9.92993 26.0829 10.7612 26.0521 11.2648 25.554Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="23.5" height="23.5" fill="white" transform="translate(34 17) rotate(135.312)"/>
                    </clipPath>
                    </defs>
                </svg>
                </a>
            

            <img src={HeroPic} className="hero__pic"/>
            
            {/* How we make an impact / About Us Section */}
            <div className="makeAnImpact">
                <p className="makeAnImpact__Heading">How we make an impact</p>
                <p className="makeAnImpact__text">Lorem ipsum dolor sit amet, consect etu adipiscing elit. Quisque, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque solli lenaria loipsum aute irure dolor.</p>
                <a className="makeAnImpact__knowMoreBtn" href="/about">
                    <img id="newsletter__knowMoreBtn--arrow" src={Arrow} alt="->"/> Know More
                </a>

                <img src={LeftPic} className="makeAnImpact__LeftPic" />
                <img src={RightPic} className="makeAnImpact__RightPic" />
            </div>
            
            {/* Know about process */}
            <div className="process">
                <h1 className="process__Heading">Know about the process of farming</h1>
                <p className="process__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed doutinci, et dolore magna aliqua.</p>
            </div>
        </>
    )
}

export default Home;