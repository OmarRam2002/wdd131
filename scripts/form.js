document.getElementById("lastmodified").innerHTML = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productos = document.getElementById("product");

products.forEach(product => {
    label = document.createElement("label");
    opcion = document.createElement("option");
    opcion.text = product.name.toUpperCase();
    opcion.value = product.id;
    label.append(opcion);
    productos.append(label)
});