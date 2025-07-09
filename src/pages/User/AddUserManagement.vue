<template>
  <div class="page-container">
    <div class="page-header">
      <CustomButton type="" :icon="'arrow_back'" :showIcon="true" @click="backMerchant()"
        >Back
      </CustomButton>

      <h1 class="title-header" style="margin-top: 20px">Add User Management</h1>
      <p>
        Please provide and confirm your personal information <br />
        to set up your Payconnect account securely.
      </p>
    </div>

    <!-- forms -->
    <div class="form-container">
      <div class="form-group-container">
        <FormInput
          v-model="id"
          name="id"
          label="id :"
          type="text"
          placeholder=""
          size="md"
          required
        />

        <FormInput
          v-model="username"
          name="username"
          label="username :"
          type="text"
          placeholder=""
          size="md"
          required
        />
      </div>

      <div class="form-group-container">
        <FormInput
          v-model="firstName"
          name="firstName"
          label="firstName :"
          type="text"
          placeholder=""
          size="md"
          required
        />
        <FormInput
          v-model="LastName"
          name="LastName"
          label="LastName :"
          type="text"
          placeholder=""
          size="md"
          required
        />
      </div>
      <div class="form-group-container">
        <FormInput
          v-model="email"
          name="email"
          label="email  :"
          type="email"
          placeholder=""
          size="md"
          required
        />

        <FormInput
          v-model="password"
          name="password"
          label="password:"
          type="password"
          placeholder=""
          size="md"
          required
        />
      </div>

      <div class="form-group-container">
        <FormInput
          v-model="mobileNumber"
          name="mobileNumber"
          label="Mobile No :"
          type="text"
          placeholder=""
          size="md"
          required
        />

        <FormInput
          v-model="role"
          name="role"
          label="role:"
          type="role"
          placeholder=""
          size="md"
          required
        />
      </div>

      <div class="form-group-container">
        <FormInput v-model="status" name="status" label="isActive :" type="checkbox" />
      </div>

      <div class="form-button-container">
        <span class="btn-desc"
          >Ensure your details are accurate for a seamless verification process.</span
        >
        <CustomButton
          type="primary"
          :icon="'add'"
          :showIcon="false"
          :fullWidth="false"
          @click="onclick_continue()"
        >
          Continue
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CustomButton from 'components/shared/CustomButton.vue';
import FormInput from 'components/shared/FormInput.vue';
import { MessageBoxType, MessageType } from 'src/enums/message-box.enums';
import { MessageBoxService } from 'src/services/message-box.service';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddUserManagement',
  components: {
    CustomButton,
    FormInput,
  },
  data() {
    return {
      search: '',
      showActive: true,

      // FOR INPUT FORMS
      id: '',
      firstName: '',
      LastName: '',
      email: '',
      mobileNumber: '',
      username: '',
      password: '',
      role: '',
      status: '',
    };
  },
  methods: {
    backMerchant() {
      void this.$router.push('/user-management');
    },
    async onclick_continue() {
      // SAMPLE USE OF MESSAGE BOX SERVICE
      await MessageBoxService.messageBox(
        'success',
        'succssfully added',
        MessageType.SUCCESS,
        MessageBoxType.OK,
      );
    },
  },
});
</script>
