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

    // Display the total price in the #ans element
    document.getElementById("ans").textContent = `Total Price: Rs ${sum}`;
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
