<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="app-header">
      <q-toolbar class="q-px-none">
        <q-btn
          stretch
          flat
          icon="mdi-menu"
          text-color="black"
          @click="nav = !nav"
        />
        <q-btn
          stretch
          flat
          no-caps
          no-wrap
          text-color="black"
          to="/"
          class="app-logo"
        >
          <img
            class="app-logo__text"
            src="https://slides.zisu.dev/svg/text.svg"
          />
        </q-btn>
        <q-space />
        <q-btn
          stretch
          flat
          icon="mdi-github"
          text-color="black"
          target="_blank"
          href="https://github.com/thezzisu/kpi/tree/dev/packages/frontpage"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="nav"
      class="app-nav"
      side="left"
      show-if-above
      :width="220"
      :breakpoint="540"
    >
      <q-list>
        <q-item href="https://zisu.dev">
          <q-item-section avatar>
            <img src="https://slides.zisu.dev/svg/zisu.svg" width="24" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="row items-center">
              <img
                src="https://slides.zisu.dev/svg/text.svg"
                height="22"
                style="margin-bottom: -4px"
              />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="(item, i) of menu" :key="i" :to="item.to" exact>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 font-juliamo">{{
              item.label
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer elevated>
      <div class="row justify-center">
        <div>
          <code>&copy; thezzisu {{ new Date().getFullYear() }}</code>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nav = ref<boolean | undefined>(undefined)
const menu = [{ icon: 'mdi-home', label: 'Home', to: '/' }]
</script>

<style lang="scss">
.app-header {
  background-color: #e4eef3bf;
  backdrop-filter: blur(10px);
}

.app-logo {
  &__text {
    height: 32px;
    vertical-align: center;
    margin-bottom: -4px;
  }
}

.app-nav {
  background: #f2f2f2cc;
  backdrop-filter: blur(10px);
}
</style>
