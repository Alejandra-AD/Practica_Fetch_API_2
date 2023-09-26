console.log("vinculado");
addEventListener("DOMContentLoaded", () => {
 fetchData();


}) ;
const fetchData = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = res.json();
        pintarCard(data);


    }

    catch (err) {
        console.log(err);

    }

    finally {

        return


    }


}



const pintarCard = (data) => {

    const fragment = createDocumentFragment();
    const template = document.getElementById("template-cards");
    const clone = template.cloneNode(true);

    data.forEach(item => {
        clone.querySelector().textContent = item.
        
    });





}
