<script>
   export let messages
</script>


{#each messages as message, index}
   {#if index % 2 === 0 }
   <p class="text-red">
     {index}. {message}
   </p>
   {:else}
   <p>
     {index}. {message}
   </p>
   {/if}
{/each}

<style>
   .text-red{
      color: red;
   }
</style>