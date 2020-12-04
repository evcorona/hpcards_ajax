
const getJson = () => {
  let theURL = "http://hp-api.herokuapp.com/api/characters";
  let xhttp = new XMLHttpRequest();
  let response
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      response = JSON.parse(xhttp.response);
      console.log(response)
      fillData(response,card,properties)
    }
  };
  xhttp.open("GET",theURL,true);
  xhttp.send();
}

var card = `
<div class="card p-2 m-1 bg-dark text-white border-0 col-12 col-md-4 col-lg-4 mt-3 shadow rounded">
  <img src="imagen" class="card-img-top rounded w-90" alt="...">
  <div class="card-body">
    <h5 class="card-title">{data1}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item bg-dark text-white">{data2}</li>
    <li class="list-group-item bg-dark text-white">{data3}</li>
    <li class="list-group-item bg-dark text-white"><b>{data4}</b></li>
  </ul>
</div>`

var properties = ["image","name","house","ancestry","dateOfBirth"]

const fillData = (BDdata,html,key) => {
  console.log(BDdata)
  BDdata.forEach( data => { 
    currentContent = document.getElementById("card").innerHTML
    //let newCard = html.replace("imagen",data.image).replace("{data0}",data.name).replace("{data1}",data.house).replace("{data2}",data.ancestry).replace("{data3}",data.dateOfBirth)
    let newCard = html.replace("imagen",data[key[0]]).replace("{data1}",data[key[1]]).replace("{data2}",data[key[2]]).replace("{data3}",data[key[3]]).replace("{data4}",data[key[4]])
    newContent = currentContent + newCard
    document.getElementById("card").innerHTML = newContent
  })
}

getJson()
