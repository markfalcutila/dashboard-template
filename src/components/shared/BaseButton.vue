<template>
  <button :class="['base-button', type, { 'full-width': fullWidth }, { 'btn-circle': circle }]">
    <font-awesome-icon v-if="showIcon && icon" class="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: [Array, String],
    default: null,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s;
  width: auto;
  margin: 0 2px;

  svg {
    font-size: 12px;
    margin-right: 5px;
  }

  &.primary {
    background-color: green;
    color: #fff;
  }
  &.secondary {
    background-color: red !important;
    color: #fff;
  }

  &.secondary {
    background-color: #6c757d;
    color: #fff;
  }

  &:hover {
    opacity: 0.85;
  }
}

.full-width {
  width: 100%;
}
.btn-circle {
  border-radius: 50%;
  padding: 10px 14px;

  svg {
    margin: 0;
  }
}
</style>
