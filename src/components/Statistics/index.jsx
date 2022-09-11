import "./Statistics.css"
import PropTypes from "prop-types";
import StatisticsItems from "../StatisticsItems";
import data from "../../data.json";
export default function Statistics({title, id}) {

    return(
      <div>
          
          <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {data.map(data => (
<StatisticsItems 
      
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