import React from 'react'

const Footer = () => {
  const date=new Date();
  const getyear=date.getFullYear();
  return (
    <div className='Footer'>
     <p>Copyright &copy; {getyear}</p>
     </div>
  )
}

export default Footer;