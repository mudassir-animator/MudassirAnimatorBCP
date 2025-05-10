import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      (<CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
        tempoelementid="tempo-904d7905-0888-55da-81fa-f416f348f70c"
        className="tempo-904d7905-0888-55da-81fa-f416f348f70c">
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className) + " tempo-ad7c8f2c-972d-5e8d-9d48-4cde21c48b5e"}
          role="region"
          aria-roledescription="carousel"
          {...props}
          tempoelementid="tempo-ad7c8f2c-972d-5e8d-9d48-4cde21c48b5e">
          {children}
        </div>
      </CarouselContext.Provider>)
    );
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    (<div
      ref={carouselRef}
      className="overflow-hidden tempo-b276ed5c-7756-5198-a844-efb1dd66a2df"
      tempoelementid="tempo-b276ed5c-7756-5198-a844-efb1dd66a2df">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ) + " tempo-bfb9ddc9-a140-5e7b-8a7b-f71c6091d08f"}
        {...props}
        tempoelementid="tempo-bfb9ddc9-a140-5e7b-8a7b-f71c6091d08f" />
    </div>)
  );
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    (<div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ) + " tempo-dd2c0272-73fe-590d-8b9b-f8bf940d5eb3"}
      {...props}
      tempoelementid="tempo-dd2c0272-73fe-590d-8b9b-f8bf940d5eb3" />)
  );
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ) + " tempo-d07023eb-cd50-5b9d-99c5-787653bfbc1c"}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
      tempoelementid="tempo-d07023eb-cd50-5b9d-99c5-787653bfbc1c">
      <ArrowLeftIcon
        className="h-4 w-4 tempo-61858d89-2e3c-53fc-8c86-a5cb12a6f112"
        tempoelementid="tempo-61858d89-2e3c-53fc-8c86-a5cb12a6f112" />
      <span
        className="sr-only tempo-4b191960-40ec-5612-b1b5-a1934abce447"
        tempoelementid="tempo-4b191960-40ec-5612-b1b5-a1934abce447">Previous slide</span>
    </Button>)
  );
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ) + " tempo-4b82df2b-4ff7-5b2a-913f-5e2d14a976a5"}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
      tempoelementid="tempo-4b82df2b-4ff7-5b2a-913f-5e2d14a976a5">
      <ArrowRightIcon
        className="h-4 w-4 tempo-834b0cb3-e4f5-5b86-af66-9d131974e3cb"
        tempoelementid="tempo-834b0cb3-e4f5-5b86-af66-9d131974e3cb" />
      <span
        className="sr-only tempo-fd07838d-6715-512f-867b-585f16fcb791"
        tempoelementid="tempo-fd07838d-6715-512f-867b-585f16fcb791">Next slide</span>
    </Button>)
  );
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
