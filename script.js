
let notes = [];
let diagramHtml = "";

function addNote() {
    const noteType = document.getElementById("noteType").value;
    const noteInput = document.getElementById("noteInput");
    const newNote = noteInput.value.trim();

    if (newNote) {
        notes.push({ type: noteType, text: newNote });
        noteInput.value = "";
        renderNotes();
    }
}

function renderNotes() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = "";
    diagramHtml = "<h2>Notes Relationship Diagram</h2>";

    notes.forEach((note, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${note.text}
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        noteList.appendChild(listItem);


        if (note.type === "parent") {
            diagramHtml += `<div class="note parent-note">${note.text}</div>`;
        } else {
            diagramHtml += `<div class="note child-note">${note.text}</div>`;
        }
    });

    document.getElementById("diagram").innerHTML = diagramHtml;
}

function deleteNote(index) {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        notes.splice(index, 1);
        renderNotes();
    }
}

renderNotes();
