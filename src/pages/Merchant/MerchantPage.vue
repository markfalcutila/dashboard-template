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
            <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
          </div>
          <BaseSearch v-model="search" />
        </div>

        <div class="filter-right">
          <div class="switch-button">
            <BaseToggle v-model="showActive" />
            <label>Show active accounts only</label>
          </div>
          <BaseButton
            type="primary"
            :icon="['fas', 'plus']"
            :showIcon="true"
            :fullWidth="false"
            @click="goToAddMerchant"
          >
            Add merchant
          </BaseButton>
        </div>
      </div>

      <!-- Table -->
      <BaseTable :headers="headers" :items="merchants" :items-per-page="5">
        <template #cell-address="{ item }">
          <div>{{ item.city }}</div>
          <div>{{ item.country }}</div>
        </template>

        <template #cell-status="{ value }">
          <span :class="['status-label']">
            {{ value }}
          </span>
        </template>

        <template #cell-actions="{ item }">
          <BaseButton
            type="secondary"
            :icon="['fas', 'pen']"
            :showIcon="true"
            :circle="true"
            @click="editMerchant(item)"
          >
          </BaseButton>

          <BaseButton
            type="danger"
            :icon="['fas', 'eye']"
            :showIcon="true"
            :circle="true"
            @click="viewMerchant(item)"
          >
          </BaseButton>
        </template>
      </BaseTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from 'components/shared/BaseButton.vue';
import BaseSearch from 'components/shared/BaseSearch.vue';
import BaseTable from 'components/shared/BaseTable.vue';
import BaseToggle from 'components/shared/BaseToggle.vue';

interface Merchant {
  id: number;
  name: string;
  code: string;
  category: string;
  network: string;
  city: string;
  country: string;
  lastUpdated: string;
  status: string;
}

export default defineComponent({
  name: 'MerchantPage',
  components: {
    BaseSearch,
    BaseButton,
    BaseToggle,
    BaseTable,
  },
  data() {
    return {
      search: '',
      showActive: true,
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'code', label: 'Code' },
        // { key: 'category', label: 'Category Code' },
        // { key: 'network', label: 'Card Network' },
        // { key: 'address', label: 'Address' },
        // { key: 'lastUpdated', label: 'Last Updated' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' },
      ],
      // default data
      merchants: [
        {
          id: 1,
          name: 'Merchant 1',
          code: 'M001',
          category: 'A',
          network: 'Visa',
          city: 'New York',
          country: 'USA',
          lastUpdated: '2024-05-20',
          status: 'Active',
        },
        {
          id: 2,
          name: 'Merchant 2',
          code: 'M002',
          category: 'B',
          network: 'Mastercard',
          city: 'London',
          country: 'UK',
          lastUpdated: '2024-05-18',
          status: 'Inactive',
        },
        {
          id: 3,
          name: 'Merchant 3',
          code: 'M003',
          category: 'C',
          network: 'Amex',
          city: 'Tokyo',
          country: 'Japan',
          lastUpdated: '2024-05-15',
          status: 'Active',
        },
        {
          id: 4,
          name: 'Merchant 4',
          code: 'M002',
          category: 'C',
          network: 'Amex',
          city: 'Tokyo',
          country: 'Japan',
          lastUpdated: '2024-05-15',
          status: 'Active',
        },
        {
          id: 5,
          name: 'Merchant 5',
          code: 'M005',
          category: 'C',
          network: 'Amex',
          city: 'Tokyo',
          country: 'Japan',
          lastUpdated: '2024-05-15',
          status: 'Active',
        },
        {
          id: 6,
          name: 'Merchant 6',
          code: 'M006',
          category: 'C',
          network: 'Amex',
          city: 'Tokyo',
          country: 'Japan',
          lastUpdated: '2024-05-15',
          status: 'Active',
        },
      ] as Merchant[],
    };
  },
  methods: {
    goToAddMerchant() {
      void this.$router.push('/add-merchant');
    },
    editMerchant(item: unknown) {
      console.log('edit merchant:', item);
      // this.editMerchant(item as Merchant);
      void this.$router.push('view-merchant');
    },
    viewMerchant(item: unknown) {
      // this.viewMerchant(item as Merchant);
      console.log('view merchant:', item);
    },
  },
});
</script>
