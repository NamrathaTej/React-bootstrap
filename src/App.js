import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light"style={{ padding : "10px", margin : "20px" }}> 
        <div className="container-fluid" style={{border : "2px solid RED"}}>
          <a className="navbar-brand " style={{ color: "red" }} href="#">
          Republic.Inc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <span className="navbar-text" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    login
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>

      <div>
        <div className="card mb-3" style={{ color: "red", width: "90%", margin:"auto"}}>
          <img
            src='https://picsum.photos/200'
            className="card-img-top" style={{height: "400px", width: "100%"}}
            alt="car"
          />
          <div
            className="card-body"
            style={{ height: "200px" }}
          >
            <h5 className="card-title" style={{ color: "black" }}>
              CARD TITLE
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ width: "200px", color: "red" }}
              disabled
            >
              Primary button
            </button>
            {/* <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p> */}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4" >
          <div className="col" style={{ padding: "5px"}} >
            <div className="card h-100">
               <img src="https://picsum.photos/15" className="card-img-top" alt="cardimage" /> 
              <div className="card-body">
                <h3 className="card-title" style={{ color: "black"}}>
                  Card title
                </h3>
                <p className="card-text" style={{ color: "red" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style={{ width: "200px", color: "red" }}
                  disabled
                >
                  Primary button
                </button>
              </div>
              {/* <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
            </div>
          </div>
          <div className="col" style={{ padding: "5px"}}>
          <div className="card h-100" >
               <img src="https://picsum.photos/10" className="card-img-top" alt="cardimage" /> 
              <div className="card-body">
                <h3 className="card-title" style={{ color: "black" }}>
                  Card title
                </h3>
                <p className="card-text" style={{ color: "red" }}>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style={{ width: "200px", color: "red" }}
                  disabled
                >
                  Primary button
                </button>
              </div>

              {/* <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
          <div className="col" style={{ padding: "5px"}}>
          <div className="card h-100" >
               <img src="https://picsum.photos/5" className="card-img-top" alt="cardimage" /> 
              <div className="card-body">
                <h3 className="card-title" style={{ color: "black" }}>
                  Card title
                </h3>
                <p className="card-text" style={{ color: "red" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style={{ width: "200px", color: "red" }}
                  disabled
                >
                  Primary button
                </button>
              </div>

              {/* <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
        </div>
        <div className="card-footer" style={{width:"100%"}}>
          <small className="text-muted">Copyright Republic.Inc</small>
        </div>
      </div>
    </div>
  );
}

export default App;
