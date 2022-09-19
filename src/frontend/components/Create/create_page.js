import React, { useEffect, useState } from 'react'
import InputFormModel from './input_form';
import './create_page.css'

const CreateNftPage = () => {
    const [name, setname] = useState()
    const [tag, settag] = useState()
    const [desc, setdesc] = useState()
    const [supply, setsupply] = useState()

    const nameListener = (text) => {
        setname(text.target.value)
    
    }
    const tagListener = (text) => {
        settag(text.target.value)
    }
    const descListener = (text) => {
        setdesc(text.target.value)
    }
    const supplyListener = (text) => {
        setsupply(parseInt(text.target.value))

    }
    

    return ( 
        <div className='wrapper-create-nft'>
            <div>
            <h1>Create new item</h1>
            </div>
            <div>
                <InputFormModel name="Name" desc='' callback={nameListener} />
                <InputFormModel name="Tag" desc='Short name of your collection' callback={tagListener} />
                <InputFormModel name="Description" desc='The description will be included on the item detail page underneath its image.' callback={descListener} />
                <InputFormModel name="Supply" desc='The number of items that can be minted.' callback={supplyListener} />
                <button onClick={() => console.log(name, tag, desc, supply)}>Submit</button>
            </div>
        </div>
     );
}
 
export default CreateNftPage;