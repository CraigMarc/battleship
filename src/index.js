//change later when want to use css ******

//import './styles.css';

//capitalize string
function capitalize(string) {

    return string[0].toUpperCase() + string.slice(1)

}


//reverse string
function reverse(string) {

    let arr = []

    for (let i = string.length; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join("")
}

export {
    capitalize,
    reverse,
    
};