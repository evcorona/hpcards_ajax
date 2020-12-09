
const getJson = () => {
  let theURL = "https://hp-api.herokuapp.com/api/characters";
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

var titles = ["image","Name:","House:","Ancestry:","Date of Birth:"]

var card = `
<div class="card p-2 m-1 text-white border-0 col-12 col-md-4 col-lg-4 mt-3 shadow rounded">
  <div class="cherry card-body d-flex align-items-center">  
    <img src="imagen" class="card-img-top w-100 h-100 img-fluid rounded" alt="...">
  </div>
      <div class="card-body">
        <h5 class="card-title">{data1}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent text-white">${titles[2]} {data2}</li>
        <li class="list-group-item bg-transparent text-white">${titles[3]} {data3}</li>
        <li class="list-group-item bg-transparent text-white">${titles[4]} <b>{data4}</b></li>
      </ul>
</div>`

var properties = ["image","name","house","ancestry","dateOfBirth"]

const fillData = (BDdata,html,key) => {
  console.log(BDdata)
  BDdata.forEach( data => { 
    currentContent = document.getElementById("card").innerHTML
    let newCard = html.replace("imagen",data[key[0]]).replace("{data1}",data[key[1]]).replace("{data2}",data[key[2]]).replace("{data3}",data[key[3]]).replace("{data4}",data[key[4]])
    newContent = currentContent + newCard
    document.getElementById("card").innerHTML = newContent
  })
}

getJson()
