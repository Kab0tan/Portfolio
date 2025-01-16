<template>
  <div class="contact">
    <div class="contact__content">
      <span class="contact__content--title">{{ t('contact.title') }}</span>
      <span class="contact__content--subtitle">
        {{ t('contact.subtitle') }}
      </span>
      <div class="contact__content__inputs">
        <ElInput
          v-model="inputName"
          resize="none"
          type="textarea"
          :rows="1"
          placeholder="Your name"
          class="contact__content--input"
        />
        <ElInput
          v-model="inputEmail"
          resize="none"
          type="textarea"
          :rows="1"
          placeholder="Your email"
          class="contact__content--input"
        />
        <ElInput
          v-model="inputMessage"
          type="textarea"
          autosize
          :rows="1"
          placeholder="Your message"
          class="contact__content--input"
        />
      </div>
      <button class="contact__content--btn" @click="handleSubmit">
        Send message
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './ContactView.scss'
import { ref } from 'vue'
import { ElInput } from 'element-plus'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const inputName = ref('')
const inputEmail = ref('')
const inputMessage = ref('')

const handleSubmit = () => {
  console.log('submit')
}
</script>
