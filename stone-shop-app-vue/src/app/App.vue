<template>
	<router-view />
</template>

<script setup lang="ts">
import router from "@/app/router";

console.log(router.options.routes);
</script>

<style scoped></style>
