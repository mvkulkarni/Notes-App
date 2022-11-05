const addtxt = document.getElementById('addtxt');
const title = document.getElementById('title');
const addnote = document.getElementById('addnote');

showNotes();


//function to add the note to the local storage
const addFunction = ()=>{

    let notesObj;

    const noteString = localStorage.getItem('notes');

    if(noteString){
        notesObj = JSON.parse(noteString);
    }else{
        notesObj = [];
    }


    //create an object
    const date = new Date();
    const now = date.toDateString();

    const note = {
        date : now,
        title : title.value,
        content : addtxt.value
    }

    //pushing it to the notesObj
    notesObj.push(note);

    //saving to the local storage
    localStorage.setItem('notes',JSON.stringify(notesObj));

    addtxt.value = "";
    title.value = "";

    showNotes();

    
}
addnote.addEventListener('click',addFunction);


// show notes
function showNotes(){

    let notesObj;
    let noteString = localStorage.getItem('notes');

    if(noteString){
        notesObj = JSON.parse(noteString);
    }else{
        notesObj = [];
    }

    console.log(notesObj);

    let html = "";

    notesObj.forEach((e,index)=>{

       html+= `
       <div class="card">
       <div class="top">
           <h3>${e.title}</h3>
           <h2>${e.date}</h2>
       </div>
       <div class="mid">
           <p>${e.content}</p>
       </div>
       <button id = ${index} onclick = deleteNote(id) class = 'delete' >Delete</button>
   </div>
       `
   })

   const notebox = document.getElementById('notes-container');

   if(notesObj.length!=0){
    notebox.innerHTML = html;
   }else{
    notebox.innerHTML = `<h1>No notes to show yet</h1>`
   }


    
}

function deleteNote(index){

    let notesObj;
    let noteString = localStorage.getItem('notes');

    if(noteString){
        notesObj = JSON.parse(noteString);
    }else{
        notesObj = [];
    } 
    
    
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


    
    
}

