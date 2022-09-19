import React, { useEffect, useState } from 'react'
import InputFormModel from './input_form';
import './create_page.css'

const CreateNftPage = () => {
    const [name, setname] = useState()
    const [tag, settag] = useState()
    const [desc, setdesc] = useState()
    const [supply, setsupply] = useState()

    const nameListener = (text) => {
        const temp = text.target.value
        setname(temp)
        console.log(name);
    
    }
    const tagListener = (text) => {
        settag(text)
    }
    const descListener = (text) => {
        setdesc(text)
    }
    const supplyListener = (text) => {
        setsupply(parseInt(text))
        console.log(supply);

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
                <button>Submit</button>
            </div>
        </div>
     );
}
 
export default CreateNftPage;