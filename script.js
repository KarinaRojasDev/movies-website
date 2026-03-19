const form = document.querySelector(".form-movies");
let peliArray = [
  {
    titulo: "El Silencio de los Corderos",
    anio: 1991,
    descripcion:
      "Un agente del FBI busca a un asesino en serie con ayuda de un psicopata",
    url: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    genero: "Terror",
  },
  {
    titulo: "Split",
    anio: 2016,
    descripcion: "Un hombre con 24 personalidades secuestra a tres chicas",
    url: "https://4.bp.blogspot.com/-4UP6ZqIwdK8/W2usmj0i6mI/AAAAAAAABLs/1lbjht-9JDIZxIRfZ-gQ0xzBhZQ6sOOUgCLcBGAs/w1200-h630-p-k-no-nu/Split-Movie-Poster-Custom-24-Personalities.jpg",
    genero: "Terror",
  },
  {
    titulo: "Hereditary",
    anio: 2018,
    descripcion:
      "Una familia descubre oscuros secretos tras la muerte de la abuela",
    url: "https://image.tmdb.org/t/p/original/gCoqM7p0KcqvVPBa16joXpxCg7u.jpg",
    genero: "Terror",
  },
  {
    titulo: "Get Out",
    anio: 2017,
    descripcion:
      "Un joven descubre una perturbadora conspiracion en casa de su novia",
    url: "https://pics.filmaffinity.com/get_out-333783405-large.jpg",
    genero: "Terror",
  },
  {
    titulo: "Antes del Amanecer",
    anio: 1995,
    descripcion:
      "Dos desconocidos se enamoran en una noche por las calles de Viena",
    url: "https://one-tech.es/wp-content/uploads/2020/11/antes-del-amanecer.jpg",
    genero: "Romance",
  },
  {
    titulo: "La La Land",
    anio: 2016,
    descripcion:
      "Una actriz y un musico persiguen sus sueños mientras se enamoran",
    url: "https://images7.alphacoders.com/111/1111669.jpg",
    genero: "Romance",
  },
  {
    titulo: "Titanic",
    anio: 1997,
    descripcion:
      "Un amor imposible a bordo del barco mas famoso de la historia",
    url: "https://images2.alphacoders.com/616/616490.jpg",
    genero: "Romance",
  },
  {
    titulo: "El Diario de Noa",
    anio: 2004,
    descripcion:
      "Dos jovenes de clases distintas se enamoran en el verano de 1940",
    url: "https://www.adslzone.net/app/uploads-adslzone.net/2022/09/El-diario-de-Noa.jpg",
    genero: "Romance",
  },
  {
    titulo: "Fast and Furious",
    anio: 2001,
    descripcion: "Un policia se infiltra en el mundo de las carreras ilegales",
    url: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/F9-header-(1).jpg",
    genero: "Acción",
  },
  {
    titulo: "Mad Max Furia en la Carretera",
    anio: 2015,
    descripcion:
      "En un mundo apocaliptico una guerrera huye con un convoy de supervivientes",
    url: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    genero: "Acción",
  },
  {
    titulo: "Matrix",
    anio: 1999,
    descripcion:
      "Un hacker descubre que la realidad es una simulacion controlada por maquinas",
    url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/The-Matrix-poster-green.jpg",
    genero: "Acción",
  },
  {
    titulo: "El Rey Leon",
    anio: 1994,
    descripcion: "Un leon recupera su reino",
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CD2824F2F73EAD00D29E6606C6B8914FE74AAD591322E6A77E41BCFC401AAE7/scale?width=1200&aspectRatio=1.78&format=jpeg",
    genero: "Comedia",
  },
  {
    titulo: "Aladdin",
    anio: 1992,
    descripcion: "Un joven encuentra una lampara magica",
    url: "https://image.tmdb.org/t/p/original/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
    genero: "Comedia",
  },
  {
    titulo: "Toy Story",
    anio: 1995,
    descripcion: "Los juguetes cobran vida",
    url: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    genero: "Comedia",
  },
  {
    titulo: "Shrek",
    anio: 2001,
    descripcion: "Un ogro rescata a una princesa",
    url: "https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    genero: "Comedia",
  },
  {
    titulo: "El Rey Leon",
    anio: 1994,
    descripcion: "Un leon recupera su reino",
    url: "https://image.tmdb.org/t/p/original/ZNuXqnATe30ypeLzHZYpcK4xcd.jpg",
    genero: "Comedia",
  },
  {
    titulo: "El Rey Leon",
    anio: 1994,
    descripcion: "Un leon recupera su reino",
    url: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
    genero: "Comedia",
  },
  {
    titulo: "El Rey Leon",
    anio: 1994,
    descripcion: "Un leon recupera su reino",
    url: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
    genero: "Comedia",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault(); //para el envio
  //accedemos a los valores del formulario
  const titulo = event.target.titulo.value;
  const anio = event.target.anio.value;
  const descripcion = event.target.descripcion.value;
  const url = event.target.urlFoto.value;
  const genero = event.target.genero.value;

  //Validaciones
  let errorMensaje = "";

  //título
  const tituloRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]{3,20}$/;
  if (!tituloRegex.test(titulo)) {
    errorMensaje +=
      "El título debe tener entre 3 y 20 caracteres y solo puede contener letras y espacios.\n";
  }

  //año
  const anioRegex = /^(1[89]\d{2}|[2-9]\d{3})$/;
  const anioActual = new Date().getFullYear();

  if (!anioRegex.test(anio) || Number(anio) > anioActual) {
    errorMensaje += `El año debe tener 4 cifras y estar entre 1800 y ${anioActual}\n`;
  }

  //descripción
  const desRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ ]{1,100}$/;
  if (!desRegex.test(descripcion)) {
    errorMensaje +=
      "La descripción debe tener entre 1 y 30 caracteres y solo puede contener letras, números y espacios.\n";
  }
  //url
  const urlRegex = /^https?:\/\/.+/;
  if (!urlRegex.test(url)) {
    errorMensaje += "URL no válida. Debe comenzar con http:// o https://\n";
  }
  //genero
  if (!genero) {
    errorMensaje += "Elija un género.";
  }

  if (errorMensaje) {
    document.getElementById("errorMessages").innerHTML =
      `<pre class="errorMessage">${errorMensaje}</pre>`;
  } else {
    document.getElementById("errorMessages").innerHTML =
      `<p class="success">FORMULARIO ENVIADO</p>`;

    //VALIDACIONES OK, CREA UN OBJETO PELICULAS CON LOS DATOS
    let pelicula = {
      titulo: titulo,
      anio: anio,
      descripcion: descripcion,
      url: url,
      genero: genero,
    };
    //GUARDAR EN ARRAY DE PELI
    peliArray.push(pelicula);
    form.reset();
    renderTabla(peliArray);
  }
});

