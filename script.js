const form=document.querySelector(".form");//targetting form field
form.addEventListener("submit",(event)=>{
    event.preventDefault();//preventing from loading page
    const userName=document.querySelector(".userName").value;//targetting the input field value and storing it in userName
    fetchingAPI(userName);
})




function fetchingAPI(userName){
    fetch(`https://api.chess.com/pub/player/${userName}/stats`)//fetching chess api for user stats using promise
    .then((response)=>response.json())//changing the response to json format
    .then((result)=>{
        let name=userName.toUpperCase();  //changing user name to capital using touppercase method
     //storing the required values    
    let bestRatingBlitz=result.chess_blitz.best.rating;
    let currentRatingBlitz=result.chess_blitz.last.rating
    let totalWinsBlitz=result.chess_blitz.record.win
    let totalLossBlitz=result.chess_blitz.record.loss
    let totalDrawBlitz=result.chess_blitz.record.draw
    
    let bestRatingRapid=result.chess_rapid.best.rating;
    let currentRatingRapid=result.chess_rapid.last.rating;
    let totalWinsRapid=result.chess_rapid.record.win;
    let totalLossRapid=result.chess_rapid.record.loss;
    let totalDrawRapid=result.chess_rapid.record.draw;
    
    
    const display=document.querySelector(".display");//targetting class name display to display datas
    display.innerHTML=""; //using empty string to remove the old state 
    //passing values to the specific field
    display.innerHTML+=`
    
    <h1 class="name">${name}</h1>
    <div class="stats">
    <div class="blitz">
    <h3>Blitz</h3>
    <p>Best Rating : ${bestRatingBlitz}</p>
    <p>Current Rating : ${currentRatingBlitz}</p>
    <p>Total Wins : ${totalWinsBlitz}</p>
    <p>Total Losses : ${totalLossBlitz}</p>
    <p>Total Draw : ${totalDrawBlitz}</p>
    </div>
    
    <div class="rapid">
    <h3>Rapid</h3>
    <p>Best Rating : ${bestRatingRapid}</p>
    <p>Current Rating : ${currentRatingRapid}</p>
    <p>Total Wins : ${totalWinsRapid}</p>
    <p>Total Losses : ${totalLossRapid}</p>
    <p>Total Draw : ${totalDrawRapid}</p>
    </div>
    </div>
    `
removeUserNameField();
    

}).catch((error)=>alert("Invalid UserName or Not enough stats to display"));
//will show alert when wrong user name and a low stat account user name is entered

}

function removeUserNameField(){
    const nameValue=document.querySelector(".userName");//targetting input field
nameValue.value="";//to remove the entered user name after providing the stats

}
