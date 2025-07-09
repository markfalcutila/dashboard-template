<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="title-header">Merchant Page</h1>
      <p>
        Connected merchants with details on their <br />
        payments and transaction history.
      </p>
    </div>

    <div class="page-table">
      <div class="filter-container">
        <div class="filter-left">
          <div class="filter">
            <label class="filter-button">Filter(0)</label>
            <!-- <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> -->
          </div>
          <CustomSearch v-model="search" />
        </div>

        <div class="filter-right">
          <div class="switch-button">
            <CustomToggle v-model="showActive" label="Show active accounts only" />
            <!-- <label>Show active accounts only</label> -->
          </div>

          <CustomButton
            type="primary"
            :icon="'add'"
            :showIcon="true"
            :fullWidth="false"
            @click="addMerchant"
          >
            Add merchant
          </CustomButton>
        </div>
      </div>

      <!-- Table -->
      <q-table
        flat
        bordered
        class="custom-q-table q-mt-md"
        :rows="filteredMerchants"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :rows-per-page-options="[5, 10, 25]"
        @request="listMerchants({ pagination })"
      >
        <!-- Enabled Column Customization -->
        <template #body-cell-isEnabled="{ value }">
          <td>
            <div class="status-container">
              <span :class="['status-label', value ? 'Active' : 'Inactive']">
                {{ value ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </td>
        </template>

        <!-- Actions Column -->
        <template #body-cell-actions="{ row }">
          <td>
            <div>
              <CustomButton
                :icon="'edit'"
                type="secondary"
                :showIcon="true"
                :circle="true"
                :fullHeight="true"
                @click="editMerchant(row)"
              />

              <CustomButton
                :icon="'visibility'"
                type="primary"
                :showIcon="true"
                :circle="true"
                @click="viewMerchant(row)"
              />
            </div>
          </td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from 'components/shared/CustomButton.vue';
import CustomSearch from 'components/shared/CustomSearch.vue';
import CustomToggle from 'components/shared/CustomToggle.vue';

import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
// import type { MerchantModel } from 'src/types/merchant';

const $q = useQuasar();
const router = useRouter();

const merchants = ref<any[]>([
  {
    id: 1,
    code: 'MRC001',
    name: 'Acme Corp',
    isEnabled: true,
  },
  {
    id: 2,
    code: 'MRC002',
    name: 'Beta Traders',
    isEnabled: false,
  },
  {
    id: 3,
    code: 'MRC003',
    name: 'Gamma Supplies',
    isEnabled: true,
  },
  {
    id: 4,
    code: 'MRC004',
    name: 'Delta Services',
    isEnabled: true,
  },
  {
    id: 5,
    code: 'MRC005',
    name: 'Epsilon Goods',
    isEnabled: false,
  },
]);
const loading = ref(false);
const search = ref('');
const showActive = ref(false);

const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0,
  sortBy: 'code',
  descending: false,
});

const filters = ref({
  code: '',
  name: '',
});

const columns = ref([
  { name: 'code', label: 'Merchant Code', field: 'code', sortable: true },
  { name: 'name', label: 'Merchant Name', field: 'name', sortable: true },
  { name: 'isEnabled', label: 'Status', field: 'isEnabled', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions', sortable: false },
]);

onMounted(() => {
  listMerchants({ pagination: pagination.value });
});

function listMerchants({ pagination: p }: { pagination: any }) {
  loading.value = true;
  try {
    const params = {
      pageNo: p.page,
      pageSize: p.rowsPerPage,
      merchantCode: filters.value.code,
      merchantName: filters.value.name,
      sortBy: p.sortBy,
      descending: p.descending,
    };
    // const res = await MerchantService.getMerchants(params);
    // merchants.value = res.merchants;
    // pagination.value = { ...p, rowsNumber: res.totalElements };
  } catch (err) {
    $q.notify({ type: 'negative', message: 'Failed to load merchants' });
    console.error(err);
  } finally {
    loading.value = false;
  }
}

function addMerchant() {
  void router.push('add-merchant');
  // void router.push('/add-merchant');
}

async function editMerchant(row: any) {
  await router.push({
    name: 'update-merchant',
    params: { id: row.id },
  });
}

function viewMerchant(item: unknown) {
  console.log('view merchant:', item);
}

const filteredMerchants = computed(() => {
  let list = merchants.value;
  // Show only active merchants if toggle is on
  if (showActive.value) {
    list = list.filter((merchant) => merchant.isEnabled === true);
  }
  // Search by code or name
  if (search.value.trim()) {
    const searchTerm = search.value.toLowerCase();
    list = list.filter(
      (merchant) =>
        merchant.code.toLowerCase().includes(searchTerm) ||
        merchant.name.toLowerCase().includes(searchTerm),
    );
  }
  return list;
});
</script>
