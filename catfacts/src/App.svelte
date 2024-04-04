<script>
	import Child1 from "./Child1.svelte";
	import Child2 from "./Child2.svelte";
	let name = 'world';
</script>

<h1 class="text-light bg-dark">Hello {name}!</h1>
<Child1 />
<Child2 />

<svelte:component this={Child1} />