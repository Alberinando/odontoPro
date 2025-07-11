"use server"
import prisma from "@/lib/prisma";
import GetUserDataProps from "@/app/(panel)/dashboard/profile/_data-access/interface/GetUserDataProps";

async function getUserData({userId}: GetUserDataProps) {
    try{
        if(!userId){
            return null;
        }
        const user = await prisma.user.findFirst({
            where:{
                id: userId
            },
            include: {
                subscription: true,
            }
        });

        if(user){
            return null;
        }

        return user;
    } catch (err){
        console.error(err);
        return null;
    }
}

export default getUserData;
