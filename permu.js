var x = ['a','b','c','d','e','f'],
	possiblePermutation = [];

x.forEach(function(elmt){
	possiblePermutation.push(elmt)
	var rest = x.slice( x.indexOf(elmt) + 1);
	myPermutationGeneration(elmt,rest)
})
function myPermutationGeneration(current,rest){	
	rest.forEach( function( restEle ){
		possiblePermutation.push( current + restEle )
		var rest2 = x.slice( x.indexOf(restEle) + 1);
		myPermutationGeneration( current + restEle, rest2)
	})
}
console.log( possiblePermutation )



