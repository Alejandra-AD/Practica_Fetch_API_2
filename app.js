console.log("vinculado");
addEventListener("DOMContentLoaded", () => {
 fetchData();


}) ;
const fetchData = async () => {
    try {
        const res = await fetch();
        const data = res.json();
        pintarCard(data);


    }

    catch (err) {

    }


    finally {



    }







}
