import React, { useState } from 'react'

import { Button, Input, Spinner } from 'reactstrap'

import { createItem } from '/imports/ui/methods/items'

import itemsSub from '/imports/ui/subscriptions/items'

const Contents = () => {
  const [state, setState] = useState({})

  const { items, itemsLoading } = itemsSub()

  const handleChange = ({ target: { name, value } }) => {
    setState(s => ({ ...s, [name]: value }))
  }

  const handleClick = () => {
    createItem(state)
  }

  return (
    <div style={{ display: 'grid', height: '100vh' }}>
      <div className="m-auto">
        <Input name="name" value={state.itemName} onChange={handleChange}/>
        <Button onClick={handleClick}>Save</Button>
        {
          itemsLoading ? <Spinner/> :
            items.map(({ _id, name }) => <div key={_id}>{name}</div>)
        }
      </div>
    </div>
  )
}

export default Contents
