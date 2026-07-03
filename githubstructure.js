const container = document.querySelector(".name");
console.log(container);
const image = document.querySelector(".photo");
const content = document.querySelector(".content");
const scorecard = document.querySelector(".scorecard");
console.log(scorecard);

const fetchdata = async (username) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
console.log(response);
        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        container.innerHTML = `
            <h1>${data.name}</h1>    
           <h3>${data.bio || "No bio available"}</h3> 

           
           `;
             
            console.log(container);
            image.innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture" class="photo">
              `;
            // <p>${data.bio}</p>
   
            
            

           
           
          content.innerHTML = ` <p>Location: ${data.location}</p>
          <p >GitHub Link:
    
            <a href="${data.html_url}" target="_blank">View Profile</a> </p>`;

           console.log(content);


            scorecard.innerHTML = `
            
           <p>Repositories:${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>`;
            
       
    }
     catch (error) {
        console.log(error);
        container.innerHTML = "<h2>User not found</h2>";
         image.innerHTML = "";
        //content data will be cleared only when the user clicks the search button without entering a username
        content.innerHTML = "";
        scorecard.innerHTML = "";
        return;

    }
};

document.querySelector(".searchbtn").addEventListener("click", () => {
    const username = document.querySelector(".searchinput").value.trim();

    if (username) {
        fetchdata(username);
    }


    if(username === "") {
        container.innerHTML = "<h2>Please enter  username</h2>";
        //clear the previous data
        image.innerHTML = "";
        //content data will be cleared only when the user clicks the search button without entering a username
        content.innerHTML = "";
        scorecard.innerHTML = "";
        
       
       
    }
});