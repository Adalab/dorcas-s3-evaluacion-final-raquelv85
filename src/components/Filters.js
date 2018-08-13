import React, {Component} from 'react';
import './Filter.css';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        const {onChangeInput, arrayDatos, arrayDatosTemp, value, onChange} = this.props;
        console.log(arrayDatosTemp)

        return (
            <div className="container-input">
                <h1 className="title">Harry Potter Characters</h1>
                <h2 className="subtitle">Introduce el nombre de un personaje</h2>
                <input
                    className="input"
                    type="text"
                    onChange={onChangeInput}
                    placeholder="Introduce el nombre"/>
                    <select name="" id="" onChange={onChange}>
                    <option value=""></option>
                    <option value="vivos">vivos</option>
                    <option value="muertos">muertos</option>
                    <option value="todos">todos</option>
                    </select>
            </div>
        );

    }
}
Filters.propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    arrayDatosTemp: PropTypes.array.isRequired
}

export default Filters;