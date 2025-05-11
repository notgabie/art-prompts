<script lang="ts">
	import { generatePrompt } from "$lib/generation/static/generation";

  let prompt = $state('')

function onClick() {
    const generatedPrompt = generatePrompt();
    prompt = generatedPrompt;
}

</script>

<h1 class="text-3xl">Art prompt generator</h1>
<p>Click the button to generate a random art prompt.</p>
<button onclick={onClick} class="border-1 p-2 rounded-md cursor-pointer">Generate</button>
<p>{prompt}</p>