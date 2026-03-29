export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: 'positive' | 'negative';
  content: string;
  date: string;
  helpfulCount: number;
}

export interface Game {
  id: string;
  title: string;
  developer: string;
  publisher?: string;
  releaseDate?: string;
  price: number;
  discountPercent: number;
  image: string;
  heroImage?: string;
  tags: string[];
  featured?: boolean;
  description?: string;
  screenshots?: string[];
  ratingSummary?: string;
  reviewCount?: number;
  offerEnds?: string;
  reviews?: Review[];
}

export const games: Game[] = [
  {
    "id": "730",
    "title": "Counter-Strike 2",
    "developer": "Valve",
    "publisher": "Valve",
    "releaseDate": "21 Aug, 2012",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Free To Play"
    ],
    "description": "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.1920x1080.jpg?t=1749053861",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.1920x1080.jpg?t=1749053861",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.1920x1080.jpg?t=1749053861"
    ],
    "featured": true,
    "ratingSummary": "Very Positive",
    "reviewCount": 272203,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "570",
    "title": "Dota 2",
    "developer": "Valve",
    "publisher": "Valve",
    "releaseDate": "9 Jul, 2013",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Strategy",
      "Free To Play"
    ],
    "description": "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1769535998",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg?t=1769535998",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_c9118375a2400278590f29a3537769c986ef6e39.1920x1080.jpg?t=1769535998"
    ],
    "featured": true,
    "ratingSummary": "Very Positive",
    "reviewCount": 24143,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "578080",
    "title": "PUBG: BATTLEGROUNDS",
    "developer": "PUBG Corporation",
    "publisher": "KRAFTON, Inc.",
    "releaseDate": "21 Dec, 2017",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Massively Multiplayer"
    ],
    "description": "PUBG: BATTLEGROUNDS, the high-stakes winner-take-all shooter that started the Battle Royale craze, is free-to-play! Drop into diverse maps, loot unique weapons and supplies, and survive in an ever-shrinking zone where every turn could be your last.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/c16e2f2d122cae77a1cbaca19263df0f2d2214fa/ss_c16e2f2d122cae77a1cbaca19263df0f2d2214fa.1920x1080.jpg?t=1764817633",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/aa1c51a9b45c88e770b443d8d3cd28f3024b0760/ss_aa1c51a9b45c88e770b443d8d3cd28f3024b0760.1920x1080.jpg?t=1764817633",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/bf9b3de5896d4ec7ef9531938b26946cded81fdf/ss_bf9b3de5896d4ec7ef9531938b26946cded81fdf.1920x1080.jpg?t=1764817633"
    ],
    "featured": true,
    "ratingSummary": "Very Positive",
    "reviewCount": 389937,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1172470",
    "title": "Apex Legends™",
    "developer": "Respawn",
    "publisher": "Electronic Arts",
    "releaseDate": "4 Nov, 2020",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Free To Play"
    ],
    "description": "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/d86d5fe798addd4ff7219938f891268affb1ea2d/ss_d86d5fe798addd4ff7219938f891268affb1ea2d.1920x1080.jpg?t=1770753360",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/f786d0d1e567be0e5a801a62855970f9b6bae6fd/ss_f786d0d1e567be0e5a801a62855970f9b6bae6fd.1920x1080.jpg?t=1770753360",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/c1f5eb613c365fc96f5d59dd69bd852793929f69/ss_c1f5eb613c365fc96f5d59dd69bd852793929f69.1920x1080.jpg?t=1770753360"
    ],
    "featured": true,
    "ratingSummary": "Very Positive",
    "reviewCount": 350572,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "271590",
    "title": "Grand Theft Auto V Legacy",
    "developer": "Rockstar North",
    "publisher": "Rockstar Games",
    "releaseDate": "13 Apr, 2015",
    "price": 1499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg?t=1765387725",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg?t=1765387725",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg?t=1765387725"
    ],
    "featured": true,
    "ratingSummary": "Very Positive",
    "reviewCount": 361535,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1091500",
    "title": "Cyberpunk 2077",
    "developer": "CD PROJEKT RED",
    "publisher": "CD PROJEKT RED",
    "releaseDate": "9 Dec, 2020",
    "price": 2999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.1920x1080.jpg?t=1769690377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_0e64170751e1ae20ff8fdb7001a8892fd48260e7.1920x1080.jpg?t=1769690377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_af2804aa4bf35d4251043744412ce3b359a125ef.1920x1080.jpg?t=1769690377"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 494371,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1245620",
    "title": "ELDEN RING",
    "developer": "FromSoftware, Inc.",
    "publisher": "FromSoftware, Inc.",
    "releaseDate": "24 Feb, 2022",
    "price": 3599,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1767883716"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 124898,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1174180",
    "title": "Red Dead Redemption 2",
    "developer": "Rockstar Games",
    "publisher": "Rockstar Games",
    "releaseDate": "5 Dec, 2019",
    "price": 4999,
    "discountPercent": 75,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Arthur Morgan and the Van der Linde Gang are outlaws on the run. With federal agents and bounty hunters massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland in order to survive.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1759502961"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 501517,
    "offerEnds": "Offer ends in 48 hours",
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "292030",
    "title": "The Witcher 3: Wild Hunt",
    "developer": "CD PROJEKT RED",
    "publisher": "CD PROJEKT RED",
    "releaseDate": "18 May, 2015",
    "price": 1799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg?t=1768303991"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 22631,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1086940",
    "title": "Baldur's Gate 3",
    "developer": "Larian Studios",
    "publisher": "Larian Studios",
    "releaseDate": "3 Aug, 2023",
    "price": 2999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "RPG",
      "Strategy"
    ],
    "description": "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons &amp; Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg?t=1773079016"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 411284,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "990080",
    "title": "Hogwarts Legacy",
    "developer": "Avalanche Software",
    "publisher": "Warner Bros. Games",
    "releaseDate": "10 Feb, 2023",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg?t=1773932856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1773932856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg?t=1773932856"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 368482,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "2358720",
    "title": "Black Myth: Wukong",
    "developer": "Game Science",
    "publisher": "Game Science",
    "releaseDate": "19 Aug, 2024",
    "price": 3599,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_d9391ab31a4d15dddf7ba4949bfa44f5d9170580.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_524a39da392ee83dde091033562bc719d46b5838.1920x1080.jpg?t=1760601605"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 74176,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "1085660",
    "title": "Destiny 2",
    "developer": "Bungie",
    "publisher": "Bungie",
    "releaseDate": "1 Oct, 2019",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Free To Play"
    ],
    "description": "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.1920x1080.jpg?t=1765904462",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_c142f5078ace9f5e2eb2c80aa3bf768e156b4ee9.1920x1080.jpg?t=1765904462",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_a9642404e586be28f856e8f02d038828f691a5ba.1920x1080.jpg?t=1765904462"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 393338,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "252490",
    "title": "Rust",
    "developer": "Facepunch Studios",
    "publisher": "Facepunch Studios",
    "releaseDate": "8 Feb, 2018",
    "price": 1799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife, other inhabitants, the environment, and other survivors. Do whatever it takes to last another night.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_271feae67943bdc141c1249aba116349397e9ba9.1920x1080.jpg?t=1771871433",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_e825b087b95e51c3534383cfd75ad6e8038147c3.1920x1080.jpg?t=1771871433",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.1920x1080.jpg?t=1771871433"
    ],
    "featured": false,
    "ratingSummary": "Very Positive",
    "reviewCount": 318939,
    "reviews": [
      {
        "id": "r1",
        "author": "NeonRider99",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
        "rating": "positive",
        "content": "An absolute masterpiece. The world-building is unparalleled and the combat is incredibly satisfying. Worth every penny, especially at this discounted price!",
        "date": "Posted: 2 days ago",
        "helpfulCount": 1245
      },
      {
        "id": "r2",
        "author": "CasualGamer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Casual",
        "rating": "positive",
        "content": "I was hesitant at first, but the story pulled me in. The graphics are stunning on a high-end PC. 10/10 would erase my memory to play it again.",
        "date": "Posted: 1 week ago",
        "helpfulCount": 892
      }
    ]
  },
  {
    "id": "440",
    "title": "Team Fortress 2",
    "developer": "Valve",
    "publisher": "Valve",
    "releaseDate": "10 Oct, 2007",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Free To Play"
    ],
    "description": "Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_ea21f7bbf4f79bada4554df5108d04b6889d3453.1920x1080.jpg?t=1757348372",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_e3aedb2ab36bba8cfe611b1e0eaa807e4bb2d742.1920x1080.jpg?t=1757348372",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_ee24a769dc1d81dcbd7b250d16530394adee4264.1920x1080.jpg?t=1757348372"
    ],
    "featured": false
  },
  {
    "id": "230410",
    "title": "Warframe",
    "developer": "Digital Extremes",
    "publisher": "Digital Extremes",
    "releaseDate": "25 Mar, 2013",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG",
      "Free To Play"
    ],
    "description": "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/ss_2e4077f215eccde84171a4b8e0f2bc8a3264c776.1920x1080.jpg?t=1774467330",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/ss_0a541a8bf59e212870ea8d82260ac1b3ae2d0354.1920x1080.jpg?t=1774467330",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/ss_ce00a212a29e9a6c1fc37b16dbd802b2844a901d.1920x1080.jpg?t=1774467330"
    ],
    "featured": false
  },
  {
    "id": "289070",
    "title": "Sid Meier’s Civilization® VI",
    "developer": "Firaxis Games",
    "publisher": "2K",
    "releaseDate": "20 Oct, 2016",
    "price": 2499,
    "discountPercent": 90,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/capsule_616x353.jpg",
    "tags": [
      "Strategy"
    ],
    "description": "Expand your empire, advance your culture and go head-to-head against history’s greatest leaders. Will your civilization stand the test of time?",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_12cc6e1f4084de5bc0f66bfdbe3aaf3e59388b53.1920x1080.jpg?t=1740607040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_6c4a3cfb61f1a9677cf2ac549c2816a4e651f741.1920x1080.jpg?t=1740607040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_b2bf12299c38214fe520af0f724a6349d17ed330.1920x1080.jpg?t=1740607040"
    ],
    "featured": false
  },
  {
    "id": "413150",
    "title": "Stardew Valley",
    "developer": "ConcernedApe",
    "publisher": "ConcernedApe",
    "releaseDate": "26 Feb, 2016",
    "price": 479,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg",
    "tags": [
      "Indie",
      "RPG",
      "Simulation"
    ],
    "description": "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg?t=1754692865",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg?t=1754692865",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg?t=1754692865"
    ],
    "featured": false
  },
  {
    "id": "105600",
    "title": "Terraria",
    "developer": "Re-Logic",
    "publisher": "Re-Logic",
    "releaseDate": "16 May, 2011",
    "price": 480,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg?t=1769844435"
    ],
    "featured": false
  },
  {
    "id": "4000",
    "title": "Garry's Mod",
    "developer": "Facepunch Studios",
    "publisher": "Valve",
    "releaseDate": "29 Nov, 2006",
    "price": 399,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/capsule_616x353.jpg",
    "tags": [
      "Casual",
      "Indie",
      "Simulation"
    ],
    "description": "Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_af060d0a9aeb6598e154c9704ce250b0e63b2266.1920x1080.jpg?t=1764757984",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_d314d7dba0987b3e7f49154964bda0ae74ee5161.1920x1080.jpg?t=1764757984",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_3d320f333fb74413911cbc2bffae9bdda683e2ec.1920x1080.jpg?t=1764757984"
    ],
    "featured": false
  },
  {
    "id": "550",
    "title": "Left 4 Dead 2",
    "developer": "Valve",
    "publisher": "Valve",
    "releaseDate": "16 Nov, 2009",
    "price": 480,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Set in the zombie apocalypse, Left 4 Dead 2 is a co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.1920x1080.jpg?t=1772742214",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.1920x1080.jpg?t=1772742214",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.1920x1080.jpg?t=1772742214"
    ],
    "featured": false
  },
  {
    "id": "381210",
    "title": "Dead by Daylight",
    "developer": "Behaviour Interactive Inc.",
    "publisher": "Behaviour Interactive Inc.",
    "releaseDate": "14 Jun, 2016",
    "price": 1159,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Trapped forever in a realm of eldritch evil where even death is not an escape, four determined Survivors face a bloodthirsty Killer in a vicious game of nerve and wits. Pick a side and step into a world of tension and terror with horror gaming's best asymmetrical multiplayer.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_659500624438a4aa77bfdf304cba3ecebcd92ed9.1920x1080.jpg?t=1773849399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_ca6b39f2fcac8feb75d23976b1be31290d58d159.1920x1080.jpg?t=1773849399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_4075aac79adfe1a5b71665d2cc5ff7d52122650b.1920x1080.jpg?t=1773849399"
    ],
    "featured": false
  },
  {
    "id": "394360",
    "title": "Hearts of Iron IV",
    "developer": "Paradox Development Studio",
    "publisher": "Paradox Interactive",
    "releaseDate": "6 Jun, 2016",
    "price": 3139,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/capsule_616x353.jpg",
    "tags": [
      "Simulation",
      "Strategy"
    ],
    "description": "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/ss_242abc1c2ca21f7d8694ba8d9239d8944217b29f.1920x1080.jpg?t=1773756061",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/ss_679ae0d56f3a3b33591262839588c4b1dc6bef12.1920x1080.jpg?t=1773756061",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/ss_ebcec59e821aa1ee43c6d047eaef4e846af99358.1920x1080.jpg?t=1773756061"
    ],
    "featured": false
  },
  {
    "id": "227300",
    "title": "Euro Truck Simulator 2",
    "developer": "SCS Software",
    "publisher": "SCS Software",
    "releaseDate": "12 Oct, 2012",
    "price": 920,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/capsule_616x353.jpg",
    "tags": [
      "Indie",
      "Simulation"
    ],
    "description": "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_54100267623179f54731048c91add16c1c3d3d1e.1920x1080.jpg?t=1773641450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9.1920x1080.jpg?t=1773641450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_fd675feae669c7fb4ca6dcfb738d49fb7b7a238d.1920x1080.jpg?t=1773641450"
    ],
    "featured": false
  },
  {
    "id": "739630",
    "title": "Phasmophobia",
    "developer": "Kinetic Games",
    "publisher": "Kinetic Games",
    "releaseDate": "18 Sep, 2020",
    "price": 899,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie",
      "Early Access"
    ],
    "description": "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ec30a770064ea10c2bcfb1b3002a3dbd086be516/ss_ec30a770064ea10c2bcfb1b3002a3dbd086be516.1920x1080.jpg?t=1773761698",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/e9b67c7a3744a36cd5cc29adc13c6caaa4172e26/ss_e9b67c7a3744a36cd5cc29adc13c6caaa4172e26.1920x1080.jpg?t=1773761698",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/1ec54d1d45005e5ddd8360b05e5bbdea3a9090f2/ss_1ec54d1d45005e5ddd8360b05e5bbdea3a9090f2.1920x1080.jpg?t=1773761698"
    ],
    "featured": false
  },
  {
    "id": "242760",
    "title": "The Forest",
    "developer": "Endnight Games Ltd",
    "publisher": "Endnight Games Ltd",
    "releaseDate": "30 Apr, 2018",
    "price": 529,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_8ccb821c4df3fafdf4161d77f38635441a8157f2.1920x1080.jpg?t=1699381053",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_53c615d49c4777144ed7359e4bf7c9eb6838cc8e.1920x1080.jpg?t=1699381053",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_772eebf0ce7bdb51546055a36185e8ee46e8acac.1920x1080.jpg?t=1699381053"
    ],
    "featured": false
  },
  {
    "id": "1326470",
    "title": "Sons Of The Forest",
    "developer": "Endnight Games Ltd",
    "publisher": "Newnight ",
    "releaseDate": "22 Feb, 2024",
    "price": 1300,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_e6e3ab1badfb287a77fb6eef7b1589a35371496b.1920x1080.jpg?t=1708624856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_4fa5d260318f0aa37754b00c5dc10d1b7b9b9b1d.1920x1080.jpg?t=1708624856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_2b67491ca913adea6953429e1a567824aaa0ed54.1920x1080.jpg?t=1708624856"
    ],
    "featured": false
  },
  {
    "id": "359550",
    "title": "Tom Clancy's Rainbow Six Siege",
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "releaseDate": "1 Dec, 2015",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Free To Play"
    ],
    "description": "Rainbow Six® Siege is the reference in tactical team shooters, where elite strategy and execution triumph. Enjoy free access to Quick Match, Unranked, and Dual Front game modes with a selection of operators.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/6fc7824bf53ef82c81304700ebb8708cc710cdf9/ss_6fc7824bf53ef82c81304700ebb8708cc710cdf9.1920x1080.jpg?t=1774459715",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/2a3e21824e76d17fac4f917bd90234c73a02c930/ss_2a3e21824e76d17fac4f917bd90234c73a02c930.1920x1080.jpg?t=1774459715",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/8363519296edec1c056176f25e20767da3e6e853/ss_8363519296edec1c056176f25e20767da3e6e853.1920x1080.jpg?t=1774459715"
    ],
    "featured": false
  },
  {
    "id": "304930",
    "title": "Unturned",
    "developer": "Smartly Dressed Games",
    "publisher": "Smartly Dressed Games",
    "releaseDate": "7 Jul, 2017",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304930/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304930/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Casual"
    ],
    "description": "You're a survivor in the zombie infested ruins of society, and must work with your friends and forge alliances to remain among the living.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304930/6eb27f8965b5cd7983f8f909cc5f1e24a2495299/ss_6eb27f8965b5cd7983f8f909cc5f1e24a2495299.1920x1080.jpg?t=1765479894",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304930/655d589a677aeb79776bb819ea19c5743d5c83b3/ss_655d589a677aeb79776bb819ea19c5743d5c83b3.1920x1080.jpg?t=1765479894",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304930/341714a6447e65f3defc00abfef25d2224925226/ss_341714a6447e65f3defc00abfef25d2224925226.1920x1080.jpg?t=1765479894"
    ],
    "featured": false
  },
  {
    "id": "236390",
    "title": "War Thunder",
    "developer": "Gaijin Entertainment",
    "publisher": "Gaijin Network Ltd",
    "releaseDate": "15 Aug, 2013",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Massively Multiplayer",
      "Simulation"
    ],
    "description": "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/3ebe1f69263e66ccb0ec46787b6100be140145af/ss_3ebe1f69263e66ccb0ec46787b6100be140145af.1920x1080.jpg?t=1773931156",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/cbed7b022955a37a55644d56dd8ac72636e03c60/ss_cbed7b022955a37a55644d56dd8ac72636e03c60.1920x1080.jpg?t=1773931156",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/875a44d0f22aed5f21028da06e76fe7eb54756f0/ss_875a44d0f22aed5f21028da06e76fe7eb54756f0.1920x1080.jpg?t=1773931156"
    ],
    "featured": false
  },
  {
    "id": "346110",
    "title": "ARK: Survival Evolved",
    "developer": "Studio Wildcard",
    "publisher": "Studio Wildcard",
    "releaseDate": "27 Aug, 2017",
    "price": 690,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_2fd997a2f7151cb2187043a1f41589cc6a9ebf3a.1920x1080.jpg?t=1765677889",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_01cbef83fe28d64ee5a3d39a86043fb1e49abd31.1920x1080.jpg?t=1765677889",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_164a92a53f9bcbb728b391fc0719f9769c2e1249.1920x1080.jpg?t=1765677889"
    ],
    "featured": false
  },
  {
    "id": "218620",
    "title": "PAYDAY 2",
    "developer": "OVERKILL - a Starbreeze Studio.",
    "publisher": "Starbreeze Entertainment",
    "releaseDate": "13 Aug, 2013",
    "price": 480,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/218620/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/218620/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/218620/ss_67979091e0441e3df7aa885eaa107e2032973869.1920x1080.jpg?t=1771610568",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/218620/ss_b26f1852b68ab0af7fdd4932b1c9f78dc87a0325.1920x1080.jpg?t=1771610568",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/218620/ss_2799a1fde932e739138de91f0910ada013ddfca3.1920x1080.jpg?t=1771610568"
    ],
    "featured": false
  },
  {
    "id": "582010",
    "title": "Monster Hunter: World",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "releaseDate": "8 Aug, 2018",
    "price": 1997,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.1920x1080.jpg?t=1773328926",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_6b4986a37c7b5c185a796085c002febcdd5357b5.1920x1080.jpg?t=1773328926",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_0dfb20f6f09c196bfc317bd517dc430ed6e6a2a4.1920x1080.jpg?t=1773328926"
    ],
    "featured": false
  },
  {
    "id": "1623730",
    "title": "Palworld",
    "developer": "Pocketpair",
    "publisher": "Pocketpair",
    "releaseDate": "18 Jan, 2024",
    "price": 1300,
    "discountPercent": 25,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Fight, farm, build and work alongside mysterious creatures called &quot;Pals&quot; in this completely new multiplayer, open world survival and crafting game!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/ss_f81b7c4f20be3b99f76a1415c4cdb9b444c99b97.1920x1080.jpg?t=1773936597",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/ss_a9fa84f0c21bc536f00925ab4586e8c4f587c2b7.1920x1080.jpg?t=1773936597",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/ss_b3cea7c9f04a67d784d4c6a0c157a11d6268b189.1920x1080.jpg?t=1773936597"
    ],
    "featured": false
  },
  {
    "id": "1966720",
    "title": "Lethal Company",
    "developer": "Zeekerss",
    "publisher": "Zeekerss",
    "releaseDate": "23 Oct, 2023",
    "price": 480,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_78075e9a94675823024f12fce9d69b243cca94f8.1920x1080.jpg?t=1762544438",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_51860be59845771c01a3a4d9ab1ebf773f16fef5.1920x1080.jpg?t=1762544438",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_08fa3ef83b6eb70313119096f82285fa411f02e5.1920x1080.jpg?t=1762544438"
    ],
    "featured": false
  },
  {
    "id": "945360",
    "title": "Among Us",
    "developer": "Innersloth",
    "publisher": "Innersloth",
    "releaseDate": "16 Nov, 2018",
    "price": 229,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg",
    "tags": [
      "Casual"
    ],
    "description": "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_b7374128e5b786a302a716bca038d604b00ffe46.1920x1080.jpg?t=1757444903",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_719484b5e0314cc2ae43793786448e032056a31d.1920x1080.jpg?t=1757444903",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_ffd9c8926cbd7fce3ca5e5efb4399c47bb196bc8.1920x1080.jpg?t=1757444903"
    ],
    "featured": false
  },
  {
    "id": "1097150",
    "title": "Fall Guys",
    "developer": "Mediatonic",
    "publisher": "Unknown",
    "releaseDate": "3 Aug, 2020",
    "price": 1499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Casual",
      "Indie"
    ],
    "description": "Fall Guys is a free, cross-platform massively multiplayer party royale game. Clumsily compete in absurd obstacle courses with friends or build your very own chaotic course to share with the community.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/ss_6b957574e0e60159e692d926ae7104dc54c207c7.1920x1080.jpg?t=1698763175",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/ss_8a3bfa98cf4b35d78ccf0d24f4d459af8f6965e2.1920x1080.jpg?t=1698763175",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/ss_9e380dcadcaa9d0cd6c34b0a508f2624030b135b.1920x1080.jpg?t=1698763175"
    ],
    "featured": false
  },
  {
    "id": "252950",
    "title": "Rocket League®",
    "developer": "Psyonix LLC",
    "publisher": "Psyonix LLC",
    "releaseDate": "6 Jul, 2015",
    "price": 1499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie",
      "Racing"
    ],
    "description": "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and...",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/2c308d226babed3ae32453116c3538d75c493c39/ss_2c308d226babed3ae32453116c3538d75c493c39.1920x1080.jpg?t=1773251703",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/5c8bcd655257d120b65d7997a101dac9c43dddfb/ss_5c8bcd655257d120b65d7997a101dac9c43dddfb.1920x1080.jpg?t=1773251703",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/d4cf11424a76e5c2eb5723486ef27cdae730a1fd/ss_d4cf11424a76e5c2eb5723486ef27cdae730a1fd.1920x1080.jpg?t=1773251703"
    ],
    "featured": false
  },
  {
    "id": "489830",
    "title": "The Elder Scrolls V: Skyrim Special Edition",
    "developer": "Bethesda Game Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "27 Oct, 2016",
    "price": 1799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg?t=1753715778",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_d64b646612ab1402bdda8e400672aa0dbcb352ea.1920x1080.jpg?t=1753715778",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_b6bb6f79278505b3f48567f08c21f7a0eb171c68.1920x1080.jpg?t=1753715778"
    ],
    "featured": false
  },
  {
    "id": "377160",
    "title": "Fallout 4",
    "developer": "Bethesda Game Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "9 Nov, 2015",
    "price": 999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "From Bethesda Game Studios, the award-winning creators of Starfield and The Elder Scrolls V: Skyrim, comes Fallout 4. A landmark in open-world RPG design and winner of over 200 ‘Best Of’ honors, including the DICE and BAFTA Game of the Year.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1764687456",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg?t=1764687456",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg?t=1764687456"
    ],
    "featured": false
  },
  {
    "id": "782330",
    "title": "DOOM Eternal",
    "developer": "id Software",
    "publisher": "Bethesda Softworks",
    "releaseDate": "19 Mar, 2020",
    "price": 1799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_4f93a7c5003d49cb32f6c0c6e547452b284580a0.1920x1080.jpg?t=1755109910",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_7e6a2148321c8024285e3924903d8897cac95358.1920x1080.jpg?t=1755109910",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_af3b43c4be0029b52ceefaf55ebe1918e2cb3471.1920x1080.jpg?t=1755109910"
    ],
    "featured": false
  },
  {
    "id": "1240440",
    "title": "Halo Infinite",
    "developer": "343 Industries",
    "publisher": "Xbox Game Studios",
    "releaseDate": "15 Nov, 2021",
    "price": 0,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Free To Play"
    ],
    "description": "From one of gaming's most iconic sagas, Halo is bigger than ever. Featuring an expansive open-world campaign and a dynamic free to play multiplayer experience. ",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/8f26ccb1035f6244fa8207a95435666d57e9c77f/ss_8f26ccb1035f6244fa8207a95435666d57e9c77f.1920x1080.jpg?t=1774464322",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/11b6e12f4fe97f00ef37d4d9c7b730bfd5d07fdd/ss_11b6e12f4fe97f00ef37d4d9c7b730bfd5d07fdd.1920x1080.jpg?t=1774464322",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/2b1478c28ebdf38b5f8d82de0d72227cdaaf7bbb/ss_2b1478c28ebdf38b5f8d82de0d72227cdaaf7bbb.1920x1080.jpg?t=1774464322"
    ],
    "featured": false
  },
  {
    "id": "1551360",
    "title": "Forza Horizon 5",
    "developer": "Playground Games",
    "publisher": "Xbox Game Studios",
    "releaseDate": "8 Nov, 2021",
    "price": 3499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Racing"
    ],
    "description": "Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_cf56e25a0290556ba83229eb0ab370d10be0407c.1920x1080.jpg?t=1746471508",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_00f0090174380eeaf8753bd3d1028b6772c3aebf.1920x1080.jpg?t=1746471508",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.1920x1080.jpg?t=1746471508"
    ],
    "featured": false
  },
  {
    "id": "1172620",
    "title": "Sea of Thieves: 2025 Edition",
    "developer": "Rare Ltd",
    "publisher": "Xbox Game Studios",
    "releaseDate": "3 Jun, 2020",
    "price": 3499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_ec623c77d75dfa098c622b547b1ab21ad4cae0a8.1920x1080.jpg?t=1773926224",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_6ea04bdc415c336a195555aec4b97a73a9910fc1.1920x1080.jpg?t=1773926224",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_2144ac860fd64d82cb9cc49680f5087c7bb8fe2f.1920x1080.jpg?t=1773926224"
    ],
    "featured": false
  },
  {
    "id": "275850",
    "title": "No Man's Sky",
    "developer": "Hello Games",
    "publisher": "Hello Games",
    "releaseDate": "12 Aug, 2016",
    "price": 2400,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/251992eb497ebef3bbd6e81e2c3e80a00d2770a6/ss_251992eb497ebef3bbd6e81e2c3e80a00d2770a6.1920x1080.jpg?t=1770822722",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/d8de91e4a87f0e2c0fb70c84bd0f798bd4617eaf/ss_d8de91e4a87f0e2c0fb70c84bd0f798bd4617eaf.1920x1080.jpg?t=1770822722",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/71f533720e58e1fb5dd61f23388abfe4f9caa6b5/ss_71f533720e58e1fb5dd61f23388abfe4f9caa6b5.1920x1080.jpg?t=1770822722"
    ],
    "featured": false
  },
  {
    "id": "264710",
    "title": "Subnautica",
    "developer": "Unknown Worlds Entertainment",
    "publisher": "Unknown Worlds Entertainment",
    "releaseDate": "23 Jan, 2018",
    "price": 1800,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "Indie"
    ],
    "description": "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_e182b6b20bb797500f9f63c561586d920d44e37c.1920x1080.jpg?t=1774323987",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_970a13f246e33e0df26d93baf9f8e975732adb4b.1920x1080.jpg?t=1774323987",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_5f2f2ea498cdc632cbffd6cf37c1a09670eb3272.1920x1080.jpg?t=1774323987"
    ],
    "featured": false
  },
  {
    "id": "1145360",
    "title": "Hades",
    "developer": "Supergiant Games",
    "publisher": "Supergiant Games",
    "releaseDate": "17 Sep, 2020",
    "price": 1100,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie",
      "RPG"
    ],
    "description": "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_c0fed447426b69981cf1721756acf75369801b31.1920x1080.jpg?t=1758127023",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_8a9f0953e8a014bd3df2789c2835cb787cd3764d.1920x1080.jpg?t=1758127023",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_68300459a8c3daacb2ec687adcdbf4442fcc4f47.1920x1080.jpg?t=1758127023"
    ],
    "featured": false
  },
  {
    "id": "367520",
    "title": "Hollow Knight",
    "developer": "Team Cherry",
    "publisher": "Team Cherry",
    "releaseDate": "24 Feb, 2017",
    "price": 690,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg?t=1770338567",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg?t=1770338567",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg?t=1770338567"
    ],
    "featured": false
  },
  {
    "id": "588650",
    "title": "Dead Cells",
    "developer": "Motion Twin",
    "publisher": "Motion Twin",
    "releaseDate": "6 Aug, 2018",
    "price": 629,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Dead Cells is a roguelite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_ac28000ade40cc2fe5c128f32ac98ba33c008a7a.1920x1080.jpg?t=1772726488",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_7bde51ea6c8f6289e85ea1d8c1c941e1f8bfee91.1920x1080.jpg?t=1772726488",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_e87e72a247918d8493892e035d5e1b4b84470d2f.1920x1080.jpg?t=1772726488"
    ],
    "featured": false
  },
  {
    "id": "504230",
    "title": "Celeste",
    "developer": "Maddy Makes Games Inc.",
    "publisher": "Maddy Makes Games Inc.",
    "releaseDate": "25 Jan, 2018",
    "price": 899,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1ad297c2044cdcf450ee83e56350cafb590da755.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_03bfe6bd5ddac7f747c8d2aa1a4f82cfd53c6dcb.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_4b0f0222341b64a37114033aca9994551f27c161.1920x1080.jpg?t=1714089525"
    ],
    "featured": false
  },
  {
    "id": "268910",
    "title": "Cuphead",
    "developer": "Studio MDHR Entertainment Inc.",
    "publisher": "Studio MDHR Entertainment Inc.",
    "releaseDate": "29 Sep, 2017",
    "price": 565,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie"
    ],
    "description": "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_e3096a5555cb77d88db165c83d5ef3a24af1354a.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_483fb089be0093beeef03525276803a9ca4f66a1.1920x1080.jpg?t=1709068852"
    ],
    "featured": false
  },
  {
    "id": "1057090",
    "title": "Ori and the Will of the Wisps",
    "developer": "Moon Studios GmbH",
    "publisher": "Xbox Game Studios",
    "releaseDate": "10 Mar, 2020",
    "price": 699,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_0cf0ec6681ae5771173790dbc99ddb3bf3b886ad.1920x1080.jpg?t=1759530749",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_f8ac174b7949e89fe1939a7bd2c471785dee55f0.1920x1080.jpg?t=1759530749",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_3ae04b208aaff3869f69617c47449ec1d7a06513.1920x1080.jpg?t=1759530749"
    ],
    "featured": false
  },
  {
    "id": "814380",
    "title": "Sekiro™: Shadows Die Twice - GOTY Edition",
    "developer": "FromSoftware, Inc.",
    "publisher": "Activision (Excluding Japan and Asia)",
    "releaseDate": "21 Mar, 2019",
    "price": 4997,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1762888662",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.1920x1080.jpg?t=1762888662",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.1920x1080.jpg?t=1762888662"
    ],
    "featured": false
  },
  {
    "id": "374320",
    "title": "DARK SOULS™ III",
    "developer": "FromSoftware, Inc.",
    "publisher": "FromSoftware, Inc.",
    "releaseDate": "11 Apr, 2016",
    "price": 4299,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.1920x1080.jpg?t=1748630784",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1c0fa39091901496d77cf4cecfea4ffb056d6452.1920x1080.jpg?t=1748630784",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1318a04ef11d87f38aebe6d47a96124f8f888ca8.1920x1080.jpg?t=1748630784"
    ],
    "featured": false
  },
  {
    "id": "2050650",
    "title": "Resident Evil 4",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "releaseDate": "23 Mar, 2023",
    "price": 2497,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_59d1b19964cc532213df92c8287b75a0bffeb33c.1920x1080.jpg?t=1772502922",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_ab807f8ad9e968a620777caf483cb6020367b9ee.1920x1080.jpg?t=1772502922",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_0442f7fb4327d79802c2db8ea8d23d228a28d896.1920x1080.jpg?t=1772502922"
    ],
    "featured": false
  },
  {
    "id": "1196590",
    "title": "Resident Evil Village",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "releaseDate": "6 May, 2021",
    "price": 2497,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_d25704b01be292d1337df4fea0fba2aab322b58a.1920x1080.jpg?t=1770093483",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_8113ec993ec474055c4cdce5ee86f91f7cf6663f.1920x1080.jpg?t=1770093483",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_50283e6df9d2f3f24ff4a1a36a94ae307e21cee8.1920x1080.jpg?t=1770093483"
    ],
    "featured": false
  },
  {
    "id": "601150",
    "title": "Devil May Cry 5",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "releaseDate": "7 Mar, 2019",
    "price": 1997,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_4410bada2565843dae693b03ac3a50256ff5dd66.1920x1080.jpg?t=1768869803",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_4ce180ed8979a51c72de51f985e9e9ba13500508.1920x1080.jpg?t=1768869803",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_e2be70565f94a7f6c392cccddce08c67f2f87612.1920x1080.jpg?t=1768869803"
    ],
    "featured": false
  },
  {
    "id": "1364780",
    "title": "Street Fighter™ 6",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "releaseDate": "1 Jun, 2023",
    "price": 2499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Here comes Capcom’s newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.1920x1080.jpg?t=1773812087",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.1920x1080.jpg?t=1773812087",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.1920x1080.jpg?t=1773812087"
    ],
    "featured": false
  },
  {
    "id": "1778820",
    "title": "TEKKEN 8",
    "developer": "Bandai Namco Studios Inc.",
    "publisher": "Bandai Namco Entertainment",
    "releaseDate": "25 Jan, 2024",
    "price": 3499,
    "discountPercent": 60,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "TEKKEN 8 is the latest addition to the TEKKEN series, the pinnacle of 3D fighting games. Join the fight with over 32 characters and bear witness to the next installment in this epic saga. Get ready for the biggest and best TEKKEN game ever made!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_62e6ec252bc1a641e8e42dba07f23631d5da85e6.1920x1080.jpg?t=1770678135",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_99dabe34abc0f92adc39d7099908c9540be7eb3f.1920x1080.jpg?t=1770678135",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_bbd38a5fe748ec966cbc85ffcd4931f0f2da8ffd.1920x1080.jpg?t=1770678135"
    ],
    "featured": false
  },
  {
    "id": "1971870",
    "title": "Mortal Kombat 1",
    "developer": "NetherRealm Studios",
    "publisher": "Warner Bros. Games",
    "releaseDate": "19 Sep, 2023",
    "price": 2799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Discover a reborn Mortal Kombat™ Universe created by the Fire God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/ss_7eb14734a264570367c607698371e492415f48a4.1920x1080.jpg?t=1750176505",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/ss_29b0a9e87d5a4981d7403994b661c43117a87d84.1920x1080.jpg?t=1750176505",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/ss_18eadd6859ed15531d25cd67fe1d2402e9bf75b3.1920x1080.jpg?t=1750176505"
    ],
    "featured": false
  },
  {
    "id": "1687950",
    "title": "Persona 5 Royal",
    "developer": "ATLUS",
    "publisher": "SEGA",
    "releaseDate": "20 Oct, 2022",
    "price": 4399,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_663171dc3afce8fe987e57e8659f91b69faa39bc.1920x1080.jpg?t=1763530018",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_a3258aba84ae2f2ff13a02a160f7495bfc152adb.1920x1080.jpg?t=1763530018",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_ddcc016b8e5c434ccbd1a89c0157ce73acf905ae.1920x1080.jpg?t=1763530018"
    ],
    "featured": false
  },
  {
    "id": "638970",
    "title": "Yakuza 0",
    "developer": "Ryu Ga Gotoku Studio",
    "publisher": "SEGA",
    "releaseDate": "1 Aug, 2018",
    "price": 1499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "SEGA’s legendary Japanese series finally comes to PC. Fight like hell through Tokyo and Osaka as junior yakuza Kiryu and Majima. Take a front row seat to 1980s life in Japan in an experience unlike anything else in video gaming, with uncapped framerates and 4K resolutions. A legend is born.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_673bf61e19a07e6e0301b71b26d121281822c782.1920x1080.jpg?t=1765476042",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_0b59c9984364e73a4d4413f50884d0ead3c81ab1.1920x1080.jpg?t=1765476042",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_644c85a24f6d2710acc927072a30f70841ea955f.1920x1080.jpg?t=1765476042"
    ],
    "featured": false
  },
  {
    "id": "524220",
    "title": "NieR:Automata™",
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "releaseDate": "17 Mar, 2017",
    "price": 1330,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_d0314b4c134329a483b5e43af951f60274abc66b.1920x1080.jpg?t=1773364834",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_8b29f7e1ce9a8b9313dc3eb50dbe76a4cf94eef9.1920x1080.jpg?t=1773364834",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_2c265df38c3d2d393d74ee8e74d79bdafa16b143.1920x1080.jpg?t=1773364834"
    ],
    "featured": false
  },
  {
    "id": "39210",
    "title": "FINAL FANTASY XIV Online",
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "releaseDate": "18 Feb, 2014",
    "price": 719,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/capsule_616x353.jpg",
    "tags": [
      "Massively Multiplayer",
      "RPG"
    ],
    "description": "Join over 30 million adventurers worldwide and take part in an epic and ever-changing FINAL FANTASY. Experience an unforgettable story, exhilarating battles, and a myriad of captivating environments to explore.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/ss_a70cbc9141d47a6e97f03da381a05bda44ceb847.1920x1080.jpg?t=1774575436",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/ss_2899439a93eb6a2997d79c9cc90ff4a647d0cd43.1920x1080.jpg?t=1774575436",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/ss_d9c35de6f0fcce01750553bbdeb5e2957ffa2f4a.1920x1080.jpg?t=1774575436"
    ],
    "featured": false
  },
  {
    "id": "1462040",
    "title": "FINAL FANTASY VII REMAKE INTERGRADE",
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "releaseDate": "17 Jun, 2022",
    "price": 2499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_20a352a2c20dd4bfb08fa131dc4c2e763510f584.1920x1080.jpg?t=1773895755",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_55903e74751601e42fb7f858d5c07ec048386ce2.1920x1080.jpg?t=1773895755",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_ac55306d00923f2902de20bb5ade7f9cc190e8cf.1920x1080.jpg?t=1773895755"
    ],
    "featured": false
  },
  {
    "id": "1593500",
    "title": "God of War",
    "developer": "Santa Monica Studio",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "14 Jan, 2022",
    "price": 3299,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.1920x1080.jpg?t=1763059412",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg?t=1763059412",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg?t=1763059412"
    ],
    "featured": false
  },
  {
    "id": "1817070",
    "title": "Marvel’s Spider-Man Remastered",
    "developer": "Insomniac Games",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "12 Aug, 2022",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Casual"
    ],
    "description": "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfe778bf6d66e952e4acd4e1f926f7615b609ddf.1920x1080.jpg?t=1763569047",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_427677cf78195df94702f0a963cd9eaeb9d8935a.1920x1080.jpg?t=1763569047",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfba6f2477bfa42be69ddfdffbd421d3943d20bf.1920x1080.jpg?t=1763569047"
    ],
    "featured": false
  },
  {
    "id": "1151640",
    "title": "Horizon Zero Dawn™ Complete Edition",
    "developer": "Guerrilla",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "7 Aug, 2020",
    "price": 1499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_d09106060fb7de8bf342c23df18b14debc8a15a3.1920x1080.jpg?t=1750105817",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_271f850eec3f96b22aa17be35b948268e0771c7f.1920x1080.jpg?t=1750105817",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_15f5759c441e4e5f51e1a8ee333e4ab9df9aa783.1920x1080.jpg?t=1750105817"
    ],
    "featured": false
  },
  {
    "id": "1259420",
    "title": "Days Gone",
    "developer": "Bend Studio",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "17 May, 2021",
    "price": 2499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Ride and fight into a deadly, post pandemic America. Play as Deacon St. John, a drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live in this open-world action-adventure game.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/ss_8d958e566d5315463d099b21eae729d0f462caad.1920x1080.jpg?t=1750947718",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/ss_4a1a39d5559909424ed36414070477a96c91e92c.1920x1080.jpg?t=1750947718",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/ss_364f3048399fcb95df5e878c708c94e934cd53d4.1920x1080.jpg?t=1750947718"
    ],
    "featured": false
  },
  {
    "id": "1888930",
    "title": "The Last of Us™ Part I",
    "developer": "Naughty Dog LLC",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "28 Mar, 2023",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Discover the award-winning game that inspired the critically acclaimed television show. Guide Joel and Ellie through a post-apocalyptic America, and encounter unforgettable allies and enemies in The Last of Us™.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_3f1805ecddafacee7f61f87cb8e4624435a83ee3.1920x1080.jpg?t=1750959031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_89fffc2857dcae29dee2a09f1be33d745610e19d.1920x1080.jpg?t=1750959031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_8cd55ab975b2e47f4d4d9a0da4ae6948040ef807.1920x1080.jpg?t=1750959031"
    ],
    "featured": false
  },
  {
    "id": "1659420",
    "title": "UNCHARTED™: Legacy of Thieves Collection",
    "developer": "Naughty Dog LLC",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "19 Oct, 2022",
    "price": 3299,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/capsule_616x353.jpg",
    "tags": [
      "Adventure"
    ],
    "description": "Play as Nathan Drake and Chloe Frazer in their own standalone adventures as they confront their pasts and forge their own legacies. This game includes the critically acclaimed single-player stories from both UNCHARTED 4: A Thief’s End and UNCHARTED: The Lost Legacy.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/ss_417913fbee123c5e35718ebef63bc8a6ce435adf.1920x1080.jpg?t=1751913411",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/ss_a1816dd536122dd740043c2b9440136503904215.1920x1080.jpg?t=1751913411",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/ss_e570e5f369ff6cd0471f80d99f5a86c3b03a2285.1920x1080.jpg?t=1751913411"
    ],
    "featured": false
  },
  {
    "id": "1895880",
    "title": "Ratchet & Clank: Rift Apart",
    "developer": "Insomniac Games",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "26 Jul, 2023",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Blast your way through an interdimensional adventure with Ratchet and Clank – now on PC! Help them take on an evil emperor from another reality as you jump between action-packed worlds and beyond at hyper-speed!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_852202ce40cd9c558f7f732a9c2e23a6980bca6f.1920x1080.jpg?t=1750956328",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_31b29f38b6c97cf8c4cd80936f2defd347a62091.1920x1080.jpg?t=1750956328",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_5d2c999ecdccbc200121318b479bf0bdeb16b9b9.1920x1080.jpg?t=1750956328"
    ],
    "featured": false
  },
  {
    "id": "1649240",
    "title": "Returnal™",
    "developer": "Housemarque",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "15 Feb, 2023",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "BREAK THE CYCLE Fight to survive as this award-winning third-person shooter brings Selene’s story to PC. Take on roguelike challenges. Engage enemies in bullet hell-fuelled clashes. Share your journey through Returnal™ with another player.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_3c260834df0c87cfc9ac1b457d0ec0eb3b9f367c.1920x1080.jpg?t=1750956860",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_a91854c29cee0b4975862d174f03ff374ae5e26c.1920x1080.jpg?t=1750956860",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_e15da2a195556b773ba8a982051f55de50d79a75.1920x1080.jpg?t=1750956860"
    ],
    "featured": false
  },
  {
    "id": "2215430",
    "title": "Ghost of Tsushima DIRECTOR'S CUT",
    "developer": "Sucker Punch Productions",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "16 May, 2024",
    "price": 3999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "A storm is coming. Venture into the complete Ghost of Tsushima DIRECTOR’S CUT on PC; forge your own path through this open-world action adventure and uncover its hidden wonders. Brought to you by Sucker Punch Productions, Nixxes Software and PlayStation Studios.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/ss_51eb1a47a41271abb0aa781de576f704d95b601b.1920x1080.jpg?t=1763409398",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/ss_d60e16422fc1605181e0fedee3e2cfc1e02c750e.1920x1080.jpg?t=1763409398",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/ss_11409331d57966ef193d66ffcded569d02a4e034.1920x1080.jpg?t=1763409398"
    ],
    "featured": false
  },
  {
    "id": "394510",
    "title": "HELLDIVERS™ Dive Harder Edition",
    "developer": "Arrowhead Game Studios",
    "publisher": "PlayStation Publishing LLC",
    "releaseDate": "7 Dec, 2015",
    "price": 729,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394510/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394510/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "HELLDIVERS™ is a hardcore, cooperative, twin stick shooter. As part of the elite unit called the HELLDIVERS, players must work together to protect SUPER EARTH and defeat the enemies of mankind in an intense intergalactic war.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394510/ss_487d792377661b10a8ed2a5765cfcfc6893f7dbb.1920x1080.jpg?t=1750950223",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394510/ss_94349e90aae9500d3c5b7f46018540e34e7e6239.1920x1080.jpg?t=1750950223",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394510/ss_fbd3f7b54e52a4b4ecd361d975008b4b152dee27.1920x1080.jpg?t=1750950223"
    ],
    "featured": false
  },
  {
    "id": "397540",
    "title": "Borderlands 3",
    "developer": "Gearbox Software",
    "publisher": "2K",
    "releaseDate": "13 Mar, 2020",
    "price": 2990,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds and enemies as one of four new Vault Hunters.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_9868ee40f39749a4c8222502cf86525ee32c1bef.1920x1080.jpg?t=1750802377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_f2053d688ec55f2269c47b24313539938bef9064.1920x1080.jpg?t=1750802377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_624638e46ed590d4bb1835558a5ab0981f7baadd.1920x1080.jpg?t=1750802377"
    ],
    "featured": false
  },
  {
    "id": "49520",
    "title": "Borderlands 2",
    "developer": "Gearbox Software",
    "publisher": "2K",
    "releaseDate": "20 Sep, 2012",
    "price": 999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_6734eaa79dcd0fe53971fbd50d20b5d0d45f4809.1920x1080.jpg?t=1751931279",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_2f27a18562fbf4a91943c3968b35db5ac1caf5ad.1920x1080.jpg?t=1751931279",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_c20610ab476bfe99172df77fe84f579d91e45a2b.1920x1080.jpg?t=1751931279"
    ],
    "featured": false
  },
  {
    "id": "8870",
    "title": "BioShock Infinite",
    "developer": "Irrational Games",
    "publisher": "2K",
    "releaseDate": "25 Mar, 2013",
    "price": 1745,
    "discountPercent": 80,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_26e2d983948edfb911db3e0d2c3679900b4ef9fa.1920x1080.jpg?t=1728673518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_c6f3fbf3e9f4cb1777462150203a7174608dfcd9.1920x1080.jpg?t=1728673518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_dc76723504ce89c1ed1f66fd468682ba76548c32.1920x1080.jpg?t=1728673518"
    ],
    "featured": false
  },
  {
    "id": "205100",
    "title": "Dishonored",
    "developer": "Arkane Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "9 Oct, 2012",
    "price": 670,
    "discountPercent": 75,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored’s flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/ss_409bb8591d4c8278815510d9be737b57dfc57e06.1920x1080.jpg?t=1750785977",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/ss_32d76a6ff4b216410b90ff2cdb7107a28a1baed2.1920x1080.jpg?t=1750785977",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/ss_fd7613fa1b8f19674cc0b4cd53db39c9618641fd.1920x1080.jpg?t=1750785977"
    ],
    "featured": false
  },
  {
    "id": "480490",
    "title": "Prey",
    "developer": "Arkane Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "4 May, 2017",
    "price": 1399,
    "discountPercent": 80,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_06b6c27c834b5639c54d470b3b5c711cf72a94af.1920x1080.jpg?t=1750785331",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_ff6b4efb3add6ea9a1d67f5c6c0fae6661ed9fd8.1920x1080.jpg?t=1750785331",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_976f1d181de3dc8bc86c78fe900c98be457d0942.1920x1080.jpg?t=1750785331"
    ],
    "featured": false
  },
  {
    "id": "379720",
    "title": "DOOM",
    "developer": "id Software",
    "publisher": "Bethesda Softworks",
    "releaseDate": "12 May, 2016",
    "price": 1599,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/ss_f989e793786bf1d6459da1139a484203efef1447.1920x1080.jpg?t=1750784856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/ss_ac05e086b8f0580bc95970fbb6f18a7e4fe65404.1920x1080.jpg?t=1750784856",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/ss_d7ee83faf64036494e4a817b8be55b044fbe7c6c.1920x1080.jpg?t=1750784856"
    ],
    "featured": false
  },
  {
    "id": "612880",
    "title": "Wolfenstein II: The New Colossus",
    "developer": "MachineGames",
    "publisher": "Bethesda Softworks",
    "releaseDate": "26 Oct, 2017",
    "price": 1999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "America, 1961. The assassination of Nazi General Deathshead was a short-lived victory. The Nazis maintain their stranglehold on the world. You are BJ Blazkowicz, aka “Terror-Billy,” member of the Resistance, scourge of the Nazi empire, and humanity’s last hope for liberty.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/ss_c195852422ed8e92ffa4d68ea4bfd34291823c3e.1920x1080.jpg?t=1750784115",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/ss_3abc2dfc77f8bb39eb36bf37eef23b1ab021a554.1920x1080.jpg?t=1750784115",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/ss_be6b2824fd6796ebe8b5f78155a386f5c5178e6d.1920x1080.jpg?t=1750784115"
    ],
    "featured": false
  },
  {
    "id": "22380",
    "title": "Fallout: New Vegas",
    "developer": "Obsidian Entertainment",
    "publisher": "Bethesda Softworks",
    "releaseDate": "21 Oct, 2010",
    "price": 449,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "Welcome to Vegas. New Vegas. Enjoy your stay!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_62f8d0b006935ff6de7fe276f713e7d15e579bc9.1920x1080.jpg?t=1765992876",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_ec8a28942fcb5cb15718f949ab81124932a5084d.1920x1080.jpg?t=1765992876",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_f703adcb9aa1d718a39288adf7d2e1b4dc0e568a.1920x1080.jpg?t=1765992876"
    ],
    "featured": false
  },
  {
    "id": "22330",
    "title": "The Elder Scrolls IV: Oblivion® Game of the Year Edition (2009)",
    "developer": "Bethesda Game Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "16 Jun, 2009",
    "price": 565,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "PUBLISHER UPDATE - This is the product page for The Elder Scrolls IV: Oblivion Game of the Year Edition, released in 2009. ---The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009037.1920x1080.jpg?t=1745343031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009038.1920x1080.jpg?t=1745343031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009039.1920x1080.jpg?t=1745343031"
    ],
    "featured": false
  },
  {
    "id": "22320",
    "title": "The Elder Scrolls III: Morrowind® Game of the Year Edition",
    "developer": "Bethesda Game Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "16 Jun, 2009",
    "price": 565,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "The Elder Scrolls III: Morrowind® Game of the Year Edition includes Morrowind plus all of the content from the Bloodmoon and Tribunal expansions. The original Mod Construction Set is not included in this package. An epic, open-ended single-player RPG, Morrowind allows you to create and play any kind of character imaginable.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/0000009069.1920x1080.jpg?t=1760029380",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/0000009070.1920x1080.jpg?t=1760029380",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/0000009071.1920x1080.jpg?t=1760029380"
    ],
    "featured": false
  },
  {
    "id": "403640",
    "title": "Dishonored 2",
    "developer": "Arkane Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "11 Nov, 2016",
    "price": 1399,
    "discountPercent": 80,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster &amp; winner of 100+ 'Game of the Year' awards, Dishonored.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/ss_f2206b92cfde7e2c63a106e35ddc847700a2f7d8.1920x1080.jpg?t=1750785918",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/ss_29982f240a3bca5bcf7f4a2150b88ea7de240df0.1920x1080.jpg?t=1750785918",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/ss_4095dc87c8e6f8a3f6a12134e1e0f3bb3e9aa808.1920x1080.jpg?t=1750785918"
    ],
    "featured": false
  },
  {
    "id": "1252330",
    "title": "DEATHLOOP",
    "developer": "Arkane Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "13 Sep, 2021",
    "price": 2499,
    "discountPercent": 80,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252330/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252330/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "DEATHLOOP is a next-gen FPS from Arkane Lyon, the award-winning studio behind Dishonored. In DEATHLOOP, two rival assassins are trapped in a mysterious timeloop on the island of Blackreef, doomed to repeat the same day for eternity.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252330/ss_26bfb9a442924c466a844086646727f5d6191810.1920x1080.jpg?t=1750785409",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252330/ss_b05a1ef5c5a43860f7728637c7047695d0d52236.1920x1080.jpg?t=1750785409",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252330/ss_b18d58a9b6a161bf3b253044b9b3edb91802be0c.1920x1080.jpg?t=1750785409"
    ],
    "featured": false
  },
  {
    "id": "1475810",
    "title": "Ghostwire: Tokyo",
    "developer": "Tango Gameworks",
    "publisher": "Bethesda Softworks",
    "releaseDate": "24 Mar, 2022",
    "price": 2499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1475810/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1475810/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Tokyo's population has vanished, and deadly supernatural forces prowl the streets. Use an arsenal of elemental abilities to unravel the truth behind the disappearance and save Tokyo.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1475810/ss_67c79411e5b14f370cefce560e84553027d210db.1920x1080.jpg?t=1750779600",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1475810/ss_b62b51519d10a281d2d97a636e6952005b65fa32.1920x1080.jpg?t=1750779600",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1475810/ss_eb2642ee902c4a34db5489fec084d1ee6db78105.1920x1080.jpg?t=1750779600"
    ],
    "featured": false
  },
  {
    "id": "1817230",
    "title": "Hi-Fi RUSH",
    "developer": "Tango Gameworks",
    "publisher": "KRAFTON, Inc.",
    "releaseDate": "25 Jan, 2023",
    "price": 1799,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Test your abilities in two new game modes, uncover new rewards and even a few secrets in the Arcade Challenge! Update! Feel the beat as wannabe rockstar Chai and his ragtag team fight against an evil megacorp in a world that syncs to the music.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_382e9d5abb00498eee6a86b0366a2db7826268b7.1920x1080.jpg?t=1764916407",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_8a13650ffe930da77593dae80f0118588c46a5ca.1920x1080.jpg?t=1764916407",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_62a7ff68fff7850be6a0784eff41edafd33b2099.1920x1080.jpg?t=1764916407"
    ],
    "featured": false
  },
  {
    "id": "1716740",
    "title": "Starfield",
    "developer": "Bethesda Game Studios",
    "publisher": "Bethesda Softworks",
    "releaseDate": "5 Sep, 2023",
    "price": 3499,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg",
    "tags": [
      "RPG"
    ],
    "description": "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1773759594",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_b2821283cb140cd5a6289a8160016b6a60d8f96e.1920x1080.jpg?t=1773759594",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_68f15d580bf91971f637be5e464bc803482d78f7.1920x1080.jpg?t=1773759594"
    ],
    "featured": false
  },
  {
    "id": "1294810",
    "title": "Redfall",
    "developer": "Arkane Austin",
    "publisher": "Bethesda Softworks",
    "releaseDate": "1 May, 2023",
    "price": 2499,
    "discountPercent": 50,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1294810/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1294810/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "The town of Redfall is under siege by a legion of vampires who have cut the island off from the outside world. Trapped with a handful of survivors, slay alone or squad up in open-world FPS action.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1294810/ss_0d4c00b12b00cabb4921e9ce7286abf02250a796.1920x1080.jpg?t=1750785261",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1294810/ss_85c9ccbe89ebbae9c2ec8333b7a896c1574dccf0.1920x1080.jpg?t=1750785261",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1294810/ss_c58d5d55c35a66500178ef78ce2182ff01179655.1920x1080.jpg?t=1750785261"
    ],
    "featured": false
  },
  {
    "id": "1205520",
    "title": "Pentiment",
    "developer": "Obsidian Entertainment",
    "publisher": "Xbox Game Studios",
    "releaseDate": "14 Nov, 2022",
    "price": 1299,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1205520/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1205520/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "Casual"
    ],
    "description": "Step into a living illustrated world in a time when Europe is at a crossroads of great religious and political change. Walk in the footsteps of Andreas Maler, a master artist who finds himself in the middle of murders, scandals, and intrigue in the Bavarian Alps.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1205520/ss_115917c4fe73896ec794b7e8e1795db02f33a11b.1920x1080.jpg?t=1759874806",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1205520/ss_845e68ea9b9eec0f09a838bd7fd6cdcc8537407b.1920x1080.jpg?t=1759874806",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1205520/ss_d6e8594853dc8a16033c3644a0fbb05909f2848b.1920x1080.jpg?t=1759874806"
    ],
    "featured": false
  },
  {
    "id": "962130",
    "title": "Grounded",
    "developer": "Obsidian Entertainment",
    "publisher": "Xbox Game Studios",
    "releaseDate": "27 Sep, 2022",
    "price": 2699,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962130/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962130/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure"
    ],
    "description": "The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962130/ss_91a03b79d881f37cc7d39b5baf5bb597d344fabe.1920x1080.jpg?t=1768264530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962130/ss_432b22f117321d942d5bbb4ee49d2acc37b4baf2.1920x1080.jpg?t=1768264530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962130/ss_298eedf3441e631910ca29d274da0a54f56632b8.1920x1080.jpg?t=1768264530"
    ],
    "featured": false
  },
  {
    "id": "253980",
    "title": "Enclave",
    "developer": "Starbreeze",
    "publisher": "Topware Interactive",
    "releaseDate": "4 Oct, 2013",
    "price": 480,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253980/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253980/capsule_616x353.jpg",
    "tags": [
      "Action",
      "RPG"
    ],
    "description": "Experience incredibly atmospheric and intense medieval combat action! Go ahead and enter a new world, the award-winning world of ENCLAVE!The people of Light and Darkness are divided by a bottomless rift that split the earth many millennia ago.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253980/ss_a8ace61c0104c6f78d3d56d79d33ab069ec178c6.1920x1080.jpg?t=1761310202",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253980/ss_e194391e25b8159fbe08def2e1909924cf2395b1.1920x1080.jpg?t=1761310202",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253980/ss_d295b2577c8e406f078767877948d7743052de89.1920x1080.jpg?t=1761310202"
    ],
    "featured": false
  },
  {
    "id": "1244090",
    "title": "Sea of Stars",
    "developer": "Sabotage Studio",
    "publisher": "Sabotage Studio",
    "releaseDate": "28 Aug, 2023",
    "price": 1500,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "Indie",
      "RPG"
    ],
    "description": "Sea of Stars is a turn-based RPG inspired by the classics. It tells the story of two Children of the Solstice who will combine the powers of the sun and moon to perform Eclipse Magic, the only force capable of fending off the monstrous creations of the evil alchemist known as The Fleshmancer.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_f756ff477590284c7192ffcef99237de056e4aeb.1920x1080.jpg?t=1756414027",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_c250a7fd789b3cbab5ca8e99e3530cf933656ad1.1920x1080.jpg?t=1756414027",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_889d4ddea7d0884d9d370dd280878570824e68fe.1920x1080.jpg?t=1756414027"
    ],
    "featured": false
  },
  {
    "id": "1229240",
    "title": "Chained Echoes",
    "developer": "Umami Tiger (Matthias Linda)",
    "publisher": "Deck13",
    "releaseDate": "8 Dec, 2022",
    "price": 569,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1229240/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1229240/capsule_616x353.jpg",
    "tags": [
      "Indie",
      "RPG"
    ],
    "description": "Take up your sword, channel your magic or board your Mech. Chained Echoes is a 16-bit style RPG set in a fantasy world where dragons are as common as piloted mechanical suits.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1229240/ss_b25ed2e671e7b616ec14e7ed3a2f483909e368c4.1920x1080.jpg?t=1760428315",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1229240/ss_b350a5ee81b0eff7c044c99b2d809489d35a665c.1920x1080.jpg?t=1760428315",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1229240/ss_cfba4c66d14e860d381374d252381f7469f39582.1920x1080.jpg?t=1760428315"
    ],
    "featured": false
  },
  {
    "id": "1868140",
    "title": "DAVE THE DIVER",
    "developer": "MINTROCKET",
    "publisher": "MINTROCKET",
    "releaseDate": "28 Jun, 2023",
    "price": 880,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "Casual",
      "RPG"
    ],
    "description": "DAVE THE DIVER is a casual, singleplayer adventure RPG featuring deep-sea exploration and fishing during the day and sushi restaurant management at night. Join Dave and his quirky friends as they seek to uncover the secrets of the mysterious Blue Hole.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_7c86a17d545b6260ecdcfdd62622e49dcc9011bd.1920x1080.jpg?t=1773811303",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_783e1f6c2d4c358fb494d055c47c0e888922abd5.1920x1080.jpg?t=1773811303",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_6eac5a3b59e181d1ffa26757b041be521bfe1779.1920x1080.jpg?t=1773811303"
    ],
    "featured": false
  },
  {
    "id": "1562430",
    "title": "DREDGE",
    "developer": "Black Salt Games",
    "publisher": "Team17",
    "releaseDate": "30 Mar, 2023",
    "price": 1999,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "RPG"
    ],
    "description": "DREDGE is a single-player fishing adventure with a sinister undercurrent. Sell your catch, upgrade your boat, and dredge the depths for long-buried secrets. Explore a mysterious archipelago and discover why some things are best left forgotten.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_70f88014423ed93eaa111c0d0daca2c500f76908.1920x1080.jpg?t=1766050211",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_d4d4b14c5cd071307e27b4e9737f23f28b096248.1920x1080.jpg?t=1766050211",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_9529104cde1af2ffbb715cab42bbb3012fb9b7d8.1920x1080.jpg?t=1766050211"
    ],
    "featured": false
  },
  {
    "id": "1313140",
    "title": "Cult of the Lamb",
    "developer": "Massive Monster",
    "publisher": "Devolver Digital",
    "releaseDate": "11 Aug, 2022",
    "price": 899,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_3bda2c2e740660fcde8c42eafab4cb7574ab54e6.1920x1080.jpg?t=1769836674",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_805babf3c8dec217798c836daea48a63b47c192b.1920x1080.jpg?t=1769836674",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_b26625d6f64a739ed1ddf832a5d26b665ab0619f.1920x1080.jpg?t=1769836674"
    ],
    "featured": false
  },
  {
    "id": "1092790",
    "title": "Inscryption",
    "developer": "Daniel Mullins Games",
    "publisher": "Devolver Digital",
    "releaseDate": "19 Oct, 2021",
    "price": 699,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/capsule_616x353.jpg",
    "tags": [
      "Adventure",
      "Indie",
      "Strategy"
    ],
    "description": "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/ss_0191a69b0e94a9a7784f5b81e27f06379910645a.1920x1080.jpg?t=1768517864",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/ss_3b714682e9e0a214df1630a234e9f6764528eece.1920x1080.jpg?t=1768517864",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/ss_7bfe728822807d232398df1cb1a5d64addd3d8fb.1920x1080.jpg?t=1768517864"
    ],
    "featured": false
  },
  {
    "id": "646570",
    "title": "Slay the Spire",
    "developer": "Mega Crit",
    "publisher": "Mega Crit",
    "releaseDate": "23 Jan, 2019",
    "price": 1100,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/capsule_616x353.jpg",
    "tags": [
      "Indie",
      "Strategy"
    ],
    "description": "We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_c171816f7ecd35b5b46d2fa27532f4c5b8ca3cc5.1920x1080.jpg?t=1774015376",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_01aa3e7759e457bfbf2422f31c325d7b3ba8a6eb.1920x1080.jpg?t=1774015376",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_b757436d08ba08292796bfed9c60e7cc99d5f2c3.1920x1080.jpg?t=1774015376"
    ],
    "featured": false
  },
  {
    "id": "1794680",
    "title": "Vampire Survivors",
    "developer": "poncle",
    "publisher": "poncle",
    "releaseDate": "20 Oct, 2022",
    "price": 249,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Casual",
      "Indie"
    ],
    "description": "Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you. Be the bullet hell!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_6c55afe36be2a7784bf18cb9b3218321ae2d10e5.1920x1080.jpg?t=1763675244",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_6105ad3d6af52593c31d915bf39e91512611ea8e.1920x1080.jpg?t=1763675244",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_054159adc52856d066d48bda02866da524c43439.1920x1080.jpg?t=1763675244"
    ],
    "featured": false
  },
  {
    "id": "1942280",
    "title": "Brotato",
    "developer": "Blobfish",
    "publisher": "Blobfish",
    "releaseDate": "23 Jun, 2023",
    "price": 250,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Casual",
      "Indie"
    ],
    "description": "Brotato is a top-down arena shooter roguelite where you play a potato wielding up to 6 weapons at a time to fight off hordes of aliens. Choose from a variety of traits and items to create unique builds and survive until help arrives.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_79be0eea0299da76bc50cef160fb669509f74e0b.1920x1080.jpg?t=1771429106",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_61ad3d242282311207828c1a7d87c1c9d7b4d8bf.1920x1080.jpg?t=1771429106",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_9d7d1532397e65d39a3b63e3b25bd3adf7a81b37.1920x1080.jpg?t=1771429106"
    ],
    "featured": false
  },
  {
    "id": "632360",
    "title": "Risk of Rain 2",
    "developer": "Hopoo Games",
    "publisher": "Gearbox Publishing",
    "releaseDate": "11 Aug, 2020",
    "price": 719,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie"
    ],
    "description": "Escape a chaotic alien planet by fighting through hordes of frenzied monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_2bb49071317f7b241a527cf6e7aabd2cb6af055b.1920x1080.jpg?t=1763490165",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_a3f57f281813cb51cb5d919701470acb962ff297.1920x1080.jpg?t=1763490165",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_328d6fcb223f848c2a1047bb86702c4175d92317.1920x1080.jpg?t=1763490165"
    ],
    "featured": false
  },
  {
    "id": "1217060",
    "title": "Gunfire Reborn",
    "developer": "Duoyi Games",
    "publisher": "Duoyi Games",
    "releaseDate": "17 Nov, 2021",
    "price": 869,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "description": "Gunfire Reborn is a level-based adventure game featuring FPS, Roguelite and RPG. Players can control heroes with various abilities to experience diverse Build gameplay, use various weapons to explore procedurally-generated levels. You can play the game alone, or join 4-player coop.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/ss_766c04e48e2c7b3d86406368c8c4b4b9cfddedcc.1920x1080.jpg?t=1772604809",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/ss_b489e3c646b594f7c1a066a4657cad1006468050.1920x1080.jpg?t=1772604809",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/ss_f2018a6b4525a0142e4a50776f7f06186881c185.1920x1080.jpg?t=1772604809"
    ],
    "featured": false
  },
  {
    "id": "692890",
    "title": "Roboquest",
    "developer": "RyseUp Studios",
    "publisher": "RyseUp Studios",
    "releaseDate": "7 Nov, 2023",
    "price": 880,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/692890/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/692890/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie"
    ],
    "description": "Roboquest is a fast FPS Roguelite in a scorched futureworld. You're a rebooted Guardian, ready to kick some metal ass! Fight with your buddy or by yourself and annihilate hordes of deadly bots in ever-changing environments.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/692890/ss_0b34034d8b95672f3b7a61a7e96b1050a750539a.1920x1080.jpg?t=1763992816",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/692890/ss_b32ae626ffecd9fe70f7ea4ddbf34485662bb71d.1920x1080.jpg?t=1763992816",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/692890/ss_a41a7c356ef81024a61e89ed877b755a2dc6757a.1920x1080.jpg?t=1763992816"
    ],
    "featured": false
  },
  {
    "id": "548430",
    "title": "Deep Rock Galactic",
    "developer": "Ghost Ship Games",
    "publisher": "Coffee Stain Publishing",
    "releaseDate": "13 May, 2020",
    "price": 939,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/capsule_616x353.jpg",
    "tags": [
      "Action"
    ],
    "description": "Deep Rock Galactic is a 1-4 player co-op FPS featuring dwarven space miners, procedurally-generated destructible environments, and endless hordes of alien monsters. Explore cave systems, mine for minerals, and work together to survive!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/49a57d16c55b74a6f835c590421d299d417af4f8/ss_49a57d16c55b74a6f835c590421d299d417af4f8.1920x1080.jpg?t=1774642035",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/5ffa803484da48da16db9006d7f4313db8999c2a/ss_5ffa803484da48da16db9006d7f4313db8999c2a.1920x1080.jpg?t=1774642035",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/cf8c347fac940f99a9a256730aca3cb647cb563f/ss_cf8c347fac940f99a9a256730aca3cb647cb563f.1920x1080.jpg?t=1774642035"
    ],
    "featured": false
  },
  {
    "id": "552500",
    "title": "Warhammer: Vermintide 2",
    "developer": "Fatshark",
    "publisher": "Fatshark",
    "releaseDate": "8 Mar, 2018",
    "price": 1300,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Indie",
      "RPG"
    ],
    "description": "The critically acclaimed Vermintide 2 is a visually stunning and groundbreaking melee action game pushing the boundaries of the first person co-op genre. Join the fight now!",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/ss_6b459fcf2c685275b0963d056113a23b538d1bdf.1920x1080.jpg?t=1764008361",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/ss_39dc495d3db6f8734550447ab3f22a1ef032aba1.1920x1080.jpg?t=1764008361",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/ss_82f6e4be1711f1fcd5e6c15687df03a9d96d8f32.1920x1080.jpg?t=1764008361"
    ],
    "featured": false
  },
  {
    "id": "1361210",
    "title": "Warhammer 40,000: Darktide",
    "developer": "Fatshark",
    "publisher": "Fatshark",
    "releaseDate": "30 Nov, 2022",
    "price": 2199,
    "discountPercent": 0,
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1361210/header.jpg",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1361210/capsule_616x353.jpg",
    "tags": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "description": "Take back the city of Tertium from hordes of bloodthirsty foes in this intense and brutal action shooter. Warhammer 40,000: Darktide is the new co-op focused experience from the award-winning team behind the Vermintide series. As Tertium falls, Rejects Will Rise.",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1361210/ss_e5bfe858d549cb4c488f9f755587496deca96082.1920x1080.jpg?t=1774627876",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1361210/ss_623eb17524442b7a908511fb46fef3366609dbd3.1920x1080.jpg?t=1774627876",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1361210/ss_bb7caeef3cb174a55f6ba87b2fbeb9eb53db2dc9.1920x1080.jpg?t=1774627876"
    ],
    "featured": false
  }
];

export const formatINR = (amount: number) => {
  if (amount === 0) return 'Free';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateDiscountedPrice = (price: number, discountPercent: number) => {
  if (discountPercent === 0) return price;
  return Math.round(price * (1 - discountPercent / 100));
};
