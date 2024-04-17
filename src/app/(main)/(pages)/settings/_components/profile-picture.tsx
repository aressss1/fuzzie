'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import UploadCareButton from "./uploadcare-button";

type Props = {
    userImage: string | null;
    onDelete?: any
    onUpload?: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
    const router = useRouter()

    const onRemoveProfileImage = async () => {
        const response = await onDelete()

        if (response) {
            router.refresh()
        }
    }

    return (
        <div className="flex flex-col" >
            <p className="text-lg text-white" >
                Profile Picture
            </p>
            <div className="flex h-[30vh] flex-col items-center justify-center mt-4 " >
                {userImage ? (
                    <>
                        <div className="relative h-full w-2/12 self-baseline " >
                            <Image
                                src={userImage}
                                alt="UserImage"
                                fill
                            />
                        </div>
                        <Button
                            onClick={onRemoveProfileImage}
                            className=" self-baseline bg-transparent text-white/70 hover:bg-transparent hover:text-white py-4 "
                        >
                            <X /> Remove Image
                        </Button>
                    </>
                ) : (
                    <UploadCareButton  onUpload={onUpload} />
                )}
            </div>
        </div>
    );
}

export default ProfilePicture;