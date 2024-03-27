<script>
   let messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5', 'msg6']
   const msgPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(messages)
         reject('Could not load the messages')
      }, 2000)
   })
</script>

<!--Async Block-->
{#await msgPromise}
   <p>Loading...</p>
{:then messages}
   <ul>
      {#each messages as message}
         <li>{message}</li>
      {/each}
   </ul>
{:catch error}
   <p>{error}</p>
{/await}