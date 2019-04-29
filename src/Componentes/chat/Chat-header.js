import React from 'react';
import {Alert} from 'reactstrap';

const ChatHeader = props => {
    return(
        <div className ='chatheader' >
            <Alert color='dark'>
                Chatbot
            </Alert>
        </div>
    )

}

export default ChatHeader;