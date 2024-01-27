<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import PointBuy from "./PointBuy.svelte";
  import RandomScores from "./RandomScores.svelte";

  let currentTab: number = 0;
</script>

<div>
  <TabGroup justify="justify-center">
    <!-- Tab Definitions -->
    <Tab bind:group={currentTab} name="tab1" value={0}>
      <span>Point Buy</span>
    </Tab>
    <Tab bind:group={currentTab} name="tab2" value={1}>
      <span>Random</span>
    </Tab>
    <!-- Tab Content Definitions -->
    <svelte:fragment slot="panel">
      {#if currentTab === 0}
        <PointBuy />
      {:else if currentTab === 1}
        <RandomScores />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
