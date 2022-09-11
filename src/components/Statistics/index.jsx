import "./Statistics.css"
import PropTypes from "prop-types";
import StatisticsItems from "../StatisticsItems";
import data from "../../data.json";
export default function Statistics({title}) {

    return(
      <div>
          
          <h2 className="title">{title}</h2>

  <ul className="stat-list">
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