function renderUserProfile() {
    const user = JSON.parse(localStorage.getItem("user"))
    const containerUser = document.querySelector(".container-user")

    const avatar = document.createElement("img")
    const userName = document.createElement("h2")

    avatar.setAttribute("class", "avatar")

    avatar.src = user.avatar_url
    userName.innerText = user.name

    containerUser.append(avatar, userName)

    fetch(user.repos_url)
    .then(response => response.json())

    .then(resp => {
        resp.forEach(repos => {
            const ulRepos = document.querySelector(".ul-repos")

            const cardRepos = document.createElement('li')
            const reposName = document.createElement('h2')
            const reposDescription = document.createElement('p')
            const reposLink = document.createElement('a')
            
            reposName.innerText = repos.name
            reposDescription.innerText = repos.description
            reposLink.innerText = 'Repositório'
            reposLink.href = repos.html_url
            reposLink.target = '_blank'
            
            console.log(reposDescription)
            reposLink.addEventListener('click', () => {
                window.open(reposLink.href)
            })
    
            cardRepos.append(reposName, reposDescription, reposLink)
            ulRepos.appendChild(cardRepos)
            
        })
})
}
renderUserProfile()