
function falaQualquer() {
    console.log(this.som);
}

let cachorro = {
    som: 'Au au',
    falar: falaQualquer, /* function() {
        console.log(this.som);
    } */

}

let gato = {
    som: 'Miau',
    falar: falaQualquer, /* function() {
        console.log(this.som);
    } */ 

}

cachorro.falar();
gato.falar();

let bindfunction = falaQualquer.bind(cachorro);
let bindfunction2 = falaQualquer.bind(gato);
bindfunction();
bindfunction2();

