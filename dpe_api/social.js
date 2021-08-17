const twitter_follower =  fetch('https://api.coingecko.com/api/v3/coins/index-cooperative');
const discord_member = fetch('https://api.coingecko.com/api/v3/coins/metaverse-index');


Promise.all([twitter_follower, discord_member]).then(values => {
    return Promise.all(values.map(r => r.json()));
    //console.log(values);

}).then(([twitter_follower, discord_member]) => {
    console.log(twitter_follower);
    console.log(discord_member);
    var twitter_follower = Math.fround(twitter_follower.community_data.twitter_followers/1000)//.toFixed(2)+ "K";
    var discord_member = Math.fround(discord_member.market_data.market_cap.usd);


   $(".twitter_follower").append((twitter_follower).toFixed(2)+ "K");


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