import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {FiSearch} from 'react-icons/fi'
import Header from '../Header'
import Footer from '../Footer'
import TotalStats from '../TotalStats'
import './index.css'
import SearchResult from '../SearchResult'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    isLoading: true,
    totalActiveCases: 0,
    totalConfirmedCases: 0,
    totalRecoveredCases: 0,
    totalDeceasedCases: 0,
    confirmedCases: [],
    activeCases: [],
    RecoveredCases: [],
    DeceasedCases: [],
    PopulationCases: [],
    search: '',
    filteredSearchList: [],
  }

  componentDidMount() {
    this.getAllData()
  }

  getAllData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      let nationalWideConfirmedCases = 0
      let nationalWideRecoveredCases = 0
      let nationalWideDeceasedCases = 0
      let nationalWideActiveCases = 0
      const stateWiseConfirmedCases = []
      const stateWiseRecoveredCases = []
      const stateWiseDeceasedCases = []
      const stateWiseActiveCases = []
      const populationData = []

      statesList.forEach(state => {
        nationalWideConfirmedCases += data[state.state_code].total.confirmed
      })
      statesList.forEach(state => {
        nationalWideRecoveredCases += data[state.state_code].total.recovered
      })
      statesList.forEach(state => {
        nationalWideDeceasedCases += data[state.state_code].total.deceased
      })
      statesList.forEach(state => {
        nationalWideActiveCases +=
          data[state.state_code].total.confirmed -
          (data[state.state_code].total.recovered +
            data[state.state_code].total.deceased)
      })

      statesList.forEach(state =>
        stateWiseConfirmedCases.push(data[state.state_code].total.confirmed),
      )
      statesList.forEach(state =>
        stateWiseRecoveredCases.push(data[state.state_code].total.recovered),
      )
      statesList.forEach(state =>
        stateWiseDeceasedCases.push(data[state.state_code].total.deceased),
      )
      statesList.forEach(state =>
        populationData.push(data[state.state_code].meta.population),
      )

      statesList.forEach(state =>
        stateWiseActiveCases.push(
          data[state.state_code].total.confirmed -
            (data[state.state_code].total.recovered +
              data[state.state_code].total.deceased),
        ),
      )

      this.setState({
        totalActiveCases: nationalWideActiveCases,
        totalRecoveredCases: nationalWideRecoveredCases,
        totalDeceasedCases: nationalWideDeceasedCases,
        totalConfirmedCases: nationalWideConfirmedCases,
        confirmedCases: stateWiseConfirmedCases,
        RecoveredCases: stateWiseRecoveredCases,
        DeceasedCases: stateWiseDeceasedCases,
        PopulationCases: populationData,
        activeCases: stateWiseActiveCases,
        isLoading: false,
      })
    }
  }

  renderAllNationalData = () => {
    const {
      totalConfirmedCases,
      totalActiveCases,
      totalRecoveredCases,
      totalDeceasedCases,
    } = this.state

    return (
      <>
        <div testid="countryWideConfirmedCases" className="stats-block-column">
          <p className="stats-title red">Confirmed</p>
          <img
            src="/img/check-mark 1.png"
            className="stats-icon"
            alt="country wide confirmed cases pic"
          />

          <p className="stats-number red">{totalConfirmedCases}</p>
        </div>
        <div testid="countryWideActiveCases" className="stats-block-column">
          <p className="stats-title blue">Active</p>
          <img
            src="/img/protection 1.png"
            className="stats-icon"
            alt="country wide active cases pic"
          />
          <p className="stats-number blue">{totalActiveCases}</p>
        </div>
        <div testid="countryWideRecoveredCases" className="stats-block-column">
          <p className="stats-title green">Recovered</p>
          <img
            src="/img/recovered 1.png"
            className="stats-icon"
            alt="country wide recovered cases pic"
          />
          <p className="stats-number green">{totalRecoveredCases}</p>
        </div>
        <div testid="countryWideDeceasedCases" className="stats-block-column ">
          <p className="stats-title gray">Deceased</p>
          <img
            src="/img/breathing 1.png"
            className="stats-icon"
            alt="country wide deceased cases pic"
          />
          <p className="stats-number gray">{totalDeceasedCases}</p>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" testid="homeRouteLoader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllStatesList = () => {
    const {
      confirmedCases,
      activeCases,
      RecoveredCases,
      DeceasedCases,
      PopulationCases,
    } = this.state

    return (
      <div className="all-states-table" testid="stateWiseCovidDataTable">
        <div className="table-header">
          <div className="state-name-heading">
            <p className="table-header-title ">States/UT</p>
          </div>
          <div className="other-tables">
            <p className="table-header-title">Confirmed</p>
          </div>
          <div className="other-tables">
            <p className="table-header-title">Active</p>
          </div>
          <div className="other-tables">
            <p className="table-header-title">Recovered</p>
          </div>
          <div className="other-tables">
            <p className="table-header-title">Deceased</p>
          </div>
          <div className="other-tables">
            <p className="table-header-title">Population</p>
          </div>
        </div>
        <div className="state-wise-data-container">
          <ul className="states-names">
            {statesList.map(each => (
              <Link to={`/state/${each.state_code}`} className="link-search">
                <TotalStats
                  key={each.state_code}
                  data={each.state_name}
                  type="state"
                />
              </Link>
            ))}
          </ul>
          <ul className="other-tables">
            {confirmedCases.map(each => (
              <TotalStats key={uuidv4()} data={each} type="confirmed" />
            ))}
          </ul>
          <ul className="other-tables">
            {activeCases.map(each => (
              <TotalStats key={uuidv4()} data={each} type="active" />
            ))}
          </ul>
          <ul className="other-tables">
            {RecoveredCases.map(each => (
              <TotalStats key={uuidv4()} data={each} type="recover" />
            ))}
          </ul>
          <ul className="other-tables">
            {DeceasedCases.map(each => (
              <TotalStats key={uuidv4()} data={each} type="deceased" />
            ))}
          </ul>
          <ul className="other-tables">
            {PopulationCases.map(each => (
              <TotalStats key={uuidv4()} data={each} type="population" />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  searchStarted = event => {
    const searchItem = event.target.value
    const searchResult = statesList.filter(data =>
      data.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return this.setState({
      search: event.target.value,
      filteredSearchList: searchResult,
    })
  }

  showSearchList = () => {
    const {filteredSearchList} = this.state

    return (
      <ul
        className="search-result-container"
        testid="searchResultsUnorderedList"
      >
        {filteredSearchList.map(each => (
          <SearchResult
            key={each.state_code}
            statename={each.state_name}
            statecode={each.state_code}
            id={each.state_code}
          />
        ))}
      </ul>
    )
  }

  removeFilteredList = () => {
    this.setState({filteredSearchList: []})
  }

  render() {
    const {isLoading, filteredSearchList, search} = this.state
    const showSearchList =
      filteredSearchList.length === 0 ? '' : this.showSearchList()
    console.log(filteredSearchList)
    return (
      <div className="main-container">
        <Header />
        <div className="container">
          <div className="search-container">
            <FiSearch testid="searchIcon" className="search-icon" />
            <input
              type="search"
              placeholder="Enter the State"
              className="search-bar"
              onChange={this.searchStarted}
              onAbort={this.removeFilteredList}
            />
          </div>
          {search.length > 0 ? showSearchList : ''}
          {isLoading ? (
            this.renderLoadingView()
          ) : (
            <>
              <div className="country-stats">
                {this.renderAllNationalData()}
              </div>
              <div className="state-table">{this.renderAllStatesList()}</div>
            </>
          )}

          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
