<template>
  <component 
    :is="tag" 
    :class="classes" 
    v-html="text"
  ></component>
</template>

<script>
import { TypographyEnum } from '~/constants/enums'
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: TypographyEnum.Body,
      validator(value) {
        return [
          TypographyEnum.Header1, 
          TypographyEnum.Header2, 
          TypographyEnum.Header3, 
          TypographyEnum.Subtitle, 
          TypographyEnum.Body,
          TypographyEnum.Emphasis,
          TypographyEnum.Bold,
          TypographyEnum.Small,
          TypographyEnum.Overline,
          TypographyEnum.ButtonText,
          TypographyEnum.Link,
        ].includes(value)
      }
    },
    text: {
      type: [String, Number],
      required: false,
    },
    tag: {
      type: String,
      required: false,
      default(rawProp) {
        const TagsDict = {
          [TypographyEnum.Header1]: 'h1', 
          [TypographyEnum.Header2]: 'h2',
          [TypographyEnum.Header3]: 'h3',
          [TypographyEnum.Subtitle]: 'h4',
          [TypographyEnum.Body]: 'p',
          [TypographyEnum.Bold]: 'strong',
          [TypographyEnum.Emphasis]: 'em',
          [TypographyEnum.Small]: 'small',
          [TypographyEnum.Overline]: 'h5',
          [TypographyEnum.ButtonText]: 'span',
          [TypographyEnum.Link]: 'span',
        };
        return rawProp ?? TagsDict[this.name]
      }
    },
    classes: {
      type: String,
      required: false,
      default(rawProp) {
        const classesDict = {
          [TypographyEnum.Header1]: 'font-montserrat text-5xl font-bold', 
          [TypographyEnum.Header2]: 'font-montserrat text-4xl font-bold', 
          [TypographyEnum.Header3]: 'font-montserrat text-3xl font-bold', 
          [TypographyEnum.Subtitle]: 'font-montserrat text-2xl font-medium', 
          [TypographyEnum.Body]: 'font-montserrat text-base',
          [TypographyEnum.bold]: 'font-montserrat text-base font-bold',
          [TypographyEnum.Emphasis]: 'font-montserrat text-base italic',
          [TypographyEnum.Small]: 'font-montserrat text-xs',
          [TypographyEnum.Overline]: 'font-montserrat text-xxs uppercase font-bold tracking-widest',
          [TypographyEnum.ButtonText]: 'font-montserrat text-sm uppercase font-bold tracking-wide',
          [TypographyEnum.Link]: 'font-montserrat text-base underline font-bold tracking-wider',
        };
        return rawProp ?? classesDict[this.name]
      }
    },
  },
}
</script>