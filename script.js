//your JS code here. If required.
function firstNonRepeatedChar(str){
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))) {
			return str.charAt(i);
		
		}
		
	}
}




const str = prompt("Enter a string:");
const result = firstNonRepeatedChar(str);
console.log(result);