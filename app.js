let button    = document.querySelector('#button')
let name      = document.querySelector('#name')
let height    = document.querySelector('#height')
let mass      = document.querySelector('#mass')
let hairColor = document.querySelector('#hair-color')
let skinColor = document.querySelector('#skin-color')
let eyeColor  = document.querySelector('#eye-color')
let gender    = document.querySelector('#gender')
let birthYear = document.querySelector('#birth-year')
let home      = document.querySelector('#home');

function getInfo() {
    for (var i = 1; i <= 88; i++ ){
        let apiUrl = 'https://swapi.co/api/people/' + i;
        axios.get(apiUrl).then(function(response){
            updateInfo(response.data) 
            console.log(response.data)         
        })
    }  
}

function getHome() {
    for (let j = 1; j <= 60; j++ ){
        let apiUrlPlanet = 'https://swapi.co/api/planets/' + j;
        axios.get(apiUrlPlanet).then(function(response){
            updateInfo(response.data)     
        })
    }  
}

getInfo();
getHome();

function updateInfo(data) {

    $("#submit").click(function(e){
        e.preventDefault();
            
            var val=$("#input").val();
            if( val.toLowerCase() === data.name.toLowerCase() ) {
                name.innerText = data.name;
                height.innerText = data.height;
                mass.innerText = data.mass;
                hairColor.innerText = data.hair_color;
                skinColor.innerText = data.skin_color;
                eyeColor.innerText = data.eye_color;
                birthYear.innerText = data.birth_year; 
                gender.innerText = data.gender; 
            } else {
                $("#list-names").css("visibility","visible");
            }                    
    });
    
        $("#button").click(function(e){
            e.preventDefault();
            let person = [];
            person = data.residents;
            if (typeof person !== undefined) {
                home.innerText = data.name;
            }
           
           
           
               
        });
    
}