function renderTabla(array) {
  let pelis_lista = document.querySelector(".pelis-lista");
  //LIMPIAR LA TABLA
  pelis_lista.innerHTML = "";
  //RECORRER ARRAY PELI
  array.forEach((peli, index) => {
    const tr = document.createElement("tr");

    //AGREGAR AL BODY EL OBJETO
    tr.innerHTML += `

                    <td><strong>Título:</strong> ${peli.titulo}</td>
                    <td><strong>Año:</strong> ${peli.anio}</td>
                    <td class="descripcionTitulo">Descripción:</td>
                    <td class="descripcion"> ${peli.descripcion}</td>
                    <td><img src="${peli.url}" alt="${peli.titulo}" width="100"></td>
                    <td>${peli.genero}</td>
                    <td>
                      <button class="delete-button">Eliminar</button>
                      <button class="edit-button">Editar</button>
                    </td>
                    `;
    //Lógica para el boton de borrar
    tr.querySelector(".delete-button").addEventListener("click", () => {
      peliArray.splice(index, 1);
      tr.remove();
    });

    //Lógica para el boton editar
    tr.querySelector(".edit-button").addEventListener("click", () => {
      tr.innerHTML = `<td >
        <form class="edit-form">
          <label>Título: <input type="text" name="titulo" value="${peli.titulo}" required></label>
          <label>Año: <input type="number" name="anio" value="${peli.anio}" required></label>
          <label>Descripción: <input type="text" name="descripcion" value="${peli.descripcion}" required></label>
          <label>URL foto: <input type="url" name="url" value="${peli.url}" required></label>
          <label>Género:
              <select name="genero">
                  <option value="Terror" ${peli.genero === "Terror" ? "selected" : ""}>Terror</option>
                  <option value="Acción" ${peli.genero === "Acción" ? "selected" : ""}>Acción</option>
                  <option value="Comedia" ${peli.genero === "Comedia" ? "selected" : ""}>Comedia</option>
                  <option value="Romance" ${peli.genero === "Romance" ? "selected" : ""}>Romance</option>
              </select>
          </label>
          <button type="submit">Guardar</button>
        </form>
      </td>`;
      //edita el form
      const editForm = tr.querySelector(".edit-form");
      editForm.addEventListener("submit", (event) => {
        // Evitar el comportamiento por defecto del formulario
        event.preventDefault();

        //actualizar datos de las peliculas
        peli.titulo = editForm.elements.titulo.value.trim();
        peli.anio = editForm.elements.anio.value.trim();
        peli.descripcion = editForm.elements.descripcion.value.trim();
        peli.url = editForm.elements.url.value.trim();
        peli.genero = editForm.elements.genero.value;

        //resderizamos tr actualizado
        renderTabla(peliArray);
      });
    });
    pelis_lista.appendChild(tr);
  });
}
  
/* Filtro combinado */
function filterPeliculas(filterGenero, searchTitulo) {
  return peliArray.filter(
    (peli) =>
      (filterGenero === "Todas" || peli.genero === filterGenero) &&
      (searchTitulo === "" ||
        peli.titulo.toLowerCase().includes(searchTitulo.toLowerCase())),
  );
}

//Evento filtro género
document.getElementById("filtroTitulo").addEventListener("input", (event) => {
  let filtroGenero = document.getElementById("filtroGenero").value;
  let peliculasFiltradas = filterPeliculas(filtroGenero, event.target.value);
  renderTabla(peliculasFiltradas);
});
document.getElementById("filtroGenero").addEventListener("change", (event) => {
  let filtroTitulo = document.getElementById("filtroTitulo").value;
  let filtroPelis = filterPeliculas(event.target.value, filtroTitulo);
  renderTabla(filtroPelis);
});

// Llamada inicial para pintar las pelis al cargar
renderTabla(peliArray);
