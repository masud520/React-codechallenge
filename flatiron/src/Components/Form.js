import React, {useState} from "react";

function Form(props) {
    const [newTransaction, setNewTransaction] =  useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    function handleChange(event){
        const { name, value} = event.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value
        }));
  //      setTransactions(event.target.value);
    }
 function handleSubmit(event){
    event.preventDefault();
    props.onAddTransaction(newTransaction);

    setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
       />
      <label>Description</label>
      <input 
         type="text"
         name="description"
         value={newTransaction.description}
         onChange={handleChange}
       />
      <label>Category:</label>
      <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
      />
      <label>Amount:</label>
      <input
        type="text"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
      />
      <button type="submit">Add transaction</button>
    </form>
    );
}

export default Form;