import React from 'react';
import { render } from '@testing-library/react';

export const Context = React.createContext(null);

export class ContextWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            store: {
                people: {},
                planets: {},
                vehicles: {},
                peopleKey: "",
              
            },
            actions: {
                getPeople: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { people: data }
                                )
                            });
                        });
                },
                getPlanets: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { planets: data }
                                )
                            });
                        });
                },
                getVehicles: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { vehicles: data }
                                )
                            });
                        });
                },
                getKeyPeople: a => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { peopleKey: a } 
                        ) 
                    })
                    console.log(this.state.store.peopleKey);
                    console.log(this.state.store.people.results[this.state.store.peopleKey].name);
                    console.log(this.state.store.people.results);
                }
            }
        };
    }
    componentDidMount() {
        this.state.actions.getPeople("https://swapi.co/api/people/");
        this.state.actions.getPlanets("https://swapi.co/api/planets/");
        this.state.actions.getVehicles("https://swapi.co/api/vehicles/");
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}