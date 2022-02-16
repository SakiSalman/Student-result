
/**
 * Send Data To LS
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */
function sendData(key, arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true
}


function getData(key){


    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
}
