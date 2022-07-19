import {useState, useContext, useEffect} from 'react'
import QuoteContext from './context/QuoteContext'

function RatingSelect({select}) {

const [selected, setSelected] = useState(7)

const {quoteEdit} = useContext(QuoteContext)

useEffect(() => {
  setSelected(quoteEdit.item.rating)
}, [quoteEdit])

const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
}

  return (
    <div>
      <div className="btn-group rounded-0 gap-2">
        <input type="radio" id="num1" value="1" onChange={handleChange} checked={selected === 1} name="rating" data-title="1" className="btn btn-sm" />
        <input type="radio" id="num1" value="2" onChange={handleChange} checked={selected === 2} name="rating" data-title="2" className="btn btn-sm" />
        <input type="radio" id="num1" value="3" onChange={handleChange} checked={selected === 3} name="rating" data-title="3" className="btn btn-sm" />
        <input type="radio" id="num1" value="4" onChange={handleChange} checked={selected === 4} name="rating" data-title="4" className="btn btn-sm" />
        <input type="radio" id="num1" value="5" onChange={handleChange} checked={selected === 5} name="rating" data-title="5" className="btn btn-sm" />
        <input type="radio" id="num1" value="6" onChange={handleChange} checked={selected === 6} name="rating" data-title="6" className="btn btn-sm" />
        <input type="radio" id="num1" value="7" onChange={handleChange} checked={selected === 7} name="rating" data-title="7" className="btn btn-sm" />
        <input type="radio" id="num1" value="8" onChange={handleChange} checked={selected === 8} name="rating" data-title="8" className="btn btn-sm" />
        <input type="radio" id="num1" value="9" onChange={handleChange} checked={selected === 9} name="rating" data-title="9" className="btn btn-sm" />
        <input type="radio" id="num1" value="10" onChange={handleChange} checked={selected === 10} name="rating" data-title="10" className="btn btn-sm" />
      </div>
    </div>
  )
}

export default RatingSelect
