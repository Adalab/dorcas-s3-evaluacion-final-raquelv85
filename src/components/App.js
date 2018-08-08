import React, {Component} from 'react';
import './App.css';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import {Link, Route, Switch} from 'react-router-dom';

const URL = 'http://hp-api.herokuapp.com/api/characters';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataTemp: [],
            data: [],
            value: false
        }

        this.handleInputChange = this
            .handleInputChange
            .bind(this);

    }

    componentDidMount() {
        fetch(URL).then((response) => response.json()).then((persons) => {
            console.log(this.state.data)
            this.setState({data: persons, dataTemp: persons});
        });
    }
    handleInputChange(event) {

        const value = event.target.value;
        //console.log(value);
        let search = [];

        search = this
            .state
            .data
            .map(function (item) {
                //console.log(item.name.toLowerCase())
                if (item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    // console.log("nombre ",item)
                    return item
                }
            })

        this.setState({dataTemp: search, value: true})

    }

    render() {
        let arrayDatos;

        if (this.state.value === false) {
            arrayDatos = this.state.data;
        } else {
            arrayDatos = this.state.dataTemp;
        }

        return (
            <div className="App">
                <Filters onChangeInput={this.handleInputChange}></Filters>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={props => <CharacterList arrayDatos={arrayDatos}></CharacterList>}></Route>
                    <Route
                        path='/CharacterCard/:id'
                        render={props => <CharacterCard match={props.match} arrayDatos={arrayDatos}></CharacterCard>}></Route>
                </Switch>

            </div>
        );

    }
}

export default App;
