import styled from "styled-components"
import { AccordionType } from '../../utils/constants'
import iconArrowDown from "images/icon-arrow-down.svg";
import { lightGrayishBlue, softRed, veryDarkGrayishBlue } from 'utils/variables';

const StyledAccordion = styled.div<{ isOpen?: boolean }>`
  border-bottom: 2px solid ${lightGrayishBlue};
  padding: 15px 0;
  color: ${veryDarkGrayishBlue};
  text-align: start;
  cursor: pointer;
  width: 100%;

  &:hover .headline {
    color: ${softRed};
  }

  .headline {
    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all .7s;

    img {
      transform: rotate(180deg);

      ${props => props.isOpen ? `
        transform: rotate(0deg);
      `: ""}
    }
  }

  .desc {
    font-size: 10px;
    visibility: hidden;
    opacity: 0;

    transition: visibility 0s, opacity 0.4s linear;
    height: 0;

    ${props => props.isOpen ? `
      visibility: visible;
      opacity: 1;
      margin-top: 10px;
      height: auto;
    `: ""}
  }
`
interface Props {
  handleToggleAccordion: (id: string | number) => void
}

const Accordion = ({ headline, description, isOpen, handleToggleAccordion, id }: AccordionType & Props) => {
  console.log({ isOpen })
  return (
    <StyledAccordion isOpen={isOpen} onClick={() => { handleToggleAccordion(id) }}>
      <p className="headline">
        {headline}
        <img src={iconArrowDown} alt="Icon Arrow Down" />
      </p>
      <p className="desc">
        {description}
      </p>
    </StyledAccordion>
  )
}

export default Accordion
