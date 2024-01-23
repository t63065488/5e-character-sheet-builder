<script lang="ts">
  let formSteps: any[] = [
    {
      title: "Character Information",
      description: "Name, race, etc...",
    },
    {
      title: "Ability Scores",
      description: "Points",
    },
  ];
</script>

<ol class="items-center w-full">
  {#each formSteps as step, i (i)}
    <li class="flex items-center">
      <span
        class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0"
      >
        {i}
      </span>
      <span>
        <h3 class="font-medium leading-tight">{step.title}</h3>
        <p class="text-sm">{step.description}</p>
      </span>
    </li>
  {/each}
</ol>
