//your code here!
const list = document.getElementById("infi-list")

for(let i=1;i<=10;i++){
	const li = document.createElement("li")
	li.textContent = `Item ${i}`
	list.appendChild("li")
}

window.addEventListener("scroll",()=>{
	if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
		const currentItems = list.children.length

		for(let i=1;i<=2;i++){
			const li = document.createElement("li")
			li.textcontent = `Item ${currentItems+i}`
			li.appendChild("li")
		}
	}
})