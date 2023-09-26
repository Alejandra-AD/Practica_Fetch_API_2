console.log("vinculado");

addEventListener("DOMContentLoaded", () => {
 fetchData();


}) ;

const fetchData = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        pintarCard(data);


    }

    catch (err) {
        console.log(err);

    }

    // finally {

    //     return


    // }


}



const pintarCard = (data) => {
    console.log(data);
    
    const cardDinamica = document.getElementById("cardDinamica");

    const fragment = document.createDocumentFragment();
    const template = document.getElementById("template-cards").content;
    
   

    data.results.forEach(item => {
        const clone = template.cloneNode(true);
        console.log(item);
        clone.querySelector(".card-title").textContent = item.name;
        clone.querySelector(".especie").textContent = item.species;
        clone.querySelector(".text-secondary ").textContent = item.status;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
        
    });

    cardDinamica.appendChild(fragment);

}
