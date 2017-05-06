console.log('main.js has loaded');
var output= document.getElementById('output');
var divContent;
var blogLoad= new XMLHttpRequest();
var btnDelete= document.getElementsByClassName('delete');
var input= document.getElementById('input')
var blogBtn= document.getElementById('enter');
var addTitle= document.getElementById('title');
var addDate= document.getElementById('date');
var addAuthor= document.getElementById('author');
var addEntry= document.getElementById('blogEntry');
var addKeywords= document.getElementById('key');
blogLoad.addEventListener('load', blogLoadWin);
blogLoad.addEventListener('error', blogLoadError);

function blogLoadWin(event){
	console.log(' blogLoad has loaded');
	var blog= JSON.parse(event.target.responseText);

	showBlog(blog);
	
}
function blogLoadError(){
	console.log('An error has occured');
}

function showBlog(event){
	var xObj= event.blog;
	console.log(event);
	for (var i=0; i< xObj.length; i++){
		var blog= xObj[i]
		divContent= "<div class='textfield'>"+
		"<h2>"+'Title: ' +blog.title+"</h2>"+
					"<span>"+ 'Date: '+blog.date+"</span>"+" "+
					"<span>"+ 'Author: '+ blog.author+"</span>"+
					"<br>"+
					"<span>"+ blog.entry+ "</span>"+
					"<p>"+ blog.keywords+"</p>"+
					"<button class='delete'>Delete</button" +"</div>";
		output.innerHTML+= divContent ;
		// deleteBlogPost();
	}
}
blogLoad.open('GET', "blog.json");
blogLoad.send();


output.addEventListener('click', function(event){
	if(event.target.tagName== "BUTTON" && event.target.innerHTML== "Delete"){
		getButton= event.target.closest('div')
		output.removeChild(getButton);
	}
});
function newArr(title, date, author, entry, keywords){
	this.title= title;
	this.date= date;
	this.author= author;
	this.entry= entry;
	this.keywords= keywords;
}
blogBtn.addEventListener('click', function(event){
	var newBlog= new newArr(addTitle.value, addDate.value, addAuthor.value, addEntry.value, addKeywords.value);
	output.innerHTML += "<div class='textfield'>" + 
			"<h2>"+'Title: ' +newBlog.title+"</h2>"+
					"<span>"+ 'Date: '+newBlog.date+"</span>"+" "+
					"<span>"+ 'Author: '+ newBlog.author+"</span>"+
					"<br>"+
					"<span>"+ newBlog.entry+ "</span>"+
					"<p>"+ newBlog.keywords+"</p>"+
					"<button class='delete'>Delete</button" +"</div>";
	addTitle.value="";
	addDate.value="";
	addAuthor.value="";
	addEntry.value="";
	addKeywords.value="";
});










