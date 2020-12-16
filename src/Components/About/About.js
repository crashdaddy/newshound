import React from 'react';
import {Component} from 'react';


class About extends Component {
    render() {

        return (
          <div style={{marginTop:'100px',fontSize:'30pt',padding:'40px'}}>
           Newshound combines RSS XML newsfeeds from various news agencies
           with agendas across the political spectrum and displays them
           side-by-side for the discerning political observer.<br/>
           <p style={{fontSize:'small',textDecoration:'italic'}}>
               Biases based on the following criteria:
           </p>   
           <img src='MediaBiasChart.jpg' alt = "" style={{width:'90%',marginTop:'40px'}} />
          </div>
        )
      }

}

export default About 