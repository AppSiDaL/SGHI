export interface ServiceProps extends Record<string, unknown> {
  getItems: () => void
  name: string
  createItem: (item: any) => void
  removeItem: (id: string) => void
  setToken?: (token: string) => void
}
