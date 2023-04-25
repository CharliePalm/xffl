import { Position, User, Player, Matchup, Roster, Team } from "../api/api.model";

// all generated by chat GPT

export const users: User[] = [
  {
      "id": "1",
      "firstName": "Ralph",
      "lastName": "Dunder",
      "teamName": "The Waffle Stompers",
      "email": "ralphdunder@gmail.com",
      seasonWins: 2,
      totalPoints: 90.57,
  },
  {
      "id": "2",
      "firstName": "Betty",
      "lastName": "Bloom",
      "teamName": "The Pickle Jar",
      "email": "bettybloom@gmail.com",
      seasonWins: 1,
      totalPoints: 97.97,
  },
  {
      "id": "3",
      "firstName": "Walter",
      "lastName": "Whipple",
      "teamName": "The Cereal Killers",
      "email": "walterwhipple@gmail.com",
      seasonWins: 3,
      totalPoints: 106.18,
  },
  {
      "id": "4",
      "firstName": "Gretchen",
      "lastName": "Gaffney",
      "teamName": "The Muffin Tops",
      "email": "gretchengaffney@gmail.com",
      seasonWins: 0,
      totalPoints: 37.49,
  },
  {
      "id": "5",
      "firstName": "Harold",
      "lastName": "Hammer",
      "teamName": "The Funky Monkeys",
      "email": "haroldhammer@gmail.com",
      seasonWins: 2,
      totalPoints: 137.78,
  },
  {
      "id": "6",
      "firstName": "Natalie",
      "lastName": "Nightingale",
      "teamName": "The Banana Slugs",
      "email": "natalienightingale@gmail.com",
      seasonWins: 1,
      totalPoints: 43.01,
  },
]
export const matchups: Matchup[] = [
  { user1: users[0].id, user2: users[1].id, week: 1 },
  { user1: users[2].id, user2: users[3].id, week: 1 },
  { user1: users[4].id, user2: users[5].id, week: 1 },
  { user1: users[0].id, user2: users[2].id, week: 2 },
  { user1: users[1].id, user2: users[4].id, week: 2 },
  { user1: users[3].id, user2: users[5].id, week: 2 },
  { user1: users[0].id, user2: users[4].id, week: 3 },
  { user1: users[2].id, user2: users[5].id, week: 3 },
  { user1: users[1].id, user2: users[3].id, week: 3 },
  { user1: users[0].id, user2: users[3].id, week: 4 },
  { user1: users[1].id, user2: users[5].id, week: 4 },
  { user1: users[2].id, user2: users[4].id, week: 4 },
];


