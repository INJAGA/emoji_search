<script lang="ts">
  import dataByEmoji from "unicode-emoji-json/data-by-emoji.json";
</script>

<div class="flex flex-wrap">
  {#each Object.entries(dataByEmoji) as [emoji, { name, group, skin_tone_support, unicode_version, ...rest }]}
    <div class="noto-color-emoji-regular text-3xl">
      {emoji}
    </div>
  {/each}
</div>
