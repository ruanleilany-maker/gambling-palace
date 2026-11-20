export const probabilityLessons = [
  {
    title: "¿Qué es la probabilidad?",
    paragraphs: [
      "La probabilidad expresa qué tan posible es un resultado. Va de 0 (imposible) a 1 (seguro), y también puede expresarse como porcentaje.",
      "Si todos los resultados son igualmente probables, podemos dividir los resultados favorables entre todos los resultados posibles. Por ejemplo, en un dado equilibrado, obtener un 6 tiene probabilidad de 1 entre 6."
    ],
    question: "En un dado equilibrado de seis caras, ¿cuál es la probabilidad de obtener un número par?",
    options: ["1/6", "3/6", "6/6"], correct: 1,
    explanation: "Hay tres resultados pares (2, 4 y 6) entre seis resultados posibles: 3/6, o 50 %."
  },
  {
    title: "Cada lanzamiento cuenta por separado",
    paragraphs: [
      "Dos eventos son independientes cuando el resultado de uno no cambia la probabilidad del otro. Los lanzamientos de una moneda equilibrada son un ejemplo.",
      "Aunque hayan salido varias caras seguidas, el siguiente lanzamiento sigue teniendo la misma probabilidad de cara y de sello: 50 % cada uno."
    ],
    question: "Una moneda equilibrada salió cara tres veces. ¿Qué probabilidad tiene de salir sello en el siguiente lanzamiento?",
    options: ["50 %", "75 %", "100 %"], correct: 0,
    explanation: "Los lanzamientos son independientes: los resultados anteriores no cambian el 50 % de probabilidad de sello."
  },
  {
    title: "Reconoce los mitos del azar",
    paragraphs: [
      "La falacia del jugador aparece cuando creemos que un resultado aleatorio es más probable solo porque lleva tiempo sin ocurrir. En eventos independientes, el azar no tiene memoria.",
      "Una racha puede ocurrir por casualidad. Observar resultados anteriores no permite predecir con certeza el siguiente resultado de un proceso aleatorio independiente."
    ],
    question: "Si un dado equilibrado no ha mostrado un 6 en diez lanzamientos, ¿qué sucede en el siguiente?",
    options: ["El 6 tiene mayor probabilidad", "El 6 sigue teniendo probabilidad de 1/6", "El 6 tiene que salir"], correct: 1,
    explanation: "Cada lanzamiento es independiente; el 6 conserva una probabilidad de 1/6 en cada intento."
  }
];