export const players: Player[] = [{"firstName": "Aaron", "lastName": "Jones", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 15.2}, {"isBye": false, "totalPoints": 18.4}]}, "id": "8fb6a0ea-ee36-4431-b5a8-cdceef54c9e5", "owner": "1"}, {"firstName": "George", "lastName": "Kittle", "position": Position.TE, "history": {"games": [{"isBye": false, "totalPoints": 8.3}, {"isBye": false, "totalPoints": 14.5}]}, "id": "50b5c08c-30e4-496c-9ecb-8ad55fbc141a", "owner": "5"}, {"firstName": "Matt", "lastName": "Gay", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 8}, {"isBye": false, "totalPoints": 12}]}, "id": "298154f5-9f48-4f8c-8c0b-a39e86a32e83", "owner": null}, {"firstName": "Chicago", "lastName": "Bears", "position": Position.DST, "history": {"games": [{"isBye": false, "totalPoints": 9}, {"isBye": false, "totalPoints": 12}]}, "id": "3e7ee05a-39c2-4178-a2de-4691dc3189f2", "owner": "2"}, {"firstName": "Melvin", "lastName": "Gordon", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 11.2}, {"isBye": false, "totalPoints": 15.1}]}, "id": "aaa47f89-d59c-4c3b-a2d5-7acc3f38a6f6", "owner": "5"}, {"firstName": "Amari", "lastName": "Cooper", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 14.2}, {"isBye": false, "totalPoints": 10.9}]}, "id": "0580d769-3ca9-4301-a99a-60007d284e1f", "owner": "1"}, {"firstName": "Tom", "lastName": "Brady", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 24.8}, {"isBye": false, "totalPoints": 29.3}]}, "id": "61e92210-ddfd-4a0e-abb3-b1f577e6162f", "owner": "5"}, {"firstName": "Pittsburgh", "lastName": "Steelers", "position": Position.DST, "history": {"games": [{"isBye": false, "totalPoints": 8}, {"isBye": false, "totalPoints": 14}]}, "id": "09cec5e1-1845-4f52-b5ab-82539b26120c", "owner": null}, {"firstName": "Terry", "lastName": "McLaurin", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 22.7}, {"isBye": false, "totalPoints": 14.2}]}, "id": "eb2cbc84-214e-448f-96e9-aa421d2e84b2", "owner": "2"}, {"firstName": "Jamaal", "lastName": "Williams", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 7.3}, {"isBye": false, "totalPoints": 12.8}]}, "id": "cbe56ce4-6ed2-4382-a4d8-5cb15642ca6f", "owner": null}, {"firstName": "New", "lastName": "England", "position": Position.DST, "history": {"games": [{"isBye": false, "totalPoints": 10}, {"isBye": false, "totalPoints": 15}]}, "id": "413f16f6-526e-4861-aac0-b7c7ec238bee", "owner": "4"}, {"firstName": "Derek", "lastName": "Carr", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 18.9}, {"isBye": false, "totalPoints": 23.1}]}, "id": "757e6837-6687-4f7f-b09e-4cdb7c9081f7", "owner": "1"}, {"firstName": "Latavius", "lastName": "Murray", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 8.5}, {"isBye": false, "totalPoints": 12.4}]}, "id": "206a135c-6cad-432a-b612-3018aca635fb", "owner": "4"}, {"firstName": "Curtis", "lastName": "Samuel", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 11.2}, {"isBye": false, "totalPoints": 16.4}]}, "id": "4d14e56a-e0ee-45e0-90ae-7f4c115fe3b2", "owner": "2"}, {"firstName": "Tyler", "lastName": "Bass", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 7}, {"isBye": false, "totalPoints": 11}]}, "id": "e84f76f5-f802-4dcf-84ac-92faec43bd9f", "owner": "5"}, {"firstName": "Logan", "lastName": "Thomas", "position": Position.TE, "history": {"games": [{"isBye": false, "totalPoints": 6.7}, {"isBye": false, "totalPoints": 14.5}]}, "id": "702f88ee-b4d6-4e2a-bfee-8c5708fea249", "owner": "1"}, {"firstName": "Michael", "lastName": "Carter", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 11.1}, {"isBye": false, "totalPoints": 14.2}]}, "id": "275c68c8-7bfa-4cf6-ba7e-801bddf379e0", "owner": null}, {"firstName": "Mike", "lastName": "Davis", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 13.7}, {"isBye": false, "totalPoints": 6.1}]}, "id": "2ffc75fb-f5ef-4ed6-b716-16b344b851e4", "owner": "3"}, {"firstName": "Zach", "lastName": "Ertz", "position": Position.TE, "history": {"games": [{"isBye": false, "totalPoints": 5.4}, {"isBye": false, "totalPoints": 9.9}]}, "id": "8fe8f0b0-67b8-492e-a999-ff249e905365", "owner": "5"}, {"firstName": "Christian", "lastName": "Kirk", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 15.3}, {"isBye": false, "totalPoints": 4.8}]}, "id": "34a71291-5d68-452f-bb5c-25ee508c8d56", "owner": "4"}, {"firstName": "Tony", "lastName": "Pollard", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 14.3}, {"isBye": false, "totalPoints": 7.8}]}, "id": "0b4543f9-3519-4c63-b6d5-788f37f8cbf5", "owner": "5"}, {"firstName": "Hunter", "lastName": "Renfrow", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 8.9}, {"isBye": false, "totalPoints": 13.6}]}, "id": "a4043565-1df9-4c10-944f-8e9e1cb7d26d", "owner": "5"}, {"firstName": "Baker", "lastName": "Mayfield", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 21.1}, {"isBye": false, "totalPoints": 13.2}]}, "id": "5964b596-a689-46c9-8892-d707482ec9fe", "owner": null}, {"firstName": "Marvin", "lastName": "Jones Jr.", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 9.1}, {"isBye": false, "totalPoints": 10.7}]}, "id": "31203434-54c0-4e5e-a340-52df9132f5df", "owner": "4"}, {"firstName": "Darnell", "lastName": "Mooney", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 11.6}, {"isBye": false, "totalPoints": 8.3}]}, "id": "38531a97-c736-4832-bdba-0328adbcd6a3", "owner": "6"}, {"firstName": "Daniel", "lastName": "Jones", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 21.4}, {"isBye": false, "totalPoints": 14.3}]}, "id": "5d3df7ca-810f-4f2e-8f6f-48e9c94cc841", "owner": null}, {"firstName": "A.J.", "lastName": "Dillon", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 13.8}, {"isBye": false, "totalPoints": 9.2}]}, "id": "f22e6424-df07-41cd-8406-93a1fe82f915", "owner": null}, {"firstName": "JuJu", "lastName": "Smith-Schuster", "position": Position.WR, "history": {"games": [{"isBye": false, "totalPoints": 11.9}, {"isBye": false, "totalPoints": 14.2}]}, "id": "bbdc8626-3643-4660-9e6a-c2f12bf0bc54", "owner": "4"}, {"firstName": "Darrell", "lastName": "Henderson", "position": Position.RB, "history": {"games": [{"isBye": false, "totalPoints": 6.1}, {"isBye": false, "totalPoints": 11.7}]}, "id": "0fbd4437-510d-44ef-a777-6847b1f31829", "owner": null}, {"firstName": "Jared", "lastName": "Goff", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 16.5}, {"isBye": false, "totalPoints": 18.2}]}, "id": "c9a6025f-811f-47c8-81c5-47257332af12", "owner": "2"}, {"firstName": "Jason", "lastName": "Sanders", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 9}, {"isBye": false, "totalPoints": 7}]}, "id": "d7426f83-eec2-4041-8c01-2c8baac4a7b7", "owner": "2"}, {"firstName": "Harrison", "lastName": "Butker", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 10}, {"isBye": false, "totalPoints": 5}]}, "id": "28397050-5ee3-404a-adf7-db9a1c16ee9a", "owner": "2"}, {"firstName": "Greg", "lastName": "Zuerlein", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 11}, {"isBye": false, "totalPoints": 6}]}, "id": "598dbc70-3cf5-41a6-9bbd-3ce8f0dd454b", "owner": "5"}, {"firstName": "Younghoe", "lastName": "Koo", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 12}, {"isBye": false, "totalPoints": 9}]}, "id": "2a413b86-5a35-4c25-832d-b14ae4b321c0", "owner": "2"}, {"firstName": "Justin", "lastName": "Tucker", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 8}, {"isBye": false, "totalPoints": 7}]}, "id": "f38dca13-9ea9-44bd-8f94-ed1c3fcdd7e7", "owner": "3"}, {"firstName": "Chris", "lastName": "Boswell", "position": Position.K, "history": {"games": [{"isBye": false, "totalPoints": 7}, {"isBye": false, "totalPoints": 10}]}, "id": "36400bf2-5dca-463e-b3cc-7c9fdf5c8462", "owner": "3"}, {"firstName": "Ben", "lastName": "Roethlisberger", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 15}, {"isBye": false, "totalPoints": 20}]}, "id": "11bb6016-c4f1-46aa-87b3-836f10a5ac8c", "owner": "5"}, {"firstName": "Kirk", "lastName": "Cousins", "position": Position.QB, "history": {"games": [{"isBye": false, "totalPoints": 12}, {"isBye": false, "totalPoints": 24}]}, "id": "1a0d26f2-efcc-449a-834c-3184fec129bd", "owner": "3"}]

