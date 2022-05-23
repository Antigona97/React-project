import React, { useState } from 'react';

import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItems(data) {
   const [title, setTitle] = useState(data.title);

    const clickHandler = () => {
        setTitle('Toilet');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={data.date}></ExpenseDate>
            <h2>Expense Item</h2>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{data.amount}</div>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </Card>
    );
}
export default ExpenseItems;