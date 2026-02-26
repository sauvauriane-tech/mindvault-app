export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
  explanation: string;
  funFact: string;
}

export const questionsDatabase: QuizQuestion[] = [
  {
    id: 1,
    category: 'european-history',
    question: "In what year did the French Revolution begin?",
    options: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Prise_de_la_Bastille.jpg/800px-Prise_de_la_Bastille.jpg",
    explanation: "The French Revolution began in 1789 with the storming of the Bastille on July 14th.",
    funFact: "The Bastille prison only held 7 prisoners when it was stormed, but it had become a powerful symbol of royal tyranny. July 14th is now celebrated as Bastille Day!"
  },
  {
    id: 2,
    category: 'european-history',
    question: "Which treaty ended World War I?",
    options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Rome"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/The_signing_of_the_peace_treaty_of_Versailles.webm/800px--The_signing_of_the_peace_treaty_of_Versailles.webm.jpg",
    explanation: "The Treaty of Versailles, signed on June 28, 1919, officially ended World War I and imposed harsh penalties on Germany.",
    funFact: "The treaty was signed in the Hall of Mirrors at the Palace of Versailles — the exact same room where the German Empire had been proclaimed 48 years earlier after defeating France."
  },
  {
    id: 3,
    category: 'french-history',
    question: "Who was the first Emperor of France?",
    options: ["Louis XIV", "Napoleon Bonaparte", "Charles de Gaulle", "Louis XVI"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/473px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    explanation: "Napoleon Bonaparte became the first Emperor of France on May 18, 1804, crowning himself in a lavish ceremony at Notre-Dame Cathedral.",
    funFact: "During his coronation, Napoleon famously took the crown from Pope Pius VII's hands and placed it on his own head, symbolizing that his power came from his own merit."
  },
  {
    id: 4,
    category: 'french-history',
    question: "What was the Reign of Terror?",
    options: ["A medieval plague", "A period of mass executions during the French Revolution", "Napoleon's military campaign", "A religious persecution"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Execution_robespierre%2C_saint_just....jpg/800px-Execution_robespierre%2C_saint_just....jpg",
    explanation: "The Reign of Terror (September 1793 – July 1794) was a violent period during the French Revolution with mass executions led by Robespierre.",
    funFact: "The guillotine was actually promoted as a more humane method of execution. Dr. Joseph-Ignace Guillotin proposed it to ensure all citizens received the same method — a twisted form of revolutionary equality."
  },
  {
    id: 5,
    category: 'german-history',
    question: "In what year did the Berlin Wall fall?",
    options: ["1985", "1987", "1989", "1991"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TheFallOfTheBerlinWall1989.JPG/800px-TheFallOfTheBerlinWall1989.JPG",
    explanation: "The Berlin Wall fell on November 9, 1989, marking a pivotal moment in world history and the beginning of the end of the Cold War.",
    funFact: "The fall wasn't planned — it happened almost by accident! An East German official mistakenly announced that travel restrictions would be lifted 'immediately,' and thousands rushed to the wall."
  },
  {
    id: 6,
    category: 'german-history',
    question: "Who was the first Chancellor of unified Germany (after 1990)?",
    options: ["Willy Brandt", "Helmut Schmidt", "Helmut Kohl", "Angela Merkel"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Helmut_Kohl_1996.jpg/473px-Helmut_Kohl_1996.jpg",
    explanation: "Helmut Kohl served as Chancellor of reunified Germany from 1990 to 1998, known as the 'Chancellor of Unity.'",
    funFact: "Kohl was famous for his 'sitting out' strategy in negotiations — he would literally wait in meetings for hours, saying nothing, until opponents made concessions out of exhaustion."
  },
  {
    id: 7,
    category: 'spanish-history',
    question: "In what year did Christopher Columbus reach the Americas under Spanish patronage?",
    options: ["1492", "1500", "1488", "1502"],
    correctAnswer: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Columbus_Taking_Possession.jpg/800px-Columbus_Taking_Possession.jpg",
    explanation: "Christopher Columbus reached the Americas on October 12, 1492, after receiving funding from Spanish monarchs Ferdinand and Isabella.",
    funFact: "Columbus died in 1506 still believing he had reached Asia, never knowing he had encountered a new continent. The Americas were named after Amerigo Vespucci, who realized it was a 'New World.'"
  },
  {
    id: 8,
    category: 'italian-history',
    question: "Which Italian city-state was famous for its powerful banking families during the Renaissance?",
    options: ["Venice", "Milan", "Florence", "Naples"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Florencia_-_Palacio_Vecchio_y_entorno.jpg/800px-Florencia_-_Palacio_Vecchio_y_entorno.jpg",
    explanation: "Florence was the center of Renaissance banking, dominated by the Medici family who sponsored artists like Michelangelo and Leonardo da Vinci.",
    funFact: "The Medici invented many modern banking practices, including double-entry bookkeeping. Their symbol of three balls (palle) is still used as a symbol for pawnbrokers today!"
  },
];

export function getQuestionsByCategory(categoryId: string): QuizQuestion[] {
  if (categoryId === 'all') return questionsDatabase;
  return questionsDatabase.filter(q => q.category === categoryId);
}
