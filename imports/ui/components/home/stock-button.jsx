import React from 'react'
import styled from '@emotion/styled'

import Tilt from 'react-tilt'

const ListOutline = styled.div`
  margin: auto;
  display: grid;
  height: 80%;
  width: 80%;
  border: 1px solid var(--cyan);
  transition: border 0.25s;
`

const BulletPoint = styled.div`
  width: 10%;
  padding-top: 10%;
  border: 1px solid var(--cyan);
  transition: box-shadow 0.25s, border 0.25s;
`;

const ListItem = styled.div`
  width: 80%;
  padding-top: 10%;
  border: 1px solid var(--cyan);
  transition: box-shadow 0.25s, border 0.25s;
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
  &:hover ${BulletPoint}, &:hover ${ListItem} {
    border-color: var(--white);
  }
  &:hover ${Label} {
    color: var(--white);
    text-shadow: 0px 0px 9px var(--cyan);
  }
  &:hover ${ListOutline} {
    box-shadow: 0px 0px 15px 3px var(--cyan);
    border: 1px solid var(--white);
  }
  &:hover {
    box-shadow: 0px 0px 20px 7px var(--cyan);
  }
  transition: box-shadow 0.25s;
`

const StockButton = () => {
  return (
    <Tilt options={{ max: 20, perspective: 3000, scale: 1.05, speed: 100 }}>
      <HoverBox>
        <ListOutline>
          <div></div>
          <div className="m-auto w-100 d-inline-flex justify-content-around">
            <BulletPoint/>
            <ListItem/>
          </div>
          <div className="m-auto w-100 d-inline-flex justify-content-around">
            <BulletPoint/>
            <ListItem/>
          </div>
          <div className="m-auto w-100 d-inline-flex justify-content-around">
            <BulletPoint/>
            <ListItem/>
          </div>
          <div></div>
        </ListOutline>
        <Label>Manage the fridge</Label>
      </HoverBox>
    </Tilt>
  )
}

export default StockButton
