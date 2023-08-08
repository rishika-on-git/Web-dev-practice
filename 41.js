// object destructuring 

const band  ={
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    year : 1998,
    "another famous song " : "he hi hu hu hi"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// another easy wayy 
// by default key vale hi var bante haii
const {bandName , famousSong , ...restProps} = band;
console.log(restProps);
console.log(bandName , " : ",  famousSong);

// now agar ab muje var jo h ye inke names ye keys vale nhi dene hai to
const {bandName:var1 , famousSong:var2} = band;
console.log(var1 , " : ",  var2);

console.log(band);




