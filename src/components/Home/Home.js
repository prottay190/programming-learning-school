import './Home.css'
import img from '../../images/programming-line-art-banner-01-.jpg';
import Language from '../Language/Language'
import { useEffect, useState } from 'react';

const Home = () => {
      const [language, setLanguage] =useState([]);
      useEffect( () =>{
          fetch('./HomeData.json')
          .then(res => res.json())
          .then(data => setLanguage(data))
      },[])
    return (
        <div>
            <div>
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="language-container" >
                 {
                     language.map(lg => <Language 
                       key={lg.key}
                       lg={lg}
                     ></Language>)
                 }
            </div>
        </div>
    );
};

export default Home;