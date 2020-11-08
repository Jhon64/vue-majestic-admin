<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li v-for="(menu, i) in nav" :key="i" class="nav-item">
        <router-link
          v-if="menu.children == undefined"
          :to="menu.link"
          data-toggle="collapse"
          aria-expanded="false"
          :aria-controls="menu.link"
          class="nav-link"
          :style="{ background: menu.color, color: menu.textColor }"
          ><i :class="menu.icon"></i>
          <span class="menu-title">{{ menu.name }} </span>
          <i class="menu-arrow" v-if="menu.children != undefined"></i>
        </router-link>
        <a
          v-if="menu.children != undefined"
          :href="menu.link"
          data-toggle="collapse"
          aria-expanded="false"
          :aria-controls="menu.link"
          class="nav-link"
          :style="{ background: menu.color, color: menu.textColor }"
        >
          <i :class="menu.icon"></i>
          <span class="menu-title">{{ menu.name }}</span>
          <i
            class="menu-arrow"
            :style="{ color: menu.textColor }"
            v-if="menu.children != undefined"
          ></i>
        </a>
        <div
          class="collapse"
          :id="id(menu.link)"
          v-if="menu.children != undefined"
          :style="{
            background: menu.color,
            color: menu.textColor,
          }"
          style="opacity: 0.5;
            filter: alpha((opacity = 50))"
        >
          <ul
            class="nav flex-column sub-menu list-group"
            style="list-style:none"
          >
            <li
              class="nav-item list-group-item"
              v-for="(submenu, j) in menu.children"
              :key="j"
              :style="{
                background: submenu.color,
                'border-top': '.01rem solid ' + submenu.textColor,
              }"
            >
              <router-link
                class="nav-link"
                :to="submenu.link"
                :style="{ color: submenu.textColor }"
              >
                <span class="menu-title">
                  {{ submenu.name }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Nav from "../_nav";
@Component
export default class SidebarLayout extends Vue {
  nav = Nav;

  id(id: string): string {
    return id.replace("#", "");
  }
}
</script>

<style lang="scss" scoped>
.sidebar .nav.sub-menu .nav-item::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: transparent !important;
  margin-top: 15px;
}
</style>
