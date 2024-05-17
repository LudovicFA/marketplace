import { UploadResponse } from "imagekit/dist/libs/interfaces"
import Image from "next/image"
import Link from "next/link"

const UploadThumbnail = ({file}: {file: UploadResponse}) => {
    if(file.fileType === 'image') {
        return (
            <Link href={file.url} target="_blank">
                <Image 
                    src={file.url+'?tr=w-100,h-100,fo-auto'} alt="Thumbnail" width={100} height={100} />

            </Link>
        )
    }
  return (
    <div>{file.url} - </div>
  )
}

export default UploadThumbnail