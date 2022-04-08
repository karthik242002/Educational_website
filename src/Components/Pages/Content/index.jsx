import React from 'react';
import './Content.css';


import DynamicHeader from '../../DynamicHeader';

import Summary from '../../Summary';

import Menu from '../../Menu';
import MenuSection from '../../MenuSection';
import LinkButton from '../../LinkButton';


const ContentPage = (props) => {

  document.title = 'EASY LEARNING-Content'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Computer Science Engineering Sem 3 Notes'} screenMa="Article" perfilImage={props.perfilImage}/>
      </header>

      <div id="Content--Display">

        <section className='Content--Section' style={{ paddingLeft: 30 }}>

        <div className="content-summary--area">
          <Summary>

            <MenuSection title='2009 Regulation Notes'>

              <LinkButton link='/content#Introduction'> - <a href='https://drive.google.com/file/d/1PvnT5MhZkBywix78xeLTdYXXXKp_8P3E/view?usp=sharing'>CS8392-Click here</a> </LinkButton>

              <LinkButton link='/content#system--division'> - <a href='https://drive.google.com/file/d/1q5f2OeFqc9eyRqlH5JCwKKUMZp-Dfx44/view?usp=sharing0'>CS8351-Click here</a> </LinkButton>

              <LinkButton link='/content#glia--section'> - <a href='https://drive.google.com/file/d/1yoIPgFVTjnUXcA-UMxzQRQy95rP-NOVb/view?usp=sharing'>CS8391-Click here</a> </LinkButton>

              <LinkButton link='/content#Brain-Section'> - <a href='https://drive.google.com/file/d/1St-dWr7bc6KdHN3LEI3Isr33cP7lfRWQ/view?usp=sharing'>EC8395-Click here</a></LinkButton>

              <LinkButton link='/content#nervous-section'> - <a href='https://drive.google.com/file/d/1ReynaF9co1sx41movUolsFrutLRhrT4L/view?usp=sharing'>MA8351-Click here</a></LinkButton>

              <LinkButton link='/content#SNP-Division'> -  <a href='https://drive.google.com/file/d/1iFMyAdvbuGGN34TTmrDfokCecA7Ttwkr/view?usp=sharing'>CS8352-Click here</a></LinkButton>

            </MenuSection>

          </Summary>
        </div>

           
        <div className="content-summary--area">
          <Summary>

            <MenuSection title='2013 Regulation Notes'>

              <LinkButton link='/content#Introduction'> - <a href='https://drive.google.com/file/d/1PvnT5MhZkBywix78xeLTdYXXXKp_8P3E/view?usp=sharing'>CS8392-Click here</a> </LinkButton>

              <LinkButton link='/content#system--division'> - <a href='https://drive.google.com/file/d/1q5f2OeFqc9eyRqlH5JCwKKUMZp-Dfx44/view?usp=sharing0'>CS8351-Click here</a> </LinkButton>

              <LinkButton link='/content#glia--section'> - <a href='https://drive.google.com/file/d/1yoIPgFVTjnUXcA-UMxzQRQy95rP-NOVb/view?usp=sharing'>CS8391-Click here</a> </LinkButton>

              <LinkButton link='/content#Brain-Section'> - <a href='https://drive.google.com/file/d/1St-dWr7bc6KdHN3LEI3Isr33cP7lfRWQ/view?usp=sharing'>EC8395-Click here</a></LinkButton>

              <LinkButton link='/content#nervous-section'> - <a href='https://drive.google.com/file/d/1ReynaF9co1sx41movUolsFrutLRhrT4L/view?usp=sharing'>MA8351-Click here</a></LinkButton>

              <LinkButton link='/content#SNP-Division'> -  <a href='https://drive.google.com/file/d/1iFMyAdvbuGGN34TTmrDfokCecA7Ttwkr/view?usp=sharing'>CS8352-Click here</a></LinkButton>

            </MenuSection>

          </Summary>
        </div>
        <div className="content-summary--area">
          <Summary>

            <MenuSection title='2017 Regulation Notes'>

              <LinkButton link='/content#Introduction'> - <a href='https://drive.google.com/file/d/1PvnT5MhZkBywix78xeLTdYXXXKp_8P3E/view?usp=sharing'>CS8392-Click here</a> </LinkButton>

              <LinkButton link='/content#system--division'> - <a href='https://drive.google.com/file/d/1q5f2OeFqc9eyRqlH5JCwKKUMZp-Dfx44/view?usp=sharing0'>CS8351-Click here</a> </LinkButton>

              <LinkButton link='/content#glia--section'> - <a href='https://drive.google.com/file/d/1yoIPgFVTjnUXcA-UMxzQRQy95rP-NOVb/view?usp=sharing'>CS8391-Click here</a> </LinkButton>

              <LinkButton link='/content#Brain-Section'> - <a href='https://drive.google.com/file/d/1St-dWr7bc6KdHN3LEI3Isr33cP7lfRWQ/view?usp=sharing'>EC8395-Click here</a></LinkButton>

              <LinkButton link='/content#nervous-section'> - <a href='https://drive.google.com/file/d/1ReynaF9co1sx41movUolsFrutLRhrT4L/view?usp=sharing'>MA8351-Click here</a></LinkButton>

              <LinkButton link='/content#SNP-Division'> -  <a href='https://drive.google.com/file/d/1iFMyAdvbuGGN34TTmrDfokCecA7Ttwkr/view?usp=sharing'>CS8352-Click here</a></LinkButton>

            </MenuSection>

          </Summary>
        </div>

  
        <div className="content-summary--area">
          <Summary>

            <MenuSection title='2021 Regulation Notes'>

              <LinkButton link='/content#Introduction'> - <a href='https://drive.google.com/file/d/1PvnT5MhZkBywix78xeLTdYXXXKp_8P3E/view?usp=sharing'>CS8392-Click here</a> </LinkButton>

              <LinkButton link='/content#system--division'> - <a href='https://drive.google.com/file/d/1q5f2OeFqc9eyRqlH5JCwKKUMZp-Dfx44/view?usp=sharing0'>CS8351-Click here</a> </LinkButton>

              <LinkButton link='/content#glia--section'> - <a href='https://drive.google.com/file/d/1yoIPgFVTjnUXcA-UMxzQRQy95rP-NOVb/view?usp=sharing'>CS8391-Click here</a> </LinkButton>

              <LinkButton link='/content#Brain-Section'> - <a href='https://drive.google.com/file/d/1St-dWr7bc6KdHN3LEI3Isr33cP7lfRWQ/view?usp=sharing'>EC8395-Click here</a></LinkButton>

              <LinkButton link='/content#nervous-section'> - <a href='https://drive.google.com/file/d/1ReynaF9co1sx41movUolsFrutLRhrT4L/view?usp=sharing'>MA8351-Click here</a></LinkButton>

              <LinkButton link='/content#SNP-Division'> -  <a href='https://drive.google.com/file/d/1iFMyAdvbuGGN34TTmrDfokCecA7Ttwkr/view?usp=sharing'>CS8352-Click here</a></LinkButton>

            </MenuSection>

          </Summary>
        </div>          

        </section>
        <Menu></Menu>
      </div>

    </>

  )
}

export default ContentPage;
