import Replicate from "replicate";

export default defineEventHandler(async (event) => {
    const replicate = new Replicate({
        auth: 'r8_LlZgsuP4UpgmOeFqwIZBeDgHEeZIbjs3ZUuhP',
    });
    const output = await replicate.run("tencentarc/photomaker-style:467d062309da518648ba89d226490e02b8ed09b5abc15026e54e31c5a8cd0769",
        {
            input: {
                prompt: "A girl img riding dragon over a whimsical castle, 3d CGI, art by Pixar, half-body, screenshot from animation",
                num_steps: 50,
                style_name: "(No style)",
                input_image: "https://fileapi.onlinetoolai.com/wwwroot/111782c2103953144a6f20ec1efc5c8a.jpg",
                num_outputs: 2,
                guidance_scale: 5,
                negative_prompt: "realistic, photo-realistic, worst quality, greyscale, bad anatomy, bad hands, error, text", style_strength_ratio: 35
            }
        });

    return output;
})
