<script setup lang="ts">
interface Props {
  title: string
  href: string
  desc?: string
}

defineProps<Props>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="group relative block rounded-none"
  >
    <!-- Single offset layer for two-layer look -->
    <div class="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 bg-white ring-1 ring-gray-200"></div>

    <!-- Top card -->
    <div class="relative bg-white ring-1 ring-gray-200 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
      <div class="p-5">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold leading-snug text-gray-800 group-hover:text-gray-900">
            {{ title }}
          </h3>
          <span class="ml-3 inline-flex size-8 items-center justify-center text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
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
        <p v-if="desc" class="mt-2 text-sm text-gray-600">
          {{ desc }}
        </p>

        <div class="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  </a>
</template>
