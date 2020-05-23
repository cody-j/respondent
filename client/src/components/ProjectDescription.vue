<template>
  <div v-if="project" class="ProjectDescription">
    <div class="left-top">
      <div class="description">{{project.name}}</div>
      <div class="project-point"><i class="fas fa-users"></i> {{project.numberOfParticipants}} Respondents</div>
      <div class="project-point"><i class="fas fa-map-marker-alt"></i> {{project.cities.map(c => c.location.city).join(', ')}}</div>
      <div class="industry-container">
        <div
          v-for="(industry, i) in project.professionalIndustry"
          :key="i"
          class="industry-tile industry-tile-relevant">{{industry}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      project: state => state.project,
    }),
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/_classes.scss';

.ProjectDescription {
  font-size: 1.6rem;
  display: flex;
  // justify-content: space-between;
  border: $content-block-border;
  padding: $content-padding__top $content-padding__horizontal $content-padding__bottom;
  margin-bottom: 4rem;
  // flex-wrap: wrap;
}

.left-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  .description {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    font-weight: 600;
    // text-align: left;
  }

  .project-point {
    // text-align: left;
    font-size: 1.4rem;
    margin-top: 0.2rem;
    // display: flex;
    // justify-content: flex-start;
  }
}

.right-bottom {
  min-width: 40rem;
}

.industry-container {
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
