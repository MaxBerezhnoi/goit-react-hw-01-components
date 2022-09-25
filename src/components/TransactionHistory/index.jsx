import css from "./TransactionsHistory.module.css"
import TransactionsItems from "../TransactionsItems";

import PropTypes from "prop-types";
export default function TransactionHistory({items}){

    return (
        <section>
            <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(items => (
    <TransactionsItems
    key = {items.id}
    type = {items.type}
    currency = {items.currency}
    amount = {items.amount}
    />
))}

    
  </tbody>
</table>
        </section>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}

TransactionsItems.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired}))
  
}