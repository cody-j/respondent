<template>
  <div class="RespondentCard">
    <div class="top">
      <div class="left">
        <div class="user">
          <i class="fas fa-user" :class="respondent.gender === 'male' ? 'boy' : 'girl'"></i>
          <div class="card-item user-name">{{respondent.firstName}}</div>
        </div>
        <div class="job-title">{{respondent.jobTitle}}</div>
      </div>
      <div class="right">
        <div class="city">
          <i class="fas fa-map-marker-alt"></i>
          {{closestCity.city}}
        </div>
        <div class="distance">{{closestCity.distance}}km</div>
      </div>
    </div>
    <div class="bottom">
      <div
          v-for="(industry, i) in industries"
          :key="i"
          class="industry-tile"
          :class="desiredIndustries.includes(industry) && 'industry-tile-relevant'">{{industry}}</div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    respondent: Object
  },

  computed: {
    ...mapState({
      desiredIndustries: state => state.project.professionalIndustry,
    }),

    industries () {
      return this.respondent.industry.split(',')
    },

    closestCity () {
      const distances = this.respondent.distancesToCities
      const cities = Object.keys(distances)
      let closestCity = cities[0]
      for (const city of cities) {
        if (distances[city] < distances[closestCity]) {
          closestCity = city
        }
      }
      return {
        city: closestCity,
        distance: distances[closestCity].toFixed(1),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/_classes.scss';

.RespondentCard {
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  margin-bottom: 1.7rem;
  border: $content-block-border;
  padding: $content-padding__top $content-padding__horizontal $content-padding__bottom;
}
.user {
  display: flex;
  align-items: center;

  i {
    font-size: 2.6rem;
    margin-right: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .user-name {
    font-size: 2.0rem;
    font-weight: 300;
  }
}

.top {
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  flex-direction: column;

  .job-title {
    font-size: 1.4rem;
    font-weight: 600;
  }
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .city {
    font-size: 1.4rem;
    i {
      font-size: 1.2rem;
      margin-right: 0.4rem;
      color: $respondent-blue;
    }
  }
  .distance {
    font-size: 1.3rem;
    font-weight: 600;
  }
}

.bottom {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.boy {
  color: $respondent-blue;
}

.girl {
  color: #FFA3AF;
}
</style>
