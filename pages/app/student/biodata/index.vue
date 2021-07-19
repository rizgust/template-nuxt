<template>
  <div class="content-box">
    <div class="element-wrapper">
      <div class="element-box">
        <!-- Profile Section  -->
        <div class="users-list-w">
          <div class="user-w">
            <div class="user-avatar-w">
              <div class="user-avatar">
                <img alt="" src="https://demo.class.id/avatar/1/ac/ac1dc7df.png">
              </div>
            </div>
            <div class="user-name">
              <h4 class="user-title">
                TJUT AQILA ZAHWA
              </h4>
              <div class="user-role">
                NIS : -
              </div>
              <div class="user-role">
                NISN : -
              </div>
              <div class="user-role">
                Rombel : -
              </div>
            </div>
          </div>
        </div>
        <!-- End of Profile Section -->

        <!-- Tabs Section -->
        <div class="tabs-section">
          <rds-tabs :container="tabs.container" @tab-selected="actionSelected" aria-label="navigation tab label">
            <rds-tab v-for="(item, index) in tabs.section" :key="index" :id="`tab-${index + 1}`" :label="item.label">
              <component v-bind:is="item.content"></component>
            </rds-tab>
          </rds-tabs>
        </div>
        <!-- End of Tabs Section -->
      </div>
    </div>
  </div>
</template>


<script>
const ROLE_TEACHER = 'teacher';
const ROLE_STUDENT = 'student';

import { RdsTab, RdsTabs } from '@/.design-system/core/components/rds-tabs/';
import { TabDevelopment, TabEducation, TabHobby, TabMedicalHistory, TabParentData, TabPersonalData, TabResidence } from '~/components/biodata/';

export default {
  components: {
    RdsTabs,
    RdsTab,
    TabDevelopment,
    TabEducation,
    TabHobby,
    TabMedicalHistory,
    TabParentData,
    TabPersonalData,
    TabResidence
  },
  data() {
    return {
      tabs: {
        container: false,
        selected: 0,
        section: [
          {
            label: 'Data Pribadi',
            role: [ROLE_STUDENT],
            content: TabPersonalData
          },
          {
            label: 'Tempat Tinggal',
            role: [ROLE_STUDENT],
            content: TabResidence
          },
          {
            label: 'Riwayat Kesehatan',
            role: [ROLE_STUDENT],
            content: TabMedicalHistory
          },
          {
            label: 'Riwayat Pendidikan',
            role: [ROLE_STUDENT],
            content: TabEducation
          },
          {
            label: 'Orang Tua / Wali',
            role: [ROLE_STUDENT],
            content: TabParentData
          },
          {
            label: 'Kegemaran',
            role: [ROLE_STUDENT],
            content: TabHobby
          },
          {
            label: 'Perkembangan',
            role: [ROLE_STUDENT],
            content: TabDevelopment
          }
        ]
      }
    }
  },
  methods: {
    actionSelected() {
      console.warn('tes');
    }
  }
  
};
</script>

<style scoped>
.users-list-w .user-w {
  border-bottom: none;
}

.users-list-w .user-w .user-avatar-w {
  width: 96px;
}

.users-list-w .user-w .user-role {
  margin: 4px 0;
  color: #999;
  font-size: 0.81rem;
}
</style>