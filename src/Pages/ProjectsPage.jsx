import styled from "styled-components";
import MyNavigation from "../Components/MyNavigation";

import useraccountImage from '../Images/Img_02.png';
import PageTransition from "../Components/PageTransition";
import { media } from "../Util/Service";

function ProjectsPage() {
    return <ProjectsPageStyle className="vh-100 row">
        <div className="col-lg-12 page-container">
            <div className="d-flex">
                <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                <MyNavigation />
            </div>
            <div className="page-content-container">
                <PageTransition element="h1" className="page-title">Recent Projects</PageTransition>
                <div className="project-container">
                    <PageTransition element="div" duration={1} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>

                    <PageTransition element="div" duration={2} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>

                    <PageTransition element="div" duration={3} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>

                    <PageTransition element="div" duration={4} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>

                    <PageTransition element="div" duration={5} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>

                    <PageTransition element="div" duration={6} className="project-item-container">
                        <img src="https://placehold.co/400x300" alt=""/>
                        <div className="project-detail">
                            <h3>Personal Finance Tracker</h3>
                            <p>I am a passionate and dedicated Full-Time Web Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, and PHP to deliver innovative digital solutions that meet client needs.</p>
                            <div className="Github">
                                <b>Github : </b>
                                <a className="Github-link" href="a">aaaaaaaaaaa</a>
                            </div>
                            <div className="year">
                                <b className="year-text">Year : </b>
                                2024
                            </div>
                        </div>
                    </PageTransition>
                </div>
            </div>
        </div>
    </ProjectsPageStyle>;
}

const ProjectsPageStyle = styled.div`

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
        justify-content: center;
        gap: 50px;
        margin-left: 100px;

        .page-title{
            color: white;
        }

        .Github{
            color: red;

            .Github-link{
                text-decoration: none;
                color: white;
            }
        }

        .project-container{
            display: flex;
            gap: 50px;
            flex-wrap: wrap;

            .project-item-container{
                cursor: pointer;

                .img{
                    width: 90%;
                }

                h3{
                    color: red;
                    margin-top: 15px;
                    text-transform: uppercase;
                    max-width: 400px;
                }

                p{
                    color: white;
                    margin-top: 10px;
                    max-width: 400px;
                    text-align: justify;
                }

                .year-text{
                    color: red;
                }

                .year{
                    color: white;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

@media ${media.sm} {
    .page-container{
        .page-content-container{
            margin-top: 50px;
            margin-left: 20px;
        }
    }
}

`;

export default ProjectsPage;