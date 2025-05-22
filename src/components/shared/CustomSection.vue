<!-- <template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(field, i) in fields" :key="i">
        <strong>{{ field.label }}:</strong> {{ field.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Section',
  props: {
    title: { type: String, required: true },
    fields: { type: Array as PropType<{ label: string; value: string }[]>, required: true },
  },
});
</script> -->
