import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useNavBarStore = defineStore('navbar', () => {
  const isMobile = ref(false)
  const isMenuOpen = ref(false)
  const router = useRouter()

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

  return {
    isMobile,
    isMenuOpen,
    currentRouteName,
    checkMobile,
    toggleMenu,
    handleLink,
  }
})
