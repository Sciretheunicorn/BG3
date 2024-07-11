const questions = [
    {
        question: "How would you describe your attitude towards life?",
        answers: [
            { text: "Optimistic and cheerful", points: { race: "Elf", class: "Cleric", background: "Folk Hero" } },
            { text: "Realistic and pragmatic", points: { race: "Dwarf", class: "Fighter", background: "Soldier" } },
            { text: "Thoughtful and philosophical", points: { race: "Tiefling", class: "Wizard", background: "Sage" } },
            { text: "Adventurous and risk-taking", points: { race: "Human", class: "Ranger", background: "Outlander" } }
        ]
    },
    {
        question: "How do you handle conflicts?",
        answers: [
            { text: "Try to resolve them peacefully", points: { race: "Half-Elf", class: "Cleric", background: "Folk Hero" } },
            { text: "Analyze the situation and act logically", points: { race: "Githyanki", class: "Sorcerer", background: "Sage" } },
            { text: "Seek to understand the root cause", points: { race: "Halfling", class: "Bard", background: "Entertainer" } },
            { text: "Confront the challenge directly", points: { race: "Half-Orc", class: "Barbarian", background: "Outlander" } }
        ]
    },
    {
        question: "What is your favorite type of environment?",
        answers: [
            { text: "Forest or jungle", points: { race: "Wood Elf", class: "Druid", background: "Hermit" } },
            { text: "Mountains or hills", points: { race: "Mountain Dwarf", class: "Fighter", background: "Soldier" } },
            { text: "Cities or towns", points: { race: "Human", class: "Rogue", background: "Criminal" } },
            { text: "Coastal areas", points: { race: "High Elf", class: "Wizard", background: "Sailor" } }
        ]
    },
    {
        question: "Which hobby interests you the most?",
        answers: [
            { text: "Gardening", points: { race: "Elf", class: "Druid", background: "Hermit" } },
            { text: "Reading", points: { race: "Half-Elf", class: "Wizard", background: "Sage" } },
            { text: "Traveling", points: { race: "Human", class: "Ranger", background: "Outlander" } },
            { text: "Cooking", points: { race: "Halfling", class: "Bard", background: "Entertainer" } }
        ]
    },
    {
        question: "What kind of books do you enjoy?",
        answers: [
            { text: "Fantasy and adventure", points: { race: "Human", class: "Ranger", background: "Outlander" } },
            { text: "Science fiction", points: { race: "High Elf", class: "Wizard", background: "Sage" } },
            { text: "Mystery and thriller", points: { race: "Tiefling", class: "Rogue", background: "Criminal" } },
            { text: "Romance", points: { race: "Half-Elf", class: "Bard", background: "Entertainer" } }
        ]
    },
    {
        question: "How do you prefer to spend your weekends?",
        answers: [
            { text: "With family and friends", points: { race: "Halfling", class: "Bard", background: "Entertainer" } },
            { text: "Learning something new", points: { race: "High Elf", class: "Wizard", background: "Sage" } },
            { text: "Exploring nature", points: { race: "Wood Elf", class: "Ranger", background: "Outlander" } },
            { text: "Engaging in creative activities", points: { race: "Elf", class: "Bard", background: "Entertainer" } }
        ]
    },
    {
        question: "What motivates you the most?",
        answers: [
            { text: "Helping others", points: { race: "Half-Elf", class: "Cleric", background: "Folk Hero" } },
            { text: "Achieving goals", points: { race: "Githyanki", class: "Fighter", background: "Soldier" } },
            { text: "Finding inner peace", points: { race: "Tiefling", class: "Monk", background: "Hermit" } },
            { text: "Seeking excitement", points: { race: "Human", class: "Rogue", background: "Criminal" } }
        ]
    },
    {
        question: "Which of these is most important to you?",
        answers: [
            { text: "Community", points: { race: "Halfling", class: "Bard", background: "Entertainer" } },
            { text: "Knowledge", points: { race: "High Elf", class: "Wizard", background: "Sage" } },
            { text: "Harmony", points: { race: "Elf", class: "Druid", background: "Hermit" } },
            { text: "Adventure", points: { race: "Human", class: "Ranger", background: "Outlander" } }
        ]
    },
    {
        question: "How do you deal with stress?",
        answers: [
            { text: "Talk to someone", points: { race: "Halfling", class: "Bard", background: "Entertainer" } },
            { text: "Research solutions", points: { race: "High Elf", class: "Wizard", background: "Sage" } },
            { text: "Meditate", points: { race: "Elf", class: "Monk", background: "Hermit" } },
            { text: "Exercise", points: { race: "Human", class: "Barbarian", background: "Outlander" } }
        ]
    },
    {
        question: "What kind of role do you prefer in a group setting?",
        answers: [
            { text: "Leader", points: { race: "Human", class: "Paladin", background: "Noble" } },
            { text: "Supporter", points: { race: "Half-Elf", class: "Cleric", background: "Folk Hero" } },
            { text: "Advisor", points: { race: "Tiefling", class: "Wizard", background: "Sage" } },
            { text: "Doer", points: { race: "Githyanki", class: "Fighter", background: "Soldier" } }
        ]
    },
    {
        question: "How do you approach learning new things?",
        answers: [
            { text: "With enthusiasm", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Methodically", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Reflectively", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "Collaboratively", points: { class: "Cleric", subclass: "Life Domain" } }
        ]
    },
    {
        question: "What do you value most in a friend?",
        answers: [
            { text: "Loyalty", points: { class: "Paladin", subclass: "Oath of Devotion" } },
            { text: "Intelligence", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "Empathy", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Courage", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "How do you prefer to travel?",
        answers: [
            { text: "With a plan", points: { class: "Rogue", subclass: "Thief" } },
            { text: "Spontaneously", points: { class: "Ranger", subclass: "Hunter" } },
            { text: "With friends", points: { class: "Bard", subclass: "College of Valor" } },
            { text: "Alone", points: { class: "Monk", subclass: "Way of the Shadow" } }
        ]
    },
    {
        question: "What is your approach to solving problems?",
        answers: [
            { text: "Logically", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Creatively", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Collaboratively", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Aggressively", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "What do you seek in life?",
        answers: [
            { text: "Balance", points: { class: "Druid", subclass: "Circle of the Land" } },
            { text: "Success", points: { class: "Wizard", subclass: "School of Evocation" } },
            { text: "Connection", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Adventure", points: { class: "Ranger", subclass: "Hunter" } }
        ]
    },
    {
        question: "How do you handle change?",
        answers: [
            { text: "Adapt quickly", points: { class: "Rogue", subclass: "Thief" } },
            { text: "Plan ahead", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "Reflect on it", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "Seek support", points: { class: "Cleric", subclass: "Life Domain" } }
        ]
    },
    {
        question: "What type of movies do you enjoy?",
        answers: [
            { text: "Comedies", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Documentaries", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Dramas", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Action/Adventure", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "How do you make decisions?",
        answers: [
            { text: "With my heart", points: { class: "Bard", subclass: "College of Valor" } },
            { text: "With my head", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "With my intuition", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "With my gut", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "What kind of pet would you prefer?",
        answers: [
            { text: "Dog", points: { class: "Ranger", subclass: "Beast Master" } },
            { text: "Cat", points: { class: "Wizard", subclass: "School of Transmutation" } },
            { text: "Bird", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "Exotic animal", points: { class: "Rogue", subclass: "Assassin" } }
        ]
    },
    {
        question: "What is your dream job?",
        answers: [
            { text: "Helping others", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Solving problems", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "Creating art", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Exploring new places", points: { class: "Ranger", subclass: "Hunter" } }
        ]
    },
    {
        question: "What is your favorite time of day?",
        answers: [
            { text: "Morning", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Afternoon", points: { class: "Wizard", subclass: "School of Evocation" } },
            { text: "Evening", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Night", points: { class: "Rogue", subclass: "Assassin" } }
        ]
    },
    {
        question: "How do you approach challenges?",
        answers: [
            { text: "Face them head-on", points: { class: "Barbarian", subclass: "Berserker" } },
            { text: "Analyze the situation", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Seek advice", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Reflect and plan", points: { class: "Druid", subclass: "Circle of the Moon" } }
        ]
    },
    {
        question: "What is most important to you in a partner?",
        answers: [
            { text: "Trust", points: { background: "Acolyte" } },
            { text: "Intelligence", points: { background: "Sage" } },
            { text: "Compassion", points: { background: "Folk Hero" } },
            { text: "Passion", points: { background: "Noble" } }
        ]
    },
    {
        question: "How do you prefer to communicate?",
        answers: [
            { text: "In person", points: { background: "Guild Artisan" } },
            { text: "Written", points: { background: "Sage" } },
            { text: "Digitally", points: { background: "Charlatan" } },
            { text: "Any way possible", points: { background: "Soldier" } }
        ]
    },
    {
        question: "What kind of games do you like?",
        answers: [
            { text: "Strategy games", points: { background: "Noble" } },
            { text: "Role-playing games", points: { background: "Entertainer" } },
            { text: "Action games", points: { background: "Soldier" } },
            { text: "Casual games", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "How do you spend your free time?",
        answers: [
            { text: "Reading", points: { background: "Sage" } },
            { text: "Exercising", points: { background: "Soldier" } },
            { text: "Socializing", points: { background: "Entertainer" } },
            { text: "Exploring", points: { background: "Outlander" } }
        ]
    },
    {
        question: "What kind of people do you get along with best?",
        answers: [
            { text: "Intellectuals", points: { background: "Sage" } },
            { text: "Athletes", points: { background: "Soldier" } },
            { text: "Artists", points: { background: "Entertainer" } },
            { text: "Adventurers", points: { background: "Outlander" } }
        ]
    },
    {
        question: "What kind of leader are you?",
        answers: [
            { text: "Inspirational", points: { background: "Noble" } },
            { text: "Pragmatic", points: { background: "Guild Artisan" } },
            { text: "Visionary", points: { background: "Sage" } },
            { text: "Charismatic", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "How do you react to failure?",
        answers: [
            { text: "Learn from it", points: { background: "Sage" } },
            { text: "Work harder", points: { background: "Soldier" } },
            { text: "Laugh it off", points: { background: "Entertainer" } },
            { text: "Seek new opportunities", points: { background: "Charlatan" } }
        ]
    },
    {
        question: "What is your favorite season?",
        answers: [
            { text: "Spring", points: { background: "Hermit" } },
            { text: "Summer", points: { background: "Entertainer" } },
            { text: "Fall", points: { background: "Guild Artisan" } },
            { text: "Winter", points: { background: "Sage" } }
        ]
    },
    {
        question: "How do you prefer to spend your vacations?",
        answers: [
            { text: "Relaxing at home", points: { background: "Hermit" } },
            { text: "Visiting new places", points: { background: "Outlander" } },
            { text: "Attending events", points: { background: "Entertainer" } },
            { text: "Exploring nature", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "What kind of music do you enjoy?",
        answers: [
            { text: "Classical", points: { background: "Noble" } },
            { text: "Rock", points: { background: "Soldier" } },
            { text: "Jazz", points: { background: "Guild Artisan" } },
            { text: "Folk", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "How do you prefer to learn?",
        answers: [
            { text: "Through reading", points: { background: "Sage" } },
            { text: "Through practice", points: { background: "Soldier" } },
            { text: "Through observation", points: { background: "Hermit" } },
            { text: "Through interaction", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What motivates you to get out of bed in the morning?",
        answers: [
            { text: "Helping others", points: { background: "Acolyte" } },
            { text: "Achieving goals", points: { background: "Guild Artisan" } },
            { text: "New experiences", points: { background: "Outlander" } },
            { text: "Having fun", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What type of art do you appreciate the most?",
        answers: [
            { text: "Painting", points: { background: "Noble" } },
            { text: "Sculpture", points: { background: "Guild Artisan" } },
            { text: "Performance", points: { background: "Entertainer" } },
            { text: "Literature", points: { background: "Sage" } }
        ]
    },
    {
        question: "How do you view success?",
        answers: [
            { text: "Helping others", points: { background: "Acolyte" } },
            { text: "Achieving personal goals", points: { background: "Guild Artisan" } },
            { text: "Experiencing new things", points: { background: "Outlander" } },
            { text: "Gaining recognition", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What is your preferred method of transportation?",
        answers: [
            { text: "Walking", points: { background: "Hermit" } },
            { text: "Driving", points: { background: "Guild Artisan" } },
            { text: "Flying", points: { background: "Sage" } },
            { text: "Riding", points: { background: "Outlander" } }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "Talking to someone", points: { background: "Entertainer" } },
            { text: "Exercising", points: { background: "Soldier" } },
            { text: "Meditating", points: { background: "Hermit" } },
            { text: "Distracting myself with activities", points: { background: "Charlatan" } }
        ]
    },
    {
        question: "What is your approach to solving problems?",
        answers: [
            { text: "Logically", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Creatively", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Collaboratively", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Aggressively", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "What do you seek in life?",
        answers: [
            { text: "Balance", points: { class: "Druid", subclass: "Circle of the Land" } },
            { text: "Success", points: { class: "Wizard", subclass: "School of Evocation" } },
            { text: "Connection", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Adventure", points: { class: "Ranger", subclass: "Hunter" } }
        ]
    },
    {
        question: "How do you handle change?",
        answers: [
            { text: "Adapt quickly", points: { class: "Rogue", subclass: "Thief" } },
            { text: "Plan ahead", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "Reflect on it", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "Seek support", points: { class: "Cleric", subclass: "Life Domain" } }
        ]
    },
    {
        question: "What type of movies do you enjoy?",
        answers: [
            { text: "Comedies", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Documentaries", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Dramas", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Action/Adventure", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "How do you make decisions?",
        answers: [
            { text: "With my heart", points: { class: "Bard", subclass: "College of Valor" } },
            { text: "With my head", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "With my intuition", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "With my gut", points: { class: "Fighter", subclass: "Champion" } }
        ]
    },
    {
        question: "What kind of pet would you prefer?",
        answers: [
            { text: "Dog", points: { class: "Ranger", subclass: "Beast Master" } },
            { text: "Cat", points: { class: "Wizard", subclass: "School of Transmutation" } },
            { text: "Bird", points: { class: "Druid", subclass: "Circle of the Moon" } },
            { text: "Exotic animal", points: { class: "Rogue", subclass: "Assassin" } }
        ]
    },
    {
        question: "What is your dream job?",
        answers: [
            { text: "Helping others", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Solving problems", points: { class: "Wizard", subclass: "School of Divination" } },
            { text: "Creating art", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Exploring new places", points: { class: "Ranger", subclass: "Hunter" } }
        ]
    },
    {
        question: "What is your favorite time of day?",
        answers: [
            { text: "Morning", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Afternoon", points: { class: "Wizard", subclass: "School of Evocation" } },
            { text: "Evening", points: { class: "Bard", subclass: "College of Lore" } },
            { text: "Night", points: { class: "Rogue", subclass: "Assassin" } }
        ]
    },
    {
        question: "How do you approach challenges?",
        answers: [
            { text: "Face them head-on", points: { class: "Barbarian", subclass: "Berserker" } },
            { text: "Analyze the situation", points: { class: "Wizard", subclass: "School of Abjuration" } },
            { text: "Seek advice", points: { class: "Cleric", subclass: "Life Domain" } },
            { text: "Reflect and plan", points: { class: "Druid", subclass: "Circle of the Moon" } }
        ]
    },
    {
        question: "What is most important to you in a partner?",
        answers: [
            { text: "Trust", points: { background: "Acolyte" } },
            { text: "Intelligence", points: { background: "Sage" } },
            { text: "Compassion", points: { background: "Folk Hero" } },
            { text: "Passion", points: { background: "Noble" } }
        ]
    },
    {
        question: "How do you prefer to communicate?",
        answers: [
            { text: "In person", points: { background: "Guild Artisan" } },
            { text: "Written", points: { background: "Sage" } },
            { text: "Digitally", points: { background: "Charlatan" } },
            { text: "Any way possible", points: { background: "Soldier" } }
        ]
    },
    {
        question: "What kind of games do you like?",
        answers: [
            { text: "Strategy games", points: { background: "Noble" } },
            { text: "Role-playing games", points: { background: "Entertainer" } },
            { text: "Action games", points: { background: "Soldier" } },
            { text: "Casual games", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "How do you spend your free time?",
        answers: [
            { text: "Reading", points: { background: "Sage" } },
            { text: "Exercising", points: { background: "Soldier" } },
            { text: "Socializing", points: { background: "Entertainer" } },
            { text: "Exploring", points: { background: "Outlander" } }
        ]
    },
    {
        question: "What kind of people do you get along with best?",
        answers: [
            { text: "Intellectuals", points: { background: "Sage" } },
            { text: "Athletes", points: { background: "Soldier" } },
            { text: "Artists", points: { background: "Entertainer" } },
            { text: "Adventurers", points: { background: "Outlander" } }
        ]
    },
    {
        question: "What kind of leader are you?",
        answers: [
            { text: "Inspirational", points: { background: "Noble" } },
            { text: "Pragmatic", points: { background: "Guild Artisan" } },
            { text: "Visionary", points: { background: "Sage" } },
            { text: "Charismatic", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "How do you react to failure?",
        answers: [
            { text: "Learn from it", points: { background: "Sage" } },
            { text: "Work harder", points: { background: "Soldier" } },
            { text: "Laugh it off", points: { background: "Entertainer" } },
            { text: "Seek new opportunities", points: { background: "Charlatan" } }
        ]
    },
    {
        question: "What is your favorite season?",
        answers: [
            { text: "Spring", points: { background: "Hermit" } },
            { text: "Summer", points: { background: "Entertainer" } },
            { text: "Fall", points: { background: "Guild Artisan" } },
            { text: "Winter", points: { background: "Sage" } }
        ]
    },
    {
        question: "How do you prefer to spend your vacations?",
        answers: [
            { text: "Relaxing at home", points: { background: "Hermit" } },
            { text: "Visiting new places", points: { background: "Outlander" } },
            { text: "Attending events", points: { background: "Entertainer" } },
            { text: "Exploring nature", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "What kind of music do you enjoy?",
        answers: [
            { text: "Classical", points: { background: "Noble" } },
            { text: "Rock", points: { background: "Soldier" } },
            { text: "Jazz", points: { background: "Guild Artisan" } },
            { text: "Folk", points: { background: "Folk Hero" } }
        ]
    },
    {
        question: "How do you prefer to learn?",
        answers: [
            { text: "Through reading", points: { background: "Sage" } },
            { text: "Through practice", points: { background: "Soldier" } },
            { text: "Through observation", points: { background: "Hermit" } },
            { text: "Through interaction", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What motivates you to get out of bed in the morning?",
        answers: [
            { text: "Helping others", points: { background: "Acolyte" } },
            { text: "Achieving goals", points: { background: "Guild Artisan" } },
            { text: "New experiences", points: { background: "Outlander" } },
            { text: "Having fun", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What type of art do you appreciate the most?",
        answers: [
            { text: "Painting", points: { background: "Noble" } },
            { text: "Sculpture", points: { background: "Guild Artisan" } },
            { text: "Performance", points: { background: "Entertainer" } },
            { text: "Literature", points: { background: "Sage" } }
        ]
    },
    {
        question: "How do you view success?",
        answers: [
            { text: "Helping others", points: { background: "Acolyte" } },
            { text: "Achieving personal goals", points: { background: "Guild Artisan" } },
            { text: "Experiencing new things", points: { background: "Outlander" } },
            { text: "Gaining recognition", points: { background: "Entertainer" } }
        ]
    },
    {
        question: "What is your preferred method of transportation?",
        answers: [
            { text: "Walking", points: { background: "Hermit" } },
            { text: "Driving", points: { background: "Guild Artisan" } },
            { text: "Flying", points: { background: "Sage" } },
            { text: "Riding", points: { background: "Outlander" } }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "Talking to someone", points: { background: "Entertainer" } },
            { text: "Exercising", points: { background: "Soldier" } },
            { text: "Meditating", points: { background: "Hermit" } },
            { text: "Distracting myself with activities", points: { background: "Charlatan" } }
        ]
    },
    {
        question: "What is your greatest strength?",
        answers: [
            { text: "Compassion", points: { background: "Acolyte" } },
            { text: "Determination", points: { background: "Soldier" } },
            { text: "Creativity", points: { background: "Entertainer" } },
            { text: "Wisdom", points: { background: "Sage" } }
        ]
    },
    {
        question: "What do you enjoy doing in your free time?",
        answers: [
            { text: "Reading", points: { background: "Sage" } },
            { text: "Playing music", points: { background: "Entertainer" } },
            { text: "Exploring nature", points: { background: "Outlander" } },
            { text: "Crafting", points: { background: "Guild Artisan" } }
        ]
    }
];

const races = {
    "Human": "Humans are adaptable and ambitious.",
    "Elf": "Elves are known for their grace and longevity.",
    "High Elf": "High Elves are graceful and intelligent.",
    "Wood Elf": "Wood Elves are deeply connected to nature.",
    "Dwarf": "Dwarves are sturdy and resilient.",
    "Hill Dwarf": "Hill Dwarves are hardy and resilient.",
    "Mountain Dwarf": "Mountain Dwarves are hardy and strong.",
    "Halfling": "Halflings are cheerful and resourceful.",
    "Lightfoot Halfling": "Lightfoot Halflings are charming and resourceful.",
    "Stout Halfling": "Stout Halflings are strong and resilient.",
    "Tiefling": "Tieflings have infernal heritage and are often shunned.",
    "Asmodeus Tiefling": "Asmodeus Tieflings are charismatic and cunning.",
    "Mephistopheles Tiefling": "Mephistopheles Tieflings are ambitious and driven.",
    "Zariel Tiefling": "Zariel Tieflings are fierce and determined.",
    "Drow": "Drow are mysterious and charismatic.",
    "Seldarine Drow": "Seldarine Drow are mysterious and charismatic.",
    "Lolth-Sworn Drow": "Lolth-Sworn Drow are mysterious and charismatic.",
    "Half-Elf": "Half-Elves are versatile and charismatic.",
    "High Half-Elf": "High Half-Elves are versatile and charismatic.",
    "Wood Half-Elf": "Wood Half-Elves are versatile and charismatic.",
    "Drow Half-Elf": "Drow Half-Elves are versatile and charismatic.",
    "Githyanki": "Githyanki are fierce and disciplined warriors.",
    "Dragonborn": "Dragonborn are powerful and proud.",
    "Half-Orc": "Half-Orcs are strong and resilient."
};

const classes = {
    "Barbarian": "Barbarians are fierce warriors of primitive background.",
    "Bard": "Bards are versatile spellcasters, capable of combat and magic.",
    "Cleric": "Clerics are intermediaries between the mortal world and the distant planes of the gods.",
    "Druid": "Druids revere nature above all, gaining their spells and other magical powers from nature itself.",
    "Fighter": "Fighters are experts in weapons and armor, masters of combat.",
    "Monk": "Monks are masters of martial arts, harnessing the power of their body in pursuit of physical and spiritual perfection.",
    "Paladin": "Paladins are holy warriors, bound to a sacred oath.",
    "Ranger": "Rangers are warriors of the wilderness, skilled in tracking and hunting.",
    "Rogue": "Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation.",
    "Sorcerer": "Sorcerers have innate magical abilities granted by their bloodline.",
    "Warlock": "Warlocks are wielders of magic derived from a bargain with an extraplanar entity.",
    "Wizard": "Wizards are supreme magic-users, defined and united as a class by the spells they cast."
};

const subclasses = {
    "Berserker": "Barbarians who follow the Berserker path are fierce and relentless in battle.",
    "Wildheart": "Barbarians who follow the Wildheart path are deeply connected to nature.",
    "Wild Magic": "Barbarians who follow the Wild Magic path harness the power of wild magic.",
    "College of Lore": "Bards of the College of Lore are masters of knowledge and storytelling.",
    "College of Valor": "Bards of the College of Valor are skilled in combat and inspiration.",
    "College of Swords": "Bards of the College of Swords are skilled combatants and performers.",
    "Life Domain": "Clerics of the Life Domain are devoted to healing and protection.",
    "Light Domain": "Clerics of the Light Domain are devoted to illuminating and banishing darkness.",
    "Trickery Domain": "Clerics of the Trickery Domain are masters of deception and guile.",
    "Knowledge Domain": "Clerics of the Knowledge Domain are seekers of knowledge and understanding.",
    "Nature Domain": "Clerics of the Nature Domain are protectors of nature and its balance.",
    "Tempest Domain": "Clerics of the Tempest Domain harness the power of storms and lightning.",
    "War Domain": "Clerics of the War Domain are devoted to the art of war.",
    "Circle of the Land": "Druids of the Circle of the Land are deeply connected to the natural world.",
    "Circle of the Moon": "Druids of the Circle of the Moon are powerful shapeshifters.",
    "Circle of Spores": "Druids of the Circle of Spores are masters of decay and regeneration.",
    "Battle Master": "Fighters who choose the Battle Master path are tactical experts in combat.",
    "Eldritch Knight": "Fighters who choose the Eldritch Knight path combine martial prowess with arcane magic.",
    "Champion": "Fighters who choose the Champion path excel in combat and physical prowess.",
    "Way of the Open Hand": "Monks of the Way of the Open Hand are masters of martial arts.",
    "Way of Shadow": "Monks of the Way of Shadow are stealthy and agile.",
    "Way of the Four Elements": "Monks of the Way of the Four Elements harness the power of the elements.",
    "Oath of Devotion": "Paladins who take the Oath of Devotion are dedicated to justice and righteousness.",
    "Oath of the Ancients": "Paladins who take the Oath of the Ancients are protectors of nature and light.",
    "Oath of Vengeance": "Paladins who take the Oath of Vengeance seek to punish wrongdoers.",
    "Beast Master": "Rangers who follow the Beast Master path are deeply connected to their animal companions.",
    "Hunter": "Rangers who follow the Hunter path excel in tracking and hunting their enemies.",
    "Gloom Stalker": "Rangers who follow the Gloom Stalker path are masters of stealth and ambush.",
    "Thief": "Rogues who follow the Thief path excel in stealth and cunning.",
    "Arcane Trickster": "Rogues who follow the Arcane Trickster path combine stealth with arcane magic.",
    "Assassin": "Rogues who follow the Assassin path are deadly and efficient killers.",
    "Draconic Bloodline": "Sorcerers with Draconic Bloodline have innate magical abilities tied to dragon heritage.",
    "Wild Magic": "Sorcerers with Wild Magic harness the unpredictable power of wild magic.",
    "Storm Sorcery": "Sorcerers with Storm Sorcery wield the power of storms and lightning.",
    "The Fiend": "Warlocks who make pacts with The Fiend gain powers of fire and brimstone.",
    "The Great Old One": "Warlocks who make pacts with The Great Old One gain powers of madness and mystery.",
    "The Archfey": "Warlocks who make pacts with The Archfey gain powers of enchantment and deception.",
    "School of Evocation": "Wizards of the School of Evocation specialize in offensive magic.",
    "School of Abjuration": "Wizards of the School of Abjuration are masters of protective spells.",
    "School of Necromancy": "Wizards of the School of Necromancy command the power of life and death.",
    "School of Conjuration": "Wizards of the School of Conjuration are masters of summoning creatures and objects.",
    "School of Divination": "Wizards of the School of Divination are masters of foresight and prophecy.",
    "School of Enchantment": "Wizards of the School of Enchantment are masters of charm and manipulation.",
    "School of Illusion": "Wizards of the School of Illusion create fantastic and terrifying illusions.",
    "School of Transmutation": "Wizards of the School of Transmutation transform matter and energy."
};

const backgrounds = {
    "Acolyte": "You have spent your life in the service of a temple to a specific god or pantheon of gods.",
    "Charlatan": "You have always had a way with people, using your charm to deceive and swindle.",
    "Criminal": "You have a history of breaking the law, using your skills for personal gain.",
    "Entertainer": "You are a performer, bringing joy to those around you.",
    "Folk Hero": "You come from humble beginnings and are destined for greatness.",
    "Guild Artisan": "You are a skilled craftsman, a member of a powerful guild.",
    "Hermit": "You have lived a life of seclusion and introspection.",
    "Noble": "You were born into a life of privilege and responsibility.",
    "Outlander": "You grew up in the wilds, far from civilization.",
    "Sage": "You are a scholar, seeking knowledge and understanding.",
    "Sailor": "You have spent your life on the seas, facing its dangers.",
    "Soldier": "You have seen battle and are ready to defend those in need.",
    "Urchin": "You grew up on the streets, relying on your wits and strength to survive."
};

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playMusicButton');

    playButton.addEventListener('click', () => {
        backgroundMusic.play();
        playButton.style.display = 'none'; // Versteckt den Play-Button nach dem Klick
    });
});

function loadQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; // Clear the previous question
    const question = questions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    question.answers.forEach((answer, i) => {
        questionDiv.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value='${JSON.stringify(answer.points)}' required>
                ${answer.text}
            </label><br>`;
    });
    quizForm.appendChild(questionDiv);

    document.querySelectorAll('input[name="question' + index + '"]').forEach(element => {
        element.addEventListener('change', () => {
            document.getElementById('nextButton').style.display = 'inline-block';
        });
    });

    document.querySelectorAll('label').forEach(element => {
        element.addEventListener('mouseover', playHoverSound);
        element.addEventListener('click', playClickSound);
    });

    if (index === questions.length - 1) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'inline-block';
    } else {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    const formData = new FormData(document.getElementById('quizForm'));
    const results = { race: {}, class: {}, subclass: {}, background: {} };

    for (let [key, value] of formData.entries()) {
        const points = JSON.parse(value);
        for (const category in points) {
            if (!results[category][points[category]]) {
                results[category][points[category]] = 0;
            }
            results[category][points[category]]++;
        }
    }

    const finalResults = {
        race: getTopResult(results.race),
        class: getTopResult(results.class),
        subclass: getTopResult(results.subclass),
        background: getTopResult(results.background)
    };

    displayResults(finalResults);
}

function getTopResult(resultCategory) {
    return Object.keys(resultCategory).reduce((a, b) => resultCategory[a] > resultCategory[b] ? a : b);
}

function displayResults(finalResults) {
    const raceDescription = races[finalResults.race];
    const classDescription = classes[finalResults.class];
    const subclassDescription = subclasses[finalResults.subclass];
    const backgroundDescription = backgrounds[finalResults.background];

    const resultText = `
        Your ideal character is a ${finalResults.race} ${finalResults.class} (${finalResults.subclass}) with the ${finalResults.background} background.
        <br><br>
        ${raceDescription}<br>
        ${classDescription}<br>
        ${subclassDescription}<br>
        ${backgroundDescription}
    `;

    document.getElementById('resultText').innerHTML = resultText;
}

function playClickSound() {
    if (!isSFXMuted) {
        document.getElementById('clickSound').play();
    }
}

function playHoverSound() {
    if (!isSFXMuted) {
        document.getElementById('hoverSound').play();
    }
}

let isMusicMuted = false;
let isSFXMuted = false;

function toggleMute(type) {
    if (type === 'music') {
        const audio = document.getElementById('backgroundMusic');
        isMusicMuted = !isMusicMuted;
        audio.muted = isMusicMuted;
        document.getElementById('muteMusicButton').innerText = isMusicMuted ? '🔇' : '🎵';
    } else if (type === 'sfx') {
        isSFXMuted = !isSFXMuted;
        document.getElementById('muteSFXButton').innerText = isSFXMuted ? '🔇' : '🔊';
    }
}
