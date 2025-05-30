// app.js
'use strict';
    // === Riddles array ===

    const riddles = [
      {
        "question": "What dances without feet but taps on your roof when it's time to meet?",
        "answer": "rain",
        "acceptable": ["rain", "the rain"],
        "hints": [
          "I fall from the sky.",
          "My sound can be soothing or loud."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have a face that never frowns, hands that never wave, yet I can move on my own. What am I?",
        "answer": "clock",
        "acceptable": ["clock", "a clock"],
        "hints": [
          "I measure something you experience constantly.",
          "I have numbers or marks around my face."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am bought by the yard and walked on by the foot. What am I?",
        "answer": "carpet",
        "acceptable": ["carpet", "a carpet", "rug"],
        "hints": [
          "I'm laid out across floors.",
          "I can be soft, decorative, and cover large areas."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I feed on trees but am not alive, flickering bright and sometimes feared. What am I?",
        "answer": "fire",
        "acceptable": ["fire", "flame"],
        "hints": [
          "I can give warmth but also cause destruction.",
          "I produce light."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I exist between mountain and sea, but remove my first letter, and you still have me. What am I?",
        "answer": "land",
        "acceptable": ["land", "the land"],
        "hints": [
          "Removing 'l' leaves 'and', which can be read as something linking two things (mountain and sea).",
          "I stretch across the earth's surface."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I am heavier when full and lighter when empty, but I carry the same thing regardless. What am I?",
        "answer": "cloud",
        "acceptable": ["cloud", "a cloud"],
        "hints": [
          "I'm found in the sky.",
          "I hold water."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I wear a cap but have no head; I grow taller but have no legs. What am I?",
        "answer": "mushroom",
        "acceptable": ["mushroom", "fungus"],
        "hints": [
          "I can be edible or poisonous.",
          "I often appear after rain."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can run but have no legs, travel widely but always stay in one piece. What am I?",
        "answer": "nose",
        "acceptable": ["nose", "a nose"],
        "hints": [
          "I'm on your face.",
          "When I'm 'runny,' it's not a good sign."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am shaped by my holder, yet I can reveal the holder's secrets. What am I?",
        "answer": "pen",
        "acceptable": ["pen", "a pen"],
        "hints": [
          "I create letters or drawings.",
          "I need ink to function."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can move slowly or quickly, but I always point in the same direction. What am I?",
        "answer": "compass needle",
        "acceptable": ["compass needle", "a compass needle", "compass", "a compass"],
        "hints": [
          "I'm affected by Earth's magnetic field.",
          "I'm used for navigation."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a question you can answer without saying a word. What am I?",
        "answer": "riddle",
        "acceptable": ["riddle", "a riddle", "puzzle", "a puzzle"],
        "hints": [
          "You often find me puzzling.",
          "I can exist in books or in conversation."
        ],
        "difficulty": "easy"
      },
      {
        "question": "My tail is pinned, yet I run free. On paper, I might belong to you. What am I?",
        "answer": "kite",
        "acceptable": ["kite", "a kite"],
        "hints": [
          "I love the wind.",
          "I'm held by a string."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I never get off the ground, yet I can move mountains with just a whisper. What am I?",
        "answer": "idea",
        "acceptable": ["idea", "a thought", "thought", "a concept", "concept"],
        "hints": [
          "I exist in your mind.",
          "I can change the world if powerful enough."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm ancient but can be brand new. I'm told in words yet not always true. What am I?",
        "answer": "story",
        "acceptable": ["story", "a story", "tale", "a myth", "myth"],
        "hints": [
          "I can be fiction or nonfiction.",
          "You might read me or hear me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bury treasure but do not dig. I am watery but not a drink. What am I?",
        "answer": "ocean",
        "acceptable": ["ocean", "sea"],
        "hints": [
          "I hold many shipwrecks.",
          "I cover much of Earth's surface."
        ],
        "difficulty": "easy"
      },
      {
        "question": "When I'm eaten, I become bigger. When I'm stored away, I become smaller. What am I?",
        "answer": "knowledge",
        "acceptable": ["knowledge", "information", "wisdom"],
        "hints": [
          "The more you 'consume' me, the more I grow.",
          "I'm found in books or through experience."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I change shape but never leave my container, always working silently within. What am I?",
        "answer": "shadow",
        "acceptable": ["shadow", "a shadow", "shade"],
        "hints": [
          "I depend on a light source.",
          "I can stretch, shrink, or vanish."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I walk on four legs in the morning, two legs at noon, and three legs in the evening. But I'm not that famous one. What am I here?",
        "answer": "a metaphor for life's stages",
        "acceptable": [
          "a metaphor for life's stages",
          "human aging metaphor",
          "stages of a human life",
          "life"
        ],
        "hints": [
          "It's a twist on a famous Greek myth's riddle.",
          "Refers to infancy, adulthood, and old age."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I hold seeds but I'm not a farmer. Birds love me, but you might too. What am I?",
        "answer": "sunflower",
        "acceptable": ["sunflower", "a sunflower"],
        "hints": [
          "I track the sun in the sky.",
          "My seeds can be eaten."
        ],
        "difficulty": "easy"
      },
      {
        "question": "The more you take from me, the larger I become. What am I?",
        "answer": "hole",
        "acceptable": ["hole", "a hole"],
        "hints": [
          "I may be in the ground or in a sock.",
          "I expand with subtraction."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have many keys but open no locks. I can help you write. What am I?",
        "answer": "keyboard",
        "acceptable": ["keyboard", "a keyboard", "computer keyboard"],
        "hints": [
          "I might be connected to a computer.",
          "I used to be on typewriters."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I twist and I turn, but I'm not a dancer. Some say I'm puzzling to master. What am I?",
        "answer": "Rubik's Cube",
        "acceptable": ["Rubik's Cube", "rubik's cube", "cube", "puzzle cube"
        ],
        "hints": [
          "I have colorful faces.",
          "I'm a 3D puzzle."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can save your time or waste it, but I'm not money. What am I?",
        "answer": "clock",
        "acceptable": ["clock", "watch", "timer"],
        "hints": [
          "I display hours, minutes, and seconds.",
          "People check me frequently."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I live on paper and in digital realms; I show you places near and far. What am I?",
        "answer": "map",
        "acceptable": ["map", "atlas", "a map"],
        "hints": [
          "I help you navigate.",
          "I have lines and symbols representing roads, borders, etc."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I carry an important message but lack a mouth to speak. I'm sealed and sometimes stamped. What am I?",
        "answer": "envelope",
        "acceptable": ["envelope", "letter envelope", "an envelope"],
        "hints": [
          "I'm used for mail.",
          "I have a flap."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm just one color, but not one size. I'm stuck in place, yet easily drawn on. What am I?",
        "answer": "blackboard",
        "acceptable": ["blackboard", "chalkboard", "a blackboard", "a chalkboard"],
        "hints": [
          "Teachers use me.",
          "Chalk is my companion."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I never get invited to parties, yet I show up anyway and linger if you don't remove me. What am I?",
        "answer": "dust",
        "acceptable": ["dust"],
        "hints": [
          "I'm found on surfaces if not cleaned.",
          "I'm made of tiny particles."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm full of holes but strong as steel, used to separate and sometimes protect. What am I?",
        "answer": "chain link fence",
        "acceptable": ["chain link fence", "fence"],
        "hints": [
          "I often surround yards or properties.",
          "I'm made of metal."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I float without wings, shining at night, but I'm not the moon. What am I?",
        "answer": "star",
        "acceptable": ["star", "a star"],
        "hints": [
          "I'm a celestial body.",
          "I'm visible mostly after sunset."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can hold a home, but I'm not a container. I've roots but am not a plant. What am I?",
        "answer": "family tree",
        "acceptable": ["family tree"],
        "hints": [
          "I shows generations and connections.",
          "It's a diagram, not a literal wooden thing."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm always copied but seldom perfectly, and I reflect what's in front of me. What am I?",
        "answer": "mirror",
        "acceptable": ["mirror"],
        "hints": [
          "I show an image reversed left-to-right.",
          "I can be made of glass."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I ride on a single track but can carry thousands. I connect places without using roads. What am I?",
        "answer": "train",
        "acceptable": ["train", "a train"],
        "hints": [
          "I have cars linked together.",
          "I follow rails."
        ],
        "difficulty": "easy"
      },
      {
        "question": "Some face me with fear, others for fun. I can be rocky or massive, but always rooted. What am I?",
        "answer": "mountain",
        "acceptable": ["mountain", "a mountain"],
        "hints": [
          "I'm climbed by adventurers.",
          "I stand tall above valleys."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I spin threads finer than hair, yet I'm not a tailor. What am I?",
        "answer": "spider",
        "acceptable": ["spider","silkworm"],
        "hints": [
          "I create webs.",
          "I have eight legs."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I come with a bark but rarely bite, though my limbs are often taken. What am I?",
        "answer": "tree",
        "acceptable": ["tree", "a tree"],
        "hints": [
          "I have bark on my exterior.",
          "I can be cut into logs."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have a bed but never sleep, a bank but no money, and a mouth but never eat. What am I?",
        "answer": "river",
        "acceptable": ["river", "a river"],
        "hints": [
          "I flow across land.",
          "Fish swim in me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can show you illusions yet not a magician. I'm flat and bright, but not a light. What am I?",
        "answer": "screen",
        "acceptable": ["screen", "phone screen", "television screen", "computer screen", "a screen"],
        "hints": [
          "You likely look at me daily.",
          "I can display many images."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm passed around in games and can be wild, but I don't bite. What am I?",
        "answer": "card",
        "acceptable": ["card", "playing card"],
        "hints": [
          "I'm used in poker, solitaire, and other games.",
          "I can show suits and numbers."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bow to the sun but never leave my place, spreading petals in a golden face. What am I?",
        "answer": "sunflower",
        "acceptable": ["sunflower", "a sunflower"],
        "hints": [
          "I produce edible seeds.",
          "I often turn to follow sunlight."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can bring noise to life or hush it away. I'm found in a corner or a large array. What am I?",
        "answer": "speaker",
        "acceptable": ["speaker", "loudspeaker"],
        "hints": [
          "Music can come out of me.",
          "I convert electrical signals into sound."
        ],
        "difficulty": "medium"
      },
      {
        "question": "Created by hot, shaped by cold, I'm stuck in the past but seen in the present. What am I?",
        "answer": "fossil",
        "acceptable": ["fossil", "fossils"],
        "hints": [
          "I can be found in rock layers.",
          "I often reveal ancient life forms."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am only visible when you look away, and I vanish if you stare too long. What am I?",
        "answer": "star in peripheral vision",
        "acceptable": ["star in peripheral vision", "dim star", "faint star", "averted vision star"],
        "hints": [
          "This is related to how human eyes work in low light.",
          "Astronomers use averted vision to see me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can fill a room without taking space, and I can vanish with a simple breeze. What am I?",
        "answer": "smell",
        "acceptable": ["smell", "odor", "scent"],
        "hints": [
          "You experience me through your nose.",
          "I spread in the air."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I come from outside yet can warm your inside. I am bright but not a star. What am I?",
        "answer": "sunlight",
        "acceptable": ["sunlight", "sun's rays"],
        "hints": [
          "I arrive each day (weather permitting).",
          "I provide light and warmth."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I hang around all day but never get tired; I can ring, but I'm not a phone. What am I?",
        "answer": "doorbell",
        "acceptable": ["doorbell", "a doorbell"],
        "hints": [
          "I'm near an entrance.",
          "I alert people someone is outside."
        ],
        "difficulty": "easy"
      },
      {
        "question": "If you chase me, I run; if you wait, I come. I'm not your shadow. What am I?",
        "answer": "sleep",
        "acceptable": ["sleep", "rest"],
        "hints": [
          "I usually happen when you're tired.",
          "If you try too hard to find me, I slip away."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a circle that can hold a line, but I'm neither rope nor twine. What am I?",
        "answer": "ring binder",
        "acceptable": ["ring binder", "binder"],
        "hints": [
          "I'm common in offices or schools.",
          "I hold pages together."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I greet you every morning, but I'm not a person or a pet. I can be bright or hidden behind clouds. What am I?",
        "answer": "sunrise",
        "acceptable": ["sunrise", "the sun", "a sunrise"],
        "hints": [
          "It happens daily in the east.",
          "Signals the start of a new day."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm the largest thing you'll ever hold, yet I can fit in your hand. What am I?",
        "answer": "your imagination",
        "acceptable": ["imagination", "your imagination"],
        "hints": [
          "You use me to think of infinite possibilities.",
          "I exist within your mind."
        ],
        "difficulty": "hard"
      },
      {
        "question": "My sound is silent, my cry unseen. I can show rage or calm, but only in the sky. What am I?",
        "answer": "wind",
        "acceptable": ["wind", "the wind"],
        "hints": [
          "You can feel me but not see me.",
          "I whistle or howl when angry."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I hold stories that cannot be read, secrets that cannot be said, and knowledge of eons past. What am I?",
        "answer": "ancient stone",
        "acceptable": ["stone", "rock", "ancient stone"],
        "hints": [
          "I can contain fossils or layers of the planet’s history.",
          "Geologists study me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I have no branches but I've always got leaves, I can be big or small, but I'm never a tree. What am I?",
        "answer": "book",
        "acceptable": ["book", "a book"],
        "hints": [
          "People turn my pages.",
          "I contain words or pictures."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can appear in your eyes, on your cheeks, or in the sky, but I'm never the same for long. What am I?",
        "answer": "color",
        "acceptable": ["color", "a color"],
        "hints": [
          "It varies by emotion or environment.",
          "Rainbows display many of me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I connect two but can't exist without one. I might be short or long, but never alone. What am I?",
        "answer": "bridge",
        "acceptable": ["bridge", "a bridge"],
        "hints": [
          "I help people cross gaps.",
          "Cars can drive over me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I come after the storm, but I'm not the calm. I'm colorful yet have no form. What am I?",
        "answer": "rainbow",
        "acceptable": ["rainbow", "a rainbow"],
        "hints": [
          "I'm a spectrum of light.",
          "I'm an arc in the sky."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I echo with the steps of many, though I'm just a structure. Up or down, I'm helpful. What am I?",
        "answer": "stairs",
        "acceptable": ["stairs", "staircase", "steps", "a flight of stairs"],
        "hints": [
          "I help you change levels in a building.",
          "I'm often next to an elevator."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm something you can see, hear, smell, taste, and feel, yet I'm impossible to hold. What am I?",
        "answer": "memory",
        "acceptable": ["memory", "memories", "a memory"],
        "hints": [
          "I exist in the mind.",
          "I can be triggered by the senses."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I listen but never speak, reflect but never judge, and hold what's in front of me. What am I?",
        "answer": "mirror",
        "acceptable": ["mirror"],
        "hints": [
          "You'll see your face if you look at me.",
          "I shine with reflection but make no sound."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm born in the east, travel across the sky, and rest in the west. What am I?",
        "answer": "the sun",
        "acceptable": ["sun", "the sun"],
        "hints": [
          "I bring daytime.",
          "At night, I'm gone from your view."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a single digit that can stand for many, or stand for none. What am I?",
        "answer": "zero",
        "acceptable": ["0", "zero"],
        "hints": [
          "I represent nothing, but I'm crucial in math.",
          "I'm shaped like an oval or circle."
        ],
        "difficulty": "medium"
      },
      {
        "question": "My first half can stand for power, my second half for identity. Together, I'm an unbroken circle. What am I?",
        "answer": "ring",
        "acceptable": ["ring", "a ring"],
        "hints": [
          "Power ring (like in stories) and personal ring (like a wedding band).",
          "I'm a loop of metal."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am the footsteps of time, the hush of seconds, but I'm not a clock. What am I?",
        "answer": "silence",
        "acceptable": ["silence", "quiet"],
        "hints": [
          "You notice me when nothing else is heard.",
          "I'm intangible."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am carried by the wind, shaped by the ground, and can be hot or cold. What am I?",
        "answer": "sand",
        "acceptable": ["sand"],
        "hints": [
          "I'm found on beaches or deserts.",
          "I can shift and move with gusts."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I break the rules of arithmetic by multiplying when you share me. What am I?",
        "answer": "happiness",
        "acceptable": ["happiness", "joy"],
        "hints": [
          "You feel me as an emotion.",
          "I'm said to grow when you give me away."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I have wings but I'm not a bird; I have a tail but I'm not an animal. What am I?",
        "answer": "airplane",
        "acceptable": ["airplane", "plane"],
        "hints": [
          "I carry passengers through the sky.",
          "I have engines instead of feathers."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I change from minutes to hours but never from day to night. What am I?",
        "answer": "watch face",
        "acceptable": ["watch face", "a watch face", "clock face", "dial", "watch dial"],
        "hints": [
          "You see me on your wrist or wall.",
          "I display time but no AM/PM indicator."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm found in space, yet I'm also in your hand. I may be dense, or just an illusion. What am I?",
        "answer": "black hole (as a phone black screen)",
        "acceptable": ["black hole", "a black hole", "phone screen off (black)"],
        "hints": [
          "In astronomy, I'm extremely dense.",
          "In everyday life, you might 'hold' me as a black screen."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I live among letters yet stand for words. I'm a short line but can mean so much. What am I?",
        "answer": "ampersand",
        "acceptable": ["&", "ampersand"],
        "hints": [
          "I represent the word 'and.'",
          "I evolved from the Latin 'et.'"
        ],
        "difficulty": "hard"
      },
      {
        "question": "I cast no shadow, reflect no light, and make no sound, yet I can be seen. What am I?",
        "answer": "darkness",
        "acceptable": ["darkness", "the dark"],
        "hints": [
          "I am the absence of light.",
          "I exist where light does not reach."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can make you laugh, cry, or think, but I cannot feel. What am I?",
        "answer": "book",
        "acceptable": ["book", "movie", "film"],
        "hints": [
          "I might be a story or a script.",
          "You engage with me for entertainment or knowledge."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I never speak but can repeat words. I can't exist unless you do. What am I?",
        "answer": "echo",
        "acceptable": ["echo", "an echo"],
        "hints": [
          "I'm a reflection of sound.",
          "I depend on walls or surfaces."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am you, yet I'm not you. I'm always near, but never here. What am I?",
        "answer": "reflection",
        "acceptable": ["reflection"],
        "hints": [
          "A mirror reveals me.",
          "I only exist in view of a reflective surface."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can be a light meal or an artful arrangement, found in kitchens and menus. What am I?",
        "answer": "salad",
        "acceptable": ["salad"],
        "hints": [
          "Often has vegetables, sometimes fruits or proteins.",
          "Commonly served cold."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I blossom once, and in that moment, I'm gone. I mark time but am not a clock. What am I?",
        "answer": "firework",
        "acceptable": ["firework", "fireworks"],
        "hints": [
          "Used in celebrations.",
          "Bright colors in the night sky."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I have no bones but a spine, no voice but can tell stories. What am I?",
        "answer": "book",
        "acceptable": ["book", "a book"],
        "hints": [
          "I have pages between covers.",
          "I often have a title on my spine."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can run a race without moving my feet, and sometimes I'm split. What am I?",
        "answer": "second hand (on a clock)",
        "acceptable": [
          "second hand",
          "the second hand on a clock",
          "seconds"
        ],
        "hints": [
          "I race around a clock face.",
          "I measure small units of time."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I create a path for you to follow, though I'm not a guide. I'm found at your feet, but I'm not shoes. What am I?",
        "answer": "footprints",
        "acceptable": ["footprints", "tracks"],
        "hints": [
          "I appear behind you as you walk.",
          "I can be left in sand, snow, or mud."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bend without breaking, reflect without glass, though I'm not a mirror. What am I?",
        "answer": "water surface",
        "acceptable": ["water", "water surface", "reflection in water"],
        "hints": [
          "I'm fluid and found in lakes, rivers, or ponds.",
          "Light bounces off me, creating an image."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can build a wall, write a note, or light a fire, but I'm not alive. What am I?",
        "answer": "paper",
        "acceptable": ["paper"],
        "hints": [
          "I'm thin and flexible.",
          "I'm made from wood pulp."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I wave with no hands, sing with no voice, and connect distant lands. What am I?",
        "answer": "the wind",
        "acceptable": ["wind", "the wind"],
        "hints": [
          "I can move clouds.",
          "You can feel me but not see me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm old when I'm young, yet young when I'm old. What am I?",
        "answer": "fossil fuel (coal, for example)",
        "acceptable": ["coal", "fossil fuel", "oil", "natural gas"],
        "hints": [
          "I'm formed from ancient organisms.",
          "When used as energy, I'm 'newly' produced power."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can stay dry in the water but get soaked in the rain. What am I?",
        "answer": "shadow",
        "acceptable": ["shadow"],
        "hints": [
          "In water, I'm barely noticeable.",
          "Under the rain, you can see me on the ground, getting 'wet' with you."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can stand tall or lay low. I often shape the world around me but I'm not alive. What am I?",
        "answer": "wall",
        "acceptable": ["wall", "a wall"],
        "hints": [
          "I can define boundaries or rooms.",
          "I can be made of stone, wood, or other materials."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can weigh an ounce or a ton but have the same name either way. What am I?",
        "answer": "gold",
        "acceptable": ["gold"],
        "hints": [
          "A precious metal.",
          "Measured in troy ounces or by the tonne."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm in the pages but not the story, used by many who seek knowledge or glory. What am I?",
        "answer": "index",
        "acceptable": ["index", "index of a book"],
        "hints": [
          "I help you find subjects quickly.",
          "Usually at the back of a book."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I travel around the world but always stay in the corner. What am I?",
        "answer": "stamp",
        "acceptable": ["stamp", "postage stamp"],
        "hints": [
          "I'm found on an envelope.",
          "I help mail letters globally."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I may be big or small, but once I'm empty, you get nothing at all. What am I?",
        "answer": "wallet",
        "acceptable": ["wallet", "purse", "empty wallet"],
        "hints": [
          "I hold money and cards.",
          "When I have nothing, I'm flat."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I watch you while you sleep, but I'm neither creepy nor alive. What am I?",
        "answer": "bedside clock",
        "acceptable": ["clock", "alarm clock", "bedside clock"],
        "hints": [
          "Usually placed near your bed.",
          "Tells the time at night."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I thrive on friction yet have no conflict. I'm spun but never dizzy. What am I?",
        "answer": "wheel",
        "acceptable": ["wheel", "a wheel"],
        "hints": [
          "I help things move along the road.",
          "Cars, bikes, and many vehicles need me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can transform darkness into shapes, but I'm not a magician. What am I?",
        "answer": "flashlight",
        "acceptable": ["flashlight", "torch"],
        "hints": [
          "I run on batteries or electricity.",
          "I emit a beam of light."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can seal what's in but let you see. I can trap air without any key. What am I?",
        "answer": "glass jar",
        "acceptable": ["jar", "glass jar", "container"],
        "hints": [
          "Often used in kitchens for storage.",
          "You can see the contents."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I rustle gently without fear, a thousand voices but none can hear. What am I?",
        "answer": "leaves in the wind",
        "acceptable": ["leaves", "tree leaves"],
        "hints": [
          "They make a soft sound when breezy.",
          "They change color in autumn."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I never rest, I'm never still; I move silently from hill to hill. Yet I am always at home. What am I?",
        "answer": "sand dune",
        "acceptable": ["sand dune", "dune"],
        "hints": [
          "Wind shifts me slowly.",
          "Found in deserts or beaches."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I come from honey but I'm not sweet, I'm made by creatures you don't want to meet. What am I?",
        "answer": "beeswax",
        "acceptable": ["beeswax", "wax"],
        "hints": [
          "Used in candles, polish, cosmetics.",
          "Produced by an insect known for stings."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can be up or down, left or right, but I'm none of these directions myself. What am I?",
        "answer": "arrow",
        "acceptable": ["arrow", "arrows"],
        "hints": [
          "I point the way.",
          "I appear on signs or keyboards."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can move the earth yet remain in place; I have an arm but no hand or fingers. What am I?",
        "answer": "excavator",
        "acceptable": ["excavator", "digging machine"],
        "hints": [
          "Used in construction sites.",
          "Has a large bucket on an arm."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I may be cracked or scrambled, but I'm not confused. What am I?",
        "answer": "egg",
        "acceptable": ["egg", "an egg"],
        "hints": [
          "Often used in cooking and baking.",
          "Has a shell with a yolk inside."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I appear in windows but I'm never inside. I'm a silent messenger of the skies. What am I?",
        "answer": "raindrop",
        "acceptable": ["raindrop", "rain"],
        "hints": [
          "I bead up on glass.",
          "I fall from clouds."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I offer perspective but have no sight; I'm a tool for watchers day or night. What am I?",
        "answer": "telescope",
        "acceptable": ["telescope", "binoculars"],
        "hints": [
          "Astronomers use me.",
          "I make distant objects seem closer."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can wave but have no hands, carry surfers but have no arms. What am I?",
        "answer": "ocean wave",
        "acceptable": ["wave", "ocean wave"],
        "hints": [
          "I'm found in the sea.",
          "I crest and crash on shore."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I always look forward yet can show you the past. What am I?",
        "answer": "camera",
        "acceptable": ["camera", "video camera"],
        "hints": [
          "I capture images or videos.",
          "I'm pointed forward to record events."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I tell you how fast you're going but not where you've been. What am I?",
        "answer": "speedometer",
        "acceptable": ["speedometer", "a speedometer"],
        "hints": [
          "Found in cars.",
          "Measures velocity."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can bring good luck or pain, found in green or worn on a chain. What am I?",
        "answer": "four-leaf clover",
        "acceptable": ["clover", "four-leaf clover"],
        "hints": [
          "Known as a lucky charm.",
          "Commonly associated with St. Patrick's Day."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I travel in a loop yet go nowhere, I can keep you fit if you don't despair. What am I?",
        "answer": "treadmill",
        "acceptable": ["treadmill", "running machine"],
        "hints": [
          "Used in gyms or homes for exercise.",
          "The belt moves but you stay in place."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm one word that can mean a short distance or a fight. What am I?",
        "answer": "spar",
        "acceptable": ["spar"],
        "hints": [
          "To spar can mean to box or argue.",
          "A 'spar' can also be a pole, but here it means a short fight."
        ],
        "difficulty": "hard"
      },
      {
        "question": "When you forget me, I disappear; when you remember me, I return. What am I?",
        "answer": "a name",
        "acceptable": ["name", "someone's name"],
        "hints": [
          "I identify a person or thing.",
          "You might say 'It's on the tip of my tongue.'"
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can thread the earth through metal or wood, but I'm not a tailor. What am I?",
        "answer": "drill",
        "acceptable": ["drill", "a drill"],
        "hints": [
          "I bore holes into surfaces.",
          "I can be powered by electricity or battery."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can share your secrets without a mouth, replaying them to the world. What am I?",
        "answer": "recording device",
        "acceptable": ["recording device", "voice recorder", "microphone"],
        "hints": [
          "I store audio or video.",
          "I can be replayed anytime."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can connect two hearts or hold back tears, all in a day's work. What am I?",
        "answer": "handkerchief",
        "acceptable": ["handkerchief", "hanky"],
        "hints": [
          "Used to wipe eyes or a runny nose.",
          "Sometimes given as a token of affection."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can dig a hole but never see the sky, I can help or harm, depending on how I apply. What am I?",
        "answer": "shovel",
        "acceptable": ["shovel", "spade"],
        "hints": [
          "Used in gardening or construction.",
          "You push it into the ground with your foot or arms."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can hide truths behind my lines, or reveal them in a single stroke. What am I?",
        "answer": "graph",
        "acceptable": ["graph", "chart"],
        "hints": [
          "Used to represent data.",
          "Lines, bars, or points are typical forms."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can bring you tears of joy or sorrow, but I'm neither good nor evil. What am I?",
        "answer": "onion",
        "acceptable": ["onion", "an onion"],
        "hints": [
          "I have layers.",
          "I can be cooked or eaten raw, often causing tears when cut."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I shrink when you wash me, but I'm not made of cloth. I'm found in a home, often made of stone. What am I?",
        "answer": "soap bar",
        "acceptable": ["soap", "soap bar"],
        "hints": [
          "I dissolve gradually when used with water.",
          "I clean you."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a cunning shape that can trap a mind. I twist in corners yet remain flat. What am I?",
        "answer": "maze (on paper)",
        "acceptable": ["maze", "labyrinth"],
        "hints": [
          "You solve me with a pencil or pen typically.",
          "I have dead ends and correct paths."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I may sting you or save you, I'm found in cabinets and in fields. What am I?",
        "answer": "needle",
        "acceptable": ["needle", "syringe needle", "sewing needle"],
        "hints": [
          "Used by doctors for shots.",
          "Used by tailors for sewing."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I teach lessons without speaking, show the world without traveling, and can be used by all ages. What am I?",
        "answer": "book",
        "acceptable": ["book", "a book"],
        "hints": [
          "A source of knowledge or stories.",
          "Its pages hold words or pictures."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I come from dirt but can hold water, I aid your thirst or feed a flower. What am I?",
        "answer": "clay pot",
        "acceptable": ["clay pot", "pot", "terracotta pot"],
        "hints": [
          "Made from earth and shaped by hand or mold.",
          "Used for plants or storing liquids."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm sweet but can be bitter, a guilty pleasure for many, yet I'm just a treat. What am I?",
        "answer": "chocolate",
        "acceptable": ["chocolate"],
        "hints": [
          "Derived from cocoa beans.",
          "Comes in varieties like milk, dark, or white."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I open to close and close to open, made of metal or wood, I'm found in every home. What am I?",
        "answer": "door",
        "acceptable": ["door", "a door"],
        "hints": [
          "You go through me to enter or exit a room.",
          "I can be locked with a key."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can run out but never truly leave, I'm intangible yet measured. What am I?",
        "answer": "time",
        "acceptable": ["time"],
        "hints": [
          "You can't see me directly, only measure me.",
          "Every clock deals with me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can cross the entire sky, but I have no legs; I'm sometimes broken but never destroyed. What am I?",
        "answer": "rainbow",
        "acceptable": ["rainbow"],
        "hints": [
          "Occurring after rain with sunlight.",
          "Often associated with colorful arcs."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I cut things down without teeth or claws, I am a swinging friend to lumberjacks. What am I?",
        "answer": "axe",
        "acceptable": ["axe", "ax"],
        "hints": [
          "Has a metal blade and wooden handle.",
          "Used to chop wood."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I separate you from me, though I'm mostly empty space. What am I?",
        "answer": "wall",
        "acceptable": ["wall"],
        "hints": [
          "Often made of concrete, wood, or brick.",
          "Marks the boundary of rooms."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can hear you but cannot listen, repeat you but never speak first. What am I?",
        "answer": "echo",
        "acceptable": ["echo", "an echo"],
        "hints": [
          "It's a reflection of sound.",
          "Happens in canyons, large halls, or tunnels."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a detail of life that shapes the world, yet I weigh nothing and can float on the wind. What am I?",
        "answer": "seed",
        "acceptable": ["seed", "a seed"],
        "hints": [
          "Plants come from me.",
          "Some are carried by a breeze."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I have leaves but I'm not a tree, a spine but no bones. What am I?",
        "answer": "book",
        "acceptable": ["book", "a book"],
        "hints": [
          "Some say I'm the best companion for learning.",
          "You flip through my pages."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I hear everything yet say nothing; I step on no one yet I'm always stepping. What am I?",
        "answer": "earphone/earbud in your ear",
        "acceptable": ["earphones", "earbuds", "headphones"],
        "hints": [
          "I rest in or on your ears.",
          "I transmit sound but produce no words myself."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I stand before the horizon, tall and grand. Yet from afar, I can vanish into haze or clouds. What am I?",
        "answer": "skyscraper",
        "acceptable": ["skyscraper", "tower"],
        "hints": [
          "I dominate city skylines.",
          "People work or live inside me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can lie between truth and tales, forming illusions that set sails. What am I?",
        "answer": "fiction",
        "acceptable": ["fiction", "make-believe", "fantasy"],
        "hints": [
          "I'm a type of literature.",
          "I can blend the real with the imagined."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I protect and preserve, but I'm not a guard or mother. What am I?",
        "answer": "container",
        "acceptable": ["container", "box", "jar"],
        "hints": [
          "Used to keep items safe or fresh.",
          "Can be made of plastic, glass, or metal."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have feet but never run, I have tracks but no train. What am I?",
        "answer": "measuring tape",
        "acceptable": ["measuring tape", "tape measure"],
        "hints": [
          "I measure length in feet or meters.",
          "I can be rolled up and stored easily."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I share a name with a fruit, but I'm a creature of the sea. What am I?",
        "answer": "orange clownfish",
        "acceptable": ["clownfish", "orange clownfish"],
        "hints": [
          "Famous from an animated film about finding one.",
          "Bright orange with white stripes."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can show your reflection but I'm not a mirror; I can distort your shape but I'm not an artist. What am I?",
        "answer": "spoon",
        "acceptable": ["spoon", "silver spoon"],
        "hints": [
          "Utensil used for eating soup or cereal.",
          "Its curved surface can reflect images oddly."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I open and close in a flash, freezing time with every blink, yet I’ve got no legs to run. What am I?",
        "answer": "camera shutter",
        "acceptable": ["camera shutter", "shutter"],
        "hints": [
          "Occurs in photography.",
          "Opens and closes to let in light."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can measure your heart, yet I don't love or hate. I'm found in a clinic. What am I?",
        "answer": "stethoscope",
        "acceptable": ["stethoscope"],
        "hints": [
          "Doctors use me to listen.",
          "I detect heartbeat and lung sounds."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can't hold you, yet you are held by me. I can't keep you, yet you belong to me. What am I?",
        "answer": "gravity",
        "acceptable": ["gravity"],
        "hints": [
          "A force that pulls objects toward each other.",
          "Holds you to Earth."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can be deep or shallow, loud or silent, calm or raging, yet I have no emotion. What am I?",
        "answer": "water",
        "acceptable": ["water"],
        "hints": [
          "Found in lakes, oceans, rivers, or glasses.",
          "Essential for life."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a small spark that can start a massive flame, but I'm disposable. What am I?",
        "answer": "matchstick",
        "acceptable": ["matchstick", "match"],
        "hints": [
          "Used to ignite candles or fires.",
          "Made of wood or cardboard with a chemical tip."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep you on track but never move myself; I can be digital or an ancient artifact. What am I?",
        "answer": "calendar",
        "acceptable": ["calendar"],
        "hints": [
          "Organizes days, weeks, and months.",
          "You use me to remember appointments or events."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have an alphabet but no words, lines but no sentences. I help solve unknowns. What am I?",
        "answer": "mathematical notation",
        "acceptable": ["math notation", "mathematics", "equations"],
        "hints": [
          "Symbols like x, y, +, −, etc.",
          "Used to express formulas."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can pick you up when you're down, yet I'm just an arrangement of shapes and lines. What am I?",
        "answer": "music",
        "acceptable": ["music", "song", "musical notes"],
        "hints": [
          "Written on a staff with notes.",
          "People listen to me for emotional support."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a word with multiple forms, a label of images but also a group of letters. What am I?",
        "answer": "album",
        "acceptable": ["album", "photo album", "music album"],
        "hints": [
          "Can hold photographs or songs.",
          "It's a collection of related items."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I start off blank but can become a masterpiece; you hold me, yet I define your hold on me. What am I?",
        "answer": "canvas",
        "acceptable": ["canvas", "art canvas"],
        "hints": [
          "Used by artists for painting.",
          "It can transform with creativity."
        ],
        "difficulty": "hard"
      },
      {
        "question": "My purpose is to guard but I have no mind; I'm a steel friend to those behind. What am I?",
        "answer": "shield",
        "acceptable": ["shield"],
        "hints": [
          "Knights carry me in battle.",
          "I protect against weapons."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can hold thousands of words yet weigh less than a feather. What am I?",
        "answer": "ebook",
        "acceptable": ["ebook", "e-book", "digital book"],
        "hints": [
          "Stored in electronic devices.",
          "You can flip digital pages."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm precious to many, stolen by some, wasted by others, and recorded by all. What am I?",
        "answer": "time",
        "acceptable": ["time"],
        "hints": [
          "It's an abstract measurement, not an object.",
          "Clocks, watches, and timers track me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I wear away mountains yet cannot break a twig. I drown the land but keep it alive. What am I?",
        "answer": "water",
        "acceptable": ["water"],
        "hints": [
          "Erodes rock over time.",
          "Essential for plants and animals."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I roam the skies with no wings to beat, I can be silent or rumbling when we meet. What am I?",
        "answer": "cloud",
        "acceptable": ["cloud", "clouds"],
        "hints": [
          "Condensed water vapor in the atmosphere.",
          "Sometimes brings rain."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can help you catch your breath, or catch a fish if you adapt me. What am I?",
        "answer": "net",
        "acceptable": ["net", "a net"],
        "hints": [
          "In sports, I catch balls or pucks.",
          "Fishermen use me too."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can speak any language but have no tongue; I'm found in your pocket. What am I?",
        "answer": "smartphone translator",
        "acceptable": ["phone", "smartphone translator", "translator app"],
        "hints": [
          "A device or app that converts text or speech between languages.",
          "Needs electricity or battery."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm made of letters yet shape the world, I represent places but I'm not a word. What am I?",
        "answer": "address",
        "acceptable": ["address", "street address"],
        "hints": [
          "It's how you find a location.",
          "Often includes numbers and street names."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I appear in logic but I'm not rational, I'm an illusion that can trick your perception. What am I?",
        "answer": "optical illusion",
        "acceptable": ["optical illusion"],
        "hints": [
          "Sometimes used in psychology.",
          "Lines or colors can fool the brain."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I stay unseen unless I fail; I'm your constant companion in a machine. What am I?",
        "answer": "software code",
        "acceptable": ["software", "code", "operating system"],
        "hints": [
          "Runs in the background of your computer or phone.",
          "Usually invisible unless there's an error."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am a silent teacher, showing patterns of logic, yet I'm on paper, not in lectures. What am I?",
        "answer": "puzzle",
        "acceptable": ["puzzle", "crossword puzzle", "logic puzzle", "a puzzle"],
        "hints": [
          "You solve me to train your mind.",
          "I provide a challenge or riddle on a page."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I cut through time with no blade, no handle. I separate now from then. What am I?",
        "answer": "moment",
        "acceptable": ["moment", "the present moment", "instant"],
        "hints": [
          "It's extremely short, ephemeral.",
          "We move through it continuously."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I turn hours into minutes and minutes into hours, quietly ensuring your schedule. What am I?",
        "answer": "planner",
        "acceptable": ["planner", "calendar planner", "agenda"],
        "hints": [
          "Often used to organize daily tasks.",
          "Physical or digital format."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can race you up or down, but I never leave my track. What am I?",
        "answer": "escalator",
        "acceptable": ["escalator"],
        "hints": [
          "Found in malls or airports.",
          "Moves continuously between floors."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I let you speak across oceans, share laughs across borders, but I'm not your voice. What am I?",
        "answer": "telephone line",
        "acceptable": ["telephone", "telephone line", "phone call"],
        "hints": [
          "Can be wired or wireless.",
          "Transfers voices electrically or digitally."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I begin as a canvas of potential, shaped by the mind, yet I can be erased in a moment. What am I?",
        "answer": "drawing on paper",
        "acceptable": ["drawing", "sketch", "pencil drawing"],
        "hints": [
          "You use art supplies to create me.",
          "An eraser can remove me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can track your route but I'm not a map; I can measure your pace but I'm not a clock. What am I?",
        "answer": "fitness tracker",
        "acceptable": ["fitness tracker", "step counter", "pedometer"],
        "hints": [
          "Often worn on the wrist.",
          "Counts your steps and monitors runs."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can represent a star or a sea, a mood or a team, on a surface for all to see. What am I?",
        "answer": "flag",
        "acceptable": ["flag"],
        "hints": [
          "Represents countries or organizations.",
          "Usually has specific colors or symbols."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can mimic your moves without a brain, and vanish when darkness reigns. What am I?",
        "answer": "shadow",
        "acceptable": ["shadow"],
        "hints": [
          "Depends on a light source.",
          "Can't exist in total darkness."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am the seat of reason, but I am not a chair. What am I?",
        "answer": "brain",
        "acceptable": ["brain"],
        "hints": [
          "Inside your skull.",
          "You think with me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I might hold your meal or your secrets, never complaining of the weight. What am I?",
        "answer": "bag",
        "acceptable": ["bag", "backpack", "sack"],
        "hints": [
          "Used to carry groceries, books, or other items.",
          "Can be plastic, paper, or fabric."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm used to direct or control, but I'm not a sign or a general. I'm small but impactful. What am I?",
        "answer": "remote control",
        "acceptable": ["remote control", "remote"],
        "hints": [
          "Operates a TV or other electronic device.",
          "Typically handheld."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I stand tall in the forest, but I'm not a tree. Inside, I can store a lifetime. What am I?",
        "answer": "bookshelf",
        "acceptable": ["bookshelf", "bookcase"],
        "hints": [
          "Holds many volumes.",
          "Tall piece of furniture."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I hold your daily life in small black lines, but I'm not a diary. What am I?",
        "answer": "barcode on products",
        "acceptable": ["barcode", "UPC code"],
        "hints": [
          "Found on store items.",
          "Scanned at checkout."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can support an argument, be thrown in a fight, or line a walkway. What am I?",
        "answer": "stone",
        "acceptable": ["stone", "rock"],
        "hints": [
          "Used in building and landscaping.",
          "Can be used as a weapon, though not recommended."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can sparkle in the sun, endure forever, or be worthless, depending on what I'm made of. What am I?",
        "answer": "ring",
        "acceptable": ["ring", "wedding ring", "band"],
        "hints": [
          "Symbol of commitment or fashion.",
          "Often metal with possible gemstones."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I gently hold onto your finger but can't grip; I can be plain or full of glitter. What am I?",
        "answer": "ring (jewelry)",
        "acceptable": ["ring"],
        "hints": [
          "You wear me on a finger.",
          "Symbolic in weddings, engagements."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep your mind on track but have no thoughts of my own. I'm the structure behind every plan. What am I?",
        "answer": "schedule",
        "acceptable": ["schedule", "timetable"],
        "hints": [
          "Lists times and tasks.",
          "Often used in workplaces and schools."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can play a song but have no tune, highlight a movie but make no sound. What am I?",
        "answer": "spotlight",
        "acceptable": ["spotlight", "stage light"],
        "hints": [
          "Used in theaters or stages.",
          "Focuses light on a performer or object."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can shock you quietly or deliver a spark, I'm everywhere but invisible. What am I?",
        "answer": "electricity",
        "acceptable": ["electricity", "static electricity"],
        "hints": [
          "Powers your devices.",
          "You don't see it, but you see its effects in lights and electronics."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a puzzle of letters, forming words across and down. What am I?",
        "answer": "crossword",
        "acceptable": ["crossword puzzle", "crossword"],
        "hints": [
          "Often found in newspapers.",
          "Clues lead you to fill squares with letters."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bring life in gloom, color in sorrow, yet I'm just a silent witness to the sun. What am I?",
        "answer": "rainbow",
        "acceptable": ["rainbow"],
        "hints": [
          "Appears when sunlight meets raindrops.",
          "Symbol of hope in many cultures."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I show your steps but have no legs, can beep and blink but have no voice. What am I?",
        "answer": "pedometer",
        "acceptable": ["pedometer", "step counter", "fitness tracker"],
        "hints": [
          "Tracks how many steps you take.",
          "Often worn on the waist or wrist."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm strong enough to stop a car, yet I'm nothing without friction. What am I?",
        "answer": "brake pad",
        "acceptable": ["brake pad", "car brakes", "brakes"],
        "hints": [
          "Used in vehicles to slow or stop wheels.",
          "Works with discs or drums."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I start with a stroke but I'm not a painting, I hold words but I'm not a mouth. What am I?",
        "answer": "written sentence",
        "acceptable": ["sentence", "written sentence"],
        "hints": [
          "Formed by letters and punctuation.",
          "You create me with a pen or keyboard."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can measure your success but can't measure itself. I'm intangible but you can feel me. What am I?",
        "answer": "achievement",
        "acceptable": ["achievement", "accomplishment", "success"],
        "hints": [
          "It's a concept of progress or completion.",
          "You experience it as a feeling or milestone."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I bring families together but I'm often a small box. I can show you anything but hold nothing. What am I?",
        "answer": "television",
        "acceptable": ["television", "tv"],
        "hints": [
          "You watch me in the living room.",
          "I display channels, shows, or movies."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I was a spark in your mind before taking form, I can be big or small, changing the world or none at all. What am I?",
        "answer": "idea",
        "acceptable": ["idea", "concept"],
        "hints": [
          "Your mind generates me.",
          "I can grow if nurtured."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm spread across pages but I'm not a book; I'm a representation of reality but I'm not real. What am I?",
        "answer": "atlas",
        "acceptable": ["atlas", "map atlas"],
        "hints": [
          "A collection of maps.",
          "Named after a Titan in Greek mythology."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm planted in the ground but not a seed, can hold a structure but never grow. What am I?",
        "answer": "foundation pillar",
        "acceptable": ["foundation", "pillar", "post"],
        "hints": [
          "Supports buildings or homes.",
          "Made of stone, concrete, or wood."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be a cradle of life or a harbinger of doom; I often appear in the news. What am I?",
        "answer": "volcano",
        "acceptable": ["volcano"],
        "hints": [
          "Releases lava and ash.",
          "Fertile soils often surround me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can travel around the world in seconds but never leave my metal shell. What am I?",
        "answer": "electronic signal (internet data)",
        "acceptable": ["internet data", "electronic signal"],
        "hints": [
          "Flows through cables or wirelessly.",
          "Transfers information globally."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I hold promise or despair, depending on which side you take me from. What am I?",
        "answer": "chance",
        "acceptable": ["chance", "opportunity", "risk"],
        "hints": [
          "It's intangible but can change your life.",
          "People often say you should seize me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be sweet, sour, or bland, used in kitchen alchemy, I'm found across the land. What am I?",
        "answer": "sauce",
        "acceptable": ["sauce", "condiment"],
        "hints": [
          "Enhances flavor of food.",
          "Examples include tomato, soy, or gravy."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can create connections or chaos; I'm intangible yet can cause real harm. What am I?",
        "answer": "rumor",
        "acceptable": ["rumor", "gossip"],
        "hints": [
          "Spreads from person to person.",
          "Can be unverified or false."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I change shape and roam freely, but I'm not alive. You can trap me, but I'll slip away. What am I?",
        "answer": "water",
        "acceptable": ["water"],
        "hints": [
          "Takes the shape of its container.",
          "Flows downhill unless obstructed."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am the start of an end and the end of a start, typically found in language but I'm not a letter. What am I?",
        "answer": "a space",
        "acceptable": ["space", "blank space"],
        "hints": [
          "Separates words in a sentence.",
          "Indicated by a blank gap on a page."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can light up your world but I'm not the sun, I can be by your bedside or high on a wall. What am I?",
        "answer": "lamp",
        "acceptable": ["lamp", "lightbulb", "light"],
        "hints": [
          "Uses electricity or fuel.",
          "Helps you see in the dark."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm there when you begin and there when you end, guiding your day by dividing the night. What am I?",
        "answer": "dawn and dusk",
        "acceptable": ["dawn", "dusk", "sunrise and sunset"],
        "hints": [
          "I mark transitions in daylight.",
          "Sometimes people watch me for beautiful skies."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I consume the world yet can't survive without it, coloring leaves and fueling growth. What am I?",
        "answer": "photosynthesis",
        "acceptable": ["photosynthesis", "plants using photosynthesis"],
        "hints": [
          "Plants use me to make energy.",
          "Requires sunlight and carbon dioxide."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm an open invitation to understanding, a silent host that leads you to knowledge. What am I?",
        "answer": "library",
        "acceptable": ["library"],
        "hints": [
          "A collection of books and resources.",
          "You can borrow items from me."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can unite or divide, found in math and relationships. What am I?",
        "answer": "division sign or slash",
        "acceptable": ["division sign", "slash", "fraction bar"],
        "hints": [
          "Used between numbers to separate a ratio or fraction.",
          "In language, sometimes used to separate two options."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be pressed or broken, but I'm not an egg. I can be a measure of success. What am I?",
        "answer": "record",
        "acceptable": ["record", "world record"],
        "hints": [
          "People try to set or break me in competitions.",
          "Also can store music (vinyl) or data."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I rustle, whisper, and sometimes scream, but I can't speak. I'm seen swaying side to side. What am I?",
        "answer": "tall grass",
        "acceptable": ["grass", "tall grass", "field of grass"],
        "hints": [
          "Waves in the wind.",
          "Green and grows from the earth."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I vanish as soon as you name me, for I cannot exist once discovered. What am I?",
        "answer": "surprise",
        "acceptable": ["surprise", "secret surprise"],
        "hints": [
          "Once revealed, it's no longer the same.",
          "Often used in parties or revelations."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am broken when spoken, lost when sought, and found in calm. What am I?",
        "answer": "silence",
        "acceptable": ["silence", "quiet"],
        "hints": [
          "The moment you speak, it's gone.",
          "It can be serene or awkward."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can spread knowledge faster than wind, but I'm not alive. I rest in wires or wave through air. What am I?",
        "answer": "internet",
        "acceptable": ["internet", "the internet"],
        "hints": [
          "A global network of information.",
          "Accessed via computers, phones, etc."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can show you the world but cannot move, reflect your history but have no memory. What am I?",
        "answer": "photo album",
        "acceptable": ["photo album", "album", "photo", "photograph"],
        "hints": [
          "Filled with pictures you've taken.",
          "Captures moments in time."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a second self you never knew, living in data but shaped like you. What am I?",
        "answer": "digital avatar",
        "acceptable": ["avatar", "digital avatar", "online persona"],
        "hints": [
          "Used in virtual worlds or video games.",
          "Represents you on the internet."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can show you the future but am not a fortune teller, show you the past but am not a historian. What am I?",
        "answer": "calendar",
        "acceptable": ["calendar"],
        "hints": [
          "Has days, months, and years.",
          "You use me to plan or review events."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I transform a house into a home, yet you cannot buy me in a store. What am I?",
        "answer": "love",
        "acceptable": ["love", "affection"],
        "hints": [
          "An emotion that makes a place feel special.",
          "Shared among family or friends."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I break in the morning yet I'm not damaged, I can happen all day. What am I?",
        "answer": "daybreak",
        "acceptable": ["daybreak", "sunrise"],
        "hints": [
          "Another term for sunrise.",
          "Represents the end of night."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I remain single but can represent many, I can be sweet or bitter but I'm not a taste. What am I?",
        "answer": "chocolate bar square",
        "acceptable": ["chocolate square", "chocolate bar piece"],
        "hints": [
          "One piece of something that can be broken into multiple pieces.",
          "Often shared as small squares."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I hold your place but never hold you, I can be plain or fancy and often made of paper. What am I?",
        "answer": "bookmark",
        "acceptable": ["bookmark", "place marker"],
        "hints": [
          "Helps you return to a page in a book.",
          "Can be used in physical or digital form."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a series of ups and downs, yet I'm not a roller coaster. My pattern can speak volumes. What am I?",
        "answer": "heartbeat (EKG)",
        "acceptable": ["heartbeat", "heart rate monitor", "ECG", "EKG"],
        "hints": [
          "Seen on a medical monitor as spikes.",
          "Represents life in a person or animal."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a stage for grand events but have no curtains or seats, open to all yet can't hold many. What am I?",
        "answer": "street corner performance",
        "acceptable": ["street corner", "public sidewalk stage"],
        "hints": [
          "Buskers or street performers often use me.",
          "It's an everyday setting turned into a performance space."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I walk in your dreams but never leave my bed, I can be your hero or your dread. What am I?",
        "answer": "imagination",
        "acceptable": ["imagination", "your imagination"],
        "hints": [
          "Occurs when you daydream or sleep.",
          "Creates images in your mind."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be a guard against the light, or a friend for your sight. I'm not a window. What am I?",
        "answer": "curtain",
        "acceptable": ["curtain", "drape"],
        "hints": [
          "Used to block or filter sunlight.",
          "Hangs from a rod above a window."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I fill a space yet leave it untouched, appear full but weigh nothing. What am I?",
        "answer": "bubble",
        "acceptable": ["bubble", "soap bubble"],
        "hints": [
          "A film of liquid with air inside.",
          "Fragile and pops easily."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm an alarm of sorts but not a sound, I move quickly and vanish to the ground. What am I?",
        "answer": "warning flare",
        "acceptable": ["flare", "warning flare"],
        "hints": [
          "Used to signal or alert in emergencies.",
          "Burns brightly for a short time."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I guide your steps but take none of my own, I'm found where safety is shown. What am I?",
        "answer": "handrail",
        "acceptable": ["handrail", "railing"],
        "hints": [
          "Helps prevent falls on stairs or balconies.",
          "You can grip me for support."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I stand by your bed and hold secrets in a drawer, I'm silent but you rely on me more and more. What am I?",
        "answer": "nightstand",
        "acceptable": ["nightstand", "bedside table"],
        "hints": [
          "Next to your bed for a lamp or phone.",
          "Often has one or two drawers."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can find answers without asking, find questions without answering, I'm a tool for your mind. What am I?",
        "answer": "search engine",
        "acceptable": ["search engine", "google", "bing"],
        "hints": [
          "Used on computers or phones to look up information.",
          "Has replaced many libraries for quick questions."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I have a core but no apple, can run but has no legs. What am I?",
        "answer": "computer",
        "acceptable": ["computer", "CPU"],
        "hints": [
          "Has a processing core.",
          "It can 'run' programs but doesn't physically move."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be torn without paper, broken without a bone, and fixed without tools. What am I?",
        "answer": "promise",
        "acceptable": ["promise", "trust"],
        "hints": [
          "It's an agreement or vow.",
          "When you break it, it can harm relationships."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I hide in the heart of success and remain in the face of failure, yet I'm just a little thing. What am I?",
        "answer": "letter U (in sUccess, failUre)",
        "acceptable": ["the letter U"],
        "hints": [
          "I'm part of the words 'sUccess' and 'failUre.'",
          "A single character in each word."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm hunted for the light in my head, but the rest of me is hardly known. What am I?",
        "answer": "anglerfish",
        "acceptable": ["anglerfish"],
        "hints": [
          "A deep-sea fish with a luminous lure.",
          "One of the most bizarre creatures in the ocean."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can bring life from a seed, or carve rivers in stone. I can be a gentle drop or a torrent. What am I?",
        "answer": "rain",
        "acceptable": ["rain"],
        "hints": [
          "Falling water from clouds.",
          "Can erode landscapes over time."
        ],
        "difficulty": "easy"
      },
      {
        "question": "People see me and tremble, but I only reflect your fear. What am I?",
        "answer": "haunted mirror (or mirror in a haunted house)",
        "acceptable": ["mirror", "scary mirror"],
        "hints": [
          "Found in spooky stories or movies.",
          "Shows your own frightened face."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm the sum of your parts but don't count them; you are mine, yet you control me. What am I?",
        "answer": "body",
        "acceptable": ["body", "human body"],
        "hints": [
          "Your entire physical self.",
          "You can move me at will."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I turn a caterpillar into a butterfly, but I'm neither insect nor time. What am I?",
        "answer": "chrysalis",
        "acceptable": ["chrysalis", "cocoon"],
        "hints": [
          "Stage of metamorphosis.",
          "Sometimes called a pupa."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I watch the watchers yet remain unseen, an eye without a body. What am I?",
        "answer": "security camera",
        "acceptable": ["security camera", "CCTV camera"],
        "hints": [
          "Often installed in stores or on streets.",
          "Captures footage for security."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm older than you but born every day, shaped by events yet can't shape myself. What am I?",
        "answer": "history",
        "acceptable": ["history"],
        "hints": [
          "A record of past events.",
          "Continuously updated as time passes."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I am white but also blank, I can start a masterpiece or end up recycled. What am I?",
        "answer": "paper",
        "acceptable": ["paper", "sheet of paper"],
        "hints": [
          "You write or print on me.",
          "I come from trees."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can measure the planet or fit in your palm, guiding you though I never move. What am I?",
        "answer": "map",
        "acceptable": ["map", "atlas"],
        "hints": [
          "A representation of geography.",
          "Sometimes found in apps or on paper."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be crystal clear yet impossible to see through, I shape moments but have no shape of my own. What am I?",
        "answer": "glass lens",
        "acceptable": ["lens", "glass lens", "camera lens"],
        "hints": [
          "Used in cameras or eyeglasses to focus light.",
          "Transparent but can distort or clarify images."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can tell your future but can't change your fate, I'm not alive yet I'm your daily date. What am I?",
        "answer": "calendar",
        "acceptable": ["calendar"],
        "hints": [
          "Contains days, weeks, months.",
          "You look at me to plan events."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can blow your mind or blow away in the wind; I'm knowledge or dust depending on use. What am I?",
        "answer": "book dust / pages (figurative)",
        "acceptable": ["book pages", "dusty book", "knowledge in a book"],
        "hints": [
          "Sits on a shelf until read.",
          "If neglected, it gathers dust; if read, it expands your mind."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a bite of wisdom but no one truly chews me. What am I?",
        "answer": "proverb",
        "acceptable": ["proverb", "saying", "adage"],
        "hints": [
          "A short, common phrase with a lesson.",
          "Often culturally passed down."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can crack jokes or secrets, though I have no voice. What am I?",
        "answer": "note passed among friends",
        "acceptable": [
          "note",
          "secret note",
          "written note"
        ],
        "hints": [
          "Shared on paper in class or between people.",
          "Has written words but no sound."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I watch you sleep but do not judge, I mark time in numbers but hold no grudge. What am I?",
        "answer": "alarm clock",
        "acceptable": ["clock", "alarm clock"],
        "hints": [
          "Usually placed on a bedside table.",
          "Wakes you up in the morning."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I protect what you write, yet I'm not a vault. I'm slender but strong in spine. What am I?",
        "answer": "folder",
        "acceptable": ["folder", "file folder"],
        "hints": [
          "Holds papers together and keeps them safe.",
          "Used in offices or schools."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can carry your voice but have no ears, reflect your style but show no fear. What am I?",
        "answer": "telephone case",
        "acceptable": ["phone case", "telephone case"],
        "hints": [
          "Protects a communication device.",
          "Can come in different designs."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am the hush after chaos, the calm in a storm, the space between words. What am I?",
        "answer": "silence",
        "acceptable": ["silence", "quiet"],
        "hints": [
          "Often used for reflection or peace.",
          "Broken by any sound."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can reveal details up close but show no pictures by myself. What am I?",
        "answer": "magnifying glass",
        "acceptable": ["magnifying glass", "loupe"],
        "hints": [
          "Used by detectives or readers with poor vision.",
          "Makes small things appear larger."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I rest on your face but I'm neither flesh nor bone, I can see the world but the world sees me. What am I?",
        "answer": "glasses",
        "acceptable": ["glasses", "eyeglasses"],
        "hints": [
          "Help correct your vision.",
          "Worn on the nose and ears."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep a copy of your days, but I'm not a photographer. I track your tasks but I'm not your boss. What am I?",
        "answer": "diary or journal",
        "acceptable": ["diary", "journal", "planner"],
        "hints": [
          "You write in me regularly.",
          "I hold personal thoughts or schedules."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can hold your attention by letting you hold me, yet I can also slip through your fingers. What am I?",
        "answer": "smartphone",
        "acceptable": ["smartphone", "phone"],
        "hints": [
          "A handheld device for communication and entertainment.",
          "You can drop me if you're not careful."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I rotate around a pivot, bridging near and far, yet I'm just a tool. What am I?",
        "answer": "compass (drafting compass)",
        "acceptable": ["drafting compass", "compass tool"],
        "hints": [
          "Used to draw circles in geometry.",
          "Has a hinge and a sharp point."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be read in braille or in text, I tell a story but I'm not a speaker. What am I?",
        "answer": "book",
        "acceptable": ["book", "ebook", "braille book"],
        "hints": [
          "Has letters or raised dots.",
          "Provides stories, knowledge, or instructions."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a host to many guests but don't serve food or drink, I can be jam-packed yet empty of humans. What am I?",
        "answer": "website",
        "acceptable": ["website", "webpage"],
        "hints": [
          "Holds visitors in the digital realm.",
          "Can have thousands or millions of hits."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can break with stress or open new doors, though I'm not made of wood or metal. What am I?",
        "answer": "mindset",
        "acceptable": ["mindset", "willpower", "mental barrier"],
        "hints": [
          "It's intangible and shaped by thoughts.",
          "Can lead to breakthroughs or collapses."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am an oath you can't swear, a vow you don't vocalize, yet it determines your fate. What am I?",
        "answer": "choice (internal decision)",
        "acceptable": ["choice", "decision"],
        "hints": [
          "Made in your mind.",
          "You don't always announce me, but I shape your path."
        ],
        "difficulty": "hard"
      },
      {
        "question": "You fear me if you have secrets, but I'm just evidence of time. What am I?",
        "answer": "footprint or fingerprint",
        "acceptable": ["footprint", "fingerprint", "trace evidence"],
        "hints": [
          "Often used by detectives.",
          "Unique to each individual."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm made by collision yet can be quiet, I'm shaped by nature yet shaped by you. What am I?",
        "answer": "footpath (trail)",
        "acceptable": ["footpath", "trail"],
        "hints": [
          "Created when people or animals repeatedly walk the same route.",
          "Doesn't have an official blueprint."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I bring closure to your thoughts but I'm not an idea; I'm the final piece in your writing. What am I?",
        "answer": "period (full stop)",
        "acceptable": ["period", "full stop"],
        "hints": [
          "Placed at the end of a sentence.",
          "A small dot with big significance in grammar."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I freeze without cold, melt without heat, formed by time or by cheat. What am I?",
        "answer": "ice sculpture in a story or metaphorical 'frozen moment'",
        "acceptable": [
          "ice sculpture",
          "frozen time moment"
        ],
        "hints": [
          "Can exist naturally or artificially.",
          "Temperature can shape or destroy me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can show you the stars or the past, but I'm not a telescope nor a historian. What am I?",
        "answer": "night sky photography or photo album",
        "acceptable": ["photo album", "photograph", "night sky photo"],
        "hints": [
          "Captures moments in time or cosmic scenes.",
          "Viewed after the fact."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a page in your life but not in a book; I remind you of what you already know. What am I?",
        "answer": "memory",
        "acceptable": ["memory", "reminder"],
        "hints": [
          "Stored in your mind.",
          "Can be recalled but not physically held."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I mark the line between enough and too much, though I'm often unclear. What am I?",
        "answer": "limit",
        "acceptable": ["limit", "boundary"],
        "hints": [
          "You can push me or respect me.",
          "I define how far something can go."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm the same shape as a donut but you don't eat me, I'm an anchor in space but not for ships. What am I?",
        "answer": "torus shape (mathematical)",
        "acceptable": ["torus", "toroid"],
        "hints": [
          "A geometric shape like a doughnut.",
          "Used in advanced mathematics and physics examples."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am the reason behind the reason, intangible yet real; I can drive you mad or set you free. What am I?",
        "answer": "motive (motivation)",
        "acceptable": ["motive", "motivation", "reason"],
        "hints": [
          "It's the cause behind action.",
          "People often look for me when searching for 'why.'"
        ],
        "difficulty": "hard"
      },
      {
        "question": "I run a marathon without a body, exhaust myself but don't perspire, essential to technology. What am I?",
        "answer": "processor (CPU)",
        "acceptable": ["processor", "cpu"],
        "hints": [
          "The 'brain' of a computer.",
          "Performs millions of calculations per second."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I have a deck but no ocean, I can be shuffled but I'm not a playlist. What am I?",
        "answer": "playing cards",
        "acceptable": ["cards", "deck of cards"],
        "hints": [
          "Standard set has 52 of me.",
          "Used for games like poker or solitaire."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I hold within me the seeds of new life, yet I am merely a single cell. What am I?",
        "answer": "egg cell",
        "acceptable": ["egg cell", "ovum"],
        "hints": [
          "In biology, female reproductive cell.",
          "Fertilization leads to an embryo."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I follow you into rooms but not outside, I'm welcome in some places, frowned upon in others. What am I?",
        "answer": "shoes on your feet",
        "acceptable": ["shoes", "footwear"],
        "hints": [
          "You might remove me at the door in some cultures.",
          "Protects your feet."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a subtle thread in conversation, guiding meaning without words. What am I?",
        "answer": "context",
        "acceptable": ["context"],
        "hints": [
          "Determines how statements are interpreted.",
          "Essential for understanding nuances."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I strike without warning but cause no pain, I come before a brilliant refrain. What am I?",
        "answer": "lightning (before thunder)",
        "acceptable": ["lightning", "bolt of lightning"],
        "hints": [
          "Seen in storms.",
          "Thunder usually follows me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I claim to protect you from mistakes but can sabotage you if left unchecked. What am I?",
        "answer": "auto-correct",
        "acceptable": ["auto-correct", "autocorrect"],
        "hints": [
          "A feature on smartphones or computers.",
          "It changes your text, sometimes incorrectly."
        ],
        "difficulty": "medium"
      },
        {
        "question": "I push the boundaries of emptiness but hold no shape until you fill me. What am I?",
        "answer": "cup",
        "acceptable": ["cup", "drinking cup"],
        "hints": [
          "I can be made of glass, plastic, or ceramic.",
          "I’m useful at parties, mealtimes, or whenever you're thirsty."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I dance in spirals but have no legs; I'm often found in a toy box. What am I?",
        "answer": "slinky",
        "acceptable": ["slinky"],
        "hints": [
          "I can 'walk' down the stairs by myself if started correctly.",
          "I'm usually made of metal or plastic coils."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I have a trunk but am not a tree; I can be small or large, yet carry your memories. What am I?",
        "answer": "suitcase",
        "acceptable": ["suitcase", "luggage"],
        "hints": [
          "I travel wherever you go.",
          "You zip or latch me to keep your belongings safe."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am a single letter that doubles as a question, often used to seek a reason. What am I?",
        "answer": "Y (why)",
        "acceptable": ["Y", "why"],
        "hints": [
          "I'm spelled like a question word but also just a letter of the alphabet.",
          "Children often repeat me when they're curious."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I guard a kingdom with thousands of tiny subjects, each tucked in its own bed. What am I?",
        "answer": "beehive",
        "acceptable": ["beehive", "hive"],
        "hints": [
          "My 'subjects' produce honey.",
          "We live together in an organized colony with a queen."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I hush the world with tiny crystals that drift down, yet I bring a chill. What am I?",
        "answer": "snow",
        "acceptable": ["snow", "snowfall"],
        "hints": [
          "I fall from clouds in cold weather.",
          "Children often love playing in me with sleds and snowmen."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a line you cannot cross, though you can see me every day. What am I?",
        "answer": "horizon",
        "acceptable": ["horizon"],
        "hints": [
          "It's where the sky appears to meet the land or sea.",
          "No matter how you travel, you can never actually reach me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I open doors with a click, though I'm not a key. What am I?",
        "answer": "computer mouse",
        "acceptable": ["mouse", "computer mouse"],
        "hints": [
          "I help you navigate a screen.",
          "I typically have buttons and sometimes a scroll wheel."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be as vast as an ocean or small as a puddle, but I'm only visible when night arrives. What am I?",
        "answer": "star reflection in water",
        "acceptable": [
          "star reflection",
          "reflection of the night sky"
        ],
        "hints": [
          "I rely on clear dark skies and a still surface.",
          "I disappear when daylight or bright lights return."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I’m the line that never ends yet always loops back, found in geometry. What am I?",
        "answer": "circle",
        "acceptable": ["circle"],
        "hints": [
          "I have infinite symmetry around my center.",
          "My perimeter is often described by pi."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I help you find your way on paper, though I’m neither a compass nor a map. What am I?",
        "answer": "legend or key (on a map)",
        "acceptable": ["legend", "map key", "key"],
        "hints": [
          "I explain symbols and colors on a diagram.",
          "Without me, a map's markings would be mysterious."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a tool for many stories, yet I never read them myself. What am I?",
        "answer": "bookmark",
        "acceptable": ["bookmark", "page marker"],
        "hints": [
          "I mark your place so you can return later.",
          "I'm often made of paper, leather, or fabric."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can break a fall or break your stride; I'm found in parks, but I'm not alive. What am I?",
        "answer": "grass",
        "acceptable": ["grass", "lawn"],
        "hints": [
          "Often green and covers fields or yards.",
          "Cut me too short, and I'll struggle to regrow."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I am for the birds but rarely see the sky; I'm wooden and sometimes has seeds. What am I?",
        "answer": "birdhouse",
        "acceptable": ["birdhouse", "nesting box"],
        "hints": [
          "People hang me up high to attract new feathered tenants.",
          "I have a small hole for entry but no windows."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I step forward silently in darkness but vanish at dawn, tracing each move you make. What am I?",
        "answer": "footsteps in dew",
        "acceptable": [
          "footprints in dew",
          "footsteps on grass at night"
        ],
        "hints": [
          "You might see me on fresh grass early in the morning.",
          "Once the sun rises and dries the area, I'm gone."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can track your hours on a wrist, yet I'm not a clock by name. What am I?",
        "answer": "watch",
        "acceptable": ["watch", "wristwatch"],
        "hints": [
          "I usually have a band or strap.",
          "People glance at me to check the time."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I sit in your sight but rarely get noticed; I'm a structure of color that filters the world. What am I?",
        "answer": "eyelid (or eyelashes)",
        "acceptable": ["eyelid", "eyelashes"],
        "hints": [
          "I protect your eyes from dust and light.",
          "I blink automatically throughout the day."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I stand guard at the edge of something deep, to keep you from taking a dangerous leap. What am I?",
        "answer": "railing",
        "acceptable": ["railing", "guardrail"],
        "hints": [
          "You often find me on balconies or at cliffs.",
          "I'm usually made of metal or wood."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I hold a parade of letters but never read them, often traveling the distance to deliver messages. What am I?",
        "answer": "mailbag",
        "acceptable": ["mailbag", "postbag", "postal sack"],
        "hints": [
          "Carried by a postal worker.",
          "Filled with envelopes and small packages."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can wave to greet you but remain rooted in the same place. What am I?",
        "answer": "flag on a flagpole",
        "acceptable": ["flag", "flag on a pole"],
        "hints": [
          "I represent countries or causes.",
          "I move when wind blows but can't move on my own."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep things fresh, yet I don't exist without cold. What am I?",
        "answer": "refrigerator",
        "acceptable": ["refrigerator", "fridge"],
        "hints": [
          "Keeps your food from spoiling quickly.",
          "Usually found in every kitchen."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I mimic the cosmos with swirling patterns, yet I'm just a treat. What am I?",
        "answer": "cotton candy",
        "acceptable": ["cotton candy", "candy floss", "fairy floss"],
        "hints": [
          "Often found at fairs or amusement parks.",
          "Spun sugar that looks fluffy."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can let you see behind but I'm not a mirror, found mostly on roads. What am I?",
        "answer": "rearview mirror (car side mirror)",
        "acceptable": ["rearview mirror", "side mirror"],
        "hints": [
          "Crucial for safe driving.",
          "Reflects what’s happening behind a vehicle."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I revolve around a flame, yet I am not burned; I measure time but I'm not a watch. What am I?",
        "answer": "candle clock (or the markings on a candle)",
        "acceptable": ["candle clock", "marked candle"],
        "hints": [
          "Historically used before mechanical clocks were widespread.",
          "When I melt past each mark, another interval has passed."
        ],
        "difficulty": "hard"
      },
      {
        "question": "You step on me unknowingly when you leave home, but I'm designed to keep you safe. What am I?",
        "answer": "doormat",
        "acceptable": ["doormat", "door mat"],
        "hints": [
          "I'm often the first line of defense against dirt.",
          "Some have welcome messages."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can sweeten your day or spoil it if I'm sour, yet I'm just a slice of life. What am I?",
        "answer": "fruit (like lemon or lime slice)",
        "acceptable": ["fruit slice", "citrus slice", "fruit"],
        "hints": [
          "You may add me to drinks or dishes for flavor.",
          "Some varieties are sweet, others are tart."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I separate neighbors yet I'm full of holes, letting wind and eyes pass through. What am I?",
        "answer": "chain fence",
        "acceptable": ["chain link fence", "fence"],
        "hints": [
          "Made of metal with diamond-shaped gaps.",
          "Used to mark property boundaries."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bring words to your ear without a single sound wave. What am I?",
        "answer": "closed captions",
        "acceptable": ["closed captions", "subtitles"],
        "hints": [
          "Help those who cannot hear or who prefer reading dialogue.",
          "Appear on screen, typically for movies or TV shows."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I might stand between you and the light, but I'm not a wall; I can be drawn or opened at will. What am I?",
        "answer": "window curtain",
        "acceptable": ["curtain", "drape", "window drape"],
        "hints": [
          "Found near windows.",
          "Blocks or filters sunlight when closed."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I give you direction but I'm not a sign; you take me in to stay healthy. What am I?",
        "answer": "vitamin",
        "acceptable": ["vitamin", "supplement"],
        "hints": [
          "Found in foods or pills.",
          "A, B, C, D, etc. are common types."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I preserve moments but can't see them; I'm coated in chemicals yet produce art. What am I?",
        "answer": "photographic film",
        "acceptable": ["film", "photo film"],
        "hints": [
          "Used in old cameras.",
          "Developed into pictures in a darkroom."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I stand on a stage but never bow; I'm essential to many shows. What am I?",
        "answer": "microphone stand",
        "acceptable": ["mic stand", "microphone stand", "boom mic stand", "boom mic"],
                "hints": [
          "Supports a microphone for singers or speakers.",
          "Usually made of metal with adjustable height."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm the last piece placed but the first one noticed in a puzzle. What am I?",
        "answer": "final puzzle piece",
        "acceptable": ["last puzzle piece"],
        "hints": [
          "Completes the picture in a jigsaw.",
          "Creates a sense of satisfaction when put in place."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I roam deserts in caravans yet can't survive without water, though I'm not a plant. What am I?",
        "answer": "camel",
        "acceptable": ["camel", "dromedary", "bactrian camel"],
        "hints": [
          "I store fat in my humps, not water, but I'm known as the 'ship of the desert.'",
          "Humans use me for transportation and carrying goods."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be poured but I'm not a liquid, shaped but I'm not alive, used for fun or building. What am I?",
        "answer": "sand",
        "acceptable": ["sand"],
        "hints": [
          "Children often play with me in a box.",
          "I'm basically tiny grains of rock."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I slip through your arms though I may be thick or thin; you can try to hold me, but it's all in vain. What am I?",
        "answer": "waterfall",
        "acceptable": ["waterfall"],
        "hints": [
          "I plunge from a high place to a lower place.",
          "Famous ones include Niagara and Victoria."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I show you the future but can't predict it, I show you the past but can't remember it. What am I?",
        "answer": "schedule board or planner",
        "acceptable": ["schedule board", "planner board", "calendar board"],
        "hints": [
          "Often found in offices or kitchens as a whiteboard or corkboard.",
          "You manually update me with upcoming events or notes."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I arrive in waves yet never crash, bringing the world in bits and bytes. What am I?",
        "answer": "wifi signal",
        "acceptable": ["wifi", "wireless internet", "wifi signal"],
        "hints": [
          "Sends data through the air.",
          "You likely connect to me with a password."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm the part of the city that lights the dark, but I'm not a building or a billboard. What am I?",
        "answer": "streetlamp",
        "acceptable": ["streetlight", "street lamp"],
        "hints": [
          "Planted along sidewalks or roads to illuminate them at night.",
          "Often spaced evenly, turning on at dusk."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I give signals of caution or readiness in a cycle, yet I don't speak. What am I?",
        "answer": "traffic light",
        "acceptable": ["traffic light", "stoplight"],
        "hints": [
          "Has red, yellow, and green displays.",
          "Controls vehicle flow at intersections."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I reflect pride and identity, though I'm just cloth and color. What am I?",
        "answer": "flag",
        "acceptable": ["flag"],
        "hints": [
          "Often raised on a pole.",
          "Represents a country or organization."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I host fireworks without a fuse, storms without water, and lights without wires. What am I?",
        "answer": "the sky",
        "acceptable": ["sky", "the sky"],
        "hints": [
          "You see me when you look up outdoors.",
          "I can change color throughout the day."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can sharpen your ideas or your blade, though I'm neither wise nor a sword. What am I?",
        "answer": "whetstone",
        "acceptable": ["whetstone", "sharpening stone"],
        "hints": [
          "Used to hone knives and tools.",
          "Adding water or oil helps me do my job."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I might fill your plate in the morning but I'm not a main course; I'm a swirl of crunch. What am I?",
        "answer": "cereal",
        "acceptable": ["cereal", "breakfast cereal"],
        "hints": [
          "Often eaten with milk.",
          "Comes in many varieties—sweet, plain, fruity, etc."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I quietly track your steps inside, yet I'm not a digital device. What am I?",
        "answer": "floor mat with footprints",
        "acceptable": ["floor mat", "welcome mat with footprints"],
        "hints": [
          "I collect dust or water from your shoes.",
          "Sometimes leaves an imprint if wet or dirty."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I might share your secrets on paper though I never speak, often stored in an envelope. What am I?",
        "answer": "letter",
        "acceptable": ["letter", "written letter"],
        "hints": [
          "People write me by hand or print me before sending.",
          "I'm sealed, stamped, and delivered by mail."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I stretch across a page, bridging your words, but I'm not a sentence. What am I?",
        "answer": "line break",
        "acceptable": ["line break", "new line"],
        "hints": [
          "I'm a formatting element in text.",
          "I start a new row of words."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a path for questions but hold no answers myself, found in schools or labs. What am I?",
        "answer": "chalkboard (blackboard)",
        "acceptable": ["chalkboard", "blackboard"],
        "hints": [
          "Teachers write on me, then erase me.",
          "I can be dusty if not cleaned."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can swirl in a cup or rush in a river, hot or cold, I'm a lifesaver. What am I?",
        "answer": "tea or water swirl",
        "acceptable": ["tea swirl", "swirling water", "liquid swirl"],
        "hints": [
          "Can be used to quench thirst or for relaxation.",
          "One version is brewed from leaves, the other is essential for life."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a single color square that might decide your fate if drawn, often found in a deck. What am I?",
        "answer": "joker card or chance card",
        "acceptable": ["joker card", "chance card"],
        "hints": [
          "Sometimes I'm wild in certain games.",
          "You often remove me from standard playing card decks."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I brighten the ground below me but am invisible at night, scattered among city streets. What am I?",
        "answer": "lamp post light pools",
        "acceptable": ["light pools on the ground", "streetlamp pools of light"],
        "hints": [
          "You see me in circles under each streetlight.",
          "I vanish when the light is off."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be sticky yet sweet, formed by nature or in a factory. What am I?",
        "answer": "syrup",
        "acceptable": ["syrup", "maple syrup", "corn syrup"],
        "hints": [
          "Often poured on pancakes or waffles.",
          "Can come from trees or processed sugar."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I help shape your words but I'm not a teacher; I produce letters yet can't read them. What am I?",
        "answer": "typewriter",
        "acceptable": ["typewriter"],
        "hints": [
          "Mechanical device used before computers to type documents.",
          "Each key strikes an inked ribbon to print letters."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I spin with every cycle but never leave my post; I'm crucial to your clothes. What am I?",
        "answer": "washing machine drum",
        "acceptable": ["washing machine drum", "drum in a washing machine"],
        "hints": [
          "I rotate wet laundry inside a home appliance.",
          "Soap and water swirl around me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I talk through lines but have no mouth, carrying minds across time. What am I?",
        "answer": "book of poetry",
        "acceptable": ["poetry book", "poem"],
        "hints": [
          "I'm filled with verses and stanzas.",
          "I speak emotions without a voice."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I point out your path on a trail, but I remain rooted in one spot. What am I?",
        "answer": "signpost",
        "acceptable": ["signpost", "trail sign"],
        "hints": [
          "Hikers look for me to stay on the correct route.",
          "I often have arrows or distances noted."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be inflated or deflated, used in celebrations or experiments, often made of latex. What am I?",
        "answer": "balloon",
        "acceptable": ["balloon"],
        "hints": [
          "Children love me at birthday parties.",
          "I can float if filled with helium."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I carry water uphill, powered by mechanics, with no thirst of my own. What am I?",
        "answer": "water pump",
        "acceptable": ["pump", "water pump"],
        "hints": [
          "Often used in wells or to circulate water in homes.",
          "Requires electricity or manual force."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I create illusions in rooms, making them appear bigger or different. Yet I'm flat. What am I?",
        "answer": "mirror wall",
        "acceptable": ["mirrored wall", "full wall mirror"],
        "hints": [
          "Reflects the surroundings for visual effect.",
          "Often used in dance studios or small spaces."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm worn for safety but I'm not a seatbelt or helmet; I protect your hands from harm. What am I?",
        "answer": "gloves",
        "acceptable": ["gloves", "safety gloves"],
        "hints": [
          "Used in construction, gardening, or cooking.",
          "Can be made of leather, rubber, or cloth."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can stand tall without legs, breathe without lungs, and live for centuries. What am I?",
        "answer": "tree",
        "acceptable": ["tree"],
        "hints": [
          "I produce oxygen and provide shade.",
          "I have rings that tell my age."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I run on the edge of creation but leave no footprints. I'm found in poems and dreams. What am I?",
        "answer": "imagination's horizon",
        "acceptable": ["the horizon of imagination", "edge of imagination"],
        "hints": [
          "A conceptual boundary where ideas meet reality.",
          "You can never quite reach it because it's all in the mind."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can show your reflection but I'm not a mirror. I might move when you move. What am I?",
        "answer": "shiny metal surface (like a spoon)",
        "acceptable": [
          "shiny metal",
          "metal surface"
        ],
        "hints": [
          "Polished enough to reflect shapes.",
          "Often found in kitchens or toolboxes."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I offer growth in knowledge but I'm not a teacher; I'm often found on a shelf. What am I?",
        "answer": "encyclopedia",
        "acceptable": ["encyclopedia"],
        "hints": [
          "A collection of volumes with articles on various subjects.",
          "Replaced in many homes by the internet."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I give you a subtle reminder with a small poke, but I am neither a friend nor foe. What am I?",
        "answer": "safety pin",
        "acceptable": ["safety pin", "pin"],
        "hints": [
          "Used to fasten pieces of fabric or hold bandages.",
          "If misused, I might prick you."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be small as a button or large as a boulder, prized for my clarity but formed under pressure. What am I?",
        "answer": "diamond",
        "acceptable": ["diamond"],
        "hints": [
          "A precious stone often used in jewelry.",
          "Formed from carbon deep underground."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I contain crowds yet have no voice, host cheers without ears. What am I?",
        "answer": "stadium",
        "acceptable": ["stadium", "arena"],
        "hints": [
          "People gather here to watch sports or concerts.",
          "I can be open-air or under a dome."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I read your face daily but I'm not a person; you hold me in your hand though I'm not alive. What am I?",
        "answer": "smartphone facial recognition",
        "acceptable": ["phone facial recognition", "smartphone face scanner"],
        "hints": [
          "Used to unlock devices by scanning features.",
          "Works with a front-facing camera."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I gather dust in the shadows but I'm an open invitation to knowledge. What am I?",
        "answer": "library book on a shelf",
        "acceptable": ["library book", "unused book"],
        "hints": [
          "I need a curious mind to be opened.",
          "Though I contain wisdom, I'm powerless alone."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I hold onto your cords but I'm not a knot; I keep things untangled. What am I?",
        "answer": "cable organizer",
        "acceptable": ["cable tie", "cord organizer"],
        "hints": [
          "Used to bundle wires neatly together.",
          "Can be plastic or Velcro."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I lie in a pile yet I'm not rubbish, used by cooks to bring aroma. What am I?",
        "answer": "herb leaves",
        "acceptable": ["herbs", "herb leaves", "dried herbs"],
        "hints": [
          "Adds flavor to food when sprinkled in.",
          "Commonly found dried in jars or fresh in gardens."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I build up a fortress on a wound but I'm not a mason, protecting until new skin grows. What am I?",
        "answer": "scab",
        "acceptable": ["scab"],
        "hints": [
          "Formed by your body after a cut or scrape.",
          "Eventually falls off when healing is done."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I carry your words through the air, though I'm no bird and have no wings. What am I?",
        "answer": "radio waves",
        "acceptable": ["radio waves", "radio signal"],
        "hints": [
          "Used in broadcasting and wireless communication.",
          "Invisible but can be detected by the right device."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I may form a trio or stand alone in a corner, supporting more than you might expect. What am I?",
        "answer": "tripod",
        "acceptable": ["tripod", "camera tripod"],
        "hints": [
          "Commonly used with cameras or telescopes.",
          "Has three legs for stability."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm the melody of nature heard at dawn, yet I speak no human language. What am I?",
        "answer": "birdsong",
        "acceptable": ["birdsong", "birds chirping"],
        "hints": [
          "You hear me most often in the early morning.",
          "I can come from multiple feathered creatures."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm slender and tall, but not a skyscraper; I measure out your liquids with lines. What am I?",
        "answer": "graduated cylinder",
        "acceptable": ["graduated cylinder", "measuring cylinder"],
        "hints": [
          "Used in science labs to measure volume.",
          "Has markings for precise readings."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can bring you luck or leave you wishing, found in fields but easily overlooked. What am I?",
        "answer": "four-leaf clover",
        "acceptable": ["four-leaf clover"],
        "hints": [
          "Considered rare among its three-leaf counterparts.",
          "Often associated with Irish symbolism."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I lie hidden under your feet, running lines of power, yet I don't glow on my own. What am I?",
        "answer": "electrical cable underground",
        "acceptable": ["underground power cable", "buried power line"],
        "hints": [
          "Buried to protect from weather damage.",
          "Carries electricity to homes and buildings."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm the quiet sibling of the rainbow, seen when light meets water in the night. What am I?",
        "answer": "moonbow",
        "acceptable": ["moonbow", "lunar rainbow"],
        "hints": [
          "Formed by moonlight rather than sunlight.",
          "Much rarer and fainter than its daytime version."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I bring storms of paper but contain no rain, used by students before big exams. What am I?",
        "answer": "flashcards",
        "acceptable": ["flashcards", "study cards"],
        "hints": [
          "Often used in memorization or practice sessions.",
          "One side has a question or term, the other side the answer."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can carry a queen and all her subjects, yet I'm not a carriage. What am I?",
        "answer": "chessboard",
        "acceptable": ["chessboard"],
        "hints": [
          "I support multiple pieces in a strategic battle.",
          "I'm checkered with 64 squares."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep your hands off the heat but have no hands myself, often found in kitchens. What am I?",
        "answer": "oven mitt",
        "acceptable": ["oven mitt", "oven glove", "pot holder"],
        "hints": [
          "Padded protection for handling hot dishes.",
          "Frequently hung near the stove or oven."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm the space between lines on a page, giving words room to breathe. What am I?",
        "answer": "line spacing",
        "acceptable": ["spacing", "line spacing"],
        "hints": [
          "Writers or publishers adjust me for readability.",
          "Too little of me makes text crowded."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I watch over farmland with spinning arms, yet I'm not alive. What am I?",
        "answer": "windmill",
        "acceptable": ["windmill"],
        "hints": [
          "Historically used to grind grain or pump water.",
          "Modern versions generate electricity."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I cling to the edge of your shoe, collecting what you step in, though I'm not sticky. What am I?",
        "answer": "mud or dirt on soles",
        "acceptable": ["mud on shoes", "dirt on soles"],
        "hints": [
          "Easily tracked inside if not cleaned off.",
          "Often found after a walk in the rain or garden."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I bear the brunt of your scribbling anger or idle doodles yet make no complaints. What am I?",
        "answer": "notepad",
        "acceptable": ["notepad", "scratch paper", "paper pad"],
        "hints": [
          "Often used for jotting quick ideas or random sketches.",
          "I'm cheap, common, and easily discarded."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I rise from the ashes without being a phoenix, shaped by heat yet not alive. What am I?",
        "answer": "smoke",
        "acceptable": ["smoke"],
        "hints": [
          "Created by combustion.",
          "Floats upward unless there's no airflow."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can reflect everything yet remain invisible if perfectly done. What am I?",
        "answer": "window glass",
        "acceptable": ["glass window", "window pane"],
        "hints": [
          "Lets light in but can reflect like a mirror in certain angles or conditions.",
          "When very clean, you might walk into me by accident!"
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a piece of metal or plastic, small yet significant, holding together pages or hair. What am I?",
        "answer": "clip",
        "acceptable": ["paper clip", "hair clip", "clip"],
        "hints": [
          "Comes in many forms: to hold paper or hold hair in place.",
          "Easily bendable but returns to shape."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I store data in grooves, spun by a needle, though I'm older technology. What am I?",
        "answer": "vinyl record",
        "acceptable": ["record", "vinyl record"],
        "hints": [
          "Music lovers collect me for analog sound.",
          "A turntable is needed to play me."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can be the edge of a cliff or a page, a pivot point for turning. What am I?",
        "answer": "margin",
        "acceptable": ["margin", "edge margin"],
        "hints": [
          "In writing, I'm the blank space around text.",
          "In geography, I'm where land abruptly drops off."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can be plastic or porcelain, I hold your daily brew. I'm shaped for sipping. What am I?",
        "answer": "mug",
        "acceptable": ["mug", "coffee mug", "tea mug"],
        "hints": [
          "Typically has a handle on one side.",
          "Often found next to a coffee maker or kettle."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I hold up the roof yet have no arms, I'm essential in buildings but often taken for granted. What am I?",
        "answer": "pillar",
        "acceptable": ["pillar", "column"],
        "hints": [
          "Used structurally to support weight above.",
          "Can be decorative in architecture."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm the permanent shadow of your pen, revealing your every stroke. What am I?",
        "answer": "ink",
        "acceptable": ["ink"],
        "hints": [
          "It flows onto paper, leaving a trace of your words.",
          "Comes in cartridges or wells, used by writing instruments."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can float on water without being alive, often bridging docks or shores. What am I?",
        "answer": "floating bridge",
        "acceptable": ["floating bridge", "pontoon bridge"],
        "hints": [
          "Made of hollow containers or pontoons that stay on the surface.",
          "Allows crossing over water without permanent pillars."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I color your words yet I'm not a printer; I'm found on many desks. What am I?",
        "answer": "highlighter",
        "acceptable": ["highlighter pen", "highlighter"],
        "hints": [
          "Brightly marks important text.",
          "Often yellow, pink, or green with fluorescent ink."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I ride the rails up and down inside buildings, carrying passengers silently. What am I?",
        "answer": "elevator",
        "acceptable": ["elevator", "lift"],
        "hints": [
          "Saves people the effort of climbing stairs.",
          "Has buttons for different floors."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a symbol of endings, yet I'm used to start new lines. What am I?",
        "answer": "period or full stop key on a keyboard",
        "acceptable": ["period key", "full stop key"],
        "hints": [
          "In writing, I signal the end of a sentence.",
          "On a computer, pressing me can also end commands or input."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I catch your eye in a store aisle, shining from within, but I'm not a light bulb. What am I?",
        "answer": "glass showcase",
        "acceptable": ["display case", "glass display case"],
        "hints": [
          "Used to present valuable or interesting items for sale or viewing.",
          "Transparent walls so you can see inside."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a small house you carry with you, though I offer no real shelter. What am I?",
        "answer": "hermit crab shell",
        "acceptable": ["hermit crab's shell", "hermit crab shell"],
        "hints": [
          "Used by a creature that outgrows and finds new ones.",
          "It's not grown by the creature itself."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I guard your dreams but I'm not your mind; I'm a framework that holds up where you rest. What am I?",
        "answer": "bed frame",
        "acceptable": ["bed frame", "bed base"],
        "hints": [
          "You place a mattress on top of me.",
          "Often made of wood or metal."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I keep track of all your digits, though I'm not a bank. What am I?",
        "answer": "calculator",
        "acceptable": ["calculator"],
        "hints": [
          "Performs arithmetic or more advanced math.",
          "Once a separate device, now often part of phones."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I lay hidden in the ground until I sprout, bearing life yet silent. What am I?",
        "answer": "seed",
        "acceptable": ["seed"],
        "hints": [
          "Contains the embryo of a plant.",
          "Needs soil, water, and warmth to grow."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can cry tears of molten rock, shaping landscapes over ages. What am I?",
        "answer": "volcano",
        "acceptable": ["volcano"],
        "hints": [
          "Erupts with lava and ash from beneath the Earth’s crust.",
          "Creates fertile soil over time."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a flexible friend for your feet, though I'm not shoes; I'm hidden within them. What am I?",
        "answer": "sock",
        "acceptable": ["sock", "socks"],
        "hints": [
          "Provides comfort and can be made of cotton or wool.",
          "Often gets lost in the laundry."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I focus your vision but have no sight myself; I may rest on your nose. What am I?",
        "answer": "glasses or spectacles",
        "acceptable": ["eyeglasses", "spectacles", "glasses"],
        "hints": [
          "Corrects your vision if you're near- or far-sighted.",
          "Has two lenses in a frame."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I’m the seat that never sits, found in your car to ensure your child's safety. What am I?",
        "answer": "car seat (child seat)",
        "acceptable": ["car seat", "child seat"],
        "hints": [
          "Designed specifically for infants or toddlers.",
          "Secured with seat belts or LATCH systems."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I form from molten rock and time, prized for construction or art. What am I?",
        "answer": "granite",
        "acceptable": ["granite", "igneous rock"],
        "hints": [
          "An igneous rock used in countertops and monuments.",
          "Has a speckled appearance with crystals."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I hold your reflection in a more permanent way, capturing you as you were. What am I?",
        "answer": "photograph",
        "acceptable": ["photograph", "photo"],
        "hints": [
          "A still image taken by a camera.",
          "Can be printed or viewed digitally."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I come in hundreds or thousands, arranged in patterns, found in a grid but not a spreadsheet. What am I?",
        "answer": "mosaic tile",
        "acceptable": ["mosaic", "tiles", "tile"],
        "hints": [
          "Often colorful, used in decorative artwork or flooring.",
          "Pieces can form a larger image or pattern."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I stay on your table for hours, offering warmth or chill, but eventually I'm consumed. What am I?",
        "answer": "meal",
        "acceptable": ["meal", "dish", "food"],
        "hints": [
          "Breakfast, lunch, or dinner perhaps.",
          "Once finished, there's only empty plates."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can be strapped to your wrist to measure something intangible, though I'm not a watch. What am I?",
        "answer": "fitness band (heart rate monitor)",
        "acceptable": ["heart rate monitor", "fitness band", "fitness tracker"],
        "hints": [
          "Tracks your pulse or steps.",
          "Helps you stay mindful of health goals."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I’m the extra step in your footwear, found beneath but rarely seen. What am I?",
        "answer": "insole",
        "acceptable": ["shoe insole", "insole"],
        "hints": [
          "Provides comfort or support inside shoes.",
          "Can be removed or replaced."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can revolve without a motor, used by artists to shape ideas in clay. What am I?",
        "answer": "potter's wheel",
        "acceptable": ["potter's wheel"],
        "hints": [
          "Operated by foot or electricity for spinning clay.",
          "Helps create symmetrical ceramic vessels."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I remain unseen in a crowd yet I'm essential for order, guiding people in lines. What am I?",
        "answer": "queue barrier (stanchion rope)",
        "acceptable": ["stanchion rope", "queue divider", "queue barrier"],
        "hints": [
          "You see me in banks, cinemas, or airports to keep lines organized.",
          "Often retractable or rope-based between posts."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can weigh a ton yet I'm easy to blow away if I'm just made of words. What am I?",
        "answer": "paperweight of knowledge (heavy document)",
        "acceptable": ["document", "papers", "heavy book"],
        "hints": [
          "Official forms or legal papers can hold significant 'weight.'",
          "Physically they might be light, but their impact is huge."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I let you see inside yourself without cutting you open, capturing shadows of your bones. What am I?",
        "answer": "x-ray image",
        "acceptable": ["x-ray", "x-ray scan"],
        "hints": [
          "Doctors use me to check for fractures.",
          "I'm a type of electromagnetic radiation that passes through soft tissues."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I bloom in a flash of heat and vanish in a whisper of smoke, a quick spectacle. What am I?",
        "answer": "spark",
        "acceptable": ["spark", "flash of spark"],
        "hints": [
          "You might see me when metal strikes flint.",
          "I can ignite larger flames."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I circle in the dark, found in the heart of a flame but I'm not fire myself. What am I?",
        "answer": "embers",
        "acceptable": ["embers", "glowing coals"],
        "hints": [
          "I'm the glowing remains of a burnt substance.",
          "Often found in campfires or charcoal grills."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm a flexible traveler yet have no legs, gliding on concrete without ever falling. What am I?",
        "answer": "skateboard",
        "acceptable": ["skateboard", "board"],
        "hints": [
          "I have four wheels and a deck.",
          "Riders perform tricks or simply cruise."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I slice through water but I'm not a fish, I carry humans with a steady rhythm. What am I?",
        "answer": "rowboat oar",
        "acceptable": ["oar", "rowing oar"],
        "hints": [
          "Used in pairs or singly to propel a boat.",
          "Human-powered, no engine required."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm set in stone yet I'm not immovable; I can unravel secrets of ancient script. What am I?",
        "answer": "tablet (stone tablet with inscriptions)",
        "acceptable": ["stone tablet", "carved tablet"],
        "hints": [
          "Ancient civilizations used me to record important events.",
          "Archaeologists decode me to learn about the past."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I drift in space with no wings, shining by borrowed light. What am I?",
        "answer": "planet",
        "acceptable": ["planet"],
        "hints": [
          "Orbits a star, reflecting that star's light.",
          "Earth is one, but there are others in our solar system."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I balance on a pivot, measuring differences but never lying. What am I?",
        "answer": "scale (balance scale)",
        "acceptable": ["scale", "balance scale"],
        "hints": [
          "Used to weigh items or compare weights.",
          "Often symbolically associated with justice."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can be broken without force, repaired without tools, and shared without loss. What am I?",
        "answer": "friendship",
        "acceptable": ["friendship", "relationship", "bond"],
        "hints": [
          "An emotional connection between people.",
          "Grows with trust and can break with betrayal."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I exist in endless forms, each a reflection of numbers, but I'm not a math equation. What am I?",
        "answer": "fractal pattern",
        "acceptable": ["fractal", "fractal pattern"],
        "hints": [
          "Found in nature (like snowflakes, coastlines) and mathematics.",
          "Repeats self-similar shapes at different scales."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can snap under pressure, often used in fences or crafts, but I'm not made of metal. What am I?",
        "answer": "wooden stick",
        "acceptable": ["stick", "wooden stick"],
        "hints": [
          "May be part of branches or shaped lumber.",
          "Breaks more easily along the grain."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I feed on writing but never grow; I'm a silent guard of your notes. What am I?",
        "answer": "binder or file folder",
        "acceptable": ["binder", "file folder"],
        "hints": [
          "Holds documents together in an organized way.",
          "Can have rings or pockets."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm the spark for an engine but not the fire, a small plug that ignites big power. What am I?",
        "answer": "spark plug",
        "acceptable": ["spark plug"],
        "hints": [
          "Found in gasoline engines.",
          "Delivers electric current to ignite fuel-air mixture."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm the quiet half of your phone, never speaking yet always required for calls. What am I?",
        "answer": "phone receiver earpiece",
        "acceptable": ["earpiece", "phone earpiece"],
        "hints": [
          "You listen to voices through me but I produce no voice on my own.",
          "Without me, you'd hear nothing from the other end."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I watch from the corner yet I'm no spy; I'm angled glass revealing hidden spots. What am I?",
        "answer": "security mirror (convex mirror)",
        "acceptable": ["security mirror", "convex mirror"],
        "hints": [
          "Often in shops or on roads at blind corners.",
          "Helps to see around corners or large areas."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I cross fields and valleys in parallel lines yet carry no traveler. What am I?",
        "answer": "railroad tracks",
        "acceptable": ["rail tracks", "train tracks", "railroad tracks"],
        "hints": [
          "Laid on sleepers (ties) for trains to move along.",
          "Made of steel, stretching long distances."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I project your ideas on a wall yet I'm not a camera, a teacher's helper but silent. What am I?",
        "answer": "overhead projector (or digital projector)",
        "acceptable": ["projector", "digital projector", "overhead projector"],
        "hints": [
          "Used in classrooms or offices to show slides.",
          "Requires a light source to cast images."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I rest among words but contain no letters; I'm the space for your thoughts to breathe. What am I?",
        "answer": "paragraph break",
        "acceptable": ["paragraph break", "paragraph space"],
        "hints": [
          "Separates blocks of text for clarity.",
          "Writers rely on me to organize ideas."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I flow through cities, sometimes unseen, carrying waste away. What am I?",
        "answer": "sewer system",
        "acceptable": ["sewer", "sewer system"],
        "hints": [
          "Underground tunnels that channel used water.",
          "Helps maintain public health by disposing waste."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I blow out illusions but never a candle, ensuring the truth can't hide behind dust. What am I?",
        "answer": "duster (feather duster)",
        "acceptable": ["duster", "feather duster", "dusting cloth"],
        "hints": [
          "Used in cleaning to remove dirt from surfaces.",
          "Feathery or microfiber in design."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I am a crossing in the middle of nowhere, guiding travelers with lines and shapes. What am I?",
        "answer": "road intersection sign",
        "acceptable": ["road sign at intersection", "intersection sign"],
        "hints": [
          "Often found at crossroads, even in rural areas.",
          "Directs traffic or provides directions."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I crackle and pop, a snack that's light and airy, but I'm not a fire. What am I?",
        "answer": "popcorn",
        "acceptable": ["popcorn"],
        "hints": [
          "Commonly eaten at movie theaters.",
          "Made from heated corn kernels."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I see through my lens into your body, yet I only diagnose, never treat. What am I?",
        "answer": "endoscope",
        "acceptable": ["endoscope", "medical scope"],
        "hints": [
          "Used by doctors to look inside hollow organs or cavities.",
          "Often has a camera and light at the tip."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I can scald or soothe, poured into a mold, yet I'm neither metal nor plastic. What am I?",
        "answer": "hot wax",
        "acceptable": ["wax", "hot wax"],
        "hints": [
          "Candles are made from me in liquid form.",
          "People also use me for hair removal or sealing letters."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I break light into colors, though I'm neither glass nor water. What am I?",
        "answer": "prism crystal (or diffraction grating)",
        "acceptable": ["prism", "crystal prism", "diffraction grating"],
        "hints": [
          "Used to demonstrate how white light splits into a spectrum.",
          "Often hung by windows as decoration."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm a single rung on your journey upward, supporting your foot but never your hand. What am I?",
        "answer": "stair step",
        "acceptable": ["stair step", "step on a staircase"],
        "hints": [
          "Many of me form a staircase.",
          "You place your foot on me to climb."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm the friend of a painter yet have no artistic skill, turned and coated to bring visions to life. What am I?",
        "answer": "paint roller",
        "acceptable": ["paint roller"],
        "hints": [
          "Used for covering walls or large surfaces with color.",
          "Rotates on a frame and can be dipped in a tray."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can revolve around your waist, a circle of fun that can keep you fit. What am I?",
        "answer": "hula hoop",
        "acceptable": ["hula hoop"],
        "hints": [
          "A lightweight plastic ring used for exercise or play.",
          "You rotate your hips to keep me spinning."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I serve you daily, though you rarely wash me; I cradle your phone but I'm not your hand. What am I?",
        "answer": "phone stand",
        "acceptable": ["phone stand", "dock"],
        "hints": [
          "Holds your device upright for viewing or charging.",
          "Can be on a desk or nightstand."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I keep the pages from drifting yet I'm not a bookmark, often metallic and snug. What am I?",
        "answer": "paper clip",
        "acceptable": ["paper clip", "clip"],
        "hints": [
          "Binds sheets of paper together temporarily.",
          "A simple loop of bent wire."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I echo your voice in waves, bouncing off structures until I'm found. What am I?",
        "answer": "sonar ping",
        "acceptable": ["sonar", "sonar signal"],
        "hints": [
          "Used underwater to detect objects by reflected sound.",
          "Dolphins and submarines both employ me."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I hold shapes and forms but contain no mass; I'm the blueprint before the real. What am I?",
        "answer": "architectural plan",
        "acceptable": ["blueprint", "architectural drawing"],
        "hints": [
          "Guides construction workers to build structures.",
          "Created by architects or engineers."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I can help find your moment of peace but I'm not a pillow, often used to assist meditation. What am I?",
        "answer": "yoga mat",
        "acceptable": ["yoga mat", "meditation mat"],
        "hints": [
          "Laid on the floor for stretching or mindful practice.",
          "Offers a non-slip surface."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm shaped by the music yet produce no sound; dancers rely on me to stay in sync. What am I?",
        "answer": "choreography",
        "acceptable": ["choreography", "dance steps"],
        "hints": [
          "A sequence of dance moves or stage directions.",
          "Exists as instructions but doesn't have a physical form by itself."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I stand in your driveway but I'm not your car; I'm often stuffed with scraps. What am I?",
        "answer": "trash bin",
        "acceptable": ["garbage can", "trash bin", "waste bin"],
        "hints": [
          "You roll me to the curb on pickup day.",
          "I'm where unwanted things get tossed."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can show you a million words yet speak none, illuminated from behind. What am I?",
        "answer": "computer screen",
        "acceptable": ["computer monitor", "computer screen"],
        "hints": [
          "Displays text, images, and videos.",
          "Connected to a PC or laptop for output."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I'm a gateway that never opens, flanked by metal lines, controlling who passes in a stadium. What am I?",
        "answer": "turnstile",
        "acceptable": ["turnstile"],
        "hints": [
          "Allows one person at a time after a ticket or token.",
          "Often used in subways, stadiums, or theme parks."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I’m a glass corridor through which fish can roam, but I'm not an aquarium. What am I?",
        "answer": "underwater tunnel",
        "acceptable": ["underwater tunnel", "glass tunnel"],
        "hints": [
          "Found in some marine parks or oceanariums.",
          "Allows people to walk below the water line, surrounded by sea life."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I scribble in black and white, capturing life in lines, needing no batteries. What am I?",
        "answer": "charcoal sketch",
        "acceptable": ["charcoal drawing", "charcoal sketch"],
        "hints": [
          "An art form using burned wood sticks.",
          "Artists use me to shade and create contrast on paper."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I skip across water when thrown just right, a smooth traveler with no sails. What am I?",
        "answer": "flat stone (skipping stone)",
        "acceptable": ["skipping stone", "flat rock"],
        "hints": [
          "People enjoy tossing me across ponds or lakes.",
          "The fewer my edges, the better I bounce."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I bloom underground as a delicacy, sought by chefs, but I'm not a plant root. What am I?",
        "answer": "truffle",
        "acceptable": ["truffle"],
        "hints": [
          "A type of fungus highly prized for gourmet cooking.",
          "Pigs or dogs are often used to sniff me out."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I'm stored in a quiver but have no feathers, a tool for lines but not a ruler. What am I?",
        "answer": "pencil arrow set (quiver as pencil holder)",
        "acceptable": ["pencils in a pencil holder", "pencil 'arrows'"],
        "hints": [
          "Sometimes your desk container is shaped like a quiver.",
          "These 'arrows' write or draw on paper."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I keep your mind on track and your heart at ease, but I'm not a doctor. What am I?",
        "answer": "journal",
        "acceptable": ["journal", "diary"],
        "hints": [
          "Used for reflecting on thoughts or daily events.",
          "Helps organize emotions or set goals."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I can float in space yet I'm not a star; I store knowledge but can't read. What am I?",
        "answer": "satellite library (data satellite)",
        "acceptable": ["data satellite", "storage satellite"],
        "hints": [
          "Orbits the Earth holding digital information.",
          "Relays signals or data back to ground stations."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I split an orange glow across the sky, but I'm no painter; you see me at day's end. What am I?",
        "answer": "sunset",
        "acceptable": ["sunset"],
        "hints": [
          "Colors can vary from pink to deep red or orange.",
          "Signals the transition from day to night."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I bounce with each step but remain beneath your feet, adding spring to your run. What am I?",
        "answer": "shoe cushion (air sole)",
        "acceptable": ["cushioned shoe sole", "air cushion in shoe"],
        "hints": [
          "Found in athletic footwear.",
          "Helps reduce impact on joints."
        ],
        "difficulty": "medium"
      },
      {
        "question": "I'm the silent partner of an ink pen, overshadowed yet vital for function. What am I?",
        "answer": "pen spring (the internal spring)",
        "acceptable": ["spring in a pen", "pen spring", "spring"],
        "hints": [
          "Helps the tip retract in a click pen.",
          "You rarely see me unless you take the pen apart."
        ],
        "difficulty": "hard"
      },
      {
        "question": "I lie across the city, a chain of instructions underfoot, telling you where to stop or go. What am I?",
        "answer": "road markings",
        "acceptable": ["road paint", "road markings", "lane markings"],
        "hints": [
          "Painted lines on streets to direct traffic flow.",
          "Includes crosswalks, stop lines, and lane dividers."
        ],
        "difficulty": "easy"
      },
      {
        "question": "I speak in short bursts of color on a screen, guiding you left or right in small forms. What am I?",
        "answer": "turn indicator (blinker on a car dashboard)",
        "acceptable": ["blinker", "turn signal indicator"],
        "hints": [
          "Flashes arrows to show direction changes.",
          "Part of a vehicle's dashboard feedback."
        ],
        "difficulty": "hard"
      }
      ];
     // === Utility functions ===
      function mulberry32(a) {
        return function() {
          let t = a += 0x6D2B79F5;
          t = Math.imul(t ^ (t >>> 15), t | 1);
          t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      }
      function seededShuffle(array, seed) {
        const result = array.slice();
        let random = mulberry32(seed);
        for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
      }
      function getLocalDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
      }
      function normalizeString(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
      }
      function isValidGuess(str) {
        return /^[A-Za-z0-9\s'\-\?]+$/.test(str);
      }
      function checkAnswer(guess, riddle) {
        const norm = normalizeString(guess);
        return riddle.acceptable.some(a => normalizeString(a) === norm);
      }

      // === Parse offset safely ===
      const params = new URLSearchParams(window.location.search);
      const rawOffset = params.get('offset');
      const offset = (rawOffset && /^[0-9]+$/.test(rawOffset)) ? parseInt(rawOffset, 10) : 0;

      // === Today's riddle ===
      const today = new Date();
      const dayOfYear = getLocalDayOfYear(today);
      const shuffled = seededShuffle(riddles, today.getFullYear());
      const current = shuffled[(dayOfYear + offset) % riddles.length];

      // === Phaser config ===
      const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#222222',
        scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
        scene: { create: create },
        parent: 'game-container',
        dom: { createContainer: true }
      };

      // actually launch the game!
      const game = new Phaser.Game(config);

      function create () {
        const scene   = this;
        const isMobile = window.innerWidth < 600;
        const dynamicFontSize     = window.innerWidth < 500 ? '16px' : '24px';
        const dynamicHintFontSize = window.innerWidth < 500 ? '14px' : '20px';

        // --- layout helpers ---
        const marginX = scene.scale.width * 0.05;
        let   y       = scene.scale.height * 0.05;        // start 5 % from the top

        // game-state
        let tries = 3, hintsUsed = 0, points = 150;

        // ---------- title + riddle ----------
        const riddleText = scene.add.text(
          marginX, y,
          `Daily Riddle:\n${current.question}`,
          { fontSize: dynamicFontSize, fill:'#fff', wordWrap:{ width: scene.scale.width*0.9 } }
        );
        y += riddleText.height + 30;                      // gap

        // ---------- score lines ----------
        const ptsText   = scene.add.text(marginX, y, `Points: ${points}`,   { fontSize: dynamicHintFontSize, fill:'#fff' }); y += ptsText.height + 10;
        const triesText = scene.add.text(marginX, y, `Tries Left: ${tries}`,{ fontSize: dynamicHintFontSize, fill:'#fff' }); y += triesText.height + 10;
        const hintText  = scene.add.text(marginX, y, `Hints Used: ${hintsUsed}`, { fontSize: dynamicHintFontSize, fill:'#fff' }); y += hintText.height + 20;

        // ---------- feedback + hints ----------
        const feedback  = scene.add.text(marginX, y, '', { fontSize: dynamicHintFontSize, fill:'#f00' }); y += feedback.height + 20;
        const hintDisp  = scene.add.text(marginX, y, '', { fontSize: dynamicHintFontSize, fill:'#ff0', wordWrap:{ width: scene.scale.width*0.9 } });
        y += hintDisp.height + 90;

        // ---------- input ----------
        const answerInput = scene.add.dom(
          scene.scale.width / 2,
          y,
          'input',
          {
            type: 'text',
            placeholder: 'Enter your answer…',
            maxlength: '80',
            pattern: "[A-Za-z0-9 '\\-\\?]+",
            title: 'Up to 80 characters…',
            style: `
              width: ${scene.scale.width < 500 ? '80%' : '400px'};
              height: ${scene.scale.width < 500 ? '50px' : '40px'};
              font-size: ${scene.scale.width < 500 ? '28px' : '16px'};
              border-radius: 5px;
              padding: 4px;
            `
          }
        );

        // ---------- buttons ----------
        const submitBtn = scene.add.dom(scene.scale.width/2, y + 40,  'button',
                                        { style:'width:150px;height:20px;font-size:14px;' }, 'Submit');
        const hintBtn   = scene.add.dom(scene.scale.width/2, y + 90,  'button',
                                        { style:'width:150px;height:20px;font-size:14px;' }, 'Hint (-30 pts)');
        const shareBtn  = scene.add.dom(scene.scale.width/2, y + 140, 'button',
                                        { style:'width:150px;height:20px;font-size:14px;' }, 'Share');

        // hook up event listeners
        submitBtn.node.addEventListener('click', processSubmission);
        answerInput.node.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            processSubmission();
          }
        });


        function processSubmission() {
          const guess = answerInput.node.value.trim(); if (!guess) return;
          if (!isValidGuess(guess)) { feedback.setStyle({ fill:'#f90' }).setText('Invalid input.'); return; }
          if (checkAnswer(guess, current)) {
            const bonus = tries === 3 ? 90 : tries === 2 ? 60 : 0;
            points += bonus; ptsText.setText(`Points: ${points}`);
            feedback.setStyle({ fill:'#0f0' }).setText(`Correct! Answer: ${current.answer}\nBonus: ${bonus}`);
            answerInput.node.disabled = submitBtn.node.disabled = hintBtn.node.disabled = true;
          } else {
            points = Math.max(0, points - 30); tries--; triesText.setText(`Tries Left: ${tries}`); ptsText.setText(`Points: ${points}`);
            feedback.setStyle({ fill:'#f00' }).setText(`Incorrect: ${guess}`);
            if (tries <= 0) { feedback.setText(`Game Over! Answer: ${current.answer}`);
              answerInput.node.disabled = submitBtn.node.disabled = hintBtn.node.disabled = true; }
          }
          answerInput.node.value = '';
        }
        submitBtn.node.addEventListener('click', processSubmission);
        answerInput.node.addEventListener('keydown', e => { if (e.key==='Enter') { e.preventDefault(); processSubmission(); }});

        hintBtn.node.addEventListener('click', () => {
          if (hintsUsed < current.hints.length) {
            // 1. Deduct points and increment counter
            points = Math.max(0, points - 30);
            hintsUsed++;
            ptsText.setText(`Points: ${points}`);
            hintText.setText(`Hints Used: ${hintsUsed}`);

            // 2. Grab the new hint
            const newHint = current.hints[hintsUsed - 1];

            // 3. Prepend it under the existing hintDisp text
            const previous = hintDisp.text; // getText() in older Phaser versions
            hintDisp.setText(
              previous
                ? `${previous}\nHint ${hintsUsed}: ${newHint}`
                : `Hint ${hintsUsed}: ${newHint}`
            );

            // 4. Disable once all hints shown
            if (hintsUsed === current.hints.length) {
              hintBtn.node.disabled = true;
            }
          }
        });

        shareBtn.node.addEventListener('click', () => {
          const message = `Riddle: ${current.question}\nPoints: ${points}`;
          const shareData = { title:'Riddle Challenge', text:message };
          if (navigator.share && navigator.canShare?.(shareData)) {
            navigator.share(shareData).catch(console.error);
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(message).then(() => feedback.setText('Copied!')).catch(console.error);
          } else { prompt('Copy text:', message); }
        });
      }