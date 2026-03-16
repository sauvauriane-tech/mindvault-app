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
    id: 'stoicism-epicureanism',
    title: 'Stoics vs. Epicureans: The Art of Living',
    imageUrl: 'https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=800&q=80',
    topicId: 'philosophy',
    rating: 4.9,
    estimatedMinutes: 16,
    lessons: [
      {
        id: 'stoicism',
        title: 'Stoicism: Mastering the Inner World',
        imageUrl: 'https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=800&q=80',
        pages: [
          {
            title: 'The Philosophy That Conquered Rome',
            imageUrl: 'https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=800&q=80',
            body: 'Stoicism was founded in Athens around 300 BCE by Zeno of Citium, who taught beneath a painted porch — a "stoa" — which gave the school its name. It became the dominant philosophy of the Roman Empire, embraced by slaves and emperors alike.\n\nThe Stoics held a radical idea: your emotions are not caused by events, but by your judgments about events. A storm is neither good nor bad — it is your interpretation that creates suffering. Change your interpretation and you change your experience of reality.\n\nThis is not passive resignation. The Stoics made a sharp distinction between what is "up to us" (our thoughts, desires, values) and what is "not up to us" (wealth, reputation, other people\'s actions, even death). Wisdom consists in focusing entirely on the former and accepting the latter with equanimity.',
          },
          {
            title: 'Marcus Aurelius: The Philosopher Emperor',
            body: 'Marcus Aurelius (121–180 CE) ruled the Roman Empire at its height — and spent his evenings writing philosophical notes to himself. These private meditations, never intended for publication, became the "Meditations," one of the most widely read philosophical texts in history.\n\n"You have power over your mind, not outside events. Realise this, and you will find strength." That sentence captures the Stoic project: transforming the inner world when the outer world is beyond your control.\n\nMarcus governed an empire beset by plague, barbarian invasions, and treachery — yet returned each evening to examine his own conduct, his impatience, his failures to live up to his ideals. The Meditations are the record of that relentless self-examination.\n\nEpictetus, born a slave, taught Stoicism with fierce clarity: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life." Freedom was not a legal status but a state of mind.',
          },
          {
            title: 'Stoicism Today',
            body: 'Stoicism has experienced a remarkable modern revival. Its principles underpin Cognitive Behavioural Therapy (CBT), the most widely used form of psychotherapy in the world. CBT\'s central insight — that distorted thoughts cause emotional distress — is essentially Stoic.\n\nContemporary Stoics practice "negative visualisation": deliberately imagining worst-case scenarios not to induce fear but to appreciate what you have and prepare for adversity. They practice the "view from above" — imagining your problems from a cosmic perspective to diminish their apparent importance.\n\nThe appeal is obvious. In a world of social media anxiety, information overload, and perpetual outrage, the Stoic invitation to focus on what you can control and release what you cannot feels urgently relevant.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What does the Stoic distinction between "up to us" and "not up to us" mean?', options: ['Rich and poor people have different duties', 'We control our thoughts but not external events', 'Some laws apply to citizens, others to slaves', 'Gods control fate, humans control nothing'], correctIndex: 1, explanation: 'Stoics held that our judgments and responses are "up to us" while external events, reputation, and even death are not — wisdom lies in focusing only on what we can control.' },
          { id: 'q2', question: 'Which modern therapy is most closely rooted in Stoic principles?', options: ['Psychoanalysis', 'Gestalt therapy', 'Cognitive Behavioural Therapy (CBT)', 'Humanistic therapy'], correctIndex: 2, explanation: 'CBT\'s core idea — that distorted thoughts, not events, cause emotional distress — directly mirrors Stoic philosophy.' },
          { id: 'q3', question: 'Who was Marcus Aurelius?', options: ['A Greek philosopher who founded Stoicism', 'A Roman emperor who wrote private Stoic meditations', 'A slave philosopher who taught Stoicism in Athens', 'A senator who codified Roman law'], correctIndex: 1, explanation: 'Marcus Aurelius was Roman emperor (161–180 CE) whose private notebooks, the "Meditations," became one of history\'s most read philosophical works.' },
        ],
      },
      {
        id: 'epicureanism',
        title: 'Epicureanism: Pleasure, Friendship & Death',
        imageUrl: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80',
        pages: [
          {
            title: 'The Most Misunderstood Philosophy',
            imageUrl: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80',
            body: 'Epicurus (341–270 BCE) taught that the goal of life is pleasure — which sounds like a recipe for hedonism. It is not. Epicurus\'s conception of pleasure was subtle and demanding: the highest pleasure is ataraxia, a serene, undisturbed tranquillity of mind.\n\nLuxury, ambition, and passion were, for Epicurus, sources not of pleasure but of anxiety. The truly pleasurable life required simple food, close friendships, philosophical conversation, and freedom from fear — especially fear of death and fear of the gods.\n\nEpicurus founded a community called the Garden outside Athens. Unusually for antiquity, women and slaves were admitted as equals. The community lived simply, ate bread and olives, and devoted themselves to philosophical inquiry and friendship.',
          },
          {
            title: 'On the Fear of Death',
            body: 'Epicurus\'s most famous argument addresses the fear of death with disarming logic: "Death is nothing to us. When we exist, death is not yet present. When death is present, then we do not exist."\n\nThis is not mere wordplay. It is a serious philosophical argument. Death cannot be experienced. You will never experience being dead — for experience requires a subject, and death eliminates the subject. Therefore death can cause no suffering, and should cause no fear.\n\nLucretius, the Roman Epicurean poet, extended this argument: you were non-existent for billions of years before your birth, and it caused you no distress. Death is simply a return to that prior non-existence.\n\nThe Epicurean project was therapeutic: philosophy as medicine for the soul. Its four remedies — the "tetrapharmakos" — were: do not fear god, do not fear death, what is good is easy to get, what is terrible is easy to endure.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What did Epicurus mean by "ataraxia"?', options: ['Intense physical pleasure', 'Serene tranquillity of mind', 'Victory over one\'s enemies', 'Devotion to the gods'], correctIndex: 1, explanation: 'Ataraxia — serene, undisturbed mental tranquillity — was Epicurus\'s highest form of pleasure, achievable through simplicity and friendship.' },
          { id: 'q2', question: 'What was Epicurus\'s core argument about death?', options: ['Death is a gateway to divine reward', 'Death is nature\'s greatest injustice', 'Death cannot be experienced, so it is nothing to fear', 'Death should be sought through philosophy'], correctIndex: 2, explanation: 'Epicurus argued that death cannot be experienced — when you exist, death is absent; when death arrives, you no longer exist to experience it.' },
        ],
      },
    ],
  },
  {
    id: 'ethics-morality',
    title: 'What Is Right? A History of Ethics',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    topicId: 'philosophy',
    rating: 4.8,
    estimatedMinutes: 18,
    lessons: [
      {
        id: 'kant-ethics',
        title: 'Kant: The Moral Law Within',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        pages: [
          {
            title: 'The Philosopher Who Never Left Königsberg',
            imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
            body: 'Immanuel Kant (1724–1804) spent his entire life in the Prussian city of Königsberg and was so punctually routine that neighbours set their watches by his afternoon walks. Yet his ideas detonated a revolution in philosophy that we are still living through.\n\nKant\'s central ethical insight was this: the moral worth of an action does not depend on its consequences but on whether it was done from duty — from respect for the moral law. An action done for self-interest, even one that happens to help others, has no genuine moral worth.\n\nHis "Categorical Imperative" — his supreme principle of morality — states: "Act only according to that maxim by which you can at the same time will that it should become a universal law." In other words: only act in ways you would be happy for everyone, everywhere, to act.',
          },
          {
            title: 'Kant\'s Second Formula: Treating People as Ends',
            body: 'Kant offered a second formulation of his Categorical Imperative that many find even more intuitive: "Act so that you treat humanity, both in your own person and that of another, always as an end and never merely as a means."\n\nThis principle — that people must never be used merely as tools for someone else\'s purposes — underlies much of modern human rights thinking. Slavery, exploitation, manipulation, deception — all violate this principle by treating persons as instruments.\n\nKant believed these principles were accessible to any rational being through pure reason alone, without appeal to religion, culture, or consequences. Morality was universal precisely because it was rational.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What does Kant\'s Categorical Imperative require?', options: ['Act to maximise happiness for the greatest number', 'Follow the commands of God above all', 'Act only according to principles you\'d want everyone to follow', 'Obey the laws of your society'], correctIndex: 2, explanation: 'Kant\'s Categorical Imperative: act only on principles you could consistently will to be universal laws for all rational beings.' },
          { id: 'q2', question: 'According to Kant, what gives an action genuine moral worth?', options: ['Its good consequences', 'Being done from duty and respect for the moral law', 'Social approval', 'The intentions of the majority'], correctIndex: 1, explanation: 'For Kant, only actions done from duty — not self-interest or sentiment — have genuine moral worth.' },
        ],
      },
      {
        id: 'utilitarianism',
        title: 'Utilitarianism: The Greatest Happiness',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        pages: [
          {
            title: 'Bentham and the Happiness Calculus',
            imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
            body: 'Jeremy Bentham (1748–1832) proposed a beautifully simple principle for ethics: an action is right if it produces the greatest happiness for the greatest number. Pleasure is good; pain is bad. Morality is a calculation.\n\nBentham even sketched a "felicific calculus" — a mathematical procedure for measuring units of pleasure and pain to determine the right course of action. Every person\'s happiness counts equally. The king\'s pleasure counts no more than the beggar\'s.\n\nThis was radical. In a society of rigid hierarchy, the claim that every person\'s wellbeing counts equally had revolutionary implications for criminal justice, animal welfare, poverty relief, and political reform.',
          },
          {
            title: 'Mill and Higher Pleasures',
            body: 'John Stuart Mill (1806–1873) refined Bentham\'s utilitarianism to address an obvious objection: if only quantity of pleasure matters, is it better to be a satisfied pig than a dissatisfied philosopher?\n\nMill insisted on a distinction between "higher" and "lower" pleasures. The pleasures of the intellect, the moral sentiments, and the imagination are qualitatively superior to mere bodily satisfaction. "It is better to be Socrates dissatisfied than a fool satisfied."\n\nMill also wrote "On Liberty" (1859), arguing that the only legitimate reason to restrict anyone\'s freedom is to prevent harm to others. His "harm principle" remains a cornerstone of liberal political philosophy and continues to shape debates about free speech, drug legislation, and personal autonomy.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What is the core principle of Utilitarianism?', options: ['Obey natural law above all else', 'The greatest happiness for the greatest number', 'Virtue is its own reward', 'The strong have the right to rule'], correctIndex: 1, explanation: 'Utilitarianism holds that the morally right action is the one that produces the greatest total happiness for the greatest number of people.' },
          { id: 'q2', question: 'What is Mill\'s "harm principle"?', options: ['Pain is always harmful and must be avoided', 'Freedom should only be restricted to prevent harm to others', 'Governments must prevent all suffering', 'Pleasure causes harm and should be regulated'], correctIndex: 1, explanation: 'Mill\'s harm principle states that individual freedom should only be restricted to prevent harm to others — a foundation of modern liberalism.' },
        ],
      },
      {
        id: 'existentialism',
        title: 'Existentialism: Freedom and Anxiety',
        imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
        pages: [
          {
            title: 'Existence Before Essence',
            imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
            body: 'Existentialism emerged in the 19th and 20th centuries as a response to the collapse of traditional religious certainties and the horrors of modern war. Its central claim is disorienting: there is no pre-given human nature or purpose. Existence comes before essence.\n\nJean-Paul Sartre (1905–1980) put it starkly: "We are condemned to be free." There is no script, no nature, no God to dictate who you should be. You must create yourself through your choices — and you bear full responsibility for what you become.\n\nThis is liberating and terrifying in equal measure. The "existential anxiety" (Angst) that pervades the tradition is not a psychological disorder but a rational response to the vertigo of absolute freedom.',
          },
          {
            title: 'Camus and the Absurd',
            body: 'Albert Camus (1913–1960) is often grouped with existentialists, though he rejected the label. His concept of the "absurd" captures something existentialists shared: the collision between the human hunger for meaning and the universe\'s total silence on the matter.\n\nCamus\'s response was neither despair nor false comfort but rebellion: we must imagine Sisyphus — condemned to roll his boulder up a hill forever — as happy. To embrace life fully, without illusions, in the face of its absurdity, is the authentic human response.\n\nSimone de Beauvoir extended existentialism into feminism. In "The Second Sex" (1949) she argued that women have been defined as "Other" — as the deviation from a male norm — rather than as free subjects. "One is not born, but rather becomes, a woman." Social existence, not biology, determines gender roles.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What does Sartre mean by "existence before essence"?', options: ['Physical existence is more real than abstract ideas', 'There is no fixed human nature — we define ourselves through choices', 'God creates our essence before we are born', 'Animals exist before they develop a soul'], correctIndex: 1, explanation: 'Sartre\'s "existence before essence" means humans have no pre-given nature or purpose — we create ourselves through our choices and actions.' },
          { id: 'q2', question: 'What is Camus\'s concept of "the absurd"?', options: ['The universe is designed to frustrate human ambition', 'The collision between our hunger for meaning and the universe\'s silence', 'Life is so bizarre that it must be humorous', 'God is unknowable and therefore absurd'], correctIndex: 1, explanation: 'The absurd, for Camus, is the confrontation between the human need for meaning and the universe\'s complete indifference to that need.' },
          { id: 'q3', question: 'What was Simone de Beauvoir\'s famous claim about women?', options: ['Women are naturally more empathetic than men', 'Women have been historically oppressed by religion', '"One is not born, but becomes, a woman"', 'Women should embrace existential freedom by rejecting marriage'], correctIndex: 2, explanation: 'De Beauvoir argued that "femininity" is not biological destiny but a social construction imposed on women — a founding claim of modern feminism.' },
        ],
      },
    ],
  },
  {
    id: 'mind-reality',
    title: 'Mind, Knowledge & Reality',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    topicId: 'philosophy',
    rating: 4.6,
    estimatedMinutes: 14,
    lessons: [
      {
        id: 'descartes-doubt',
        title: 'Descartes: I Think, Therefore I Am',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        pages: [
          {
            title: 'The Method of Radical Doubt',
            imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
            body: 'René Descartes (1596–1650) set out to find a foundation for knowledge that was utterly certain — immune to any possible doubt. His method was radical: doubt everything that can possibly be doubted, and see what survives.\n\nDescartes doubted his senses (they sometimes deceive us). He doubted the external world (perhaps he was dreaming). He even entertained the hypothesis of a supremely powerful "evil demon" who might be deceiving him about everything — including mathematics.\n\nAnd yet one thing survived. The very act of doubting required a doubter. Even if he was being deceived about everything, the deception required that he existed to be deceived. "Cogito ergo sum" — I think, therefore I am — became the bedrock of his philosophy.',
          },
          {
            title: 'The Mind-Body Problem',
            body: 'Having established the certainty of his own existence as a thinking thing, Descartes faced a new problem. He conceived of mind and body as entirely different substances: mind is unextended and immaterial; body is extended and material. But if they are so different, how do they interact?\n\nHow does a thought — a purely mental event — cause your arm to move? How does a physical injury cause a felt pain? This "mind-body problem" remains one of philosophy\'s most contested puzzles. Neuroscientists can describe every firing neuron, yet the subjective "what it\'s like" — consciousness itself — seems to escape physical explanation.\n\nDescartes\'s framing of this problem has shaped philosophy, psychology, and neuroscience ever since. "Cartesian dualism" remains the folk psychological view of most people, even those who have never heard of Descartes.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What survived Descartes\'s method of radical doubt?', options: ['The existence of God', 'The laws of mathematics', 'His own existence as a thinking being', 'The reality of the physical world'], correctIndex: 2, explanation: '"Cogito ergo sum" — even radical doubt proves you exist, since doubting requires a doubter.' },
          { id: 'q2', question: 'What is "Cartesian dualism"?', options: ['The view that there are two Gods', 'The idea that mind and body are fundamentally different substances', 'A theory that truth has two sides', 'The belief that science and religion are compatible'], correctIndex: 1, explanation: 'Cartesian dualism holds that mind (immaterial, unextended) and body (material, extended) are two entirely distinct substances — creating the mind-body problem.' },
        ],
      },
      {
        id: 'plato-reality',
        title: 'Plato: The World of Forms',
        imageUrl: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
        pages: [
          {
            title: 'The Cave and the Shadow World',
            imageUrl: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
            body: 'Plato (428–348 BCE) believed the world we see is not the real world. In his famous "Allegory of the Cave," he describes prisoners chained in a cave, seeing only shadows on the wall — and mistaking those shadows for reality.\n\nPhilosophy, for Plato, was the process of turning away from the shadows and emerging into the sunlight — from appearance to reality, from opinion to knowledge. But most people are so comfortable with their shadows that they resist this liberation, and may even kill those who attempt it (as Athens killed Socrates).\n\nBehind the visible world, Plato argued, lies a realm of perfect, eternal "Forms" — abstract templates of which physical things are mere imperfect copies. There is a perfect Form of Beauty, of Justice, of the Good. Individual beautiful things are beautiful only by participating in the Form of Beauty.',
          },
          {
            title: 'Philosophy as a Way of Life',
            body: 'Plato founded the Academy in Athens — perhaps the first institution of higher education in the Western world. It operated for over 900 years, until the Emperor Justinian closed it in 529 CE.\n\nPlato\'s "Republic" is one of the most ambitious and controversial books in the Western tradition. It asks: what is justice? What is the ideal state? Plato\'s answer was philosopher-kings — those who have escaped the cave and seen reality should rule, whether they want to or not.\n\nThe philosopher Alfred North Whitehead called all of Western philosophy "footnotes to Plato." This is an exaggeration — but it captures something true. Almost every major philosophical question — the nature of knowledge, reality, justice, beauty, love — was first systematically explored by Plato, and almost every subsequent philosopher has had to take a position relative to his answers.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What does Plato\'s Allegory of the Cave represent?', options: ['The dangers of underground living in ancient Greece', 'The transition from ignorance and appearance to knowledge and reality', 'The role of agriculture in ancient Athenian society', 'The fear of darkness common to all humans'], correctIndex: 1, explanation: 'The Cave allegory represents the philosophical journey from mistaking appearances for reality (shadows) to encountering truth (sunlight).' },
          { id: 'q2', question: 'What are Plato\'s "Forms"?', options: ['Mathematical equations describing nature', 'Perfect, eternal, abstract templates of which physical things are imperfect copies', 'The constitutions of ideal city-states', 'Written laws of the Athenian democracy'], correctIndex: 1, explanation: 'For Plato, Forms are perfect, eternal, non-physical realities — the true objects of knowledge — of which visible things are mere imperfect copies.' },
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
  // ── CULTURE ──────────────────────────────────────────────────────────────
  {
    id: 'art-movements',
    title: 'Art That Changed the World',
    imageUrl: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&q=80',
    topicId: 'culture',
    rating: 4.7,
    estimatedMinutes: 14,
    lessons: [
      {
        id: 'impressionism',
        title: 'Impressionism: Painting Light',
        imageUrl: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&q=80',
        pages: [
          {
            title: 'A Scandal in Paris',
            imageUrl: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&q=80',
            body: 'In 1874, a group of French painters held their own exhibition after being repeatedly rejected by the official Paris Salon. Critics mocked them. One reviewer sarcastically named the movement after Monet\'s painting "Impression, Sunrise" — and the label stuck.\n\nImpressionism broke every rule of academic painting. Instead of smooth, invisible brushstrokes, Impressionists left visible dabs of paint. Instead of studio-lit scenes, they painted outdoors (en plein air) to capture fleeting light. Instead of mythological subjects, they painted cafés, railway stations, and dancers.',
          },
          {
            title: 'The Artists Who Changed Everything',
            body: 'Claude Monet obsessively painted the same subjects — haystacks, Rouen Cathedral, water lilies — at different times of day to study how light transformed them. Edgar Degas brought an almost photographic dynamism to ballet rehearsals and racetrack scenes. Pierre-Auguste Renoir captured the warmth and pleasure of bourgeois leisure.\n\nImpressionism opened the door for every modern art movement that followed. Without Impressionism, there is no Post-Impressionism, no Cubism, no abstraction. The "failed" 1874 exhibition was one of the most consequential events in cultural history.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'Where did the name "Impressionism" come from?', options: ['A government arts decree', 'A mocking critic reviewing Monet\'s painting', 'Monet chose it himself', 'It was the gallery\'s official name'], correctIndex: 1, explanation: 'A critic mockingly used "Impressionism" after Monet\'s "Impression, Sunrise" — the artists adopted it defiantly.' },
          { id: 'q2', question: 'What does "en plein air" mean?', options: ['In the studio', 'At night', 'Outdoors', 'By artificial light'], correctIndex: 2, explanation: '"En plein air" means painting outdoors to capture natural, changing light — a key Impressionist practice.' },
        ],
      },
      {
        id: 'renaissance-art',
        title: 'The Renaissance: Rebirth of Beauty',
        imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
        pages: [
          {
            title: 'Florence and the Birth of a New Vision',
            imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
            body: 'The Renaissance ("rebirth") began in 14th-century Florence and spread across Europe over the next two centuries. It was a revolution in how Europeans understood themselves, the world, and beauty.\n\nRenaissance artists rediscovered the art and philosophy of ancient Greece and Rome. They developed linear perspective — the mathematical system for depicting three-dimensional space on a flat surface — which fundamentally changed painting forever.',
          },
          {
            title: 'The Giants of the Renaissance',
            body: 'Leonardo da Vinci was the ultimate "Renaissance man" — painter, sculptor, architect, scientist, and engineer. His notebooks are filled with designs for flying machines, anatomical studies, and hydraulic systems centuries ahead of their time.\n\nMichelangelo spent four back-breaking years painting the Sistine Chapel ceiling (1508–1512), creating one of humanity\'s greatest artistic achievements. Raphael\'s "School of Athens" depicted ancient philosophers in a harmonious composition that became a template for classical grandeur.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What mathematical innovation did Renaissance artists develop for painting?', options: ['Colour theory', 'Linear perspective', 'The golden ratio', 'Chiaroscuro'], correctIndex: 1, explanation: 'Linear perspective let artists depict 3D space convincingly on a flat surface, transforming Western painting.' },
          { id: 'q2', question: 'How many years did Michelangelo spend painting the Sistine Chapel ceiling?', options: ['One year', 'Two years', 'Four years', 'Ten years'], correctIndex: 2, explanation: 'Michelangelo painted the Sistine Chapel ceiling from 1508 to 1512 — approximately four years.' },
        ],
      },
    ],
  },
  {
    id: 'music-revolutions',
    title: 'How Music Shaped History',
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    topicId: 'culture',
    rating: 4.6,
    estimatedMinutes: 12,
    lessons: [
      {
        id: 'beethoven-revolution',
        title: 'Beethoven and the Heroic Style',
        imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
        pages: [
          {
            title: 'The Deaf Composer Who Heard Everything',
            imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
            body: 'Ludwig van Beethoven (1770–1827) bridged the Classical and Romantic eras — and in doing so, redefined what music could express. By his late twenties, he was going deaf. By his forties, he was completely deaf.\n\nYet he continued to compose. His Ninth Symphony — its finale featuring the "Ode to Joy" — was premiered when Beethoven could hear nothing. Legend has it he had to be turned around to see the audience\'s applause.',
          },
          {
            title: 'Music as Revolution',
            body: 'Beethoven\'s "Eroica" Symphony (No. 3, 1803) was originally dedicated to Napoleon. When Napoleon declared himself Emperor, Beethoven furiously scratched out the dedication — he had believed in the revolutionary ideals, not the man.\n\nBeethoven\'s music was unprecedented in its emotional range and dramatic intensity. He turned the symphony into a vehicle for grand philosophical statements. Every major Romantic composer who followed — Brahms, Wagner, Mahler — worked in his shadow.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What happened to Beethoven\'s hearing by his forties?', options: ['It improved', 'It was mildly affected', 'He became completely deaf', 'He had selective hearing loss'], correctIndex: 2, explanation: 'Beethoven became completely deaf by his mid-forties, yet continued composing masterworks including the Ninth Symphony.' },
          { id: 'q2', question: 'Who was Beethoven\'s "Eroica" symphony originally dedicated to?', options: ['The King of Austria', 'Napoleon Bonaparte', 'Friedrich Schiller', 'Franz Joseph Haydn'], correctIndex: 1, explanation: 'Beethoven dedicated the "Eroica" to Napoleon, then angrily withdrew the dedication when Napoleon crowned himself Emperor.' },
        ],
      },
      {
        id: 'jazz-culture',
        title: 'Jazz: America\'s Classical Music',
        imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
        pages: [
          {
            title: 'Born in New Orleans',
            imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
            body: 'Jazz emerged in New Orleans around the turn of the 20th century, blending African American musical traditions — blues, ragtime, gospel — with European harmonies. It was the sound of a city that was uniquely cosmopolitan: French, Spanish, African, Creole cultures mixing in ways found nowhere else in America.\n\nWhat made jazz revolutionary was improvisation. Within a shared structure, musicians invented new melodies in real time. It was composition and performance merged into one spontaneous act.',
          },
          {
            title: 'Jazz Goes Global',
            body: 'The 1920s became the "Jazz Age." Jazz spread from New Orleans to Chicago to New York — and then to Paris, London, and beyond. For Europeans, jazz felt thrillingly modern and subversive.\n\nLouis Armstrong transformed jazz from a collective ensemble art into a soloist\'s medium. Miles Davis reinvented it multiple times — cool jazz, modal jazz, fusion — across a career spanning five decades. Jazz became a lens through which the 20th century\'s anxieties and aspirations were expressed.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What city is considered the birthplace of jazz?', options: ['Chicago', 'New York', 'New Orleans', 'Memphis'], correctIndex: 2, explanation: 'Jazz was born in New Orleans around 1900, shaped by the city\'s unique cultural mix of African, French, Spanish and Creole influences.' },
          { id: 'q2', question: 'What musical innovation made jazz revolutionary?', options: ['The use of electric instruments', 'Real-time improvisation', 'Orchestral arrangements', 'Written musical scores'], correctIndex: 1, explanation: 'Improvisation — composing melodies spontaneously during performance within a shared structure — was jazz\'s defining innovation.' },
        ],
      },
    ],
  },
  // ── POLITICS ─────────────────────────────────────────────────────────────
  {
    id: 'democracy-origins',
    title: 'The Origins of Democracy',
    imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
    topicId: 'politics',
    rating: 4.8,
    estimatedMinutes: 12,
    lessons: [
      {
        id: 'athens-democracy',
        title: 'Athens: The First Democracy',
        imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
        pages: [
          {
            title: 'The World\'s First Experiment',
            imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
            body: 'Around 508 BCE, the Athenian statesman Cleisthenes introduced a radical new system of government: demokratia — "rule by the people." For the first time in recorded history, ordinary citizens would have a direct voice in how their city was run.\n\nThe Athenian Assembly (Ekklesia) met regularly on a hillside called the Pnyx. Any adult male citizen could attend, speak, and vote. Decisions on war, treaties, laws, and finances were made by a show of hands. At its height, perhaps 6,000 citizens regularly participated.',
          },
          {
            title: 'The Limits and Legacies',
            body: 'Athenian democracy had profound limitations. Women, slaves, and foreigners — the majority of Athens\'s population — were excluded. "The people" meant a privileged minority.\n\nYet the Athenian experiment planted ideas that would not die: that ordinary people could govern themselves, that rulers should be accountable, that free debate is the foundation of good decisions. These ideas resurfaced in the Roman Republic, the Magna Carta, the English Parliament, the American Revolution, and the French Revolution.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What does "demokratia" mean?', options: ['Rule by the wise', 'Rule by the people', 'Rule by the wealthy', 'Rule by the strongest'], correctIndex: 1, explanation: '"Demokratia" combines "demos" (people) and "kratos" (power/rule) — literally "rule by the people."' },
          { id: 'q2', question: 'Who introduced democracy to Athens around 508 BCE?', options: ['Pericles', 'Solon', 'Cleisthenes', 'Themistocles'], correctIndex: 2, explanation: 'Cleisthenes introduced democratic reforms around 508 BCE, earning the title "Father of Athenian Democracy."' },
        ],
      },
      {
        id: 'magna-carta',
        title: 'Magna Carta: The Law Above Kings',
        imageUrl: 'https://images.unsplash.com/photo-1568819317551-f8b8b4e7c9f2?w=800&q=80',
        pages: [
          {
            title: 'A King Forced to Sign',
            imageUrl: 'https://images.unsplash.com/photo-1568819317551-f8b8b4e7c9f2?w=800&q=80',
            body: 'In June 1215, English barons who had grown fed up with the arbitrary tyranny of King John forced him to a meadow at Runnymede, beside the River Thames, and made him set his seal on a document: the Magna Carta (Great Charter).\n\nFor the first time, an English monarch was forced to acknowledge that his power had limits. The King was subject to the law, not above it. Key clauses guaranteed that no free man could be imprisoned or punished except by the lawful judgment of his peers.',
          },
          {
            title: 'Why It Still Matters',
            body: 'Most of the Magna Carta\'s 63 clauses dealt with feudal grievances of little lasting importance. But a handful of principles proved immortal: due process, the rule of law, and the idea that government requires consent.\n\nThe document was reinterpreted in every subsequent era of constitutional struggle. When American colonists declared independence from Britain, they cited Magna Carta principles. The 1948 Universal Declaration of Human Rights echoes its spirit. Today it is considered the cornerstone of constitutional government in the English-speaking world.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'Where was the Magna Carta signed?', options: ['Westminster Abbey', 'The Tower of London', 'Runnymede meadow', 'Canterbury Cathedral'], correctIndex: 2, explanation: 'King John sealed the Magna Carta at Runnymede, a meadow beside the Thames, in June 1215.' },
          { id: 'q2', question: 'What was the Magna Carta\'s most enduring political principle?', options: ['Kings have divine rights', 'The rule of law applies even to the King', 'Parliament controls taxation', 'Bishops have veto power'], correctIndex: 1, explanation: 'The Magna Carta established that the King is subject to the law — a cornerstone of constitutional government.' },
        ],
      },
    ],
  },
  {
    id: 'revolutions-power',
    title: 'Revolutions & the Seizure of Power',
    imageUrl: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80',
    topicId: 'politics',
    rating: 4.7,
    estimatedMinutes: 14,
    lessons: [
      {
        id: 'french-revolution',
        title: 'The French Revolution',
        imageUrl: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80',
        pages: [
          {
            title: 'Liberty, Equality, Fraternity — and Terror',
            imageUrl: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80',
            body: 'The French Revolution (1789–1799) began with bread riots and a storming of the Bastille prison and ended with Napoleon seizing power. In between, it executed a king and queen, launched a Reign of Terror that killed tens of thousands, abolished feudalism, and proclaimed the rights of man.\n\nFrance in 1789 was a society on the edge. The state was bankrupt from wars. Harvests had failed. The nobility and clergy paid almost no taxes while ordinary people starved. When Louis XVI called the Estates-General, the Third Estate (commoners) refused to play by the old rules.',
          },
          {
            title: 'The Revolution Devours Its Own',
            body: 'The Reign of Terror (1793–1794) showed how revolutions can turn monstrous. Maximilien Robespierre and the Committee of Public Safety guillotined not just aristocrats and priests but fellow revolutionaries — anyone suspected of insufficient zeal.\n\nRobespierre himself was eventually arrested and guillotined. The Revolution\'s ideals — liberty, equality, fraternity — survived in the long run, spreading across Europe and the Americas. But the path was soaked in blood.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'What was the Bastille before it was stormed in 1789?', options: ['A royal palace', 'A prison and fortress', 'A cathedral', 'A tax collection office'], correctIndex: 1, explanation: 'The Bastille was a fortress and prison — a symbol of royal tyranny. Its storming on 14 July 1789 became the defining moment of the Revolution.' },
          { id: 'q2', question: 'Who led the Reign of Terror?', options: ['Napoleon Bonaparte', 'Louis XVI', 'Maximilien Robespierre', 'Marie Antoinette'], correctIndex: 2, explanation: 'Robespierre and the Committee of Public Safety directed the Terror, executing thousands before Robespierre himself was guillotined in 1794.' },
        ],
      },
      {
        id: 'propaganda-power',
        title: 'Propaganda: The Weapon of Regimes',
        imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
        pages: [
          {
            title: 'How Governments Shape Minds',
            imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
            body: 'Propaganda is as old as politics. Roman emperors had their image stamped on every coin. Medieval kings used religious pageantry to project sacred authority. But the 20th century industrialised propaganda on a terrifying scale.\n\nJoseph Goebbels, Nazi Germany\'s Minister of Propaganda, understood that controlling information meant controlling reality. Radio, cinema, rallies, posters, textbooks — every medium was weaponised. The aim was not simply to inform but to overwhelm rational thought with emotional intensity.',
          },
          {
            title: 'Propaganda in the Modern World',
            body: 'Soviet propaganda used heroic imagery — the selfless worker, the brave soldier — to project an idealised vision of communist society far removed from the reality of gulags and famines.\n\nModern propaganda has moved online. Social media algorithms amplify outrage and division. "Deepfake" technology can put words in anyone\'s mouth. The mechanisms are new but the goal is ancient: to make people see what power wants them to see, and to distrust what power wants them to doubt.',
          },
        ],
        quiz: [
          { id: 'q1', question: 'Who was Nazi Germany\'s Minister of Propaganda?', options: ['Heinrich Himmler', 'Herman Göring', 'Joseph Goebbels', 'Rudolf Hess'], correctIndex: 2, explanation: 'Joseph Goebbels served as Nazi Germany\'s Minister of Propaganda from 1933 to 1945.' },
          { id: 'q2', question: 'What ancient medium did Roman emperors use for propaganda?', options: ['Scrolls distributed to citizens', 'Their image on coins', 'State-run theatres', 'Public speeches only'], correctIndex: 1, explanation: 'Roman emperors stamped their likeness and titles on coins — an omnipresent propaganda tool reaching every corner of the empire.' },
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
