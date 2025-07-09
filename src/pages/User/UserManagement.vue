<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="title-header">User Page</h1>
      <p>
        View and manage all registered users, <br />
        including their account information and status.
      </p>
    </div>

    <div class="page-table">
      <div class="filter-container">
        <div class="filter-left">
          <div class="filter">
            <label class="filter-button">Filter(0)</label>
            <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
          </div>
          <CustomSearch v-model="search" />
        </div>

        <div class="filter-right">
          <div class="switch-button">
            <CustomToggle v-model="showActive" label="Show active accounts only" />
            <!-- <label>Show active accounts only</label> -->
          </div>
          <CustomButton
            type="primary"
            :icon="'add'"
            :showIcon="true"
            :fullWidth="false"
            @click="addUser()"
          >
            Add User
          </CustomButton>
        </div>
      </div>

      <q-table
        flat
        bordered
        class="custom-q-table q-mt-md"
        :rows="filteredUsers"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :rows-per-page-options="[5, 10, 25]"
        @request="onRequest({ pagination })"
      >
        <!-- Enabled Column Customization -->
        <template #body-cell-isEnabled="{ value }">
          <td>
            <div class="status-container">
              <span :class="['status-label', value ? 'Active' : 'Inactive']">
                {{ value ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </td>
        </template>

        <!-- Actions Column -->
        <template #body-cell-actions="{ row }">
          <td>
            <div>
              <CustomButton
                :icon="'edit'"
                type="secondary"
                :showIcon="true"
                :circle="true"
                :fullHeight="true"
                @click="editUser(row)"
              />

              <CustomButton
                :icon="'visibility'"
                type="primary"
                :showIcon="true"
                :circle="true"
                @click="viewUser(row)"
              />
            </div>
          </td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import CustomButton from 'components/shared/CustomButton.vue';
import CustomSearch from 'components/shared/CustomSearch.vue';
import CustomTable from 'components/shared/CustomTable.vue';
import CustomToggle from 'components/shared/CustomToggle.vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const users = ref<any[]>([
  {
    id: 1,
    email: 'alice@example.com',
    username: 'alice',
    firstName: 'Alice',
    lastName: 'Smith',
    isEnabled: true,
  },
  {
    id: 2,
    email: 'bob@example.com',
    username: 'bob',
    firstName: 'Bob',
    lastName: 'Johnson',
    isEnabled: false,
  },
  {
    id: 3,
    email: 'carol@example.com',
    username: 'carol',
    firstName: 'Carol',
    lastName: 'Williams',
    isEnabled: true,
  },
  {
    id: 4,
    email: 'dave@example.com',
    username: 'dave',
    firstName: 'Dave',
    lastName: 'Brown',
    isEnabled: true,
  },
  {
    id: 5,
    email: 'eve@example.com',
    username: 'eve',
    firstName: 'Eve',
    lastName: 'Davis',
    isEnabled: false,
  },
]);
const loading = ref(false);
const search = ref('');
const showActive = ref(true);

const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0,
  sortBy: 'username',
  descending: false,
});

// Filter inputs
const filters = ref({
  firstName: '',
  lastName: '',
  userName: '',
  merchantId: '',
  email: '',
  fullName: '',
});

onMounted(() => {
  onRequest({ pagination: pagination.value });
});

const columns = ref([
  { name: 'email', label: 'Email', field: 'email', sortable: true },
  { name: 'username', label: 'Username', field: 'username', sortable: true },
  { name: 'firstName', label: 'First Name', field: 'firstName', sortable: true },
  { name: 'lastName', label: 'Last Name', field: 'lastName', sortable: true },
  { name: 'isEnabled', label: 'Enabled', field: 'isEnabled', sortable: false },
  { name: 'actions', label: 'Actions', field: 'actions', sortable: false },
]);

// Request triggered by pagination or filters
function onRequest({ pagination: p }: { pagination: any }) {
  loading.value = true;
  try {
    // Simulate fetching data and pagination for local data
    const allUsers = users.value;
    let filtered = allUsers;

    // Apply filters if any (for demo, only fullName and userName)
    if (filters.value.fullName) {
      const term = filters.value.fullName.toLowerCase();
      filtered = filtered.filter((u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(term),
      );
    }
    if (filters.value.userName) {
      const term = filters.value.userName.toLowerCase();
      filtered = filtered.filter((u) => u.username.toLowerCase().includes(term));
    }
    if (filters.value.merchantId) {
      // If you have merchantId in your user data, filter here
    }

    // Sort
    if (p.sortBy) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[p.sortBy] || '';
        const bVal = b[p.sortBy] || '';
        if (aVal < bVal) return p.descending ? 1 : -1;
        if (aVal > bVal) return p.descending ? -1 : 1;
        return 0;
      });
    }

    // Pagination
    const start = (p.page - 1) * p.rowsPerPage;
    const end = start + p.rowsPerPage;
    const paged = filtered.slice(start, end);

    users.value = paged;
    pagination.value = { ...p, rowsNumber: filtered.length };
  } catch (err) {
    $q.notify({ type: 'negative', message: 'Failed to load users' });
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function addUser() {
  await router.push('add-user-management');
  console.log('add user');
}

async function editUser(item: any) {
  await router.push({
    name: 'edit-user',
    params: { id: item.id },
  });
}

async function viewUser(item: any) {
  // await router.push('view-user-management');
  console.log('view user id:', item.id);

  // pass the user id to view user page
  await router.push({
    name: 'view-user-management',
    params: { id: item.id },
  });
}

// for search
const filteredUsers = computed(() => {
  let list = users.value;

  // Show only active users if toggle is on
  if (showActive.value) {
    list = list.filter((users) => users.isEnabled === true);
  }
  if (search.value.trim()) {
    const searchTerm = search.value.toLowerCase();
    list = list.filter(
      (users) =>
        users.username.toLowerCase().includes(searchTerm) ||
        users.firstName.toLowerCase().includes(searchTerm) ||
        users.lastName.toLowerCase().includes(searchTerm) ||
        users.email.toLowerCase().includes(searchTerm),
    );
  }
  return list;
});
</script>
