<template>
  <component 
    :is="tagComputed" 
    :class="classesComputed" 
    v-html="text"
  ></component>
</template>

<script>
import { TypographyEnum } from '~/constants/enums'
export default {
    props: {
        name: Number,
        text: [String, Number],
        tag: String,
        classes: String,
    },
    computed: {
        tagComputed() {
            if(this.tag) {
                return this.tag
            }
            switch(this.name) {
                case TypographyEnum.Header1:
                    return 'h1'
                case TypographyEnum.Header2:
                    return 'h2'
                case TypographyEnum.Header3:
                    return 'h3'
                case TypographyEnum.Subtitle:
                    return 'h4'
                case TypographyEnum.Body:
                    return 'p'
                case TypographyEnum.Emphasis:
                    return 'em'
                case TypographyEnum.Bold:
                    return 'b'
                case TypographyEnum.Small:
                    return 'small'
                case TypographyEnum.Overline:
                    return 'h5'
                case TypographyEnum.ButtonText:
                    return 'span'
                case TypographyEnum.Link:
                    return 'span'
                default:
                    return 'p'
            }
        },
        classesComputed() {
            if(this.classes) {
                return this.classes
            }
            switch(this.name) {
                case TypographyEnum.Header1:
                    return 'font-montserrat text-5xl font-bold'
                case TypographyEnum.Header2:
                    return 'font-montserrat text-4xl font-bold'
                case TypographyEnum.Header3:
                    return 'font-montserrat text-3xl font-bold'
                case TypographyEnum.Subtitle:
                    return 'font-montserrat text-2xl font-medium'
                case TypographyEnum.Body:
                    return 'font-montserrat text-base'
                case TypographyEnum.Emphasis:
                    return 'font-montserrat text-base italic'
                case TypographyEnum.Bold:
                    return 'font-montserrat text-base font-bold'
                case TypographyEnum.Small:
                    return 'font-montserrat text-xs'
                case TypographyEnum.Overline:
                    return 'font-montserrat text-xs uppercase font-bold tracking-widest'
                case TypographyEnum.ButtonText:
                    return 'font-montserrat text-sm uppercase font-bold tracking-wider'
                case TypographyEnum.Link:
                    return 'font-montserrat text-base underline font-bold tracking-wider'
                default:
                    return 'font-montserrat text-base'
            }
        },
    },
}
</script>