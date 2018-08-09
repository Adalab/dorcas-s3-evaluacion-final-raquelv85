import React, {Component} from 'react';
import './CharacterCard.css';
import {Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import img1 from './../img/Gryf.gif';
import img2 from './../img/sly.jpeg';
import img3 from './../img/huf.png';
import img4 from './../img/rav.jpeg';
class CharacterCard extends Component {

    render() {

        if (this.props.arrayDatos.length === 0) {
            return <p>Cargando datos</p>
        } else {
            const {arrayDatos} = this.props;
            const house = "";
            if (arrayDatos[this.props.match.params.id].house == 'Gryffindor') {
                this.house = img1;
            } else if (arrayDatos[this.props.match.params.id].house == 'Slytherin') {
                this.house = img2;
            } else if (arrayDatos[this.props.match.params.id].house == 'Hufflepuff') {
                this.house = img3;
            } else if (arrayDatos[this.props.match.params.id].house == 'Ravenclaw') {
                this.house = img4;
            }
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
                                        {arrayDatos[this.props.match.params.id].house || "dato desconocido"}</p>
                                    <img className="img-link" src={this.house} alt=""/>
                                    <p className="item">
                                        <span className="span-item">Nacimiento:</span>
                                        {arrayDatos[this.props.match.params.id].dateOfBirth || "dato desconocido"}</p>
                                    <p className="item">
                                        <span className="span-item">Patronus:</span>
                                        {arrayDatos[this.props.match.params.id].patronus || "dato desconocido"}</p>
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
}

CharacterCard.propTypes = {
    arrayDatos: PropTypes.array.isRequired
}

export default CharacterCard;