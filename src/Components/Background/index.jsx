import React from 'react'
import TioMisaBanner from '../../Images/Biomisa-banner.jpeg';
import './Background.css'


export default (props) => {

  return(

    <body className="App-body">

    <header>
      <a href="https://drive.google.com/drive/folders/147O4u-AKDZYTz6camYVXShDDf7gZoll6?usp=sharings">
        <img styles="justify-content:center;" id="csk" src= "https://t3.ftcdn.net/jpg/04/00/77/64/360_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg" ></img>
      </a>
    </header>

      <section>
        <div className="gradient" >


          <div className='Pane'>

            {props.children}

          </div>

        </div>
      </section>


  </body>


  )
}
