<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte'
    let text = 'Child Showing'

    onMount(() => console.log('mounted')) //this running after component rendered in the DOM, should be used for async methods
    onDestroy(() => console.log('destroyed')) //this running after DOM element is destroyed

    beforeUpdate(() => console.log("before update")) //this will run before component data update
    afterUpdate(() => console.log("after update")) //this will run after component data update
</script>

<p>{text}</p>
<input bind:value={text}>