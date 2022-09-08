export default function TransactionsItems({type, currency, amount}){
    return(
    <section>
        <tr>
            <td>{type}</td>
      <td>{currency}</td>
      <td>{amount}</td>
      </tr>
        </section>
      
    
    )
}