import React, { useContext, useState } from 'react'
import Navigation from '../components/Navigation';
import { Context } from '../context/StoreGlobal';

const Home = () => {

    //const [name, setName] = useState("");

    const { name, changeName, task, setTask, todos, addTodos } = useContext(Context)

    return (
        <>
            {/* Navigation*/}
            <Navigation />
            {/* Header*/}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">
                            With this shop hompeage template
                        </p>
                    </div>
                </div>
            </header>
            {/* Section*/}
            <section className="py-5">
                <div className="container px-4 px-4 px-lg-5 mt-5">
                    <div className="row">
                        <div className="col">
                            <input type="text" value={name} onChange={changeName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group">
                                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                                <button className='btn btn-warning btn-sm' onClick={addTodos}>Add Task</button>
                            </div>
                            <ul className="list-group">
                                {
                                    todos.length > 0 &&
                                    todos.map((task) => {
                                        return <li className='list-group-item'>{task}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        {/* Product price*/}
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            View options
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Sale badge*/}
                                <div
                                    className="badge bg-dark text-white position-absolute"
                                    style={{ top: "0.5rem", right: "0.5rem" }}
                                >
                                    Sale
                                </div>
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* Product reviews*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                        </div>
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">
                                            $20.00
                                        </span>
                                        $18.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Sale badge*/}
                                <div
                                    className="badge bg-dark text-white position-absolute"
                                    style={{ top: "0.5rem", right: "0.5rem" }}
                                >
                                    Sale
                                </div>
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">
                                            $50.00
                                        </span>
                                        $25.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* Product reviews*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                        </div>
                                        {/* Product price*/}
                                        $40.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Sale badge*/}
                                <div
                                    className="badge bg-dark text-white position-absolute"
                                    style={{ top: "0.5rem", right: "0.5rem" }}
                                >
                                    Sale
                                </div>
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">
                                            $50.00
                                        </span>
                                        $25.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        {/* Product price*/}
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            View options
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Sale badge*/}
                                <div
                                    className="badge bg-dark text-white position-absolute"
                                    style={{ top: "0.5rem", right: "0.5rem" }}
                                >
                                    Sale
                                </div>
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* Product reviews*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                        </div>
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">
                                            $20.00
                                        </span>
                                        $18.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* Product reviews*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                        </div>
                                        {/* Product price*/}
                                        $40.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer*/}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright © Your Website 2023
                    </p>
                </div>
            </footer>
        </>

    )
}

export default Home