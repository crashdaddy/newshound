import React, {Component} from 'react';
import Axios from 'axios';
import { parseString } from 'xml2js';
import {Paper} from '@material-ui/core';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternetData: [],
      dailyMailData: [],
      wsjData: [],
      nypData: [],
      HuffPostData: [],
      democracyNowData: []
  }
}

 alternetURL = "https://corsroute.herokuapp.com/https://www.alternet.org/feeds/feed.rss";
 dailyMailURL = "https://corsroute.herokuapp.com/https://www.dailymail.co.uk/news/index.rss";
 wsjURL = "https://corsroute.herokuapp.com/https://feeds.a.dj.com/rss/RSSOpinion.xml";
 nypURL = "https://corsroute.herokuapp.com/https://nypost.com/news/feed/";
 democracyNowURL = "https://corsroute.herokuapp.com/https://www.democracynow.org/democracynow.rss";
 HuffPostURL = "https://corsroute.herokuapp.com/https://www.huffpost.com/section/politics/feed";

 getHuffPost = () => {
  var self=this;
 Axios.get(this.HuffPostURL, {
   "Content-Type": "application/xml; charset=utf-8",
   headers: {
    "X-Requested-With": "XMLHttpRequest",
    'Access-Control-Allow-Origin': '*'
  }
 })
   .then((responseText) => {
      parseString(responseText.data, function(err, result){
        self.setState({HuffPostData:result.rss.channel[0].item})
     //  In case you want to see the whole thing.
     });
   })
   .catch((e) => {
   //  this.setState({ error: e.toJSON() })
     console.log(e);
   });
}

 getnyp = () => {
  var self=this;
 Axios.get(this.nypURL, {
   "Content-Type": "application/xml; charset=utf-8",
   headers: {
    "X-Requested-With": "XMLHttpRequest",
    'Access-Control-Allow-Origin': '*'
  }
 })
   .then((responseText) => {
      parseString(responseText.data, function(err, result){
        self.setState({nypData:result.rss.channel[0].item})
     });
   })
   .catch((e) => {
   //  this.setState({ error: e.toJSON() })
     console.log(e);
   });
}


getAlternet = () => {
   var self=this;
  Axios.get(this.alternetURL, {
    "Content-Type": "application/xml; charset=utf-8"
  })
    .then((responseText) => {
       parseString(responseText.data, function(err, result){
         self.setState({alternetData:result.rss.channel[0].item})
      });
    })
    .catch((e) => {
    //  this.setState({ error: e.toJSON() })
      console.log(e);
    });
}

getDailyMail = () => {
  var self=this;
 Axios.get(this.dailyMailURL, {
   "Content-Type": "application/xml; charset=utf-8"
 })
   .then((responseText) => {
      parseString(responseText.data, function(err, result){
        self.setState({dailyMailData:result.rss.channel[0].item})
       });
   })
   .catch((e) => {
   //  this.setState({ error: e.toJSON() })
     console.log(e);
   });
}


getWSJ = () => {
  var self=this;
 Axios.get(this.wsjURL, {
   "Content-Type": "application/xml; charset=utf-8"
 })
   .then((responseText) => {
      parseString(responseText.data, function(err, result){
        self.setState({wsjData:result.rss.channel[0].item})
       });
   })
   .catch((e) => {
   //  this.setState({ error: e.toJSON() })
     console.log(e);
   });
}


getDemocracyNow = () => {
 
  var self=this;
 Axios.get(this.democracyNowURL, {
   "Content-Type": "application/xml; charset=utf-8",
   headers: {
    "X-Requested-With": "XMLHttpRequest",
    'Access-Control-Allow-Origin': '*'
  }
 })
   .then((responseText) => {
      parseString(responseText.data, function(err, result){
        self.setState({democracyNowData:result.rss.channel[0].item})
     });
   })
   .catch((e) => {
   //  this.setState({ error: e.toJSON() })
     console.log(e);
   });
}

