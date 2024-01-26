import React, { Component } from 'react'

export default class HigherOrder extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }

    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => 
            <React.Fragment key={item.id}>
                <div className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </div>
            </React.Fragment>
        );
        return mapRows;
    };

    renderType = (userType) => {
        const data = this.state.userData;
        const mapRows= data.filter(user => user.user_type === userType).map((item) =>
        <React.Fragment key={item.id}>
            <div className='list-elements'>
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        </React.Fragment>
        );
        return mapRows;
    }

    renderJname = () => {
        const data =this.state.userData;
        const mapRows = data.filter(user => user.name[0] === 'J').map((item) =>
        <React.Fragment>
            <div className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        </React.Fragment>
        );
        return mapRows;
    }

    renderAge = () => {
        const data = this.state.userData;
        const mapRows = data.filter(user => user.age > 28 && user.age < 50).map((item) =>
        <React.Fragment>
            <div className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        </React.Fragment>
        );
        return mapRows;
    }

    renderYears = () => {
        const data = this.state.userData;
        const mapRows = data.filter(user => user.user_type=== "Designer").map((item) => item.years).reduce((totalyear,currentyear)=> totalyear+ currentyear,0)
        
        return mapRows;
    }
    
    render() {
        return (
          <div>
                <h1>Display all items</h1>
                <div className="display-box">
                <ul>{this.renderItems()} </ul>
                </div>

                <h1>Display based on user Type</h1>
                <div className="display-box">
                    <ul>{this.renderType("Designer")}</ul>
                </div>
                
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                     <ul>{this.renderJname()} </ul>
                </div>

                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.renderAge()} </ul>
                </div>

                <h1>Find the total years of the designers</h1>
                <div className="display-box">
                    <ul>{this.renderYears()} </ul>
                </div>

            </div>

    )}
}
