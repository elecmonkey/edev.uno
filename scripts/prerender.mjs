import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Routes to prerender (expand as needed)
const routes = ['/',]

const distClient = resolve('dist')
const distServer = resolve('dist-ssr/entry-server.js')

async function prerender() {
  const { render } = await import(pathToFileURL(distServer).href)

  for (const url of routes) {
    // Read the client-built HTML as a template so assets are already injected
    const templatePath = resolve(distClient, 'index.html')
    let html = await readFile(templatePath, 'utf-8')

    const { appHtml } = await render({ url })
    html = html.replace('<!--app-html-->', appHtml)

    // Normalize route -> file path inside dist, avoid absolute paths
    const pathSeg = (url.replace(/^\//, '').replace(/\/$/, '/index.html')) || 'index.html'
    const outPath = resolve(distClient, pathSeg)
    await writeFile(outPath, html)
    console.log('Prerendered', url, '->', outPath)
  }
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})
