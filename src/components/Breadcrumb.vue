<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav></template
>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  nav {
    padding: 8px 0.7rem 0 0.7rem;
  }
}

nav {
  padding: 6px 0.7rem 0 0.7rem;
}
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 0;
  list-style: none;
  background-color: #2caae12b;
  border-radius: 0.25rem;
}
</style>
