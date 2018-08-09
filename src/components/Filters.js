import React, {Component} from 'react';
import './Filter.css';
import CharacterList from './CharacterList';

class Filters extends Component {
    render() {
        const {onChangeInput, arrayDatos, arrayDatosTemp, value} = this.props;
        console.log(arrayDatosTemp)
        console.log(value)
        

        return(
            <div className="container-input">
            <h1 className="title">Harry Potter Characters</h1>
            <h2 className="subtitle">Introduce el nombre de un personaje</h2>
            <input className="input" type="text" onChange={onChangeInput}/>
            </div>
        );

    }
}

export default Filters;