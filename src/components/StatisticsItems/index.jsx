import PropTypes from "prop-types";
import { Fragment } from "react"

export default function StatisticsItems({label, percentage}) {
    return (
        <Fragment><li className="item">
      <span className="label"> {label}</span>
      <span className="percentage">: {percentage}</span>
    </li></Fragment>
        
    )
}

StatisticsItems.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}