export interface ServiceProps extends Record<string, unknown> {
  getItems: () => void
  name: string
  createItem: (item: any) => void
  removeItem: (items: any[]) => Promise<any>
  setToken?: (token: string) => void
}
