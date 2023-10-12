

function PortfolioList({id,title, active,setselected}) {

  return (

         <li  className={active ? "portfoliolist active" : "portfoliolist"}  onClick={()=>{setselected(id)}}>
          {title}
         </li>
 
  )
}

export default PortfolioList