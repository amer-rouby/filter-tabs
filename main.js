let arr = [];

function getDataByType(title){
    let newArr = [];

    if(title == "All"){
        newArr = arr;
    } else {
        newArr = arr.filter(item => item.title === title);
    }
    
    let out = '';
    newArr.map(item => {
        out += `
            <div class="w3-card-4 card">
                <h3>${item.title}</h3>
                <img src="${item.img}" width="300px" height="250px" alt="Alps">
                <div class="w3-container w3-center">
                <p>${item.footer}</p>
                </div>
            </div>
        `
    });
    document.getElementById("cards").innerHTML = out;
};

function initData(){
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
        console.log(result);
        arr = result.data;
        getDataByType("All");
    });
}

initData();




    
