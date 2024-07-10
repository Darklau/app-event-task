import {useMemo} from "react";
import {cn} from "@/utils/cn";
import {Unit, UnitSuffix} from "@karibash/pixel-units";


type Props = {
    children?: React.ReactChild
    val: number
    bottom?: Unit<UnitSuffix>,
    top?: Unit<UnitSuffix>,
    right?: Unit<UnitSuffix>,
    left?: Unit<UnitSuffix>,
    size?: Unit<UnitSuffix>,
    className?: string
}

export const NotificationBadge = ({
                                      left,
                                      bottom,
                                      top,
                                      right,
                                      size = '20px',
                                      children,
                                      val,
                                      className
                                  }: Props) => {
    const style = useMemo(() => ({
        width: size,
        height: size,
        bottom,
        right,
        left,
        top
    }), [size, bottom, right, left, top])

    return (
        <div className="relative overflow-visible w-full h-full">
            {children}
            {val ?
                <span
                    style={style}
                    className={cn(
                        'bg-accent-main absolute pointer-events-none rounded-[50%] flex justify-center items-center text-[9px] leading-[100%] text-neutral-0',
                        className
                    )}>
          {val <= 99 ? val : '99+'}
        </span>
                : null}
        </div>
    )
}