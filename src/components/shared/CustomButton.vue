<template>
  <button
    :class="[
      'base-button',
      type,
      { 'full-width': fullWidth },
      { 'full-height': fullHeight },
      { 'btn-circle': circle },
    ]"
  >
    <!-- <font-awesome-icon v-if="showIcon && icon" class="icon" :icon="icon" /> -->
    <q-icon v-if="showIcon && icon" class="icon" :name="icon" />
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
    type: String,
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
  fullHeight: {
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
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: var(--font-small);
  cursor: pointer;
  transition: 0.3s;
  width: auto;
  height: auto;
  margin: 0 2px;

  svg {
    font-size: 14px;
    margin-right: 5px;
  }

  .icon {
    font-size: var(--font-medium);
  }

  &.primary {
    background-color: var(--primary-color);
    color: #fff;

    :hover {
      background-color: var(--primary-color-hover);
    }
  }
  &.secondary {
    background-color: var(--secondary-color);
    color: #fff;
    :hover {
      background-color: var(--secondary-color-hover);
    }
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
.full-height {
  height: 100%;
}
.btn-circle {
  border-radius: 50%;
  padding: 10px 14px;

  svg {
    margin: 0;
  }
}
</style>
