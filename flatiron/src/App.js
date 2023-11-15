import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import Form from './Components/Form';
import Navbar from './Components/Navbar';


export default function Transactions() {
  const [userTransactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const apiURL = "https://my-json-server.typicode.com/masud520/phase-1-domcontentloaded/transactions"

  useEffect(() => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setTransactions(data)
    setFilteredTransactions(data)
  })
},[])
    
  const handleSearch = (query) => {
    const filtered = userTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  )
  setFilteredTransactions(filtered);
}
  const handleAddTransactions = (newTransaction) => {
    setTransactions([...userTransactions, newTransaction]);
    setFilteredTransactions([...userTransactions, newTransaction]);
  }
  
  return (
    <>
    <Navbar />
  
   <Search onSearch={handleSearch}/>
   
   <tbody id='mytable'>
   <tr className='rows'>
      <th>Date</th>
      <th>Description</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
    {filteredTransactions.map(transaction => (
      
      <tr className='rows' key={transaction.id}>
       <th>{transaction.date}</th>
       <td>{transaction.description}</td>
       <td>{transaction.category}</td>
       <td>{transaction.amount}</td> 
       {/* <hr /> */}
      </tr>
    
  ))}
 </tbody>
 {/* <ul id="table">
  {filteredTransactions.map(transaction => (
    <li key={transaction.id}>
       <h4>Date: {transaction.date}</h4>
       <p>Description: {transaction.description}</p>
       <p>Category: {transaction.category}</p>
       <p>Amount: {transaction.amount}</p> 
       <hr />
    </li>
  ))}
 </ul> */}
 <hr />
 <Form onAddTransaction={handleAddTransactions} />
 <p id='track'>Track your spending with ease :</p>
 
 </>
);
}
  
  

  //  <Form onAddTransaction={handleAddTransactions} />
 
   
   