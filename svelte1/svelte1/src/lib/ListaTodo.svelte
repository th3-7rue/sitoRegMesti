<script>
  import TodoComponent from "./TodoComponent.svelte";

  export let todoList = [];
</script>

{#each todoList as todo}
  <TodoComponent {todo} />
{/each}
