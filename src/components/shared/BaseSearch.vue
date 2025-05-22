<template>
  <div class="base-search">
    <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
    <input
      type="text"
      class="base-search"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: 'Search...',
  },
});
</script>

<style lang="scss" scoped>
.base-search {
  border: 1px solid var(--light-gray);
  padding: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 300px;
  // width: auto;

  input {
    font-size: var(--font-medium);
    font-weight: 400;
    color: var(--dark-gray);
    width: calc(100% - 15px);
    padding: 3px 0;
    height: 100%;
    border-radius: 0;
    border: none;

    &:focus {
      outline: none;
      border: none;
    }
  }

  .icon {
    cursor: pointer;
    font-size: 14px;
    color: var(--dark-gray);
    width: 15px;
    margin-left: 10px;
  }
}
</style>
