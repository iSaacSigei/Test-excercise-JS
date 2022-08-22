const movies=['GOT', 'Money Heist', 'Army of the Bees','Spartcacus','The Orion'];
movies.find(myBestMovie)

function myBestMovie(item){
    if(item.includes('The')){
        console.log(item)
    }
}