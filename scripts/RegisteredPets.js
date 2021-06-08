import { getPets } from "./database.js"
import { getWalkers} from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener("click",
    (event) => {
        if (event.target.id.startsWith("pet")) {

            const [, petId] = event.target.id.split("--")

            const clickedPet = pets.find( (pet) => pet.id === parseInt(petId))
            const findWalker = walkers.find( (walker) => walker.id === clickedPet.walkerId)
            
            window.alert(`${clickedPet.name} is being walked by ${findWalker.name}`)
        }
        

    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

