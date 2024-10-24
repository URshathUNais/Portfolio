import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

function HomeStartButton({ text }) {
    return ( 
        <HomeStartButtonStyle>
            <div className="button-container">
                <div className="button-text">{text}</div>
                <div className="button-arrow">
                    <FaArrowRight className="arrow" />
                </div>
            </div>
        </HomeStartButtonStyle>
    );
}

const HomeStartButtonStyle = styled.div`

display: flex;
margin-top: 25px;

.button-container{
    border: 5px solid red;
    height: 65px;
    display: flex;
    align-items: center;
    gap: 25px;
    cursor: pointer;
}

.arrow{
    position: relative;
    display: inline-block;
}

@keyframes moveRight {
    0%,
    20%,
    40%,
    60%,
    80%,
    100%{
        left: 0;
    }
    10%,
    30%,
    50%,
    70%,
    90%{
        left: 5px;
    }
}

&:hover{
    .arrow{
        animation: moveRight 2s linear 2;
    }
}

.button-text{
    color: white;
    margin-left: 25px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
}

.button-arrow{
    background-color: red;
    height: 100%;
    display: flex;
    width: 65px;
    justify-content: center;
    align-items: center;
    font-size: 28px;
}

`;

export default HomeStartButton;