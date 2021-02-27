import React, {Component} from 'react';
import {connect} from 'react-redux'
import {robots} from '../robots'
import CardList from '../Components/CardList'
import Scroll from '../Components/Scroll'
import SearchBox from '../Components/SearchBox'
import './App.css';
import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = state =>{
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{ 
    return {
    onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
} 

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [] 
        }
    } 

    componentDidMount(){
        this.props.onRequestRobots()
    }
    

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props
        const filtrado = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
            return isPending ? <h1 className="tc">Loading</h1> :
            (<div className="tc">
            <h1>Robots</h1>
            <SearchBox className="p1 m5" searchChange={onSearchChange}/>
            <Scroll>
            <CardList robots={filtrado} />
            </Scroll>
        </div>); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);