componentDidMount() {
let farLeft= getRandomInt(0,1);
if (farLeft===0) {
 this.getAlternet();
} else this.getDemocracyNow();
 this.getDailyMail();
 this.getWSJ();
 this.getnyp();
 this.getHuffPost();
}

    render() {
      const data = this.state.alternetData; //parser.parseString(this.state.data);
      const dailyMailData = this.state.dailyMailData;
      const wsjData = this.state.wsjData;
      const nypData = this.state.nypData;
      const HuffPostData = this.state.HuffPostData;
      const democracyNowData = this.state.democracyNowData;

    return (
      
          <div style={{width:"90%",marginRight:'auto',marginLeft:'auto',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
            <div style={{textAlign:'center',marginTop:'80px',width:'18%',float:'left'}}>
              
                	{(data && data.length > 0) &&
			data.map((item) => {
				return (
					<Paper elevation={3} style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#2E64A0',padding:'5px'}}>
            <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}><img src={item["media:content"][0]["$"].url} alt="" style={{float:'left',width:'100%',marginRight:'5px',marginBottom:'5px'}} />
            {item.title}</a><br/>
            
          <div style={{width:"100%",textAlign:'left'}}>
          <img src="AlterNet_logo.PNG" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>  
          </Paper>
				)
			})
		}
    
    {(democracyNowData && democracyNowData.length > 0) &&
			democracyNowData.map((item) => {
				return (
		      <Paper elevation={3} style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#2E64A0',padding:'5px'}}>
        <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}>
          {/* <img src={item["media:thumbnail"][0]["$"].url} alt="" style={{float:'left',width:'100px'}} />  */}
        {item.title}</a><br/>
        <div style={{fontSize:'small',overflow:"hidden",whiteSpace:"wrap"}} dangerouslySetInnerHTML={{ __html: item["content:encoded"]}}></div>
        <div style={{width:"100%",textAlign:'left'}}>
          <img src="democracyNowLogo.png" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>  
        </Paper>
				)
			})
		}
             </div>
             <div style={{textAlign:'center',marginTop:'80px',width:'18%',float:'left',marginLeft:'5px'}}>
              
              {(HuffPostData && HuffPostData.length > 0) &&
  HuffPostData.map((item) => {
    return (
      <Paper elevation={3}  style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#9DC8EB',padding:'5px'}}>
        <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}><img src={item["enclosure"][0]["$"].url} alt="" style={{float:'left',width:'100%',marginRight:'5px',marginBottom:'5px'}} />
        {item.title}</a><br/>
        <div style={{width:"100%",textAlign:'left'}}>
          <img src="huffpost-logo.png" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>  
        </Paper>
    )
  })
}
         </div>
         <div style={{float:'left',textAlign:'right',marginTop:'80px',width:'18%',marginLeft:'5px'}}>
              
              {(wsjData && wsjData.length > 0) &&
  wsjData.map((item) => {
    return (
      <Paper elevation={3}  style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#9765A0',padding:'5px'}}>
        <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}>
        {item.title}</a><br/>
        <span style={{fontSize:'small'}}>{item.description}</span>
        <div style={{width:"100%",textAlign:'center'}}>
          <img src="the-wall-st-journal.png" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>  
        </Paper>
    )
  })
}
         </div>
         <div style={{float:'left',textAlign:'right',marginTop:'80px',width:'18%',marginLeft:'5px'}}>
              
              {(dailyMailData && dailyMailData.length > 0) &&
  dailyMailData.map((item) => {
    return (
      <Paper elevation={3}  style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#CB9898',padding:'5px'}}>
        <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}><img src={item["media:content"][0]["$"].url} alt="" style={{float:'left',width:'100%',marginRight:'5px',marginBottom:'5px'}} />
        {item.title}</a><br/>
        <div style={{width:"100%",textAlign:'right'}}>
          <img src="dailymaillogo.jpg" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>    
      </Paper>
    )
  })
}
         </div>
         <div style={{float:'left',textAlign:'right',marginTop:'80px',width:'18%',marginLeft:'5px'}}>
              
              {(nypData && nypData.length > 0) &&
  nypData.map((item) => {
    return (
      <Paper elevation={3} style={{fontSize:"large",textAlign:'left',marginTop:'40px',backgroundColor:'#CB2126',padding:'5px'}}>
        <a href={item.link} target="blank" style={{color:'white',textDecoration:'none'}}>
          {/* <img src={item["media:thumbnail"][0]["$"].url} alt="" style={{float:'left',width:'100px'}} />  */}
        {item.title}</a><br/>
        <div style={{fontSize:'small'}} dangerouslySetInnerHTML={{ __html: item.description}}></div>
        <div style={{width:"100%",textAlign:'right'}}>
          <img src="NY_Post_logo.jpg" alt="" style={{width:'80px',marginTop:'20px'}}/>
          </div>  
        </Paper>
    )
  })
}
         </div>

             </div>
    
    )
    }
}

export default App
