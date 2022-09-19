import React from 'react'

const InputFormModel = (props) => {

    const onChangelistener = (e) => {
        props.callback(e)
    }

    return ( 
        <div>
            <h3>{props.name}</h3>
            <h5>{props.desc}</h5>
            <input onChange={onChangelistener}></input>
        </div>
     );
}
 
export default InputFormModel;