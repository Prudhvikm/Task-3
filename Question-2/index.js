const xhr = new XMLHttpRequest();

xhr .open("GET","https://restcountries.com/v3.1/all",true)

xhr .send();

xhr .onload = function () {
    var data = JSON.parse (this.response)
    //console.log("data",data)
    //console.log(data[7].flags.png)
    for ( var i in data ) {
       const res = data[i].flags.png
       console.log(res)
}
}