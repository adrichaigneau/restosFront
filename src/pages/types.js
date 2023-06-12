import React from "react";
import { Link } from "react-router-dom";
import "./types.css";

export default function Types() {
  return (
    <div>
      <h5 className="d-flex justify-content-center mt-3 mb-4 text">Cliquez sur un type de cuisine pour voir les restaurants associés</h5>
      <div className="container ml-4 mt-4 justify-content-center">
        <div className="row d-flex justify-content-center mt-3 mb-4">
          <div className="col-md-4">
            <Link to={`/type/${1}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1615327631885-bca9e5798b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vpc2luZSUyMGZyYW4lQzMlQTdhaXNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${2}`}>
              <img
                className="imgbutton "
                src="https://images.unsplash.com/photo-1624224701172-8499296e2cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGN1aXNpbmUlMjBqYXBvbmFpc2V8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${3}`}>
              <img
                className="imgbutton "
                src="https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2ltY2hpfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to={`/type/${4}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1544601284-7fe39c93d4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vpc2luZSUyMGNoaW5vaXNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${5}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1621538997517-58ce53933faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjByZXN0YXVyYW50fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${6}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG91bGV0JTIwY3Vycnl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to={`/type/${7}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1667747755679-9095ac972c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8UmVzdGF1cmFudCUyMGxpYmFuYWlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${8}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1626238328324-d55282264212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXJhbmlhbiUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/type/${9}`}>
              <img
                className="imgbutton"
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjBmb29kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
