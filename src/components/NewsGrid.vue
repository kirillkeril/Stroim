<template>
  <div class="news-grid">
    <ExtendedNewsCard title="Отключение горячей воды" text="С 1 по 6 августа этого года в жилом комплексе «Госножуйский» будет отключено горячее водоснабжение. Причина — проведение ремонтных работ рядом с комплексом.Надеемся на понимание" imageName="hot-water"/>
    <ExtendedNewsCard title="Газоснабжение" text="2 августа в 16:00 будет проведено техоблуживание газового оборудования. Просьба находиться дома и подготовить необходимые документы, иначе будет выписан штраф в размере 2 500 тысяч рублей." imageName="gaz"/>
    <ExtendedNewsCard title="Газоснабжение" text="2 августа в 16:00 будет проведено техоблуживание газового оборудования. Просьба находиться дома и подготовить необходимые документы, иначе будет выписан штраф в размере 2 500 тысяч рублей." imageName="gaz"/>
    <ExtendedNewsCard title="Отключение горячей воды" text="С 1 по 6 августа этого года в жилом комплексе «Госножуйский» будет отключено горячее водоснабжение. Причина — проведение ремонтных работ рядом с комплексом.Надеемся на понимание" imageName="hot-water"/>
  </div>
</template>

<script setup lang="ts">
import ExtendedNewsCard from "@/components/ExtendedNewsCard.vue";
</script>

<style scoped>
  .news-grid {
    container-type: inline-size;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
</style>
