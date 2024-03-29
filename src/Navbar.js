import React, {useState, useEffect, useRef}from 'react'
import { FaBars } from 'react-icons/fa'
import logo from './logos.svg'
import { links, social } from './data'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const linksContainerRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks){
          linksContainerRef.current.style.height = `${linksHeight}px`
        }
        else{
          linksContainerRef.current.style.height = '0px'
        }
       }, [showLinks])

    return (
        <nav className='nav-container'>
            <div className="nav-center">
            <div className="nav-header"> 
              <img src={logo} alt="logo" /> 
              <button className="nav-toggle"
               onClick={() => setShowLinks(!showLinks)
              }><FaBars />
              </button>
              </div>
                <div className='links-container' ref={linksContainerRef} >
                  <ul className="links" ref={linksRef}>
                  {links.map((link) => {
                    const {id,url, text} = link;
                    return (
                     <li key={id}>
                       <a href={url}>{text} </a> 
                     </li>)
                  })}
                  </ul>
                  </div>

                  <ul className="social-icons">
                  {social.map((media) => {
                    const {id,url, icon} = media;
                    return(
                      <li key={id}>
                        <a href={url}>{icon}</a> 
                      </li>
                    )
                  })}
                </ul>
       
             </div>
        </nav>
    )
}

export default Navbar
