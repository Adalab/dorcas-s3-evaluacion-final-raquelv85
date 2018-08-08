import React, {Component} from 'react';

class Filters extends Component {
    render() {

        return (
            <div>
            <ul className="lista">
                {this
                    .props
                    .arrayDatos
                    .map(function (item, index) {
                        console.log("map", item)
                        item.idList = index;
                        return <li>
                            <p className="name">Nombre: {item.name}</p>
                            <img src={item.image} alt=""/>
                            <p className="city">Casa: {item.house}</p>
                        </li>
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Filters;