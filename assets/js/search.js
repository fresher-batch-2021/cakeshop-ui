const filter=document.getElementById("filter");
const search=document.getElementById("search");

const listItems = []
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    
    CakeService.getCakes().then(res => {
        const data = res.data.rows;
        const cakes = data.map(obj => obj.doc);

    // Clear result
    result.innerHTML = ''

    cakes.forEach(cake => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <div class="searchContainer">
        <p>${cake.flavours}</p>
        <img src="images/${cake.imageUrl}" alt="img">
        <div>
        `;
        result.appendChild(li)
    });
}


function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

