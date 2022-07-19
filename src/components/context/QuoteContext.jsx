import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'
import QuoteData from '../../data/QuoteData'

const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {

    const [quote, setQuote] = useState(QuoteData)
    const [quoteEdit, setQuoteEdit] = useState({
        item: {},
        edit: false
    })

    const addQuote = (newQuote) => {
        newQuote.id = uuidv4('')
        setQuote([newQuote, ...quote])
    }

    const deleteQuote = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setQuote(quote.filter((item) => item.id !== id))
        }
    }
    // Select item to be updated
    const editQuote = (item) => {
        setQuoteEdit({
            item,
            edit: true
        })
    }
    // Update quote
    const updateQuote = (id, updQuote) => {
        setQuote(quote.map((item) => (item.id === id ? {...quote, ...updQuote} : item)))
    }

    return (<QuoteContext.Provider value={{
        quote,
        quoteEdit,
        deleteQuote,
        addQuote,
        editQuote,
        updateQuote,
    }}>
        {children}
    </QuoteContext.Provider>)

}

export default QuoteContext