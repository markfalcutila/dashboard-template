<template>
  <div class="page-container">
    <div class="page-header">
      <BaseButton :icon="['fas', 'arrow-left']" :showIcon="true" @click="backMerchant()"
        >Back
      </BaseButton>

      <h1 class="title-header" style="margin-top: 20px">Add Merchant</h1>
      <p>
        Please provide and confirm your personal information <br />
        to set up your Payconnect account securely.
      </p>
    </div>

    <!-- forms -->
    <div class="form-container">
      <div class="form-group-container">
        <FormInput
          v-model="code"
          name="code"
          label="Code :"
          type="text"
          placeholder=""
          size="md"
          required
        />

        <FormInput v-model="name" name="name" label="Name :" type="text" placeholder="" size="md" />
      </div>

      <div class="form-group-container">
        <FormInput
          v-model="code"
          name="connect_timeout"
          label="Connect Timeout :"
          type="text"
          placeholder=""
          size="md"
        />

        <FormInput
          v-model="fail_url"
          name="fail_url"
          label="Fail Url :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>

      <div class="form-group-container">
        <FormInput
          v-model="last_updated"
          name="last_updated"
          label="Last Update :"
          type="text"
          placeholder=""
          size="md"
        />

        <FormInput
          v-model="merchant_logo_url"
          name="merchant_logo_url"
          label="Merchant Logo URL :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>
      <div class="form-group-container">
        <FormInput
          v-model="public_key"
          name="public_key"
          label="Public Key :"
          type="text"
          placeholder=""
          size="md"
        />

        <FormInput
          v-model="read_timeout"
          name="read_timeout"
          label="Read Timeout :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>
      <div class="form-group-container">
        <FormInput
          v-model="remarks"
          name="remarks"
          label="Remarks :"
          type="text"
          placeholder=""
          size="md"
        />

        <FormInput
          v-model="secret"
          name="secret"
          label="Secret :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>
      <div class="form-group-container">
        <FormInput
          v-model="secret"
          name="secret"
          label="Secret :"
          type="text"
          placeholder=""
          size="md"
        />

        <FormInput
          v-model="success_url"
          name="success_url"
          label="Success URL :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>

      <div class="form-group-container">
        <FormInput v-model="is_enable" name="is_enable" label="Is Enable :" type="checkbox" />

        <FormInput
          v-model="is_webhook_enabled"
          name="is_webhook_enabled"
          label="Is webhook enable :"
          type="checkbox"
        />
      </div>

      <div class="form-group-container">
        <FormInput
          v-model="webhook"
          name="webhook"
          label="Webhook  :"
          type="text"
          placeholder=""
          size="md"
        />
      </div>

      <div class="form-button-container">
        <span class="btn-desc"
          >Ensure your details are accurate for a seamless verification process.</span
        >
        <BaseButton
          type="primary"
          :icon="['fas', 'arrow-right-long']"
          :showIcon="true"
          :fullWidth="false"
        >
          Continue
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from 'components/shared/BaseButton.vue';
import FormInput from 'components/shared/FormInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MerchantPage',
  components: {
    // BaseSearch,
    BaseButton,
    // BaseToggle,
    FormInput,
  },
  data() {
    return {
      search: '',
      showActive: true,

      // FOR INPUT FORMS
      code: '',
      name: '',
      connect_timeout: '',
      fail_url: '',
      is_enable: false,
      is_webhook_enabled: false,
      last_updated: '',
      merchant_logo_url: '',
      public_key: '',
      read_timeout: '',
      remarks: '',
      secret: '',
      success_url: '',
      webhook: '',

      headers: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'code', label: 'Merchant Code' },
        { key: 'category', label: 'Category Code' },
        { key: 'network', label: 'Card Network' },
        { key: 'address', label: 'Address' },
        { key: 'lastUpdated', label: 'Last Updated' },
        { key: 'status', label: 'Status' },
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
