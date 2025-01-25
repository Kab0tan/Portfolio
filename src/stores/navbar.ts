import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme.ts'

export const useNavBarStore = defineStore('navbar', () => {
  const isMobile = ref(false)
  const isMenuOpen = ref(false)
  const router = useRouter()
  const { isLight } = useTheme()

  const currentRouteName = computed(() => router.currentRoute.value.name)

  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const handleLink = (_link: string) => {
    window.open(_link, '_blank')
  }

  const handleHighlight = (routeName: string) => {
    if (isLight.value) {
      if (currentRouteName.value === routeName) return '#ff810d'
      return ''
    } else {
      if (currentRouteName.value === routeName) return '#46f3ff'
      return ''
    }
  }
  return {
    isMobile,
    isMenuOpen,
    currentRouteName,
    checkMobile,
    toggleMenu,
    handleLink,
    handleHighlight,
  }
})
