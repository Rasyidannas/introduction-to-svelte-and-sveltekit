<script>
   let messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5', 'msg6']
</script>

// Conditional Render
{#if messages.length > 5}
   <p>
      Too many messages!   
   </p>
{:else if messages.length > 0}
   <p>
      {messages.length} messages
   </p>

{:else}
   <p>
      No messages   
   </p>
{/if}

// Looping Render
{#each messages as message, index}
   <p>
     {index}. {message}
   </p>
{/each}