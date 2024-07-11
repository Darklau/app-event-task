import { LoaderPinwheelIcon } from 'lucide-react'

export const PreLoader = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <LoaderPinwheelIcon className="animate-spin duration-700" />
    </div>
  )
}
