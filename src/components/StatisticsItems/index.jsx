export default function StatisticsItems({label, percentage}) {
    return (
        <section><li class="item">
      <span class="label"> {label}</span>
      <span class="percentage"> {percentage}</span>
    </li></section>
        
    )
}