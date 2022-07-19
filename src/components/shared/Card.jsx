function Card({children}) {
  return (
    
    <div className="card card-compact bg-primary shadow-xl">
    <div className="card-body">
    {children}     
    </div>
    </div>
  )
}

export default Card
