import PropTypes from "prop-types";
import { Fragment } from "react"

export default function StatisticsItems({label, percentage}) {
    return (
        <Fragment><li class="item">
      <span class="label"> {label}</span>
      <span class="percentage">: {percentage}</span>
    </li></Fragment>
        
    )
}

StatisticsItems.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}