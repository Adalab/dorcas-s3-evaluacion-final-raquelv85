import React, {Component} from 'react';
import './Filter.css';
import CharacterList from './CharacterList';

class Filters extends Component {
    render() {
        const {onChangeInput, arrayDatos, arrayDatosTemp, value} = this.props;
        console.log(arrayDatosTemp)
        console.log(value)

        return(
            <div>
            <label htmlFor="">Harry Potter Characters</label>
            <input type="text" onChange={onChangeInput}/>
            </div>
        );
        // if (value === false) {

        //     return <CharacterList arrayDatos={arrayDatos} onChangeInput={onChangeInput}></CharacterList>
            
        // } else {
        //     return <CharacterList arrayDatos={arrayDatosTemp} onChangeInput={onChangeInput}></CharacterList>
        // }

    }
}

export default Filters;