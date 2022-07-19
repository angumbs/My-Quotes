import {FaCog, FaSearch} from 'react-icons/fa'

function Header({text}) {
  return (
<div className="sticky top-0 z-10 navbar bg-base-100 bg-primary shadow-lg">
  <div className="navbar-start">    
    <button className="btn btn-ghost btn-circle">
      <FaCog className='text-xl' />
    </button>
  </div>
  <div className="navbar-center">
    <a href="/" className="btn btn-ghost normal-case text-xl text-neutral">{text}</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <FaSearch className='text-xl' />
    </button>
  </div>
</div>
  )
}

Header.defaultProps = {
    text: 'My Quotes'
}

export default Header
