export const items: ExpansionItem[] = [
  {
    name:'Peixes',
    path:'/fish',
    icon:'set_meal'
  },
  {
    name:'Localização',
    path:'/location',
    icon:'place',
  }
]

export interface ExpansionItem {
  name:string,
  path: string,
  icon: string,
}
