const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const domain = 'play.flightsmp.com'; // Replace with the actual domain name or IP address of the Minecraft server you want to check
const url = `https://api.mcsrvstat.us/2/${domain}`;
let statMsg = document.getElementById("status-message");
let statusCircle = document.querySelector(".status-circle")

//Get the status and decode the JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    let status = data;
    if (data.online) {
        statusCircle.classList.add("online");
        statMsg.innerHTML = "The server is online"
    } else {
        statusCircle.classList.add("offline");
        statMsg.innerHTML = "The server is offline"
    }
    //Show the version
    console.log(status.version);
    //Show a list of players
    const players = document.getElementById('players');
    for (const player of status.players.list) {
      const li = document.createElement('li');
      li.textContent = player;
      players.appendChild(li);
    }
  })
  .catch(error => console.error(error));

function openMessage() {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
    
      // Set the value of the textarea to the text you want to copy
      textarea.value = text;
  
      // Append the textarea to the document
      document.body.appendChild(textarea);
  
      // Select the text in the textarea
      textarea.select();
      
      // Execute the copy command
      document.execCommand('copy');
  
      // Remove the temporary textarea
      document.body.removeChild(textarea);
  
      // Optionally, provide feedback to the user
      alert('Text copied to clipboard: ' + text);
};

function discord() {
  window.open("https://discord.gg/flightsmp");
};