const singleton =
`class Singleton {
  // Змінна, що зберігає об'єкт. Спочатку
  // змінна пуста і використовується як заповнювач
  private static singleton: Singleton;

  // приватний конструктор, тож викликати його ззовні неможливо
  private constructor() {
  }

  // Так ми створюємо об'єкт Одинак
  public static getInstance(): Singleton {
    // перевіряємо чи екземпляр об'єкту вже було створено раніше
    if (!Singleton.singleton) {
      // Якщо не було створено, то створюємо екземпляр
      // і зберігаємо екземпляр у змінній
      Singleton.singleton = new Singleton();
    }
    // повертаємо об'єкт
    return Singleton.singleton;
  }
}`

export default singleton