import {Link} from 'react-router-dom'
import { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import Card from '../shared/Card'
import { FaTimes, FaSpa, FaPencilAlt, FaHeart} from 'react-icons/fa'

function QuoteIntro({item}) {

  const {deleteQuote, editQuote} = useContext(QuoteContext)

  return (
    <Card>
        <div className='card-actions justify-between'>
          <div>
          <button className='btn btn-sm btn-ghost'><FaHeart className='text-xl pr-1' /> {item.rating}</button>
          </div>
          <div>
            <button className='btn btn-sm btn-ghost' onClick={() => editQuote(item)}><FaPencilAlt /></button>
            <button className='btn btn-sm btn-ghost' onClick={() => deleteQuote(item.id)}><FaTimes /></button>
          </div>
        </div>

        <h2 className="card-title text-2xl text-neutral pb-1">
          <FaSpa className='text-4xl pr-2' />{console.log(item.id)}
          <Link to={`/Quote/${item.id}`}>{item.intro}</Link>
        </h2>
    </Card>
  )
}

export default QuoteIntro
