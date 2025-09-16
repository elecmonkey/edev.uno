import { readFile, writeFile, readdir, unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Routes to prerender (expand as needed)
const routes = ['/',]

// Build switches via env:
// - SSG_HYDRATE: 'false' to remove client JS for all routes
// - SSG_NOJS_ROUTES: comma-separated list of routes that should NOT include client JS
//   example: SSG_NOJS_ROUTES="/,/about"  (only these routes will be zero-JS)
const HYDRATE_ALL = process.env.SSG_HYDRATE !== 'false'
const noJsRoutes = (process.env.SSG_NOJS_ROUTES || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const distClient = resolve('dist')
const distServer = resolve('dist-ssr/entry-server.js')

async function prerender() {
  const { render } = await import(pathToFileURL(distServer).href)
  let hydratedAny = false

  for (const url of routes) {
    // Read the client-built HTML as a template so assets are already injected
    const templatePath = resolve(distClient, 'index.html')
    let html = await readFile(templatePath, 'utf-8')

    const { appHtml } = await render({ url })
    html = html.replace('<!--app-html-->', appHtml)

    // Determine whether this route should include client JS (hydrate) or be zero-JS
    const hydrate = HYDRATE_ALL && !noJsRoutes.includes(url)

    if (!hydrate) {
      // Strip client JS and modulepreload to produce zero-JS HTML for this route
      // Remove any <script type="module" ...></script>
      html = html
        .replace(/<script\s+[^>]*type="module"[^>]*><\/script>\s*/gi, '')
        // Remove <link rel="modulepreload" ...>
        .replace(/<link\s+[^>]*rel="modulepreload"[^>]*>\s*/gi, '')
    }
    hydratedAny ||= hydrate

    // Normalize route -> file path inside dist, avoid absolute paths
    const pathSeg = (url.replace(/^\//, '').replace(/\/$/, '/index.html')) || 'index.html'
    const outPath = resolve(distClient, pathSeg)
    await writeFile(outPath, html)
    console.log('Prerendered', url, '->', outPath, hydrate ? '(hydrate)' : '(zero-js)')
  }

  if (!hydratedAny) {
    // No routes require hydration: drop the generated JS bundles entirely
    const assetDir = resolve(distClient, 'assets')
    try {
      const files = await readdir(assetDir)
      const removals = files.filter((name) => name.endsWith('.js') || name.endsWith('.js.map'))
      await Promise.all(removals.map((name) => unlink(resolve(assetDir, name))))
      if (removals.length) {
        console.log('Removed JS assets for zero-JS build:', removals)
      }
    } catch (err) {
      if (err && err.code !== 'ENOENT') throw err
    }
  }
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})
