<template>
  <div class="page-container">
    <div class="page-header">
      <div class="row d-flex align-center">
        <BaseButton
          type=""
          :icon="['fas', 'arrow-left']"
          :showIcon="true"
          @click="backTransactions"
        >
          Back
        </BaseButton>
        <div class="transaction-header">
          <span>Transaction</span>
          <span>></span>
          <span class="trx-id"> #{{ transaction?.transactionId }}</span>
        </div>
      </div>

      <div class="transcation-header-details">
        <!-- amount -->
        <div class="details-container">
          <span class="title">TOTAL AMOUNT</span>
          <span class="value">P {{ transaction?.amount }}</span>
        </div>

        <div class="details-container">
          <span class="title">ORIGINAL AMOUNT</span>
          <span class="value">P {{ transaction?.amount }}</span>
        </div>

        <div class="details-container">
          <span class="title">TRANSACTION ID</span>
          <span class="value">P {{ transaction?.transactionId }}</span>
        </div>

        <div class="details-container">
          <span class="title">DATE PAID</span>
          <span class="value">P {{ transaction?.datePaid }}</span>
        </div>

        <div class="details-container">
          <span class="title">PAYMENT NETWORK</span>
          <span class="value">P {{ transaction?.cardNetwork }}</span>
        </div>

        <div class="details-container">
          <span class="title">TRANSACTION TYPE</span>
          <span class="value">P {{ transaction?.transactionType }}</span>
        </div>

        <div class="details-container">
          <span class="title">STATUS</span>
          <span class="value">P {{ transaction?.status }}</span>
        </div>

        <div class="details-container">
          <span class="title">TOTAL AMOUNT</span>
          <span class="value">P {{ transaction?.amount }}</span>
        </div>
      </div>
    </div>

    <div class="border-vertical"></div>

    <div class="page-table">
      <div class="form-details">
        <div class="form-header">MERCHANT DETAILS:</div>
        <div class="row form-details-container" v-for="field in fields" :key="field.key">
          <span class="col-3 font-semibold form-title">{{ field.label }}:</span>
          <span class="col-9 form-value">{{ transaction?.[field.key] ?? 'N/A' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, toRaw } from 'vue';
import type { Transaction } from '../../types/transaction';
// import CustomTabs from 'src/components/shared/CustomTabs.vue';
import BaseButton from 'src/components/shared/BaseButton.vue';

export default defineComponent({
  name: 'ViewTransaction',
  components: {
    BaseButton,
    // CustomTabs,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const transaction = ref<Transaction | null>(null);

    if (route.query.transaction && typeof route.query.transaction === 'string') {
      try {
        transaction.value = JSON.parse(route.query.transaction);
        console.log('Transaction:', transaction.value);
        console.log('Transaction (raw):', toRaw(transaction.value));
      } catch (error) {
        console.error('Failed to parse transaction:', error);
      }
    }

    const fields = [
      { key: 'id', label: 'ID' },
      { key: 'transactionId', label: 'transactionId' },
      { key: 'amount', label: 'amount' },
      { key: 'status', label: 'status' },
      { key: 'datePaid', label: 'datePaid' },
      { key: 'cardNetwork', label: 'cardNetwork' },
      { key: 'transactionType', label: 'transactionType' },
    ] as { key: keyof Transaction; label: string }[];

    // back btn
    const backTransactions = () => {
      router.push('/transaction').catch((err) => {
        console.log('routing error: view merchant', err);
      });
    };

    return {
      transaction,
      fields,
      backTransactions,
    };
  },
});
</script>
