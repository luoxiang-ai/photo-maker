<template>
    <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
            <!-- <el-image class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/1.jpg" lazy alt="Style photo" /> -->
            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/1.jpg"
                alt="Style photo">
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                <h1 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Style photo - Quickly
                    generate styled photos</h1>
                <p class="mt-4 text-base text-gray-200">Upload a photo to customize a lifelike human image.</p>

                <div class="mt-8 lg:mt-12">
                    <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                        <el-button size="large" type="primary" @click="scrollTo">Quick start</el-button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <iframe src="https://tencentarc-photomaker.hf.space" scrolling="no" ref="iframe" class="h-[2400px] w-full"
        id="iframe"></iframe>

    <el-row>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Transform your photos with unique styles.</h2>
                        <p class="text-gray-500">We demonstrated the photo creation features under basic guidance for
                            PhotoMaker. Adjustment prompts are displayed beneath each image.</p>
                    </div>
                </template>

                <el-image lazy src="/website_recontext.jpg" alt="Style photo" />
            </el-card>
        </el-col>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Bring characters from artworks or old photos into
                            reality.</h2>
                        <p class="text-gray-500">By using artistic paintings, sculptures, or old photos of individuals as
                            input, our PhotoMaker can transport a person from the last century or even ancient times into
                            the present century, creating a 'photograph' for them. Adjustment prompts are displayed beneath
                            each image.</p>
                    </div>
                </template>

                <el-image lazy src="/website_oldphoto.jpg" alt="Style photo" />
            </el-card>
        </el-col>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Stylization.</h2>
                        <p class="text-gray-500">Our PhotoMaker not only generates realistic human photos but also stylizes
                            them while preserving ID attributes. Adjustment prompts are displayed in the first row.</p>
                    </div>
                </template>

                <el-image lazy src="/stylization.jpg" alt="Style photo" />
            </el-card>
        </el-col>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Alter age or gender.</h2>
                        <p class="text-gray-500">By simply replacing category terms, such as men and women, our method
                            achieves changes in gender and age while preserving the original identity.</p>
                    </div>
                </template>

                <el-image src="/change_age_gender.jpg" lazy alt="Style photo" />
            </el-card>
        </el-col>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Identity blending.</h2>
                        <p class="text-gray-500">If users provide images with different IDs as input, our PhotoMaker adeptly
                            integrates features from various IDs to form a new, blended identity.</p>
                    </div>
                </template>

                <el-image src="/identity_mixing.jpg" lazy alt="Style photo" />

                <p class="mt-4 mb-4 text-gray-500">For identity blending, our method can adjust the merging ratio by
                    controlling the percentage of identity images in the input image pool or through weighted prompts.</p>
                <p class="mt-4 mb-4 text-gray-500">We first demonstrate how our method customizes a new identity by
                    controlling the proportions of different IDs in the input image pool.</p>
                <el-image lazy src="/change_mix_ratio_image.jpg" alt="Style photo" />
                <p class="mt-4 mb-4 text-gray-500">Then, we multiply the embeddings corresponding to images associated with
                    specific IDs by a coefficient to control their influence in blending into the new identity.</p>
                <el-image lazy src="/change_mix_ratio_embed.jpg" alt="Style photo" />

            </el-card>
        </el-col>
        <el-col class="mt-8" :offset="3" :span="18">
            <el-card :body-style="{ padding: '6px' }">
                <template #header>
                    <div>
                        <h2 class="text-4xl pb-5 font-bold">Style photo - Comparison.</h2>
                        <p class="text-gray-500">Compared to other methods, our PhotoMaker excels in delivering high-quality
                            and diverse generation capabilities, editability, efficient inference, and strong ID fidelity.
                            More comparative results can be found in our research paper. We display conditioning prompts in
                            the second column.</p>
                    </div>
                </template>

                <el-image lazy src="/comparison_recontext.jpg" />
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Style photo - Generate stylized photos',
    ogTitle: 'Style photo - Generate stylized photos',
    description: 'Style Photo allows you to generate photos with different stylistic elements with just one click based on the images you upload. It not only produces realistic human photos but also stylizes them while preserving ID attributes.',
    ogDescription: 'Style Photo allows you to generate photos with different stylistic elements with just one click based on the images you upload. It not only produces realistic human photos but also stylizes them while preserving ID attributes.',
    ogImage: '/favicon.ico',
    twitterCard: '/favicon.ico'
});

const scrollTo = () => {
    const element = document.getElementById("iframe");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style></style>