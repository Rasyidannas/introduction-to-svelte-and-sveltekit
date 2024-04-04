<svelte:options immutable={true} />

<script>
    export let count = 1
</script>

<p>{count}</p>

{#if count < 5 }
    <!--this for recrusion it component self-->
    <svelte:self count={count+1} />
{/if}