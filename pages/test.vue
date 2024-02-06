<template>
    <!-- <main>
        <ContentDoc />
    </main> -->

    <h1>测试啊</h1>

    <el-button @click="test">按钮我</el-button>
    <p>{{da}}</p>
</template>

<script lang="ts" setup>
import Replicate from "replicate";

console.log("抢答和");

const da = ref('werwrwr');




// const output = await replicate.run(
//     "tencentarc/photomaker-style:467d062309da518648ba89d226490e02b8ed09b5abc15026e54e31c5a8cd0769",
//     {
//         input: {
//             input_image: "https://replicate.delivery/pbxt/KFRveCbE71qFTQGSF509CXYC16qB1bcZmAWq8O172ael04Ga/lenna.jpg"
//         }
//     }
// );


const test = async () =>
{
    console.log("你好");
    const datas = await $fetch('/api/photo-maker', {
    method: 'POST',
    });
    da.value = datas;
    console.log(datas); 
}

const handleButtonClick = async () => {
    await test();
}


</script>

<style></style>