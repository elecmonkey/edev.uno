<script setup lang="ts">
import SiteCard from './SiteCard.vue'
import PuzzleGame from './PuzzleGame.vue'
import JsonPacker from './JsonPacker.vue'
import KnownBoard from './KnownBoard.vue'
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
</script>

<template>
  <div class="min-h-dvh bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
    <main class="mx-auto max-w-5xl px-4 py-16">
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl tracking-tight font-extralight"><span class="font-bold">E</span>lecmonkey is a <span class="font-bold">Dev</span>eloper</h1>
        <p class="mt-3 text-xl md:text-2xl text-gray-600">
          Welcome to <span class="font-bold">EDEV.UNO</span>
          <GithubIcon
            class="ml-2 mb-[6px] align-middle text-gray-500 hover:text-gray-800 transition-colors"
            :size="22"
            href="https://github.com/elecmonkey/edev.uno"
          />
        </p>
      </header>

      <section>
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
          <PuzzleGame />
        </div>
      </section>
    </main>
  </div>
</template>
