<template>
  <div class="home">
    <HeaderComp/>
    <About/>
    <Services/>
    <ProcessManagement/>
    <TeamExpert/>
    <LatestNews/>
    <NewsLetter/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import LatestNews from '@/components/LatestNews.vue';
import NewsLetter from '@/components/NewsLetter.vue';
import TeamExpert from '@/components/TeamExpert.vue';
import ProcessManagement from '@/components/ProcessManagement.vue';
export default {
    name: "HomeView",
    components: { HeaderComp, FooterComp, About, Services, LatestNews, NewsLetter, TeamExpert, ProcessManagement }
}
</script>
