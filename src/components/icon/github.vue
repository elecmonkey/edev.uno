<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href?: string
  size?: number
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  title: 'GitHub'
})

const Tag = computed(() => (props.href ? 'a' : 'span'))
</script>

<template>
  <component
    :is="Tag"
    :href="props.href"
    :title="props.title"
    :aria-label="props.title"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center"
  >
    <svg
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      class="inline-block"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .317.216.686.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  </component>
</template>