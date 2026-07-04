import { ref } from 'vue'

const isLight = ref(false)
const highlightColor = ref('#46f3ff')

export function useTheme() {
  const toggleTheme = () => {
    highlightColor.value = isLight.value ? '#ff810d' : '#46f3ff'
    document.documentElement.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
  }

  return {
    isLight,
    highlightColor,
    toggleTheme,
  }
}
