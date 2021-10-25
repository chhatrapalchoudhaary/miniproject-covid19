import './index.css'

const TotalStats = props => {
  const {data, type} = props
  const classtype = type === 'state' ? 'state' : ''
  const confirmedtype = type === 'confirmed' ? 'confirmedtype' : ''
  const activetype = type === 'active' ? 'activetype' : ''
  const recoveredtype = type === 'recover' ? 'recoveredtype' : ''
  const deceasedtype = type === 'deceased' ? 'deceasedtype' : ''
  const populationtype = type === 'population' ? 'populationtype' : ''
  return (
    <>
      <li
        className={`list confirm-cases ${classtype} ${confirmedtype} ${activetype} ${recoveredtype} ${deceasedtype} ${populationtype}`}
      >
        {data}
      </li>
    </>
  )
}

export default TotalStats
