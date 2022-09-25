import PropTypes from "prop-types";
import { Fragment } from "react"

export default function TransactionsItems({type, currency, amount}){
    return(
    <Fragment ><tr >
        <td>{type}</td>
        <td>{currency}</td>
        <td>{amount}</td>
      </tr></Fragment>
    )
}

TransactionsItems.propTypes = {
type: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired
}