import {Link} from "react-router-dom";
import {FaHome, FaSpa, FaInfo} from "react-icons/fa"

function Footer() {

  return (
    <footer className="pt-5">
        <div className="btm-nav flex justify-between">
          <button><Link className="btn btn-circle bg-ghost" to='/' ><FaHome /></Link></button>
          <button><Link className="btn btn-circle bg-ghost" to='/' ><FaSpa /></Link></button>
          <button><Link className="btn btn-circle bg-ghost" to='/about' ><FaInfo /></Link></button>
        </div>
    </footer>
  )
}

export default Footer
