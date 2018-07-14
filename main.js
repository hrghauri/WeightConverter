document.getElementById('lbsInput').addEventListener('input', function(event){


    let lbs = event.target.value;

    if (lbs ==="" || lbs == null){ 
        document.getElementById('kgInput').value = document.getElementById('kgInput').defaulValue;
    }
    else{
    document.getElementById('kgInput').value = lbs*0.453592;}
    
})


document.getElementById('kgInput').addEventListener('input', function(event){


    let kgs = event.target.value;

    if (kgs ==="" || kgs == null){ 
        document.getElementById('lbsInput').value = document.getElementById('lbsInput').defaulValue;
    }
    else{
    document.getElementById('lbsInput').value = kgs*2.20462;}
    
})