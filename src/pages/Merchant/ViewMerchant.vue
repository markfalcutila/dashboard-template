<template>
  <div class="page-container">
    <div class="page-header">
      <BaseButton type="" :icon="['fas', 'arrow-left']" :showIcon="true" @click="backMerchant()"
        >Back
      </BaseButton>

      <h1 class="title-header" style="margin-top: 20px">View Merchant</h1>
      <p>
        Please provide and confirm your personal information <br />
        to set up your Payconnect account securely.
      </p>
    </div>

    <div class="page-table">
      <CustomTabs>
        <template #business>
          <div class="q-pa-sm">
            <Section title="Basic details" :fields="basicDetails" />
            <Section title="Contact details" :fields="contactDetails" />
            <Section title="Public details" :fields="publicDetails" />
          </div>
        </template>

        <template #configurations>
          <div class="q-pa-sm">
            <!-- Your configuration content here -->
            Configurations go here
          </div>
        </template>

        <template #bank>
          <div class="q-pa-sm">
            <!-- Your bank content here -->
            Bank details go here
          </div>
        </template>
      </CustomTabs>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from 'components/shared/BaseButton.vue';
import { defineComponent } from 'vue';
import CustomTabs from 'src/components/shared/CustomTabs.vue';

export default defineComponent({
  name: 'ViewMerchantPage',
  components: {
    // BaseSearch,
    BaseButton,
    // BaseToggle,
    CustomTabs,
  },
  data() {
    return {
      search: '',
      showActive: true,

      basicDetails: [
        { label: 'Merchant name', value: '7 - Eleven Davao City' },
        { label: 'MCC', value: '5499 - Miscellaneous Food Stores' },
        { label: 'Location', value: 'GF, Green Banana Hotel, Pryce Business Park...' },
        { label: 'Other information provided', value: 'Client number, TIN' },
      ],

      contactDetails: [
        { label: 'Principal', value: 'Juan Dela Cruz' },
        { label: 'Secondary', value: 'Maria Santos' },
        { label: 'Other information provided', value: 'Email, Mobile no., Additional contacts' },
      ],

      publicDetails: [
        { label: 'Support phone number', value: '(02) 1234-5678' },
        { label: 'URL', value: 'www.7eleven.ph/davao' },
        { label: 'Email', value: 'davao@7eleven.ph' },
        { label: 'Other information provided', value: 'Footers' },
      ],
    };
  },
  methods: {
    backMerchant() {
      void this.$router.push('/merchant');
    },
  },
});
</script>
