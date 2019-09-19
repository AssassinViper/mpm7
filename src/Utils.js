const xp2Level = (xp)=>{

    let level = 1;
    let temp = 0; 
    let xp_temp = xp;

    if(xp_temp == 0){

        return Number((1).toFixed(2));
    }

    while(xp_temp >= 0){

        temp = 500+((level-1)*10);
        level+=1;
        xp_temp -= temp;

        console.log(xp_temp+" -- "+temp);
    }

    if(xp){
        level -= 1;
    }

    return Number((level+((temp+10 + xp_temp)/(temp+10))).toFixed(2));
}

export {xp2Level}