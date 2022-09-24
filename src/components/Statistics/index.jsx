import css from "./Statistics.module.css"
import PropTypes from "prop-types";
//import StatisticsItems from "../StatisticsItems";
//import data from "../../Data/data.json";
export default function Statistics({title, children}) {

    return(
      <div className={css.statistic}>
          
        {title.length > 3 && (<h2 className={css.title}>{ title }</h2>)}

  <ul className={css.statList}>
         
{children}
  </ul>
  
  
</div>
        
    )
}

Statistics.propTypes ={
  title: PropTypes.string.isRequired,
}