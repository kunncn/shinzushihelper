const products = [
  // Nigiri Sushi (Page 2, 11)
  {
    code: "S01",
    name: "Maguro Nigiri",
    price: 2.5,
    detail: "Tuna sushi",
  },
  {
    code: "S02",
    name: "Salmon Nigiri",
    price: 2.5,
    detail: "Salmon sushi",
  },
  {
    code: "S03",
    name: "Hamachi Nigiri",
    price: 4,
    detail: "Amberjack sushi",
  },
  {
    code: "S04",
    name: "Salmon Belly Nigiri",
    price: 3.5,
    detail: "Salmon belly sushi",
  },
  {
    code: "S05",
    name: "Shiro Maguro Nigiri",
    price: 2,
    detail: "White tuna sushi",
  },
  {
    code: "S06",
    name: "Shime Saba Nigiri",
    price: 2,
    detail: "Vinegared mackerel sushi",
  },
  {
    code: "S07",
    name: "Nama Hotate Nigiri",
    price: 8,
    detail: "Raw scallop sushi",
  },
  {
    code: "S08",
    name: "Tako Nigiri",
    price: 2.5,
    detail: "Boiled octopus",
  },
  {
    code: "S09",
    name: "Kani Nigiri",
    price: 2,
    detail: "Crab stick nigiri",
  },
  {
    code: "S10",
    name: "Mongo Ika Nigiri",
    price: 2.5,
    detail: "Squid sushi",
  },
  {
    code: "S11",
    name: "Shime Kohada Nigiri",
    price: 2,
    detail: "Vinegared gizzard shad sushi",
  },
  {
    code: "S12",
    name: "Hamachi Hara Nigiri",
    price: 6.5,
    detail: "Amberjack belly nigiri",
  },
  {
    code: "S13",
    name: "Torched eel w/ sweet sauce",
    price: 3.5,
    detail: "notsure",
  },
  {
    code: "S14",
    name: "Torched eel w/ mentaiko",
    price: 3.5,
    detail: "notsure",
  },
  {
    code: "S15",
    name: "Torched eel w/ signature beef sauce",
    price: 3.5,
    detail: "notsure",
  },
  {
    code: "S16",
    name: "Ebi Tempura Nigiri",
    price: 4.5,
    detail: "Fried shrimp sushi",
  },
  {
    code: "S17",
    name: "Tamago Nigiri",
    price: 2,
    detail: "Sweet omelette sushi",
  },
  {
    code: "S18",
    name: "Kuruma Ebi Nigiri",
    price: 2.8,
    detail: "Sweet prawn sushi",
  },
  {
    code: "S19",
    name: "Botan Ebi Nigiri",
    price: 18,
    detail: "Sweet prawn sushi",
  },
  {
    code: "S20",
    name: "Amaebi Nigiri",
    price: 10,
    detail: "Sweet shrimp sushi",
  },
  {
    code: "S21",
    name: "Salmon Hana Maki",
    price: 10,
    detail: "Salmon sushi roll",
  },
  {
    code: "S22",
    name: "Ikura Hana Maki",
    price: 13,
    detail: "Salmon roe",
  },
  {
    code: "S23",
    name: "Avocado Nigiri",
    price: 2,
    detail: "notsure",
  },
  // Nigiri Sushi (Page 2, 11)

  // Aburi Sushi (Page 3, 12)
  {
    code: "S30",
    name: "Torched Tuna in soy-garlic sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S31",
    name: "Torched Tuna in tarta sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S32",
    name: "Torched white tuna in soy-garlic sauce",
    price: 2,
    detail: null,
  },
  {
    code: "S33",
    name: "Torched white tuna in sweet & spicy sauce",
    price: 2,
    detail: null,
  },
  {
    code: "S34",
    name: "Torched white tuna w/ beef sauce",
    price: 2,
    detail: null,
  },
  {
    code: "S35",
    name: "Torched white tuna in teriyaki sauce",
    price: 2,
    detail: null,
  },
  {
    code: "S36",
    name: "Torched salmon in sweet & spicy sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S37",
    name: "Torched salmon in SHIN spicy sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S38",
    name: "Torched salmon in honeylemon sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S39",
    name: "Torched salmon w/ mayonnaise",
    price: 2.5,
    detail: null,
  },
  {
    code: "S40",
    name: "Torched salmon w/ black pepper",
    price: 2.5,
    detail: null,
  },
  {
    code: "S41",
    name: "Torched salmon w/ mentaiko",
    price: 2.5,
    detail: null,
  },
  {
    code: "S42",
    name: "Torched squid w/ house sweet sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S43",
    name: "Torched scallop w/ house sweet sauce",
    price: 8,
    detail: null,
  },
  {
    code: "S44",
    name: "Torched scallop w/ signature beef sauce",
    price: 8,
    detail: null,
  },
  {
    code: "S45",
    name: "Torched scallop w/ mentaiko",
    price: 8,
    detail: null,
  },
  {
    code: "S46",
    name: "Torched squid w/ beef sauce",
    price: 2.5,
    detail: null,
  },
  {
    code: "S47",
    name: "Tamagoyaki Mentai Nigiri",
    price: 2.5,
    detail: null,
  },
  {
    code: "S48",
    name: "Torched tiger prawn w/ SHIN spicy sauce",
    price: 2.8,
    detail: null,
  },
  {
    code: "S49",
    name: "Torched tiger prawn w/ mentaiko",
    price: 2.8,
    detail: null,
  },
  // Aburi Sushi (Page 3, 12)

  // Gunkan & Inari (Page 13)
  {
    code: "S60",
    name: "Salmon Salad Inari",
    price: 3,
    detail: "Sweet beancurd skin topped with salmon mayonnaise",
  },
  {
    code: "S61",
    name: "Tuna Salad Inari",
    price: 3,
    detail: "Sweet beancurd skin with tuna mayonnaise",
  },
  {
    code: "S62",
    name: "Lobster Salad Inari",
    price: 4.5,
    detail: "Sweet beancurd skin with lobster salad",
  },
  {
    code: "S63",
    name: "Inari Zushi",
    price: 2.5,
    detail: "Sweet beancurd",
  },
  {
    code: "S64",
    name: "Ebiko Gunkan",
    price: 2,
    detail: "Shrimp roe gunkan",
  },
  {
    code: "S65",
    name: "Tobiko Gunkan",
    price: 2.5,
    detail: "Flying fish roe gunkan",
  },
  {
    code: "S66",
    name: "Tuna Salad Gunkan",
    price: 1.5,
    detail: "Tuna mayonnaise gunkan",
  },
  {
    code: "S67",
    name: "Spicy Salmon Gunkan",
    price: 1.5,
    detail: "Minced spicy salmon gunkan",
  },
  {
    code: "S68",
    name: "Lobster Salad Gunkan",
    price: 3.5,
    detail: "Lobster salad gunkan",
  },
  {
    code: "S69",
    name: "Ikura Gunkan",
    price: 7.5,
    detail: "Salmon roe gunkan",
  },
  {
    code: "S70",
    name: "Maguro Negi Gunkan",
    price: 2,
    detail: "Minced raw tuna with spring onion gunkan",
  },
  {
    code: "S71",
    name: "Wakame Gunkan",
    price: 1.5,
    detail: "Seasoned seaweed gunkan",
  },
  {
    code: "S72",
    name: "Shake Negi Gunkan",
    price: 2,
    detail: "Minced raw salmon with spring onion gunkan",
  },
  {
    code: "S73",
    name: "Kurage Gunkan",
    price: 2,
    detail: "Seasoned jelly fish gunkan",
  },
  {
    code: "S74",
    name: "Idako Gunkan",
    price: 2,
    detail: "Seasoned baby octopus gunkan",
  },

  // Gunkan & Inari (Page 13)

  // Hosomaki (Thin Roll) (Page 14)
  {
    name: "Shake Maki (Page 14)",
    code: "S810",
    price: 6,
    detail: "Salmon thin roll",
  },
  { name: "Tekka Maki", code: "S811", price: 6, detail: "Tuna thin roll" },
  { name: "Kappa Maki", code: "S812", price: 4, detail: "Cucumber thin roll" },
  { name: "Kani Maki", code: "S813", price: 5, detail: "Crab stick thin roll" },
  {
    name: "Tamago Maki (Page 14)",
    code: "S814",
    price: 5,
    detail: "Sweet omelette thin roll",
  },
  {
    name: "Avocado Maki (Page 14)",
    code: "S815",
    price: 6,
    detail: "Avocado thin roll",
  },
  {
    name: "Tuna Mayo Maki",
    code: "S816",
    price: 5,
    detail: "Tuna salad thin roll",
  },
  {
    name: "Takuan Maki",
    code: "S817",
    price: 5,
    detail: "Pickled radish roll",
  },
  { name: "Una Maki", code: "S818", price: 6, detail: "Eel thin roll" },

  // Ura Maki (Inside-Out Roll) (Page 15, 16, 17, 18)
  {
    name: "Golden Dragon Maki",
    code: "S910",
    price: 10,
    detail: "Shrimp cutlet, mango",
  },
  {
    name: "Mentai Dragon Maki",
    code: "S911",
    price: 11,
    detail: "Shrimp cutlet, avo & cod fish roe",
  },
  {
    name: "Dragon Maki",
    code: "S912",
    price: 10,
    detail:
      "Shrimp cutlet, cucumber, lettuce, topped avocado, mayonnaise & ebiko",
  },
  {
    name: "Dark Dragon Maki",
    code: "S913",
    price: 11,
    detail: "Shrimp cutlet, eel & cheese",
  },
  {
    name: "Spicy Dragon Maki",
    code: "S914",
    price: 11,
    detail:
      "Shrimp cutlet, cucumber, lettuce, topped floss & mentai (cod fish roe) & spicy sauce",
  },
  {
    name: "Mango Floss Maki",
    code: "S915",
    price: 9,
    detail: "Crab stick, sweet omelette, cucumber, topped mango & floss",
  },
  {
    name: "Torched Eel w/ Mentaiko Maki (Page 16)",
    code: "S916",
    price: 10.5,
    detail: "Crunchy roll topped eel & cod fish roe",
  },
  {
    name: "Torched Eel w/ Sweet Sauce Maki (Page 16)",
    code: "S917",
    price: 10.5,
    detail: "Crunchy roll topped eel & sweet sauce",
  },
  {
    name: "Torched Spider Maki (Page 16)",
    code: "S918",
    price: 10.5,
    detail: "Spicy soft shell crab roll topped ebiko & spicy sauce",
  },
  {
    name: "Torched Eel w/ Cheese Maki (Page 16)",
    code: "S919",
    price: 10.5,
    detail: "Crunchy roll topped eel, cheese & shrimp roe",
  },
  {
    name: "Soft Shell Crab Maki (Page 16)",
    code: "S100",
    price: 10.5,
    detail:
      "Spicy soft shell crab & cucumber crunchy roll topped with shrimp roe",
  },
  {
    name: "Volcano Spider Maki",
    code: "S101",
    price: 10.5,
    detail: "Soft shell crab, cucumber roll topped fried leek & avocado",
  },
  {
    name: "Torched Salmon Honeylemon Sauce (Page 17)",
    code: "S102",
    price: 9,
    detail: "Roasted salmon w/ honeylemon sauce",
  },
  {
    name: "Torched Salmon Cheese (Page 17)",
    code: "S103",
    price: 9,
    detail: "Roasted salmon w/ cheese",
  },
  {
    name: "Torched Salmon Mentaiko (Page 17)",
    code: "S104",
    price: 11,
    detail: "Roasted salmon w/ cod fish & salmon roe",
  },
  {
    name: "Mango Salmon Maki",
    code: "S105",
    price: 9,
    detail: "Roasted salmon & mango topped sliced mango & sweet spicy sauce",
  },
  {
    name: "Torched Salmon Spicy Sauce (Page 17)",
    code: "S106",
    price: 9,
    detail: "Roasted salmon w/ shin spicy sauce",
  },
  {
    name: "Ikura Salmon Maki (Page 17)",
    code: "S107",
    price: 10,
    detail: "Crab stick, cucumber, sweet omelette, topped salmon & salmon roe",
  },
  {
    name: "Shin Volcano Maki (Page 18)",
    code: "S108",
    price: 9,
    detail: "Crab stick, cucumber, sweet omelette, baked cheese",
  },
  {
    name: "Rainbow Maki",
    code: "S109",
    price: 9,
    detail:
      "Crab stick, cucumber, topped white tuna, salmon, mango, avo & sweet & spicy sauce",
  },
  {
    name: "Spicy Floss Maki",
    code: "S110",
    price: 9,
    detail: "Crunchy roll topped floss & spicy sauce",
  },
  {
    name: "California Maki (Page 18)",
    code: "S111",
    price: 9,
    detail: "Crab stick, sweet omelette, cucumber & ebiko",
  },
  {
    name: "Ham & Cheese Maki",
    code: "S112",
    price: 9,
    detail:
      "Crunchy roll with ham & cheese, topped crunchy roll (Not available)",
  },

  // Hand-Rolled (Temaki) (Page 7)
  {
    code: "S130",
    name: "Salmon Temaki",
    price: 6,
    detail: "Fresh salmon",
  },
  {
    code: "S131",
    name: "Salmon Avo Temaki",
    price: 6.5,
    detail: "Fresh salmon & avocado",
  },
  {
    code: "S132",
    name: "Ikura Temaki",
    price: 8,
    detail: "Salmon roe",
  },
  {
    code: "S133",
    name: "Soft Shell Crab Temaki",
    price: 7,
    detail: "Soft shell crab",
  },
  {
    code: "S134",
    name: "Ebi Tempura Temaki",
    price: 6,
    detail: "Fried shrimp",
  },
  {
    code: "S135",
    name: "Salmon Skin Temaki",
    price: 5,
    detail: "Crispy salmon skin",
  },
  {
    code: "S136",
    name: "Maguro Temaki",
    price: 6,
    detail: "Fresh tuna",
  },
  {
    code: "S137",
    name: "Maguro Avo Temaki",
    price: 7,
    detail: "Fresh tuna & avocado",
  },
  {
    code: "S138",
    name: "Unagi Temaki",
    price: 6,
    detail: "Roast eel",
  },
  {
    code: "S139",
    name: "California Temaki",
    price: 5.5,
    detail: "Crab stick, avocado, cucumber, shrimp roe",
  },
  {
    code: "S140",
    name: "Tobiko Temaki",
    price: 6,
    detail: "Flying fish roe",
  },
  {
    code: "S141",
    name: "Ebiko Temaki",
    price: 4,
    detail: "Shrimp roe",
  },
  // Hand-Rolled (Temaki) (Page 7)

  // Sashimi (Page 8)
  {
    code: "SS20",
    name: "Haru Sashimi",
    price: 34,
    detail: "3* Tuna, 3* Salmon & 3* White Tuna",
  },
  {
    code: "SS21",
    name: "Natsu Sashimi",
    price: 46,
    detail: "2* Tuna, 2* White tuna, 2* Salmon, 2* Salmon Belly & 2* Scallop",
  },
  {
    code: "SS22",
    name: "Santen Salmon Sashimi",
    price: 48,
    detail: "5* Salmon, 3* Salmon Belly & Ikura sashimi",
  },
  {
    code: "SS23",
    name: "Aki Sashimi",
    price: 70,
    detail:
      "2* Tuna, 2* White tuna, 2* Salmon belly, 2* Salmon, 2* Scallop, 2* Vinegared mackerel & 2* Sweet prawn",
  },
  {
    code: "SS24",
    name: "Fuyu Sashimi",
    price: 110,
    detail:
      "5* Tuna, 5* White tuna, 5* Salmon belly, 3* Salmon, 2* Scallop, 2* Sweet prawn",
  },
  // Sashimi (Page 8)

  // Sashimi Moriawase (Sashimi Platter) (Page 9, 10)
  {
    name: "Santen Salmon Sashimi",
    code: "S24",
    price: 48,
    detail: "5 Salmon, 3 Salmon Belly & Ikura sashimi",
  },

  // Sushi Moriawase (Sushi Platter) (Page 19, 20)
  {
    name: "Aburi Moriawase Sushi (Platter)",
    code: "S120",
    price: 13,
    detail: "Mixed 3 torched sushi, 3 gunkan & eel",
  },
  {
    name: "Salmon Haru Hana (Platter)",
    code: "S121",
    price: 14,
    detail: "Torched salmon w/ honey lemon & salmon sushi roll",
  },
  {
    name: "Kuruma Santen Nigiri (Platter)",
    code: "S122",
    price: 7.8,
    detail:
      "Mixed 3 kind tiger prawn sushi, topped cod fish roe, spicy sauce, mango",
  },
  {
    name: "Ichii Nigiri Zushi",
    code: "S123",
    price: 7,
    detail: "Mixed 3 torched tuna, white tuna & eel topped special beef sauce",
  },
  {
    name: "Aki Nigiri (Platter)",
    code: "S124",
    price: 11,
    detail: "Tuna, white tuna, salmon, sweet omelette & snow crab",
  },
  {
    name: "Tokubetsu Sushi (Platter)",
    code: "S125",
    price: 12.8,
    detail: "Mixed 9 torched sushi nigiri",
  },
  {
    name: "Salmon Natsu Sushi (Platter)",
    code: "S126",
    price: 25,
    detail: "3 salmon sashimi, 3 salmon belly nigiri & salmon thin roll",
  },
  {
    name: "Shin Mentai Sushi (Platter)",
    code: "S127",
    price: 15.5,
    detail: "Torched 2 salmon, 2 sweet omelette, 2 eel with mentaiko",
  },
  {
    name: "Shin Roasted Salmon (Platter)",
    code: "S128",
    price: 12,
    detail: "Mixed 3 torched salmon",
  },
  {
    name: "Take Nigiri (Platter)",
    code: "S129",
    price: 25,
    detail:
      "Tuna, white tuna, salmon, salmon belly, hotate, tako, ika, tiger prawn & omelette",
  },
  {
    name: "Salmon Aburi Hana Sushi (Platter)",
    code: "S130",
    price: 12,
    detail: "Torched salmon nigiri & salmon roll",
  },
  {
    name: "Sushi Moriawase (Platter)",
    code: "S131",
    price: 14.5,
    detail: "5 fried maki sushi & 1 tako gunkan & 1 tobiko gunkan",
  },

  // Zensai (Appetizer) (Page 5)
  {
    code: "K02",
    name: "Tamago Mentaiko",
    price: 10,
    detail: "Sweet omelette topped mentai sauce",
  },
  {
    code: "K01",
    name: "Atsuyaki Tamago",
    price: 9,
    detail: "Homemade thick omelette egg",
  },
  {
    code: "K03",
    name: "Chuka Idako",
    price: 8,
    detail: "Simmered baby octopus",
  },
  {
    code: "K04",
    name: "Chuka Kurage",
    price: 8,
    detail: "Simmered jelly fish",
  },
  {
    code: "K05",
    name: "Chuka Wakame",
    price: 7,
    detail: "Simmered seaweed",
  },
  {
    code: "K06",
    name: "Chawan Mushi",
    price: 6,
    detail:
      "Steamed egg custard - crab stick, chicken, ginkgo nut, shrimp, mushroom",
  },
  {
    code: "K07",
    name: "Edamame",
    price: 6,
    detail: "Japanese green beans",
  },
  {
    code: "K08",
    name: "Agedashi Tofu",
    price: 6,
    detail: "Crispy deep-fried tofu in tsuyu sauce",
  },
  {
    code: "K09",
    name: "Tako Su",
    price: 7,
    detail: "Boiled octopus with soy sauce-vinegared",
  },
  {
    code: "K10",
    name: "Hanjuku Tamago",
    price: 3,
    detail: "Soft-boiled egg",
  },
  {
    code: "K11",
    name: "Ebiko Sashimi",
    price: 10,
    detail: "Shrimp roe",
  },
  {
    code: "K12",
    name: "Tobiko Sashimi",
    price: 18,
    detail: "Flying fish roe",
  },
  {
    code: "K13",
    name: "Ikura Sashimi",
    price: 30,
    detail: "Salmon roe with Japanese soy sauce",
  },

  // Zensai (Appetizer) (Page 5)

  // Salad (Sarada) (Page 6)
  {
    code: "K19",
    name: "Kaisen Sarada",
    price: 20,
    detail: "Assorted seafood, shrimp roe & fresh vegetables",
  },
  {
    code: "K20",
    name: "Salmon Sarada",
    price: 19,
    detail: "7 sliced salmon & fresh vegetables",
  },
  {
    code: "K21",
    name: "Salmon Skin Sarada",
    price: 16,
    detail: "Deep-fried salmon skin & fresh vegetables",
  },
  {
    code: "K22",
    name: "Soft Shell Crab Sarada",
    price: 19,
    detail: "Deep-fried soft shell crab, salmon skin & fresh vegetables",
  },
  {
    code: "K23",
    name: "Avocado Sarada",
    price: 17,
    detail: "notsure",
  },
  {
    code: "K24",
    name: "Tuna Avocado Sarada",
    price: 19,
    detail: "Tuna, avocado & fresh vegetables",
  },
  // Salad (Sarada) (Page 6)

  // Age Mono (Fried Dishes) (Page 21, 22)
  {
    name: "Yasai Tempura",
    code: "KA01",
    price: 16,
    detail: "Battered assorted vegetable",
  },
  {
    name: "Tempura Moriawase",
    code: "KA03",
    price: 8,
    detail: "Battered mixed shrimp & vegetable",
  },
  {
    name: "Ebi Tempura (Page 21)",
    code: "KA02",
    price: 19,
    detail: "Battered shrimp",
  },
  {
    name: "Salmon Skin Age",
    code: "KA04",
    price: 14,
    detail: "Crispy salmon skin",
  },
  {
    name: "Soft Shell Crab Karaage",
    code: "KA05",
    price: 22,
    detail:
      "Deep-fried marinated soft shell crab served with homemade spicy sauce",
  },
  {
    name: "Age Ebi Gyoza (Page 21)",
    code: "KA06",
    price: 9,
    detail: "Fried marinated minced shrimp dumpling w/ sweet & spicy sauce",
  },
  {
    name: "Tori Nanban",
    code: "KA07",
    price: 15,
    detail: "Fried chicken cutlet served with homemade naban sauce",
  },
  {
    name: "Tori Karaage",
    code: "KA09",
    price: 14,
    detail: "Fried marinated chicken",
  },
  { name: "Ika Hanasaki", code: "KA08", price: 14, detail: "Squid tempura" },
  {
    name: "Tori Katsu",
    code: "KA10",
    price: 15,
    detail: "Chicken cutlet served with tonkatsu sauce",
  },
  { name: "Ebi Furai", code: "KA11", price: 17, detail: "Fried shrimp" },

  // Yaki Mono (Grilled Dishes) (Page 23, 24, 25)
  {
    name: "Ika Maruyaki",
    code: "KY01",
    price: 24,
    detail: "Grilled squid with teriyaki sauce",
  },
  {
    name: "Gyu Tataki Steak",
    code: "KY03",
    price: 20,
    detail: "Iron plate grilled beef steak",
  },
  {
    name: "Shin Tokubetsu Steak",
    code: "KY02",
    price: 27,
    detail:
      "Pan-fried Australian sirloin beef steak in Shin style toban-yaki sauce",
  },
  {
    name: "Salmon - Tare / Shio",
    code: "KY05",
    price: 17,
    detail: "Grilled salmon (120g) with homemade sakana sauce or salt",
  },
  {
    name: "Gindara - Tare / Shio",
    code: "KY04",
    price: 33,
    detail: "Grilled cod fish (100g) with homemade sakana sauce or salt",
  },
  {
    name: "Hamachi Kama - Tare / Shio",
    code: "KY06",
    price: 38,
    detail: "Grilled amberjack collar with homemade sakana sauce or salt",
  },
  {
    name: "Salmon Mentaiyaki (Page 24)",
    code: "KY07",
    price: 19.5,
    detail: "Grilled salmon (120g) topped cod fish roe",
  },
  { name: "Shishamo", code: "KY08", price: 9, detail: "Grilled willow fish" },
  {
    name: "Saba - Tare / Shio",
    code: "KY09",
    price: 16,
    detail: "Grilled mackerel with homemade sakana sauce or salt",
  },
  {
    name: "Shake Toro [Tare / Shio]",
    code: "KY10",
    price: 14,
    detail: "Grilled salmon fin",
  },
  {
    name: "Unagi Kabayaki",
    code: "KY11",
    price: 30,
    detail: "Grilled eel (120g) with eel bone sauce",
  },
  {
    name: "Tori Teriyaki (Grilled)",
    code: "KY12",
    price: 15,
    detail: "Grilled chicken boneless with teriyaki sauce",
  },
  {
    name: "Shake Kabuto [Tare / Shio]",
    code: "KY13",
    price: 19,
    detail: "Grilled salmon head",
  },
  {
    name: "Salmon Teppanyaki (Page 25)",
    code: "KN01",
    price: 22,
    detail: "Pan-fried salmon (120g) & large slice butter sauce",
  },
  {
    name: "Kinoko Batayaki",
    code: "KN02",
    price: 15,
    detail: "Baked assorted mushroom & scallop with butter",
  },
  {
    name: "Salmon Hana Yuan-Yaki (Page 25)",
    code: "KN03",
    price: 17,
    detail: "Pan-fried salmon belly with lemon soy sauce",
  },
  {
    name: "Yaki Gyoza",
    code: "KN04",
    price: 10,
    detail: "Pan-fried shrimp dumpling w/ ponzu sauce",
  },
  {
    name: "Yasai Itame",
    code: "KN05",
    price: 9,
    detail: "Stir-fry assorted vegetables",
  },
  {
    name: "Saikoro Steak",
    code: "KN06",
    price: 27,
    detail: "Diced beef steak with homemade butter sauce",
  },
  {
    name: "Enoki Batayaki",
    code: "KN07",
    price: 13,
    detail: "Stir-fry enoki with butter sauce",
  },
  {
    name: "Torched Salmon Mentaiko (Page 4)",
    code: "KY02",
    price: null,
    detail: null,
  }, // Price is 98 from image, but unclear if it's RM
  {
    name: "Torched Spider Maki (Page 4)",
    code: "KN03",
    price: 10.5,
    detail: null,
  },
  {
    name: "Salmon Hana Yuan-Yaki (Page 4)",
    code: "KN01",
    price: 17,
    detail: null,
  },

  // Rice & Soup (Gohan & Shiru) (Page 26)
  {
    name: "Chawan Mushi Set (Page 26)",
    code: "NR01",
    price: 9,
    detail: "Savory steamed egg custard, rice, miso soup & fruit",
  },
  {
    name: "Shake Chahan",
    code: "NR02",
    price: 7,
    detail: "Fried rice with minced salmon",
  },
  {
    name: "Kani Chahan",
    code: "NR03",
    price: 8,
    detail: "Fried rice with snow crab",
  },
  {
    name: "Niniku Chahan",
    code: "NR04",
    price: 6,
    detail: "Japanese garlic fried rice",
  },
  { name: "Gohan", code: "NR05", price: 3, detail: "Japanese steamed rice" },
  {
    name: "Miso Shiru",
    code: "NR06",
    price: 3,
    detail: "MISO soup contained seaweed, tofu & spring onion",
  },
  {
    name: "Nameko Miso Shiru",
    code: "NR07",
    price: 5,
    detail: "MISO soup with mushroom",
  },
  {
    name: "Dobin Mushi",
    code: "NR08",
    price: 10,
    detail: "Tea pot soup w/ seafood, chicken & mushroom",
  },
  {
    name: "Tonjiru",
    code: "NR09",
    price: 16,
    detail: "Pork & mixed vegetables miso soup",
  },
  {
    name: "Ishikari Nabe",
    code: "NR10",
    price: 20,
    detail: "Salmon fish head & assorted vegetables in miso soup hot pot",
  },
  {
    name: "Yasai Tofu Nabe",
    code: "NR11",
    price: 16,
    detail: "Tofu, mushroom & assorted vegetables hot pot",
  },

  // Donburi (Page 27)
  {
    name: "Shake Don (Page 27)",
    code: "DN01",
    price: 22,
    detail: "Fresh salmon on sushi rice",
  },
  {
    name: "Tekka Don",
    code: "DN02",
    price: 22,
    detail: "Fresh tuna on sushi rice",
  },
  {
    name: "Bara Chirashi Don",
    code: "DN03",
    price: 22,
    detail: "Fresh cube seafood on sushi rice",
  },
  {
    name: "Shin Chirashi Don",
    code: "DN04",
    price: 27,
    detail: "Chef's selection seafood of the day on sushi rice",
  },
  {
    name: "Aburi Kaisen Don",
    code: "DN05",
    price: 19,
    detail: "Torched seafood on sushi rice",
  },
  {
    name: "Aburi Salmon Avo Don",
    code: "DN06",
    price: 22,
    detail: "Torched salmon with avocado & sliced avocado on sushi rice",
  },
  {
    name: "Tama Mentaiyaki Don",
    code: "DN07",
    price: 13,
    detail: "Japanese sweet omelette topped cod fish roe",
  },
  { name: "Una Don", code: "DN08", price: 33, detail: "Grilled eel on rice" },
  {
    name: "Katsu Don",
    code: "DN09",
    price: 13,
    detail: "Chicken cutlet & egg on rice",
  },
  {
    name: "Katsu Curry Rice",
    code: "DN10",
    price: 17,
    detail: "Chicken cutlet with Japanese curry, on rice",
  },
  {
    name: "Tori Fukaidou Don",
    code: "DN11",
    price: 13,
    detail: "Fried chicken cutlet with spicy sweet sauce on rice",
  },
  {
    name: "Tori Teriyaki Don (Donburi)",
    code: "DN12",
    price: 13,
    detail: "Grilled chicken with teriyaki sauce on rice",
  },
  {
    name: "Tendon",
    code: "DN13",
    price: 13,
    detail: "Assorted tempura on rice",
  },
  {
    name: "Buta Shogayaki Don",
    code: "DN14",
    price: 13,
    detail: "Stir-fried sliced pork with ginger sauce on rice",
  },

  // Noodles (Menrui) (Page 28)
  {
    name: "Ton Teri Ramen",
    code: "ND01",
    price: 15,
    detail: "Roast chicken ramen",
  },
  {
    name: "Buta Kaku Ramen",
    code: "ND02",
    price: 16,
    detail: "Ramen w/ braised pork belly in pork soup",
  },
  { name: "Kamo Ramen", code: "ND03", price: 15, detail: "Roast duck ramen" },
  {
    name: "Buta Kimuchi Ramen",
    code: "ND04",
    price: 17,
    detail: "Braised / sliced roast pork belly in kimchi soup",
  },
  { name: "Zaru Soba", code: "ND05", price: 12, detail: "Cold buckwheat soba" },
  {
    name: "Kitsune Udon",
    code: "ND06",
    price: 12,
    detail: "Udon noodle soup with sweet beancurd",
  },
  {
    name: "Wakame Udon",
    code: "ND07",
    price: 11,
    detail: "Udon noodle soup with seaweed",
  },
  {
    name: "Nameko Udon",
    code: "ND08",
    price: 12,
    detail: "Udon noodle soup with mushroom",
  },

  // Teishoku (Set Meal) (Page 29-34)
  {
    name: "Santen Mentai Zen",
    code: "DS01",
    price: 25,
    detail: "Torched salmon, eggs & eel topped mentaiko, fried chicken set",
  },
  {
    name: "Shin Salmon Teishoku",
    code: "DS02",
    price: 29,
    detail:
      "Mini salmon on sushi rice & torched salmon sushi, steamed egg, custard set",
  },
  {
    name: "Mini Shake Don Zen",
    code: "DS03",
    price: 23,
    detail: "Mini salmon on sushi rice & torched sweet omelette set",
  },
  {
    name: "Salmon Teppan Zen",
    code: "DS04",
    price: 27.5,
    detail: "Pan-fried salmon & stir-fried assorted vegetables set",
  },
  {
    name: "Tori Teriyaki Teishoku",
    code: "DS05",
    price: 23,
    detail: "Chicken teriyaki & Japanese fried chicken cube set",
  },
  {
    name: "Buta Shogayaki Teishoku",
    code: "DS06",
    price: 23,
    detail: "Stir-fried sliced pork with ginger sauce set",
  },
  {
    name: "Shin Zushi Teishoku",
    code: "DS07",
    price: 29.5,
    detail:
      "5 torched nigiri, crunchy roll topped eel & cod fish roe, salmon mayo roll topped ebiko set",
  },
  {
    name: "Mini Bara No Tori Zen",
    code: "DS08",
    price: 23,
    detail:
      "Mini cube raw seafood on sushi rice & grilled chicken teriyaki set",
  },
  {
    name: "Rosta Sushi Maki Teishoku",
    code: "DS09",
    price: 27.5,
    detail: "2 torched nigiri sushi & 6 maki sushi",
  },
  {
    name: "Saba Shiroyaki To Tempura Teishoku",
    code: "DS10",
    price: 29,
    detail: "Grilled mackerel with salt & assorted tempura set",
  },
  {
    name: "Gyu Tataki Steak Teishoku",
    code: "DS11",
    price: 34,
    detail:
      "Pan-grilled Australia striploin beef with butter sweet sauce & tempura set",
  },
  {
    name: "Katsu Curry Teishoku",
    code: "DS12",
    price: 31,
    detail:
      "Chicken cutlet with Japanese curry, salmon salad & potato korokke set",
  },
  {
    name: "Sushi To Udon Teishoku",
    code: "DS13",
    price: 27,
    detail:
      "5pcs nigiri sushi, 3pcs salmon roll and udon noodle soup with mushroom set",
  },
  {
    name: "Rosta Sushi To Sashimi Teishoku",
    code: "DS14",
    price: 36,
    detail: "Torched seafood nigiri sushi & sashimi set",
  },
  {
    name: "Santen Salmon Teishoku",
    code: "DS15",
    price: 43,
    detail:
      "2 salmon, 2 salmon belly sashimi, 3 salmon, 3 salmon belly nigiri & salmon roe set",
  },
  {
    name: "Salmon Teriyaki Teishoku",
    code: "DS16",
    price: 25,
    detail: "Grilled salmon with teriyaki sauce set",
  },
  {
    name: "Soft Shell Crab Teishoku",
    code: "DS17",
    price: 35,
    detail:
      "Fried soft shell crab, grilled chicken teriyaki & salmon sashimi set",
  },
  {
    name: "Unagi No Sashimi Teishoku",
    code: "DS18",
    price: 39,
    detail: "Grilled eel, assorted tempura and salmon sashimi set",
  },
];

export default products;
