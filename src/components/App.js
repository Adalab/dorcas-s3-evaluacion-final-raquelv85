import React, {Component} from 'react';
import './App.css';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import {Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

const URL = 'https://hp-api.herokuapp.com/api/characters';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataTemp: [],
            data: [],
            value: false,
            classHeader: "",
            classMargin: ""
        }

        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleClickCard = this
            .handleClickCard
            .bind(this);
        this.handleClickBack = this
            .handleClickBack
            .bind(this);
            this.handleChange = this
            .handleChange
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
        

       const search = this.state.data
            .map((item) => {
                //console.log(item.name.toLowerCase())
                if (item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    // console.log("nombre ",item)
                    return item
                }
            })

        this.setState({dataTemp: search, value: true})

    }
    handleChange(event){
        const value = event.target.value;
        //console.log(value);
        console.log(value)



       const search = this.state.data
            .map((item) => {
                //console.log(item.name.toLowerCase())
                if (value === "vivos" && item.alive === true) {
                    // console.log("nombre ",item)
                    return item
                }else if(value === "muertos" && item.alive === false){
                    return item
                }else if(value === "todos"){
                return item
                }
            })

        this.setState({dataTemp: search, value: true})

    }

    handleClickCard() {
        this.setState({classHeader: 'invisible', classMargin: "top"})
    }
    handleClickBack() {
        this.setState({classHeader: 'visible', classMargin: "middle"})
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
                <header className={`header ${this.state.classHeader}`}>
                    <Filters onChangeInput={this.handleInputChange} onChange={this.handleChange}></Filters>
                </header>
                <main className={`main ${this.state.classMargin}`}>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={props => <CharacterList arrayDatos={arrayDatos} onClickCard={this.handleClickCard}></CharacterList>}></Route>
                        <Route
                            path='/CharacterCard/:id'
                            render={props => <CharacterCard
                            match={props.match}
                            arrayDatos={arrayDatos}
                            onClickBack={this.handleClickBack}></CharacterCard>}></Route>
                    </Switch>
                </main>
            </div>
        );

    }
}

export default App;
