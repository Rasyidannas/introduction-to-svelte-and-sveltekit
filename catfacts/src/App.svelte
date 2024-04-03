<script>
	import Child from "./Child.svelte";
	let pressed = false
</script>

<button on:click={() => pressed = !pressed}>Child Togller</button>
{#if pressed}
	<Child/>
{:else}
	<p>App Showing!</p>
{/if}