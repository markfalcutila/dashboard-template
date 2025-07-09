<!-- <template>
  <div>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Filter Table</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Status</div>
          <q-checkbox v-model="form.status.active" label="Active" />
          <q-checkbox v-model="form.status.inactive" label="Inactive" />
        </div>

        <div class="q-mb-md">
          <q-input filled v-model="form.dateFrom" label="Date From" type="date" />
        </div>

        <div>
          <q-input filled v-model="form.dateTo" label="Date To" type="date" />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" @click="onCancel" />
        <q-btn flat label="Apply" color="primary" @click="onApply" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'FilterDialog',
  emits: ['ok', 'hide'],
  setup(_, { emit }) {
    const form = ref({
      status: {
        active: false,
        inactive: false,
      },
      dateFrom: '',
      dateTo: '',
    });

    const onApply = () => {
      emit('ok', { ...form.value });
    };

    const onCancel = () => {
      emit('hide');
    };

    return {
      form,
      onApply,
      onCancel,
    };
  },
};
</script> -->
<template>
  <v-dialog v-model="isOpen" width="500">
    <v-card>
      <v-card-title>Filter Options</v-card-title>
      <v-card-text>Content here...</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterDialog',
  components: {},

  setup() {
    const isOpen = ref(false);

    function open() {
      isOpen.value = true;
    }

    function close() {
      isOpen.value = false;
    }

    defineExpose({ open, close });

    return {
      isOpen,
      open,
      close,
    };
  },
});
</script>
