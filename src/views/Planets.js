import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

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
                                                    <div key={i} className="col-md-2 pb-1 pt-2">

                                                    <div className="card">
                                                        <img src="https://static.nationalgeographic.es/files/styles/image_1900/public/01-massive-planet-NGTS-1b.jpg" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-text">{item.gender}</p>
                                                            <Link onClick={()=> context.actions.getKeyPlanets(i)} to="/CardPlanets" className="btn btn-primary">More!</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                            </div>

                            <div className="row border-top border-dark pt-4 pb-4 mt-3">
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