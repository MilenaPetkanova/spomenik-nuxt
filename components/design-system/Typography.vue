<template>
    <component :is="tag" :class="classes">
        {{nameProp}}
    </component>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        nameProp: {
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
        tagProp: {
            default: null,
            type: String,
        },
        classesProp: {
            default: null,
            type: String,
        },
    },
    computed: {
        ...mapGetters("constants", ["typographyConst"]),
        tag() {
            if(this.tagProp) {
                return this.tagProp
            }
            switch(this.nameProp) {
                case this.typographyConst.Header1:
                    return 'h1'
                case this.typographyConst.Header2:
                    return 'h2'
                case this.typographyConst.Header3:
                    return 'h3'
                case this.typographyConst.Subtitle:
                    return 'h4'
                case this.typographyConst.Body:
                    return 'p'
                case this.typographyConst.Emphasis:
                    return 'em'
                case this.typographyConst.Bold:
                    return 'b'
                case this.typographyConst.Small:
                    return 'small'
                case this.typographyConst.PreTitle:
                    return 'h5'
                case this.typographyConst.ButtonText:
                    return 'span'
                case this.typographyConst.BoldLink:
                    return 'span'
                default:
                    return 'p'
            }
        },
        classes() {
            if(this.classesProp) {
                return this.classesProp
            }
            switch(this.nameProp) {
                case this.typographyConst.Header1:
                    return 'font-montserrat text-5xl'
                case this.typographyConst.Header2:
                    return 'font-montserrat text-4xl'
                case this.typographyConst.Header3:
                    return 'font-montserrat text-3xl'
                case this.typographyConst.Subtitle:
                    return 'font-montserrat text-2xl'
                case this.typographyConst.Body:
                    return 'font-montserrat text-base'
                case this.typographyConst.Emphasis:
                    return 'font-montserrat text-base italic'
                case this.typographyConst.Bold:
                    return 'font-montserrat text-base font-bold'
                case this.typographyConst.Small:
                    return 'font-montserrat text-xs'
                case this.typographyConst.PreTitle:
                    return 'font-montserrat text-xs uppercase'
                case this.typographyConst.ButtonText:
                    return 'font-montserrat text-sm uppercase'
                case this.typographyConst.BoldLink:
                    return 'font-montserrat text-base underline'
                default:
                    return 'font-montserrat text-base'
            }
        },
    },
    mounted() {
        console.log('this.typographyConst.Header3 :>> ', typeof(this.typographyConst.Header3))
    }
}
</script>