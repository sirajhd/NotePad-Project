const notepad = document.getElementById('notepad');
const body = document.body;

function clearNote() {
    if (confirm('Are you sure you want to clear the notes?')) {
        notepad.value = '';
    }
}

function saveNote() {
    const text = notepad.value;
    if (text.trim() === '') {
        alert('Note is empty. Write something to save!');
        return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'note.txt';
    a.click();
    URL.revokeObjectURL(url); // Free memory
    alert('Note saved as note.txt');
}

function changeTheme() {
    body.classList.toggle('dark-theme');
}
