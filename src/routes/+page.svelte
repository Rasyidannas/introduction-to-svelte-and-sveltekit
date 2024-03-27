<script>
   import Button from "../components/Button.svelte";
   import Messages from "../components/Messages.svelte";
   
   let messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5', 'msg6']
</script>

<Messages {messages} />