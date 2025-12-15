function Svg (slug: string, color?: string): string {
  return `<img height="12" width="12" src="https://cdn.simpleicons.org/${slug}/${color}" />`
}

export function Link (site: string, value: string): string {
  if (!(site in Brands)) {
    if (site === 'text') return value
    return ''
  }
  const b = Brands[site]
  console.log(b)
  if (typeof b.url === 'undefined') return `${b.svg} ${value}` // No link
  return (`<a href="https://${b.url}${value.toLowerCase()}" target="_blank">${b.svg} ${value}</a>`)
}

interface Brand {
  svg: string;
  url?: string;
}

interface BrandsObject {
  [id: string]: Brand
}

const Brands: BrandsObject = {
  discord: { svg: Svg('discord') },
  instagram: { svg: Svg('instagram'), url: 'instagram.com/' },
  twitter: { svg: Svg('x', 'white'), url: 'x.com/' }
}
