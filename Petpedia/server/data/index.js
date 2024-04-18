import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Merry",
    lastName: "Beth",
    email: "merybeth@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u2.jpg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 125,
    impressions: 328,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Cherry",
    lastName: "Angel",
    email: "cherry@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u3.jpg",
    friends: [],
    location: "New York, CA",
    occupation: "Artist",
    viewedProfile: 123,
    impressions: 555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Barry",
    lastName: "Allen",
    email: "barry@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "u9.jpg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist",
    viewedProfile: 152,
    impressions: 323,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Ashley",
    lastName: "Harper",
    email: "ashley@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u4.jpg",
    friends: [],
    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 410,
    impressions: 553,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Dan",
    lastName: "Cooper",
    email: "dan@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u10.jpg",
    friends: [],
    location: "Utah, CA",
    occupation: "Teacher",
    viewedProfile: 402,
    impressions: 775,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Carol",
    lastName: "Smith",
    email: "carol@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u5.jpg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 465,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "David",
    lastName: "Brown",
    email: "david@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u6.jpg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Doctor",
    viewedProfile: 151,
    impressions: 233,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Alan",
    lastName: "Smith",
    email: "alan@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "u8.jpg",
    friends: [],
    location: "Washington, DC",
    occupation: "Student",
    viewedProfile: 194,
    impressions: 167,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Merry",
    lastName: "Beth",
    location: "San Fran, CA",
    description: "My girlfriend loves him",
    picturePath: "p1.jpg",
    userPicturePath: "u2.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "I love him too",
      "Best of luck",
      "Such a good boy",
      "Amazing",
      "Sending positive vibes"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Cherry",
    lastName: "Angel",
    location: "New York, CA",
    description:
      "Love to walk with him",
    picturePath: "p2.jpg",
    userPicturePath: "u3.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Hello sis!",
      "Good for you",
      "Looks like a good boy",
      "Ikr?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Barry",
    lastName: "Allen",
    location: "Canada, CA",
    description:
      "Hiking with your dog is the best",
    picturePath: "p9.jpg",
    userPicturePath: "u9.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Some dream",
      "Mans best friend",
      "Take love",
      "Room for one more?",
      "Real",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Ashley",
    lastName: "Harper",
    location: "Korea, CA",
    description:
      "Me and the dog both  look beautiful in white!",
    picturePath: "p3.jpg",
    userPicturePath: "u4.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Wow! Looks Amazing!",
      "Love from me",
      "When both angels meet",
      "Lots of love",
      "Omg!",
      "Wow!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Dan",
    lastName: "Cooper",
    location: "Utah, CA",
    description:
      "She loves him more than me :(",
    picturePath: "p4.jpg",
    userPicturePath: "u10.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I love him too",
      "Best of luck",
      "Such a good boy",
      "Amazing",
      "Sending positive vibes",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Carol",
    lastName: "Smith",
    location: "Los Angeles, CA",
    description:
      "Love of my life! <3",
    picturePath: "p5.jpg",
    userPicturePath: "u5.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "I love him too",
      "Best of luck",
      "Such a good boy",
      "Amazing",
      "Sending positive vibes",
    ],
  },
];

export const adoptionposts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Merry",
    lastName: "Beth",
    location: "San Fran, CA",
    description: "Cat up for adoption. Age: 5 months. Trained. Email me at: merry@gmail.com",
    picturePath: "p11.jpg",
    userPicturePath: "u2.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "I am interested",
      "Food habit please!",
      "I wish I could take him",
      "Pretty",
      "Sending positive vibes"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Cherry",
    lastName: "Angel",
    location: "New York, CA",
    description:
      "Cat up for adoption. Age: 6 months. Trained. Email me at: cherry@gmail.com",
    picturePath: "p12.jpg",
    userPicturePath: "u3.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Potty trained?",
      "Interested",
      "Best of luck",
      "Nice!",
      "I can take him!",
      "Still available?!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Barry",
    lastName: "Allen",
    location: "Canada, CA",
    description:
      "Cat up for adoption. Age: 7 months. Trained. Email me at: barry@gmail.com",
    picturePath: "p13.jpg",
    userPicturePath: "u9.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "I am interested",
      "Food habit please!",
      "I wish I could take him",
      "Pretty",
      "Sending positive vibes"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Ashley",
    lastName: "Harper",
    location: "Korea, CA",
    description:
      "Dog up for adoption. Age: 10 months. Trained. Email me at: ashley@gmail.com",
    picturePath: "p19.jpg",
    userPicturePath: "u4.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Potty trained?",
      "Interested",
      "Best of luck",
      "Nice!",
      "I can take him!",
      "Still available?!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Dan",
    lastName: "Cooper",
    location: "Utah, CA",
    description:
    "Need a home for my dog! Well behaved. Trained. Email at: dan@gmail.com",
    picturePath: "p20.jpg",
    userPicturePath: "u10.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Potty trained?",
      "Interested",
      "Best of luck",
      "Nice!",
      "I can take him!",
      "Still available?!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Carol",
    lastName: "Smith",
    location: "Los Angeles, CA",
    description:
      "Dog up for adoption. Age: 12 months. Trained. Email me at: carol@gmail.com",
    picturePath: "p21.jpg",
    userPicturePath: "u5.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "I am interested",
      "Food habit please!",
      "I wish I could take him",
      "Pretty",
      "Sending positive vibes"
    ],
  },
]

export const marketposts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Merry",
    lastName: "Beth",
    location: "San Fran, CA",
    description: "Cat food available. Price: 15$. Grab now. Email me at: merry@gmail.com",
    picturePath: "m1.jpg",
    userPicturePath: "u2.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "I am interested",
      "Details pease!",
      "Price too much!",
      "Good Product",
      "I need it."
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Cherry",
    lastName: "Angel",
    location: "New York, CA",
    description:
      "Healthy cat food. Only 12$. Email me at: cherry@gmail.com",
    picturePath: "m2.jpg",
    userPicturePath: "u3.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Healthy how?",
      "Interested",
      "Price resonable",
      "I bought it previously.My cats like it.",
      "I wanna buy.",
      "Still available?!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Barry",
    lastName: "Allen",
    location: "Canada, CA",
    description:
      "Buy toy for your cat. Reasonable price. Email me at: barry@gmail.com for details.",
    picturePath: "m3.jpg",
    userPicturePath: "u9.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "I am interested",
      "Details pease!",
      "Price too much!",
      "Good Product",
      "I need it.",
      "My cat will like it!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Ashley",
    lastName: "Harper",
    location: "Korea, CA",
    description:
      "Homemade gluten free dog food. Price 25$. Email me at: ashley@gmail.com",
    picturePath: "m4.jpg",
    userPicturePath: "u4.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Healthy?",
      "Interested",
      "Price not resonable",
      "I bought it previously.My dogs like it.",
      "I wanna buy.",
      "Still available?!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Dan",
    lastName: "Cooper",
    location: "Utah, CA",
    description:
    "Chew toy for dogs. Really cheap. Grab now. Email at: dan@gmail.com",
    picturePath: "m5.jpg",
    userPicturePath: "u10.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I am interested",
      "Details pease!",
      "Price?!",
      "Good Product",
      "I need it.",
      "My cat will like it!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Carol",
    lastName: "Smith",
    location: "Los Angeles, CA",
    description:
      "Dog shampoo! Keep your dog clean and healthy. Price:30$ Email me at: carol@gmail.com",
    picturePath: "m6.jpg",
    userPicturePath: "u5.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "I am interested",
      "Details please!",
      "Good price!",
      "I have used it. It's good.",
      "Nice product. Smells good."
    ],
  },
]

  


