
document.querySelector("h1").innerText = "Productos";

let cardsArray = [];

for (let i = 1; i <= 3; i++) {
    
    let imageUrl = `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg`;
    let card = `
    <div class="col-md-4">
           <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="Producto ${i}">
            <div class="card-body">
                <h5 classs="card-title">Producto ${i}</h5>
                <p class="card-text">Autos en Venta :D     ${i}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $${i * 1000}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Añadir al carrito</a>
            </div>
        </div>
    </div>`;

    cardsArray.push(card);
}
document.querySelector("section").innerHTML = `<div class="row">${cardsArray.join('')}</div>`;
