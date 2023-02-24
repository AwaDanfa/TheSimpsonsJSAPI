const dataOutput = document.querySelector('#dataOutput')

// Asynchronous Function to fetch the data
async function getData() {
    // Await the response from the API
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=20")
    // We wait on the response and convert it to JSON upon receiving it
    const apiData = await response.json()
    // Once received we return the API data to work with it
    return (apiData)
}

// Add EventListenter to wait for the page load before fetching data
document.addEventListener("DOMContentLoaded", async () => {
    // Declare an empty array to store the API data
    let apiData = []

    // Try catch to catch an error if the fetch request is unsuccessful
    try {
        // If no error, data response stored in apiData array
        apiData = await getData()
    } catch (error) {
        console.log(error)
    }

    // We now have our API data to work with
    // Logged to the console to see how it is structured
    console.log(apiData)

    for (let { character, image, quote } of apiData) {

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('imageContainer')

        const characterName = document.createElement('h2')
        characterName.classList.add('characterName')
        characterName.innerText = `${character}`
        cardContainer.append(characterName)

        const characterQuote = document.createElement('p')
        characterQuote.classList.add('characterQuote')
        characterQuote.innerText = `${quote}`
        cardContainer.append(characterQuote) 


        cardContainer.append(imageContainer)
        const characterImage = document.createElement('img')
        characterImage.setAttribute('src', image)
        imageContainer.append(characterImage)

        
        dataOutput.append(cardContainer)
    }
})