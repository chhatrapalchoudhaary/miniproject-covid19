import {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import './index.css'

class ChartsData extends Component {
  state = {
    alldata: '',
  }

  componentDidMount() {
    this.getChartData()
  }

  getChartData = async () => {
    const {stateCode} = this.props
    console.log(stateCode)
    const apiUrl = `https://apis.ccbp.in/covid19-timelines-data`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()

      console.log(data[stateCode].dates)
      const type = 'total'
      const dataDateWise = Object.keys(data[stateCode].dates)

      const particularState = dataDateWise.map(date => ({
        dateval: date,
        confirmed: data[stateCode].dates[date].total.confirmed,
        deceased: data[stateCode].dates[date].total.deceased,
        recovered: data[stateCode].dates[date].total.recovered,
        tested: data[stateCode].dates[date].total.tested,
        active:
          data[stateCode].dates[date].total.confirmed -
          (data[stateCode].dates[date].total.deceased +
            data[stateCode].dates[date].total.recovered),
      }))

      console.log(particularState)
      this.setState({alldata: particularState})
    }
  }

  graph = (type, color) => {
    const {alldata} = this.state
    return (
      <LineChart
        width={730}
        height={250}
        data={alldata}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={type} stroke={color} />
      </LineChart>
    )
  }

  render() {
    return (
      <div className="charts-container">
        <h1 className="charts-title">Spread Trends</h1>
        <div className="barcharts-container">
          <div className="charts confirmed-background">
            {this.graph('confirmed', '#FF073A')}
          </div>
          <div className="charts active-background">
            {this.graph('active', '#007BFF')}
          </div>
          <div className="charts recovered-background">
            {this.graph('recovered', '#27A243')}
          </div>
          <div className="charts deceased-background">
            {this.graph('deceased', '#6C757D')}
          </div>
          <div className="charts tested-background">
            {this.graph('tested', '#9673B9')}
          </div>
        </div>
      </div>
    )
  }
}

export default ChartsData
