import { provide, SetupContext } from "vue"
import { ConfigProviderProps } from "./configProviderProps"
import { each } from "../../../utils"
import { ObjectLike } from "../../../../types/_common"
import { configPropertyMap, ConfigPropertyMap } from "../../../shared/configPropertyMap"
import { empty } from "../../../shared/commonProps"
import { localeProviderKey } from '../../../shared/localeProviderKey'

type ConfigPropertyItem = ConfigPropertyMap[keyof ConfigPropertyMap]

export function useConfigProvider(props: ConfigProviderProps, context?: SetupContext<{}>) {
  const provideProps: ObjectLike = {} // temp
  provide(localeProviderKey, props.locale)
  // components default value
  each<ConfigPropertyItem>(configPropertyMap, (item, propName) => {
    const currentProps = (props as ObjectLike)[propName]
    const tempProps: ObjectLike | undefined = currentProps ? {} : empty
    each<string>(item.propNames, (key) => {
      const value = (currentProps as ObjectLike)?.[key]
      if (value) {
        tempProps![key] = value
      }
    })
    if (tempProps) {
      provideProps[propName] = tempProps
      provide<ObjectLike>(item.key, tempProps)
    }
  })

  return context?.slots && (() => context.slots.default?.())
}
