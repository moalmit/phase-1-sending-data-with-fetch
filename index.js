// Add your code here
function submitData (a, b){

    const obj = {name: a,
                 email: b,
                }; 
    const object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(obj),
    };

return fetch('http://localhost:3000/users', object)

.then(function(response){
    return response.json();   
})

.then(function(data){
        let p = document.createElement("p");
        p.innerHTML = data.id;
        document.body.appendChild(p);
    return 
})


.catch(function(error){
    let p = document.createElement('p');
    p.innerHTML = 'Unauthorized Access';
    document.body.appendChild(p);
    
    return
});

}

submitData("steve", "steve@steve.com");