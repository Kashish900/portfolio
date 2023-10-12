import { useEffect, useState } from 'react';
import { featuredPortfolio, javaPortfolio, listdata, othersPortfolio, webPortfolio } from './Data';
import PortfolioList from './PortfolioList';
import './portfolio.css';


var d = listdata

function Portfolio() {
  const [selected,setselected] = useState("featured");
  const [getdata, setdata] = useState(featuredPortfolio);

  useEffect(()=>{

    switch(selected){
      case "features":
        setdata(featuredPortfolio);
        break;
      case "web":
        setdata(webPortfolio);
        break;
      case "others":
        setdata(othersPortfolio);
        break;
      case "java":
        setdata(javaPortfolio);
        break;
      default:
        setdata(featuredPortfolio);
    }

  }, [selected])

  return (
    <div  className='portfolio'  id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {d.map((a)=>{
            return( <PortfolioList id={a.id} title = {a.title} active = {selected === a.id}  setselected  = {setselected} />)
           
          })}
        </ul>
        <PortfolioList/>
        <div className="container">
          {getdata.map((e)=>{
            return(
            <div className="item">
              <img className="itemimg" src={e.img} alt="" />
              <h3>{e.title}</h3>
            </div>)
          })} 
        </div>
    </div>
  )
}

export default Portfolio