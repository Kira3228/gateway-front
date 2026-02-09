<template>
  <Dialog
    :value="value"
    @input="emit('input', $event)"
    title="Настройки представления"
  >
    <template #content>
      <v-tabs vertical>
        <v-tab>Создать пресет</v-tab>
        <v-tab
          >Сохранённые <br />
          пресеты</v-tab
        >
        <v-tab-item>
          <HeaderTable />
        </v-tab-item>
        <v-tab-item>
          <v-tabs vertical>
            <v-tab>asdsad </v-tab>
            <v-tab>asdsad2 </v-tab>
            <v-tab-item>
              <HeaderTable />
            </v-tab-item>
            <v-tab-item>
              <HeaderTable />
            </v-tab-item>
          </v-tabs>
        </v-tab-item>
      </v-tabs>
    </template>
    <template #actions> </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Dialog } from "@/shared-ui/src/components/Dialog";
import { HeaderTable } from "@/widgets/HeaderTable/ui/";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();
</script>
