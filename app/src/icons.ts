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
  if (typeof b.prefix === 'undefined' && typeof b.suffix === 'undefined') return `${b.svg} ${value}` // No link
  return (`<a href="https://${b.prefix}${value.toLowerCase()}${b.suffix}" target="_blank">${b.svg} ${value}</a>`)
}

interface Brand {
  svg: string;
  prefix?: string;
  suffix?: string;
}

interface BrandsObject {
  [id: string]: Brand
}

const Brands: BrandsObject = {
  carrd: { svg: Svg('carrd'), suffix: '.carrd.co/' },
  discord: { svg: Svg('discord') },
  furaffinity: { svg: Svg('furaffinity'), prefix: 'furaffinity.net/user/' },
  instagram: { svg: Svg('instagram'), prefix: 'instagram.com/' },
  twitter: { svg: Svg('x', 'white'), prefix: 'x.com/' }
}
