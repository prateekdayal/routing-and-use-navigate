import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
export default function About(){
const data=useNavigate()
function handleNavigation(){
  alert('hii i am redirecting to next page okk')
  data('/')
}
  return(
    <div>
      hii i am About
      <Link to='/'>Go to home</Link><br/><br/><br/><br/>
      <button onClick={handleNavigation}>Go to home After perfoming sone Action</button>
    </div>
  )
}