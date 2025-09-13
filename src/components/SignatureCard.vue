<script setup lang="ts">
interface Props {
  cardHref: string
  title?: string
  desc?: string
  authorName?: string
  authorHref?: string
}

const props = withDefaults(defineProps<Props>(), {
  authorName: '月正海角',
})

const go = () => {
  window.open(props.cardHref, '_blank', 'noopener')
}
</script>

<template>
  <div
    class="group relative rounded-none cursor-pointer"
    role="link"
    tabindex="0"
    @click="go()"
    @keydown.enter.prevent="go()"
    @keydown.space.prevent="go()"
  >
    <!-- Single offset layer for two-layer look -->
    <div class="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 bg-white ring-1 ring-indigo-200/60"></div>

    <!-- Top card (whole card clickable via container; author text has its own link) -->
    <div class="relative bg-gradient-to-br from-indigo-50 via-sky-50 to-white ring-1 ring-indigo-200/70 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
      <div class="p-5">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold leading-snug text-indigo-900">
            <span v-if="title">{{ title }}</span>
            <span v-else>by
              <a :href="props.authorHref || props.cardHref" @click.stop target="_blank" rel="noopener" class="underline decoration-indigo-400 underline-offset-4 text-indigo-600 hover:text-indigo-700">{{ props.authorName }}</a>
            </span>
          </h3>
          <span class="ml-3 inline-flex size-8 items-center justify-center text-indigo-400 transition-colors duration-300 group-hover:text-indigo-600">
            <svg
              class="size-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        <p v-if="desc" class="mt-2 text-sm text-indigo-700/80">
          {{ desc }}
        </p>

        <p class="mt-3 text-sm text-indigo-700/90">
          by
          <a :href="props.authorHref || props.cardHref" @click.stop target="_blank" rel="noopener" class="font-medium text-indigo-600 underline decoration-indigo-400 underline-offset-4 hover:text-indigo-700">
            {{ props.authorName }}
          </a>
        </p>

        <div class="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  </div>
</template>
