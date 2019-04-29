import React, {Component, Console} from 'react';
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap';
import {connect} from 'react-redux'; 
import {enviaMensagem} from './../../store/actions/chat';


class ChatMensagem extends Component {
    constructor(props){
        super(props)
        this.inputEnviaTexto = this. inputEnviaTexto.bind(this)
    }
    inputEnviaTexto(e){
        if(e.keyCode === 13){
            console.log(e.target.value)
            this.props.enviaTexto(e.taget.value)
        }
    }    
    render(){
    return(
        <div className='chatmensagem'>
        <hr/>
            <InputGroup>
                <Input onKeyDown={this.inputEnviaTexto} placeholder='digite a mensagem'/>
                    <InputGroupAddon addonType='append'>
                        <Button>Enviar</Button>
                    </InputGroupAddon>
            </InputGroup>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enviaTexto : (msg) => dispatch(enviaMensagem(msg))
    }
}

export default connect(null, null)(ChatMensagem)