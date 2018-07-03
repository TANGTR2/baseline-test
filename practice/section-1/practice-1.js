'use strict';

function collectSameElements(collectionA, collectionB) {
  for(var i=0;i<collectionA.length;i++){
		    for(var j=0;j<collectionB.length;j++){
		      if(collectionA[i]==collectionB[j])
		        document.write(collectionA[i] + "<br>");
		      else continue;
		    }
	}
  return '实现练习要求，并改写该行代码。';
}
