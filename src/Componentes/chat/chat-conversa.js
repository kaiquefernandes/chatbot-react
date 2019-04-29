
import React from 'react';
import {Alert, Badge} from 'reactstrap';
const ChatConversa = props => {
    return(
        <div className = 'chatconversa'>
        
            <Badge color='primary'>
                você disse:
            </Badge>
            
                <Alert color='primary'>
                    Como possoa ajudar?
                </Alert>
            
            <Badge color='warning'>
                bot disse:
            </Badge>
            
                <Alert color='warning'>
                    Como possoa ajudar?
                </Alert>
        
        </div>
    )

}

export default ChatConversa;