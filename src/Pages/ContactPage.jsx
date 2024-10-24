import styled from "styled-components";

import useraccountImage from '../Images/Img_02.png';
import MyNavigation from "../Components/MyNavigation";
import PageTransition from "../Components/PageTransition";
import { media } from "../Util/Service";

function ContactPage() {
    return <ContactPageStyle className="vh-100 row">
        <div className="col-lg-12 page-container">
            <div className="d-flex flex-column h-100">
                <div className="d-flex">
                    <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                    <MyNavigation />
                </div>
                <div className="page-content-container h-100">
                    <div className="image-container">
                        <PageTransition src="https://placehold.co/400" element="img" duration={1} className="image" alt="user"/>
                        <PageTransition element="div" className="image-background-div"/>
                    </div>
                    <div className="text-container">
                        <PageTransition element="h1" duration={1.5}>Contact Details</PageTransition>
                        <PageTransition element="div" duration={2} className="contact-detail">
                            <div className="contact-row">
                                <div className="title-text">Phone : </div>
                                <div className="text">+123 456 890</div>
                            </div>
                            <div className="contact-row">
                                <div className="title-text">Address : </div>
                                <div className="text">123 anywhere street, any City</div>
                            </div>
                            <div className="contact-row">
                                <div className="title-text">Email : </div>
                                <div className="text">113@gmail.com</div>
                            </div>
                        </PageTransition>
                    </div>
                </div>
            </div>
        </div>
    </ContactPageStyle>;
}

const ContactPageStyle = styled.div`

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
                font-size: 75px;
            }

            .contact-detail{
                margin-top: 45px;

                .contact-row{
                    display: flex;
                    margin-bottom: 10px;

                    .title-text{
                        width: 120px;
                        color: red;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}

@media ${media.xl} {
    .page-container{
        .page-content-container{
            .image-container{
                .image{
                    width: 350px;
                }

                .image-background-div{
                    width: 350px;
                    height: 350px;
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
            margin-left: 0px;
            margin-top: 50px;
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
                    padding-left: 100px;
                }

                .contact-detail{
                    margin-left: 100px;
                }
            }
        }
    }
}

`;

export default ContactPage;