export const prettyPlayers: any[] = [
  {
    firstName: "Aaron",
    lastName: "Jones",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 15.2 },
        { isBye: false, totalPoints: 18.4 }
      ]
    }
  },
  {
    firstName: "George",
    lastName: "Kittle",
    position: Position.TE,
    history: {
      games: [
        { isBye: false, totalPoints: 8.3 },
        { isBye: false, totalPoints: 14.5 }
      ]
    }
  },
  {
    firstName: "Matt",
    lastName: "Gay",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 8 },
        { isBye: false, totalPoints: 12 }
      ]
    }
  },
  {
    firstName: "Chicago",
    lastName: "Bears",
    position: Position.DST,
    history: {
      games: [
        { isBye: false, totalPoints: 9 },
        { isBye: false, totalPoints: 12 }
      ]
    }
  },
  {
    firstName: "Melvin",
    lastName: "Gordon",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 11.2 },
        { isBye: false, totalPoints: 15.1 }
      ]
    }
  },
  {
    firstName: "Amari",
    lastName: "Cooper",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 14.2 },
        { isBye: false, totalPoints: 10.9 }
      ]
    }
  },
  {
    firstName: "Tom",
    lastName: "Brady",
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 24.8 },
        { isBye: false, totalPoints: 29.3 }
      ]
    }
  },
  {
    firstName: "Pittsburgh",
    lastName: "Steelers",
    position: Position.DST,
    history: {
      games: [
        { isBye: false, totalPoints: 8 },
        { isBye: false, totalPoints: 14 }
      ]
    }
  },
  {
    firstName: "Terry",
    lastName: "McLaurin",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 22.7 },
        { isBye: false, totalPoints: 14.2 }
      ]
    }
  },
  {
    firstName: "Jamaal",
    lastName: "Williams",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 7.3 },
        { isBye: false, totalPoints: 12.8 }
      ]
    }
  },
  {
    firstName: "New",
    lastName: "England",
    position: Position.DST,
    history: {
      games: [
        { isBye: false, totalPoints: 10 },
        { isBye: false, totalPoints: 15 }
      ]
    }
  },
  {
    firstName: "Derek",
    lastName: "Carr",
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 18.9 },
        { isBye: false, totalPoints: 23.1 }
      ]
    }
  },
  {
    firstName: "Latavius",
    lastName: "Murray",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 8.5 },
        { isBye: false, totalPoints: 12.4 }
      ]
    }
  },
  {
    firstName: "Curtis",
    lastName: "Samuel",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 11.2 },
        { isBye: false, totalPoints: 16.4 }
      ]
    }
  },
  {
    firstName: "Tyler",
    lastName: "Bass",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 7 },
        { isBye: false, totalPoints: 11 }
      ]
    }
  },
  {
    firstName: "Logan",
    lastName: "Thomas",
    position: Position.TE,
    history: {
      games: [
        { isBye: false, totalPoints: 6.7 },
        { isBye: false, totalPoints: 14.5 }
      ]
    }
  },
  {
    firstName: "Michael",
    lastName: "Carter",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 11.1 },
        { isBye: false, totalPoints: 14.2 }
      ]
    }
  },
  {
    firstName: "Mike",
    lastName: "Davis",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 13.7 },
        { isBye: false, totalPoints: 6.1 }
      ]
    }
  },
  {
    firstName: "Zach",
    lastName: "Ertz",
    position: Position.TE,
    history: {
      games: [
        { isBye: false, totalPoints: 5.4 },
        { isBye: false, totalPoints: 9.9 }
      ]
    }
  },
  {
    firstName: "Christian",
    lastName: "Kirk",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 15.3 },
        { isBye: false, totalPoints: 4.8 }
      ]
    }
  },
  {
    firstName: "Tony",
    lastName: "Pollard",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 14.3 },
        { isBye: false, totalPoints: 7.8 }
      ]
    }
  },
  {
    firstName: "Hunter",
    lastName: "Renfrow",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 8.9 },
        { isBye: false, totalPoints: 13.6 }
      ]
    }
  },
  {
    firstName: "Baker",
    lastName: "Mayfield",
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 21.1 },
        { isBye: false, totalPoints: 13.2 }
      ]
    }
  },
  {
    firstName: "Marvin",
    lastName: "Jones Jr.",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 9.1 },
        { isBye: false, totalPoints: 10.7 }
      ]
    }
  },
  {
    firstName: "Darnell",
    lastName: "Mooney",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 11.6 },
        { isBye: false, totalPoints: 8.3 }
      ]
    }
  },
  {
    firstName: "Daniel",
    lastName: "Jones",
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 21.4 },
        { isBye: false, totalPoints: 14.3 }
      ]
    }
  },
  {
    firstName: "A.J.",
    lastName: "Dillon",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 13.8 },
        { isBye: false, totalPoints: 9.2 }
      ]
    }
  },
  {
    firstName: "JuJu",
    lastName: "Smith-Schuster",
    position: Position.WR,
    history: {
      games: [
        { isBye: false, totalPoints: 11.9 },
        { isBye: false, totalPoints: 14.2 }
      ]
    }
  },
  {
    firstName: "Darrell",
    lastName: "Henderson",
    position: Position.RB,
    history: {
      games: [
        { isBye: false, totalPoints: 6.1 },
        { isBye: false, totalPoints: 11.7 }
      ]
    }
  },
  {
    firstName: "Jared",
    lastName: "Goff",
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 16.5 },
        { isBye: false, totalPoints: 18.2 }
      ]
    }
  },
  {
    firstName: "Jason",
    lastName: "Sanders",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 9 },
        { isBye: false, totalPoints: 7 }
      ]
    }
  },
  {
    firstName: "Harrison",
    lastName: "Butker",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 10 },
        { isBye: false, totalPoints: 5 }
      ]
    }
  },
  {
    firstName: "Greg",
    lastName: "Zuerlein",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 11 },
        { isBye: false, totalPoints: 6 }
      ]
    }
  },
  {
    firstName: "Younghoe",
    lastName: "Koo",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 12 },
        { isBye: false, totalPoints: 9 }
      ]
    }
  },
  {
    firstName: "Justin",
    lastName: "Tucker",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 8 },
        { isBye: false, totalPoints: 7 }
      ]
    }
  },
  {
    firstName: "Chris",
    lastName: "Boswell",
    position: Position.K,
    history: {
      games: [
        { isBye: false, totalPoints: 7 },
        { isBye: false, totalPoints: 10 }
      ]
    }
  },
  {
    firstName: 'Ben',
    lastName: 'Roethlisberger',
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 15 },
        { isBye: false, totalPoints: 20 },
      ]
    }
  },
  {
    firstName: 'Kirk',
    lastName: 'Cousins',
    position: Position.QB,
    history: {
      games: [
        { isBye: false, totalPoints: 12 },
        { isBye: false, totalPoints: 24 },
      ]
    }
  },
];

