
function QuoteItem({item}) {

  return (
    <div className="card bg-base-300 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt={item.intro} /></figure>

      <div className="card-body">
          <h2 className="card-title text-accent">{item.intro}</h2>
          <p className='text-2xl my-3 font-light'>{item.quote}</p>
          <div className="card-actions justify-between">
              <button className="btn btn-primary">Listen</button>
              <button className="btn btn-primary">Do This</button>
          </div>
      </div>
    </div>
  )
}

export default QuoteItem
