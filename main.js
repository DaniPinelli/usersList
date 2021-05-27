window.onload = () => {

const url = 'https://reqres.in/api/users'

const arrayUsers = fetch(url)
  .then(response => response.json())
  .then(data => {
//console.log(data.data);
        
        for (let i = 0; i < data.data.length; i++) {

            let user = "<img class='photo' src=" + data.data[i].avatar + ">";
            user += "<p class='card-title name' ><strong>" + data.data[i].first_name + "\
             " + data.data[i].last_name + "\
             </strong></p><p class='card-text' >" + data.data[i].email + "\
             </p><br/><p class='show' >Show more..." 
            
     document.querySelector("div").innerHTML += "<div class='card-body card border-secondary mb-3 center userDiv'>" + user + "</div>" 
        }

    })      

.catch(err => (console.log(err)));
}
