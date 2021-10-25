import {Link} from 'react-router-dom'
import './index.css'
import '../../fonts/HKGrotesk-Regular.otf'

const SearchResult = props => {
  const {statename, statecode, id} = props

  return (
    <li>
      <Link to={`/state/${id}`} className="link-search">
        <div className="search-result">
          <h1 className="search-result-heading font-face-gm">{statename}</h1>

          <button type="button" className="search-button">
            {statecode}
            <img src="/img/Line.png" alt="line icon" className="icon-right" />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default SearchResult
