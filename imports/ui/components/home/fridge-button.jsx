import React from 'react'
import styled from '@emotion/styled'

import Tilt from 'react-tilt'

const Handle = styled.div`
  position: relative;
  width: 10px;
  height: 30px;
  border: 1px solid var(--cyan);
  border-top: none;
`;

const FridgeOutline = styled.div`
  margin: auto;
  height: 80%;
  width: 80%;
  border-radius: 20px;
  border: 1px solid var(--cyan);
  transition: box-shadow 0.25s, border 0.25s;
`

const Freezer = styled.div`
  border: 1px solid var(--cyan);
  height: calc(30% + 1px);
  width: calc(100% + 1px);
  margin-bottom: 5px;
  border-radius: 20px 20px 0 0;
  transition: border 0.25s;
`;

const Fridge = styled.div`
  border: 1px solid var(--cyan);
  height: calc(70% - 4px);
  width: calc(100% + 1px);
  border-radius: 0 0 20px 20px;
  transition: border 0.25s;
`;

const Label = styled.h3`
  text-align: center;
  align-self: center;
  color: var(--cyan);
  transition: text-shadow 0.25s, color 0.25s;
`;

const HoverBox = styled.div`
  height: 70vh;
  width: 100%;
  display: grid;
  grid-template-rows: 9fr 1fr;
  &:hover ${Fridge}, &:hover ${Freezer}, &:hover ${Handle} {
    border-color: var(--white);
  }
  &:hover ${Label} {
    color: var(--white);
    text-shadow: 0px 0px 9px var(--cyan);
  }
  &:hover ${FridgeOutline} {
    box-shadow: 0px 0px 15px 3px var(--cyan);
    border: 1px solid var(--white);
  }
  &:hover {
    box-shadow: 0px 0px 20px 7px var(--cyan);
  }
  transition: box-shadow 0.25s;
`

const FridgeButton = () => {
  return (
    <Tilt options={{ max: 20, perspective: 3000, scale: 1.05, speed: 100 }}>
      <HoverBox>
        <FridgeOutline>
          <Freezer>
            <Handle style={{ top: '60%', left: '5%' }}/>
          </Freezer>
          <Fridge>
            <Handle style={{ top: '6%', left: '5%', transform: 'rotate(180deg)' }}/>
          </Fridge>
        </FridgeOutline>
        <Label>What&apos;s in the fridge?</Label>
      </HoverBox>
    </Tilt>
  )
}

export default FridgeButton
