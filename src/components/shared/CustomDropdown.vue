<template>
  <select class="base-dropdown" v-bind="$attrs">
    <slot />
  </select>
</template>

<style lang="scss" scoped>
.base-dropdown {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: $border-radius;
}
</style>
