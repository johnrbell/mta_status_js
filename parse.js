exports.addCacheInfo = trains => {
	// console.log(trains)
	trainObj = {}
	trainObj.trains = trains
	trainObj.cacheTime = new Date
	console.log(trainObj)
}
