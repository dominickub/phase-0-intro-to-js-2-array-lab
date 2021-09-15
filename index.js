// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const catsCopy = cats.slice()
    catsCopy.push(name)
    return catsCopy
}

function prependCat(name) {
    const catsCopy = cats.slice()
    catsCopy.unshift(name)
    return catsCopy
}

function removeLastCat() {
    const catsCopy = cats.slice()
    catsCopy.pop()
    return catsCopy
}

function removeFirstCat() {
    const catsCopy = cats.slice()
    catsCopy.shift()
    return catsCopy
}
