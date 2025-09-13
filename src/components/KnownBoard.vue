<script setup lang="ts">
const cardHref = 'https://wk.edev.uno/'

const go = () => {
  window.open(cardHref, '_blank', 'noopener')
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
    <!-- Static left-down offset layer -->
    <div class="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 bg-white ring-1 ring-emerald-200/60"></div>

    <!-- Top card with amber/orange accent -->
    <div class="relative bg-gradient-to-br from-emerald-50 via-green-50 to-white ring-1 ring-emerald-200/70 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
      <div class="p-5">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold leading-snug text-emerald-900">
            Known Board
          </h3>
          <span class="ml-3 inline-flex size-8 items-center justify-center text-emerald-400 transition-colors duration-300 group-hover:text-emerald-600">
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

        <p class="mt-2 text-sm text-emerald-700/80">
          学习任务在线追踪看板
        </p>

        <div class="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  </div>
</template>
