<template>
  <div class="page-container">
    <div class="page-header">
      <CustomButton type="" :icon="'arrow_back'" :showIcon="true" @click="backUserManagement">
        Back
      </CustomButton>

      <h1 class="title-header" style="margin-top: 20px">View User Management</h1>
      <p>
        Here’s the detailed profile of your merchant. <br />
        Make sure all information is accurate and up to date.
      </p>
    </div>

    <div class="page-table">
      <div class="col">
        <div v-for="field in fields" :key="field.key" class="q-col-gutter-sm q-mb-sm border-bottom">
          <div class="row border">
            <p class="col-3 font-semibold">{{ field.label }}:</p>
            <p class="col-9">{{ user?.[field.key] ?? 'N/A' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CustomButton from 'components/shared/CustomButton.vue';
import type { UserManagement } from 'src/types/userManagement';

export default defineComponent({
  name: 'ViewUserManagement',
  components: {
    CustomButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = ref<UserManagement | null>(null);

    if (route.query.user && typeof route.query.user === 'string') {
      try {
        user.value = JSON.parse(route.query.user);
        console.log('userManagement:', user.value);
        console.log('userManagement (raw):', toRaw(user.value));
      } catch (error) {
        console.error('Failed to parse userManagement:', error);
      }
    }

    const fields = [
      { key: 'id', label: 'ID' },
      { key: 'firstName', label: 'firstName' },
      { key: 'LastName', label: 'LastName' },
      { key: 'email', label: 'email' },
      { key: 'mobileNumber', label: 'mobileNumber' },
      { key: 'username', label: 'username' },
      { key: 'password', label: 'password' },
      { key: 'role', label: 'role' },
      { key: 'status', label: 'Status' },
    ] as { key: keyof UserManagement; label: string }[];

    const backUserManagement = () => {
      router.push('/user-management').catch((err) => {
        console.log('routing error: view userManagement', err);
      });
    };

    return {
      user,
      fields,
      backUserManagement,
    };
  },
});
</script>
