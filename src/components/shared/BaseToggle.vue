<template>
  <!-- <button
    class="base-toggle"
    :class="{ on: modelValue, off: !modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
    type="button"
  >
    <font-awesome-icon
      :icon="modelValue ? ['fas', 'toggle-on'] : ['fas', 'toggle-off']"
      class="toggle-icon"
    />
  </button> -->

  <q-toggle :label="label" v-model="model" color="color" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'blue',
  },
});
const emit = defineEmits(['update:modelValue']);
const model = ref(props.modelValue);
watch(model, (val) => emit('update:modelValue', val));
</script>

<style lang="scss" scoped>
.base-toggle {
  position: relative;
  width: 45px;
  height: 25px;
  border: none;
  border-radius: 14px;
  background: #ccc;
  transition: background 0.2s;
  cursor: pointer;
  outline: none;
  padding: 0;

  // Remove icon, use only the circle
  .toggle-icon {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }

  &.on {
    background: #4caf50;
    &::before {
      left: 25px;
    }
  }

  &.off {
    background: #ccc;
    &::before {
      left: 3px;
    }
  }
}
</style>
