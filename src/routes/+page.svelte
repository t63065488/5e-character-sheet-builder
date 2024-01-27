<script lang="ts">
  import FormContainer from "$lib/components/FormContainer.svelte";
  import { A } from "flowbite-svelte";
  import { GithubSolid } from "flowbite-svelte-icons";
</script>

<div class="flex flex-col h-screen justify-between">
  <div class="card w-full items-center justify-center flex">
    <header class="card-header">5e Character Sheet Builder</header>
  </div>

  <div class="w-full items-center justify-center flex">
    <div class="card w-9/12">
      <FormContainer />
    </div>
  </div>

  <div class="card w-full items-center justify-center flex">
    <footer class="card-footer">
      <A href="https://github.com/t63065488"
        ><GithubSolid class="pr-1" /> t63065488</A
      >
    </footer>
  </div>
</div>
