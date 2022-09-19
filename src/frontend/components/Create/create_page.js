import React, { useEffect } from 'react'
import InputFormModel from './input_form';
import './create_page.css'

const CreateNftPage = () => {

    
    

    return ( 
        <div className='wrapper-create-nft'>
            <div>
            <h1>Create new item</h1>
            </div>
            <div>
                <InputFormModel name="Name" desc=''/>
                <InputFormModel name="Tag" desc='Short name of your collection' />
                <InputFormModel name="Description" desc='The description will be included on the item detail page underneath its image.'/>
                <InputFormModel name="Supply" desc='The number of items that can be minted.'/>
            </div>
        </div>
     );
}
 
export default CreateNftPage;