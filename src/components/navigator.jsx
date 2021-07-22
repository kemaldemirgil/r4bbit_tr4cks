import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div>
          <ul>
            <p>About</p>
            <li><Link to="/about/rabbit" >the rabbit</Link></li>
            <li><Link to="/about/projects">projects</Link></li>
            <li><Link to="/about/inspiration">inspiration</Link></li>
            <li><Link to="/about/flags">flags</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Blog</p>
            <li><Link to="/blog/tracks">tracks</Link></li>
            <li><Link to="/blog/milestones">milestones</Link></li>
            <br/>
            <br/>
          </ul>
        </div>
        <div>
          <ul>
            <p>Photos</p>
            <li><Link to="/photos/sky">sky</Link></li>
            <li><Link to="/photos/nature">nature</Link></li>
            <li><Link to="/photos/life">life</Link></li>
            <li><Link to="/photos/moon">moon</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Music</p>
            <li><Link to="/music/slow">slow</Link></li>
            <li><Link to="/music/tempo">tempo</Link></li>
            <li><Link to="/music/deep">deep</Link></li>
            <br/>
          </ul>
        </div>
        <div>
          <ul>
            <p>Games</p>
            <li><Link to="/games/screenshots">screenshots</Link></li>
            <li><Link to="/games/moments">moments</Link></li>
            <li><Link to="/games/list">list</Link></li>
            <br/>
          </ul>
        </div>
        <div>
          <ul>
            <p>Misc</p>
            <li><Link to="/misc/water">water</Link></li>
            <li><Link to="/misc/earth">earth</Link></li>
            <br/>
            <br/>
          </ul>
        </div>
      </div>
      <div className="author">
        <small>follow the tracks &#10093;&#10093; find the rabbit &#10093;&#10093; Kemal Demirgil © 2021 </small>
      </div>
    </div>
  )
}

export default Navigator
