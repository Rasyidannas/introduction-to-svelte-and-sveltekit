<script>
   export let newMessage = "No click yet";
   
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
   <p>{messages} {newMessage}</p>
{:catch error}
   <p>{error}</p>
{/await}