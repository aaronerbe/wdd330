//  basic utility function
//      return the square root of a number
export function sqRoot (num) {
    return Math.sqrt(num);
}

//  this is something fun I just picked up
//      My hate for alert messages knows no bounds
//      now I can add some input variables to the path URL to pass in to my code
//          ?num=100&name=Brigham Young University-Idaho&message=today is a good day!
export function getUrlVar(pathVar) {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(m,key,value) => vars[key] = value);
    return vars[pathVar];
}