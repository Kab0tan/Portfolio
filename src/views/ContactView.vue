<template>
  <div class="contact">
    <div class="contact__content">
      <span class="contact__content--title">{{ t('contact.title') }}</span>
      <span class="contact__content--subtitle">
        {{ t('contact.subtitle') }}
      </span>
      <ElPopover
        placement="bottom"
        :content="t('contact.popover')"
        effect="dark"
        :popper-style="{ textAlign: 'center' }"
      >
        <template #reference>
          <button class="contact-btn" @click="copyToClipboard">leddet.ginp@gmail.com</button>
        </template>
      </ElPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ContactView.scss'
import { ElMessage } from 'element-plus'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const copyToClipboard = () => {
  const email = 'justinleddet@gmail.com'
  navigator.clipboard.writeText(email)
  ElMessage({
    message: 'Copied.',
    type: 'success',
  })
}
</script>
