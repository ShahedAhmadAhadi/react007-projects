import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import { Fade } from 'react-reveal';

function Question({title, description}) {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () =>{
        setToggle(!toggle);
    }

    return (
        <Fade left cascade>
        <QuestionStyled>
            <div className="q-con">
                <div className="toggle-title">
                    <h4>{title}</h4>
                    <button onClick={btnToggler} >
                        {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                </div>
            </div>
        </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
background-color: #fff;
margin: 1rem 0;
padding: 1.4rem 1rem;
`;

export default Question;
