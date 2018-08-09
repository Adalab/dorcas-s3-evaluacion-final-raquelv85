import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './CharacterList.css';
import PropTypes from 'prop-types';

class CharacterList extends Component {

    render() {
        const {arrayDatos, onClickCard} = this.props;

        return (
            <div>
                <ul className="lista">
                    {arrayDatos
                        .map(function (item, index) {
                            if (item !== undefined) {
                                item.idList = index;
                                return <li key={index}>
                                    <p className="item">
                                        <span className="span-item">Nombre:</span>
                                        {item.name}</p>
                                    <img className="img" src={item.image} alt=""/>
                                    <p className="item">
                                        <span className="span-item">Casa:</span>
                                        {item.house || 'Sin casa'}</p>
                                    <Link
                                        onClick={onClickCard}
                                        className="link"
                                        to={`CharacterCard/${item.idList}`}>
                                        Info
                                    </Link>
                                </li>
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

CharacterList.PropTypes = {
    arrayDatos: PropTypes.array,
    onClickCard: PropTypes.func
}

export default CharacterList;