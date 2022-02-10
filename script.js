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
		cutedText[i] = word.replace(word[0], word[0].toUpperCase());
	}
	return cutedText.join(" ");
}

const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis laoreet nisl et porttitor. Sed in nisi at ipsum suscipit fermentum vitae venenatis augue. Proin ultrices faucibus erat vitae semper. Donec vitae nisi urna. Nam sagittis vel orci eleifend posuere. Aliquam eu consequat nisi. Curabitur ac facilisis metus, quis venenatis sapien. Donec orci dui, fermentum quis metus eget, dapibus scelerisque metus. Quisque feugiat et augue ut feugiat. Sed sollicitudin ullamcorper sem id mollis. Praesent vitae augue a ligula egestas efficitur. Aenean tempor dictum sodales. Donec vel magna placerat, fermentum justo viverra, venenatis ligula. Integer ac risus ut massa vehicula dignissim nec in quam. Nulla iaculis hendrerit velit, a interdum felis suscipit at. Etiam sodales pretium sem. \n";

function loremGenerator(type,number) {
	if (type === "paragraphs") {
		return loremText.repeat(number);
	}
	if (type === "setences") {
		return loremText.repeat(7).split(".",number).join(".");
	}
	if (type === "words") {
		return loremText.split(" ",number).join(" ");
	}
}

function shake(id) {
	document.getElementById(id).classList.add("shake");
	setTimeout(function(){document.getElementById(id).classList.remove("shake")}, 200);
}

document.querySelectorAll("button").forEach( function(button) {
    button.addEventListener("click", function(event) {

    	const button = event.target;
	    const id = button.id;
	    try {
			if (id === "copyLorem") {
				const quantity = document.getElementById("quantity").value;
				const select = document.getElementById("select").value;
				if (quantity <= 0 | quantity >= 100) {
					shake("quantity");
				}else {
					navigator.clipboard.writeText(loremGenerator(select, quantity));
				}
				
			}
	    }
	    catch {
	    	shake("quantity");
	    }

	   if (!!document.getElementById("inputText")){
	    	const inputText = document.getElementById("inputText").value.trim();	
	    	if (inputText === "") {
	    	    shake("inputText");
	        }

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
		    	shake("inputText");
		    }
		}
  	});
});
