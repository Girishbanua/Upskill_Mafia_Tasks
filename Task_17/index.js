const addLink = document.querySelector(".addLink");
//Image Section
const skipBtn = document.querySelector(".skip");
const imgSection = document.querySelector(".imageSection");
const image = document.querySelector("#image");
//Service Name and Price
const serviceName = document.querySelector("#serviceName");
const servicePrice = document.querySelector("#servicePrice");
//Adding items to cart
const addBtn = document.querySelector(".addBtn");
const itemList = document.querySelector(".itemList");
const emptyList = document.querySelector(".emptyList");
const addedList = document.querySelector(".addedList");
const bookbtn = document.getElementById("book");
//service array
const services = [
  {
    name: "Dry Cleaning",
    price: "₹500",
  },
  {
    name: "Leather & Seude Cleaning",
    price: "₹2000",
  },
  {
    name: "Ironing",
    price: "₹500",
  },
  {
    name: "Wedding Dress Cleaning",
    price: "₹3000",
  },
  {
    name: "Wash & Fold",
    price: "₹500",
  },
  {
    name: "Stain Removal",
    price: "₹1000",
  },
];
//Skip images function
let i = 2;
let currentItem = 0;
function skipImages() {
  if (i > 6) i = 1;
  image.src = `./images/${i}.jpg`;
  i++;
  currentItem = i - 2;
  serviceName.innerHTML = services[i - 2].name;
  servicePrice.innerHTML = services[i - 2].price;
  imageChanged(currentItem);
}
const imageChanged = (x) => {
  currentItem = x;
  console.log("currentItem: " + currentItem);
};

let addedItemsArray = [];

const addItem = () => {
  addedItemsArray.push({
    service: services[currentItem].name,
    price: services[currentItem].price,
  });
  console.log(addedItemsArray);
  displayAddedItems();
};
//display added items in the cart
const displayAddedItems = () => {
  addedItemsArray.length == 0
    ? (emptyList.style.display = "flex",
      bookbtn.disabled = true)
    : (emptyList.style.display = "none"),
    bookbtn.disabled = false;
console.log(addedItemsArray.length)
  addedList.innerHTML = "";
  addedItemsArray.forEach((item, index) => {
    const newItem = document.createElement("tr");
    newItem.classList.add("newItem");
    newItem.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.service}</td>
      <td>${item.price}</td>
      <td><button class="remove" onclick="removeItem(${index})"><p>Remove</p></button></td>
    `;
    addedList.appendChild(newItem);
  });

  calculateTotal();
};

//Remove item from the cart
const removeItem = (x) => {
  addedItemsArray.splice(x, 1);
  bookbtn.disabled = addedItemsArray.length == 0;
  displayAddedItems();
};

//calculate total
const totalAmount = document.querySelector("#totalAmount");
const calculateTotal = () => {
  let sum = 0;
  addedItemsArray.forEach((item) => {
    sum += parseInt(item.price.slice(1));
  });
  totalAmount.innerHTML = `₹${sum}`;
};
