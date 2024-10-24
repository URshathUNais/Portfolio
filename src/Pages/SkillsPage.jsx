import styled from "styled-components";

import useraccountImage from '../Images/Img_02.png';
import MyNavigation from "../Components/MyNavigation";
import PageTransition from "../Components/PageTransition";
import { media } from "../Util/Service";

function SkillsPage() {

    const skills = [
        {
            title: "Programming Languages",
            skills: [
                {name : "Python" , percentage : 90},
                {name : "Java" , percentage : 70},
                {name : "Html" , percentage : 50},
                {name : "Css" , percentage : 30},
            ],
        },
        {
            title: "Programming Languages",
            skills: [
                {name : "Python" , percentage : 90},
                {name : "Java" , percentage : 70},
                {name : "Html" , percentage : 50},
                {name : "Css" , percentage : 30},
            ],
        },
        {
            title: "Programming Languages",
            skills: [
                {name : "Python" , percentage : 90},
                {name : "Java" , percentage : 70},
                {name : "Html" , percentage : 50},
                {name : "Css" , percentage : 30},
            ],
        },
        {
            title: "Programming Languages",
            skills: [
                {name : "Python" , percentage : 90},
                {name : "Java" , percentage : 70},
                {name : "Html" , percentage : 50},
                {name : "Css" , percentage : 30},
            ],
        },
    ];

    return <SkillsPageStyle className="vh-100 row">
        <div className="col-lg-12 page-container">
            <div className="d-flex flex-column h-100">
                <div className="d-flex">
                    <img src={useraccountImage} alt="Account_Image"  className="user-account-img"/>
                    <MyNavigation />
                </div>
                <div className="page-content-container h-100">
                    <PageTransition element="h1" className="page-title">
                        My Skills
                    </PageTransition>
                    <PageTransition element="p" className="desc-paragraph">
                        A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.
                    </PageTransition>
                    <div className="skills-container d-flex">
                        {
                            skills.map(({title , skills} , i) => <SkillsCategory title={title} skills={skills} i={i} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </SkillsPageStyle>;
}

function SkillsCategory({title , skills = [] , i}) {
    return ( <PageTransition element="div" duration={i+1} className="skill-con">
        <h3>{title}</h3>
        {
            skills.map(({ name , percentage}) => (
                <div className="skill-per-con">
                    <span>{name}</span>
                    <div className="per">
                         <span style={{width: `${percentage}%`}}></span>
                    </div>
                </div>
            ))
        }
    </PageTransition> );
}

const SkillsPageStyle = styled.div`

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
        justify-content: center;
        gap: 50px;
        margin-left: 50px;
        flex-direction: column;

        .page-title{
            color: white;
        }

        .desc-paragraph{
            color: white;
        }

        .skills-container{
            color: white;
            display: flex;
            gap: 50px;
            flex-wrap: wrap;

            .skill-con{
                display: flex;
                flex-direction: column;
                gap: 20px;
                flex-grow: 1;

                .skill-per-con{
                    display: flex;
                    flex-direction: column;

                    .per{
                        border: 1px solid #36373b;
                        height: 15px;
                        margin-top: 15px;
                        border-radius: 10px;

                        span{
                            display: block;
                            height: 100%;
                            border-radius: 10px;
                            background-color: red;
                        }
                    }
                }
            }
        }
    }

@media ${media.sm} {
    .page-content-container{
        .skills-container{
            width: 90%;
        }
    }
}

}

`;

export default SkillsPage;