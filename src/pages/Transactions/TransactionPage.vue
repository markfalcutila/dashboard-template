<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="title-header">Transaction Page</h1>
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
          <BaseButton
            type="primary"
            :icon="['fas', 'arrow-up-from-bracket']"
            :showIcon="true"
            :fullWidth="false"
            @click="goToAddMerchant"
          >
            Generate Report
          </BaseButton>
        </div>
      </div>

      <!-- Table -->
      <BaseTable :headers="headers" :items="filteredTransactions" :items-per-page="5">
        <template #cell-status="{ value }">
          <span :class="['status-label', value]">
            {{ value }}
          </span>
        </template>

        <template #cell-actions="{ item }">
          <BaseButton
            type=""
            :icon="['fas', 'eye']"
            :showIcon="true"
            :circle="true"
            @click="viewTransaction(item)"
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

interface Transaction {
  id: number;
  transactionId: string;
  amount: number;
  status: string;
  datePaid: string;
  cardNetwork: string;
  transactionType: string;
}

export default defineComponent({
  name: 'TransactionPage',
  components: {
    BaseSearch,
    BaseButton,
    BaseTable,
  },
  data() {
    return {
      showActive: true,
      search: '',
      headers: [
        { key: 'transactionId', label: 'transactionId' },
        { key: 'amount', label: 'amount' },
        { key: 'status', label: 'status' },
        { key: 'datePaid', label: 'datePaid' },
        { key: 'cardNetwork', label: 'cardNetwork' },
        { key: 'transactionType', label: 'transactionType' },
        { key: 'actions', label: 'actions' },
      ],
      transactions: [
        {
          id: 1,
          transactionId: '123456789',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
        {
          id: 2,
          transactionId: '001122',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
        {
          id: 3,
          transactionId: '123456789',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
        {
          id: 4,
          transactionId: '123456789',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
        {
          id: 5,
          transactionId: '123456789',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
        {
          id: 6,
          transactionId: '123456789',
          amount: 999,
          status: 'Sent',
          datePaid: 'April 29, 2023',
          cardNetwork: 'FastLoan',
          transactionType: 'Sale',
        },
      ] as Transaction[],
    };
  },
  methods: {
    goToAddMerchant() {
      //   this.$router.push({ name: 'AddMerchant' });
      console.log('Add Merchant button clicked');
    },
    async viewTransaction(item: unknown) {
      console.log('view transaction:', item);
      await this.$router.push({
        name: 'view-transaction',
        // params: { id: (item as Transaction).id },
        query: { transaction: JSON.stringify(item) }, // padding object data
      });
    },
  },
  computed: {
    filteredTransactions(): Record<string, unknown>[] {
      if (!this.search.trim()) return this.transactions as Record<string, unknown>[];

      const searchTerm = this.search.toLowerCase();
      return this.transactions.filter((tx) =>
        Object.values(tx).some((value) => String(value).toLowerCase().includes(searchTerm)),
      ) as Record<string, unknown>[];
    },
  },
});
</script>
