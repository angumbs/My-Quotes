import { useParams, Link } from "react-router-dom"
import { useContext } from 'react'
import QuoteContext from '../components/context/QuoteContext'
import Header from "../components/Header"
import Footer from "../components/Footer"
import QuoteItem from "../components/quotes/QuoteItem"

function QuoteItemDetails() {
  const {quote} = useContext(QuoteContext)

  let {id} = useParams()

  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <Header />
        <main className='container mx-auto px-3 py-5 pb-12'>
        {quote.filter((item) => item.id === +id).map((quote) => (
          <QuoteItem key={quote.id} item={quote} />
        ))}
        <div className="my-4 mx-auto"><Link to='/' className="btn btn-outline">Return to Quotes</Link></div>
        </main>
      <Footer />
      </div>
    </>
  )
}

export default QuoteItemDetails
