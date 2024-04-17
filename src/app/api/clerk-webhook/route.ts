import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const body = await  req.json();
        console.log(body)

        const {id, email_addressess , first_name, image_url} = body?.data;

        const email = email_addressess?.[0]?.email_address

        await db.user.upsert({
            where: { clerkId: id },
            update: {
                email,
                name: first_name,
                profileImage: image_url
            },
            create: {
                clerkId: id,
                email,
                name: first_name || '',
                profileImage: image_url || ''
            }
        })
        return new NextResponse('User updated in database successfully' , {
            status: 200
        })
    } catch (error) {
        console.error('Error updating database' , error)
        return new NextResponse("Error updating user in database " , { status: 500 })
    }
}