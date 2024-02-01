let Ubicoin = document.querySelector('.Ubicoin-cost');
let parsedUbicoin = parseFloat(Ubicoin.innerHTML);

let ClickerCost = document.querySelector('.ClickerCost');
let parsedClickerCost = parseFloat(ClickerCost.innerHTML);

// Fonction qui incrémente le nombre d'ubicoin à chaque click
function incrementUbicoin() {

    parsedUbicoin += 1;
    Ubicoin.innerHTML = parsedUbicoin;

}
// Check si on peut acheter un clicker
function buyClicker() {

    if (parsedUbicoin >= parsedClickerCost) {

        parsedUbicoin -= parsedClickerCost;
        Ubicoin.innerHTML = parsedUbicoin;

    }
}