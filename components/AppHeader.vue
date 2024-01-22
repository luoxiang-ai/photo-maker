<template>
    <el-menu :default-active="localePath('/')" router class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">

        <!-- logo -->
        <el-menu-item :index="localePath('/')">
            <img style="width: 60px" src="/favicon.ico" alt="Element logo" />
        </el-menu-item>


        <div class="flex-grow" />
        <el-menu-item>{{ $t('提交需求') }}</el-menu-item>
        <el-menu-item @click="drawer2 = true">
            <Icon class="text-2xl" name="material-symbols:translate" />
        </el-menu-item>
        <!-- <el-sub-menu index="多语言">
            <template #title>
                <Icon class="text-2xl" name="material-symbols:translate" />
            </template> -->
            <!-- <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                <el-menu-item>{{ locale.name }}</el-menu-item>
            </nuxt-link> -->
        <!-- </el-sub-menu> -->
    </el-menu>

    <el-drawer v-model="drawer2">
        <template #header>
            <p>{{$t('选择语言')}}</p>
        </template>
        <template #default>
            <el-row :gutter=3 class="overflowAuto">
                <el-col :span=8 :xs="24" v-for="locale in availableLocales" :key="locale.code" class="my-2">
                    <nuxt-link :to="switchLocalePath(locale.code)">
                        <el-button text>
                            {{ locale.name }}
                        </el-button>
                    </nuxt-link>
                </el-col>
            </el-row>
        </template>
    </el-drawer>
</template>
  



<script setup lang="ts">

// const { locale } = useI18n();
import { useI18n, useLocalePath } from '#imports';
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath();

const drawer2 = ref(false)

// const theme = ref<GlobalTheme | null>(null)

// const toggleTheme = (type: 'dark' | 'light') => {
//   theme.value = type === 'dark' ? darkTheme : null
// }

const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
    active.value = true
    placement.value = place
}

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value);
})


const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)

}
</script>


<style scoped>

</style>