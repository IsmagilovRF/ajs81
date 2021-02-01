export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    for (const member of this.members) {
      if (JSON.stringify(member) === JSON.stringify(character)) {
        throw new Error('Персонаж уже добавлен. Проверка и по имени и по всем характеристикам');
      }
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
