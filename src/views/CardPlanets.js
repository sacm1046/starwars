import React from 'react';
import { Context } from '../store/appContext';

const CardPlanets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        !!context.store.planets.results &&
                        context.store.planets.results.map((item, i) => {
                            if (i === context.store.planetsKey) {
                                return (
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3"></div>
                                            <div key={i} className="col-md-6 pt-4 pb-4">
                                                <div className="card">
                                                    <img src="https://static.nationalgeographic.es/files/styles/image_1900/public/01-massive-planet-NGTS-1b.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="card-text">{item.hair_color}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        })
                    )
                }
            }
        </Context.Consumer>
    )
}

export default CardPlanets; 