import styled from "styled-components";
import MyNavigation from "../Components/MyNavigation";

import useraccountImage from '../Images/Img_02.png';
import PageTransition from "../Components/PageTransition";
import { FaQuoteRight } from "react-icons/fa";
import { media } from "../Util/Service";

function ClientPage() {
    return <ClientPageStyle className="vh-100 row">
        <div className="col-lg-12 page-container">
            <div className="d-flex flex-column h-100">
                <div className="d-flex">
                    <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                    <MyNavigation />
                </div>
                <div className="page-content-container">
                    <PageTransition element="h1" className="page-title">My Clients</PageTransition>
                    <div className="clients-container">
                        <PageTransition element="div" duration={1} className="client-container">
                            <div className="icon-container">
                                <FaQuoteRight />
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <img src="https://placehold.co/120" alt="" className="client-img"/>
                                <div className="text-container">
                                    <h3>Urshath Khan</h3>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <p>
                                Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
                            </p>
                        </PageTransition>

                        <PageTransition element="div" duration={2} className="client-container">
                            <div className="icon-container">
                                <FaQuoteRight />
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <img src="https://placehold.co/120" alt="" className="client-img"/>
                                <div className="text-container">
                                    <h3>Urshath Khan</h3>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <p>
                                Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
                            </p>
                        </PageTransition>

                        <PageTransition element="div" duration={3} className="client-container">
                            <div className="icon-container">
                                <FaQuoteRight />
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <img src="https://placehold.co/120" alt="" className="client-img"/>
                                <div className="text-container">
                                    <h3>Urshath Khan</h3>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <p>
                                Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
                            </p>
                        </PageTransition>
                    </div>
                </div>
            </div>
        </div>
    </ClientPageStyle>;
}

const ClientPageStyle = styled.div`

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
        flex-direction: column;
        gap: 50px;
        margin-left: 100px;
        color: white;
        margin-top: 40px;

        .clients-container{
            display: flex;
            gap: 50px;
            flex-wrap: wrap;

            .client-container{
                border: 3px solid red;
                width: 400px;
                padding: 30px;
                position: relative;

                .icon-container{
                    position: absolute;
                    height: 70px;
                    width: 70px;
                    border-radius: 100%;
                    background-color: red;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    right: 50px;
                    top: -35px;
                    font-size: 30px;
                }

                .client-img{
                    border-radius: 100%;
                    border: 2px solid red;
                }
            }
        }
    }

    @media ${media.sm} {
        .page-content-container{
            margin-top: 30px;
            margin-left: 30px;
        }
    }
}
`;

export default ClientPage;