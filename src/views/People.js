import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const People = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container ">
                            <div className="row">
                                    {
                                        !!context.store.people.results &&
                                        context.store.people.results.map((item, i) => {
                                            
                                            return (
                                                <div key={i} className="col-md-2 pb-1 pt-1">

                                                    <div className="card">
                                                        <img src="https://media.metrolatam.com/2019/10/23/starwarsriseskyw-6881dd557a9e5fa0ff9f36e4189bdafd-600x400.jpg" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-text">{item.gender}</p>
                                                            <Link onClick={()=> context.actions.getKeyPeople(i)} to="/people/CardPeople" className="btn btn-primary">More!</Link>
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
                                        onClick={() => context.actions.getPeople(context.store.people.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getPeople(context.store.people.next)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col">
                                    <h1>Peopla</h1>
                                    <ul>
                                        {
                                            context.store.todos.map((item, i) => {
                                                return <li key={i} >{item}</li>
                                            })
                                        }
                                    </ul>
                                    <p>{context.store.name}</p>
                                    <input type="text" onChange={(e) => context.actions.setName(e)}
                                        placeholder="Insert your name" />
                                        <button
                                        onClick={() =>
                                            context.actions.addTask(
                                                "I am the task " + parseInt(context.store.todos.length + 1)
                                            )
                                        }
                                    >
                                        + add
                                    </button>
                                </div>
                            </div> */}

                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default People; 