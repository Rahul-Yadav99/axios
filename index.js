window.onload = async function(){
    try {
        var response = await axios.get("https://fakestoreapi.com/products");
        var data = response.data;
        var productSection = document.getElementById("product-section");
        for(i=0; i<data.length; i++){
           var items = data[i];
           productSection.style.transition = '0.4s';
            var card = `
                <div id="card" class="bg-[#252525] h-[492px] w-[300px] flex flex-col gap-3 items-center justify-center pt-3 ">
                <h1 class="text-lg font-semibold text-white">${items.category}</h1>
                <img src="${items.image}" alt="" class="h-[280px] w-[210px]">
                <div class="w-full space-y-3 px-2">
                    <p class="text-white font-semibold">${items.title}</p>
                    <h1 class="text-white font-semibold">⭐${items.rating.rate}</h1>
                    <h1 class="text-white font-semibold">$${items.price}</h1>
                </div>
                <button class="bg-white w-full py-2 font-semibold">Buy Now</button>
            </div>
            `;
            productSection.innerHTML += card;
        }
    } catch (error) {
        console.log(error);
    }    
}