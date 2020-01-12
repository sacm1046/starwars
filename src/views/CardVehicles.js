import React from 'react';
import { Context } from '../store/appContext';

const CardVehicles = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        !!context.store.vehicles.results &&
                        context.store.vehicles.results.map((item, i) => {
                            if (i === context.store.vehiclesKey) {
                                return (
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3"></div>
                                            <div key={i} className="col-md-6 pt-4 pb-4">
                                                <div className="card">
                                                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/11/ala-x.jpg?itok=Xe-iWmzz" className="card-img-top" />
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

export default CardVehicles; 