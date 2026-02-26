// questions.js - Your question database

export const categories = [
  { id: 'european-history', name: 'European History', icon: '🏛️' },
  { id: 'french-history', name: 'French History', icon: '🇫🇷' },
  { id: 'german-history', name: 'German History', icon: '🇩🇪' },
  { id: 'spanish-history', name: 'Spanish History', icon: '🇪🇸' },
  { id: 'italian-history', name: 'Italian History', icon: '🇮🇹' },
  { id: 'geography', name: 'Geography', icon: '🌍' },
  { id: 'film', name: 'Film & Cinema', icon: '🎬' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'politics', name: 'Politics', icon: '⚖️' }
];

export const questionsDatabase = [
  // EUROPEAN HISTORY
  {
    id: 1,
    category: 'european-history',
    question: "In what year did the French Revolution begin?",
    options: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Prise_de_la_Bastille.jpg/800px-Prise_de_la_Bastille.jpg",
    explanation: "The French Revolution began in 1789 with the storming of the Bastille on July 14th. This event marked the beginning of a decade of radical social and political upheaval in France that fundamentally changed the course of European history. The Revolution emerged from widespread discontent with King Louis XVI's absolute monarchy, severe economic hardship, heavy taxation, and Enlightenment ideas about liberty, equality, and popular sovereignty. It would eventually lead to the execution of the king, the Reign of Terror, and the rise of Napoleon Bonaparte.",
    funFact: "The Bastille prison only held 7 prisoners when it was stormed, but it had become a powerful symbol of royal tyranny. July 14th is now celebrated as Bastille Day, France's national holiday, with fireworks and military parades!"
  },
  {
    id: 2,
    category: 'european-history',
    question: "Which treaty ended World War I?",
    options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Rome"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/The_signing_of_the_peace_treaty_of_Versailles.webm/800px--The_signing_of_the_peace_treaty_of_Versailles.webm.jpg",
    explanation: "The Treaty of Versailles, signed on June 28, 1919, officially ended World War I. Negotiated primarily by the 'Big Four' (United States, Britain, France, and Italy), it imposed harsh penalties on Germany, including massive reparations payments, territorial losses, and military restrictions. The treaty required Germany to accept full responsibility for causing the war (the infamous 'War Guilt Clause'). Many historians argue that the punitive nature of this treaty contributed to economic hardship and political instability in Germany, creating conditions that eventually led to World War II.",
    funFact: "The treaty was signed in the Hall of Mirrors at the Palace of Versailles - the exact same room where the German Empire had been proclaimed 48 years earlier after defeating France in 1871. This location was chosen deliberately by France as symbolic revenge."
  },

  // FRENCH HISTORY
  {
    id: 3,
    category: 'french-history',
    question: "Who was the first Emperor of France?",
    options: ["Louis XIV", "Napoleon Bonaparte", "Charles de Gaulle", "Louis XVI"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/473px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    explanation: "Napoleon Bonaparte became the first Emperor of France on May 18, 1804, crowning himself in a lavish ceremony at Notre-Dame Cathedral in Paris. He had risen from relatively modest Corsican origins to become a military general during the French Revolution, then First Consul after a coup in 1799. As Emperor, Napoleon reformed French law (creating the Napoleonic Code), reorganized education, and conquered much of Europe before his eventual defeat and exile. His reign fundamentally shaped modern France and European politics.",
    funFact: "During his coronation, Napoleon famously took the crown from Pope Pius VII's hands and placed it on his own head, symbolizing that his power came from his own merit rather than divine right. He then crowned his wife Josephine as Empress."
  },
  {
    id: 4,
    category: 'french-history',
    question: "What was the Reign of Terror?",
    options: ["A medieval plague", "A period of mass executions during the French Revolution", "Napoleon's military campaign", "A religious persecution"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Execution_robespierre%2C_saint_just....jpg/800px-Execution_robespierre%2C_saint_just....jpg",
    explanation: "The Reign of Terror (September 1793 - July 1794) was a violent period during the French Revolution characterized by mass executions of perceived enemies of the Revolution. Led primarily by Maximilien Robespierre and the Committee of Public Safety, it resulted in approximately 16,000-40,000 deaths by guillotine, including King Louis XVI, Queen Marie Antoinette, and eventually Robespierre himself. The Terror was justified by its leaders as necessary to defend the Revolution from internal and external threats, but its extreme violence ultimately led to Robespierre's downfall.",
    funFact: "The guillotine became the symbol of the Terror. It was actually promoted as a more humane method of execution compared to previous methods. Dr. Joseph-Ignace Guillotin proposed it to ensure all citizens, regardless of class, would receive the same method of execution - a twisted form of revolutionary equality."
  },

  // GERMAN HISTORY
  {
    id: 5,
    category: 'german-history',
    question: "In what year did the Berlin Wall fall?",
    options: ["1985", "1987", "1989", "1991"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TheFallOfTheBerlinWall1989.JPG/800px-TheFallOfTheBerlinWall1989.JPG",
    explanation: "The Berlin Wall fell on November 9, 1989, marking a pivotal moment in world history and the beginning of the end of the Cold War. The wall had divided East and West Berlin since 1961, becoming the most powerful symbol of the Iron Curtain separating communist Eastern Europe from the West. Its fall came after mounting pressure from East German citizens demanding freedom of movement, combined with political changes in the Soviet Union under Mikhail Gorbachev. Over 2 million people from East Berlin visited West Berlin that first weekend, and German reunification followed less than a year later in October 1990.",
    funFact: "The fall wasn't planned - it happened almost by accident! During a press conference, East German official Günter Schabowski mistakenly announced that travel restrictions would be lifted 'immediately,' when they were meant to take effect the next day. Thousands rushed to the wall, and overwhelmed guards opened the gates."
  },
  {
    id: 6,
    category: 'german-history',
    question: "Who was the first Chancellor of unified Germany (after 1990)?",
    options: ["Willy Brandt", "Helmut Schmidt", "Helmut Kohl", "Angela Merkel"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Helmut_Kohl_1996.jpg/473px-Helmut_Kohl_1996.jpg",
    explanation: "Helmut Kohl served as the first Chancellor of reunified Germany from 1990 to 1998, though he had been Chancellor of West Germany since 1982. Known as the 'Chancellor of Unity,' Kohl played a crucial role in German reunification, working closely with Soviet leader Mikhail Gorbachev and other world leaders to navigate the complex political and economic challenges of merging two very different systems. He negotiated the terms of reunification, including Germany's continued membership in NATO and the European Community. His 16-year tenure made him one of Germany's longest-serving chancellors.",
    funFact: "Kohl was famous for his 'sitting out' strategy in negotiations - he would literally wait in meetings for hours, sometimes saying nothing, until his opponents made concessions out of exhaustion. He also used informal 'evening walks' with world leaders to conduct important diplomacy away from cameras and officials."
  },

  // GEOGRAPHY
  {
    id: 7,
    category: 'geography',
    question: "What is the capital of Germany?",
    options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Berlin_Skyline_Fernsehturm_02.jpg/800px-Berlin_Skyline_Fernsehturm_02.jpg",
    explanation: "Berlin is the capital and largest city of Germany, with a population of about 3.7 million. It became the capital of unified Germany in 1990 after the fall of the Berlin Wall and German reunification. The city has a rich and complex history - it was the capital of the Kingdom of Prussia, the German Empire, the Weimar Republic, and Nazi Germany. After WWII, it was divided into East and West Berlin during the Cold War. Today, Berlin is known for its diverse culture, vibrant arts scene, start-up ecosystem, and as a major European political and economic center.",
    funFact: "Berlin has more bridges than Venice! The city has around 960 bridges crossing its many canals, rivers, and the Spree. It's also one of the greenest cities in Europe, with about 30% of its area covered by parks, forests, and waterways."
  },
  {
    id: 8,
    category: 'geography',
    question: "Which river is the longest in Europe?",
    options: ["Rhine", "Danube", "Volga", "Thames"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Volga_Ulyanovsk.jpg/800px-Volga_Ulyanovsk.jpg",
    explanation: "The Volga River is Europe's longest river at 3,530 kilometers (2,194 miles), flowing entirely within Russia from the Valdai Hills northwest of Moscow to the Caspian Sea. Often called 'Mother Volga' in Russian culture, it's deeply significant to Russian national identity and has been crucial for trade and transportation for centuries. The Volga drains most of western Russia and its basin is home to about 40% of Russia's population. Major cities along its banks include Moscow (via canal), Nizhny Novgorod, Kazan, and Volgograd (formerly Stalingrad).",
    funFact: "The Volga freezes for about three months each year, becoming essentially a giant ice highway. During WWII, the Battle of Stalingrad (now Volgograd) on the Volga was one of history's bloodiest battles, with nearly 2 million casualties."
  },

  // FILM
  {
    id: 9,
    category: 'film',
    question: "Who directed 'The Godfather' (1972)?",
    options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Stanley Kubrick"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    explanation: "Francis Ford Coppola directed The Godfather in 1972, adapting Mario Puzo's novel into what many consider one of the greatest films ever made. The film revolutionized the crime genre by portraying mobsters as complex characters rather than simple villains, and explored themes of family, loyalty, power, and the American Dream's dark side. Coppola was only 32 years old and relatively inexperienced when he made the film, facing constant pressure from Paramount Pictures who doubted his vision. The film won three Academy Awards including Best Picture, and spawned two sequels, with The Godfather Part II becoming the first sequel to win Best Picture.",
    funFact: "Paramount initially didn't want Marlon Brando for Don Vito Corleone, considering him difficult and washed up. Coppola fought hard to cast him, and Brando worked for scale ($50,000) plus a percentage. He won Best Actor but famously sent Native American activist Sacheen Littlefeather to refuse the award in protest of Hollywood's treatment of Native Americans."
  },
  {
    id: 10,
    category: 'film',
    question: "Which film won the first-ever Academy Award for Best Picture in 1929?",
    options: ["Wings", "The Jazz Singer", "Metropolis", "City Lights"],
    correctAnswer: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Wings_1927_poster.jpg/473px-Wings_1927_poster.jpg",
    explanation: "'Wings' (1927) won the first Academy Award for Best Picture at the 1st Academy Awards ceremony held in 1929. This silent film, directed by William A. Wellman, was a World War I epic featuring spectacular aerial combat sequences that were groundbreaking for their time. The film starred Clara Bow, Charles 'Buddy' Rogers, and Richard Arlen, and featured Gary Cooper in a small role. It cost $2 million to make (enormous for the time) and used real fighter planes and actual military pilots for the flying scenes. 'Wings' remains notable for its technical achievement and historical significance as Hollywood's first Best Picture winner.",
    funFact: "To achieve realistic aerial combat footage, the actors actually learned to fly and operated the cameras themselves while piloting the planes! Director William Wellman was himself a WWI fighter pilot, which gave the film its authentic feel. 'Wings' also contains what's believed to be the first same-sex kiss in a major American film."
  },

  // MUSIC
  {
    id: 11,
    category: 'music',
    question: "Which composer became deaf later in life but continued composing?",
    options: ["Mozart", "Beethoven", "Bach", "Chopin"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/473px-Beethoven.jpg",
    explanation: "Ludwig van Beethoven began losing his hearing in his late 20s (around 1798) and was almost completely deaf by 1814, yet he continued composing until his death in 1827. Remarkably, some of his greatest works - including his Ninth Symphony with its famous 'Ode to Joy' - were composed when he was profoundly deaf. He could no longer hear performances of his own music and had to rely on his inner musical imagination and knowledge of how instruments sounded. Beethoven's deafness caused him tremendous anguish, as evidenced by his 'Heiligenstadt Testament,' a letter to his brothers where he contemplated suicide but resolved to continue living for his art.",
    funFact: "At the premiere of his Ninth Symphony in 1824, Beethoven insisted on conducting despite being completely deaf. He couldn't hear the thunderous applause at the end and had to be turned around by a performer to see the audience's standing ovation. Many in the audience were in tears."
  },

  // POLITICS
  {
    id: 12,
    category: 'politics',
    question: "What does 'EU' stand for?",
    options: ["European Unity", "European Union", "Eastern Union", "Economic Union"],
    correctAnswer: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png",
    explanation: "The European Union (EU) is a political and economic union of 27 European member states, established by the Maastricht Treaty in 1993 (though its origins trace back to the 1950s with the European Coal and Steel Community). The EU has developed a single market through a standardized system of laws that apply in all member states, ensuring the free movement of people, goods, services, and capital. It maintains common policies on trade, agriculture, fisheries, and regional development, and has its own currency (the euro) used by 20 member states. The EU operates through a hybrid system of supranational and intergovernmental decision-making.",
    funFact: "The EU flag's circle of 12 gold stars doesn't represent the number of member states - it was designed in 1955 when there were only 6 members. The number 12 was chosen as a symbol of perfection and unity, inspired by various cultural and religious traditions where 12 is significant."
  },

  // SPANISH HISTORY
  {
    id: 13,
    category: 'spanish-history',
    question: "In what year did Christopher Columbus reach the Americas under Spanish patronage?",
    options: ["1492", "1500", "1488", "1502"],
    correctAnswer: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Columbus_Taking_Possession.jpg/800px-Columbus_Taking_Possession.jpg",
    explanation: "Christopher Columbus reached the Americas on October 12, 1492, after receiving funding from Spanish monarchs Ferdinand and Isabella. He was seeking a western route to Asia but instead encountered the Caribbean islands, landing first in the Bahamas. This voyage initiated the widespread European exploration and colonization of the Americas, profoundly changing world history. Columbus made four voyages to the Americas between 1492-1504, never realizing he had reached a new continent rather than Asia. While celebrated for centuries, his expeditions also began the devastating colonization of indigenous peoples and the transatlantic slave trade.",
    funFact: "Columbus died in 1506 still believing he had reached Asia, never knowing he had encountered a previously unknown (to Europeans) continent. The Americas were named after another explorer, Amerigo Vespucci, who realized this was indeed a 'New World.'"
  },

  // ITALIAN HISTORY  
  {
    id: 14,
    category: 'italian-history',
    question: "Which Italian city-state was famous for its powerful banking families during the Renaissance?",
    options: ["Venice", "Milan", "Florence", "Naples"],
    correctAnswer: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Florencia_-_Palacio_Vecchio_y_entorno.jpg/800px-Florencia_-_Palacio_Vecchio_y_entorno.jpg",
    explanation: "Florence was the center of Renaissance banking, dominated by powerful families like the Medici. The Medici Bank, founded in 1397, became Europe's largest and most respected financial institution, with branches across Europe. Their wealth allowed them to become major patrons of the arts, sponsoring artists like Michelangelo, Leonardo da Vinci, and Botticelli. The family effectively ruled Florence for much of the 15th-17th centuries, and produced four Popes and two Queens of France. Their patronage and political power made Florence the birthplace of the Renaissance, transforming it into Europe's cultural capital.",
    funFact: "The Medici invented many modern banking practices, including the double-entry bookkeeping system and letters of credit. Their symbol of three balls (palle) is still used as a symbol for pawnbrokers today!"
  }
];

// Helper function to get questions by category
export function getQuestionsByCategory(categoryId) {
  if (categoryId === 'all') {
    return questionsDatabase;
  }
  return questionsDatabase.filter(q => q.category === categoryId);
}

// Helper function to get random questions
export function getRandomQuestions(count, categoryId = 'all') {
  const questions = getQuestionsByCategory(categoryId);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}