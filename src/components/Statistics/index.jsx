import StatisticsItems from "../StatisticsItems";
import data from "../../data.json";
export default function Statistics({title, id}) {

    return(
      <div><section class="statistics">
          
          <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {data.map(data => (
<StatisticsItems 
      
      label={data.label}
      percentage={data.percentage}/>))}
  </ul>
  
  
</section></div>
        
    )
}

