import { useState } from "react";
import "./AddEditForm.css";

function AddEditForm({ currentTransaction, saveFormData }) {

  const [title, setFormTitle] = useState(
    currentTransaction?.title || ""
  );

  const [amount, setAmount] = useState(
    currentTransaction?.amount || ""
  );

  const [date, setDate] = useState(
    currentTransaction?.date || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    saveFormData({
      id: currentTransaction?.id,
      title,
      amount: Number(amount),
      date,
    });

    setFormTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="form-container">

      <form className="add-edit-form" onSubmit={handleSubmit}>

        <h2>
          {currentTransaction ? "Edit Expense" : "Add Expense"}
        </h2>

        <label>Title:</label>

        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setFormTitle(e.target.value)}
          required
        />

        <label>Amount:</label>

        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <label>Date:</label>

        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Save</button>

      </form>

    </div>
  );
}

export default AddEditForm;
