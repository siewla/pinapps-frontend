import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import ReactLoading from 'react-loading'
import { MDBCol } from 'mdbreact'

export default function Loader(props) {
    const { promiseInProgress } = usePromiseTracker()
    return (
        promiseInProgress 
        /* true */ ? 
            <ReactLoading type={'spin'} color={'#123456'} width={'100%'} height={'100%'}/> :
        <div>{props.children}</div>
    )
}
