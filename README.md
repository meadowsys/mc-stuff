# mc stuff

A list of minecraft mods and resource packs that I use when I play minecraft. Most, but not all, are open sourced.

## mods

I use and highly recommend the [fabric modding platform](https://fabricmc.net/).

See [key](#key) for information on what i mean in the version columns.

| mod name              | environment          | description                                                                                   | MC 1.16.5 | MC 1.17.1 | MC 1.18                             | official download link                                             | repo link                            |
| --------------------- | -------------------- | --------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------- | ------------------------------------------------------------------ | ------------------------------------ |
| Advancements Enlarger | client               | makes the advancements menu bigger (vanilla is a smol fixed size)                             | yes       | yes       | no                                  | [curseforge][Advancements Enlarger:curseforge]                     | [github][Advancements Enlarger:repo] |
| Chat up!              | client               | raises the chat up by 10 pixels to improve visibility of armor hunches                        | yes       | yes       | yes(?)                              | [github][Chat up!:github]                                          | [github][Chat up!:repo]              |
| Colormatic            | client               | implements MCPatcher custom colors mod, compatible with Optifine custom colors                | yes       | yes       | dev (maybe)                         | [github][Colormatic:github], [modrinth][Colormatic:modrinth]       | [github][Colormatic:repo]            |
| Fabric API            | client and/or server | library mod                                                                                   | yes       | yes       | yes(?)                              | [github][Fabric API:github], [modrinth][Fabric API:modrinth]       | [github][Fabric API:repo]            |
| Fabric Carpet         | client and/or server | technical control utility mod                                                                 | yes       | yes       | yes(?)                              | [github][Fabric Carpet:github]                                     | [github][Fabric Carpet:repo]         |
| fabrishot             | client               | take high-resolution screenshots                                                              | yes       | yes       | yes(?)                              | [modrinth][fabrishot:modrinth]                                     | [github][fabrishot:repo]             |
| HDSkins               | client               | high resolution skins                                                                         | yes       | yes       | [yes(?)][HDSkins:build-1.18]        | [github][HDSkins:github], [website][HDSkins:website]               | [github][HDSkins:repo]               |
| Hydrogen              | client and/or server | things of which are too dangerous to put in Lithium                                           | yes       | yes       | no                                  | [github][Hydrogen:github]                                          | [github][Hydrogen:repo]              |
| Indium                | client               | addon for Sodium that implements Fabric Rendering API (does nothing on its own)               | yes       | yes       | unstable(?)                         | [github][Indium:github], [modrinth][Indium:modrinth]               | [github][Indium:repo]                |
| LambDynamicLights     | client               | dynamic lights mod                                                                            | yes       | yes       | no                                  | [github][LambDynamicLights:github]                                 | [github][LambDynamicLights:repo]     |
| Litematica            | client               | schematic mod                                                                                 | yes       | yes       | no                                  | [curseforge][Litematica:curseforge]                                | [github][Litematica:repo]            |
| Lithium               | client and/or server | general performance optimisation mod that is designed to not break things                     | yes       | yes       | no                                  | [github][Lithium:github], [modrinth][Lithium:modrinth]             | [github][Lithium:repo]               |
| malilib               | client and/or server | library mod                                                                                   | yes       | yes       | yes(?)                              | [curseforge][malilib:curseforge]                                   | [github][malilib:repo]               |
| MineLittlePony        | client               | turns players and mobs into ponies                                                            | yes       | yes       | [yes(?)][MineLittlePony:build-1.18] | [github][MineLittlePony:github], [website][MineLittlePony:website] | [github][MineLittlePony:repo]        |
| MiniHUD               | client               | mini heads-up display mod                                                                     | yes       | yes       | no                                  | [curseforge][MiniHUD:curseforge]                                   | [github][MiniHUD:repo]               |
| ModMenu               | client               | adds a menu for viewing a list of installed mods                                              | yes       | yes       | maybe(?)                            | [github][ModMenu:github], [modrinth][ModMenu:modrinth]             | [github][ModMenu:repo]               |
| Ok Zoomer             | client               | highly configurable zoom key                                                                  | yes       | yes       | no                                  | [github][Ok Zoomer:github], [modrinth][Ok Zoomer:modrinth]         | [github][Ok Zoomer:repo]             |
| Physics Mod           | client               | it does physics                                                                               | yes       | yes       | yes(?)                              | [website][Physics Mod:website]                                     | closed source >:c                    |
| Phosphor              | client and/or server | lighting engine optimisation mod                                                              | yes       | yes(?)    | no                                  | [github][Phosphor:github]                                          | [github][Phosphor:repo]              |
| Presence Footsteps    | client               | overcomplicated footsteps enhancement mod                                                     | yes       | yes       | yes(?)                              | [github][Presence Footsteps:github]                                | [github][Presence Footsteps:repo]    |
| ReplayMod             | client               | record game sessions and replay them afterwards from any perspective                          | yes       | yes       | no                                  | [website][ReplayMod:website]                                       | [github][ReplayMod:repo]             |
| Shulker Box Tooltip   | client               | see a preview window of shulker box contents without placing it down                          | yes       | yes       | maybe(?)                            | [github][Shulker Box Tooltip:github]                               | [github][Shulker Box Tooltip:repo]   |
| Sodium                | client and/or server | optimisation mod that improves frame rates, reduces micro-stutter, and fixes graphical issues | yes       | yes       | unstable(?)                         | [github][Sodium:github], [modrinth][Sodium:modrinth]               | [github][Sodium:repo]                |
| TellMe                | client and/or server | small informational mod, provides technical type information about the game                   | yes       | yes       | no                                  | [curseforge][TellMe:curseforge]                                    | [github][TellMe:repo]                |
| Tweakeroo             | client               | adds a selection of miscellaneous, configurable, client-side tweaks to the game               | yes       | yes       | no                                  | [curseforge][Tweakeroo:curseforge]                                 | [github][Tweakeroo:repo]             |
| Simple Voice Chat     | client and/or server | adds a proximity voice chat                                                                   | yes       | yes       | yes(?)                              | [curseforge][Simple Voice Chat:curseforge]                         | [github][Simple Voice Chat:repo]     |
| Void Fog              | client               | brings back the void fog                                                                      | yes       | yes       | yes(?)                              | [github][Void Fog:github]                                          | [github][Void Fog:repo]              |

<!-- am making a note of this here https://github.com/jellysquid3/cadmium-fabric
     although it hasn't been worked on since late 2020, still on 1.15.2 -->

## resource packs

| pack name        | description                                                                                        | MC 1.16.5 | MC 1.17.x | MC 1.18    | official download link            | repo link                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | --------- | --------- | ---------- | --------------------------------- | ------------------------------- |
| Love & Tolerance | resource pack inspired by the visual art style and design of _My Little Pony: Friendship is Magic_ | yes       | yes       | partial(?) | [github][Love & Tolerance:github] | [github][Love & Tolerance:repo] |
| turtlelang       | provides a ingame language called turtlelang, explore at your own risk!                            | yes       | partial   | partial(?) | [github][turtlelang:github]       | [github][turtlelang:repo]       |

## key

| thing       | meaning                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------ |
| yes         | stable version of the mod is released for this version of MC                                     |
| no          | not released for this version of MC                                                              |
| maybe       | released for a different version of MC, but still *might* be compatible with this version        |
| partial     | (resource packs) released for a different version of MC, but still at least partially compatile  |
| dev         | unreleased version available on development trunk                                                |
| dev (maybe) | unreleased version available on development trunk, but for a different version of MC (see maybe) |
| unstable    | prerelease version is released                                                                   |
| ?           | I have not tested it *yet*, cannot personally verify that it works                               |

<!-- download sources in order of preference. github, website, modrinth, curseforge -->

<!-- MODS -->

[Advancements Enlarger:repo]: https://github.com/shedaniel/advancements-enlarger
[Advancements Enlarger:curseforge]: https://www.curseforge.com/minecraft/mc-mods/advancements-enlarger/files

[Chat up!:repo]: https://github.com/gnembon/chat-up
[Chat up!:github]: https://github.com/gnembon/chat-up/releases

[Colormatic:repo]: https://github.com/kvverti/colormatic
[Colormatic:github]: https://github.com/kvverti/colormatic/releases
[Colormatic:modrinth]: https://modrinth.com/mod/colormatic

[Fabric API:repo]: https://github.com/FabricMC/fabric
[Fabric API:github]: https://github.com/FabricMC/fabric/releases
[Fabric API:modrinth]: https://modrinth.com/mod/fabric-api

[Fabric Carpet:repo]: https://github.com/gnembon/fabric-carpet/
[Fabric Carpet:github]: https://github.com/gnembon/fabric-carpet/releases

[fabrishot:repo]: https://github.com/ramidzkh/fabrishot
[fabrishot:modrinth]: https://modrinth.com/mod/fabrishot

[HDSkins:repo]: https://github.com/minelittlepony/hdskins/
[HDSkins:github]: https://github.com/MineLittlePony/HDSkins/releases
[HDSkins:website]: https://minelittlepony-mod.com/
[HDSkins:build-1.18]: mods/1.18/1.18-hdskins-6.5.0.jar

[Hydrogen:repo]: https://github.com/CaffeineMC/hydrogen-fabric
[Hydrogen:github]: https://github.com/CaffeineMC/hydrogen-fabric/releases

[Indium:repo]: https://github.com/comp500/Indium
[Indium:github]: https://github.com/comp500/Indium/releases
[Indium:modrinth]: https://modrinth.com/mod/indium

[LambDynamicLights:repo]: https://github.com/LambdAurora/LambDynamicLights/
[LambDynamicLights:github]: https://github.com/LambdAurora/LambDynamicLights/releases

[Litematica:repo]: https://github.com/maruohon/litematica
[Litematica:curseforge]: https://www.curseforge.com/minecraft/mc-mods/litematica/files

[Lithium:repo]: https://github.com/CaffeineMC/lithium-fabric
[Lithium:github]: https://github.com/CaffeineMC/lithium-fabric/releases
[Lithium:modrinth]: https://modrinth.com/mod/lithium

[malilib:repo]: https://github.com/maruohon/malilib
[malilib:curseforge]: https://www.curseforge.com/minecraft/mc-mods/malilib/files

[MineLittlePony:repo]: https://github.com/minelittlepony/minelittlepony
[MineLittlePony:github]: https://github.com/MineLittlePony/MineLittlePony/releases
[MineLittlePony:website]: https://minelittlepony-mod.com/
[MineLittlePony:build-1.18]: mods/1.18/1.18-minelittlepony-4.4.0.jar

[MiniHUD:repo]: https://github.com/maruohon/minihud
[MiniHUD:curseforge]: https://www.curseforge.com/minecraft/mc-mods/minihud/files

[ModMenu:repo]: https://github.com/TerraformersMC/ModMenu
[ModMenu:github]: https://github.com/TerraformersMC/ModMenu/releases
[ModMenu:modrinth]: https://modrinth.com/mod/modmenu

[Ok Zoomer:repo]: https://github.com/joaoh1/OkZoomer/
[Ok Zoomer:github]: https://github.com/EnnuiL/OkZoomer/releases
[Ok Zoomer:modrinth]: https://modrinth.com/mod/ok-zoomer

[Physics Mod:website]: https://minecraftphysicsmod.com/

[Phosphor:repo]: https://github.com/CaffeineMC/phosphor-fabric
[Phosphor:github]: https://github.com/CaffeineMC/phosphor-fabric/releases

[Presence Footsteps:repo]: https://github.com/sollace/presence-footsteps
[Presence Footsteps:github]: https://github.com/Sollace/Presence-Footsteps/releases

[ReplayMod:repo]: https://github.com/ReplayMod/ReplayMod
[ReplayMod:website]: https://www.replaymod.com/download/

[Shulker Box Tooltip:repo]: https://github.com/MisterPeModder/ShulkerBoxTooltip
[Shulker Box Tooltip:github]: https://github.com/MisterPeModder/ShulkerBoxTooltip/releases

[Sodium:repo]: https://github.com/CaffeineMC/sodium-fabric
[Sodium:github]: https://github.com/CaffeineMC/sodium-fabric/releases
[Sodium:modrinth]: https://modrinth.com/mod/sodium

[TellMe:repo]: https://github.com/maruohon/tellme
[TellMe:curseforge]: https://www.curseforge.com/minecraft/mc-mods/tellme/files

[Tweakeroo:repo]: https://github.com/maruohon/tweakeroo
[Tweakeroo:curseforge]: https://www.curseforge.com/minecraft/mc-mods/tweakeroo/files

[Simple Voice Chat:repo]: https://github.com/henkelmax/simple-voice-chat
[Simple Voice Chat:curseforge]: https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files

[Void Fog:repo]: https://github.com/Sollace/Void-Fog
[Void Fog:github]: https://github.com/Sollace/Void-Fog/releases

<!-- RESOURCE PACKS -->

[Love & Tolerance:repo]: https://github.com/Love-and-Tolerance/Love-and-Tolerance
[Love & Tolerance:github]: https://github.com/Love-and-Tolerance/Love-and-Tolerance/releases

[turtlelang:repo]: https://github.com/autumnblazey/turtlelang
[turtlelang:github]: https://github.com/autumnblazey/turtlelang/releases
