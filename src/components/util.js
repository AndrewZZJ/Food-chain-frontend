export function getOptimalFoodSize(name, width, height){
    switch(name){
    case "burger":
        height *= 21.0 / 30.0;
        break;
    case "pizza":
        height *=  29.0 / 31.0;
        break;
    case "coke":
    case "beer":
        width *= 13.0 / 34.0;
        break;
    case "lemonade":
        width *= 20.0 / 31.0;
        break;
    }
    return {width, height};
}