import { WidgetItem } from "@/components";
import { auth } from "../api/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">

        <WidgetItem title="Usuario conectado S-Side">
          {
            JSON.stringify( session.user )
          }
        </WidgetItem>

      </div>
  );
}
