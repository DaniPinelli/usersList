window.onload = () => {

const url = 'https://reqres.in/api/users'

const arrayUsers = fetch(url)
  .then(response => response.json())
  .then(data => {
        console.log(data.data);
        
        for (let i = 0; i < data.data.length; i++) {

            let user = "<img src=" + data.data[i].avatar + ">";

            document.querySelector("ul").innerHTML += "<li>" + user + "</li>" 
        }

    })      

.catch(err => (console.log(err)));
}
