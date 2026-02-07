const cities = ["Dubai","Paris","New York","Singapore","London","Tokyo"];
const images = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
];

let hotels = [];

for (let i = 1; i <= 10; i++) {
  hotels.push({
    name: "Hotel " + i,
    city: cities[Math.floor(Math.random() * cities.length)],
    price: Math.floor(Math.random() * 500) + 100,
    img: images[Math.floor(Math.random() * images.length)]
  });
}

function showHotels(list) {
  document.getElementById("hotelList").innerHTML = list.map(h => `
    <div class="hotel">
      <img src="${h.img}">
      <div class="hotel-info">
        <h3>${h.name}</h3>
        <p>${h.city}</p>
        <p><b>$${h.price}</b> / night</p>
        <button onclick="openPayment()">Book Now</button>
      </div>
    </div>
  `).join("");
}

showHotels(hotels);

function searchHotels() {
  const c = city.value.toLowerCase();
  const p = price.value;
  showHotels(hotels.filter(h =>
    (c === "" || h.city.toLowerCase().includes(c)) &&
    (p === "" || h.price <= p)
  ));
}

function openLogin(){ loginModal.style.display = "flex"; }
function closeLogin(){ loginModal.style.display = "none"; }
function openSignup(){ signupModal.style.display = "flex"; }
function closeSignup(){ signupModal.style.display = "none"; }
function openPayment(){ paymentModal.style.display = "flex"; }
function closePayment(){ paymentModal.style.display = "none"; }

function login(){ alert("Login Successful"); closeLogin(); }
function signup(){ alert("Account Created"); closeSignup(); }

function selectPayment() {
  const method = document.querySelector('input[name="payMethod"]:checked').value;
  cardInputs.style.display = method === "card" ? "block" : "none";
  otherPayments.style.display = method === "card" ? "none" : "block";
  payBtn.style.display = method === "card" ? "block" : "none";
}

function pay(method) {
  alert(method + " payment successful! Booking confirmed.");
  closePayment();
}
