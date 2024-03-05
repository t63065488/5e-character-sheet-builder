<script lang="ts">
  import FormContainer from "$lib/components/FormContainer.svelte";
  import { A } from "flowbite-svelte";
  import { GithubSolid, AddressBookSolid } from "flowbite-svelte-icons";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<div class="flex flex-col h-screen justify-between">
  <AppBar>
    <svelte:fragment slot="lead"><AddressBookSolid /></svelte:fragment>
    5e Character Sheet Builder
    <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
  </AppBar>

  <div class="w-full items-center justify-center flex">
    <div class="card w-9/12">
      <FormContainer />
    </div>
  </div>

  <AppBar>
    <svelte:fragment>
      <A href="https://github.com/t63065488"
        ><GithubSolid class="pr-1" /> t63065488</A
      ></svelte:fragment
    >
  </AppBar>
</div>
