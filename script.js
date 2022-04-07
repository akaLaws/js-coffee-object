// OBJECTS IN JAVASCRIPT

// Coffee object that defines my coffee in regard to strength and extra condiments

let coffee = {

    // Property strength is set as a default 1
    strength: 1,

    // The boost method adds or subtract a level to strength whether the argument is + or -
    boost: function(x){
        if(x == '+'){coffee.strength++;}
        else if(x == '-' && x > 1){coffee.strength--;}
        else{coffee.strength;}
    },

    // The roast function returns the type of roast depending on the argument 
    // (which is the strength either by coffee.strength or typed in manual in integer)
    roast: function(r){
        if(r == 1){return 'light to medium';}
        else if(r == 2){return 'medium';}
        else if(r == 3){return 'medium to dark';}
        else if(r == 4){return 'dark';}
        else if(r == 5){return 'very dark';}
        else{return 'trancending conciousness'};
    },

    // The extra method returns the type of coffee depending on which condiments you add
    // 'milk' returns a Latte while 'sirup' returns a flavoured coffee or both
    extra: function(a, b){
        if(a == 'milk' && b == null){return ' latte';}
        else if(a == 'sirup' && b == null){return ' flavoured';}
        else if(b == 'milk' || b == 'sirup'){return ' flavoured latte';}
        else{return ' americano';};
    },

    // The receiver property is set to whoever is getting the coffee
    receiver: 'some dude'
};

// LET'S BREW SOME COFFEE

// First we assign a strength to our coffee
coffee.strength = 3;

// Do we want a boost... Definetly!!!
coffee.boost('+');

// Who's it for?
coffee.receiver = 'Sarah!!';

// So what coffee do we get if we add some milk to the mix??
document.write('Starbuck employer: [yells out loud] " ');
document.write(coffee.roast(coffee.strength) + coffee.extra('milk'));
document.write(' for ' + coffee.receiver + ' "');

