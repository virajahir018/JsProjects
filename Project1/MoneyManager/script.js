let balance = 0;
    let income = 0;
    let expense = 0;

    function addTransaction() {
      const text = document.getElementById('text').value;
      const amount = parseInt(document.getElementById('amount').value);
      const type = document.getElementById('type').value;

      if (text === '' || isNaN(amount)) {
        alert('Please fill all fields');
        return;
      }

      const transactionList = document.getElementById('transaction-list');
      const transaction = document.createElement('div');

      transaction.classList.add('transaction');

      if (type === 'income') {
        income += amount;
        balance += amount;
        transaction.classList.add('income-item');
      } else {
        expense += amount;
        balance -= amount;
        transaction.classList.add('expense-item');
      }

      transaction.innerHTML = `
        <div>
          <strong>${text}</strong><br>
          ₹${amount} (${type})
        </div>
        <button class="delete-btn" onclick="deleteTransaction(this, ${amount}, '${type}')">Delete</button>
      `;

      transactionList.appendChild(transaction);

      document.getElementById('balance').innerText = '₹' + balance;
      document.getElementById('income').innerText = '₹' + income;
      document.getElementById('expense').innerText = '₹' + expense;

      document.getElementById('text').value = '';
      document.getElementById('amount').value = '';
    }

    function deleteTransaction(button, amount, type) {
      if (type === 'income') {
        income -= amount;
        balance -= amount;
      } else {
        expense -= amount;
        balance += amount;
      }

      document.getElementById('balance').innerText = '₹' + balance;
      document.getElementById('income').innerText = '₹' + income;
      document.getElementById('expense').innerText = '₹' + expense;

      button.parentElement.remove();
    }