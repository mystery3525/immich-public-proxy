// test
import * as icons from 'simple-icons'

function Svg (icon: { path:string; hex:string }, title:string) {
  // return (`<svg viewBox="0 0 24 24" aria-hidden focusable="false" role="img" width="20" height="20">
  return (`<svg viewBox="0 0 24 24" aria-hidden focusable="false" role="img" width="12" height="12"><path d="${icon.path}" fill="#${icon.hex}"/><title>${title}</title></svg>`)
}

export function Link (site: string, value: string): string {
  if (!(site in Brand)) {
    if (site === 'text') return value
    return ''
  }
  const b = Brand[site]
  return (`<a href="https://${b.url}${value.toLowerCase()}" target="_blank">${b.svg} ${value}</a>`)
}

interface IBrand {
  svg: string;
  url: string;
}

interface IBrandArray {
  [id: string]: IBrand
}

export const Brand: IBrandArray = {
  instagram: { svg: Svg(icons.siInstagram, 'Instagram'), url: 'instagram.com/' },
  twitter: { svg: Svg({ path: icons.siX.path, hex: 'FFFFFF' }, 'x.com'), url: 'x.com/' }
}
