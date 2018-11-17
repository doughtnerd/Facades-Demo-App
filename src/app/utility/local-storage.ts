
export class LocalStorage<T> {

  constructor(public storageKey: string) { }

  public getFromLocalStorage(): T[] {
    const items = JSON.parse(localStorage.getItem(this.storageKey));
    return items;
  }

  public saveItemsToLocalStorage(items: T[]) {
    const value = JSON.stringify(items);
    localStorage.setItem(this.storageKey, value);
  }

  public saveItemToLocalStorage(item: T): void {
    let items = this.getFromLocalStorage();
    if (items != null) {
      items.push(item);
    } else {
      items = [item];
    }
    this.saveItemsToLocalStorage(items);
  }

  public removeFromLocalStorage(item: T, filterPredicate: (item: T) => boolean) {
    let items = this.getFromLocalStorage();
    items = items.filter(filterPredicate);
    this.saveItemsToLocalStorage(items);
  }

  public replaceItemInLocalStorage(item: T, filterPredicate: (item: T) => boolean) {
    let items = this.getFromLocalStorage();
    items = items.map(data => {
      if (filterPredicate(data)) {
        return item;
      }
      return data;
    });
    this.saveItemsToLocalStorage(items);
  }
}
