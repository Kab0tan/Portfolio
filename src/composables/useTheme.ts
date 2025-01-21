import { ref } from 'vue'

export function useTheme() {
  const isLight = ref(false)

  const toggleTheme = () => {
    document.documentElement.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
  }

  return {
    isLight,
    toggleTheme,
  }
}
