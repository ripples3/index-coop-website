$.getJSON(
    "https://api.coingecko.com/api/v3/coins/defipulse-index",
    function(data) {
        console.log(data);

        var currentprice = data.market_data.current_price.usd;



        $(".currentprice").append(currentprice)
      
    
        

    }   


);