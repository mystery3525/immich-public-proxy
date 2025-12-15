interface SvgModifiers {
  color?: string;
  width?: number,
  height?: number
}

function Svg (slug: string, mod?: SvgModifiers): string {
  if (typeof mod === 'undefined') mod = {}
  return (
    '<img height="' +
    (typeof mod.height === 'undefined' ? 12 : mod.height) +
    '" width="' +
    (typeof mod.width === 'undefined' ? 12 : mod.width) +
    `" src="https://cdn.simpleicons.org/${slug}` +
    (typeof mod.color === 'undefined' ? '' : `/${mod.color}`) +
    '" />'
  )
}

export function Link (site: string, value: string): string {
  if (!(site in Brands)) {
    if (site === 'text') return value
    return ''
  }
  const b = Brands[site]
  if (typeof b.prefix === 'undefined' && typeof b.suffix === 'undefined') return `${b.svg} ${value}` // No link
  return (
    '<a href="https://' +
    (typeof b.prefix === 'undefined' ? '' : b.prefix) +
    value.toLowerCase() +
    (typeof b.suffix === 'undefined' ? '' : b.suffix) +
    `" target="_blank">${b.svg} ${value}</a>`
  )
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
  furaffinity: { svg: Svg('furaffinity', { color: 'white' }), prefix: 'furaffinity.net/user/' },
  instagram: { svg: Svg('instagram'), prefix: 'instagram.com/' },
  twitter: { svg: Svg('x', { color: 'white' }), prefix: 'x.com/' }
}
