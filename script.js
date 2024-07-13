// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all elements with class "price"
    const prices = document.querySelectorAll('.price');
    let sum = 0;

    // Loop through each price element and add its value to the sum
    prices.forEach(priceElement => {
        sum += parseFloat(priceElement.textContent);
    });

    // Create a new row for the total price
    const totalRow = document.createElement("tr");

    // Create a single cell that spans both columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = `Total Price: Rs ${sum}`;

    // Append the cell to the new row
    totalRow.appendChild(totalCell);

    // Append the new row to the table
    document.querySelector("table").appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
