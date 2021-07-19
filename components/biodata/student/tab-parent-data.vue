<template>
  <div>
    <rds-tabs :container="tabs.container" aria-label="navigation tab label">
      <rds-tab v-for="(item, index) in tabs.section" :key="index" :id="`tab-${index + 1}`" :label="item.label">
        <tab-parent-data-form :parent-type="item.parentType" />
      </rds-tab>
    </rds-tabs>
    <div class="form-buttons-w">
      <rds-button kind="primary" size="small" type="button"> Update</rds-button>
    </div>
  </div>
</template>
<script>
import { RdsTab, RdsTabs } from '@/.design-system/core/components/rds-tabs/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';
import TabParentDataForm from '~/components/biodata/student/tab-parent-data-form.vue';

export default {
  name: 'TabParentData',
  components: {
    RdsTab,
    RdsTabs,
    RdsButton,
    TabParentDataForm
  },
  data() {
    return {
      tabs: {
        container: false,
        selected: 0,
        section: [
          {
            label: 'Ayah',
            parentType: 'father'
          },
          {
            label: 'Ibu',
            parentType: 'mother'
          },
          {
            label: 'Wali',
            parentType: 'guardian'
          }
        ]
      }
    }
  },
}
</script>
