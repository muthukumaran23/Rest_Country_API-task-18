const url = fetch("https://restcountries.com/v2/all");
  url
    .then((data) => data.json())
    .then((value) => {
      console.log(value);
      weather(value);
    })
    .catch((err) => console.log("Error:", err));
  
  function weather(value) {
    var div = document.createElement("div");
    div.setAttribute("class", "container");
    document.body.appendChild(div);
  
    let header = document.createElement("h1");
    header.innerText = "REST COUNTRIES API";
    header.setAttribute('id','title');
    header.setAttribute('class','text-center');
    div.appendChild(header);
  
  
    var row = document.createElement("div");
    row.setAttribute("class", "box");
    div.appendChild(row);
    value.forEach((country) => {
    //   let col = document.createElement("div");
    //   col.setAttribute("class", "col-lg-4 col-sm-12");
    //   row.appendChild(col);
  
      var card = document.createElement("div");
      div.setAttribute("class", "card");
      row.appendChild(card);
     
     let head = document.createElement("header");
      head.setAttribute("class", "card-header");
      head.innerHTML = country.name;
      card.appendChild(head);
  
      let body = document.createElement("div");
      body.setAttribute("class", "card-body");
      card.appendChild(body);
  
      let image = document.createElement("img");
      image.setAttribute("class", "flag-image");
      image.setAttribute("src", country.flags.png);
      image.setAttribute("alt", "flag");
      body.appendChild(image);
  
      let capital = document.createElement("h5");
      capital.setAttribute("class", "capital");
      capital.innerHTML = `Capital:${country.capital}`;
      body.appendChild(capital);
  
      let region = document.createElement("p");
      region.setAttribute("class", "region");
      region.innerHTML = `Region:${country.region}`;
      body.appendChild(region);
  
      let code = document.createElement("p");
      code.setAttribute("class", "code");
      code.innerHTML = `Code:${country.alpha3Code}`;
      body.appendChild(code);
  
      let lat = document.createElement("p");
      lat.setAttribute("class", "lat");
      lat.innerHTML = `Lat&Lng:${country.latlng}`;
      body.appendChild(lat);
  
      let weather = document.createElement("button");
      weather.setAttribute("class", "btn btn-primary");
      weather.innerText = " Click for weather";
      weather.addEventListener("click",function(){
          weather.innerText   ="";
          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=175fa9771bfa1b408feb60f0443a32d7`)
          .then((data) => data.json()).then((value)=>{
              console.log(value);
              let para = document.createElement("div");
          para.innerHTML = `<p>Temperature:${value.main.temp} &#8457;</p>
          <p>Wind-Speed:${value.wind.speed}&nbsp km/h</p>
          <p>Humidity:${value.main.humidity}&nbsp g.m-3;</p>
          
          `
          weather.appendChild(para);
      }).catch(err => {console.log(err)});
      })
      body.appendChild(weather);
    });
  }