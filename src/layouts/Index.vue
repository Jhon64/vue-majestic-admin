<template>
  <div class="container-scroller">
    <Header></Header>
    <div class="container-fluid page-body-wrapper">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <Breadcrumb></Breadcrumb>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Breadcrumb from "../components/Breadcrumb";
export default {
  components: { Header, Sidebar, Footer, Breadcrumb },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .content-wrapper {
    padding: 0.7rem 0.5rem !important;
  }
}
.main-panel {
  background: #f3f3f3 !important;
}
.content-wrapper {
  background: #f3f3f3;
  padding: 0.8rem 1rem;
  width: 100%;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
</style>
