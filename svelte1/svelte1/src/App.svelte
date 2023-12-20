<script>
  import AddForm from "./lib/AddForm.svelte";
  import ListaTodo from "./lib/ListaTodo.svelte";
  import TodoCounter from "./lib/TodoCounter.svelte";
  import { todos } from "./lib/store";
</script>

<main class="flex place-content-center w-screen">
  <div
    class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 w-full"
  >
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white w-full"
    >
      TODO List App
    </h1>
    <TodoCounter />
    <AddForm />
    <ListaTodo todoList={$todos} />
  </div>
</main>

<style>
</style>
