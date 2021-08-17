let singleton = {
    name: "Jhon Singleton - English Professoinal ",
    subject: "English",
    role: "Tutor",
    description: "A English Professor who has many accolades in the field is very meticulous with his teaching style",
    color: 'red'
};

let benjamin = {
    name: "Benjamin Bedford - Math Professional",
    subject: "Algebra",
    role: "Tutor",
    description: "aasjdsakjdsahdiahsdiuashdiashdiuashduia",
    color: 'blue'

}

let tutor_list = [singleton, benjamin];

let divider = document.getElementById("mission_body");

for (let i = 0; i < tutor_list.length; i++){
    let new_div = document.createElement("div");
    new_div.classList.add("text");
    let move = tutor_list[i];

    let new_element = document.createElement("ul");
    new_element.style["color"] = move.color;

    let point0 = document.createElement("li");
    point0.innerHTML = "Name: " + move.name;
    new_element.append(point0);

    let point1 = document.createElement("li");
    point1.innerHTML = "Subject: " + move.subject;
    new_element.append(point1);

    let point2 = document.createElement("li");
    point2.innerHTML = "Role: " + move.role;
    new_element.append(point2);

    let point3 = document.createElement("li");
    point3.innerHTML = "Description: " + move.description;
    new_element.append(point3);

    new_div.appendChild(new_element);
    divider.appendChild(new_div);
}