
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
    available: false,
    questions: []
  }
];
