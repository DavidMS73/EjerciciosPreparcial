const dataDir = "data.json";

function borrarFila(indexRow) {
  let nodo = document.getElementById(`${indexRow}`);
  if (nodo.parentNode) {
    nodo.parentNode.removeChild(nodo);
  }
}

function punto1(dataList) {
  let table1 = document.getElementById("punto1");
  dataList.forEach((element, index) => {
    let row = document.createElement("tr");
    row.setAttribute("id", `${index}`);

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
    btn.onclick = function () {
      borrarFila(index);
    };
    deleteRow.appendChild(btn);

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

function punto5() {
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

fetch(dataDir)
  .then((data) => {
    return data.json();
  })
  .then((dataList) => {
    punto1(dataList);
    punto2(dataList);
    punto7();
  });
