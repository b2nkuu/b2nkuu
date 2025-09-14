<script setup lang="ts">
const informationStore = useInformationStore();
callOnce('contact', () =>  informationStore.fetch());
</script>

<template>
    <transition
    enter-active-class="transition-all delay-250 duration-750 ease-out"
    enter-from-class="opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100">
        <div v-if="informationStore.informationState" class="flex flex-row items-center text-white space-x-4 mb-10">
            <template v-for="(contact, index) in Object.values(informationStore.informationState.about.contact)" :key="contact.name">
                <span v-if="index !== 0">
                    •
                </span>
                <a :href="contact.link" target="_blank" rel="noopener noreferrer">
                    {{ contact.name }}
                </a>
            </template>
        </div>
    </transition>
</template>