<script>
   export let newMessage = "No click yet";

   let messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5', 'msg6']
   let selectedMsg = []

   $: msgPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(messages)
         reject('Could not load the messages')
      }, 2000)
   })

   $: messages = [...messages, newMessage]
</script>

<!--Async Block-->
{#await msgPromise}
   <p>Loading...</p>
{:then messages}
   {#each messages as msg }
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