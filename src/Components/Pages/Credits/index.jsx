import React from 'react'
import './Credits.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'

import PerfilCard from '../../PerfilCard';

import Images from '../../../Images';

import LinkButton from '../../LinkButton';
import Facebook from '../../SVG/Facebook';
import Github from '../../SVG/Github';
import LinkedIn from '../../SVG/LinkedIn';
import LinkedInEmpty from '../../SVG/LinkedInEmpty';
import Gmail from '../../SVG/Gmail';
import Instagram from '../../SVG/Instagram';
import Twitter from '../../SVG/Twitter';
import Whatssap from '../../SVG/Whatssap';
import Youtube from '../../SVG/Youtube';

import TeacherCard from '../../TeachersCard';


const CreditsPage = (props) => {



  const showBorder = () => {

  }

  return (

    <>

<header>
        <DynamicHeader screenName={'Participants'} screenMap="Credits" perfilImage={props.perfilImage}/>
      </header>

      <div className="Credits--Display">

        <section className='Credits--Section' style={{ paddingLeft: 30 }}>

          <section id="Authors">

            <h1 className='Credits--Authors-Title'> Developer Team </h1>

            <section id="Programmers">

              <h2 className='Credits--Programmers-Title'>Programmers</h2>

              <div className="Credits--Border-bar"/>

              <section id="Karthik--Card">

                <PerfilCard

                  perfilImage={Images.KARTHIK}
                  cardTitle='Karthik.S'
                  userTitle='|| Developer Full Stack ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Web || Mobile || Desktop ||
                      </p>

                      ,

                      <p className="Skill">
                        || JavaScript || Java || Elixir ||
                      </p>
                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://github.com/karthik242002' blank={true}>
                        <Github color='#4ce300'/>
                      </LinkButton>,

                      <LinkButton link='https://www.linkedin.com/in/karthik-s-9a6121237/' blank={true}>
                        <LinkedIn color="#4ce300"/>
                      </LinkButton>,

                     
                      <LinkButton link='www.instagram.com' blank={true}>
                        <Instagram color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='mailto:karthiksiva153@gmail.com' blank={true}>
                        <Gmail color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://twitter.com/karthik08917385?t=FyjcAqClFZ2iVH_3XflbbQ&s=09' blank={true}>
                        <Twitter color="#4ce300"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                    Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
                  </p>

                </PerfilCard>

              </section>

              <section id="Hylan--Card">

                <PerfilCard

                  perfilImage={Images.MAHESH}
                  cardTitle='Maheshwaran.S'
                  userTitle='||  Desingner e Programmer ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Web || Mobile || Desktop ||
                      </p>

                      ,

                      <p className="Skill">
                       || Java || PHP || Flutter || MySQL ||
                      </p>
                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://github.com/HylanSilva' blank={true}>
                        <Github color='#4ce300'/>
                      </LinkButton>,

                      <LinkButton link='https://www.linkedin.com/in/hylan-silva-89025b189/' blank={true}>
                        <LinkedInEmpty color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='www.instagram.com' blank={true}>
                        <Instagram color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='mailto:hylansilva27@gmail.com' blank={true}>
                        <Gmail color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://twitter.com/laninhonutella' blank={true}>
                        <Twitter color="#4ce300"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                  Jovem que gosta muito de tecnologia, mas não esquece de curtir a vida, e sempre na positividade #sóalegria
                  </p>

                </PerfilCard>

              </section>

       

            
             
              
              <div className="Credits--Border-bar"/>

            </section>

          </section>

          <section id="Sources">
            <h1 className="Credits--Source-Title"> Videos</h1>

          
            <section id="Teachers--Guilherme">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bWPMSSsVdPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             
            </section>


          </section>

        </section>

          <Menu></Menu>

      </div>

      {showBorder()}
    </>

  )
}

export default CreditsPage;
