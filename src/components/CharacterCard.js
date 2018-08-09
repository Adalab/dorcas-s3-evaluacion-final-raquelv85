import React, {Component} from 'react';
import './CharacterCard.css';
import {Link, Route, Switch} from 'react-router-dom';

class CharacterCard extends Component {

    render() {
        console.log(this.props.arrayDatos)
        console.log(this.props.match.params.id)
        const {arrayDatos} = this.props
        const estado = null;
        return (
            <div>
                <h2 className="title">Información</h2>
                <div className="container-card">
                <div className="container-listado">
                    <img
                        className="img-card"
                        src={arrayDatos[this.props.match.params.id].image}
                        alt=""/>
                    <ul className="lista">

                        <li >
                            <p className="item">
                                <span className="span-item">Nombre:</span>
                                {arrayDatos[this.props.match.params.id].name}</p>
                            <p className="item">
                                <span className="span-item">Casa:</span>
                                {arrayDatos[this.props.match.params.id].house}</p>
                            <p className="item">
                                <span className="span-item">Nacimiento:</span>
                                {arrayDatos[this.props.match.params.id].dateOfBirth}</p>
                            <p className="item">
                                <span className="span-item">Patronus:</span>
                                {arrayDatos[this.props.match.params.id].patronus}</p>
                            <p className="item">
                                <span className="span-item">Estado:</span>
                                {arrayDatos[this.props.match.params.id].alive
                                    ? "Vive hasta el final de la saga"
                                    : "Muere antes de terminar la saga"}</p>
                        </li>

                    </ul>
                    </div>
                    <div className="container-link">
                    <Link className="link-back" onClick={this.props.onClickBack} to="/">Volver</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterCard;