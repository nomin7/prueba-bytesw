window.onload = function () {
    var localStorageKeyName = 'data';

    loadFromLocalStorage();

    document.querySelector("#registrar").addEventListener('click', function () {
        var id = document.getElementById("id"),
            nombre = document.getElementById("nombre"),
            nit = document.getElementById("nit"),
            fecha = document.getElementById("fecha");
            direccion = document.getElementById("direccion");

        if (id.value.length === 0 || nombre.value.length === 0 || !parseInt(nit.value) || fecha.value.length === 0 || direccion.value.length === 0) return;

        var user = {
            id: id.value,
            nombre: nombre.value,
            nit: nit.value,
            fecha: fecha.value,
            direccion: direccion.value
        };

        id.value = '';
        nombre.value = '';
        nit.value = '';
        fecha.value = '';
        direccion.value = '';
        appendObjectToLocalStorage(user);
    })

    function appendObjectToLocalStorage(obj) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }

    function loadFromLocalStorage() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }
        gridBody.innerHTML = '';

        users.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdId = document.createElement("td"),
                tdNombre = document.createElement("td"),
                tdNit = document.createElement("td"),
                tdFecha = document.createElement("td"),
                tdDireccion = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdId.innerHTML = x.id;
            tdNombre.innerHTML = x.nombre;
            tdNit.innerHTML = x.nit;
            tdFecha.innerHTML = x.fecha;
            tdDireccion.innerHTML = x.direccion;

            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdId);
            tr.appendChild(tdNombre);
            tr.appendChild(tdNit);
            tr.appendChild(tdFecha);
            tr.appendChild(tdDireccion);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index){
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }
}