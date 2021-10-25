import './index.css'

const ShowEachDistrictData = props => {
  const {number, name} = props

  return (
    <li>
      <p>{number}</p>
      <p>{name}</p>
    </li>
  )
}

export default ShowEachDistrictData
