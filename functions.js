log = console.log;

Product = function(name, price){

    // args = Array.from(arguments);
    // console.log(args);
    this.name = name;
    this.price = price;
};

console.log("typeof product is :" + typeof product);

miNotePro = new Product("Mi note pro", 15000); // new object

console.log("typeof miNotePro is :" + typeof miNotePro);

// add new attribute to product

// product.prototype.mfcDate = "10-01-2017";

var duplicate = miNotePro; // pointing to same object.

duplicate.name = "name changed"; // reflect to both references

log("duplicate object :"); 
log(duplicate); 
log("original object :");
log(miNotePro);

// iterating over object
for(key in miNotePro){
    log(key + ": "+ miNotePro[key]);
}

delete miNotePro.name // delete property of an object
log(miNotePro.name);// return undefined
miNotePro.name = "Note pro 5"
log(miNotePro.name);
