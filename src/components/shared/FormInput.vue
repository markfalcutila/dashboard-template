<template>
  <div :class="['form-group', sizeClass]">
    <label :for="name" class="form-label">
      <template v-if="type === 'checkbox'">
        <input
          :id="name"
          :name="name"
          type="checkbox"
          v-model="modelValue"
          class="form-check-input"
        />
        {{ label }}
        <span v-if="required" class="required-asterisk">*</span>
      </template>

      <template v-else>
        {{ label }}
        <span v-if="required" class="required-asterisk">*</span>
      </template>
    </label>

    <input
      v-if="type !== 'checkbox'"
      :id="name"
      :name="name"
      :type="type ?? 'text'"
      :placeholder="placeholder ?? ''"
      v-model="modelValue"
      :class="['form-input', sizeClass]"
      :required="!!required"
      :disabled="!!disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  modelValue?: string | number | boolean;
  required?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'input-sm';
    case 'lg':
      return 'input-lg';
    default:
      return 'input-md';
  }
});
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-label {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.required-asterisk {
  color: red;
  font-weight: 300;
}

.form-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  transition: border 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
}

.form-check-input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Size styles */
.input-sm {
  font-size: 0.8rem;
  /* padding: 0.3rem 0.5rem; */
  padding: 0.3rem 0.5rem;
}

.input-md {
  font-size: 1rem;
  /* padding: 0.5rem 0.75rem; */
  /* padding: 0.5rem 0; */
}

.input-lg {
  font-size: 1.2rem;
  /* padding: 0.75rem 1rem; */
  padding: 0.75rem 0;
}
</style>
