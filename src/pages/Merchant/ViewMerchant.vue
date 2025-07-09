<template>
  <div class="page-container">
    <div class="page-header">
      <BaseButton type="" :icon="['fas', 'arrow-left']" :showIcon="true" @click="backMerchant">
        Back
      </BaseButton>

      <h1 class="title-header" style="margin-top: 20px">View Merchant</h1>
      <p>
        Here’s the detailed profile of your merchant. <br />
        Make sure all information is accurate and up to date.
      </p>
    </div>

    <div class="page-table">
      <CustomTabs>
        <template #business>
          <div class="col">
            <div
              v-for="field in fields"
              :key="field.key"
              class="q-col-gutter-sm q-mb-sm border-bottom"
            >
              <div class="row border">
                <p class="col-3 font-semibold">{{ field.label }}:</p>
                <p class="col-9">{{ merchant?.[field.key] ?? 'N/A' }}</p>
              </div>
            </div>
          </div>
        </template>

        <template #configurations>
          <div class="q-pa-sm">Configurations go here</div>
        </template>

        <template #bank>
          <div class="q-pa-sm">Bank details go here</div>
        </template>
      </CustomTabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from 'components/shared/BaseButton.vue';
import CustomTabs from 'components/shared/CustomTabs.vue';
import type { MerchantModel } from 'src/types/merchant';

export default defineComponent({
  name: 'ViewMerchantPage',
  components: {
    BaseButton,
    CustomTabs,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const merchant = ref<MerchantModel | null>(null);

    if (route.query.merchant && typeof route.query.merchant === 'string') {
      try {
        merchant.value = JSON.parse(route.query.merchant);
        console.log('Merchant:', merchant.value);
        console.log('Merchant (raw):', toRaw(merchant.value));
      } catch (error) {
        console.error('Failed to parse merchant:', error);
      }
    }

    const fields = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'code', label: 'Code' },
      { key: 'category', label: 'Category Code' },
      { key: 'network', label: 'Card Network' },
      { key: 'city', label: 'City' },
      { key: 'country', label: 'Country' },
      { key: 'lastUpdated', label: 'Last Updated' },
      { key: 'status', label: 'Status' },
    ] as { key: keyof MerchantModel; label: string }[];

    const backMerchant = () => {
      router.push('/merchant').catch((err) => {
        console.log('routing error: view merchant', err);
      });
    };

    return {
      merchant,
      fields,
      backMerchant,
    };
  },
});
</script>
