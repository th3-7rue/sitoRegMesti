<script>
  import { todos } from "./store";
  let nuovoTodo;
  function AddTodo() {
    todos.update((old) => {
      old.push({ title: nuovoTodo, done: false });
      return old;
    });
  }
</script>
<div class="flex">
<input
  type="text"
  placeholder="Scrivi qui"
  class="input input-bordered w-full max-w-xs mr-1"
  bind:value={nuovoTodo}
/>
<button on:click={AddTodo} class="btn btn-primary">Aggiungi</button></div>
