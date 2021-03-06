import './ExpenseDate.css'

function ExpenseDate(data) {
    const month = data.date.toLocaleString('un-US', {month: 'long'});
    const day = data.date.toLocaleString('un-US', { day:'2-digit'});
    const year = data.date.getFullYear();

    return (
        <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
    )
}

export default ExpenseDate;