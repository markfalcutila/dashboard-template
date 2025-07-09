<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="title-header">Transactions Page</h1>
      <p>
        View and manage all merchant transactions, <br />
        including payment details, transaction status, and timestamps.
      </p>
    </div>

    <div class="page-table">
      <div class="filter-container">
        <div class="filter-left">
          <div class="filter">
            <label class="filter-button">Filter(0)</label>
          </div>
          <CustomSearch v-model="search" />
        </div>

        <div class="filter-right">
          <div class="switch-button">
            <CustomToggle v-model="showActive" label="Show success status only" />
            <!-- <label>Show active accounts only</label> -->
          </div>

          <CustomButton
            type="primary"
            :icon="'add'"
            :showIcon="true"
            :fullWidth="false"
            @click="generateReport()"
          >
            Generate Report
          </CustomButton>
        </div>
      </div>

      <q-table
        flat
        bordered
        class="custom-q-table q-mt-md"
        :rows="transactions"
        :columns="columns"
        row-key="referenceNumber"
        v-model:pagination="pagination"
        :loading="loading"
        :rows-per-page-options="[5, 10, 25]"
        @request="onRequest"
      >
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as XLSX from 'xlsx';
import { useRoute, useRouter } from 'vue-router';

import CustomSearch from 'components/shared/CustomSearch.vue';
import CustomToggle from 'components/shared/CustomToggle.vue';
import CustomButton from 'components/shared/CustomButton.vue';

interface Transaction {
  referenceNumber: string;
  merchantCode: string;
  amount: number;
  status: string;
  dateCreated: string;
}

// column definitions
const columns = [
  { name: 'referenceNumber', label: 'Reference #', field: 'referenceNumber', sortable: true },
  { name: 'merchantCode', label: 'Merchant', field: 'merchantCode', sortable: true },
  { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true },
  { name: 'dateCreated', label: 'Created', field: 'dateCreated', sortable: true },
];

// reactive state
const allTransactions = ref<Transaction[]>([
  {
    referenceNumber: 'TXN-1001',
    merchantCode: 'MRC001',
    amount: 1500.0,
    status: 'Success',
    dateCreated: '2025-07-01 10:00:00',
  },
  {
    referenceNumber: 'TXN-1002',
    merchantCode: 'MRC002',
    amount: 250.5,
    status: 'Failed',
    dateCreated: '2025-07-01 11:30:00',
  },
  {
    referenceNumber: 'TXN-1003',
    merchantCode: 'MRC003',
    amount: 800.0,
    status: 'Success',
    dateCreated: '2025-07-02 09:15:00',
  },
  {
    referenceNumber: 'TXN-1004',
    merchantCode: 'MRC001',
    amount: 120.75,
    status: 'Pending',
    dateCreated: '2025-07-02 14:45:00',
  },
  {
    referenceNumber: 'TXN-1005',
    merchantCode: 'MRC002',
    amount: 500.0,
    status: 'Success',
    dateCreated: '2025-07-03 08:20:00',
  },
]);

const transactions = ref<Transaction[]>([]);

const showActive = ref(true);
const search = ref('');

const loading = ref(false);
const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0,
});

const route = useRoute();
const router = useRouter();

// Called by QTable on initial load and pagination changes
async function onRequest({ pagination: p }: { pagination: any }) {
  loading.value = true;
  try {
    // const merchantId = (route.query.merchantId as string) || '';

    // const response = await getTransactionsService.getTransactions(
    //   p.page,
    //   p.rowsPerPage,
    //   merchantId,
    // );
    const response = allTransactions.value;

    // assume response: { transactions: Transaction[], totalCount: number }

    if (response == null) await router.push('/error');

    transactions.value = response;
    pagination.value = { ...p, rowsNumber: response.length };
  } catch (err) {
    await router.push('/error');
  } finally {
    loading.value = false;
  }
}

function generateReport() {
  const merchantId = (route.query.merchantId as string) || '';
  try {
    // const response = await getTransactionsService.getTransactions(1, 0, merchantId);
    const response = allTransactions.value;
    const transactionsData = response;
    if (!transactionsData || transactionsData.length === 0) {
      alert('No transactions to export.');
      return;
    }
    // Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(transactionsData);
    // Auto-size columns based on max length of data in each column
    const keys = Object.keys(transactionsData[0] || {});
    worksheet['!cols'] = keys.map((key) => {
      const maxLen = Math.max(
        key.length,
        ...transactionsData.map((row) =>
          row[key as keyof Transaction] ? String(row[key as keyof Transaction]).length : 0,
        ),
      );
      return { wch: maxLen + 2 }; // +2 for padding
    });
    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    // Generate and trigger download
    XLSX.writeFile(workbook, 'transactions_report.xlsx');
  } catch (err) {
    alert('Failed to generate report.');
    console.error(err);
  }
}

// initial load
onMounted(async () => {
  await onRequest({ pagination: pagination.value });
});
</script>
