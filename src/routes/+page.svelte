<script>
   import { setContext } from "svelte";
   import Button from "../components/Button.svelte";
   import Messages from "../components/Messages.svelte";

   //this for set Context API
   setContext('exclamation', '!');
</script>

<!--on:addMsg will listed dispatcher-->
<Button />
<Messages />