export interface Movie {
    id : number,
    title : string,
    year : number,
    rating : number,
    poster : string,
    genre : string,
    director : string,
    duration : number,
    description : string 
}

export const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        poster: "https://unsplash.com",
        genre: "Ciencia Ficción",
        director: "Christopher Nolan",
        duration: 148,
        description: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños."
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        poster: "https://unsplash.com",
        genre: "Drama",
        director: "Frank Darabont",
        duration: 142,
        description: "Dos hombres encarcelados entablan una profunda amistad a lo largo de los años, encontrando consuelo y redención eventual."
    },
    {
        id: 3,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        poster: "https://unsplash.com",
        genre: "Crimen",
        director: "Francis Ford Coppola",
        duration: 175,
        description: "El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo."
    },
    {
        id: 4,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        poster: "https://unsplash.com",
        genre: "Acción",
        director: "Christopher Nolan",
        duration: 152,
        description: "Cuando la amenaza conocida como el Joker causa estragos y caos en Gotham, Batman debe aceptar una de las mayores pruebas psicológicas y físicas."
    },
    {
        id: 5,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        poster: "https://unsplash.com",
        genre: "Crimen",
        director: "Quentin Tarantino",
        duration: 154,
        description: "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención."
    },
    {
        id: 6,
        title: "Schindler's List",
        year: 1993,
        rating: 9.0,
        poster: "https://unsplash.com",
        genre: "Biografía",
        director: "Steven Spielberg",
        duration: 195,
        description: "En la Polonia ocupada por los alemanes durante la Segunda Guerra Mundial, el industrial Oskar Schindler se preocupa por sus trabajadores judíos."
    },
    {
        id: 7,
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        rating: 9.0,
        poster: "https://unsplash.com",
        genre: "Fantasía",
        director: "Peter Jackson",
        duration: 201,
        description: "Gandalf y Aragorn lideran el mundo de los hombres contra el ejército de Sauron para distorsionar su mirada de Frodo y Sam mientras se acercan al Monte del Destino."
    },
    {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        poster: "https://unsplash.com",
        genre: "Romance",
        director: "Robert Zemeckis",
        duration: 142,
        description: "Las presidencias de Kennedy y Johnson, los eventos de Vietnam y Watergate, se desarrollan desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75."
    },
    {
        id: 9,
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        poster: "https://unsplash.com",
        genre: "Drama",
        director: "David Fincher",
        duration: 139,
        description: "Un oficinista insomne y un desinteresado fabricante de jabones forman un club de lucha clandestino que evoluciona en algo mucho más grande."
    },
    {
        id: 10,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        poster: "https://unsplash.com",
        genre: "Ciencia Ficción",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        description: "Cuando un bello extraño lleva al hacker Neo a un inframundo inhóspito, descubre la terrible verdad: la vida que conoce es un engaño cibernético."
    },
    {
        id: 11,
        title: "Goodfellas",
        year: 1990,
        rating: 8.7,
        poster: "https://unsplash.com",
        genre: "Crimen",
        director: "Martin Scorsese",
        duration: 145,
        description: "La historia de Henry Hill y su vida en la mafia, cubriendo su relación con su esposa Karen Hill y sus socios mafiosos Jimmy Conway y Tommy DeVito."
    },
    {
        id: 12,
        title: "One Flew Over the Cuckoo's Nest",
        year: 1975,
        rating: 8.7,
        poster: "https://unsplash.com",
        genre: "Drama",
        director: "Milos Forman",
        duration: 133,
        description: "Un criminal de espíritu libre finge locura para ser trasladado a una institución mental, donde se rebela contra la opresiva enfermera jefa."
    },
    {
        id: 13,
        title: "Seven",
        year: 1995,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Misterio",
        director: "David Fincher",
        duration: 127,
        description: "Dos detectives, uno novato y otro a punto de retirarse, cazan a un asesino en serie que utiliza los siete pecados capitales como sus motivos."
    },
    {
        id: 14,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Ciencia Ficción",
        director: "Christopher Nolan",
        duration: 169,
        description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad."
    },
    {
        id: 15,
        title: "The Silence of the Lambs",
        year: 1991,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Suspenso",
        director: "Jonathan Demme",
        duration: 118,
        description: "Una joven cadete del FBI debe recibir la ayuda de un asesino caníbal encarcelado para atrapar a otro asesino en serie que despelleja a sus víctimas."
    },
    {
        id: 16,
        title: "Saving Private Ryan",
        year: 1998,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Bélico",
        director: "Steven Spielberg",
        duration: 169,
        description: "Después del desembarco de Normandía, un grupo de soldados estadounidenses va detrás de las líneas enemigas para rescatar a un paracaidista."
    },
    {
        id: 17,
        title: "Spirited Away",
        year: 2001,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Animación",
        director: "Hayao Miyazaki",
        duration: 125,
        description: "Durante el traslado de su familia al suburbio, una niña de 10 años de edad deambula por un mundo gobernado por dioses, brujas y espíritus."
    },
    {
        id: 18,
        title: "The Green Mile",
        year: 1999,
        rating: 8.6,
        poster: "https://unsplash.com",
        genre: "Drama",
        director: "Frank Darabont",
        duration: 189,
        description: "Las vidas de los guardias del corredor de la muerte se ven afectadas por uno de sus reclusos: un hombre negro acusado de asesinato que posee un don milagroso."
    },
    {
        id: 19,
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        poster: "https://unsplash.com",
        genre: "Comedia Negra",
        director: "Bong Joon Ho",
        duration: 132,
        description: "La codicia y la discriminación de clases amenazan la relación recién formada entre la adinerada familia Park y el clan Kim, que carece de recursos."
    },
    {
        id: 20,
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        poster: "https://unsplash.com",
        genre: "Acción",
        director: "Ridley Scott",
        duration: 155,
        description: "Un ex general romano se propone vengarse del emperador corrupto que asesinó a su familia y lo envió a él a la esclavitud."
    }
];

