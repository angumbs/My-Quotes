import { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import {motion, AnimatePresence} from 'framer-motion'
import QuoteIntro from './QuoteIntro'
import Spinner from '../shared/Spinner'

function QuoteIntroList () {

  const {quote, isLoading} = useContext(QuoteContext)

  if (!isLoading && (!quote || quote.length === 0)) {
    return <div>No Quotes</div>
  } else {

    return isLoading ? <Spinner /> : (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <AnimatePresence>
      {quote.map((item) => (
        <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <QuoteIntro key={item.id} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
      </div>
    ) 
  }  
}

export default QuoteIntroList
