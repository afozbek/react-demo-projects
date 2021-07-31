import React from 'react'
import styled from "styled-components"
import { accordionList, AccordionType } from '../../utils/constants'
import Accordion from 'components/Accordion/Accordion';
import { useState } from 'react';

const StyledAccordionList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 75px;
  position: relative;
  z-index: 10;

  h1 {
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
`

const AccordionList = () => {
  const [accordions, setAccordionList] = useState(accordionList);

  const handleToggleAccordion = (id: string | number) => {
    resetAccordionList
    const newAccordionList = resetAccordionList().map(accordion => {
      if (accordion.id == id) {
        return { ...accordion, isOpen: true }
      }
      return accordion
    });

    console.log({ newAccordionList });

    setAccordionList(newAccordionList);
  }

  const resetAccordionList = (): AccordionType[] => {
    const newAccordionList = [...accordionList.map(accordion => ({ ...accordion, isOpen: false }))];
    setAccordionList(newAccordionList)
    return newAccordionList
  }

  return (
    <StyledAccordionList className="accordion-list">
      <h1>FAQ</h1>

      {
        accordions.map((accordion, i) => {
          return <Accordion
            key={accordion.headline + "-" + i}
            {...accordion}
            handleToggleAccordion={handleToggleAccordion} />
        })
      }

    </StyledAccordionList>
  )
}

export default AccordionList
