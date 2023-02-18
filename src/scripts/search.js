async function getUserByName(userName){
    const users = await fetch(`https://api.github.com/users/${userName}`, {
        method: "GET",
        headers: {
                "Content-type": "application/json"
            }
        })
         
        
        .then(response => response.json())

        .then(res => {
            
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res.message)
            
        if (res.message === "Not Found") {
            window.location.replace('/src/pages/error.html')
        } else {
            window.location.replace('/src/pages/profile.html')
        }
    })
    
    return users
}


export async function showProfile() {

    const input = document.querySelector(".input-userName")
    const button = document.querySelector(".search-button")

    button.addEventListener("click", async (event) => {
        event.preventDefault()
        
        getUserByName(input.value)
    })
}