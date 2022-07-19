<template>
    <component :is="tagComputed" :class="classesComputed">
       {{ text }}
    </component>
</template>

<script>
import { TypographyConst } from '~/constants/design-system-constants'
export default {
    props: {
        name: {
            default: null,
            type: String,
            validator(value) {
                return [
                    'header-1', 
                    'header-2', 
                    'header-3', 
                    'subtitle', 
                    'body', 
                    'emphasis', 
                    'bold', 
                    'small', 
                    'pre-title', 
                    'button-text', 
                    'link', 
                ].includes(value)
            }
        },
        text: {
          default: null,
          type: String, 
        },
        tag: {
            default: null,
            type: String,
        },
        classes: {
            default: null,
            type: String,
        },
    },
    computed: {
        tagComputed() {
            if(this.tag) {
                return this.tag
            }
            switch(this.name) {
                case TypographyConst.Header1:
                    return 'h1'
                case TypographyConst.Header2:
                    return 'h2'
                case TypographyConst.Header3:
                    return 'h3'
                case TypographyConst.Subtitle:
                    return 'h4'
                case TypographyConst.Body:
                    return 'p'
                case TypographyConst.Emphasis:
                    return 'em'
                case TypographyConst.Bold:
                    return 'b'
                case TypographyConst.Small:
                    return 'small'
                case TypographyConst.Overline:
                    return 'h5'
                case TypographyConst.ButtonText:
                    return 'span'
                case TypographyConst.BoldLink:
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
                case TypographyConst.Header1:
                    return 'font-montserrat text-5xl font-bold'
                case TypographyConst.Header2:
                    return 'font-montserrat text-4xl font-bold'
                case TypographyConst.Header3:
                    return 'font-montserrat text-3xl font-bold'
                case TypographyConst.Subtitle:
                    return 'font-montserrat text-2xl font-medium'
                case TypographyConst.Body:
                    return 'font-montserrat text-base'
                case TypographyConst.Emphasis:
                    return 'font-montserrat text-base italic'
                case TypographyConst.Bold:
                    return 'font-montserrat text-base font-bold'
                case TypographyConst.Small:
                    return 'font-montserrat text-xs'
                case TypographyConst.Overline:
                    return 'font-montserrat text-xs uppercase font-bold tracking-widest'
                case TypographyConst.ButtonText:
                    return 'font-montserrat text-sm uppercase font-bold'
                case TypographyConst.BoldLink:
                    return 'font-montserrat text-base underline font-bold'
                default:
                    return 'font-montserrat text-base'
            }
        },
    },
}
</script>