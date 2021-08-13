$.getJSON(
    "https://api.coingecko.com/api/v3/coins/defipulse-index",
    function(data) {
        console.log(data);

        var currentprice = "$"+data.market_data.current_price.usd;
        var pricechange = data.market_data.price_change_percentage_24h+"%";
        var marketcap = "$"+data.market_data.market_cap.usd;
        var volume = data.market_data.total_volume.usd;
        var currentsupply = data.market_data.circulating_supply.usd;



        $(".currentprice").append(currentprice);
        $(".pricechange").append(pricechange);
        $(".marketcap").append(marketcap);
        $(".volume").append(volume);
        $(".currentsupply").append(currentsupply);

        

    }   


);