import Zombie from '../zombie';
import Team from '../team';
import Boweman from '../boweman';

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

test('Team add Zombie repeatedly', () => {
  const shaun = new Zombie('Шон');
  const team = new Team();
  team.add(shaun);

  expect(() => {
    team.add(shaun);
  }).toThrow();
});

test('Team add Boweman repeatedly (test-name)', () => {
  const team = new Team();
  const boweman = new Boweman('Лучник');
  team.add(boweman);

  expect(() => {
    team.add(boweman);
  }).toThrow();
});

test('test-name-по-замечанию', () => {
  const team = new Team();
  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  });

  expect(() => {
    team.add({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    });
  }).not.toThrow();
});
