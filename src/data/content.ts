export interface Topic {
  id: string;
  name: string;
  icon: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonPage {
  title: string;
  imageUrl?: string;
  body: string;
}

export interface Lesson {
  id: string;
  title: string;
  imageUrl: string;
  pages: LessonPage[];
  quiz: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  topicId: string;
  imageUrl: string;
  rating: number;
  estimatedMinutes: number;
  lessons: Lesson[];
}

export const TOPICS: Topic[] = [
  { id: 'history', name: 'History', icon: 'book' },
  { id: 'culture', name: 'Culture', icon: 'globe' },
  { id: 'politics', name: 'Politics', icon: 'flag' },
  { id: 'philosophy', name: 'Philosophy', icon: 'bulb' },
];

// Keep a flat topics array for backwards compat
export const topics = TOPICS;

export const courses: Course[] = [
  {
    id: 'medieval-europe',
    title: 'Medieval Europe: Myths & Realities',
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&q=80',
    topicId: 'history',
    rating: 4.8,
    estimatedMinutes: 20,
    lessons: [
      {
        id: 'real-middle-ages',
        title: 'The Real Middle Ages',
        imageUrl: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80',
        pages: [
          {
            title: 'Not as Dark as You Think',
            imageUrl: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80',
            body: 'The Middle Ages are often called the "Dark Ages," but this label is deeply misleading. Between roughly 500 and 1500 CE, Europe was a place of remarkable creativity, scholarship, and innovation.\n\nDespite the popular image of ignorant, superstitious peasants stumbling through filthy villages, medieval people built soaring cathedrals, wrote sophisticated philosophy, and established the first universities. Places like Bologna (founded 1088), Oxford (circa 1096), and Paris (circa 1150) were thriving centers of learning.\n\nMedieval scholars preserved and expanded upon classical knowledge. Far from rejecting ancient Greek and Roman texts, they translated them, debated them, and built on them. Figures like Thomas Aquinas synthesized Aristotelian philosophy with Christian theology in ways that shaped Western thought for centuries.',
          },
          {
            title: 'Inventions & Innovations',
            body: 'The medieval period gave us inventions we still use today. The mechanical clock, eyeglasses, the printing press (late medieval), the heavy plow that transformed European agriculture — all emerged in this era.\n\nWater mills and windmills harnessed natural energy to grind grain and power workshops. The horse collar, invented around the 9th century, allowed horses to pull heavy loads without choking, revolutionizing farming and transport.\n\nGothic architecture, with its pointed arches and flying buttresses, solved engineering problems that had stumped builders for centuries — allowing churches to soar to previously impossible heights while flooding interiors with light through stained glass windows.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What was the first European university, founded around 1088?', options: ['Oxford', 'Paris', 'Bologna', 'Cambridge'], correctIndex: 2, explanation: 'The University of Bologna, founded in 1088, is widely considered the first university in the Western world.' },
          { id: 'q2', question: 'Which medieval invention allowed horses to pull heavy loads without choking?', options: ['The stirrup', 'The horseshoe', 'The horse collar', 'The bridle'], correctIndex: 2, explanation: 'The horse collar, developed around the 9th century, distributed weight across the horse\'s shoulders rather than the throat.' },
        ],
      },
      {
        id: 'peasant-life',
        title: 'Peasant Life: Harder Than You Know',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
        pages: [
          {
            title: 'The Village World',
            imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
            body: 'About 90% of medieval Europeans were peasants — farmers tied to the land and the rhythms of the agricultural calendar. Life was hard, but it was not quite the miserable squalor of popular imagination.\n\nMost peasants lived in small villages of perhaps 50 to 150 people, in timber-framed houses with thatched roofs. Families slept together in one or two rooms, often sharing space with their most valuable animals during cold months.\n\nThe peasant diet, while limited, was not as poor as often depicted. Bread was the staple — dark, dense loaves of rye or barley. Peas, beans, onions, and cabbages were common. Ale (safer than water, which was often contaminated) was drunk by men, women, and children alike.',
          },
          {
            title: 'Work, Rest & Feasts',
            body: 'Peasants worked hard, but they also had considerable time off. Medieval Christianity mandated rest on Sundays and on saints\' days — and there were dozens of saints\' days throughout the year. By some estimates, peasants worked fewer total hours per year than modern office workers.\n\nThe agricultural year had its own rhythm. Spring meant plowing and planting. Summer brought haymaking and tending crops. Autumn was harvest time — the most critical and busiest period. Winter allowed for rest, maintenance of tools, and various craft activities.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What percentage of medieval Europeans were peasants?', options: ['About 50%', 'About 70%', 'About 90%', 'About 30%'], correctIndex: 2, explanation: 'Approximately 90% of medieval Europeans were peasants who farmed the land.' },
          { id: 'q2', question: 'Why did medieval peasants commonly drink ale instead of water?', options: ['Water was expensive', 'Water was often contaminated and unsafe', 'Ale was cheaper to produce', 'Religious rules required it'], correctIndex: 1, explanation: 'Water sources were frequently contaminated. The brewing process for ale killed most pathogens, making it safer to drink.' },
        ],
      },
      {
        id: 'monks-knowledge',
        title: 'How Monks Saved Knowledge',
        imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
        pages: [
          {
            title: 'Scriptoria: The Knowledge Factories',
            imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
            body: 'When the Western Roman Empire collapsed in the 5th century, vast amounts of knowledge were at risk of being lost forever. It was largely Christian monasteries that preserved the intellectual heritage of the ancient world.\n\nEvery major monastery had a scriptorium — a room dedicated to copying manuscripts. Monks worked for hours each day, painstakingly transcribing ancient texts by hand. They copied not just religious works but classical literature, philosophy, science, and medicine.\n\nWithout the monks of Ireland, England, France, Germany, and Italy, we might never have heard of Cicero, Virgil, or Plato.',
          },
          {
            title: 'Monasteries as Centers of Learning',
            body: 'Monasteries were far more than just places of prayer. They ran hospitals for the sick, hospices for travelers, schools for local children, and agricultural estates that pioneered new farming techniques.\n\nBenedictine monks, following the Rule of Saint Benedict, divided their day between prayer, work, and study. This balance between intellectual and physical labor made monasteries unusually productive institutions.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What was a scriptorium?', options: ['A medieval prison', 'A room in a monastery for copying manuscripts', 'A type of musical instrument', 'A surgical tool'], correctIndex: 1, explanation: 'A scriptorium was a dedicated room in a monastery where monks copied manuscripts.' },
          { id: 'q2', question: 'Who was the Venerable Bede?', options: ['A French king', 'A Roman general', 'An English monk and scholar', 'A medieval pope'], correctIndex: 2, explanation: 'The Venerable Bede (672–735) was an English Benedictine monk considered the "Father of English History."' },
        ],
      },
      {
        id: 'flat-earth-myth',
        title: 'The Flat Earth Myth',
        imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
        pages: [
          {
            title: 'Did Medieval People Think Earth Was Flat?',
            imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
            body: 'One of the most persistent myths about the Middle Ages is that people believed the Earth was flat. This is almost entirely false. Educated medieval people — and even most ordinary people — knew perfectly well that the Earth was round.\n\nThe ancient Greeks had established the Earth\'s spherical shape through careful observation and reasoning. By around 240 BCE, Eratosthenes had even calculated the Earth\'s circumference with remarkable accuracy.',
          },
          {
            title: 'Where Did the Myth Come From?',
            body: 'The myth that medieval people believed in a flat Earth was largely invented in the 19th century — particularly by Washington Irving in his 1828 fictionalized biography of Christopher Columbus.\n\nColumbus\'s contemporaries did not think he would fall off the edge of the world. They thought (correctly) that he was underestimating the distance to Asia.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'Who calculated the Earth\'s circumference in ancient times with remarkable accuracy?', options: ['Aristotle', 'Plato', 'Eratosthenes', 'Ptolemy'], correctIndex: 2, explanation: 'Eratosthenes calculated the Earth\'s circumference around 240 BCE using the angle of shadows at different locations.' },
          { id: 'q2', question: 'What was Columbus\'s actual error regarding the Earth?', options: ['He thought it was flat', 'He underestimated the Earth\'s circumference', 'He thought Asia was to the east', 'He believed in sea monsters'], correctIndex: 1, explanation: 'Columbus underestimated the Earth\'s circumference, thinking it was much smaller than it is.' },
        ],
      },
    ],
  },
  {
    id: 'ancient-egypt',
    title: 'Mysteries of Ancient Egypt',
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80',
    topicId: 'history',
    rating: 4.9,
    estimatedMinutes: 12,
    lessons: [
      {
        id: 'pyramid-builders',
        title: 'Who Really Built the Pyramids?',
        imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80',
        pages: [
          {
            title: 'Not Slaves — Skilled Workers',
            imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80',
            body: 'The popular image of thousands of slaves being whipped as they drag massive stones under the Egyptian sun is wrong. Archaeological evidence discovered since the 1990s paints a very different picture.\n\nThe pyramid builders were skilled Egyptian workers — craftsmen, engineers, and laborers who were paid in food, beer, and medical care. Their village has been excavated near Giza: a well-planned settlement with bakeries, breweries, and even a hospital.',
          },
          {
            title: 'How Was It Done?',
            body: 'The logistics of building the Great Pyramid of Giza are staggering. About 2.3 million stone blocks, averaging 2.5 tons each, were quarried, transported, and precisely placed.\n\nModern experiments and computer modeling have shown that relatively small teams could move the stones using wooden sledges, water-lubricated sand, and ramps. A workforce of around 20,000–30,000 workers could have built the Great Pyramid over 20 years.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What have archaeologists found near Giza about pyramid builders?', options: ['A slave market', 'A workers\' village with bakeries and a hospital', 'A royal tomb', 'A military barracks'], correctIndex: 1, explanation: 'Archaeologists excavated a workers\' village near Giza showing the builders were skilled, well-fed workers, not slaves.' },
          { id: 'q2', question: 'What ancient document gives direct evidence about pyramid construction?', options: ['The Book of the Dead', 'The Rosetta Stone', 'The diary of overseer Merer', 'The Ebers Papyrus'], correctIndex: 2, explanation: 'The diary of Merer, discovered in 2013, describes the transportation of limestone blocks to Giza.' },
        ],
      },
      {
        id: 'cleopatra',
        title: 'Cleopatra: Beyond the Myth',
        imageUrl: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
        pages: [
          {
            title: 'The Real Cleopatra',
            imageUrl: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
            body: 'Cleopatra VII was far more remarkable than Hollywood suggests. She was not primarily known for her looks but for her extraordinary intelligence and political skill.\n\nCleopatra was the first ruler of her dynasty to actually learn the Egyptian language. She spoke nine languages in total. Previous Ptolemaic rulers had ruled Egypt for nearly 300 years without learning Egyptian.',
          },
          {
            title: 'A Political Mastermind',
            body: 'Cleopatra\'s relationships with Julius Caesar and Mark Antony were calculated political alliances to protect Egypt\'s independence from the growing Roman Republic.\n\nAfter Caesar\'s assassination, she allied with Mark Antony. Together they tried to create an Eastern empire. When their forces were defeated at the Battle of Actium in 31 BCE, Cleopatra chose death over the humiliation of being paraded through Rome as a captive.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'How many languages did Cleopatra reportedly speak?', options: ['Three', 'Five', 'Nine', 'Fifteen'], correctIndex: 2, explanation: 'Ancient sources indicate Cleopatra spoke nine languages, including Egyptian — the first of her dynasty to do so.' },
          { id: 'q2', question: 'What was the primary motivation behind Cleopatra\'s alliances?', options: ['Romance and love', 'Protecting Egypt\'s independence from Rome', 'Expanding Egyptian territory', 'Religious devotion'], correctIndex: 1, explanation: 'Cleopatra\'s alliances were politically calculated to protect Egypt from Roman domination.' },
        ],
      },
    ],
  },
  {
    id: 'ancient-philosophy',
    title: 'Great Thinkers of Antiquity',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    topicId: 'philosophy',
    rating: 4.7,
    estimatedMinutes: 10,
    lessons: [
      {
        id: 'socrates-method',
        title: 'Socrates and the Art of Questions',
        imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
        pages: [
          {
            title: 'The Man Who Knew Nothing',
            imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
            body: 'Socrates (470–399 BCE) is one of the most important figures in Western philosophy — and one of the most unusual. He wrote nothing. Everything we know about him comes from others, particularly his student Plato.\n\nSocrates claimed to know nothing — or rather, he claimed that his only wisdom was knowing that he knew nothing. When the Oracle at Delphi declared him the wisest man in Athens, he was puzzled.',
          },
          {
            title: 'The Socratic Method',
            body: 'Socrates developed a distinctive way of pursuing truth: through questions. Rather than lecturing, he would ask questions that exposed the contradictions and hidden assumptions in his interlocutor\'s beliefs.\n\nSocrates was eventually tried and executed by Athens for "corrupting the youth" and "impiety." He accepted the death sentence rather than flee or recant, arguing that an unexamined life is not worth living.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What did the Oracle at Delphi declare about Socrates?', options: ['That he was the most pious man', 'That he was the wisest man in Athens', 'That he would die young', 'That he should rule Athens'], correctIndex: 1, explanation: 'The Oracle declared Socrates the wisest man in Athens, which he investigated by questioning others.' },
          { id: 'q2', question: 'What was Socrates charged with at his trial?', options: ['Treason and murder', 'Corrupting the youth and impiety', 'Theft and fraud', 'Blasphemy and witchcraft'], correctIndex: 1, explanation: 'Socrates was charged with corrupting the youth and impiety, found guilty, and sentenced to death by hemlock.' },
        ],
      },
    ],
  },
  {
    id: 'cold-war-politics',
    title: 'The Cold War Explained',
    imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80',
    topicId: 'politics',
    rating: 4.6,
    estimatedMinutes: 10,
    lessons: [
      {
        id: 'iron-curtain',
        title: 'Behind the Iron Curtain',
        imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80',
        pages: [
          {
            title: 'A World Divided',
            imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80',
            body: 'The Cold War (1947–1991) was not a traditional war fought with armies on battlefields. It was a prolonged geopolitical, ideological, and economic struggle between two superpowers: the United States and the Soviet Union.\n\nThe term "Iron Curtain" was popularized by Winston Churchill in a 1946 speech. It described the division of Europe into Western liberal democracies and Eastern Soviet-dominated communist states.',
          },
          {
            title: 'Ideology and Proxy Wars',
            body: 'The Cold War was fundamentally a battle of ideas: American capitalism and liberal democracy versus Soviet communism. Both sides believed their system was the natural destiny of humanity.\n\nBecause direct war between nuclear-armed superpowers would risk mutual annihilation, the conflict played out through proxy wars in Korea, Vietnam, Angola, Afghanistan, and dozens of other countries.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'Who popularized the term "Iron Curtain" in a famous 1946 speech?', options: ['Harry Truman', 'Joseph Stalin', 'Winston Churchill', 'Charles de Gaulle'], correctIndex: 2, explanation: 'Winston Churchill used "Iron Curtain" in his 1946 "Sinews of Peace" speech in Fulton, Missouri.' },
          { id: 'q2', question: 'What does MAD stand for in Cold War strategy?', options: ['Military Armament Division', 'Mutual Alliance Defense', 'Mutually Assured Destruction', 'Military Advancement Doctrine'], correctIndex: 2, explanation: 'MAD stands for Mutually Assured Destruction — nuclear attack by one side would annihilate both, deterring first strikes.' },
        ],
      },
    ],
  },
  {
    id: 'world-cultures',
    title: 'Lost Civilizations',
    imageUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
    topicId: 'culture',
    rating: 4.8,
    estimatedMinutes: 10,
    lessons: [
      {
        id: 'maya-civilization',
        title: 'The Maya: Masters of Time',
        imageUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
        pages: [
          {
            title: 'A Civilization of Genius',
            imageUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
            body: 'The Maya civilization flourished for over two thousand years in Mesoamerica. At their height (roughly 250–900 CE), the Maya built some of the most sophisticated cities in the ancient world.\n\nMayan cities like Tikal, Palenque, and Chichen Itza featured towering pyramids, elaborate palaces, astronomic observatories, and complex water management systems. Tikal at its peak had a population of perhaps 100,000 people.',
          },
          {
            title: 'Mathematics, Astronomy & Collapse',
            body: 'The Maya made extraordinary advances in mathematics and astronomy. They independently developed the concept of zero — one of history\'s most important mathematical innovations. Their calendar system was so precise it rivals our own.\n\nThe "Classic Maya Collapse" between 800 and 1000 CE saw the abandonment of major southern lowland cities. But the Maya did not disappear — millions of Maya people live in Mexico and Central America today.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What major mathematical concept did the Maya independently develop?', options: ['Pi', 'The decimal system', 'Zero', 'The square root'], correctIndex: 2, explanation: 'The Maya independently developed the concept of zero, enabling complex calculations and a precise calendar.' },
          { id: 'q2', question: 'Approximately how large was the Maya city of Tikal at its peak?', options: ['10,000 people', '100,000 people', '500,000 people', '1 million people'], correctIndex: 1, explanation: 'Tikal at its peak had a population estimated at around 100,000 people.' },
        ],
      },
    ],
  },
];

export function getCourse(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

export function getLesson(courseId: string, lessonId: string): { course: Course; lesson: Lesson } | undefined {
  const course = getCourse(courseId);
  if (!course) return undefined;
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { course, lesson };
}

export function getCoursesByTopic(topicId: string): Course[] {
  return courses.filter(c => c.topicId === topicId);
}
