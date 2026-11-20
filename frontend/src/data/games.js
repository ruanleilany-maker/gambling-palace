
export const games = [
  {
    id: "patron",
    title: "La ilusión del patrón",
    category: "Probabilidad",
    level: "Inicial",
    duration: "4 minutos",
    description:
      "Descubre cómo funciona el azar y por qué nuestra intuición puede equivocarse.",
    available: true,
    questions: [
      {
        prompt:
          "Una moneda equilibrada ha caído en cara cinco veces seguidas. ¿Cuál es la probabilidad de obtener sello en el siguiente lanzamiento?",
        options: ["25 %", "50 %", "75 %"],
        correctIndex: 1,
        explanation:
          "Cada lanzamiento es independiente. Los resultados anteriores no modifican la probabilidad del siguiente: cara y sello siguen teniendo 50 % cada uno."
      },
      {
        prompt:
          "Un dado equilibrado ha mostrado el número 6 en tres lanzamientos consecutivos. ¿Qué probabilidad hay de obtener otro 6?",
        options: ["1/2", "1/6", "3/6"],
        correctIndex: 1,
        explanation:
          "Un dado equilibrado tiene seis caras igualmente probables. En cada lanzamiento, la probabilidad de obtener un 6 es 1/6, independientemente de los anteriores."
      },
      {
        prompt:
          "Una bolsa contiene dos bolas doradas y dos violetas. Sacas una bola y la devuelves antes de repetir. ¿Cuál es la probabilidad de obtener una violeta?",
        options: ["50 %", "75 %", "100 %"],
        correctIndex: 0,
        explanation:
          "Hay dos bolas violetas entre cuatro. La probabilidad es 2/4 = 50 %. Al devolver la bola, la composición de la bolsa se mantiene."
      }
    ]
  },
  {
    id: "presupuesto",
    title: "Presupuesto inteligente",
    category: "Finanzas",
    level: "Inicial",
    duration: "5 minutos",
    description:
      "Organiza recursos ficticios, prioriza necesidades y aprende a administrar tu dinero.",
    available: true,
    questions: []
  },
  {
    id: "codigo",
    title: "El código del palacio",
    category: "Lógica",
    level: "Intermedio",
    duration: "5 minutos",
    description:
      "Resuelve acertijos utilizando pistas, deducciones y razonamiento lógico.",
    available: true,
    questions: [
      {
        prompt: "La puerta tiene un código de tres cifras distintas. La primera es 2; la segunda es el doble de la primera; la tercera es una unidad mayor que la segunda. ¿Cuál es el código?",
        options: ["245", "254", "246"],
        correctIndex: 0,
        explanation: "La primera cifra es 2. Su doble es 4 y una unidad más que 4 es 5. Por eso el código es 245."
      },
      {
        prompt: "Tres llaves están en fila: dorada, violeta y plateada. La dorada está a la izquierda de la violeta; la plateada está a la derecha de la violeta. ¿Cuál está en el centro?",
        options: ["La dorada", "La violeta", "La plateada"],
        correctIndex: 1,
        explanation: "La dorada debe ir antes de la violeta y la plateada después. El único orden posible es dorada, violeta y plateada."
      },
      {
        prompt: "La guardiana dice: «Si una puerta tiene una estrella, entonces tiene una cerradura dorada». Una puerta tiene una estrella. ¿Qué puedes concluir?",
        options: ["Tiene una cerradura dorada", "No tiene cerradura", "Todas las puertas tienen una estrella"],
        correctIndex: 0,
        explanation: "La pista indica que toda puerta con estrella tiene cerradura dorada. Como esta puerta tiene estrella, se deduce que su cerradura es dorada. La pista no habla de todas las puertas."
      }
    ]
  }
];
