import React from 'react'
import ShowComment from './ShowComment'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import AddComment from './AddComment'
import CommentsContainer from './CommentsContainer'

export default function AppComments(props) {
    return (
        <div>
            <AddComment appId={props.appId} />
            <CommentsContainer appId={props.appId} isLogin={props.isLogin}/>
        </div>
    )
}
