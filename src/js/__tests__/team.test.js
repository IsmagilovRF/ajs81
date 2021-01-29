import Zombie from '../zombie';
import Team from '../team';

test('Team add Zombie', () => {
  const shaun = new Zombie('Шон');
  const team = new Team();
  team.add(shaun);
  const received = team.toArray();
  const expected = [{
    name: 'Шон',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }];

  expect(received).toEqual(expected);
});

test('Team addAll Zombie', () => {
  const shaun = new Zombie('Шон');
  const zombak = new Zombie('Зомбак');
  const team = new Team();
  team.addAll(shaun, zombak);
  const received = team.toArray();
  const expected = [{
    name: 'Шон',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Зомбак',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }];

  expect(received).toEqual(expected);
});

test('Team add Bowman repeatedly', () => {
  const shaun = new Zombie('Шон');
  const team = new Team();
  team.add(shaun);

  expect(() => {
    team.add(shaun);
  }).toThrow();
});
