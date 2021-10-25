import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'
import ShowEachDistrictData from '../ShowEachDistrictData'

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

const tabsType = {
  confirm: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECORDED',
  deceased: 'DECEASED',
}

class StateWiseCases extends Component {
  state = {
    isLoading: true,
    totalStateConfirmData: 0,
    totalStateRecoveredData: 0,
    totalStateDeceasedData: 0,
    totalStateActiveData: 0,
    totalTestedData: 0,
    nameOfState: '',
    activeTab: tabsType.confirm,
    districtData: [],
  }

  componentDidMount() {
    this.getAllStateData()
  }

  getAllStateData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    console.log('Get ID')
    console.log(stateCode)

    const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      // let stateConfirmedData = 0
      const stateConfirmedData = data[stateCode].total.confirmed
      const stateRecoveredData = data[stateCode].total.recovered
      const stateActivedata =
        data[stateCode].total.confirmed -
        (data[stateCode].total.recovered - data[stateCode].total.deceased)
      const stateDeceasedData = data[stateCode].total.deceased
      const stateTastedData = data[stateCode].total.tested
      const stateObject = statesList.filter(
        each => each.state_code === stateCode,
      )
      const stateName = stateObject[0].state_name

      const emptyArray = []

      Object.keys(data[stateCode].districts).forEach(key =>
        emptyArray.push(data[stateCode].districts[key]),
      )
      //   emptyArray.push(data[stateCode].districts)
      console.log(emptyArray)

      this.setState({
        totalStateConfirmData: stateConfirmedData,
        totalStateActiveData: stateActivedata,
        totalStateRecoveredData: stateRecoveredData,
        totalStateDeceasedData: stateDeceasedData,
        totalTestedData: stateTastedData,
        nameOfState: stateName,
        isLoading: false,
        districtData: emptyArray,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" testid="homeRouteLoader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderStateView = () => {
    const {
      totalStateConfirmData,
      totalStateActiveData,
      totalStateDeceasedData,
      totalStateRecoveredData,
      nameOfState,
      totalTestedData,
      activeTab,
    } = this.state

    const showData =
      activeTab === 'CONFIRMED' ? this.renderConfirmedTabItems() : ''

    return (
      <div className="state-details">
        <div className="state-name-row">
          <div className="state-name-container">{nameOfState}</div>
          <div className="testno-container">
            <p className="test-title">Tested</p>
            <h1 className="testno">{totalTestedData}</h1>
          </div>
        </div>
        <p className="last-date">Last update on march 28th 2021</p>
        <div className="align-center-row">
          <div className="country-stats">
            <div
              testid="countryWideConfirmedCases"
              className="stats-block-column hovereffectconfirm"
            >
              <h1 className="stats-title red">Confirmed</h1>
              <img
                src="/img/check-mark 1.png"
                className="stats-icon"
                alt="country wide confirmed cases pic"
              />

              <p className="stats-number red">{totalStateConfirmData}</p>
            </div>
            <div testid="countryWideActiveCases" className="stats-block-column">
              <h1 className="stats-title blue">Active</h1>
              <img
                src="/img/protection 1.png"
                className="stats-icon"
                alt="country wide active cases pic"
              />
              <p className="stats-number blue">{totalStateActiveData}</p>
            </div>
            <div
              testid="countryWideRecoveredCases"
              className="stats-block-column"
            >
              <h1 className="stats-title green">Recovered</h1>
              <img
                src="/img/recovered 1.png"
                className="stats-icon"
                alt="country wide recovered cases pic"
              />
              <p className="stats-number green">{totalStateRecoveredData}</p>
            </div>
            <div
              testid="countryWideDeceasedCases"
              className="stats-block-column"
            >
              <h1 className="stats-title gray">Deceased</h1>
              <img
                src="/img/breathing 1.png"
                className="stats-icon"
                alt="country wide deceased cases pic"
              />
              <p className="stats-number gray">{totalStateDeceasedData}</p>
            </div>
          </div>
        </div>
        {showData}
      </div>
    )
  }

  renderConfirmedTabItems = () => {
    const {districtData} = this.state
    return (
      <div className="data-container">
        <h1 className="heading confirm">Top Districts</h1>
        <ul>
          {districtData.map(each => (
            <ShowEachDistrictData number={each.total.confirmed} name={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const renderData = isLoading
      ? this.renderLoadingView()
      : this.renderStateView()
    return (
      <div className="main-container">
        <Header />
        <div className="container">{renderData}</div>
      </div>
    )
  }
}

export default StateWiseCases
