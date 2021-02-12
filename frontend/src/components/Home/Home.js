import "../../styles/Home.scss";
import Newsletter from "./Newsletter";

//Hero assets
import HeroPic from "../../assets/Home/1-Hero Section/Hero Pic.png";
//How we make an impact assets
import LeftPic from "../../assets/Home/2-How we make an impact/Left side Pic.png";
import RightPic from "../../assets/Home/2-How we make an impact/Right side Pic.png";
import Arrow from "../../assets/Home/2-How we make an impact/Arrow.png";
// Know about process of farming assets
import BackBigPic from "../../assets/Home/3-Know about process of farming/Back Big Pic.png";
import RightLine from "../../assets/Home/3-Know about process of farming/Right Line.png";
import FrontSmallPic from "../../assets/Home/3-Know about process of farming/Front Small Pic.png";
// Updated methods assets
import Updated__Left from "../../assets/Home/4-Updated methods/Left Side Pic.png";
//Footer assets
import FooterBg from "../../assets/Home/6-Footer/Bg.png";

function Home() {
    return (
        <>
            <div>
                <nav className="navbar">
                    <p className="nav__logo">LOGO</p>
                    <ul className="navlinks">
                        <li><a className="navlinks__shop" href="/shop">Shop</a></li>
                        <li><a className="navlinks__about" href="/about">About</a></li>
                        <li><a className="navlinks__pods" href="/pods">Pods</a></li>
                        <li><a className="navlinks__news" href="/news">News</a></li>
                        <li><a className="navlinks__contact" href="/contact">Contact</a></li>
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
                    <img id="makeAnImpact__knowMoreBtn--arrow" src={Arrow} alt="->"/> Know More
                </a>

                <img src={LeftPic} className="makeAnImpact__LeftPic" />
                <img src={RightPic} className="makeAnImpact__RightPic" />
            </div>
            
            {/* Know about process */}
            <div className="process">
                <h1 className="process__Heading">Know about the process of farming</h1>
                <p className="process__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed doutinci, et dolore magna aliqua.</p>
                
                <a href="#" className="process__button">
                    <p id="process__button--Learn">Learn more</p>
                </a>

                <img src={RightLine} className="process__rightLine" />
                <img src={BackBigPic} className="process__blackBigPic" />
                <img src={FrontSmallPic} className="process__frontSmallPic" />

                {/* Updated methods */}
                <h1 className="updated__Heading">Updated methods, Healthier produce</h1>
                <p className="updated__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed doutinci.</p>

                <a className="updated__knowMoreBtn" href="/about">
                    <img id="updated__knowMoreBtn--arrow" src={Arrow} alt="->"/> View news
                </a>
                <img src={Updated__Left} className="updated__leftPic" />
            </div>

            {/* What makes us unique */}
            <div className="makesUsUnique">
                <p className="makesUsUnique__Heading">What makes us unique</p>

                <span className="makesUsUnique__leftCard">
                    <svg className="makesUsUnique__leftCard--icon" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4088 51.635C11.6217 49.8355 7.73334 44.5507 7.73334 38.4843C7.73334 35.5191 8.66162 32.694 10.418 30.3145C10.458 30.2602 10.4942 30.2009 10.5244 30.1405C10.8146 29.5602 10.5789 28.8554 9.99853 28.5652C9.47324 28.3022 8.84491 28.4711 8.51523 28.9357C6.46657 31.7187 5.38367 35.0202 5.38367 38.4843C5.38367 41.9923 6.49136 45.3277 8.5869 48.1295C10.6124 50.8378 13.4976 52.8796 16.7112 53.8788C16.8274 53.915 16.9449 53.9321 17.0604 53.9321C17.5612 53.9321 18.0254 53.6091 18.1819 53.1057C18.3746 52.4861 18.0285 51.8276 17.4088 51.635V51.635Z" fill="#24B794"/>
                        <path d="M47.5251 27.4548C47.5251 25.2184 46.8281 23.0877 45.5092 21.2909L38.072 10.2503C37.8536 9.9261 37.4884 9.73177 37.0975 9.73177C36.7066 9.73177 36.3415 9.9261 36.123 10.2503L32.9891 14.9025L23.2993 0.518481C23.081 0.194328 22.7157 0 22.325 0C21.9342 0 21.5689 0.194328 21.3506 0.518481L4.71693 25.2104C1.9416 28.982 0.474976 33.4555 0.474976 38.15C0.474976 50.1981 10.2769 60 22.325 60C34.373 60 44.175 50.1981 44.175 38.15C44.175 37.1882 44.1107 36.2247 43.9858 35.2762C46.1544 33.364 47.5251 30.5667 47.5251 27.4548V27.4548ZM37.0975 13.0096L43.56 22.6031C43.5729 22.6231 43.5866 22.6427 43.6008 22.662C44.6308 24.0569 45.1753 25.7142 45.1753 27.4547C45.1753 31.9087 41.5517 35.5323 37.0975 35.5323C32.6435 35.5323 29.0199 31.9087 29.0199 27.4547C29.0199 25.7142 29.5643 24.0569 30.5943 22.662C30.608 22.6435 30.621 22.6247 30.6336 22.6053L33.9612 17.6655C33.9674 17.6564 33.9737 17.6475 33.9796 17.6382L37.0975 13.0096ZM41.8251 38.15C41.8251 48.9025 33.0772 57.6502 22.3248 57.6502C11.5723 57.6502 2.82465 48.9025 2.82465 38.15C2.82465 33.9505 4.13936 29.9494 6.62684 26.5795C6.64106 26.5604 6.6548 26.5403 6.66808 26.5197L22.325 3.27772L31.5727 17.0054L28.6858 21.291C27.367 23.0877 26.6701 25.2185 26.6701 27.4548C26.6701 33.2045 31.3478 37.8823 37.0975 37.8823C38.7788 37.8823 40.3681 37.4817 41.7758 36.772C41.8079 37.2302 41.8251 37.6903 41.8251 38.15Z" fill="#24B794"/>
                        <path d="M32.955 27.1683C32.955 26.599 33.071 26.0497 33.2996 25.5354C33.5633 24.9424 33.2962 24.2481 32.7033 23.9845C32.1104 23.7213 31.4161 23.9878 31.1525 24.5808C30.7893 25.3976 30.6052 26.2681 30.6052 27.1683C30.6052 29.3006 31.6645 31.2826 33.4387 32.4697C33.6394 32.604 33.8664 32.6682 34.091 32.6682C34.47 32.6682 34.842 32.4851 35.0685 32.1466C35.4293 31.6073 35.2847 30.8775 34.7454 30.5167C33.6243 29.7665 32.955 28.5148 32.955 27.1683V27.1683Z" fill="#24B794"/>
                        <path d="M21.7678 53.2625C21.4802 52.5066 20.4071 52.291 19.8516 52.8818C19.1902 53.5227 19.5462 54.6995 20.4531 54.8639C21.3523 55.0609 22.136 54.1066 21.7678 53.2625Z" fill="#24B794"/>
                        <path d="M36.4786 33.5408C37.2362 34.0655 38.3211 33.4853 38.3056 32.5645C38.3226 31.6434 37.2356 31.0621 36.4786 31.5869C35.7925 32.0169 35.7898 33.1122 36.4786 33.5408Z" fill="#24B794"/>
                    </svg>
                    <p className="makesUsUnique__leftCard--Heading">90% less water usage</p>
                    <p className="makesUsUnique__leftCard--text">Our vertical farming methods use 90 percent less water than open field growing. </p>
                </span>

                <span className="makesUsUnique__middleCard">
                    <svg className="makesUsUnique__middleCard--icon" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9871 28.8331C28.3563 28.2564 28.1151 26.3719 28.1151 26.3719C14.226 21.5879 3.83523 15.5901 4.42368 13.1525C4.7135 11.9477 5.11512 11.4195 5.39317 11.3268C6.01546 11.1238 7.42041 11.8609 9.14165 12.9951L12.0031 9.6351C10.6496 8.8039 7.31301 6.05879 4.0353 7.12682C2.69656 7.55932 0.935601 8.7774 0.132356 12.1198C-1.75071 19.9461 16.9182 27.0104 26.9323 30.4851C26.9308 30.4866 27.6178 29.4112 27.9871 28.8331Z" fill="#24B794"/>
                        <path d="M60.4817 13.6629C60.0227 13.0171 59.5431 12.386 59.04 11.7784C53.5203 5.15692 45.2171 0.93335 35.9416 0.93335C35.9254 0.93335 35.9121 0.934819 35.8974 0.934819C35.8871 0.934819 35.8783 0.93335 35.8695 0.93335C35.8356 0.93335 35.8018 0.93776 35.7665 0.93776C26.563 0.99072 18.3305 5.20105 12.846 11.7799C12.34 12.3874 11.8604 13.0171 11.4043 13.6629C11.0571 14.1542 10.7335 14.6647 10.4142 15.1767C11.0424 15.5739 11.753 15.9961 12.5459 16.4404C12.8196 16.0034 13.0932 15.565 13.3904 15.1443C15.2602 16.3933 17.4198 17.4834 19.8104 18.3837C19.678 18.8618 19.578 19.3649 19.4603 19.8548C20.1915 20.174 20.9609 20.4947 21.745 20.814C21.8686 20.2623 21.9804 19.7047 22.1216 19.1707C25.9186 20.3344 30.185 21.0332 34.7102 21.142V24.277L34.8632 24.3741L35.078 25.6628L35.4105 27.637L37.1758 28.0945V21.142C38.0526 21.1214 38.9074 21.0596 39.7592 20.9964L40.405 19.1663L40.6536 18.4602C39.515 18.569 38.3586 18.6485 37.1758 18.6764V3.50927C42.1836 4.28307 46.4956 9.4687 48.9465 16.892C47.7607 17.2436 46.5073 17.529 45.226 17.782C46.063 18.2027 46.8957 18.8544 47.4871 19.7768C48.2094 19.5974 48.9362 19.4208 49.6335 19.2105C50.5544 22.7176 51.0885 26.6175 51.112 30.7455H47.2885C47.2488 30.9955 47.2091 31.2309 47.1664 31.4928C48.664 32.1077 50.4441 32.8403 50.8295 32.9992C51.9726 33.4714 52.8259 34.182 53.3967 35.047C53.4452 34.4379 53.4982 33.8318 53.5262 33.211H59.446C59.3416 33.976 59.243 34.7454 59.1077 35.481C59.4828 35.2882 59.8109 34.9116 59.9815 34.2026C60.0742 33.8201 60.0845 33.5008 60.0654 33.211H63.4476C63.0445 38.2658 61.2659 42.9307 58.4986 46.8527C56.5964 45.5831 54.3927 44.4709 51.9476 43.5633C52.0815 43.0748 52.1918 42.5673 52.3095 42.0657C51.5269 42.6791 50.5456 43.0219 49.4364 43.0219C48.9509 43.0219 48.5419 42.9586 48.2668 42.9204L48.183 42.9042C47.8887 42.8836 47.4753 42.8498 44.9744 41.9936C45.2686 41.5964 45.6187 41.0771 46.0027 40.471V39.2382C47.1649 39.6369 48.155 39.959 48.3874 39.9752C49.0303 40.0193 50.681 40.5843 51.1547 38.6203C51.6298 36.6549 50.3956 36.0062 49.71 35.7208C49.3202 35.5633 47.5106 34.819 46.0027 34.1982V31.7017L45.1436 33.8451C44.3962 33.5376 43.8593 33.317 43.8593 33.317C43.8593 33.317 45.7217 23.0456 45.2127 21.7452C44.7037 20.4447 43.1781 20.149 43.1781 20.149L39.1207 31.6414L34.7102 30.5012L32.8227 30.0114L32.1769 26.1526L30.1188 24.836C30.1173 24.836 30.2394 28.0165 29.9363 29.7319C29.879 30.0555 29.8054 30.3277 29.7142 30.5145C29.6804 30.5866 29.6186 30.6734 29.5686 30.7528C29.3538 31.1088 29.0169 31.534 28.6432 31.965C28.6417 31.9679 28.6388 31.9679 28.6373 31.9709C28.4608 32.1754 28.2754 32.3769 28.0915 32.574C28.0709 32.5976 28.0518 32.6182 28.0312 32.6402C27.8561 32.8241 27.684 33.0036 27.5178 33.1713C26.9573 33.7436 26.5086 34.1658 26.5086 34.1658L28.3078 35.4957L31.303 33.211H31.3045L31.9827 32.6917L33.0581 33.211L35.7841 34.5218L37.1714 35.1912L37.4818 35.3412L32.9595 46.6158C32.9595 46.6158 34.4425 47.9472 35.5576 47.088C36.6742 46.2289 41.4304 37.6053 41.4304 37.6053C41.4304 37.6053 42.2616 37.9098 43.3517 38.304L43.0987 38.9351C43.2458 38.9307 43.3855 38.9131 43.5341 38.9101V41.4963C43.4253 41.4581 43.3238 41.4213 43.209 41.3816C43.0501 41.3581 42.8824 41.3448 42.725 41.3213C42.2395 42.1789 41.7952 42.9469 41.3951 43.628C44.0667 43.9266 46.6147 44.418 48.9509 45.1079C46.4985 52.5341 42.1807 57.7154 37.1729 58.4906V49.5374C36.4476 50.042 35.6032 50.3201 34.7073 50.3201V58.5083C29.648 57.8139 25.2772 52.6209 22.7998 45.1476C25.3228 44.3871 28.0945 43.8545 31.0147 43.5647L32.0386 41.0094C28.5034 41.2816 25.1492 41.898 22.1069 42.8321C21.3287 39.8752 20.8314 36.6314 20.6784 33.2125H23.2235L23.8708 32.6064C21.8583 31.9165 19.959 31.225 18.1701 30.5263C18.1686 30.5998 18.1628 30.6719 18.1628 30.744H8.34727C8.36051 29.2155 8.50763 27.7194 8.7636 26.26C7.97066 25.8334 7.21596 25.4068 6.50393 24.9772C6.10525 26.925 5.8728 28.933 5.8728 30.9985C5.8728 37.4523 7.92505 43.4309 11.3984 48.3326C11.856 48.9784 12.3356 49.6095 12.8402 50.2156C18.3261 56.7944 26.5571 61.0048 35.7606 61.0577C35.7959 61.0577 35.8297 61.0621 35.8636 61.0621C35.8724 61.0621 35.8812 61.0607 35.8915 61.0607C35.9092 61.0607 35.9224 61.0621 35.9357 61.0621C45.2112 61.0621 53.5144 56.8386 59.0341 50.2186C59.5402 49.611 60.0198 48.9799 60.4744 48.3355C63.9477 43.4309 66 37.4537 66 30.9985C66.0059 24.5477 63.9551 18.5661 60.4817 13.6629ZM20.5092 16.0829C18.3893 15.2914 16.4812 14.3381 14.8365 13.2598C18.0613 9.429 22.3055 6.47797 27.1529 4.84504C24.3901 7.51069 22.0937 11.4077 20.5092 16.0829ZM34.7073 18.6779C30.4145 18.5735 26.3732 17.9262 22.8057 16.8552C25.2831 9.382 29.6465 4.18451 34.7073 3.49014V18.6779ZM8.43995 33.2125H18.2128C18.3731 36.9065 18.9322 40.4121 19.809 43.6162C17.4184 44.5136 15.2573 45.6081 13.3904 46.8541C10.6231 42.9307 8.84305 38.2673 8.43995 33.2125ZM14.8439 48.7357C16.4871 47.6603 18.3923 46.7085 20.5078 45.917C22.0907 50.5952 24.3901 54.4892 27.1544 57.1534C22.3055 55.5205 18.0716 52.5665 14.8439 48.7357ZM44.508 57.2299C47.315 54.5525 49.6482 50.6128 51.2459 45.8714C53.4129 46.6717 55.3607 47.6382 57.0378 48.7357C53.763 52.6238 49.4481 55.6117 44.508 57.2299ZM44.508 4.77001C49.4467 6.38824 53.7659 9.3717 57.0422 13.2613C55.6019 14.2043 53.9498 15.0428 52.1447 15.771C52.0609 15.7475 52.002 15.7342 52.002 15.7342L51.9653 15.8431C51.7255 15.9387 51.4916 16.0387 51.2444 16.1299C49.6453 11.39 47.315 7.44744 44.508 4.77001ZM53.5732 30.7469C53.5526 26.3527 52.9656 22.188 51.9432 18.4337C54.3838 17.526 56.5891 16.4168 58.4913 15.1472C61.6101 19.5723 63.4785 24.9419 63.5314 30.7469H53.5732Z" fill="#24B794"/>
                    </svg>
                    <p className="makesUsUnique__middleCard--Heading">3,000 miles of travel</p>
                    <p className="makesUsUnique__middleCard--text">On average, the gourmet product travels 3,000 miles to reach the finest restuarants in Dubai.</p>
                </span>

                <span className="makesUsUnique__rightCard">
                    <svg className="makesUsUnique__rightCard--icon" viewBox="0 0 51 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 39.3259C0 54.0335 11.4361 66.0001 25.5 66.0001C28.8494 66.0024 32.1663 65.3141 35.2611 63.9745C38.356 62.6348 41.168 60.6701 43.5363 58.1927C45.9047 55.7153 47.7829 52.7739 49.0636 49.5365C50.3443 46.2992 51.0023 42.8295 51 39.3259C50.9997 39.0329 50.8882 38.752 50.6902 38.5448C50.4921 38.3376 50.2235 38.221 49.9434 38.2207H1.0566C0.77647 38.221 0.507912 38.3376 0.309833 38.5448C0.111754 38.752 0.000328979 39.0329 0 39.3259H0ZM48.8632 40.4312C48.7921 42.0899 48.5602 43.7367 48.1708 45.3463H2.83168C2.44009 43.7371 2.20725 42.0901 2.13681 40.4312H48.8632ZM3.0691 46.2565H47.9321C46.5023 51.3196 43.545 55.7631 39.502 58.9231C35.4589 62.0832 30.547 63.7903 25.5 63.7896C14.9042 63.7896 5.93309 56.3805 3.0691 46.2565Z" fill="#24B794"/>
                        <path d="M32.8514 58.8873C35.2359 57.8117 37.3556 56.1835 39.0505 54.1257C39.1258 54.0341 39.2328 53.9776 39.348 53.9686C39.4632 53.9595 39.577 53.9987 39.6646 54.0775C39.7521 54.1563 39.8061 54.2683 39.8147 54.3887C39.8234 54.5092 39.7859 54.6283 39.7106 54.7199C37.9268 56.8827 35.6971 58.5939 33.1895 59.7247C33.1352 59.7487 33.0769 59.7611 33.018 59.7611C32.9176 59.7613 32.8202 59.7253 32.7424 59.659C32.6645 59.5928 32.6109 59.5004 32.5907 59.3975C32.5706 59.2947 32.585 59.1877 32.6316 59.0947C32.6782 59.0017 32.7541 58.9285 32.8464 58.8873H32.8514Z" fill="#24B794"/>
                        <path d="M47.0396 14.324C49.0844 12.0654 48.5611 8.73277 48.5375 8.60274C48.5056 8.41029 48.4255 8.23011 48.3054 8.08056C48.1854 7.931 48.0295 7.8174 47.8538 7.75133C47.6781 7.68526 47.4888 7.66908 47.3051 7.70444C47.1215 7.73979 46.9501 7.82542 46.8084 7.9526L42.1693 12.1148L43.5752 4.82281C43.6127 4.62829 43.5995 4.42679 43.5369 4.23948C43.4743 4.05216 43.3646 3.88593 43.2194 3.75824C43.0742 3.63055 42.8988 3.54611 42.7116 3.51379C42.5244 3.48146 42.3324 3.50244 42.1556 3.57453C42.0164 3.63044 38.7211 5.00485 37.805 8.29327C37.3848 9.79381 37.529 11.4062 38.2301 13.1043C37.3248 12.956 36.399 13.0267 35.524 13.3111C33.9987 13.8312 32.8303 15.0327 32.0521 16.8778C31.8156 17.4555 31.6142 18.0483 31.4492 18.6527C31.4492 18.6657 31.4418 18.68 31.438 18.693C30.2758 22.8461 29.607 29.8104 29.7338 33.472C29.7522 34.0741 29.9334 34.6584 30.2564 35.1572C30.5793 35.6559 31.0309 36.0486 31.5586 36.2898C31.95 36.4715 32.3734 36.5659 32.8017 36.5667C33.5259 36.566 34.2261 36.2954 34.7769 35.8035C36.3817 34.3809 38.5844 31.9897 40.5272 29.5621C42.0326 27.6793 43.2694 25.9213 44.1035 24.478C44.414 23.9508 44.6922 23.4036 44.9364 22.8396C45.7157 20.9958 45.7767 19.2846 45.1178 17.7542C44.8393 17.1184 44.4555 16.5391 43.9842 16.043C45.2384 15.7569 46.2602 15.1848 47.0396 14.324ZM40.0014 16.0144L40.0338 16.0313L40.071 16.0508L40.1046 16.0677H40.1146L40.1382 16.0768L40.1804 16.0937L40.2028 16.1028C40.2451 16.1171 42.4403 16.8908 43.1973 18.6709C43.6001 19.6162 43.5379 20.6876 43.0059 21.9463C42.8517 22.3023 42.6795 22.6496 42.49 22.9865L40.7311 22.0048C40.6806 21.9746 40.6248 21.9552 40.567 21.9479C40.5093 21.9406 40.4507 21.9455 40.3948 21.9623C40.3388 21.9791 40.2867 22.0075 40.2414 22.0458C40.1962 22.084 40.1587 22.1314 40.1313 22.1851C40.1038 22.2388 40.0869 22.2977 40.0816 22.3583C40.0763 22.4189 40.0827 22.48 40.1004 22.538C40.1181 22.596 40.1467 22.6497 40.1846 22.6959C40.2225 22.7421 40.2688 22.7799 40.3209 22.8071L42.0376 23.7654C41.1127 25.2425 40.1023 26.659 39.012 28.0069L35.6296 26.3777C35.5248 26.3272 35.405 26.3223 35.2968 26.3641C35.1885 26.4059 35.1005 26.491 35.0522 26.6007C35.0039 26.7103 34.9992 26.8356 35.0392 26.9488C35.0792 27.0621 35.1606 27.1541 35.2654 27.2047L38.4302 28.7364C36.6899 30.865 34.803 32.8895 33.4133 34.1209C33.2769 34.2423 33.1106 34.321 32.9335 34.348C32.7563 34.375 32.5755 34.3492 32.4117 34.2736C32.2479 34.198 32.1078 34.0756 32.0075 33.9205C31.9072 33.7653 31.8507 33.5838 31.8445 33.3966C31.7289 30.0692 32.3007 23.8876 33.3126 19.8944L36.6875 21.4795C36.7433 21.5061 36.8039 21.5198 36.8652 21.5198C36.9647 21.5198 37.0612 21.4841 37.1386 21.4187C37.216 21.3534 37.2696 21.2622 37.2905 21.1605C37.3115 21.0587 37.2984 20.9526 37.2536 20.8597C37.2088 20.7668 37.1349 20.6927 37.0442 20.6499L33.5537 19.0102C33.6748 18.5922 33.818 18.1816 33.9826 17.7802C34.5146 16.5215 35.2256 15.7517 36.1679 15.4267C37.9454 14.8064 39.9803 15.9936 40.0014 16.0079V16.0144ZM41.0058 6.97608L40.0487 11.9354C39.6534 10.8405 39.5776 9.83672 39.8262 8.93302C40.048 8.18164 40.4548 7.50452 41.0058 6.96958V6.97608ZM46.2938 11.3294C46.1442 11.8836 45.8706 12.3926 45.4957 12.8144C44.9985 13.3631 44.3053 13.7276 43.4161 13.9079L46.2938 11.3294Z" fill="#24B794"/>
                        <path d="M19.1331 19.7137C17.5718 15.6828 14.0291 13.0289 10.4181 13.0289H10.3174C10.3062 12.9977 10.2937 12.9652 10.2813 12.934C9.57154 11.1175 7.42851 10.3061 5.49556 11.1253C4.60578 11.4923 3.8711 12.1805 3.42464 13.0653C3.20141 13.498 3.07159 13.9767 3.04432 14.4675C3.01704 14.9584 3.09298 15.4496 3.26677 15.9064C3.41147 16.2818 3.6223 16.6254 3.88829 16.9194C2.33572 19.5863 2.11321 23.1828 3.35627 26.4024C4.91879 30.4333 8.41301 33.0819 12.0427 33.0884C12.6071 34.0598 13.6674 34.6228 14.8135 34.6228C15.2995 34.622 15.7807 34.5226 16.2306 34.3302C18.0057 33.5786 18.9218 31.5996 18.2729 29.93C18.2543 29.8845 18.2356 29.839 18.2157 29.7935C20.1201 27.0798 20.493 23.2232 19.1331 19.7137ZM16.1187 28.9873C15.9372 29.1959 15.839 29.4693 15.8443 29.7514C15.8496 30.0334 15.958 30.3025 16.1473 30.5035C16.2179 30.5779 16.2737 30.6663 16.3114 30.7635C16.519 31.2979 16.1175 31.9949 15.4412 32.2849C14.765 32.5748 14.0055 32.3668 13.7979 31.8311C13.784 31.7908 13.7728 31.7495 13.7644 31.7075C13.7079 31.4438 13.5609 31.211 13.3513 31.053C13.1417 30.8951 12.8839 30.8231 12.627 30.8506C9.64363 31.1666 6.64414 28.9964 5.31905 25.5754C4.2003 22.6939 4.53841 19.4744 6.17551 17.3745C6.27724 17.244 6.34914 17.091 6.38574 16.9271C6.42234 16.7632 6.42266 16.5927 6.38669 16.4287C6.35072 16.2646 6.2794 16.1113 6.17817 15.9805C6.07695 15.8496 5.94849 15.7447 5.8026 15.6737C5.54648 15.5585 5.34199 15.3456 5.23079 15.0782C5.17521 14.9157 5.15344 14.7426 5.16695 14.5706C5.18045 14.3986 5.22892 14.2317 5.3091 14.0808C5.52295 13.6633 5.87329 13.3402 6.29609 13.1706C7.13391 12.8144 8.06371 13.0848 8.326 13.7597C8.3758 13.8929 8.39906 14.0354 8.39436 14.1784C8.39026 14.3397 8.42004 14.5001 8.48161 14.6481C8.54318 14.7962 8.63504 14.9283 8.75072 15.0352C8.8664 15.142 9.00308 15.2211 9.15113 15.2667C9.29918 15.3123 9.45499 15.3234 9.60758 15.2992C9.88239 15.2555 10.16 15.2338 10.4379 15.2342C13.2 15.2342 15.9434 17.3459 17.1815 20.5394C18.35 23.5768 17.9348 26.8913 16.1187 28.9873Z" fill="#24B794"/>
                        <path d="M14.7924 27.5439C14.7329 27.575 14.6674 27.591 14.6009 27.5907C14.5029 27.5903 14.4078 27.5552 14.3312 27.4911C14.2546 27.427 14.201 27.3378 14.179 27.2378C14.1569 27.1379 14.1678 27.0331 14.2099 26.9404C14.252 26.8477 14.3228 26.7727 14.4107 26.7274C14.999 26.4236 15.448 25.8882 15.6594 25.2386C15.8707 24.5889 15.8272 23.8781 15.5382 23.2621C15.4896 23.1539 15.4837 23.0301 15.5217 22.9174C15.5596 22.8046 15.6385 22.7121 15.7412 22.6596C15.8438 22.6072 15.9621 22.5991 16.0704 22.6372C16.1788 22.6752 16.2684 22.7563 16.3201 22.8629C16.513 23.2759 16.6264 23.7245 16.6535 24.1833C16.6807 24.6421 16.6212 25.102 16.4784 25.5367C16.3356 25.9714 16.1123 26.3724 15.8213 26.7168C15.5303 27.0612 15.1773 27.3423 14.7824 27.5439H14.7924Z" fill="#24B794"/>
                        <path d="M24.5043 34.4224C24.5041 34.8378 24.6216 35.244 24.8421 35.5896C25.0626 35.9351 25.3762 36.2045 25.743 36.3636C26.1099 36.5227 26.5137 36.5644 26.9032 36.4834C27.2927 36.4024 27.6506 36.2024 27.9314 35.9086C28.2122 35.6148 28.4035 35.2405 28.4809 34.8331C28.5583 34.4256 28.5184 34.0032 28.3663 33.6195C28.2142 33.2357 27.9567 32.9077 27.6264 32.6771C27.2961 32.4464 26.9078 32.3235 26.5106 32.3237C25.9788 32.3248 25.4691 32.5462 25.0931 32.9396C24.717 33.3329 24.5053 33.8661 24.5043 34.4224ZM25.3745 34.4224C25.3745 34.187 25.4412 33.957 25.5662 33.7613C25.6913 33.5656 25.869 33.4131 26.0769 33.3231C26.2848 33.2331 26.5135 33.2096 26.7342 33.2556C26.9549 33.3016 27.1575 33.415 27.3166 33.5816C27.4756 33.7481 27.5838 33.9602 27.6276 34.1911C27.6713 34.422 27.6486 34.6612 27.5623 34.8786C27.476 35.096 27.3301 35.2817 27.1429 35.4123C26.9557 35.5429 26.7356 35.6124 26.5106 35.6122C26.2092 35.6118 25.9202 35.4863 25.7072 35.2632C25.4941 35.0401 25.3745 34.7377 25.3745 34.4224Z" fill="#24B794"/>
                        <path d="M16.3934 7.67158C16.3934 7.18666 16.256 6.71263 15.9985 6.3094C15.741 5.90617 15.375 5.59185 14.9467 5.40616C14.5185 5.22047 14.0472 5.17176 13.5925 5.26617C13.1378 5.36058 12.7201 5.59389 12.3921 5.9366C12.0642 6.2793 11.8407 6.71602 11.7499 7.19156C11.6592 7.6671 11.7053 8.1601 11.8823 8.60825C12.0594 9.0564 12.3595 9.43959 12.7447 9.70937C13.1299 9.97915 13.5829 10.1234 14.0465 10.1239C14.6685 10.1239 15.2651 9.86564 15.7051 9.40581C16.1452 8.94598 16.3927 8.32222 16.3934 7.67158ZM15.5232 7.67158C15.5235 7.97653 15.4373 8.27471 15.2756 8.52843C15.1138 8.78215 14.8838 8.98001 14.6146 9.09701C14.3454 9.21401 14.049 9.24488 13.7631 9.18574C13.4771 9.12659 13.2142 8.98008 13.0078 8.76472C12.8014 8.54936 12.6607 8.27482 12.6035 7.97581C12.5462 7.6768 12.575 7.36674 12.6861 7.08483C12.7973 6.80292 12.9859 6.56181 13.228 6.39199C13.4701 6.22217 13.755 6.13125 14.0465 6.13074C14.4376 6.13039 14.8129 6.2925 15.0898 6.58142C15.3667 6.87035 15.5226 7.26246 15.5232 7.67158Z" fill="#24B794"/>
                        <path d="M50.2579 27.964C50.2581 27.4406 50.11 26.929 49.8321 26.4938C49.5543 26.0586 49.1593 25.7195 48.6971 25.5192C48.2349 25.3189 47.7263 25.2666 47.2357 25.3688C46.745 25.471 46.2944 25.7232 45.9408 26.0934C45.5873 26.4637 45.3466 26.9353 45.2494 27.4486C45.1522 27.9619 45.2027 28.4939 45.3946 28.9772C45.5865 29.4605 45.9111 29.8733 46.3274 30.1635C46.7437 30.4537 47.233 30.6082 47.7333 30.6074C48.4028 30.6057 49.0443 30.3266 49.5175 29.8311C49.9907 29.3357 50.2569 28.6643 50.2579 27.964ZM49.3878 27.964C49.3878 28.3072 49.2904 28.6427 49.108 28.928C48.9257 29.2134 48.6665 29.4357 48.3633 29.5669C48.06 29.698 47.7264 29.7322 47.4047 29.6649C47.0829 29.5977 46.7874 29.4321 46.5557 29.1891C46.3239 28.9461 46.1663 28.6367 46.1027 28.3C46.0392 27.9632 46.0725 27.6143 46.1986 27.2975C46.3247 26.9806 46.5378 26.7099 46.811 26.5198C47.0842 26.3297 47.4051 26.2286 47.7333 26.2294C48.1723 26.2307 48.5929 26.4141 48.903 26.7392C49.2131 27.0643 49.3874 27.5047 49.3878 27.964Z" fill="#24B794"/>
                        <path d="M3.1648 33.5188C3.16455 33.8102 3.24694 34.0952 3.40155 34.3376C3.55615 34.5801 3.77602 34.7691 4.03335 34.8808C4.29068 34.9925 4.57389 35.0219 4.84717 34.9652C5.12045 34.9085 5.37152 34.7683 5.56861 34.5623C5.7657 34.3563 5.89996 34.0938 5.9544 33.808C6.00885 33.5222 5.98103 33.2259 5.87447 32.9566C5.76791 32.6874 5.58739 32.4572 5.35576 32.2952C5.12412 32.1333 4.85178 32.0469 4.57318 32.0469C4.19997 32.0472 3.84212 32.2024 3.5781 32.4783C3.31409 32.7542 3.16545 33.1284 3.1648 33.5188ZM4.03493 33.5188C4.03493 33.4074 4.0665 33.2986 4.12564 33.206C4.18479 33.1134 4.26885 33.0412 4.3672 32.9986C4.46555 32.956 4.57377 32.9449 4.67818 32.9666C4.78259 32.9883 4.8785 33.0419 4.95377 33.1207C5.02904 33.1994 5.08031 33.2997 5.10108 33.409C5.12184 33.5182 5.11118 33.6314 5.07045 33.7343C5.02971 33.8371 4.96072 33.9251 4.87221 33.9869C4.78369 34.0488 4.67963 34.0818 4.57318 34.0818C4.43043 34.0818 4.29352 34.0225 4.19258 33.9169C4.09164 33.8113 4.03493 33.6681 4.03493 33.5188Z" fill="#24B794"/>
                        <path d="M35.2257 4.26497C35.2257 3.97354 35.1431 3.68866 34.9883 3.44636C34.8334 3.20406 34.6134 3.01523 34.356 2.90377C34.0986 2.7923 33.8153 2.7632 33.5421 2.82015C33.2689 2.8771 33.0179 3.01754 32.821 3.22371C32.6241 3.42987 32.49 3.6925 32.4358 3.97836C32.3816 4.26422 32.4097 4.56048 32.5165 4.82966C32.6233 5.09883 32.804 5.32883 33.0358 5.49055C33.2675 5.65227 33.54 5.73846 33.8186 5.7382C34.1918 5.73751 34.5495 5.58204 34.8133 5.30586C35.077 5.02969 35.2254 4.65537 35.2257 4.26497ZM34.3556 4.26497C34.3556 4.37639 34.324 4.48529 34.2648 4.57791C34.2056 4.67053 34.1214 4.74269 34.023 4.78526C33.9246 4.82784 33.8163 4.83891 33.7119 4.81708C33.6074 4.79525 33.5115 4.7415 33.4363 4.66263C33.3611 4.58376 33.3099 4.48332 33.2893 4.37402C33.2686 4.26471 33.2795 4.15147 33.3204 4.04861C33.3613 3.94576 33.4305 3.85791 33.5192 3.7962C33.6079 3.73449 33.7121 3.70169 33.8186 3.70195C33.9611 3.70229 34.0977 3.76176 34.1983 3.86732C34.299 3.97287 34.3556 4.11588 34.3556 4.26497Z" fill="#24B794"/>
                        <path d="M26.8027 20.3117C28.7146 17.6669 30.8016 13.6035 29.8333 9.27358C29.0303 5.65358 26.2446 2.5732 21.5571 0.116953C21.4309 0.051147 21.2933 0.0123988 21.1526 0.0029872C21.0119 -0.0064244 20.8708 0.0136905 20.7376 0.0621493C20.6044 0.110608 20.4818 0.186432 20.3771 0.285164C20.2723 0.383896 20.1875 0.503543 20.1275 0.637069C18.7602 3.67974 17.5544 6.68731 17.89 10.0225C18.2704 13.8428 20.6596 17.3536 25.1942 20.7564C25.2805 20.821 25.3756 20.8714 25.4764 20.906C25.3248 23.3219 24.8686 25.3893 24.1401 26.9367C24.1148 26.9903 24.0998 27.0486 24.096 27.1083C24.0923 27.168 24.0998 27.2278 24.1181 27.2845C24.1365 27.3411 24.1653 27.3934 24.203 27.4384C24.2407 27.4833 24.2865 27.5201 24.3378 27.5465C24.3978 27.577 24.4637 27.593 24.5304 27.5933C24.6116 27.5932 24.6911 27.5694 24.7601 27.5247C24.829 27.4799 24.8847 27.4158 24.9208 27.3398C25.7151 25.6494 26.2061 23.409 26.3565 20.8032C26.4677 20.7335 26.5655 20.6427 26.6449 20.5354C26.6971 20.4652 26.7518 20.391 26.8065 20.3143L26.8027 20.3117ZM26.3378 17.0714C26.1427 13.913 25.5013 10.7923 24.5491 8.52332C24.5268 8.46752 24.4942 8.41692 24.453 8.37448C24.4119 8.33203 24.3631 8.29858 24.3094 8.27609C24.2558 8.2536 24.1984 8.24251 24.1406 8.24348C24.0828 8.24444 24.0258 8.25744 23.9729 8.28171C23.9199 8.30598 23.8722 8.34104 23.8323 8.38484C23.7925 8.42864 23.7614 8.4803 23.7409 8.53681C23.7203 8.59331 23.7108 8.65353 23.7127 8.71395C23.7147 8.77437 23.7281 8.83377 23.7523 8.8887C24.7791 11.3384 25.4292 14.8258 25.5199 18.2508C22.0903 15.4734 20.278 12.7011 19.9883 9.7911C19.7484 7.37516 20.5465 5.01384 21.5757 2.62521C25.0898 4.66276 27.1757 7.06439 27.7785 9.77679C28.3628 12.3956 27.4989 14.9844 26.3378 17.0714Z" fill="#24B794"/>
                    </svg>
                    <p className="makesUsUnique__rightCard--Heading">80% of food import</p>
                    <p className="makesUsUnique__rightCard--text">The UAE currently imports more than 80 percent of it’s food requirement, the majority of which are vegetables.</p>
                </span>

                <span className="makesUsUnique__leftLine"></span>
                <span className="makesUsUnique__rightLine"></span>
            </div>

            <Newsletter />

            {/* Footer */}
            <div>
                <img src={FooterBg} className="footer__bg" />

                <p className="footer__Heading">Hydro Fresh Box</p>
                <span className="footer__NavigatePart">
                    <ul>
                    <li className="footer__NavigatePart--Heading">Navigate</li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--aboutUs">About Us</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--shop">Shop</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--viewPods">View Pods</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--contactUs">Contact Us</a></li>
                    </ul>
                </span>
                <span className="footer__NeedHelpPart">
                    <ul>
                    <li className="footer__NeedHelpPart--Heading">Need Help?</li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--customerService">Customer Service</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--locations">Locations</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--news">News</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--emailUs">Email Us</a></li>
                    </ul>
                </span>
                <span className="footer__FollowUsPart">
                    <ul>
                    <li className="footer__FollowUsPart--Heading">Follow us</li>
                        <li className="footer__FollowUsPart--links"><a href="#" className="footer__FollowUsPart--fb">Facebook</a></li>
                        <li className="footer__FollowUsPart--links"><a href="#" className="footer__FollowUsPart--insta">Instagram</a></li>
                    </ul>
                </span>
                <hr className="footer__horizontalLine"></hr>
                <p className="footer__termsAndConditions">Terms & Conditions</p>
                <p className="footer__rightsReserved">All rights reserved — 2021 © Hydro Fresh Box</p>
                <p className="footer__privacyPolicy">Privacy Policy</p>
            </div>
        </>
    )
}

export default Home;