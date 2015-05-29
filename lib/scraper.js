var request = require('request')
var cheerio = require('cheerio');		
var urls = [];

//check ithub for request
var path = "http://www.oncf.ma/Pages/ResultatsHoraire.aspx?depart=MEKNES&arrivee=CASA%20VOYAGEURS&CodeRD=0093&CodeGD=00363&CodeRA=0093&CodeGA=00200&heure=0000&date=27/05/2015"
//var path = "http://reddit.com";
request(path, function(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		$('td').each(function(){
			//var url = $(this).attr('href');
			var url = $(this).text();
			urls.push(url);
		});
		console.log(urls);	
	}
});	

