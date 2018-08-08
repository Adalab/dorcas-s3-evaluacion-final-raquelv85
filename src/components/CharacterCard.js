import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

class CharacterCard extends Component{

    deadOrAlive(data){
        console.log(data)
        if(data === true){
           
            return "vive hasta el final de la saga"
        }else{
            return "muere antes de terminar la saga"
        }
        
        
    }

    render(){
      console.log(this.props.arrayDatos)
      console.log(this.props.match.params.id)
      const {arrayDatos} = this.props
      const estado = null;
        return(
            <div>

                 <ul className="lista">
                   
                               <li >
                                    <p className="name">Nombre: {arrayDatos[this.props.match.params.id].name}</p>
                                    <p className="name">casa: {arrayDatos[this.props.match.params.id].house}</p>
                                    <p className="name">Nacimiento: {arrayDatos[this.props.match.params.id].dateOfBirth}</p>
                                    <p className="name">Patronus: {arrayDatos[this.props.match.params.id].patronus}</p>
                                    <p className="name">Patronus: {arrayDatos[this.props.match.params.id].alive ? "Vive hasta el final de la saga" : "Muere antes de terminar la saga"}</p>
                                   
                                
                                </li>

                </ul>
            </div>
        );
    }
}

export default CharacterCard;