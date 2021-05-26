window.onload = () => {

const url = 'https://reqres.in/api/users'

const arrayUsers = fetch(url)
  .then(response => response.json())
  .then(data => {
     //   console.log(data.data);
        
        for (let i = 0; i < data.data.length; i++) {

            let user = "<img src=" + data.data[i].avatar + ">";
            user += "<p>" + data.data[i].first_name + "\
             " + data.data[i].last_name + "\
             </p><br/><p>" + data.data[i].email + "\
             </p><br/><p>Show more..."
            
     document.querySelector("div").innerHTML += "<div>" + user + "</div>" 
        }

    })      

.catch(err => (console.log(err)));
}
