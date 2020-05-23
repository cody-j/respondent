<template>
  <div class="home">
    <ProjectDescription />
    <div v-if="respondents">
      <RespondentCard v-for="(respondent, i) in respondents" :key="i" :respondent="respondent"/>
      <PaginateButton />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectDescription from '@/components/ProjectDescription.vue'
import RespondentCard from '@/components/RespondentCard.vue'
import PaginateButton from '@/components/PaginateButton.vue'

export default {
  name: 'Home',

  components: {
    ProjectDescription,
    RespondentCard,
    PaginateButton,
  },

  created () {
    this.$store.dispatch('fetchProject')
    this.$store.dispatch('fetchRespondents')
  },

  computed: {
    ...mapState({
      respondents: state => state.respondents
    })
  },
}
</script>
