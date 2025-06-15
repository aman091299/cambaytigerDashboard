
import { NextResponse } from 'next/server'

const protectedRoutes=['/','/products','/products/add','/request','/membership'];

export const middleware= (request)=>{
 try{
    console.log("inside middle ware")
    const path = request?.nextUrl?.pathname;
   const token = request.headers.get("authorization")?.split(" ")[1] || request.cookies.get("token")?.value;
   console.log("token...",token)
    if(protectedRoutes.includes(path) && ! token ){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
    
    return NextResponse.next();

 }catch(error){
    console.log("ERROR ",error);
 }
   

}

export const config={
    matcher:['/','/products/add','/products','/request','/membership']
}
