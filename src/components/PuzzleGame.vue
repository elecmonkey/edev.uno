<template>
  <a
    href="https://sla.edev.uno/"
    target="_blank"
    rel="noopener"
    class="group relative block rounded-none cursor-pointer"
  >
    <!-- Static left-down offset layer -->
    <div class="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 bg-white ring-1 ring-indigo-200/60"></div>

    <!-- Top card with indigo accent -->
    <div class="relative bg-gradient-to-br from-indigo-50 via-sky-50 to-white ring-1 ring-indigo-200/70 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
      <div class="p-5">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold leading-snug text-indigo-900">
            拼图大师
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

        <p class="mt-2 text-sm text-indigo-700/80">
          在线拼图游戏 by
          <a 
            href="https://github.com/YueZheng-Sea-angle" 
            target="_blank" 
            rel="noopener"
            class="underline decoration-indigo-400 underline-offset-4 text-indigo-600 hover:text-indigo-700 font-bold"
            @click.stop
          >月正海角</a>
          & SLA Group
        </p>

        <div class="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  </a>
</template>

