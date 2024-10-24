import styled, { keyframes } from "styled-components";
import { SiGmail } from "react-icons/si";
import { FaLinkedin , FaGithub } from "react-icons/fa";

import userImage from '../Images/Img_01.png';
import useraccountImage from '../Images/Img_02.png';
import backgroundImage from '../Images/Background.jpg';
import MyNavigation from "../Components/MyNavigation";
import HomeStartButton from "../Components/HomeStartButton";
import { media } from "../Util/Service";
import PageTransition from "../Components/PageTransition";

function HomePage() {
    return (
        <HomePageStyle className="row vh-100"> 
        <div className="col-lg-8 left-container">
            <div className="d-flex">
                <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                <MyNavigation  />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <PageTransition element="div" className="text-container">
                    <div className="text-one">Hello Everyone.</div>
                    <h1 className="heading1">I'M URSHATH KHAN</h1>
                    <h4 className="text-two">Aspiring Full-Time Web Developer</h4>
                    <HomeStartButton text={"Descover More"} />
                </PageTransition>
            </div>
        </div>
        <div className="col-lg-4 right-container">
            <div className="contact-container d-flex gap-4 mt-5 ms-5">
                <div className="social-text">Contact Me</div>
                <a 
                    href=""
                    className="social-item"
                    key="gmail"
                    target="blank"
                >
                    <SiGmail className="Social_icons" />
                </a>
                <a 
                    href=""
                    className="social-item"
                    key="linkedin"
                    target="blank"
                >
                    <FaLinkedin className="Social_icons" />
                </a>
                <a 
                    href=""
                    className="social-item"
                    key="github"
                    target="blank"
                >
                    <FaGithub className="Social_icons" />
                </a>
            </div>
            <PageTransition element="img" duration={1} src={userImage} className="user-img" alt="User_Image" />
        </div>
        </HomePageStyle>
    );
}

const typing = keyframes`
    from{width: 0}
    to{width: 100%}
`

const blink = keyframes`
    50% {border-color: transparent; }
`

const HomePageStyle = styled.div`

background-image: url(${backgroundImage});
background-size: cover; 
background-position: center; 
background-repeat: no-repeat;  

.right-container{
    position: relative;

.Social_icons{
  font-size: 25px; 
}

.user-img{
    position: absolute;
    left: -15%;
    bottom: 0;
    height: 80%;
    width: 500px;
}

.social-item{
    cursor: pointer;
    text-decoration: none;
    color: white;
    &:hover{
        transform: scale(1.2);
        color: red;
    }
}

.social-text{
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: sans-serif;
    margin-top: 5px;
}

}

.left-container{
    position: relative;

.user-account-img{
    width: 100px;
    height: 100px;
    margin-top: 30px;
    margin-left: 10px;
    border: 2px solid white;
    border-radius: 50%;
}

.text-one{
    color: red;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.text-two{
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typing} 4s steps(30, end) forwards, ${blink} 0.7s step-end infinite;
}

.heading1{
    color: white;
    font-weight: bolder;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-transform: uppercase;
    font-size: 70px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid white;
    animation: ${typing} 4s steps(30, end) forwards, ${blink} 0.7s step-end infinite;
}

.text-container{
    margin-top: 150px;
}
}

@media ${media.xl} {
    .right-container{
        .user-img{
            bottom: 0;
            height: 500px;
            width: 450px;
        }

        .Social_icons{
            font-size: 20px; 
        }
    }
    
    .left-container{
        .heading1{
            font-size: 50px;
        }
    }
}

@media ${media.md} {
    .right-container{
        display: flex;
        justify-content: left;

        .user-img{
            left: 55%;
            right: 50px;
            width: 200px;
            height: 220px;
        }

        .social-item{
            margin-right: auto;
        &:hover{
            transform: scale(1.02);
            color: red;
        }
        }

        .Social_icons{
            font-size: 15px; 
        }
    }

    .left-container{
        .heading1{
            font-size: 40px;
        }
    }
}
`;

export default HomePage;