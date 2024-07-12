const questions = [
    {
        question: "How would you describe your attitude towards life?",
        answers: [
            { text: "Optimistic and cheerful", points: { race: { elf: 1, halfling: 1 }, class: { cleric: 1, bard: 1 } } },
            { text: "Realistic and pragmatic", points: { race: { dwarf: 1, human: 1 }, class: { fighter: 1, rogue: 1 } } },
            { text: "Thoughtful and philosophical", points: { race: { tiefling: 1, highElf: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Adventurous and risk-taking", points: { race: { human: 1, woodElf: 1 }, class: { ranger: 1, rogue: 1 } } }
        ]
    },
    {
        question: "How do you handle conflicts?",
        answers: [
            { text: "Try to resolve them peacefully", points: { race: { halfElf: 1, halfling: 1 }, class: { cleric: 1, bard: 1 } } },
            { text: "Analyze the situation and act logically", points: { race: { githyanki: 1, highElf: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Seek to understand the root cause", points: { race: { halfling: 1, elf: 1 }, class: { druid: 1, bard: 1 } } },
            { text: "Confront the challenge directly", points: { race: { halfOrc: 1, human: 1 }, class: { barbarian: 1, fighter: 1 } } }
        ]
    },
    {
        question: "What is your favorite type of environment?",
        answers: [
            { text: "Forest or jungle", points: { race: { woodElf: 1, elf: 1 }, class: { druid: 1, ranger: 1 } } },
            { text: "Mountains or hills", points: { race: { mountainDwarf: 1, dwarf: 1 }, class: { fighter: 1, barbarian: 1 } } },
            { text: "Cities or towns", points: { race: { human: 1, halfElf: 1 }, class: { rogue: 1, bard: 1 } } },
            { text: "Coastal areas", points: { race: { highElf: 1, tiefling: 1 }, class: { wizard: 1, sorcerer: 1 } } }
        ]
    },
    {
        question: "Which hobby interests you the most?",
        answers: [
            { text: "Gardening", points: { race: { elf: 1, halfling: 1 }, class: { druid: 1, cleric: 1 } } },
            { text: "Reading", points: { race: { halfElf: 1, highElf: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Traveling", points: { race: { human: 1, woodElf: 1 }, class: { ranger: 1, bard: 1 } } },
            { text: "Cooking", points: { race: { halfling: 1, dwarf: 1 }, class: { bard: 1, cleric: 1 } } }
        ]
    },
    {
        question: "What kind of books do you enjoy?",
        answers: [
            { text: "Fantasy and adventure", points: { race: { human: 1, woodElf: 1 }, class: { ranger: 1, bard: 1 } } },
            { text: "Science fiction", points: { race: { highElf: 1, githyanki: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Mystery and thriller", points: { race: { tiefling: 1, human: 1 }, class: { rogue: 1, bard: 1 } } },
            { text: "Romance", points: { race: { halfElf: 1, elf: 1 }, class: { bard: 1, cleric: 1 } } }
        ]
    },
    {
        question: "How do you prefer to spend your weekends?",
        answers: [
            { text: "With family and friends", points: { race: { halfling: 1, elf: 1 }, class: { bard: 1, cleric: 1 } } },
            { text: "Learning something new", points: { race: { highElf: 1, githyanki: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Exploring nature", points: { race: { woodElf: 1, human: 1 }, class: { ranger: 1, druid: 1 } } },
            { text: "Engaging in creative activities", points: { race: { elf: 1, tiefling: 1 }, class: { bard: 1, cleric: 1 } } }
        ]
    },
    {
        question: "What motivates you the most?",
        answers: [
            { text: "Helping others", points: { race: { halfElf: 1, halfling: 1 }, class: { cleric: 1, druid: 1 } } },
            { text: "Achieving goals", points: { race: { githyanki: 1, dwarf: 1 }, class: { fighter: 1, sorcerer: 1 } } },
            { text: "Finding inner peace", points: { race: { tiefling: 1, elf: 1 }, class: { monk: 1, druid: 1 } } },
            { text: "Seeking excitement", points: { race: { human: 1, halfOrc: 1 }, class: { rogue: 1, barbarian: 1 } } }
        ]
    },
    {
        question: "Which of these is most important to you?",
        answers: [
            { text: "Community", points: { race: { halfling: 1, dwarf: 1 }, class: { bard: 1, cleric: 1 } } },
            { text: "Knowledge", points: { race: { highElf: 1, githyanki: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Harmony", points: { race: { elf: 1, woodElf: 1 }, class: { druid: 1, cleric: 1 } } },
            { text: "Adventure", points: { race: { human: 1, tiefling: 1 }, class: { ranger: 1, rogue: 1 } } }
        ]
    },
    {
        question: "How do you deal with stress?",
        answers: [
            { text: "Talk to someone", points: { race: { halfling: 1, elf: 1 }, class: { bard: 1, cleric: 1 } } },
            { text: "Research solutions", points: { race: { highElf: 1, githyanki: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Meditate", points: { race: { elf: 1, tiefling: 1 }, class: { monk: 1, druid: 1 } } },
            { text: "Exercise", points: { race: { human: 1, halfOrc: 1 }, class: { barbarian: 1, fighter: 1 } } }
        ]
    },
    {
        question: "What kind of role do you prefer in a group setting?",
        answers: [
            { text: "Leader", points: { race: { human: 1, halfElf: 1 }, class: { paladin: 1, fighter: 1 } } },
            { text: "Supporter", points: { race: { halfElf: 1, halfling: 1 }, class: { cleric: 1, druid: 1 } } },
            { text: "Advisor", points: { race: { tiefling: 1, highElf: 1 }, class: { wizard: 1, sorcerer: 1 } } },
            { text: "Doer", points: { race: { githyanki: 1, dwarf: 1 }, class: { fighter: 1, rogue: 1 } } }
        ]
    },
    {
        question: "How do you approach learning new things?",
        answers: [
            { text: "With enthusiasm", points: { class: { bard: 1, sorcerer: 1 } } },
            { text: "Methodically", points: { class: { wizard: 1, fighter: 1 } } },
            { text: "Reflectively", points: { class: { druid: 1, monk: 1 } } },
            { text: "Collaboratively", points: { class: { cleric: 1, bard: 1 } } }
        ]
    },
    {
        question: "What do you value most in a friend?",
        answers: [
            { text: "Loyalty", points: { class: { paladin: 1, fighter: 1 } } },
            { text: "Intelligence", points: { class: { wizard: 1, sorcerer: 1 } } },
            { text: "Empathy", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Courage", points: { class: { fighter: 1, barbarian: 1 } } }
        ]
    },
    {
        question: "How do you prefer to travel?",
        answers: [
            { text: "With a plan", points: { class: { rogue: 1, wizard: 1 } } },
            { text: "Spontaneously", points: { class: { ranger: 1, bard: 1 } } },
            { text: "With friends", points: { class: { bard: 1, cleric: 1 } } },
            { text: "Alone", points: { class: { monk: 1, druid: 1 } } }
        ]
    },
    {
        question: "What is your approach to solving problems?",
        answers: [
            { text: "Logically", points: { class: { wizard: 1, cleric: 1 } } },
            { text: "Creatively", points: { class: { bard: 1, sorcerer: 1 } } },
            { text: "Collaboratively", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Aggressively", points: { class: { fighter: 1, barbarian: 1 } } }
        ]
    },
    {
        question: "What do you seek in life?",
        answers: [
            { text: "Balance", points: { class: { druid: 1, monk: 1 } } },
            { text: "Success", points: { class: { wizard: 1, fighter: 1 } } },
            { text: "Connection", points: { class: { bard: 1, cleric: 1 } } },
            { text: "Adventure", points: { class: { ranger: 1, rogue: 1 } } }
        ]
    },
    {
        question: "How do you handle change?",
        answers: [
            { text: "Adapt quickly", points: { class: { rogue: 1, bard: 1 } } },
            { text: "Plan ahead", points: { class: { wizard: 1, sorcerer: 1 } } },
            { text: "Reflect on it", points: { class: { druid: 1, monk: 1 } } },
            { text: "Seek support", points: { class: { cleric: 1, bard: 1 } } }
        ]
    },
    {
        question: "What type of movies do you enjoy?",
        answers: [
            { text: "Comedies", points: { class: { bard: 1, rogue: 1 } } },
            { text: "Documentaries", points: { class: { wizard: 1, cleric: 1 } } },
            { text: "Dramas", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Action/Adventure", points: { class: { fighter: 1, barbarian: 1 } } }
        ]
    },
    {
        question: "How do you make decisions?",
        answers: [
            { text: "With my heart", points: { class: { bard: 1, druid: 1 } } },
            { text: "With my head", points: { class: { wizard: 1, cleric: 1 } } },
            { text: "With my intuition", points: { class: { sorcerer: 1, monk: 1 } } },
            { text: "With my gut", points: { class: { fighter: 1, barbarian: 1 } } }
        ]
    },
    {
        question: "What kind of pet would you prefer?",
        answers: [
            { text: "Dog", points: { class: { ranger: 1, fighter: 1 } } },
            { text: "Cat", points: { class: { wizard: 1, sorcerer: 1 } } },
            { text: "Bird", points: { class: { druid: 1, ranger: 1 } } },
            { text: "Exotic animal", points: { class: { rogue: 1, sorcerer: 1 } } }
        ]
    },
    {
        question: "What is your dream job?",
        answers: [
            { text: "Helping others", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Solving problems", points: { class: { wizard: 1, fighter: 1 } } },
            { text: "Creating art", points: { class: { bard: 1, sorcerer: 1 } } },
            { text: "Exploring new places", points: { class: { ranger: 1, rogue: 1 } } }
        ]
    },
    {
        question: "What is your favorite time of day?",
        answers: [
            { text: "Morning", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Afternoon", points: { class: { wizard: 1, fighter: 1 } } },
            { text: "Evening", points: { class: { bard: 1, rogue: 1 } } },
            { text: "Night", points: { class: { rogue: 1, sorcerer: 1 } } }
        ]
    },
    {
        question: "How do you approach challenges?",
        answers: [
            { text: "Face them head-on", points: { class: { barbarian: 1, fighter: 1 } } },
            { text: "Analyze the situation", points: { class: { wizard: 1, cleric: 1 } } },
            { text: "Seek advice", points: { class: { cleric: 1, druid: 1 } } },
            { text: "Reflect and plan", points: { class: { druid: 1, monk: 1 } } }
        ]
    },
    {
        question: "What is most important to you in a partner?",
        answers: [
            { text: "Trust", points: { background: { acolyte: 1, folkHero: 1 } } },
            { text: "Intelligence", points: { background: { sage: 1, guildArtisan: 1 } } },
            { text: "Compassion", points: { background: { folkHero: 1, hermit: 1 } } },
            { text: "Passion", points: { background: { noble: 1, entertainer: 1 } } }
        ]
    },
    {
        question: "How do you prefer to communicate?",
        answers: [
            { text: "In person", points: { background: { guildArtisan: 1, folkHero: 1 } } },
            { text: "Written", points: { background: { sage: 1, hermit: 1 } } },
            { text: "Digitally", points: { background: { charlatan: 1, entertainer: 1 } } },
            { text: "Any way possible", points: { background: { soldier: 1, outlander: 1 } } }
        ]
    },
    {
        question: "What kind of games do you like?",
        answers: [
            { text: "Strategy games", points: { background: { noble: 1, soldier: 1 } } },
            { text: "Role-playing games", points: { background: { entertainer: 1, folkHero: 1 } } },
            { text: "Action games", points: { background: { soldier: 1, outlander: 1 } } },
            { text: "Casual games", points: { background: { folkHero: 1, entertainer: 1 } } }
        ]
    },
    {
        question: "How do you spend your free time?",
        answers: [
            { text: "Reading", points: { background: { sage: 1, hermit: 1 } } },
            { text: "Exercising", points: { background: { soldier: 1, outlander: 1 } } },
            { text: "Socializing", points: { background: { entertainer: 1, guildArtisan: 1 } } },
            { text: "Exploring", points: { background: { outlander: 1, folkHero: 1 } } }
        ]
    },
    {
        question: "What kind of people do you get along with best?",
        answers: [
            { text: "Intellectuals", points: { background: { sage: 1, hermit: 1 } } },
            { text: "Athletes", points: { background: { soldier: 1, outlander: 1 } } },
            { text: "Artists", points: { background: { entertainer: 1, guildArtisan: 1 } } },
            { text: "Adventurers", points: { background: { outlander: 1, folkHero: 1 } } }
        ]
    },
    {
        question: "What kind of leader are you?",
        answers: [
            { text: "Inspirational", points: { background: { noble: 1, soldier: 1 } } },
            { text: "Pragmatic", points: { background: { guildArtisan: 1, sage: 1 } } },
            { text: "Visionary", points: { background: { sage: 1, hermit: 1 } } },
            { text: "Charismatic", points: { background: { entertainer: 1, noble: 1 } } }
        ]
    },
    {
        question: "How do you react to failure?",
        answers: [
            { text: "Learn from it", points: { background: { sage: 1, hermit: 1 } } },
            { text: "Work harder", points: { background: { soldier: 1, outlander: 1 } } },
            { text: "Laugh it off", points: { background: { entertainer: 1, folkHero: 1 } } },
            { text: "Seek new opportunities", points: { background: { charlatan: 1, rogue: 1 } } }
        ]
    },
    {
        question: "What is your favorite season?",
        answers: [
            { text: "Spring", points: { background: { hermit: 1, druid: 1 } } },
            { text: "Summer", points: { background: { entertainer: 1, ranger: 1 } } },
            { text: "Fall", points: { background: { guildArtisan: 1, wizard: 1 } } },
            { text: "Winter", points: { background: { sage: 1, sorcerer: 1 } } }
        ]
    },
    {
        question: "How do you prefer to spend your vacations?",
        answers: [
            { text: "Relaxing at home", points: { background: { hermit: 1, druid: 1 } } },
            { text: "Visiting new places", points: { background: { outlander: 1, ranger: 1 } } },
            { text: "Attending events", points: { background: { entertainer: 1, bard: 1 } } },
            { text: "Exploring nature", points: { background: { folkHero: 1, ranger: 1 } } }
        ]
    },
    {
        question: "What kind of music do you enjoy?",
        answers: [
            { text: "Classical", points: { background: { noble: 1, sage: 1 } } },
            { text: "Rock", points: { background: { soldier: 1, rogue: 1 } } },
            { text: "Jazz", points: { background: { guildArtisan: 1, entertainer: 1 } } },
            { text: "Folk", points: { background: { folkHero: 1, ranger: 1 } } }
        ]
    },
    {
        question: "How do you prefer to learn?",
        answers: [
            { text: "Through reading", points: { background: { sage: 1, wizard: 1 } } },
            { text: "Through practice", points: { background: { soldier: 1, fighter: 1 } } },
            { text: "Through observation", points: { background: { hermit: 1, druid: 1 } } },
            { text: "Through interaction", points: { background: { entertainer: 1, bard: 1 } } }
        ]
    },
    {
        question: "What motivates you to get out of bed in the morning?",
        answers: [
            { text: "Helping others", points: { background: { acolyte: 1, cleric: 1 } } },
            { text: "Achieving goals", points: { background: { guildArtisan: 1, fighter: 1 } } },
            { text: "New experiences", points: { background: { outlander: 1, ranger: 1 } } },
            { text: "Having fun", points: { background: { entertainer: 1, bard: 1 } } }
        ]
    },
    {
        question: "What type of art do you appreciate the most?",
        answers: [
            { text: "Painting", points: { background: { noble: 1, guildArtisan: 1 } } },
            { text: "Sculpture", points: { background: { guildArtisan: 1, sage: 1 } } },
            { text: "Performance", points: { background: { entertainer: 1, bard: 1 } } },
            { text: "Literature", points: { background: { sage: 1, wizard: 1 } } }
        ]
    },
    {
        question: "How do you view success?",
        answers: [
            { text: "Helping others", points: { background: { acolyte: 1, cleric: 1 } } },
            { text: "Achieving personal goals", points: { background: { guildArtisan: 1, fighter: 1 } } },
            { text: "Experiencing new things", points: { background: { outlander: 1, ranger: 1 } } },
            { text: "Gaining recognition", points: { background: { entertainer: 1, bard: 1 } } }
        ]
    },
    {
        question: "What is your preferred method of transportation?",
        answers: [
            { text: "Walking", points: { background: { hermit: 1, ranger: 1 } } },
            { text: "Driving", points: { background: { guildArtisan: 1, fighter: 1 } } },
            { text: "Flying", points: { background: { sage: 1, sorcerer: 1 } } },
            { text: "Riding", points: { background: { outlander: 1, ranger: 1 } } }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "Talking to someone", points: { background: { entertainer: 1, cleric: 1 } } },
            { text: "Exercising", points: { background: { soldier: 1, fighter: 1 } } },
            { text: "Meditating", points: { background: { hermit: 1, monk: 1 } } },
            { text: "Distracting myself with activities", points: { background: { charlatan: 1, rogue: 1 } } }
        ]
    },
    {
        question: "What is your greatest strength?",
        answers: [
            { text: "Compassion", points: { background: { acolyte: 1, cleric: 1 } } },
            { text: "Determination", points: { background: { soldier: 1, fighter: 1 } } },
            { text: "Creativity", points: { background: { entertainer: 1, bard: 1 } } },
            { text: "Wisdom", points: { background: { sage: 1, wizard: 1 } } }
        ]
    },
    {
        question: "What do you enjoy doing in your free time?",
        answers: [
            { text: "Reading", points: { background: { sage: 1, wizard: 1 } } },
            { text: "Playing music", points: { background: { entertainer: 1, bard: 1 } } },
            { text: "Exploring nature", points: { background: { outlander: 1, ranger: 1 } } },
            { text: "Crafting", points: { background: { guildArtisan: 1, fighter: 1 } } }
        ]
    }
];

export default questions;
