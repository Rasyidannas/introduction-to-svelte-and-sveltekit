<script>
   import msgStore from '../store/msgStore.js'

   let selectedMsg = []

   $: msgPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
         // using $ prefix is for subscribe or listen to the store
         resolve($msgStore)
         reject('Could not load the messages')
      }, 2000)
   })
</script>

<!--Async Block-->
{#await msgPromise}
   <p>Loading...</p>
{:then messages}
   {#each $msgStore as msg }
      <label>
         <input type="checkbox" bind:group={selectedMsg} value={msg} /> 
         {msg}
      </label>
   {/each }
   <p>
      {selectedMsg.length} messages selected
   </p>
{:catch error}
   <p>{error}</p>
{/await}