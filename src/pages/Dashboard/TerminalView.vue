<template>
  <div class="q-mb-md">
    <div class="text-h7 q-mb-xs">More from terminals</div>
    <br />
    <BaseTable :headers="headers" :items="terminals" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTable from 'components/shared/BaseTable.vue';

interface Terminals {
  amount: number;
  merchant: string;
  datePaid: string;
  transactionId: string;
  status: string;
}

export default defineComponent({
  name: 'TerminalView',
  components: {
    BaseTable,
  },
  data() {
    return {
      search: '',
      showActive: true,
      headers: [
        { key: 'amount', label: 'Amount' },
        { key: 'merchant', label: 'Merchant' },
        { key: 'datePaid', label: 'Date Paid' },
        { key: 'transactionId', label: 'Transaction ID' },
        { key: 'status', label: 'Status' },
      ],
      // default data
      terminals: [
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
        {
          amount: 1299,
          merchant: 'Philippine General Hospital',
          datePaid: 'May 25, 2024, 4:55 PM',
          transactionId: '#50093458431',
          status: 'Approved',
        },
      ] as Terminals[],
    };
  },
  methods: {
    goToAddMerchant() {
      void this.$router.push('/add-merchant');
    },
    editMerchant(item: unknown) {
      console.log('edit merchant:', item);
      // this.editMerchant(item as Merchant);
    },
    viewMerchant(item: unknown) {
      void this.$router.push({
        name: 'view-merchant',
        // params: { id: (item as Merchant).id },
        query: { merchant: JSON.stringify(item) }, // padding object data
      });
    },
  },
});
</script>
