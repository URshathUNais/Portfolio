import styled from "styled-components";
import MyNavigation from "../Components/MyNavigation";
import PageTransition from "../Components/PageTransition";

import useraccountImage from '../Images/Img_02.png';
import { media } from "../Util/Service";

function AboutMePage() {
    return <AboutMePageStyle className="vh-100 row">
        <div className="col-lg-12 page-container">
            <div className="d-flex flex-column h-100">
                <div className="d-flex">
                    <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                    <MyNavigation />
                </div>
                <div className="page-content-container h-100">
                    <div className="image-container">
                        <PageTransition element="img" duration={1} src="https://placehold.co/400" className="image" alt="User_Image"/>
                        <PageTransition element="div" className="image-background-div" />
                    </div>
                    <PageTransition element="div" duration={2} className="text-container">
                        <h1>About Me</h1>
                        <p>
                            I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs. With a keen eye for design and a strong problem-solving approach, I thrive on creating seamless web experiences. I’m committed to staying current with industry trends and continuously improving my skills to provide high-quality, scalable web development services.
                        </p>
                        <div className="button-container d-flex gap-3 mb-sm-5">
                            <div className="filled-btn com-btn">Hire Me</div>
                            <a href="a" download className="outline-btn com-btn">Download CV</a>
                        </div>
                    </PageTransition>
                </div>
            </div>
        </div>
    </AboutMePageStyle>;
}

const AboutMePageStyle = styled.div`

.user-account-img{
    width: 100px;
    height: 100px;
    margin-top: 30px;
    margin-left: 10px;
    border: 2px solid white;
    border-radius: 50%;
}

.page-container{
    background-color: #1a1b1f;

    .page-content-container{
        display: flex;
        align-items: center;
        gap: 50px;
        margin-left: 100px;

        .image-container{
            position: relative;

            .image{
                position: relative;
                margin-left: 50px;
                z-index: 1;
            }

            .image-background-div{
                background-color: red;
                height: 400px;
                width: 400px;
                position: absolute;
                top: 50px;
                z-index: 0;
            }
        }

        .text-container{
            color: white;
            width: 600px;

            h1{
                font-size: 60px;
                margin-bottom: 50px;
            }

            p{
                font-size: 20px;
                text-align: justify;
            }

            .button-container{
                margin-top: 100px;
            }

            .com-btn{
                width: 200px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-weight: bolder;
                transition: transform 0.3s ease;

                &:hover{
                    transform: scale(1.05);
                }
            }

            .filled-btn{
                background-color: red;
                color: #1a1b1f;
            }

            .outline-btn{
                border: 3px solid red;
                text-decoration: none;
                color: white;
            }
        }
    }
}

@media ${media.xl} {
    .page-container{
        .page-content-container{
            .image-container{
                .image{
                    width: 300px;
                }

                .image-background-div{
                    width: 300px;
                    height: 300px;
                }
            }

            .text-container{
                h1{
                    font-size: 40px;
                    margin-bottom: 50px;
                }
            }
        }
    }
}

@media ${media.md} {
    .page-container{
        .page-content-container{

            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 150px;
            margin-top: 50px;
            margin-left: 0px;

            .image-container{
                .image{
                    width: 300px;
                }

                .image-background-div{
                    width: 300px;
                    height: 300px;
                }
            }

            .text-container{
                h1{
                    text-align: center;
                    font-size: 40px;
                    margin-bottom: 50px;
                }

                p{
                    font-size: 15px;
                }
            }
        }
    }
}

@media ${media.sm} {
    .page-container{
        .page-content-container{

            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 150px;
            margin-top: 50px;
            margin-left: 0px;

            .image-container{
                .image{
                    width: 300px;
                }

                .image-background-div{
                    width: 300px;
                    height: 300px;
                }
            }

            .text-container{
                h1{
                    text-align: center;
                    font-size: 40px;
                    margin-bottom: 50px;
                }

                p{
                    font-size: 18px;
                    padding-left: 80px;
                    padding-right: 80px;
                }

                .button-container{
                    .com-btn{
                        margin-left: 95px;
                        width: 150px;
                    }
                }
            }
        }
    }
}
`;

export default AboutMePage;