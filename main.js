console.log('main.js has loaded');
var output= document.getElementById('output');
var divContent;
var blogLoad= new XMLHttpRequest();
var btnDelete= document.getElementsByClassName('delete');

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
		divContent= "<div>"+
		"<h2>"+'Title :' +blog.title+"</h2>"+
					"<span>"+ 'Date :'+blog.date+"</span>"+
					"<span>"+ 'Author: '+ blog.author+"</span>"+
					"<br>"+
					"<span>"+ blog.entry+ "</span>"+
					"<p>"+ blog.keywords+"</p>"+"</div>";
		output.innerHTML+= divContent + "<button class='delete'>Delete</button";
		deleteBlogPost();
	}
}
blogLoad.open('GET', "blog.json");
blogLoad.send();


function deleteBlogPost(event){
	for (var i=0; i<btnDelete.length; i ++){
		btnDelete[i].addEventListener('click', function(){
			output.removeChild(event.target.closest('div'));
		});
	}
}