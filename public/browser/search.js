function Search(board,startNode,currentAlgorithm){
  this.currentAlgorithm = currentAlgorithm
  this.board = board
  this.startNode = startNode
}

Search.prototype.startSearch = function(){
  console.log('inside startSearch')
  var startNode = this.startNode 
  console.log(startNode)
  // var endNode = this.endNode 
  var converted = this.modifiedBoard
  switch(this.currentAlgorithm){
    case 'Dijkstra':
    case 'AStar':
    case 'BFS':
      var exploredList = this.searchBFS()
      this.showAnimation(exploredList)
    case 'DFS':
      console.log("case dfs")
      // var exploredList = this.searchDFS()
      // this.showAnimation(exploredList)
  }
}

Search.prototype.getNeighbours = function(arr,node){
  //NEED TO REFACTOR// 
	var neighbourList = []
	//Get Neighbour Up 
	if(node.y>0){
		neighbourList.push(arr[node.y-1][node.x])
	}
	//Get Neighbour Right 
	if(node.x<arr[0].length-1){
		neighbourList.push(arr[node.y][node.x+1])
	}
	//Get Neighbour Down 
	if(node.y<arr.length-1){
		neighbourList.push(arr[node.y+1][node.x])
	}
	//Get Neighbour Left
	if(node.x>0){
		neighbourList.push(arr[node.y][node.x-1])
	}
	return neighbourList
}

Search.prototype.searchDFS = function(){
  console.log("DFS CALLED")
  var exploredList = []
	var listToExplore = [this.startNode]
	var isPresent = function(node){
		var returnVal = false
		for(var i=0;i<exploredList.length;i++){
			if(exploredList[i].id === node.id){
				returnVal = true
			}
		}
		return returnVal
	}
	while(listToExplore.length !==0){
		var currentNode = listToExplore[0]
		if(!isPresent(currentNode)){
			var neighbours = this.getNeighbours(this.board,currentNode)
			listToExplore = listToExplore.slice(1)
			listToExplore = neighbours.concat(listToExplore)
			exploredList.push(currentNode)
		}
		else{
			listToExplore = listToExplore.slice(1)
		}
	}
	return exploredList
	
}

Search.prototype.searchBFS = function(){
  var exploredList = []
	var listToExplore = [this.startNode]
	var isPresent = function(node){
		var returnVal = false
		for(var i=0;i<exploredList.length;i++){
			if(exploredList[i].id === node.id){
				returnVal = true
			}
		}
		return returnVal
	}
	while(listToExplore.length !==0){
		var currentNode = listToExplore[0]
		if(!isPresent(currentNode)){
			var neighbours = this.getNeighbours(this.board,currentNode)
			listToExplore = listToExplore.slice(1)
			listToExplore = listToExplore.concat(neighbours)
			exploredList.push(currentNode)
		}
		else{
			listToExplore = listToExplore.slice(1)
		}
	}
	return exploredList
	
}

Search.prototype.searchDijkstra = function(){
  //
}
Search.prototype.searchAStar = function(){
  //
}

Search.prototype.showAnimation = function(exploredList){
  // console.log('exploredList')
  // console.log(exploredList.length)
  function timeout(index) {
    setTimeout(function () {
        if(index === exploredList.length){
          return
        }
        change(exploredList[index])
        timeout(index+1);
    }, 100);
  }
  function change(node){
    // console.log('before change',node)
    var elem = document.getElementById(node.id)
    node.status = 'explored'
    elem.className = 'explored'
    // console.log('after change',node)
  }
  timeout(0)
}


Module.exports = Search