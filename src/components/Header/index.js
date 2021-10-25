import {Link} from 'react-router-dom'
import './index.css'

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="link">
        <h1 className="logo">
          {/* COVID19<span className="india">INDIA</span> */}
          COVID19INDIA
        </h1>
      </Link>
      <ul className="navBar">
        <Link to="/" className="link">
          <li className="item">Home</li>
        </Link>

        <li className="item">Vaccination</li>

        <Link to="/about" className="link">
          <li className="item">About</li>
        </Link>
      </ul>
    </div>
  )
}
