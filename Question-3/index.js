const xhr = new XMLHttpRequest();

xhr .open("GET","https://restcountries.com/v3.1/all",true)

xhr .send()

xhr .onload = function () {
    var data = JSON.parse (this.response)
    console.log("data",data)
   
for(var i = 0; i < data.length; i++) {
    console.log(data[i].name);
        console.log(data[i].region);
        console.log(data[i].subregion);
        console.log(data[i].population);   
  }
}
