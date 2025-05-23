<template>
  <div class="table-wrapper">
    <table class="tbl-container">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, rowIdx) in paginatedItems" :key="rowIdx">
          <td v-for="header in headers" :key="header.key">
            <slot :name="`cell-${header.key}`" :item="item" :value="item[header.key]" :row="rowIdx">
              <!-- 👇 Default rendering with status label support -->
              <span v-if="header.key === 'status'" :class="['status-label', item[header.key]]">
                {{ item[header.key] }}
              </span>

              <!-- 👇 Render nothing for actions if slot not provided -->
              <template v-else-if="header.key === 'actions'">
                <slot name="cell-actions" :item="item" :row="rowIdx">
                  <!-- Optional default: you can remove this if you want nothing by default -->
                </slot>
              </template>

              <span v-else>
                {{ item[header.key] }}
              </span>
            </slot>
          </td>
        </tr>
        <tr v-if="paginatedItems.length === 0">
          <td :colspan="headers.length" class="text-center">No data found.</td>
        </tr>
      </tbody>
    </table>

    <!-- 👇 Pagination with summary -->
    <div class="pagination">
      <div class="pagination-summary">
        Showing {{ startIndex }}–{{ endIndex }} of {{ totalItems }} items
      </div>

      <div class="pagination-buttons">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="() => (currentPage = page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>

        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  headers: Array<{ key: string; label: string }>;
  items: Array<Record<string, unknown>>;
  itemsPerPage?: number;
}>();

const currentPage = ref(1);
const perPage = computed(() => props.itemsPerPage || 10);

const totalPages = computed(() => Math.ceil(props.items.length / perPage.value));

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  return props.items.slice(start, start + perPage.value);
});

const totalItems = computed(() => props.items.length);

const startIndex = computed(() => {
  return props.items.length === 0 ? 0 : (currentPage.value - 1) * perPage.value + 1;
});

const endIndex = computed(() => {
  return Math.min(currentPage.value * perPage.value, props.items.length);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

watch(
  () => props.items,
  () => {
    currentPage.value = 1;
  },
);
</script>

<style lang="scss">
.table-wrapper {
  width: 100%;
}

.tbl-container {
  width: 100%;
  border-collapse: collapse;

  th {
    text-transform: uppercase;
  }

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    font-weight: 300;
  }

  th {
    font-weight: 500;
    background: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f2f2f2;
  }

  .text-center {
    text-align: center;
    padding: 2rem;
  }
}

.status-label {
  font-weight: 400;
  text-transform: capitalize;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: #f6f6f6;

  &.Active {
    color: green;
  }

  &.Inactive {
    color: red;
  }
}

.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .pagination-summary {
    font-size: 0.9rem;
    color: #555;
  }

  .pagination-buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      padding: 0.4rem 0.8rem;
      border: 1px solid #ccc;
      background-color: white;
      cursor: pointer;

      &.active {
        background-color: green;
        color: white;
        font-weight: bold;
        border-color: green;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
