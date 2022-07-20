import { useState, useContext, useEffect } from "react"
import QuoteContext from "../context/QuoteContext"
import Card from '../shared/Card'
import Button from "../shared/Button"
import RatingSelect from "../RatingSelect"

function QuoteForm() {

  const [text, setText] = useState({
    mood: '',
    quote: '',
  })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(7)
  const [isShown, setIsShown] = useState(false)
  
  const {addQuote, quoteEdit, updateQuote} = useContext(QuoteContext)

  useEffect(() => {
    if (quoteEdit.edit === true) {
      setBtnDisabled(false)
      setText({
        mood: quoteEdit.item.intro,
        quote: quoteEdit.item.quote,
      })
      setRating(quoteEdit.item.rating)
    }
  }, [quoteEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text.mood === '' || text.quote === '') {
      setBtnDisabled(true)
      setMessage('Please Fill Both')
    } else {
      setBtnDisabled(false)
      setMessage('')

    }
    const value = e.target.value;
    setText({...text, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.mood !== '' && text.quote !== '') {
      const newQuote = {
        intro: text.mood,
        quote: text.quote,
        rating: rating,
        
      }
      
      if (quoteEdit.edit === true) {
        updateQuote(quoteEdit.item.id, newQuote)  
      } else {
        addQuote(newQuote)
      }      

      setText({
        mood: '',
        quote: '',
        rating: 7,
      })
    }
  }

  return (
      <Card> 
        <h2 className="btn btn-sm" onClick={() => setIsShown(true)}>Add A Quote</h2>  
        {isShown && <h3>show</h3>}
        <form onSubmit={handleSubmit} className="form-control gap-3">
            <input name="mood" value={text.mood} onChange={handleTextChange} type="text" placeholder="Mood" className="input input-bordered" />
            <textarea name="quote" value={text.quote} onChange={handleTextChange} className="textarea textarea-bordered bg-neutral" placeholder="Quote"></textarea>
            {message && <div>{message}</div>}
            <RatingSelect select={(rating) => setRating(rating)} />
            <Button type='submit' disabled={btnDisabled}>Submit</Button>
        </form>

      </Card>  
  )
}

export default QuoteForm
