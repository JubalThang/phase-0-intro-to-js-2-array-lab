// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) { 
    let copyOfCasts = cats.slice();
    copyOfCasts.push(name);
    return copyOfCasts;
}

function prependCat(name) {
    let copyOfCasts = cats.slice();
    copyOfCasts.unshift(name);
    return copyOfCasts;
}

function removeLastCat() {
    let copyOfCasts = cats.slice();
    copyOfCasts.pop();
    return copyOfCasts;
}

function removeFirstCat() {
    let copyOfCasts = cats.slice();
    copyOfCasts.shift();
    return copyOfCasts;
}