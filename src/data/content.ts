export type Topic = 'History' | 'Culture' | 'Politics' | 'Philosophy';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonPage {
  title: string;
  image?: string;
  body: string;
}

export interface Lesson {
  id: string;
  title: string;
  thumbnail: string;
  pages: LessonPage[];
  quiz: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  topic: Topic;
  coverImage: string;
  rating: number;
  estimatedMinutes: number;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'medieval-europe',
    title: 'Medieval Europe',
    topic: 'History',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    rating: 4.8,
    estimatedMinutes: 25,
    lessons: [
      {
        id: 'real-middle-ages',
        title: 'The Real Middle Ages',
        thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80',
        pages: [
          {
            title: 'Rethinking the Middle Ages',
            image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80',
            body: `The Middle Ages — roughly 500 to 1500 CE — are often painted as a dark, stagnant interlude between the glory of ancient Rome and the brilliance of the Renaissance. The reality is far more fascinating.\n\nThis era witnessed the construction of soaring Gothic cathedrals, the birth of universities, advances in agriculture that fed growing cities, and a rich tapestry of trade across continents. Far from being "dark," it was a period of remarkable creativity and complexity.`,
          },
          {
            title: 'A World of Contrasts',
            body: `Medieval society was deeply hierarchical but also surprisingly dynamic. At the top sat kings and nobles; below them, clergy; then merchants; and finally, peasants who formed the backbone of the economy.\n\nYet social mobility existed. A talented merchant's son could enter the Church and rise to become a bishop. A skilled craftsman could join a guild and gain civic influence. The rigid picture we often imagine was more fluid than textbooks suggest.`,
          },
          {
            title: 'The Legacy Lives On',
            body: `Many institutions we take for granted today have medieval roots. Universities at Bologna, Oxford, and Paris were founded in the 11th and 12th centuries. Parliamentary bodies emerged in England and elsewhere. Common law took shape. Even the concept of individual rights began its long journey.\n\nThe Middle Ages were not a pause in progress — they were its foundation.`,
          },
        ],
        quiz: [
          {
            question: 'When did the Middle Ages roughly span?',
            options: ['200–700 CE', '500–1500 CE', '1000–1600 CE', '300–900 CE'],
            correctIndex: 1,
            explanation: 'The Middle Ages span from approximately 500 CE (fall of the Western Roman Empire) to 1500 CE (the start of the Renaissance and Age of Exploration).',
          },
          {
            question: 'Which of these was NOT a feature of the Middle Ages?',
            options: ['Construction of Gothic cathedrals', 'Birth of universities', 'Complete social immobility', 'Growth of trade routes'],
            correctIndex: 2,
            explanation: 'While society was hierarchical, social mobility did exist — through the Church, guilds, and trade. Complete immobility is a myth.',
          },
          {
            question: 'Where was one of the first universities founded?',
            options: ['Florence', 'Bologna', 'Athens', 'Constantinople'],
            correctIndex: 1,
            explanation: 'The University of Bologna, founded in 1088, is considered the oldest university in the Western world.',
          },
        ],
      },
      {
        id: 'peasant-life',
        title: 'Peasant Life',
        thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80',
        pages: [
          {
            title: 'The Backbone of Medieval Society',
            image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
            body: `Peasants made up roughly 85–90% of the medieval European population. Their lives revolved around the agricultural calendar — plowing in spring, harvesting in autumn, surviving winter.\n\nMost peasants were serfs, legally bound to the land of a lord. They owed labor — typically three days a week — in exchange for protection and the right to farm their own strips of land.`,
          },
          {
            title: 'Daily Life and Resilience',
            body: `Peasant homes were simple: a single room of timber and thatch, shared with livestock during winter for warmth. Meals were humble — bread, pottage (a thick vegetable stew), and the occasional piece of salted meat.\n\nYet peasant communities were not without joy. Village festivals, saints' days, and communal harvests created bonds of solidarity. Folklore, music, and storytelling flourished after dark.`,
          },
        ],
        quiz: [
          {
            question: 'What percentage of medieval Europeans were peasants?',
            options: ['20–30%', '50–60%', '85–90%', '95–99%'],
            correctIndex: 2,
            explanation: 'Peasants formed about 85–90% of the population, making them by far the largest social class.',
          },
          {
            question: 'What was "pottage"?',
            options: ['A type of pottery', 'A thick vegetable stew', 'A grain storage building', 'A peasant festival'],
            correctIndex: 1,
            explanation: 'Pottage was a staple peasant food — a thick soup or stew made from vegetables, grains, and sometimes scraps of meat.',
          },
        ],
      },
      {
        id: 'monks-saved-knowledge',
        title: 'How Monks Saved Knowledge',
        thumbnail: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
        pages: [
          {
            title: 'The Great Preservation',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
            body: `When the Roman Empire collapsed, its vast libraries faced destruction, neglect, and looting. Much ancient knowledge — Greek philosophy, Roman law, medical treatises — teetered on the edge of oblivion.\n\nInto this void stepped monastic communities. Benedictine monks, following Saint Benedict's Rule, made copying manuscripts a sacred duty. Scriptoria — dedicated writing rooms — buzzed with the scratch of quill on vellum.`,
          },
          {
            title: 'Illuminated Manuscripts',
            body: `Monks didn't merely copy — they created. Illuminated manuscripts like the Book of Kells are masterpieces of art and devotion, adorned with gold leaf, vivid pigments, and intricate knotwork.\n\nBeyond the Bible, monks preserved works of Aristotle, Cicero, Virgil, and medical texts of Galen. Without monastic libraries, vast swaths of classical learning would have been lost forever.`,
          },
        ],
        quiz: [
          {
            question: 'What was a scriptorium?',
            options: ['A type of medieval weapon', 'A room for copying manuscripts', 'A musical instrument', 'A monastic garden'],
            correctIndex: 1,
            explanation: 'A scriptorium was a dedicated room in a monastery where monks copied manuscripts — a crucial task for preserving knowledge.',
          },
          {
            question: 'Which famous illustrated manuscript was created by monks?',
            options: ['The Magna Carta', 'The Book of Kells', 'The Domesday Book', 'The Canterbury Tales'],
            correctIndex: 1,
            explanation: 'The Book of Kells, created around 800 CE by Celtic monks, is one of the most celebrated illuminated manuscripts in the world.',
          },
        ],
      },
      {
        id: 'flat-earth-myth',
        title: 'The Flat Earth Myth',
        thumbnail: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80',
        pages: [
          {
            title: 'Did Medieval People Think the Earth Was Flat?',
            image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80',
            body: `One of the most persistent myths about the Middle Ages is that educated people believed the Earth was flat. This is simply not true.\n\nAncient Greeks had already proven the Earth was spherical. Eratosthenes calculated its circumference with impressive accuracy around 240 BCE. Medieval scholars inherited and built upon this knowledge — they knew perfectly well that the Earth was a sphere.`,
          },
          {
            title: 'Where Did the Myth Come From?',
            body: `The idea that medieval people believed in a flat Earth was largely invented in the 19th century — particularly by Washington Irving in his fictionalized biography of Columbus (1828), which falsely depicted scholars opposing Columbus on flat-Earth grounds.\n\nIn reality, Columbus's critics were right that his distance calculations were wrong. He was lucky that the Americas happened to be in the way, otherwise his crew would have run out of supplies.`,
          },
        ],
        quiz: [
          {
            question: 'Who calculated the Earth\'s circumference around 240 BCE?',
            options: ['Aristotle', 'Ptolemy', 'Eratosthenes', 'Plato'],
            correctIndex: 2,
            explanation: 'Eratosthenes used shadows and geometry to calculate the Earth\'s circumference with remarkable accuracy — knowledge that was well-known in medieval universities.',
          },
          {
            question: 'Who popularized the myth that medieval people believed in a flat Earth?',
            options: ['Christopher Columbus', 'Washington Irving', 'Galileo Galilei', 'Thomas Aquinas'],
            correctIndex: 1,
            explanation: 'Washington Irving\'s 1828 fictionalized biography of Columbus invented the story of flat-Earth opponents — a myth that stuck in popular culture.',
          },
        ],
      },
    ],
  },
  {
    id: 'ancient-egypt',
    title: 'Mysteries of Ancient Egypt',
    topic: 'History',
    coverImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
    rating: 4.9,
    estimatedMinutes: 15,
    lessons: [
      {
        id: 'who-built-pyramids',
        title: 'Who Built the Pyramids?',
        thumbnail: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80',
        pages: [
          {
            title: 'Not Slaves — Skilled Workers',
            image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
            body: `For centuries, the popular image of pyramid builders was one of enslaved masses whipped under the desert sun. Archaeological evidence tells a very different story.\n\nExcavations near Giza have uncovered a workers' village — complete with bakeries, breweries, and a medical facility. The workers who built the Great Pyramid were paid laborers, well-fed and cared for, who received medical treatment and were buried with honor near the pharaoh they served.`,
          },
          {
            title: 'Engineering Mastery',
            body: `The Great Pyramid of Giza contains over 2.3 million stone blocks, some weighing up to 80 tons. Ancient Egyptians moved these without wheels or iron tools — using sledges, water lubrication, ramps, and organized labor teams.\n\nRecent discoveries of a papyrus diary — the oldest ever found — describes in detail how workers ferried limestone blocks by boat along a specially constructed canal system. The logistics were staggering in their sophistication.`,
          },
        ],
        quiz: [
          {
            question: 'How were pyramid workers treated according to archaeological evidence?',
            options: ['They were enslaved', 'They were paid and received medical care', 'They were prisoners of war', 'They were volunteers'],
            correctIndex: 1,
            explanation: 'Archaeological evidence including a workers\' village with medical facilities shows pyramid builders were paid laborers who received care and were buried with honor.',
          },
          {
            question: 'How many stone blocks does the Great Pyramid contain?',
            options: ['About 500,000', 'About 1 million', 'Over 2.3 million', 'About 5 million'],
            correctIndex: 2,
            explanation: 'The Great Pyramid contains over 2.3 million stone blocks, an astonishing feat of organization and engineering.',
          },
        ],
      },
      {
        id: 'cleopatra-beyond-myth',
        title: 'Cleopatra Beyond the Myth',
        thumbnail: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&q=80',
        pages: [
          {
            title: 'The Real Cleopatra',
            image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
            body: `Cleopatra VII is often remembered primarily for her romantic relationships with Julius Caesar and Mark Antony. But this framing erases her true significance as one of history's most politically brilliant rulers.\n\nShe was the first ruler of the Ptolemaic dynasty — which had ruled Egypt for 275 years — to actually learn the Egyptian language. She also spoke nine other languages, including Ethiopian, Hebrew, Arabic, and Parthian.`,
          },
          {
            title: 'A Political Genius',
            body: `Cleopatra came to power at 18, co-ruling with her brother. When her brother had her expelled, she allied with Caesar not out of romance but political calculation — it was her best path back to power. The strategy worked brilliantly.\n\nShe ruled Egypt for 21 years, maintained its independence against Rome at a time when Rome was swallowing kingdoms whole, and kept her nation's economy prosperous. Her death, by contrast, brought Egypt directly under Roman control.`,
          },
        ],
        quiz: [
          {
            question: 'How many languages could Cleopatra speak?',
            options: ['2', '5', '10', '15'],
            correctIndex: 2,
            explanation: 'Cleopatra spoke approximately 9–10 languages, including Egyptian (which no previous Ptolemaic ruler had bothered to learn), making her exceptional even by today\'s standards.',
          },
          {
            question: 'What happened to Egypt after Cleopatra\'s death?',
            options: ['It was ruled by her son', 'It became a Roman province', 'It was conquered by Persia', 'It maintained independence'],
            correctIndex: 1,
            explanation: 'After Cleopatra\'s death in 30 BCE, Egypt was absorbed into the Roman Empire — exactly what she had spent her reign trying to prevent.',
          },
        ],
      },
    ],
  },
  {
    id: 'great-thinkers',
    title: 'Great Thinkers of Antiquity',
    topic: 'Philosophy',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    rating: 4.7,
    estimatedMinutes: 20,
    lessons: [
      {
        id: 'socrates',
        title: 'Socrates: The Gadfly of Athens',
        thumbnail: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&q=80',
        pages: [
          {
            title: 'A Man Who Wrote Nothing',
            image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80',
            body: `Socrates (469–399 BCE) is one of the most famous philosophers in history — and yet he wrote not a single word. Everything we know about him comes from others, primarily his student Plato, creating an enduring mystery: where does the historical Socrates end and Plato's invention begin?\n\nWhat we can say is that Socrates walked the streets of Athens engaging anyone who would listen in relentless questioning. He asked politicians about justice, poets about beauty, craftsmen about their craft — always revealing that people knew less than they thought.`,
          },
          {
            title: 'The Socratic Method',
            body: `Socrates's technique — asking probing questions to expose contradictions in someone's thinking — is called the Socratic method or elenchus. It remains the foundation of philosophical inquiry and legal cross-examination today.\n\nHis most famous insight: "I know that I know nothing." True wisdom begins with recognizing the limits of your own knowledge. This intellectual humility was radical in a culture that prized confident expertise.`,
          },
          {
            title: 'Death by Democracy',
            body: `In 399 BCE, Socrates was put on trial by a jury of 501 Athenian citizens. The charges: impiety toward the gods and corrupting the youth. He was found guilty by a narrow margin and sentenced to death by drinking hemlock.\n\nSocrates refused the chance to escape, arguing that fleeing would violate his obligation to the laws of Athens. His death became the ultimate statement of philosophical integrity — dying for the right to question everything.`,
          },
        ],
        quiz: [
          {
            question: 'What is the "Socratic method"?',
            options: ['Writing long philosophical treatises', 'Using probing questions to reveal contradictions', 'Memorizing ancient texts', 'Debating in formal competitions'],
            correctIndex: 1,
            explanation: 'The Socratic method involves asking probing questions to expose contradictions in thinking — a technique Socrates used in conversation and which remains foundational in philosophy and law.',
          },
          {
            question: 'How did Socrates die?',
            options: ['In battle', 'By natural causes', 'By drinking hemlock', 'By exile'],
            correctIndex: 2,
            explanation: 'Socrates was sentenced to death by an Athenian jury and executed by drinking hemlock — a poison — in 399 BCE.',
          },
          {
            question: 'Who wrote down Socrates\'s ideas?',
            options: ['Aristotle', 'Plato', 'Socrates himself', 'Xenophon only'],
            correctIndex: 1,
            explanation: 'Plato is the primary source for Socrates\'s philosophy. Socrates himself wrote nothing — he believed philosophy was a living conversation, not a written text.',
          },
        ],
      },
      {
        id: 'aristotle',
        title: 'Aristotle: The First Scientist',
        thumbnail: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
        pages: [
          {
            title: 'The Philosopher Who Studied Everything',
            image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
            body: `Aristotle (384–322 BCE) is arguably the single most influential thinker in Western intellectual history. He wrote on biology, physics, poetry, ethics, politics, logic, and psychology — essentially founding most of these as formal disciplines.\n\nUnlike Plato, who sought abstract ideals, Aristotle was fascinated by the physical world. He dissected animals, catalogued plants, and observed the stars — a spirit that makes him recognizable as the first scientist.`,
          },
          {
            title: 'Tutor to Alexander',
            body: `At age 17, Aristotle left Macedonia for Athens to study at Plato's Academy. He stayed for 20 years. After Plato's death, he eventually became the tutor of a 13-year-old Macedonian prince: Alexander, who would become Alexander the Great.\n\nAristotle's influence on Alexander is fascinating to speculate on. He taught Alexander rhetoric, medicine, philosophy, and science. Alexander reportedly carried a copy of Homer annotated by Aristotle throughout his campaigns.`,
          },
        ],
        quiz: [
          {
            question: 'What made Aristotle different from Plato in approach?',
            options: ['Aristotle only studied mathematics', 'Aristotle focused on the physical world and observation', 'Aristotle rejected philosophy entirely', 'Aristotle only studied politics'],
            correctIndex: 1,
            explanation: 'While Plato sought abstract ideal forms, Aristotle was empirical — he studied the physical world through observation, dissection, and cataloguing, making him a forerunner of modern science.',
          },
          {
            question: 'Who was Aristotle\'s most famous student?',
            options: ['Julius Caesar', 'Socrates', 'Alexander the Great', 'Plato'],
            correctIndex: 2,
            explanation: 'Aristotle tutored the young Alexander of Macedon — who became Alexander the Great — teaching him philosophy, medicine, and rhetoric.',
          },
        ],
      },
    ],
  },
  {
    id: 'japanese-culture',
    title: 'The Soul of Japanese Culture',
    topic: 'Culture',
    coverImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    rating: 4.6,
    estimatedMinutes: 18,
    lessons: [
      {
        id: 'wabi-sabi',
        title: 'Wabi-Sabi: Beauty in Imperfection',
        thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
        pages: [
          {
            title: 'The Art of Impermanence',
            image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
            body: `Wabi-sabi is one of Japan's most distinctive aesthetic philosophies — a worldview centered on the acceptance of imperfection, impermanence, and incompleteness. It is in many ways the opposite of Western ideals of beauty, which often celebrate symmetry, permanence, and flawlessness.\n\nThe word combines "wabi" (rustic simplicity, solitary beauty) and "sabi" (the beauty that comes with age and wear). Together, they describe the bittersweet appreciation of things that are worn, weathered, and fading.`,
          },
          {
            title: 'Wabi-Sabi in Practice',
            body: `You see wabi-sabi in the Japanese tea ceremony, where rough, asymmetrical pottery is prized over perfectly smooth porcelain. You see it in the art of kintsugi — repairing broken pottery with gold lacquer, making the cracks themselves the most beautiful feature.\n\nIt's in the appreciation of cherry blossoms (sakura) — beautiful precisely because they fall within days. The Japanese have a word for this: mono no aware — "the pathos of things," a gentle sadness at impermanence that deepens our appreciation of beauty.`,
          },
        ],
        quiz: [
          {
            question: 'What does "kintsugi" involve?',
            options: ['Creating perfect symmetrical pottery', 'Repairing broken pottery with gold', 'A type of Japanese flower arrangement', 'A style of calligraphy'],
            correctIndex: 1,
            explanation: 'Kintsugi is the art of repairing broken pottery with gold lacquer — making the cracks the most visually striking part, embodying the wabi-sabi acceptance of imperfection.',
          },
          {
            question: 'What is "mono no aware"?',
            options: ['A Japanese musical form', 'A type of pottery glaze', 'The pathos of impermanence', 'A martial arts philosophy'],
            correctIndex: 2,
            explanation: '"Mono no aware" translates as "the pathos of things" — a gentle sadness at the impermanence of beautiful things that deepens our appreciation of them.',
          },
        ],
      },
      {
        id: 'samurai-code',
        title: 'Bushido: The Samurai Code',
        thumbnail: 'https://images.unsplash.com/photo-1551200744-88c3f30a0c26?w=400&q=80',
        pages: [
          {
            title: 'The Way of the Warrior',
            image: 'https://images.unsplash.com/photo-1551200744-88c3f30a0c26?w=800&q=80',
            body: `Bushido — "the way of the warrior" — was the ethical code of the samurai class that shaped Japanese culture for centuries. It emphasized eight virtues: righteousness, courage, benevolence, respect, honesty, honor, loyalty, and self-control.\n\nContrary to their fierce reputation, samurai were expected to be cultivated individuals — poets, calligraphers, and tea ceremony practitioners as well as warriors. The ideal samurai embodied the union of martial and literary arts: "bu" (military) and "bun" (literary).`,
          },
          {
            title: 'Legacy in Modern Japan',
            body: `Bushido's influence runs deep in modern Japanese culture. The concepts of giri (duty), on (obligation), and haji (shame) that pervade Japanese social life have roots in the samurai ethical framework.\n\nIn business, the legendary Japanese work ethic and loyalty to the company echo bushido values. In sports, the discipline and respect shown by Japanese athletes — the team that cleaned their stadium after losing the 2022 World Cup — reflects centuries of cultural conditioning.`,
          },
        ],
        quiz: [
          {
            question: 'What does "Bushido" literally mean?',
            options: ['The path of the sword', 'The way of the warrior', 'The code of honor', 'The spirit of Japan'],
            correctIndex: 1,
            explanation: 'Bushido means "the way of the warrior" — bu (military/warrior) + do (way/path), the ethical code of the samurai.',
          },
          {
            question: 'Which of these was NOT among the eight virtues of Bushido?',
            options: ['Courage', 'Wealth', 'Loyalty', 'Honor'],
            correctIndex: 1,
            explanation: 'Wealth was not a Bushido virtue. The eight virtues were righteousness, courage, benevolence, respect, honesty, honor, loyalty, and self-control.',
          },
        ],
      },
    ],
  },
  {
    id: 'democracy-origins',
    title: 'The Origins of Democracy',
    topic: 'Politics',
    coverImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80',
    rating: 4.5,
    estimatedMinutes: 16,
    lessons: [
      {
        id: 'athenian-democracy',
        title: 'Athens: The First Democracy',
        thumbnail: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80',
        pages: [
          {
            title: 'Inventing the People\'s Rule',
            image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
            body: `In 508 BCE, the Athenian reformer Cleisthenes introduced a radical new system of government: demokratia — "rule by the people." For the first time in recorded history, ordinary citizens (male, free, Athenian-born) would make the laws that governed them.\n\nThe Athenian assembly, the Ekklesia, met 40 times a year. Any eligible citizen could speak and vote. At its peak, perhaps 6,000 citizens attended major sessions. Decisions on war, peace, laws, and finances were made directly — not through representatives.`,
          },
          {
            title: 'Radical and Flawed',
            body: `Athenian democracy was genuinely radical for its time — but deeply limited by today's standards. Women had no political rights. Slaves, who made up perhaps 30–40% of the population, were excluded entirely. Foreign residents (metics), even those born in Athens, could not vote.\n\nDemocracy also had its dark moments. It was an Athenian jury of 501 citizens that condemned Socrates to death. Critics like Plato argued passionately that rule by an uneducated mob was dangerous — a debate that has never fully resolved.`,
          },
        ],
        quiz: [
          {
            question: 'What does "demokratia" mean?',
            options: ['Rule by the wise', 'Rule by the people', 'Rule by law', 'Rule by consent'],
            correctIndex: 1,
            explanation: 'Demokratia combines "demos" (people) and "kratos" (rule/power) — literally "rule by the people."',
          },
          {
            question: 'Who introduced democracy in Athens around 508 BCE?',
            options: ['Pericles', 'Solon', 'Cleisthenes', 'Themistocles'],
            correctIndex: 2,
            explanation: 'Cleisthenes introduced the democratic reforms in 508 BCE, earning him the title "Father of Athenian Democracy."',
          },
        ],
      },
      {
        id: 'magna-carta',
        title: 'Magna Carta: Limiting Power',
        thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
        pages: [
          {
            title: 'The Great Charter',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
            body: `In June 1215, a group of rebellious barons forced King John of England to put his seal on a document that would change the course of history: Magna Carta, the "Great Charter."\n\nAt its core was a revolutionary idea: even the king was subject to the law. No free man could be imprisoned, dispossessed, or harmed except by the lawful judgment of his peers. This principle — that power has limits — became the seed from which constitutional democracy grew.`,
          },
          {
            title: 'Why It Still Matters',
            body: `Most of Magna Carta's 63 original clauses dealt with specific medieval grievances that are long irrelevant. But a handful of clauses planted ideas that grew into some of the most important principles in democratic governance.\n\nHabeas corpus (the right not to be imprisoned without charge), due process, and the rule of law all trace ancestry to this muddy field in Runnymede. The U.S. Constitution and the Universal Declaration of Human Rights both bear its imprint.`,
          },
        ],
        quiz: [
          {
            question: 'When was Magna Carta signed?',
            options: ['1066', '1215', '1348', '1485'],
            correctIndex: 1,
            explanation: 'Magna Carta was sealed by King John of England in June 1215 at Runnymede, a meadow beside the River Thames.',
          },
          {
            question: 'What was the revolutionary core idea of Magna Carta?',
            options: ['All men are equal', 'The king is subject to the law', 'Parliament should govern', 'The church has supreme power'],
            correctIndex: 1,
            explanation: 'Magna Carta\'s revolutionary core was that even the king must obey the law — planting the seed of constitutional governance and the rule of law.',
          },
        ],
      },
    ],
  },
];

export const topics: Topic[] = ['History', 'Culture', 'Politics', 'Philosophy'];

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

export function getCoursesByTopic(topic: Topic): Course[] {
  return courses.filter(c => c.topic === topic);
}
