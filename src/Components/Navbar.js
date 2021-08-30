import { Link } from "react-router-dom";

export default function Navbar() {

  function LogOut() {
    window.localStorage.clear();
    window.location = '/';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ml-5">
        <div className="container">
          <Link className="navbar-brand" to="/"><i class="fas fa-bolt" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-info"><strong>Bienvenido {window.localStorage['userName']}!</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-info"><strong>Rol:</strong> {window.localStorage['type']}</Link>
              </li>
              <li className="nav-item">
                <input className="nav-info btn-logout rounded" type="submit" value="Logout" onClick={(e) => LogOut()} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}