export const rosters: Roster[] = users.map((user) => {
  let rb1: any, wr1: any, wr2: any;
  const roster: Roster = {
    parentId: user.id,
    qb: players.find((p) => p.owner === user.id && p.position === Position.QB),
    rb1: rb1 = players.find((p) => p.owner === user.id && p.position === Position.RB),
    rb2: players.find((p) => p.owner === user.id && p.position === Position.RB && p.id !== rb1?.id),
    wr1: wr1 = players.find((p) => p.owner === user.id && p.position === Position.WR),
    wr2: wr2 = players.find((p) => p.owner === user.id && p.position === Position.WR && p.id !== wr1?.id),
    wr3: wr2 = players.find((p) => p.owner === user.id && p.position === Position.WR && p.id !== wr2?.id && p.id !== wr1?.id),
    k: players.find((p) => p.owner === user.id && p.position === Position.K),
    dst: players.find((p) => p.owner === user.id && p.position === Position.DST),
  };
  const active = Object.entries(roster);
  const bench: Team = new Array(5).fill(undefined);
  const remainingPlayers = players.filter((p) => p.owner === user.id && !active.some(([k, v]) => v?.id === p?.id));
  remainingPlayers.forEach((p, index) => {
    if (index < 5) {
      bench.push(p);
    }
  });
  return {
    ...roster,
    bench: bench,
    parentId: user.id,
  }
});