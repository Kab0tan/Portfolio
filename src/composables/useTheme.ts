import { ref } from 'vue'

export function useTheme() {
  const isLight = ref(false)
  const highlightColor = ref('#46f3ff')

  const toggleTheme = () => {
    highlightColor.value = isLight.value ? '#ff810d' : '#46f3ff'
    document.documentElement.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
    console.log(highlightColor.value)
  }

  return {
    isLight,
    highlightColor,
    toggleTheme,
  }
}
