<template>
  <div>
    <v-card-title class="d-table-cell pt-0">
      <div
        class="subtitle-1"
      >
        {{ $i18n.t('$l.case.riskLevel') + ':' }}
        <span
          class="font-weight-medium"
        >
          {{ $i18n.t(`$l.case.level${investigation.result.riskLevel}`) }}
        </span>
      </div>

      <div
        class="subtitle-1"
      >
        {{ $i18n.t('$l.case.resultExplanation') + ':' }}

        <span
          v-if="investigation.result.info"
          class="font-weight-medium"
        >
          {{ $i18n.t(JSON.parse(investigation.result.info).dialogInfo) }}
        </span>
      </div>

      <template
        v-if="investigation.result.userDefinedRiskLevel !== -1"
      >
        <div
          class="subtitle-1 mt-3"
        >
          {{ $i18n.t('$l.case.userDefinedRiskLevel') + ':' }}
          <span
            class="font-weight-medium"
          >
            {{ $i18n.t(`$l.case.level${investigation.result.userDefinedRiskLevel}`) }}
          </span>
        </div>

        <div
          v-if="investigation.result.userDefinedInfo"
          class="subtitle-1"
        >
          {{ $i18n.t('$l.case.resultExplanation') + ':' }}

          <span
            class="font-weight-medium"
          >
            {{ $i18n.t(JSON.parse(investigation.result.userDefinedInfo).dialogInfo) }}
          </span>
        </div>
      </template>
    </v-card-title>
  </div>
</template>

<script>
export default {
  name: 'InvResult',
  props: {
    investigation: {
      type: Object,
      required: true
    }
  }
}
</script>
