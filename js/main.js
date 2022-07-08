// Initialization of an array containing all drinks
const drinks = [
    {
        id: 1,
        name: "Coca Cola",
        price: 0.8
    },
    {
        id: 2,
        name: "Fanta",
        price: 0.7
    },
    {
        id: 3,
        name: "Ice Tea",
        price: 0.7
    },
    {
        id: 4,
        name: "Perrier",
        price: 1
    }
];

let chosenDrink = prompt("Quelle boisson désirez-vous ? Vous avez le choix entre Coca Cola, Fanta, Ice Tea et Perrier");

const availableDrinks = drinks.map(function(item){
    return item.name;
});

if (availableDrinks.includes(chosenDrink)) {
    let choice = drinks.find(function(item){
        return item.name.includes(chosenDrink);
    });

    let currency = Number(prompt("Votre " + choice.name + " coûte " + choice.price + "€, veuillez insérer votre monnaie"));

    let addition = 0, leftToPay = 0;

    // Ask the user to insert change until the sum matches the price of the drink
    while (currency < choice.price){
        leftToPay = choice.price - currency;
        // Round to 2 decimal places
        leftToPay = leftToPay*100;
        leftToPay = Math.round(leftToPay);
        leftToPay = leftToPay/100;
        alert("Il manque : " + leftToPay + "€");

        addition = Number(prompt("Insérez de nouvelles pièces"));

        currency = currency + addition;
        // Round to 2 decimal places
        currency = currency*100;
        currency = Math.round(currency);
        currency = currency/100;
        console.log(currency);
    }

    if (currency > choice.price) {
        let returned = currency - choice.price;
        returned = returned*100;
        returned = Math.round(returned);
        returned = returned/100;
        alert("Voici votre monnaie : " + returned + "€");
    }

    alert("Votre " + choice.name + " est prête");
}
