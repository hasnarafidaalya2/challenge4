let http = new XMLHttpRequest();

http.open('get', 'cars.json', true);

http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";

        for(let item of products){
            output += `
                <div class = "product">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="capacity">${item.capacity}</p>
                </div>
            `;
        }
        
        document.querySelector(".products").innerHTML = output;
    }
}


