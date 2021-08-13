$.getJSON(
    "https://api.coingecko.com/api/v3/coins/defipulse-index",
    function(data) {
        console.log(data);

        var currentpricenow = "$"+data.market_data.current_price.usd;
        var pricechange = data.market_data.price_change_percentage_24h.toFixed(2)+"%";
        var marketcap = "$"+ Math.fround(data.market_data.market_cap.usd/1000000).toFixed(2)+"M";
        var volume = Math.fround(data.market_data.total_volume.usd/1000000).toFixed(2)+"M";
        var currentsupply = Math.floor(data.market_data.circulating_supply).toLocaleString('en');



        $(".currentpricenow").append(currentpricenow);
        $(".pricechange").append(pricechange);
        $(".marketcap").append(marketcap);
        $(".volume").append(volume);
        $(".currentsupply").append(currentsupply);

        

    }   


);