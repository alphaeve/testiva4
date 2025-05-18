import { Question } from '../types/questions';
import { Branch } from '../types/branch';

export const subjectQuestions: Record<string, Question[]> = {
  JEE3: [
    {
      id: 1,
      text: "What is the derivative of x²?",
      options: ["x", "2x", "2", "x²"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "If a triangle has angles of 60°, 60°, and 60°, it is called:",
      options: ["Right triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.12", "3.18"],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "Solve for x: 2x + 5 = 13",
      options: ["x = 4", "x = 8", "x = 3", "x = 6"],
      correctAnswer: 0
    },
    {
      id: 5,
      text: "What is the area of a circle with radius 5 units?",
      options: ["25π", "10π", "15π", "20π"],
      correctAnswer: 0
    },
    {
      id: 6,
      text: "What is the square root of 144?",
      options: ["10", "12", "14", "16"],
      correctAnswer: 1
    },
    {
      id: 7,
      text: "What is the sum of the angles in a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 1
    },
    {
      id: 8,
      text: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1
    },
    {
      id: 9,
      text: "Simplify: (x²y³)²",
      options: ["x⁴y⁶", "x⁴y⁹", "x²y⁶", "x³y⁶"],
      correctAnswer: 0
    },
    {
      id: 10,
      text: "What is the slope of a line parallel to the x-axis?",
      options: ["0", "1", "undefined", "infinity"],
      correctAnswer: 0
    }
  ],
  JEE4: [
    {
      id: 1,
      text: "What is the derivative of x²?",
      options: ["x", "2x", "2", "x²"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "If a triangle has angles of 60°, 60°, and 60°, it is called:",
      options: ["Right triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.12", "3.18"],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "Solve for x: 2x + 5 = 13",
      options: ["x = 4", "x = 8", "x = 3", "x = 6"],
      correctAnswer: 0
    },
    {
      id: 5,
      text: "What is the area of a circle with radius 5 units?",
      options: ["25π", "10π", "15π", "20π"],
      correctAnswer: 0
    },
    {
      id: 6,
      text: "What is the square root of 144?",
      options: ["10", "12", "14", "16"],
      correctAnswer: 1
    },
    {
      id: 7,
      text: "What is the sum of the angles in a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 1
    },
    {
      id: 8,
      text: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1
    },
    {
      id: 9,
      text: "Simplify: (x²y³)²",
      options: ["x⁴y⁶", "x⁴y⁹", "x²y⁶", "x³y⁶"],
      correctAnswer: 0
    },
    {
      id: 10,
      text: "What is the slope of a line parallel to the x-axis?",
      options: ["0", "1", "undefined", "infinity"],
      correctAnswer: 0
    }
  ],
  Science: [
    {
      id: 1,
      text: "Which of these is NOT a state of matter?",
      options: ["Solid", "Liquid", "Energy", "Gas"],
      correctAnswer: 2
    },
    {
      id: 2,
      text: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      correctAnswer: 0
    },
    {
      id: 3,
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "What is the process by which plants make their own food?",
      options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
      correctAnswer: 0
    },
    {
      id: 5,
      text: "What is the smallest unit of matter?",
      options: ["Atom", "Molecule", "Cell", "Electron"],
      correctAnswer: 0
    },
    {
      id: 6,
      text: "Which of these is a renewable resource?",
      options: ["Coal", "Natural Gas", "Solar Energy", "Oil"],
      correctAnswer: 2
    },
    {
      id: 7,
      text: "What is the human body's largest organ?",
      options: ["Heart", "Brain", "Liver", "Skin"],
      correctAnswer: 3
    },
    {
      id: 8,
      text: "What force keeps planets in orbit around the Sun?",
      options: ["Magnetic force", "Gravity", "Nuclear force", "Friction"],
      correctAnswer: 1
    },
    {
      id: 9,
      text: "Which blood type is known as the universal donor?",
      options: ["A+", "B+", "AB+", "O-"],
      correctAnswer: 3
    },
    {
      id: 10,
      text: "What is the speed of light in vacuum?",
      options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
      correctAnswer: 0
    }
  ],
  Reasoning: [
    {
      id: 1,
      text: "If CAT is coded as 312, then how will DOG be coded?",
      options: ["324", "423", "432", "234"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Complete the series: 2, 6, 12, 20, ?",
      options: ["30", "28", "32", "36"],
      correctAnswer: 0
    },
    {
      id: 3,
      text: "If FRIEND is coded as HUMJTK, then CANDLE is coded as?",
      options: ["EDRIRL", "DCQHQK", "DCQJQM", "EDRIRL"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "Find the odd one out: Apple, Mango, Potato, Orange",
      options: ["Apple", "Mango", "Potato", "Orange"],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "If South-East becomes North, North-East becomes West, then West becomes?",
      options: ["North-East", "South-West", "South", "North-West"],
      correctAnswer: 1
    },
    {
      id: 6,
      text: "Complete the analogy: Book : Pages :: Tree : ?",
      options: ["Branches", "Leaves", "Fruits", "Roots"],
      correctAnswer: 1
    },
    {
      id: 7,
      text: "Which number would replace the question mark? 8, 24, 12, 36, 18, ?",
      options: ["54", "48", "42", "60"],
      correctAnswer: 0
    },
    {
      id: 8,
      text: "If PAINT is coded as 74151, then TRAIN is coded as?",
      options: ["19415", "18415", "17415", "16415"],
      correctAnswer: 0
    },
    {
      id: 9,
      text: "Find the missing letter: B, D, G, K, ?",
      options: ["N", "O", "P", "Q"],
      correctAnswer: 2
    },
    {
      id: 10,
      text: "If A = 1, B = 2, C = 3, then CODE = ?",
      options: ["45", "35", "55", "65"],
      correctAnswer: 1
    }
  ],
  English: [
    {
      id: 1,
      text: "Choose the correct synonym for 'Benevolent':",
      options: ["Kind", "Cruel", "Hostile", "Indifferent"],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Identify the correct spelling:",
      options: ["Accomodate", "Accommodate", "Acommodate", "Accommoddate"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Choose the correct antonym for 'Verbose':",
      options: ["Talkative", "Concise", "Lengthy", "Wordy"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "Which sentence is grammatically correct?",
      options: [
        "Neither of the options are correct",
        "Neither of the options is correct",
        "None of the options are correct",
        "None of the options is correct"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "What is the plural of 'criterion'?",
      options: ["Criterions", "Criteria", "Criterias", "Criterion"],
      correctAnswer: 1
    },
    {
      id: 6,
      text: "Choose the correct meaning of the idiom 'Beat around the bush':",
      options: [
        "To avoid the main topic",
        "To search in the wrong place",
        "To work hard",
        "To waste time"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      text: "Which word is a preposition in 'The cat sat on the mat'?",
      options: ["The", "Cat", "On", "Mat"],
      correctAnswer: 2
    },
    {
      id: 8,
      text: "What is the past participle of 'begin'?",
      options: ["Began", "Beginning", "Begun", "Beginned"],
      correctAnswer: 2
    },
    {
      id: 9,
      text: "Choose the correct article: '__ European country'",
      options: ["A", "An", "The", "No article needed"],
      correctAnswer: 0
    },
    {
      id: 10,
      text: "Identify the passive voice:",
      options: [
        "John wrote the letter",
        "The letter was written by John",
        "John is writing the letter",
        "John writes letters"
      ],
      correctAnswer: 1
    }
  ],
  JEE1: [
    {
      id: 1,
      text: "A particle moves in a circle of radius 2m with a constant speed of 4m/s. What is its acceleration?",
      options: ["8 m/s²", "4 m/s²", "2 m/s²", "16 m/s²"],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Which of the following is the SI unit of magnetic flux?",
      options: ["Tesla", "Weber", "Henry", "Gauss"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "The moment of inertia of a thin uniform rod about an axis through its center and perpendicular to its length is:",
      options: ["ML²/12", "ML²/3", "ML²/6", "ML²/2"],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "What is the wavelength of photon with energy 6.626 × 10⁻³⁴ joules?",
      options: ["300 nm", "400 nm", "500 nm", "600 nm"],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "A body is thrown vertically upward with velocity u. The sum of distances covered during ascent and descent is:",
      options: ["u²/g", "2u²/g", "u²/2g", "4u²/g"],
      correctAnswer: 1
    }
  ],
  JEE2: [
    {
      id: 1,
      text: "Which of the following has the highest lattice energy?",
      options: ["NaCl", "MgO", "KCl", "CaO"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "The hybridization in BCl₃ molecule is:",
      options: ["sp", "sp²", "sp³", "dsp²"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Which of the following is an example of a nucleophile?",
      options: ["H⁺", "NH₃", "BF₃", "AlCl₃"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "The IUPAC name of CH₃-CH=CH-CHO is:",
      options: ["But-2-enal", "But-3-enal", "But-1-enal", "Butanal"],
      correctAnswer: 0
    },
    {
      id: 5,
      text: "Which of the following orders of orbitals is correct in order of increasing energy?",
      options: ["1s < 2s < 2p < 3s", "1s < 2s < 3s < 2p", "1s < 2p < 2s < 3s", "2s < 1s < 2p < 3s"],
      correctAnswer: 0
    }
  ],
  Biology: [
    {
      id: 1,
      text: "Which of the following is not a function of the liver?",
      options: ["Protein synthesis", "Hormone secretion", "Insulin production", "Drug detoxification"],
      correctAnswer: 2
    },
    {
      id: 2,
      text: "The process of formation of ATP during photosynthesis is called:",
      options: ["Photolysis", "Photophosphorylation", "Oxidative phosphorylation", "Substrate phosphorylation"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Which of the following is not a characteristic of cancer cells?",
      options: ["Metastasis", "Contact inhibition", "Uncontrolled growth", "Angiogenesis"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "The enzyme responsible for CO₂ fixation in C₄ plants is:",
      options: ["RuBisCO", "PEP carboxylase", "Pyruvate carboxylase", "Carbonic anhydrase"],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "Which of the following hormones is known as the 'fight or flight' hormone?",
      options: ["Thyroxine", "Adrenaline", "Insulin", "Glucagon"],
      correctAnswer: 1
    }
  ],
  "NEET Physics": [
    {
      id: 1,
      text: "The unit of radiation dose equivalent is:",
      options: ["Roentgen", "Gray", "Sievert", "Becquerel"],
      correctAnswer: 2
    },
    {
      id: 2,
      text: "Which law explains the photoelectric effect?",
      options: ["Snell's law", "Einstein's law", "Boyle's law", "Newton's law"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "The principle of CT scan is based on:",
      options: ["Magnetic resonance", "X-ray absorption", "Ultrasound", "Radio waves"],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "In a sonography machine, the frequency of ultrasound used is in the range of:",
      options: ["1-5 MHz", "2-10 MHz", "20-50 kHz", "100-200 kHz"],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "The eye muscle that controls the size of the pupil is:",
      options: ["Ciliary muscle", "Iris", "Retinal muscle", "Corneal muscle"],
      correctAnswer: 1
    }
  ],
  "NEET Chemistry": [
    {
      id: 1,
      text: "Which of the following vitamins is water soluble?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "The pH of human blood under normal conditions is:",
      options: ["6.5-7.0", "7.0-7.2", "7.3-7.5", "7.5-8.0"],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "Which amino acid is essential for the formation of hemoglobin?",
      options: ["Glycine", "Alanine", "Histidine", "Methionine"],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "The major component of cell membrane is:",
      options: ["Protein", "Carbohydrate", "Phospholipid", "Cholesterol"],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "Which of the following is a reducing sugar?",
      options: ["Sucrose", "Glucose", "Cellulose", "Starch"],
      correctAnswer: 1
    }
  ]
};

export const getQuestionsByBranch = (branch: Branch, subject: string): Question[] => {
  switch (branch) {
    case 'jee':
      return subjectQuestions[subject] || [];
    case 'neet':
      return subjectQuestions[subject] || [];
    default:
      return subjectQuestions[subject] || [];
  }
};