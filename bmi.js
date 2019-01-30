bmi = (height, weight) => {
    const sum = weight/(height * height);
    if ( sum > 30) {
        console.log('Very fat')
    }
    else if (sum >= 25 && sum <29.9) {
        console.log('Very fat')
    }
    else if(sum > 23 && sum < 24.9){
        console.log('Fat')
    }
    else if(sum > 18.6 && sum < 22.9){
        console.log('Normal')
    }
    else{
        console.log('Thin')
    }
}









