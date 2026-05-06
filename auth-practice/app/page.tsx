import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/core/auth/currentUser";
import Image from "next/image";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {user === null ? (
          <div className="flex gap-2">
            <Button>
              <a href="/login">Login</a>
            </Button>
            <Button>
              <a href="/signup">Sign up</a>
            </Button>
          </div>
        ) : (
          <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Welcome { user.name}!</CardTitle>
              <CardDescription>
                  { user.email}
              </CardDescription>
      
            </CardHeader>
            <CardContent>
              
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button variant={"destructive"} className="w-full">
                Logout
              </Button>
              <Button variant="outline" className="w-full">
                Private Page
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
}
