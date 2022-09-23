import css from "./Statistics.module.css"
import PropTypes from "prop-types";
import StatisticsItems from "../StatisticsItems";
import data from "../../Data/data.json";
export default function Statistics({title}) {

    return(
      <div>
          
          <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    {data.map(data => (
<StatisticsItems 
      key = {data.id}
      label={data.label}
      percentage={data.percentage}/>))}
  </ul>
  
  
</div>
        
    )
}

Statistics.propTypes ={
  title: PropTypes.string,
  id: PropTypes.string
}