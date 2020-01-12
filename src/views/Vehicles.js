import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Vehicles = () =>{
    return(
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row border-dark pt-4 pb-4">         
                                    {
                                            !! context.store.vehicles.results &&
                                            context.store.vehicles.results.map((item, i) => {
                                                return (
                                                    <div key={i} className="col-md-2 pb-1 pt-2">

                                                    <div className="card">
                                                        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/11/ala-x.jpg?itok=Xe-iWmzz" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-text">{item.gender}</p>
                                                            <Link onClick={()=> context.actions.getKeyVehicles(i)} to="/CardVehicles" className="btn btn-primary">More!</Link>
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
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.next)}
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

export default Vehicles; 