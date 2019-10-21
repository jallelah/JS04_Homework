
var streetNumber = ['9377','140','919','9479','30','584'];
var streetName = ['Sheffield Dr.','Inverness St.','Golden Star Dr.','E. Ridge Circle','Pierce St.','University St.'];
var cityName = ['Lake Mary','Valrico','Augusta','Williamsport','New Lenox','Kissimmee'];
var stateName = ['FL','UT','GA','PA','IL','AL'];
var zipCode = ['32746','32746','32746','17701','60451','34741'];

function getRandom (input){

    return input[Math.floor ((Math.random()*input.length))];

}

function createAdress (){
    
    return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;

}

var address = createAdress();
console.log(address);