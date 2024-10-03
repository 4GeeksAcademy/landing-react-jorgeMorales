import React from "react";

const Jumbo =() => {
    return (
        <div className="p-5 mb-4 bg-light rounded-bottom">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Bienvenido a esta Land Page con React!</h1>
                <p className="col-md-8 fs-4">Este es un simple jumbotron para destacar contenido o información importante sobre tu sitio web.</p>
                <button className="btn btn-primary btn-lg" type="button">Soy un boton</button>
            </div>
        </div>
    );
};

export default Jumbo;