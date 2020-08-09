import React from 'react'
import { MDBBtn } from 'mdbreact'

export default function ModifyComment(props) {
    return (
        <div>
            {props.editing ? <div>
                <MDBBtn onClick={props.submitCommentEdit}>Submit</MDBBtn>
                <MDBBtn onClick={props.disableEditComment}>Cancel</MDBBtn>
            </div> : <div>
                <MDBBtn onClick={props.enableEditComment}>Edit Comment</MDBBtn>
                <MDBBtn color='danger' onClick={props.deleteComment}>Delete Comment</MDBBtn>
            </div>}
            
        </div>
    )
}
