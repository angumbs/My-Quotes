import {useContext} from 'react'
import QuoteContext from '../context/QuoteContext'

function QuoteStats () {

  const {quote} = useContext(QuoteContext)

    let average = quote.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / quote.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="flex justify-between py-4">
      <div>quotes {quote.length}</div>
      <div>average rating {isNaN(average) ? 0 : average}</div>
    </div>
  )
}
export default QuoteStats
