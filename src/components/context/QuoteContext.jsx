import {createContext, useState, useEffect} from 'react'

const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [quote, setQuote] = useState([])
    const [quoteEdit, setQuoteEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchQuote()
    }, [])

    // Fetch Quotes
    const fetchQuote = async () => {
        const response = await fetch(`http://localhost:5000/quote?_sort=rating&_order=desc`)
        const data = await response.json()
        setQuote(data)
        setIsLoading(false)
    }
    // Add Quote
    
    const addQuote = async (newQuote) => {
        const response = await fetch(`/quote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuote)
        })
        const data = await response.json()

        setQuote([data, ...quote])
    }
    // Delete Quote
    const deleteQuote = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/quote/${id}`, {method: 'DELETE'}) 
            setQuote(quote.filter((item) => item.id !== id))
        }
    }
    // Select Quote to be updated
    const editQuote = (item) => {
        setQuoteEdit({
            item,
            edit: true
        })
    }
    // Update Quote
    const updateQuote = async (id, updQuote) => {
        const response = await fetch(`/quote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updQuote)
        })
        const data = await response.json()
        setQuote(quote.map((item) => (item.id === id ? {...quote, ...data} : item)))
    }

    return (<QuoteContext.Provider value={{
        quote,
        quoteEdit,
        isLoading,
        deleteQuote,
        addQuote,
        editQuote,
        updateQuote,
    }}>
        {children}
    </QuoteContext.Provider>)

}

export default QuoteContext