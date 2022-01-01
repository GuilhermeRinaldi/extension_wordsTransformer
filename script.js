function write(text) {
	document.getElementById("inputText").value = text;
}

function upperFirst(text, number) {

	let cutedText = text.split(" ");

	if (number === 0){
		length = cutedText.length;
	}else {
		length = number;
	}

	for (var i = length - 1; i >= 0; i--) {
		const word = cutedText[i];
		// let letterPosition = 0;
		// while (word[letterPosition] === "\n" || " ") {
		// 	letterPosition += 1;
		// }
		cutedText[i] = word.replace(word[0], word[0].toUpperCase());
	}
	return cutedText.join(" ")
}

function shake() {
	document.getElementById("inputText").classList.add("shake");
	setTimeout(function(){document.getElementById("inputText").classList.remove("shake")}, 200);
}

document.querySelectorAll("button").forEach( function(button) {
    button.addEventListener("click", function(event) {

   if (!!document.getElementById("inputText")){
    	const inputText = document.getElementById("inputText").value;	
    	if (inputText === "") {
    	    shake();
        }
	    const button = event.target;
	    const id = button.id;

	    try {
		    if (id === "upper") {
				write(inputText.toUpperCase());
			}
			if (id === "lower") {
				write(inputText.toLowerCase());
			}
			if (id === "first") {
				write(upperFirst(inputText, 1));
			}
			if (id === "capitalized") {
				write(upperFirst(inputText, 0));
			}
			if (id === "clear") {
				write("");
			}
			if (id === "copy") {
				navigator.clipboard.writeText(inputText);
			}
		}
	    catch{
	    	shake();
	    }
	}
	if (id === "copyLorem") {
		const quantity = document.getElementById("quantity").value
		const select = document.getElementById("select").value;
		console.log(quantity);
		console.log(select);
		navigator.clipboard.writeText(select);
	}

  });
});




