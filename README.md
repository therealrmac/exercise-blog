# C19 html blog exercise version 2

### Instructions
1. Click the various links to take you through the blog entrys
2. you can add an entry yourself and see it displayed back on the list view link.
3. you can also delete each post individually.

#### Requirements

##### Part One

1. In the navigation bar, make sure you have two links labeled "Blog List", and "Add Blog Entry".
2. Add a DOM element that contains input fields for the user to create a title, date, author, blog entry and keywords. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
3. Add a <button> element at the bottom of the input fields labeled "Add".
4. The input fields and the add button make up the  Add Blog Entry View.
5. The existing view - all the blog entries - will be referred to as the Blog List View.
6. The Add Blog Entry View should not appear when the user first visits your page. Only the blog list should be visible.
7. When the user clicks on "Add Blog Entry" in the navigation bar, the Blog List View should be hidden, and the Add Blog Entry View should be shown (see example wireframe).
8. When the user clicks on "Blog List" in the navigation bar, the Add Blog Entry View should be hidden, and the Blog List View should be shown (see example wireframe).
9. Once the user fills out the blog entry form and clicks the add button, you should collect the values from the input fields, add the blog post to the array of blog objects, and update the blog list in the DOM.

##### Part Two

Create a JSON file for your blog entries.
Read from local JSON file with an XHR.
Loop over results and inject into Blog List View.
Add delete button to each blog entry and, when it is clicked, delete the entire entry in the DOM.