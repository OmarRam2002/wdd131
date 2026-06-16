let slctrails = [
    {
        trialName: "Bobsled",
        length: "2.0 miles",
        difficulty: "Advanced",
    },
    {
        trialName: "BST (Bonneville Shoreline)",
        length: "15.0 miles",
        difficulty: "Beginner / Intermediate",
    },
    {
        trialName: "Terror Ridge",
        length: "1.0 miles",
        difficulty: "Advanced",
    },
    {
        trialName: " St. Bike Park",
        length: "2.0 miles",
        difficulty: "All levels",
    },
    {
        trialName: "City Creek Canyon",
        length: "7.0 miles",
        difficulty: "Easy",
    },
    {
        trialName: "The Avenues Trail",
        length: "10.0 miles",
        difficulty: "Moderate",
    }


]


slctrails.forEach(trail => {
    let item = document.createElement("li");

    item.innerHTML = `Trial Name: ${trail.trialName}<br>Difficulty: ${trail.difficulty}<br>Lenght: ${trail.length}`;
    item.style.marginTop = "2rem";
    item.style.marginLeft = "6rem"
    item.style.fontSize = "1.4rem"
    document.getElementById("slctrails").append(item);
});