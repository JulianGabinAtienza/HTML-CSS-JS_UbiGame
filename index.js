let Ubicoin = document.querySelector('.Ubicoin-cost');
let parsedUbicoin = parseFloat(Ubicoin.innerHTML);

let ClickerCost = document.querySelector('.ClickerCost');
let parsedClickerCost = parseFloat(ClickerCost.innerHTML);

let clickerLevel = document.querySelector('.clicker-level');

let clickerIncrease = document.querySelector('.clicker-increase');
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let gpc = 1;

// Fonction qui incrémente le nombre d'ubicoin à chaque click
function incrementUbicoin() {

    Ubicoin.innerHTML = Math.round(parsedUbicoin += gpc);

}

// Check si on peut acheter un clicker et nous le vend si c'est le cas
function buyClicker() {
    if (parsedUbicoin >= parsedClickerCost) {
        
        Ubicoin.innerHTML = Math.round(parsedUbicoin -= parsedClickerCost);

        clickerLevel.innerHTML++; // a chque upgrade, le niveau du clicker Zombi de 1

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2)); // Augmente le prix du clicker de 3% à chaque achat
        clickerIncrease.innerHTML = parsedClickerIncrease; // Update the value of clickerIncrease.innerHTML
        gpc += parsedClickerIncrease;

        parsedClickerCost *= 1.08; // Augmente le prix du clicker de 8% à chaque achat
        ClickerCost.innerHTML = Math.round(parsedClickerCost); // Update the value of ClickerCost.innerHTML

    }
}