import React,{Component} from 'react';
import ChatHeader from './chat/Chat-header';
import Chatconversa from './chat/chat-conversa';
import ChatMensagem from './chat/Chat-mensagem';
import './chat/chat.css';

class Chatbot extends Component{
    render(){
        return(
            <div className = 'Chatbot'>
            <div className = 'chatconteudo'>
                <ChatHeader></ChatHeader>
                <Chatconversa></Chatconversa>
                <ChatMensagem></ChatMensagem>  
            </div>
            </div>
        )

    }

}

export default Chatbot;