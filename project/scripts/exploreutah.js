let slctrails = [
    {
        trialName: "Bobsled",
        length: "2.0",
        difficulty: "Advanced",
    },
    {
        trialName: "BST (Bonneville Shoreline)",
        length: "15.0",
        difficulty: "Beginner / Intermediate",
    },
    {
        trialName: "Terror Ridge",
        length: "1.0",
        difficulty: "Advanced",
    },
    {
        trialName: " St. Bike Park",
        length: "2.0",
        difficulty: "All levels",
    },
    {
        trialName: "City Creek Canyon",
        length: "7.0",
        difficulty: "Easy",
    },
    {
        trialName: "The Avenues Trail",
        length: "10.0",
        difficulty: "Moderate",
    }
]

let boutifultrails = [
    {
        trialName: "Mueller Park",
        length: "20.0",
        difficulty: "All Levels",
    },
    {
        trialName: "BST (Bonneville Shoreline)",
        length: "15.0",
        difficulty: "Beginner / Intermediate",
    },
    {
        trialName: "Elephant Descent",
        length: "4.0",
        difficulty: "Advanced",
    },
    {
        trialName: " St. Bike Park",
        length: "2.0",
        difficulty: "All levels",
    },
    {
        trialName: "City Creek Canyon",
        length: "7.0",
        difficulty: "Easy",
    },
    {
        trialName: "Bountiful Trail",
        length: "7.1",
        difficulty: "Moderate",
    }


]


function populatelist(nameoflista, citytrails) {
    citytrails.forEach(trail => {
        let item = document.createElement("li");

        item.innerHTML = `Trial Name: ${trail.trialName}<br>Difficulty: ${trail.difficulty}<br>Lenght: ${trail.length}`;
        item.style.marginTop = "2rem";
        item.style.marginLeft = "6rem"
        item.style.fontSize = "2rem"
        document.getElementById(nameoflista).append(item);
    });

}


populatelist("slctrails", slctrails);
populatelist("boutifultrails", boutifultrails);