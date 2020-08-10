import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import ReactLoading from 'react-loading'

export default function Loader(props) {
    const { promiseInProgress } = usePromiseTracker()
    return (
        promiseInProgress ? <div>
            <ReactLoading type={'cylon'} color={'#00ff00'} width={'100%'}/>
        </div> :
        <div>{props.children}</div>
    )
}
