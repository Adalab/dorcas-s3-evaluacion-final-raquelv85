import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

class CharacterList extends Component {

    render() {
        const {arrayDatos, onChangeInput} = this.props;

        return (
            <div>
             
                <ul className="lista">
                    {arrayDatos
                        .map(function (item, index) {
                            if (item !== undefined) {
                                item.idList = index;
                                return <li key={index}>
                                    <p className="name">Nombre: {item.name}</p>
                                    <img className="img" src={item.image} alt=""/>
                                    <p>Casa: {item.house}</p>
                                    <Link to={`CharacterCard/${item.idList}`} >
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

export default CharacterList;