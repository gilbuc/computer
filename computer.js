data.forEach(toolbox => {
	let tb = document.createElement("div");
	tb.setAttribute("class", "toolbox");
	let tb_title = document.createElement("div");
	tb_title.setAttribute("class", "title");
	tb_title.appendChild(document.createTextNode(toolbox.title));
	tb.appendChild(tb_title);
	console.log(toolbox.toolblocks);

	toolbox.toolblocks.forEach(toolblock => {
		// Toolblock-Title
		let tblk = document.createElement("div");
		tblk.setAttribute("class", "toolblock");

		let tblk_title = document.createElement("div");
		tblk_title.setAttribute("class", "toolblock-title");
		if (toolblock.url){
			let tlbk_a = document.createElement("a");
			tlbk_a.appendChild(document.createTextNode(toolblock.title));
			tlbk_a.setAttribute("href", toolblock.url);
			tlbk_a.setAttribute("target", "_blank");
			tblk_title.appendChild(tlbk_a);
		}else{
			tblk_title.appendChild(document.createTextNode(toolblock.title));
		}
		tblk.appendChild(tblk_title);
		console.log(toolblock.entries);
		if (toolblock.entries.length > 0) {
			// Toolblock-Entries
			let ul = document.createElement("ul");
			ul.setAttribute("class", "toolblock")

			let colorNr = 1;
			toolblock.entries.forEach(entry => {
				let li = document.createElement("li");
				li.setAttribute("class", "color" + colorNr);
				colorNr < 4 ? colorNr++ : colorNr = 1;
				let a = document.createElement("a");
				let text = document.createTextNode(entry.title)
				a.appendChild(text);
				a.setAttribute("href", entry.url);
				a.setAttribute("target", "_blank");
				console.log(li);
				li.appendChild(a);
				ul.appendChild(li)
			});
			tblk.appendChild(ul);
		}
		tb.appendChild(tblk);
	});

	document.getElementById("app").appendChild(tb);
});