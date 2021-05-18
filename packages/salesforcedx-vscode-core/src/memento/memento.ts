import { Memento } from 'vscode';

export class LocalStorage {
  private static instance: LocalStorage;
  private storage?: Memento;

  public static getInstance() {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  public initialize(storage: Memento) {
    this.storage = storage;
  }

  public getValue<T>(key: string): T {
    // @ts-ignore
    return this.storage.get<T>(key, null);
  }

  public setValue<T>(key: string, value: T) {
    this.storage?.update(key, value);
  }
}
