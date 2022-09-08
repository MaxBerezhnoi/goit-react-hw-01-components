import TransactionsItems from "../TransactionsItems";

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