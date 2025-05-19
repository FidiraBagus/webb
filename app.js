const produk = {
  kalung1: { nama: "Kalung Elegan", harga: 120000 },
  kalung2: { nama: "Kalung Mutiara", harga: 150000 }
};
function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(produk[id]);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Produk ditambahkan ke keranjang");
}
function viewDetail(id) {
  alert(`Detail Produk: ${produk[id].nama} - Rp${produk[id].harga}`);
}
if (document.getElementById("cartItems")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cartItems");
  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nama} - Rp${p.harga}`;
    list.appendChild(li);
  });
}
if (document.querySelector("form")) {
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const metode = document.querySelector("input[name='payment']:checked");
    if (!metode) {
      alert("Pilih metode pembayaran");
      return;
    }
    localStorage.setItem("paymentMethod", metode.value);
    window.location.href = "invoice.html";
  });
}
if (document.getElementById("invoiceItems")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const method = localStorage.getItem("paymentMethod") || "-";
  const ul = document.getElementById("invoiceItems");
  let total = 0;
  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nama} - Rp${p.harga}`;
    ul.appendChild(li);
    total += p.harga;
  });
  document.getElementById("totalAmount").textContent = `Rp${total}`;
  document.getElementById("paymentMethod").textContent = method;
}
function loginWithGoogle() {
  alert("Login dengan Google berhasil (simulasi)");
}

let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
