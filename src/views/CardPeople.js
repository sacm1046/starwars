import React from 'react';
import { Context } from '../store/appContext';

const CardPeople = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        !!context.store.people.results &&
                        context.store.people.results.map((item, i) => {
                            if (i === context.store.peopleKey) {
                                return (
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3"></div>
                                            <div key={i} className="col-md-6 pt-4 pb-4">
                                                <div className="card">
                                                    <img src="https://media.metrolatam.com/2019/10/23/starwarsriseskyw-6881dd557a9e5fa0ff9f36e4189bdafd-600x400.jpg" className="card-img-top" />
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

export default CardPeople; 