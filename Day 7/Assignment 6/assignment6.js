function formatNames(arr){

    let array = arr.map(capitalize => {
        return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
    });

    return array;
}

console.log(formatNames(["alice", "bob", "charlie"]));

