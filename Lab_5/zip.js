function is_mn_zip(code){
    // If the number falls within the range return true otherwise return false 
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(is_mn_zip(55406))
console.log(is_mn_zip(10000))