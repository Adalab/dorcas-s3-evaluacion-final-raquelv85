import React, {Component} from 'react';
import './App.css';
import Filters from './Filters';

const URL = 'http://hp-api.herokuapp.com/api/characters';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataTemp: [],
            data: []
        }
    }

    componentDidMount() {
        fetch(URL).then((response) => response.json()).then((persons) => {
            console.log(this.state.data)
            this.setState({data: persons});
        });
    }
    render() {

        return (
            <div className="App">
                <Filters arrayDatos={this.state.data}></Filters>
            </div>
        );
    }
}

export default App;
