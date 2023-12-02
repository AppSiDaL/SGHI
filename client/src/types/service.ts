export interface ServiceProps extends Object {
  getItems: Function;
  name: String;
  createItem: Function;
  removeItem: Function;
  setToken?: Function;
}
