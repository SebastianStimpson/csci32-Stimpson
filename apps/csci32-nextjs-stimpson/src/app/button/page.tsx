import { Button } from '@repo/ui/button'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

export default function ButtonPage() {
  return (
    <div className="p-24 flex flex-col gap-4">
      <div className="flex gap-4">
        <Button size={Size.SMALL} variant={Variant.PRIMARY}>
          Primary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.PRIMARY}>
          Primary
        </Button>
        <Button size={Size.LARGE} variant={Variant.PRIMARY}>
          Primary
        </Button>
      </div>
      <div className="flex gap-4">
        <Button size={Size.SMALL} variant={Variant.SECONDARY}>
          Secondary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.SECONDARY}>
          Secondary
        </Button>
        <Button size={Size.LARGE} variant={Variant.SECONDARY}>
          Secondary
        </Button>
      </div>
      <div className="flex gap-4">
        <Button size={Size.SMALL} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
        <Button size={Size.LARGE} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
      </div>
    </div>
  )
}
