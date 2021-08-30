fetch('https://api.coingecko.com/api/v3/coins/index-cooperative')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
  var currentpricenow = "$"+data.market_data.current_price.usd;
  var pricechange = data.market_data.price_change_percentage_24h;
  var marketcap = "$"+ Math.fround(data.market_data.market_cap.usd/1000000).toFixed(2)+"M";
  var volume = Math.fround(data.market_data.total_volume.usd/1000000).toFixed(2)+"M";
  var currentsupply = Math.floor(data.market_data.circulating_supply).toLocaleString('en');



  $(".currentpricenow").append(currentpricenow);
 // $(".pricechange").append(pricechange);
  $(".marketcap").append(marketcap);
  $(".volume").append(volume);
  $(".currentsupply").append(currentsupply);

  if (pricechange >= 0) {
    $(".pricechange").append((pricechange).toFixed(2)+"%");
    $(".pricechange").css({'color':'#0eaa74'});
 }
 else {
    $(".pricechange").append((pricechange).toFixed(2)+"%");
    $(".pricechange").css({'color':'red'});
 }



})
.catch(error => console.error(error))