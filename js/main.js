/* returns the biggest and second biggest numbers of an array */
function biggest(array){
	
	biggest = array[0];
	second = array[1];
	len = array.length;
	i = 2;
	
	if ( len < 2 ) return null;
  else if (biggest<second){
		second = biggest;
		biggest = second;
	}
	
	for (; i < len; i++) {
		if (array[i] > biggest ) {
			second = biggest;
			biggest = array[i];
		}else if ( array[i] > second ) {
		  second = array[i];
		}
	}

	return biggest + ' ' + second;
}

/* returns the maximum value of an array */
function maxValue(array){
	max = array[0];
	len = array.length;
	
	if (!Array.isArray(array) ) return null;
	
	if ( len == 0 ) return 'empty';
	else if ( len < 2 ) return max;
	
	for ( var i=0; i < len; i++ ){
		if ( array[i] > max ) max = array[i];
	}
	return max;
}

/* summarise the numbers of an array */
function sum(array){
	len = array.length;
	sum = 0;
	
	if (!Array.isArray(array)) return null;
	else if (len == 0) return 'empty';
	
	for (var i=0; i<len; i++){
		sum+= array[i];
	}
	
	return sum;
}

/* returns odd or even if it fulfils the criteria */
function oddEven(n){
	if ( typeof(n) != 'number') return null;
	
	if ( n % 2 == 0 ) return 'even';
	else return 'odd';
}

/* summarise the zeros of an array */
function zero(array){
	len = array.length;
	sum = 0;
	if (len < 2 ) return null;
	
	for (var i=0; i < len; i++){
		if (array[i] == 0){
		  sum++;
		}
	}
	return sum;
}

/* random number generator between 1 and n */
function random(n){
	if (typeof(n)!= 'number') return null;
	
	return Math.floor((Math.random() * n) + 1);
}

/* palindrom */
function palindrom(str){
	len = str.length;
	if (len < 3 && typeof(str) == 'string') return null;
  else if (str == str.split(' ').reverse().join(' ')) return true;
}

/* check if the person's age is over than 18 */
function isAdult(array){
	len = array.length;
  sum = 0;
	
   if (!Array.isArray(array)) return null;
   
   array.filter( (i,v) => {
		 if (i >= 18){
			 sum++;
			 console.log('age: ', i, ' index: ', v);
		 }
	 });
	  console.log(sum + " ppl are older than 18!");
}