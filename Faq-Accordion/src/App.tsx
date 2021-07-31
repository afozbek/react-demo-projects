import Accordion from 'components/Accordion';
import React from 'react';
import styled from 'styled-components';
import { accordionList } from './utils/constants';
import BgPatternDesktop from "images/bg-pattern-desktop.svg";
import IllustrationBoxDesktop from "images/illustration-box-desktop.svg";
import WomanOnline from "images/illustration-woman-online-desktop.svg";
import { softBlue, softViolet } from 'utils/variables';
import AccordionList from 'components/AccordionList/AccordionList';

const StyledApp = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(${softViolet}, ${softBlue});
  `
const StyledIllustrationWrapper = styled.div`
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 800px;
  height: 500px;

  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 10;
    
    transform: translate(-50%,-50%) scale(0.8);
    top: 60%;
    left: 5px;
    
    background: url(${IllustrationBoxDesktop});
    background-repeat: no-repeat;
  }
`
const StyledAccordionWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 800px;
  height: 500px;

  &:before { 
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;   
    z-index: 1;
    
    background: url(${BgPatternDesktop});
    background-repeat: no-repeat;
    transform: translate(-195px,-50px);
  } 

  

  .illustration {
    position: absolute;
    z-index: 1;
    /* left: -50px; */
    width: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 17%;

    img {
      /* width: 250px; */
      /* height: 300px; */
      object-fit: cover;
      width: 100%;
    }
  }
`

const App = () => {
  return (
    <StyledApp className="App">
      <StyledIllustrationWrapper className="illustrationWrapper">
        <StyledAccordionWrapper className="accordionWrapper">
          <div className="illustration">
            <img src={WomanOnline} alt="Woman Online" />
          </div>

          <AccordionList />
        </StyledAccordionWrapper>
      </StyledIllustrationWrapper>

      {/* Author Section */}
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Abdullah Furkan Özbek</a>.
      </div> */}
    </StyledApp>
  );
}

export default App;
