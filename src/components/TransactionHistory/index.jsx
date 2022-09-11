import "./TransactionsHistory.css"
import TransactionsItems from "../TransactionsItems";

import PropTypes from "prop-types";
export default function TransactionHistory({items}){

    return (
        <section>
            <table class="transaction-history">
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
    items: PropTypes.object
}