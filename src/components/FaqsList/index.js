import './index.css'

const FaqsList = props => {
  const {question, answer} = props

  return (
    <>
      <li className="question">{question}</li>
      <li className="answer">{answer}</li>
    </>
  )
}

export default FaqsList
