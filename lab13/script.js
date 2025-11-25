let students = [];
let studentInfo = new Map();

function addStudent() {
    let name = document.getElementById("nameInput").value.trim();
    if (!name) return alert("Введите имя!");

    students.push(name);
    studentInfo.set(name, { created: new Date().toLocaleString() });

    render();
}

function searchStudent() {
    let name = document.getElementById("searchInput").value.trim();
    if (!name) return alert("Введите имя!");

    if (students.includes(name)) {
        alert(`Студент найден! Добавлен: ${studentInfo.get(name).created}`);
    } else {
        alert("Студент не найден.");
    }
}

function sortStudents() {
    students.sort();
    render();
}

function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach(name => {
        list.innerHTML += `
            <div>${name}
                <button onclick="deleteStudent('${name}')">Удалить</button>
            </div>`;
    });
}

function deleteStudent(name) {
    students = students.filter(s => s !== name);
    studentInfo.delete(name);
    render();
}

render();
