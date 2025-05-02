const bangles = [
  {
    id: 1,
    name: "Golden Bangle",
    price: 1500,
    url: "https://yourstore.com/bangles/1",
    image: "images/golden-bangle.jpg"
  },
  {
    id: 2,
    name: "Silver Bangle",
    price: 1200,
    url: "https://yourstore.com/bangles/2",
    image: "images/silver-bangle.jpg"
  },
  {
    id: 3,
    name: "Diamond Bangle",
    price: 5000,
    url: "https://yourstore.com/bangles/3",
    image: "images/diamond-bangle.jpg"
  }
];

const productList = document.getElementById("productList");

bangles.forEach(bangle => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
  <img src="${bangle.image}" alt="${bangle.name}" class="product-image" />
  <h2>${bangle.name}</h2>
  <p>Price: ₹${bangle.price}</p>
  <button onclick="buyOnWhatsApp('${bangle.name}', '${bangle.url}')">Buy on WhatsApp</button>
`;
  productList.appendChild(div);
});

function buyOnWhatsApp(name, link) {
  const phoneNumber = "919999999999"; // Your WhatsApp business number (with country code, no +)
  const message = `Hi, I'm interested in the ${name}. Here's the link: ${link}`;
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
}
