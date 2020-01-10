import React from 'react';
import { Context } from '../store/appContext';

const Planets= () =>{
    return(
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                    {
                                            !! context.store.planets.results &&
                                            context.store.planets.results.map((item, i) => {
                                                return (
                                                    <div key={i} className="col-md-2 pb-1 pt-1">

                                                    <div className="card">
                                                        <img src="https://media.metrolatam.com/2019/10/23/starwarsriseskyw-6881dd557a9e5fa0ff9f36e4189bdafd-600x400.jpg" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-text">{item.gender}</p>
                                                            <a href="#" className="btn btn-primary">More!</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                            </div>

                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getPlanets(context.store.planets.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getPlanets(context.store.planets.next)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default Planets;