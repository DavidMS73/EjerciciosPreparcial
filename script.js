const dataDir = "data.json";

function borrarFila(row2Delete) {
  // Otra forma de hacerlo
  //let nodo = document.getElementById(`${row2Delete}`);
  //if (nodo.parentNode) {
  //  nodo.parentNode.removeChild(nodo);
  //}
  let i = row2Delete.parentNode.parentNode.rowIndex;
  document.getElementById("punto1").deleteRow(i - 1);
}

function editarFila(row2Edit) {
  let i = row2Edit.parentNode.parentNode.rowIndex;
  row = document.getElementById("punto1").rows[i - 1];
  for (i = 0; i < 3; i++) {
    row.cells[i].contentEditable = "true";
  }
}

function punto1(dataList) {
  let table1 = document.getElementById("punto1");
  dataList.forEach((element, index) => {
    let row = document.createElement("tr");
    //row.setAttribute("id", `${index}`);

    let lastName = document.createElement("td");
    let node1 = document.createTextNode(`${element.last_lane}`);
    lastName.appendChild(node1);

    let firstName = document.createElement("td");
    let node2 = document.createTextNode(`${element.first_name}`);
    firstName.appendChild(node2);

    let email = document.createElement("td");
    let node3 = document.createTextNode(`${element.email}`);
    email.appendChild(node3);

    let photo = document.createElement("td");
    let img = document.createElement("img");
    img.src = `${element.photo}`;
    photo.appendChild(img);

    let deleteRow = document.createElement("td");
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.innerHTML = "Eliminar fila";
    btn.onclick = function () {
      borrarFila(this);
    };

    let btn2 = document.createElement("button");
    btn2.className = "btn btn-primary";
    btn2.innerHTML = "Editar fila";
    btn2.onclick = function () {
      editarFila(this);
    };

    deleteRow.appendChild(btn);
    deleteRow.appendChild(btn2);

    row.appendChild(lastName);
    row.appendChild(firstName);
    row.appendChild(email);
    row.appendChild(photo);
    row.appendChild(deleteRow);

    table1.appendChild(row);
  });
}

function sort1(a, b) {
  a = a.last_lane;
  b = b.last_lane;
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}

function sort2(a, b) {
  a = a.first_name;
  b = b.first_name;
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}

function sort3(a, b) {
  a = a.email;
  b = b.email;
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}

function sort4(a, b) {
  a = a.photo;
  b = b.photo;
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}

function organizeData(dataList, sort) {
  dataList.sort(sort);
  let table1 = document.getElementById("punto1");
  while (table1.firstChild) {
    table1.removeChild(table1.firstChild);
  }
  punto1(dataList);
}

function punto2(dataList) {
  document.getElementById("tHLN").addEventListener("click", function alertar() {
    organizeData(dataList, sort1);
  });
  document.getElementById("tHFN").addEventListener("click", function alertar() {
    organizeData(dataList, sort2);
  });
  document
    .getElementById("tHEmail")
    .addEventListener("click", function alertar() {
      organizeData(dataList, sort3);
    });
  document
    .getElementById("tHPhoto")
    .addEventListener("click", function alertar() {
      organizeData(dataList, sort4);
    });
}

function punto7() {
  let boton = document.getElementById("deleteAll");
  boton.addEventListener("click", function alertar() {
    let table1 = document.getElementById("punto1");
    while (table1.firstChild) {
      table1.removeChild(table1.firstChild);
    }
  });
  let modalBorrar = document.getElementById("modalBorrar");
  modalBorrar.setAttribute("data-dismiss", "modal");
}

function addRow() {
  let table = document.getElementById("punto1");
  var row = table.insertRow(-1);
  var ln = row.insertCell(0);
  var fn = row.insertCell(1);
  var email = row.insertCell(2);

  var photo = row.insertCell(3);
  var img = document.createElement("img");
  img.src = document.getElementById("photo").value;
  photo.appendChild(img);

  var but = row.insertCell(4);

  var btn = document.createElement("btn");
  btn.className = "btn btn-danger";
  btn.innerHTML = "Eliminar fila";
  btn.onclick = function () {
    borrarFila(this);
  };

  var btn2 = document.createElement("btn");
  btn2.className = "btn btn-primary";
  btn2.innerHTML = "Editar fila";
  btn2.onclick = function () {
    editarFila(this);
  };

  but.appendChild(btn);
  but.appendChild(btn2);

  ln.innerHTML = document.getElementById("lastName").value;
  fn.innerHTML = document.getElementById("firstName").value;
  email.innerHTML = document.getElementById("email").value;

  return false;
}

fetch(dataDir)
  .then((data) => {
    return data.json();
  })
  .then((dataList) => {
    punto1(dataList);
    punto2(dataList);
    punto7();
  });
