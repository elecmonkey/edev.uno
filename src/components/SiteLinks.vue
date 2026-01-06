<script setup lang="ts">
import SiteCard from './SiteCard.vue'
import PuzzleGame from './PuzzleGame.vue'
import JsonPacker from './JsonPacker.vue'
import KnownBoard from './KnownBoard.vue'
import AnnualGitReview from './AnnualGitReview.vue'
import NewsPipeline from './NewsPipeline.vue'
import GithubIcon from './icon/github.vue'

type Site = {
  title: string
  href: string
  desc?: string
  authorName?: string
  authorHref?: string
}

const sites: Site[] = [
  { title: 'Elecmonkey\'s Garden', href: 'https://www.elecmonkey.com', desc: '个人技术博客' },
  { title: 'GitHub Homepage', href: 'https://github.com/elecmonkey', desc: 'GitHub 主页' },
  { title: 'EM Notebook', href: 'https://note.elecmonkey.com', desc: '一箱笔记本。' },
  { title: 'Elecmonkey\'s Transphere', href: 'https://transphere.elecmonkey.com/', desc: '交通 · 轨道 · 旅行' }
]

const openSourceSites: Site[] = [
  { title: 'Slidev', href: 'https://sli.dev', desc: 'Presentation slides for developers' },
  { title: 'VitePress', href: 'https://vitepress.dev', desc: 'Vite & Vue powered static site generator' },
  { title: 'Rolldown', href: 'https://rolldown.rs', desc: 'Fast Rust-based bundler for JavaScript' },
  { title: 'tsdown', href: 'https://tsdown.dev', desc: 'The Elegant Library Bundler' }
]
</script>

<template>
  <div class="min-h-dvh bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
    <main class="mx-auto max-w-5xl px-4 py-16">
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl tracking-tight font-extralight"><span class="font-bold">E</span>lecmonkey is a <span class="font-bold">Dev</span>eloper</h1>
        <p class="mt-3 text-xl md:text-2xl text-gray-600">
          Welcome to <span class="font-bold">EDEV.UNO</span>
          <GithubIcon
            class="ml-2 align-middle text-gray-500 hover:text-gray-800 transition-colors"
            :size="22"
            href="https://github.com/elecmonkey/edev.uno"
          />
        </p>
      </header>

      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-light mb-8 text-gray-800">My Repos</h2>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <!-- First three sites -->
          <SiteCard
            v-for="(site, i) in sites.slice(0, 3)"
            :key="`top-` + i"
            :title="site.title"
            :href="site.href"
            :desc="site.desc"
          />

          <!-- Remaining sites -->
          <SiteCard
            v-for="(site, i) in sites.slice(3)"
            :key="`bottom-` + i"
            :title="site.title"
            :href="site.href"
            :desc="site.desc"
          />

          <JsonPacker />
          <KnownBoard />
          <AnnualGitReview />
          <NewsPipeline />
          <PuzzleGame />
        </div>
      </section>

      <section>
        <h2 class="text-2xl md:text-3xl font-light mb-8 text-gray-800">Open Source Contributions</h2>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SiteCard
            v-for="(site, i) in openSourceSites"
            :key="`opensource-` + i"
            :title="site.title"
            :href="site.href"
            :desc="site.desc"
          />
        </div>
      </section>
    </main>
  </div>
</template>
