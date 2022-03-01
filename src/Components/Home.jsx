import React from 'react'

const Home = () => {
  return (
    <>
      <div className="Homewapper">
        <div className="aboutme">
          <h1>Hey, This is Vipul Kumar</h1>
          <p>A 2nd year Computer Science Student from Graphic Era Hill University. <br></br> I am a Front End Web Developer and working in this feild last 1 year, apart from this i also write blogs and works as a freelancer writer for multiple wesbites.</p>
          <p>Very passionate to write Quotes, blogs, develop new websites, and listining LO-Fi songs</p>
          <div className="socialhandle">
            <div className="icon">
              <a target="_blank" href="https://instagram.com/vip_uul"><i class="fab fa-instagram"></i></a>
            </div>
            <div className="icon">
             <a  target="_blank" href="https://github.com/itsvipulkumar"> <i class="fab fa-github"></i></a>
            </div>
            <div className="icon">
            <a  target="_blank" href="https://twitter.com/itsvipulkumar"> <i class="fab fa-twitter"></i></a>
             
            </div>
            <div className="icon">
            <a  target="_blank" href="https://linkedin.com/in/itsvipulkumar"><i class="fab fa-linkedin"></i></a>
              
            </div>
            <div className="icon">
              <a target="_blank"  href="#"><i class="fab fa-facebook-f"></i></a>
            </div>

          </div>
        </div>
        <div className="aboutmeImg">
          <img src="./Images/aboutme.svg" alt="vipul" />
        </div>
      </div>


    </>
  )
}

export default Home