const fetch_dpi =  fetch('https://api.coingecko.com/api/v3/coins/defipulse-index');
const fetch_mvi = fetch('https://api.coingecko.com/api/v3/coins/metaverse-index');
const fetch_bed = fetch('https://api.coingecko.com/api/v3/coins/bankless-bed-index');
const fetch_eth2xfli = fetch('https://api.coingecko.com/api/v3/coins/eth-2x-flexible-leverage-index');
const fetch_btc2xfli = fetch('https://api.coingecko.com/api/v3/coins/btc-2x-flexible-leverage-index');

Promise.all([fetch_dpi, fetch_mvi, fetch_bed, fetch_eth2xfli, fetch_btc2xfli]).then(values => {
    return Promise.all(values.map(r => r.json()));
    //console.log(values);

}).then(([dpi, mvi, bed, eth2xfli, btc2xfli]) => {
    console.log(dpi);
    console.log(mvi);
    console.log(bed);
    console.log(eth2xfli);
    console.log(btc2xfli);
    var dpicurrentpricenow = Math.fround(dpi.market_data.market_cap.usd);
    var mvicurrentpricenow = Math.fround(mvi.market_data.market_cap.usd);
    var bedcurrentpricenow = Math.fround(bed.market_data.market_cap.usd);
    var eth2xflicurrentpricenow = Math.fround(eth2xfli.market_data.market_cap.usd);
    var btc2xflicurrentpricenow = Math.fround(btc2xfli.market_data.market_cap.usd);



    $(".dpicurrentpricenow").append(dpicurrentpricenow);
    $(".mvicurrentpricenow").append(mvicurrentpricenow);  
    $(".totalvaluelocked").append("$"+ Math.fround(dpicurrentpricenow+mvicurrentpricenow+bedcurrentpricenow+eth2xflicurrentpricenow+btc2xflicurrentpricenow).toLocaleString('en'));



}).catch(error => {console.error(error);

});  



//.then(response => response.json(), response1 => response1.json(),)
//.then(data => {
//  console.log(data) // Prints result from `response.json()` in getRequest

//  var currentpricenow = "$"+data.market_data.current_price.usd;
//  var pricechange = data.market_data.price_change_percentage_24h.toFixed(2)+"%";
//  var marketcap = "$"+ Math.fround(data.market_data.market_cap.usd/1000000).toFixed(2)+"M";
//  var volume = Math.fround(data.market_data.total_volume.usd/1000000).toFixed(2)+"M";
//  var currentsupply = Math.floor(data.market_data.circulating_supply).toLocaleString('en');



//  $(".currentpricenow").append(currentpricenow);
//  $(".pricechange").append(pricechange);
//  $(".marketcap").append(marketcap);
//  $(".volume").append(volume);
//  $(".currentsupply").append(currentsupply);



//})
//.catch(error => console.error(error))