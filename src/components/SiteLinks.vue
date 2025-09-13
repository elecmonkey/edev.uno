<script setup lang="ts">
import SiteCard from './SiteCard.vue'
import PuzzleGame from './PuzzleGame.vue'

type Site = {
  title: string
  href: string
  desc?: string
  authorName?: string
  authorHref?: string
}

const sites: Site[] = [
  { title: 'Elecmonkey\'s Garden', href: 'https://www.elecmonkey.com', desc: '个人博客' },
  { title: 'GitHub Homepage', href: 'https://github.com/elecmonkey', desc: '个人 GitHub 主页' },
  { title: 'Elecmonkey\'s Notebook', href: 'https://note.elecmonkey.com', desc: '一箱笔记本。' },
  { title: 'Elecmonkey\'s Transphere', href: 'https://transphere.elecmonkey.com/', desc: '交通 · 轨道 · 旅行' },
  { title: 'JSON Packer', href: 'https://json.edev.uno/', desc: 'JSON 压缩器' },
  { title: 'Known Board', href: 'https://wk.edev.uno/', desc: '学习任务追踪看板'},
]
</script>

<template>
  <div class="min-h-dvh bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
    <main class="mx-auto max-w-5xl px-4 py-16">
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl tracking-tight font-extralight"><span class="font-bold">E</span>lecmonkey is a <span class="font-bold">Dev</span>eloper</h1>
        <p class="mt-3 text-xl md:text-2xl text-gray-600">Welcome to <span class="font-bold">EDEV.UNO</span></p>
      </header>

      <section>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SiteCard
            v-for="(site, i) in sites"
            :key="i"
            :title="site.title"
            :href="site.href"
            :desc="site.desc"
          />
          <PuzzleGame />
        </div>
      </section>
    </main>
  </div>
</template>
