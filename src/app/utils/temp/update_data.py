import uuid
import json
import random
players = [{"firstName":"Aaron","lastName":"Jones","position":"RB","history":{"games":[{"isBye":False,"totalPoints":15.2},{"isBye":False,"totalPoints":18.4}]}},{"firstName":"George","lastName":"Kittle","position":"TE","history":{"games":[{"isBye":False,"totalPoints":8.3},{"isBye":False,"totalPoints":14.5}]}},{"firstName":"Matt","lastName":"Gay","position":"K","history":{"games":[{"isBye":False,"totalPoints":8},{"isBye":False,"totalPoints":12}]}},{"firstName":"Chicago","lastName":"Bears","position":"D/ST","history":{"games":[{"isBye":False,"totalPoints":9},{"isBye":False,"totalPoints":12}]}},{"firstName":"Melvin","lastName":"Gordon","position":"RB","history":{"games":[{"isBye":False,"totalPoints":11.2},{"isBye":False,"totalPoints":15.1}]}},{"firstName":"Amari","lastName":"Cooper","position":"WR","history":{"games":[{"isBye":False,"totalPoints":14.2},{"isBye":False,"totalPoints":10.9}]}},{"firstName":"Tom","lastName":"Brady","position":"QB","history":{"games":[{"isBye":False,"totalPoints":24.8},{"isBye":False,"totalPoints":29.3}]}},{"firstName":"Pittsburgh","lastName":"Steelers","position":"D/ST","history":{"games":[{"isBye":False,"totalPoints":8},{"isBye":False,"totalPoints":14}]}},{"firstName":"Terry","lastName":"McLaurin","position":"WR","history":{"games":[{"isBye":False,"totalPoints":22.7},{"isBye":False,"totalPoints":14.2}]}},{"firstName":"Jamaal","lastName":"Williams","position":"RB","history":{"games":[{"isBye":False,"totalPoints":7.3},{"isBye":False,"totalPoints":12.8}]}},{"firstName":"New","lastName":"England","position":"D/ST","history":{"games":[{"isBye":False,"totalPoints":10},{"isBye":False,"totalPoints":15}]}},{"firstName":"Derek","lastName":"Carr","position":"QB","history":{"games":[{"isBye":False,"totalPoints":18.9},{"isBye":False,"totalPoints":23.1}]}},{"firstName":"Latavius","lastName":"Murray","position":"RB","history":{"games":[{"isBye":False,"totalPoints":8.5},{"isBye":False,"totalPoints":12.4}]}},{"firstName":"Curtis","lastName":"Samuel","position":"WR","history":{"games":[{"isBye":False,"totalPoints":11.2},{"isBye":False,"totalPoints":16.4}]}},{"firstName":"Tyler","lastName":"Bass","position":"K","history":{"games":[{"isBye":False,"totalPoints":7},{"isBye":False,"totalPoints":11}]}},{"firstName":"Logan","lastName":"Thomas","position":"TE","history":{"games":[{"isBye":False,"totalPoints":6.7},{"isBye":False,"totalPoints":14.5}]}},{"firstName":"Michael","lastName":"Carter","position":"RB","history":{"games":[{"isBye":False,"totalPoints":11.1},{"isBye":False,"totalPoints":14.2}]}},{"firstName":"Mike","lastName":"Davis","position":"RB","history":{"games":[{"isBye":False,"totalPoints":13.7},{"isBye":False,"totalPoints":6.1}]}},{"firstName":"Zach","lastName":"Ertz","position":"TE","history":{"games":[{"isBye":False,"totalPoints":5.4},{"isBye":False,"totalPoints":9.9}]}},{"firstName":"Christian","lastName":"Kirk","position":"WR","history":{"games":[{"isBye":False,"totalPoints":15.3},{"isBye":False,"totalPoints":4.8}]}},{"firstName":"Tony","lastName":"Pollard","position":"RB","history":{"games":[{"isBye":False,"totalPoints":14.3},{"isBye":False,"totalPoints":7.8}]}},{"firstName":"Hunter","lastName":"Renfrow","position":"WR","history":{"games":[{"isBye":False,"totalPoints":8.9},{"isBye":False,"totalPoints":13.6}]}},{"firstName":"Baker","lastName":"Mayfield","position":"QB","history":{"games":[{"isBye":False,"totalPoints":21.1},{"isBye":False,"totalPoints":13.2}]}},{"firstName":"Marvin","lastName":"Jones Jr.","position":"WR","history":{"games":[{"isBye":False,"totalPoints":9.1},{"isBye":False,"totalPoints":10.7}]}},{"firstName":"Darnell","lastName":"Mooney","position":"WR","history":{"games":[{"isBye":False,"totalPoints":11.6},{"isBye":False,"totalPoints":8.3}]}},{"firstName":"Daniel","lastName":"Jones","position":"QB","history":{"games":[{"isBye":False,"totalPoints":21.4},{"isBye":False,"totalPoints":14.3}]}},{"firstName":"A.J.","lastName":"Dillon","position":"RB","history":{"games":[{"isBye":False,"totalPoints":13.8},{"isBye":False,"totalPoints":9.2}]}},{"firstName":"JuJu","lastName":"Smith-Schuster","position":"WR","history":{"games":[{"isBye":False,"totalPoints":11.9},{"isBye":False,"totalPoints":14.2}]}},{"firstName":"Darrell","lastName":"Henderson","position":"RB","history":{"games":[{"isBye":False,"totalPoints":6.1},{"isBye":False,"totalPoints":11.7}]}},{"firstName":"Jared","lastName":"Goff","position":"QB","history":{"games":[{"isBye":False,"totalPoints":16.5},{"isBye":False,"totalPoints":18.2}]}},{"firstName":"Jason","lastName":"Sanders","position":"K","history":{"games":[{"isBye":False,"totalPoints":9},{"isBye":False,"totalPoints":7}]}},{"firstName":"Harrison","lastName":"Butker","position":"K","history":{"games":[{"isBye":False,"totalPoints":10},{"isBye":False,"totalPoints":5}]}},{"firstName":"Greg","lastName":"Zuerlein","position":"K","history":{"games":[{"isBye":False,"totalPoints":11},{"isBye":False,"totalPoints":6}]}},{"firstName":"Younghoe","lastName":"Koo","position":"K","history":{"games":[{"isBye":False,"totalPoints":12},{"isBye":False,"totalPoints":9}]}},{"firstName":"Justin","lastName":"Tucker","position":"K","history":{"games":[{"isBye":False,"totalPoints":8},{"isBye":False,"totalPoints":7}]}},{"firstName":"Chris","lastName":"Boswell","position":"K","history":{"games":[{"isBye":False,"totalPoints":7},{"isBye":False,"totalPoints":10}]}},{"firstName":"Ben","lastName":"Roethlisberger","position":"QB","history":{"games":[{"isBye":False,"totalPoints":15},{"isBye":False,"totalPoints":20}]}},{"firstName":"Kirk","lastName":"Cousins","position":"QB","history":{"games":[{"isBye":False,"totalPoints":12},{"isBye":False,"totalPoints":24}]}}]


for player in players:
  player['id'] = str(uuid.uuid4())
  player['owner'] = random.choice([None, '1', '2', '3', '4', '5', '6'])

print(json.dumps(players))
